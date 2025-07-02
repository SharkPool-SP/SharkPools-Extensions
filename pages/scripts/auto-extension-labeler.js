/*
  Find recent commits to extension files so the gallery knows
  what to label as 'new' or 'update'
*/

const getExpiryWeekMarker = () => {
  /* Update/New Tags will Expire in 2 Weeks */
  const now = Date.now();
  const twoWeeksAgo = new Date(now - 1209600000);
  return twoWeeksAgo.toISOString();
}

function checkCache() {
  /* '_cachedExtTags' is defined in 'startup.js' */
  if (typeof _cachedExtTags === "object") {
    if (!_cachedExtTags.expires) return undefined;

    const now = Date.now();
    if (now > _cachedExtTags.expires) return undefined;
    else if (Array.isArray(_cachedExtTags.tags)) return _cachedExtTags.tags;
  }
  return undefined;
}

async function getRecentFiles() {
  const cached = checkCache();
  if (cached) return cached;

  const repo = "SharkPool-SP/SharkPools-Extensions";
  const headers = { Accept: "application/vnd.github+json" };
  const expiryMarker = getExpiryWeekMarker();

  const commitsRes = await fetch(
    `https://api.github.com/repos/${repo}/commits?since=${expiryMarker}`, { headers }
  );
  if (!commitsRes.ok) {
    console.warn("Failed to fetch GitHub commits", commitsRes.status);
    return undefined;
  }

  const commits = await commitsRes.json();
  const files = new Set();
  let i = 0;
  for (const commit of commits) {
    if (i > 9) break; // dont be fetch greedy, max 10 automatic tags
    i++;

    const commitRes = await fetch(
      `https://api.github.com/repos/${repo}/commits/${commit.sha}`, { headers }
    );
    if (!commitsRes.ok) {
      console.warn("Failed to fetch GitHub commits", commitRes.status);
      return undefined;
    }
    const commitData = await commitRes.json();
    const commitDate = commitData.commit.committer.date.substring(0, 10);

    for (const file of commitData.files || []) {
      if (file.filename.startsWith("extension-code/")) files.add({
        ID: file.filename,
        date: commitDate,
        isNew: file.status === "added"
      });
    }
  }

  const results = [...files];

  // store the results in localStorage, this will expire in 2 days
  /* '_cachedExtTags' & 'updateStorage' is defined in 'startup.js' */
  _cachedExtTags = {
    expires: Date.now() + 172800000,
    tags: results
  };
  updateStorage();
  return results;
}

window.fetchAutoLabeler = getRecentFiles;
