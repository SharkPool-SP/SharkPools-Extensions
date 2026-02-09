// Name: SoundCloud API
// ID: SPsoundCloud
// Description: Fetch songs and statistics from SoundCloud.
// By: SharkPool
// License: MIT

// Version V.1.1.0

(function (Scratch) {
  "use strict";
  if (!Scratch.extensions.unsandboxed) throw new Error("SoundCloud API must be run unsandboxed");

  const menuIconURI =
"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMzIiIGhlaWdodD0iMjMyIiB2aWV3Qm94PSIwIDAgMjMyIDIzMiI+PGRlZnM+PGxpbmVhckdyYWRpZW50IHgxPSIyMzkuNjM0IiB5MT0iMzAzLjAwMSIgeDI9IjIzOS42MzQiIHkyPSI3MS4wMDEiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIiBpZD0iYSI+PHN0b3Agb2Zmc2V0PSIwIiBzdG9wLWNvbG9yPSIjYmM1ODAwIi8+PHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjYmMxOTAwIi8+PC9saW5lYXJHcmFkaWVudD48bGluZWFyR3JhZGllbnQgeDE9IjIzOS42MzQiIHkxPSI4My4wMDEiIHgyPSIyMzkuNjM0IiB5Mj0iMjkxLjAwMSIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiIGlkPSJiIj48c3RvcCBvZmZzZXQ9IjAiIHN0b3AtY29sb3I9IiNmZjc2MDAiLz48c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiNmMjAiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48cGF0aCBkPSJNMjM5LjYzNCA3MS4wMDFjNjQuMDY1IDAgMTE2IDUxLjkzNSAxMTYgMTE2cy01MS45MzUgMTE2LTExNiAxMTYtMTE2LTUxLjkzNS0xMTYtMTE2IDUxLjkzNS0xMTYgMTE2LTExNiIgZmlsbD0idXJsKCNhKSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTEyMy42MzQgLTcxLjAwMSkiLz48cGF0aCBkPSJNMTM1LjYzNCAxODcuMDAxYzAtNTcuNDM3IDQ2LjU2Mi0xMDQgMTA0LTEwNHMxMDQgNDYuNTYzIDEwNCAxMDRjMCA1Ny40MzgtNDYuNTYyIDEwNC0xMDQgMTA0cy0xMDQtNDYuNTYyLTEwNC0xMDQiIGZpbGw9InVybCgjYikiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0xMjMuNjM0IC03MS4wMDEpIi8+PHBhdGggZD0iTTM1LjAyIDExMC40NzNjLjM4NyAwIC42OTIuMzA1Ljc1My43MzNsMi4wMTMgMTYuMTY3LTIuMDEzIDE1LjgyMmMtLjA2MS40MjctLjM2Ni43MzItLjc1My43MzItLjM4NiAwLS42OTEtLjMwNS0uNzUyLS43MzJsLTEuNzctMTUuODIyIDEuNzctMTYuMTY4Yy4wNi0uNDI3LjM2Ni0uNzMyLjc1Mi0uNzMybS02LjY1IDYuMjAzYy4zNjYgMCAuNjcxLjI4NS43MTIuNjkxbDEuNTY2IDEwLjAwNi0xLjU2NiA5Ljg0M2MtLjA0LjQwNy0uMzQ2LjY5MS0uNzEyLjY5MS0uMzg2IDAtLjY3MS0uMjg0LS43MzItLjY5MWwtMS4zMjItOS44MjMgMS4zMjItMTAuMDA1Yy4wNjEtLjQyNy4zNjYtLjcxMi43MzItLjcxMm0xMy43NDgtOS4zNzVjLjQ2NyAwIC44MzMuMzY2Ljg5NC45MTVsMS45MTIgMTkuMTc3LTEuOTEyIDE4LjQ4NmMtLjA0LjUwOS0uNDI3Ljg3NS0uODk0Ljg3NS0uNDY4IDAtLjg1NS0uMzg3LS44OTUtLjg5NWwtMS42ODgtMTguNDg2IDEuNjg4LTE5LjE3N2MuMDQtLjUyOS40MjctLjg5NS44OTUtLjg5NW03LjExOC0uNjcyYy41NDggMCAuOTk2LjQ0OCAxLjA1NyAxLjAxOGwxLjgxIDE5LjcyNi0xLjgxIDE5LjA3NmMtLjA2MS41OS0uNTA5IDEuMDM3LTEuMDU4IDEuMDM3cy0xLjAxNi0uNDQ4LTEuMDU3LTEuMDM3bC0xLjU4Ni0xOS4wNzYgMS41ODYtMTkuNzA2Yy4wNC0uNTkuNTA4LTEuMDM3IDEuMDU3LTEuMDM3bTEwLjEwOCAyMC43NjMtMS43MDkgMTkuMjE4Yy0uMDQuNjkyLS41NDkgMS4yLTEuMiAxLjJzLTEuMTgtLjUyOS0xLjIyLTEuMmwtMS41MDUtMTkuMjE4IDEuNTA1LTE4LjI4MmMuMDQtLjY5Mi41Ny0xLjIgMS4yMi0xLjIuNjMgMCAxLjE2LjUwOCAxLjIgMS4xOHptNC4zMzEtMzEuMTE0Yy43MTIgMCAxLjMyMi41OSAxLjM2MyAxLjM0MmwxLjU4NiAyOS43NTItMS41ODYgMTkuMjE4Yy0uMDQuNzUyLS42NTEgMS4zNDItMS4zNjMgMS4zNDItLjczMiAwLTEuMzIyLS41OS0xLjM2Mi0xLjM0MmwtMS40MDQtMTkuMjE4IDEuNDA0LTI5Ljc1MmMuMDQtLjc1My42My0xLjM0MiAxLjM2Mi0xLjM0Mm03LjE5OS02Ljg1NGMuNzkzIDAgMS40NjUuNjcxIDEuNTI2IDEuNDg1bDEuNDg0IDM2LjU2NS0xLjQ4NCAxOS4xMTZjLS4wNDEuODU0LS43MTIgMS41MDUtMS41MjYgMS41MDUtLjgzMyAwLTEuNDg0LS42NzEtMS41MjUtMS41MDVsLTEuMzIyLTE5LjA5NiAxLjMyMi0zNi41NjVjLjA0LS44NTQuNzEyLTEuNTA1IDEuNTI1LTEuNTA1bTcuNDYzLTMuMjk0Yy44OTYgMCAxLjYyOC43MzIgMS42NjggMS42ODhsMS4zODMgMzkuNjE1LTEuMzgzIDE4LjkxM3YtLjAyYy0uMDQuOTE1LS43NzIgMS42NDctMS42NjcgMS42NDdhMS42NyAxLjY3IDAgMCAxLTEuNjY4LTEuNjQ3bC0xLjIyLTE4LjkxMyAxLjIyLTM5LjYxNmMuMDItLjkzNS43NTMtMS42NjcgMS42NjgtMS42NjdtMTAuNTM0IDQxLjI2Mi0xLjI4MSAxOC43OTFjLS4wNCAxLjAxNy0uODM0IDEuODEtMS44MyAxLjgxcy0xLjc5LS44MTMtMS44My0xLjgxbC0xLjE0LTE4Ljc5IDEuMTQtNDAuOTM4Yy4wNC0xLjAxNy44MzMtMS44MSAxLjgzLTEuODEuOTk2IDAgMS43OS43OTMgMS44MyAxLjgxem00LjM3Mi00MS44NTJjMS4wNzggMCAxLjkzMi44NTQgMS45NzMgMS45NTJsMS4xOCAzOS45LTEuMTggMTguNjI5di0uMDJjLS4wMiAxLjA5Ny0uODk1IDEuOTcyLTEuOTczIDEuOTcyYTEuOTcgMS45NyAwIDAgMS0xLjk3Mi0xLjk1MmwtMS4wMzctMTguNjA4IDEuMDM3LTM5LjljLjAyLTEuMTE5Ljg5NS0xLjk3MyAxLjk3Mi0xLjk3M203LjU0NSAxLjMwMWMxLjE2IDAgMi4wOTUuOTM2IDIuMTM2IDIuMTE1bDEuMDc3IDM4LjQzNi0xLjA3NyAxOC41MDd2LS4wMmEyLjE0NCAyLjE0NCAwIDAgMS0yLjEzNiAyLjExNCAyLjEzIDIuMTMgMCAwIDEtMi4xMzUtMi4xMTVsLS45NTYtMTguNDg2Ljk1Ni0zOC40MzZhMi4xMyAyLjEzIDAgMCAxIDIuMTM1LTIuMTE1bTguODQ3LTcuMDc3YTIuNDggMi40OCAwIDAgMSAxLjA1NyAxLjg5MmwuOTU2IDQ1LjczNi0uODc1IDE2LjU1NC0uMTAxIDEuODFjLS4wMi42My0uMjg1IDEuMi0uNjkyIDEuNjA3LS40MjcuNDA2LS45NzYuNjctMS42MDYuNjctLjcxMiAwLTEuMzIyLS4zMjUtMS43NS0uODMzYTIuMyAyLjMgMCAwIDEtLjUyOC0xLjM2MnYtLjA4MmwtLjg1NC0xOC4zODQuODU0LTQ1LjI5di0uNDI2YTIuMzQgMi4zNCAwIDAgMSAxLjA1OC0xLjkxMiAyLjI3IDIuMjcgMCAwIDEgMS4yMi0uMzY2Yy40NjggMCAuODk1LjE0MiAxLjI2LjM4Nm03LjU2Ni00LjMzMWMuNjkxLjQyNyAxLjE4IDEuMiAxLjIgMi4wNTRsMS4wNzcgNDkuOTA1LTEuMDc3IDE4LjF2LS4wMmMtLjAyIDEuMzQyLTEuMTE5IDIuNDQtMi40NCAyLjQ0LTEuMzIzIDAtMi40Mi0xLjA5OC0yLjQ0MS0yLjQybC0uNDg4LTguOTI4LS41MDktOS4xNzIuOTk3LTQ5LjY0MXYtLjI0NGMwLS43NTIuMzY2LTEuNDI0Ljg5NS0xLjg3MWEyLjQzIDIuNDMgMCAwIDEgMi43ODYtLjIwM202Ny4wNDkgMjguMzY5YzEyLjI0MyAwIDIyLjE2NyA5LjkwNCAyMi4xNjcgMjIuMTI2IDAgMTIuMjQzLTkuOTI0IDIyLjA0NS0yMi4xNDcgMjIuMDQ1aC02MS4zOTVjLTEuMzIyLS4xMjItMi4zOC0xLjE4LTIuNC0yLjU0MlY3NS4xNDljLjAyLTEuMjgxLjQ2OC0xLjk1MiAyLjEzNS0yLjYwM2EzOS42IDM5LjYgMCAwIDEgMTQuMTc1LTIuNjQ0YzIwLjM5NyAwIDM3LjEzNCAxNS42NiAzOC45MDMgMzUuNjFhMjIuMiAyMi4yIDAgMCAxIDguNTYyLTEuNzA5IiBmaWxsPSIjZmZmIi8+PC9zdmc+";
  const blockIconURI =
"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxODAuMSIgaGVpZ2h0PSI3OC4xOTQiIHZpZXdCb3g9IjAgMCAxODAuMSA3OC4xOTQiPjxwYXRoIGQ9Ik04LjcwNCA0MC41NzFjLjM4NyAwIC42OTIuMzA1Ljc1My43MzNsMi4wMTMgMTYuMTY3LTIuMDEzIDE1LjgyMmMtLjA2MS40MjctLjM2Ni43MzItLjc1My43MzItLjM4NiAwLS42OTEtLjMwNS0uNzUyLS43MzJsLTEuNzctMTUuODIyIDEuNzctMTYuMTY3Yy4wNi0uNDI4LjM2Ni0uNzMzLjc1Mi0uNzMzbS02LjY1IDYuMjAzYy4zNjYgMCAuNjcxLjI4NS43MTIuNjkxbDEuNTY2IDEwLjAwNi0xLjU2NiA5Ljg0M2MtLjA0LjQwNy0uMzQ2LjY5MS0uNzEyLjY5MS0uMzg2IDAtLjY3MS0uMjg0LS43MzItLjY5MUwwIDU3LjQ5MWwxLjMyMi0xMC4wMDVjLjA2MS0uNDI3LjM2Ni0uNzEyLjczMi0uNzEybTEzLjc0OC05LjM3NWMuNDY3IDAgLjgzMy4zNjYuODk0LjkxNWwxLjkxMiAxOS4xNzctMS45MTIgMTguNDg2Yy0uMDQuNTA5LS40MjcuODc1LS44OTQuODc1LS40NjggMC0uODU1LS4zODctLjg5NS0uODk1bC0xLjY4OC0xOC40ODYgMS42ODgtMTkuMTc3Yy4wNC0uNTI5LjQyNy0uODk1Ljg5NS0uODk1bTcuMTE4LS42NzJjLjU0OCAwIC45OTYuNDQ4IDEuMDU3IDEuMDE4bDEuODEgMTkuNzI2LTEuODEgMTkuMDc2Yy0uMDYxLjU5LS41MDkgMS4wMzctMS4wNTggMS4wMzdzLTEuMDE2LS40NDgtMS4wNTctMS4wMzdsLTEuNTg2LTE5LjA3NiAxLjU4Ni0xOS43MDZjLjA0LS41OS41MDgtMS4wMzcgMS4wNTctMS4wMzdtMTAuMTA4IDIwLjc2My0xLjcwOSAxOS4yMThjLS4wNC42OTItLjU0OSAxLjItMS4yIDEuMnMtMS4xOC0uNTI5LTEuMjItMS4ybC0xLjUwNS0xOS4yMTggMS41MDUtMTguMjgyYy4wNC0uNjkyLjU3LTEuMiAxLjIyLTEuMi42MyAwIDEuMTYuNTA4IDEuMiAxLjE4em00LjMzMS0zMS4xMTRjLjcxMiAwIDEuMzIyLjU5IDEuMzYzIDEuMzQybDEuNTg2IDI5Ljc1Mi0xLjU4NiAxOS4yMThjLS4wNC43NTItLjY1MSAxLjM0Mi0xLjM2MyAxLjM0Mi0uNzMyIDAtMS4zMjItLjU5LTEuMzYyLTEuMzQybC0xLjQwNC0xOS4yMTggMS40MDQtMjkuNzUyYy4wNC0uNzUzLjYzLTEuMzQyIDEuMzYyLTEuMzQybTcuMTk5LTYuODU0Yy43OTMgMCAxLjQ2NS42NzEgMS41MjYgMS40ODVsMS40ODQgMzYuNTY1LTEuNDg0IDE5LjExNmMtLjA0MS44NTQtLjcxMiAxLjUwNS0xLjUyNiAxLjUwNS0uODMzIDAtMS40ODQtLjY3MS0xLjUyNS0xLjUwNUw0MS43MSA1Ny41OTNsMS4zMjItMzYuNTY1Yy4wNC0uODU0LjcxMi0xLjUwNSAxLjUyNS0xLjUwNW03LjQ2My0zLjI5NGMuODk2IDAgMS42MjguNzMyIDEuNjY4IDEuNjg4bDEuMzgzIDM5LjYxNS0xLjM4MyAxOC45MTN2LS4wMmMtLjA0LjkxNS0uNzcyIDEuNjQ3LTEuNjY3IDEuNjQ3YTEuNjcgMS42NyAwIDAgMS0xLjY2OC0xLjY0N2wtMS4yMi0xOC45MTMgMS4yMi0zOS42MTZjLjAyLS45MzUuNzUzLTEuNjY3IDEuNjY4LTEuNjY3bTEwLjUzNCA0MS4yNjItMS4yODEgMTguNzkxYy0uMDQgMS4wMTctLjgzNCAxLjgxLTEuODMgMS44MXMtMS43OS0uODEzLTEuODMtMS44MWwtMS4xNC0xOC43OSAxLjE0LTQwLjkzOGMuMDQtMS4wMTcuODMzLTEuODEgMS44My0xLjgxLjk5NiAwIDEuNzkuNzkzIDEuODMgMS44MXptNC4zNzItNDEuODUyYzEuMDc4IDAgMS45MzIuODU0IDEuOTczIDEuOTUybDEuMTggMzkuOUw2OC45IDc2LjEydi0uMDJjLS4wMiAxLjA5Ny0uODk1IDEuOTcyLTEuOTczIDEuOTcyYTEuOTcgMS45NyAwIDAgMS0xLjk3Mi0xLjk1MmwtMS4wMzctMTguNjA4IDEuMDM3LTM5LjljLjAyLTEuMTE5Ljg5NS0xLjk3MyAxLjk3Mi0xLjk3M203LjU0NSAxLjMwMWMxLjE2IDAgMi4wOTUuOTM2IDIuMTM2IDIuMTE1bDEuMDc3IDM4LjQzNi0xLjA3NyAxOC41MDd2LS4wMmEyLjE0NCAyLjE0NCAwIDAgMS0yLjEzNiAyLjExNCAyLjEzIDIuMTMgMCAwIDEtMi4xMzUtMi4xMTVsLS45NTYtMTguNDg2Ljk1Ni0zOC40MzZhMi4xMyAyLjEzIDAgMCAxIDIuMTM1LTIuMTE1bTguODQ3LTcuMDc3YTIuNDggMi40OCAwIDAgMSAxLjA1NyAxLjg5MmwuOTU2IDQ1LjczNi0uODc1IDE2LjU1NC0uMTAxIDEuODFjLS4wMi42My0uMjg1IDEuMi0uNjkyIDEuNjA3LS40MjcuNDA2LS45NzYuNjctMS42MDYuNjctLjcxMiAwLTEuMzIyLS4zMjUtMS43NS0uODMzYTIuMyAyLjMgMCAwIDEtLjUyOC0xLjM2MnYtLjA4MmwtLjg1NC0xOC4zODQuODU0LTQ1LjI5di0uNDI2YTIuMzQgMi4zNCAwIDAgMSAxLjA1OC0xLjkxMiAyLjI3IDIuMjcgMCAwIDEgMS4yMi0uMzY2Yy40NjggMCAuODk1LjE0MiAxLjI2LjM4Nm03LjU2Ni00LjMzMWMuNjkxLjQyNyAxLjE4IDEuMiAxLjIgMi4wNTRsMS4wNzcgNDkuOTA1LTEuMDc3IDE4LjF2LS4wMmMtLjAyIDEuMzQyLTEuMTE5IDIuNDQtMi40NCAyLjQ0LTEuMzIzIDAtMi40Mi0xLjA5OC0yLjQ0MS0yLjQybC0uNDg4LTguOTI4LS41MDktOS4xNzIuOTk3LTQ5LjY0MXYtLjI0NGMwLS43NTIuMzY2LTEuNDI0Ljg5NS0xLjg3MWEyLjQzIDIuNDMgMCAwIDEgMi43ODYtLjIwM202Ny4wNDkgMjguMzY5YzEyLjI0MyAwIDIyLjE2NyA5LjkwNCAyMi4xNjcgMjIuMTI2IDAgMTIuMjQzLTkuOTI0IDIyLjA0NS0yMi4xNDcgMjIuMDQ1SDk2LjU1OGMtMS4zMjItLjEyMi0yLjM4LTEuMTgtMi40LTIuNTQyVjUuMjQ3Yy4wMi0xLjI4MS40NjgtMS45NTIgMi4xMzUtMi42MDNBMzkuNiAzOS42IDAgMCAxIDExMC40NjggMGMyMC4zOTcgMCAzNy4xMzQgMTUuNjYgMzguOTAzIDM1LjYxYTIyLjIgMjIuMiAwIDAgMSA4LjU2Mi0xLjcwOSIgZmlsbD0iI2ZmZiIvPjwvc3ZnPg==";

  const Cast = Scratch.Cast;
  const vm = Scratch.vm;

  /*
    We must use a proxy since the SoundCloud API does not work outside SoundCloud origins.

    To prevent server stress, we will cache fetch results.
    I love this proxy and it has always been reliable and exceptional.
  */
  const proxy = "https://api.codetabs.com/v1/proxy?quest="

  const SoundCloudAPI = "https://api-v2.soundcloud.com/";
  const baseSoundCloudUrl = "https://soundcloud.com/";

  const cloudCache_ = new Map();

  const setCache = (id, value) => {
    // cache expires in 3 minutes
    cloudCache_.set(id, {
      expires: Date.now() + (180 * 1000),
      value: value
    });
  };

  const getCache = (id) => {
    if (cloudCache_.has(id)) {
      const item = cloudCache_.get(id);
      if (Date.now() > item.expires) {
        cloudCache_.delete(id);
      }

      return item.value;
    }

    return null;
  };

  const genMenuItem = (text, value, opt_pathValue) => {
    const item = {
      text: Scratch.translate(text),
      value: value ?? text
    };
    if (opt_pathValue) item.path = opt_pathValue;

    return item;
  };

  let clientID = "BecG5WJDDxYMffAfWcjJleNqrGyJyZhI";

  const TRACK_ATTRIBUTES = [
    genMenuItem("name", null, "title"),
    genMenuItem("artist", null, ["user", "username"]),
    genMenuItem("artist ID", null, "user_id"),
    genMenuItem("description", null, "description"),
    genMenuItem("cover", null, "artwork_url"),
    genMenuItem("release date", null, "created_at"),
    genMenuItem("formatted duration", null, "duration"),
    genMenuItem("duration", null, "duration"),
    genMenuItem("downloadable", null, "downloadable"),
    genMenuItem("plays", null, "playback_count"),
    genMenuItem("likes", null, "likes_count"),
    genMenuItem("comment count", null, "comment_count"),
    genMenuItem("genre", null, "genre"),
    genMenuItem("url", null, "permalink_url")
  ];
  const ARTIST_ATTRIBUTES = [
    genMenuItem("username", null, "username"),
    genMenuItem("description", null, "description"),
    genMenuItem("profile picture", null, "avatar_url"),
    genMenuItem("join date", null, "created_at"),
    genMenuItem("track count", null, "track_count"),
    genMenuItem("follower count", null, "followers_count"),
    genMenuItem("following count", null, "followings_count"),
    genMenuItem("url", null, "permalink_url")
  ];

  /*
    We try to cache artist information on track fetches, however,
    the data fetched does not contain all relevant artist information.
  */
  const STRONG_ARTIST_ATTS = [
    "description", "created_at",
    "followings_count", "track_count"
  ];

  vm.runtime.on("PROJECT_START", () => {
    cloudCache_.clear();
  });

  const color1 = "#ff2200";

  class SPsoundCloud {
    getInfo() {
      return {
        id: "SPsoundCloud",
        name: "SoundCloud API",
        color1,
        color2: "#db1b00",
        color3: "#c02300",
        menuIconURI,
        blockIconURI,
        blocks: [
          {
            opcode: "setClient",
            blockType: Scratch.BlockType.COMMAND,
            text: Scratch.translate("set client ID to [ID]"),
            arguments: {
              ID: { type: Scratch.ArgumentType.STRING, defaultValue: clientID }
            }
          },
          {
            opcode: "getClientID",
            blockType: Scratch.BlockType.REPORTER,
            text: Scratch.translate("client ID")
          },
          {
            blockType: Scratch.BlockType.LABEL,
            text: Scratch.translate("Client ID must work for functionality")
          },
          {
            opcode: "testClient",
            blockType: Scratch.BlockType.BOOLEAN,
            disableMonitor: true,
            text: Scratch.translate("test client ID")
          },
          "---",
          {
            opcode: "extractID",
            blockType: Scratch.BlockType.REPORTER,
            text: Scratch.translate("ID of [THING] from url [URL]"),
            arguments: {
              THING: { type: Scratch.ArgumentType.STRING, menu: "IDS" },
              URL: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: "https://soundcloud.com/"
              }
            }
          },
          { blockType: Scratch.BlockType.LABEL, text: Scratch.translate("Tracks") },
          {
            opcode: "getTrackAtt",
            blockType: Scratch.BlockType.REPORTER,
            text: Scratch.translate("get [THING] from track ID [ID]"),
            arguments: {
              THING: {
                type: Scratch.ArgumentType.STRING,
                menu: "TRACKS"
              },
              ID: { type: Scratch.ArgumentType.NUMBER, defaultValue: 241049935 }
            }
          },
          {
            opcode: "getTrackMp3",
            blockType: Scratch.BlockType.REPORTER,
            text: Scratch.translate("get mp3 of track ID [ID]"),
            arguments: {
              ID: { type: Scratch.ArgumentType.NUMBER, defaultValue: 241049935 }
            }
          },
          {
            opcode: "getTrackComment",
            blockType: Scratch.BlockType.REPORTER,
            text: Scratch.translate("get [NUM2] offset [NUM1] of [TYPE] comments from track ID [ID]"),
            arguments: {
              TYPE: { type: Scratch.ArgumentType.STRING, menu: "COMMENT" },
              ID: { type: Scratch.ArgumentType.NUMBER, defaultValue: 241049935 },
              NUM1: { type: Scratch.ArgumentType.NUMBER, defaultValue: 0 },
              NUM2: { type: Scratch.ArgumentType.NUMBER, defaultValue: 20 }
            },
          },
          {
            opcode: "searchTracks",
            blockType: Scratch.BlockType.REPORTER,
            text: Scratch.translate("search for tracks using query [QUERY]"),
            arguments: {
              QUERY: { type: Scratch.ArgumentType.STRING, defaultValue: "Ancient Visions" }
            }
          },
          { blockType: Scratch.BlockType.LABEL, text: Scratch.translate("Artists") },
          {
            opcode: "getArtistAtt",
            blockType: Scratch.BlockType.REPORTER,
            text: Scratch.translate("get [THING] from artist ID [ID]"),
            arguments: {
              THING: { type: Scratch.ArgumentType.STRING, menu: "ARTISTS" },
              ID: { type: Scratch.ArgumentType.NUMBER, defaultValue: 127123168 }
            }
          },
          {
            opcode: "getFollowers",
            blockType: Scratch.BlockType.REPORTER,
            text: Scratch.translate("get [NUM2] offset [NUM1] of followers from artist ID [ID]"),
            arguments: {
              ID: { type: Scratch.ArgumentType.NUMBER, defaultValue: 127123168 },
              NUM1: { type: Scratch.ArgumentType.NUMBER, defaultValue: 0 },
              NUM2: { type: Scratch.ArgumentType.NUMBER, defaultValue: 20 }
            },
          },
          {
            opcode: "getTracks",
            blockType: Scratch.BlockType.REPORTER,
            text: Scratch.translate("get [NUM2] offset [NUM1] of tracks from artist ID [ID]"),
            arguments: {
              ID: { type: Scratch.ArgumentType.NUMBER, defaultValue: 127123168 },
              NUM1: { type: Scratch.ArgumentType.NUMBER, defaultValue: 0 },
              NUM2: { type: Scratch.ArgumentType.NUMBER, defaultValue: 20 }
            },
          },
          {
            opcode: "searchArtists",
            blockType: Scratch.BlockType.REPORTER,
            text: Scratch.translate("search for artists using query [QUERY]"),
            arguments: {
              QUERY: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: "Aliantos"
              }
            }
          },
        ],
        menus: {
          TRACKS: { acceptReporters: true, items: TRACK_ATTRIBUTES },
          ARTISTS: { acceptReporters: true, items: ARTIST_ATTRIBUTES },
          IDS: {
            acceptReporters: true,
            items: [genMenuItem("track"), genMenuItem("artist")]
          },
          COMMENT: {
            acceptReporters: true,
            items: [genMenuItem("new"), genMenuItem("old")]
          }
        },
      };
    }

    // Helper Funcs
    _getAttributeProp(type, value) {
      const menu = type === "artist" ? ARTIST_ATTRIBUTES : TRACK_ATTRIBUTES;
      value = Cast.toString(value);

      const item = menu.find(i => i.value === value);
      if (item) return item.path ? item : item.value;
      return null;
    }

    async _fetch(url, cacheKey) {
      const cached = getCache(cacheKey);
      if (cached) return cached;

      try {
        if (await Scratch.canFetch(url)) {
          // eslint-disable-next-line
          const response = await fetch(proxy + encodeURIComponent(url));
          if (!response.ok) return null;

          const json = await response.json();
          if (cacheKey) setCache(cacheKey, json);
          return json;
        }

        return null;
      } catch(e) {
        console.warn("SoundCloud Error: " + e);
        return null;
      }
    }

    _formatDuration(milli) {
      let formattedTime = "";

      let seconds = Math.floor(milli / 1000);
      formattedTime += Math.floor(seconds / 3600) + ":";
      seconds %= 3600;

      formattedTime += String(Math.floor(seconds / 60)).padStart(2, "0") + ":";
      formattedTime += String(seconds % 60).padStart(2, "0");
      return formattedTime;
    }

    _returnJSON(json) {
      // JSON and Array compatibility
      return vm.extensionManager._loadedExtensions.has("SPjson") ?
        json : JSON.stringify(json);
    }

    _recursiveCache(collection) {
      if (!Array.isArray(collection)) return;
      for (const item of collection) {
        if (item.kind === "comment" || item.kind === "user") {
          setCache("A" + (item.user_id ?? item.id), item.user ?? item);
        } else {
          setCache("T" + item.id, item);
        }
      }
    }

    _cleanupCollection(type, collection) {
      return collection.map((item) => {
        if (type === "comment") {
          return {
            body: item.body,
            created_at: item.created_at,
            user_id: item.user_id
          };
        } else {
          return item.id;
        }
      });
    }

    async _getCollection(type, args) {
      const id = Cast.toString(args.ID ?? args.QUERY);
      const offset = Math.max(0, Math.min(500, Cast.toNumber(args.NUM1)));
      const limit = Math.max(1, Math.min(500, Cast.toNumber(args.NUM2)));

      let url = SoundCloudAPI;
      switch (type[0]) {
        case "comment": {
          const type = Cast.toString(args.TYPE) === "new" ? "newest" : "oldest";
          url += `tracks/${id}/comments?sort=${type}&threaded=1&`;
          break;
        }
        case "followers":
          url += `users/${id}/followers?`;
          break;
        case "tracks":
          url += `users/${id}/tracks?representation=1&`;
          break;
        case "searchT":
          url += `search/tracks?q=${id}&`;
          break;
        case "searchA":
          url += `search/users?q=${id}&`;
          break;
      }
      url += `limit=${limit}&offset=${offset}&client_id=${clientID}`;

      const response = await this._fetch(url, type[1] + id);
      if (response) {
        const collection = response.collection ?? [];
        this._recursiveCache(collection);

        return this._returnJSON(
          this._cleanupCollection(type[0], structuredClone(collection))
        );
      }

      return `["fetch failed"]`;
    }

    // Block Funcs
    setClient(args) {
      clientID = Cast.toString(args.ID);
    }

    getClientID() {
      return clientID;
    }

    async testClient() {
      const url = `https://api-auth.soundcloud.com/oauth/session?client_id=${clientID}`;
      const response = await this._fetch(url, null);
      return response ? response.session !== undefined : false;
    }

    async extractID(args) {
      const type = Cast.toString(args.THING) === "track" ? "T" : "A";
      const songUrl = Cast.toString(args.URL);
      if (songUrl === baseSoundCloudUrl) return "";

      const url = `${SoundCloudAPI}resolve?url=${encodeURIComponent(songUrl)}&client_id=${clientID}`;
      const response = await this._fetch(url, null);
      if (response) {
        const id = response.id;
        setCache(type + id, response);
        return id ?? "";
      }

      return "";
    }

    async getTrackAtt(args) {
      const attrib = this._getAttributeProp("track", Cast.toString(args.THING));
      if (!attrib) return "";

      const id = Cast.toString(args.ID);
      const url = `${SoundCloudAPI}tracks/soundcloud:tracks:${id}?client_id=${clientID}`;
      const response = await this._fetch(url, "T" + id);
      if (response) {
        // cache the track artist
        const artistCache = getCache("A" + response.user_id);
        if (!artistCache) setCache("A" + response.user_id, response.user);

        let value;
        if (Array.isArray(attrib.path)) {
          value = response;
          for (const path of attrib.path) {
            value = value[path];
          }
        } else {
          value = response[attrib.path];
        }

        if (attrib.value === "formatted duration") {
          value = this._formatDuration(value);
        }
        return value ?? "";
      }

      return "fetch failed";
    }

    async getTrackMp3(args) {
      const id = Cast.toString(args.ID);
      const url = `${SoundCloudAPI}tracks/soundcloud:tracks:${id}?client_id=${clientID}`;

      const response = await this._fetch(url, "T" + id);
      if (response) {
        if (!response.downloadable) return "";

        const media = response.media.transcodings;
        const mediaData = media.find((m) => m.format.mime_type === "audio/mpeg" && m.format.protocol === "progressive");
        if (mediaData) {
          const mp3Links = await this._fetch(mediaData.url + `?client_id=${clientID}`, "TS" + id);
          return mp3Links?.url ?? "";
        }
      }

      return "fetch failed";
    }

    async getTrackComment(args) {
      return await this._getCollection(
        ["comment", "C"],
        args
      );
    }

    async searchTracks(args) {
      return await this._getCollection(
        ["searchT", "ST"],
        args
      );
    }

    async getArtistAtt(args) {
      const attrib = this._getAttributeProp("artist", Cast.toString(args.THING));
      if (!attrib) return "";

      const id = Cast.toString(args.ID);
      const url = `${SoundCloudAPI}users/soundcloud:users:${id}?client_id=${clientID}`;
      const response = await this._fetch(url, "A" + id);
      if (response) {
        const value = response[attrib.path];
        if (!value && STRONG_ARTIST_ATTS.includes(attrib.path)) {
          cloudCache_.delete("A" + id);
          return await this.getArtistAtt(args);
        }

        return value ?? "";
      }

      return "fetch failed";
    }

    async getFollowers(args) {
      return await this._getCollection(
        ["followers", "AF"],
        args
      );
    }

    async getTracks(args) {
      return await this._getCollection(
        ["tracks", "AT"],
        args
      );
    }

    async searchArtists(args) {
      return await this._getCollection(
        ["searchA", "SA"],
        args
      );
    }
  }

  if (Scratch.gui) Scratch.gui.getBlockly().then((SB) => {
    function add2Body() {
      const grad = document.querySelector(`div[class="SPgradCache"]`) || document.createElement("div");
      grad.setAttribute("class", "SPgradCache");
      grad.innerHTML = `
        ${grad.innerHTML}
        <svg><defs>
          <linearGradient x1="240" y1="0" x2="240" y2="100" gradientUnits="userSpaceOnUse" id="SPsoundCloud-GRAD">
          <stop offset="0" stop-color="#ff7600"/><stop offset="0.5" stop-color="#ff2200"/></linearGradient>
        </defs></svg>`;
      document.body.append(grad);
    }
    add2Body();
    if (!SB?.SPgradients?.patched) {
      /* Gradient Patch by SharkPool, inspired by 0znzw */
      SB.SPgradients = { gradientUrls: new Map(), patched: true };
      const ogBlockRender = SB.BlockSvg.prototype.render;
      SB.BlockSvg.prototype.render = function(...args) {
        const result = ogBlockRender.apply(this, args);
        const grad = SB.SPgradients.gradientUrls.get(this.type.slice(0, this.type.indexOf("_")));
        if (grad && this?.svgPath_ && this?.category_) {
          const svg = this.svgPath_;
          const fill = svg.getAttribute("fill");
          this.svgPath_.setAttribute(
            fill === grad.check || fill === grad.path ? "fill" : "stroke",
            grad.path
          );
        }
        return result;
      }
    }
    SB.SPgradients.gradientUrls.set("SPsoundCloud", { path: "url(#SPsoundCloud-GRAD)", check: color1 });
  });

  Scratch.extensions.register(new SPsoundCloud());
})(Scratch);
