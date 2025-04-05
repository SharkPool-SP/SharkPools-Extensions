// Name: Soundcloud API
// ID: SPsoundCloud
// Description: Fetch Songs and Statistics from Soundcloud (Unofficial)
// By: SharkPool

// Version V.1.0.24

/* !IMPORTANT!
  In this Extension, I use regulare fetch()
  I am unable to use Scratch.fetch() since it doesnt work for certain people
  It is a issue I am unaware of, nor do I know what causes it...
  but it happened to certain people like TheShovel

  Same issue with my Spotify API extension.
*/

(function (Scratch) {
  "use strict";
  if (!Scratch.extensions.unsandboxed) throw new Error("Soundcloud API must be run unsandboxed");

  const menuIconURI =
"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMzIiIGhlaWdodD0iMjMyIiB2aWV3Qm94PSIwIDAgMjMyIDIzMiI+PGRlZnM+PGxpbmVhckdyYWRpZW50IHgxPSIyMzkuNjM0IiB5MT0iMzAzLjAwMSIgeDI9IjIzOS42MzQiIHkyPSI3MS4wMDEiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIiBpZD0iYSI+PHN0b3Agb2Zmc2V0PSIwIiBzdG9wLWNvbG9yPSIjYmM1ODAwIi8+PHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjYmMxOTAwIi8+PC9saW5lYXJHcmFkaWVudD48bGluZWFyR3JhZGllbnQgeDE9IjIzOS42MzQiIHkxPSI4My4wMDEiIHgyPSIyMzkuNjM0IiB5Mj0iMjkxLjAwMSIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiIGlkPSJiIj48c3RvcCBvZmZzZXQ9IjAiIHN0b3AtY29sb3I9IiNmZjc2MDAiLz48c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiNmMjAiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48cGF0aCBkPSJNMjM5LjYzNCA3MS4wMDFjNjQuMDY1IDAgMTE2IDUxLjkzNSAxMTYgMTE2cy01MS45MzUgMTE2LTExNiAxMTYtMTE2LTUxLjkzNS0xMTYtMTE2IDUxLjkzNS0xMTYgMTE2LTExNiIgZmlsbD0idXJsKCNhKSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTEyMy42MzQgLTcxLjAwMSkiLz48cGF0aCBkPSJNMTM1LjYzNCAxODcuMDAxYzAtNTcuNDM3IDQ2LjU2Mi0xMDQgMTA0LTEwNHMxMDQgNDYuNTYzIDEwNCAxMDRjMCA1Ny40MzgtNDYuNTYyIDEwNC0xMDQgMTA0cy0xMDQtNDYuNTYyLTEwNC0xMDQiIGZpbGw9InVybCgjYikiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0xMjMuNjM0IC03MS4wMDEpIi8+PHBhdGggZD0iTTM1LjAyIDExMC40NzNjLjM4NyAwIC42OTIuMzA1Ljc1My43MzNsMi4wMTMgMTYuMTY3LTIuMDEzIDE1LjgyMmMtLjA2MS40MjctLjM2Ni43MzItLjc1My43MzItLjM4NiAwLS42OTEtLjMwNS0uNzUyLS43MzJsLTEuNzctMTUuODIyIDEuNzctMTYuMTY4Yy4wNi0uNDI3LjM2Ni0uNzMyLjc1Mi0uNzMybS02LjY1IDYuMjAzYy4zNjYgMCAuNjcxLjI4NS43MTIuNjkxbDEuNTY2IDEwLjAwNi0xLjU2NiA5Ljg0M2MtLjA0LjQwNy0uMzQ2LjY5MS0uNzEyLjY5MS0uMzg2IDAtLjY3MS0uMjg0LS43MzItLjY5MWwtMS4zMjItOS44MjMgMS4zMjItMTAuMDA1Yy4wNjEtLjQyNy4zNjYtLjcxMi43MzItLjcxMm0xMy43NDgtOS4zNzVjLjQ2NyAwIC44MzMuMzY2Ljg5NC45MTVsMS45MTIgMTkuMTc3LTEuOTEyIDE4LjQ4NmMtLjA0LjUwOS0uNDI3Ljg3NS0uODk0Ljg3NS0uNDY4IDAtLjg1NS0uMzg3LS44OTUtLjg5NWwtMS42ODgtMTguNDg2IDEuNjg4LTE5LjE3N2MuMDQtLjUyOS40MjctLjg5NS44OTUtLjg5NW03LjExOC0uNjcyYy41NDggMCAuOTk2LjQ0OCAxLjA1NyAxLjAxOGwxLjgxIDE5LjcyNi0xLjgxIDE5LjA3NmMtLjA2MS41OS0uNTA5IDEuMDM3LTEuMDU4IDEuMDM3cy0xLjAxNi0uNDQ4LTEuMDU3LTEuMDM3bC0xLjU4Ni0xOS4wNzYgMS41ODYtMTkuNzA2Yy4wNC0uNTkuNTA4LTEuMDM3IDEuMDU3LTEuMDM3bTEwLjEwOCAyMC43NjMtMS43MDkgMTkuMjE4Yy0uMDQuNjkyLS41NDkgMS4yLTEuMiAxLjJzLTEuMTgtLjUyOS0xLjIyLTEuMmwtMS41MDUtMTkuMjE4IDEuNTA1LTE4LjI4MmMuMDQtLjY5Mi41Ny0xLjIgMS4yMi0xLjIuNjMgMCAxLjE2LjUwOCAxLjIgMS4xOHptNC4zMzEtMzEuMTE0Yy43MTIgMCAxLjMyMi41OSAxLjM2MyAxLjM0MmwxLjU4NiAyOS43NTItMS41ODYgMTkuMjE4Yy0uMDQuNzUyLS42NTEgMS4zNDItMS4zNjMgMS4zNDItLjczMiAwLTEuMzIyLS41OS0xLjM2Mi0xLjM0MmwtMS40MDQtMTkuMjE4IDEuNDA0LTI5Ljc1MmMuMDQtLjc1My42My0xLjM0MiAxLjM2Mi0xLjM0Mm03LjE5OS02Ljg1NGMuNzkzIDAgMS40NjUuNjcxIDEuNTI2IDEuNDg1bDEuNDg0IDM2LjU2NS0xLjQ4NCAxOS4xMTZjLS4wNDEuODU0LS43MTIgMS41MDUtMS41MjYgMS41MDUtLjgzMyAwLTEuNDg0LS42NzEtMS41MjUtMS41MDVsLTEuMzIyLTE5LjA5NiAxLjMyMi0zNi41NjVjLjA0LS44NTQuNzEyLTEuNTA1IDEuNTI1LTEuNTA1bTcuNDYzLTMuMjk0Yy44OTYgMCAxLjYyOC43MzIgMS42NjggMS42ODhsMS4zODMgMzkuNjE1LTEuMzgzIDE4LjkxM3YtLjAyYy0uMDQuOTE1LS43NzIgMS42NDctMS42NjcgMS42NDdhMS42NyAxLjY3IDAgMCAxLTEuNjY4LTEuNjQ3bC0xLjIyLTE4LjkxMyAxLjIyLTM5LjYxNmMuMDItLjkzNS43NTMtMS42NjcgMS42NjgtMS42NjdtMTAuNTM0IDQxLjI2Mi0xLjI4MSAxOC43OTFjLS4wNCAxLjAxNy0uODM0IDEuODEtMS44MyAxLjgxcy0xLjc5LS44MTMtMS44My0xLjgxbC0xLjE0LTE4Ljc5IDEuMTQtNDAuOTM4Yy4wNC0xLjAxNy44MzMtMS44MSAxLjgzLTEuODEuOTk2IDAgMS43OS43OTMgMS44MyAxLjgxem00LjM3Mi00MS44NTJjMS4wNzggMCAxLjkzMi44NTQgMS45NzMgMS45NTJsMS4xOCAzOS45LTEuMTggMTguNjI5di0uMDJjLS4wMiAxLjA5Ny0uODk1IDEuOTcyLTEuOTczIDEuOTcyYTEuOTcgMS45NyAwIDAgMS0xLjk3Mi0xLjk1MmwtMS4wMzctMTguNjA4IDEuMDM3LTM5LjljLjAyLTEuMTE5Ljg5NS0xLjk3MyAxLjk3Mi0xLjk3M203LjU0NSAxLjMwMWMxLjE2IDAgMi4wOTUuOTM2IDIuMTM2IDIuMTE1bDEuMDc3IDM4LjQzNi0xLjA3NyAxOC41MDd2LS4wMmEyLjE0NCAyLjE0NCAwIDAgMS0yLjEzNiAyLjExNCAyLjEzIDIuMTMgMCAwIDEtMi4xMzUtMi4xMTVsLS45NTYtMTguNDg2Ljk1Ni0zOC40MzZhMi4xMyAyLjEzIDAgMCAxIDIuMTM1LTIuMTE1bTguODQ3LTcuMDc3YTIuNDggMi40OCAwIDAgMSAxLjA1NyAxLjg5MmwuOTU2IDQ1LjczNi0uODc1IDE2LjU1NC0uMTAxIDEuODFjLS4wMi42My0uMjg1IDEuMi0uNjkyIDEuNjA3LS40MjcuNDA2LS45NzYuNjctMS42MDYuNjctLjcxMiAwLTEuMzIyLS4zMjUtMS43NS0uODMzYTIuMyAyLjMgMCAwIDEtLjUyOC0xLjM2MnYtLjA4MmwtLjg1NC0xOC4zODQuODU0LTQ1LjI5di0uNDI2YTIuMzQgMi4zNCAwIDAgMSAxLjA1OC0xLjkxMiAyLjI3IDIuMjcgMCAwIDEgMS4yMi0uMzY2Yy40NjggMCAuODk1LjE0MiAxLjI2LjM4Nm03LjU2Ni00LjMzMWMuNjkxLjQyNyAxLjE4IDEuMiAxLjIgMi4wNTRsMS4wNzcgNDkuOTA1LTEuMDc3IDE4LjF2LS4wMmMtLjAyIDEuMzQyLTEuMTE5IDIuNDQtMi40NCAyLjQ0LTEuMzIzIDAtMi40Mi0xLjA5OC0yLjQ0MS0yLjQybC0uNDg4LTguOTI4LS41MDktOS4xNzIuOTk3LTQ5LjY0MXYtLjI0NGMwLS43NTIuMzY2LTEuNDI0Ljg5NS0xLjg3MWEyLjQzIDIuNDMgMCAwIDEgMi43ODYtLjIwM202Ny4wNDkgMjguMzY5YzEyLjI0MyAwIDIyLjE2NyA5LjkwNCAyMi4xNjcgMjIuMTI2IDAgMTIuMjQzLTkuOTI0IDIyLjA0NS0yMi4xNDcgMjIuMDQ1aC02MS4zOTVjLTEuMzIyLS4xMjItMi4zOC0xLjE4LTIuNC0yLjU0MlY3NS4xNDljLjAyLTEuMjgxLjQ2OC0xLjk1MiAyLjEzNS0yLjYwM2EzOS42IDM5LjYgMCAwIDEgMTQuMTc1LTIuNjQ0YzIwLjM5NyAwIDM3LjEzNCAxNS42NiAzOC45MDMgMzUuNjFhMjIuMiAyMi4yIDAgMCAxIDguNTYyLTEuNzA5IiBmaWxsPSIjZmZmIi8+PC9zdmc+";
  const blockIconURI =
"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxODAuMSIgaGVpZ2h0PSI3OC4xOTQiIHZpZXdCb3g9IjAgMCAxODAuMSA3OC4xOTQiPjxwYXRoIGQ9Ik04LjcwNCA0MC41NzFjLjM4NyAwIC42OTIuMzA1Ljc1My43MzNsMi4wMTMgMTYuMTY3LTIuMDEzIDE1LjgyMmMtLjA2MS40MjctLjM2Ni43MzItLjc1My43MzItLjM4NiAwLS42OTEtLjMwNS0uNzUyLS43MzJsLTEuNzctMTUuODIyIDEuNzctMTYuMTY3Yy4wNi0uNDI4LjM2Ni0uNzMzLjc1Mi0uNzMzbS02LjY1IDYuMjAzYy4zNjYgMCAuNjcxLjI4NS43MTIuNjkxbDEuNTY2IDEwLjAwNi0xLjU2NiA5Ljg0M2MtLjA0LjQwNy0uMzQ2LjY5MS0uNzEyLjY5MS0uMzg2IDAtLjY3MS0uMjg0LS43MzItLjY5MUwwIDU3LjQ5MWwxLjMyMi0xMC4wMDVjLjA2MS0uNDI3LjM2Ni0uNzEyLjczMi0uNzEybTEzLjc0OC05LjM3NWMuNDY3IDAgLjgzMy4zNjYuODk0LjkxNWwxLjkxMiAxOS4xNzctMS45MTIgMTguNDg2Yy0uMDQuNTA5LS40MjcuODc1LS44OTQuODc1LS40NjggMC0uODU1LS4zODctLjg5NS0uODk1bC0xLjY4OC0xOC40ODYgMS42ODgtMTkuMTc3Yy4wNC0uNTI5LjQyNy0uODk1Ljg5NS0uODk1bTcuMTE4LS42NzJjLjU0OCAwIC45OTYuNDQ4IDEuMDU3IDEuMDE4bDEuODEgMTkuNzI2LTEuODEgMTkuMDc2Yy0uMDYxLjU5LS41MDkgMS4wMzctMS4wNTggMS4wMzdzLTEuMDE2LS40NDgtMS4wNTctMS4wMzdsLTEuNTg2LTE5LjA3NiAxLjU4Ni0xOS43MDZjLjA0LS41OS41MDgtMS4wMzcgMS4wNTctMS4wMzdtMTAuMTA4IDIwLjc2My0xLjcwOSAxOS4yMThjLS4wNC42OTItLjU0OSAxLjItMS4yIDEuMnMtMS4xOC0uNTI5LTEuMjItMS4ybC0xLjUwNS0xOS4yMTggMS41MDUtMTguMjgyYy4wNC0uNjkyLjU3LTEuMiAxLjIyLTEuMi42MyAwIDEuMTYuNTA4IDEuMiAxLjE4em00LjMzMS0zMS4xMTRjLjcxMiAwIDEuMzIyLjU5IDEuMzYzIDEuMzQybDEuNTg2IDI5Ljc1Mi0xLjU4NiAxOS4yMThjLS4wNC43NTItLjY1MSAxLjM0Mi0xLjM2MyAxLjM0Mi0uNzMyIDAtMS4zMjItLjU5LTEuMzYyLTEuMzQybC0xLjQwNC0xOS4yMTggMS40MDQtMjkuNzUyYy4wNC0uNzUzLjYzLTEuMzQyIDEuMzYyLTEuMzQybTcuMTk5LTYuODU0Yy43OTMgMCAxLjQ2NS42NzEgMS41MjYgMS40ODVsMS40ODQgMzYuNTY1LTEuNDg0IDE5LjExNmMtLjA0MS44NTQtLjcxMiAxLjUwNS0xLjUyNiAxLjUwNS0uODMzIDAtMS40ODQtLjY3MS0xLjUyNS0xLjUwNUw0MS43MSA1Ny41OTNsMS4zMjItMzYuNTY1Yy4wNC0uODU0LjcxMi0xLjUwNSAxLjUyNS0xLjUwNW03LjQ2My0zLjI5NGMuODk2IDAgMS42MjguNzMyIDEuNjY4IDEuNjg4bDEuMzgzIDM5LjYxNS0xLjM4MyAxOC45MTN2LS4wMmMtLjA0LjkxNS0uNzcyIDEuNjQ3LTEuNjY3IDEuNjQ3YTEuNjcgMS42NyAwIDAgMS0xLjY2OC0xLjY0N2wtMS4yMi0xOC45MTMgMS4yMi0zOS42MTZjLjAyLS45MzUuNzUzLTEuNjY3IDEuNjY4LTEuNjY3bTEwLjUzNCA0MS4yNjItMS4yODEgMTguNzkxYy0uMDQgMS4wMTctLjgzNCAxLjgxLTEuODMgMS44MXMtMS43OS0uODEzLTEuODMtMS44MWwtMS4xNC0xOC43OSAxLjE0LTQwLjkzOGMuMDQtMS4wMTcuODMzLTEuODEgMS44My0xLjgxLjk5NiAwIDEuNzkuNzkzIDEuODMgMS44MXptNC4zNzItNDEuODUyYzEuMDc4IDAgMS45MzIuODU0IDEuOTczIDEuOTUybDEuMTggMzkuOUw2OC45IDc2LjEydi0uMDJjLS4wMiAxLjA5Ny0uODk1IDEuOTcyLTEuOTczIDEuOTcyYTEuOTcgMS45NyAwIDAgMS0xLjk3Mi0xLjk1MmwtMS4wMzctMTguNjA4IDEuMDM3LTM5LjljLjAyLTEuMTE5Ljg5NS0xLjk3MyAxLjk3Mi0xLjk3M203LjU0NSAxLjMwMWMxLjE2IDAgMi4wOTUuOTM2IDIuMTM2IDIuMTE1bDEuMDc3IDM4LjQzNi0xLjA3NyAxOC41MDd2LS4wMmEyLjE0NCAyLjE0NCAwIDAgMS0yLjEzNiAyLjExNCAyLjEzIDIuMTMgMCAwIDEtMi4xMzUtMi4xMTVsLS45NTYtMTguNDg2Ljk1Ni0zOC40MzZhMi4xMyAyLjEzIDAgMCAxIDIuMTM1LTIuMTE1bTguODQ3LTcuMDc3YTIuNDggMi40OCAwIDAgMSAxLjA1NyAxLjg5MmwuOTU2IDQ1LjczNi0uODc1IDE2LjU1NC0uMTAxIDEuODFjLS4wMi42My0uMjg1IDEuMi0uNjkyIDEuNjA3LS40MjcuNDA2LS45NzYuNjctMS42MDYuNjctLjcxMiAwLTEuMzIyLS4zMjUtMS43NS0uODMzYTIuMyAyLjMgMCAwIDEtLjUyOC0xLjM2MnYtLjA4MmwtLjg1NC0xOC4zODQuODU0LTQ1LjI5di0uNDI2YTIuMzQgMi4zNCAwIDAgMSAxLjA1OC0xLjkxMiAyLjI3IDIuMjcgMCAwIDEgMS4yMi0uMzY2Yy40NjggMCAuODk1LjE0MiAxLjI2LjM4Nm03LjU2Ni00LjMzMWMuNjkxLjQyNyAxLjE4IDEuMiAxLjIgMi4wNTRsMS4wNzcgNDkuOTA1LTEuMDc3IDE4LjF2LS4wMmMtLjAyIDEuMzQyLTEuMTE5IDIuNDQtMi40NCAyLjQ0LTEuMzIzIDAtMi40Mi0xLjA5OC0yLjQ0MS0yLjQybC0uNDg4LTguOTI4LS41MDktOS4xNzIuOTk3LTQ5LjY0MXYtLjI0NGMwLS43NTIuMzY2LTEuNDI0Ljg5NS0xLjg3MWEyLjQzIDIuNDMgMCAwIDEgMi43ODYtLjIwM202Ny4wNDkgMjguMzY5YzEyLjI0MyAwIDIyLjE2NyA5LjkwNCAyMi4xNjcgMjIuMTI2IDAgMTIuMjQzLTkuOTI0IDIyLjA0NS0yMi4xNDcgMjIuMDQ1SDk2LjU1OGMtMS4zMjItLjEyMi0yLjM4LTEuMTgtMi40LTIuNTQyVjUuMjQ3Yy4wMi0xLjI4MS40NjgtMS45NTIgMi4xMzUtMi42MDNBMzkuNiAzOS42IDAgMCAxIDExMC40NjggMGMyMC4zOTcgMCAzNy4xMzQgMTUuNjYgMzguOTAzIDM1LjYxYTIyLjIgMjIuMiAwIDAgMSA4LjU2Mi0xLjcwOSIgZmlsbD0iI2ZmZiIvPjwvc3ZnPg==";

  let clientID = "PKosB4UBHGB8oMWFycIZ2wvoRk7Evseq";

  /*
    Forced to use a Proxy since SoundCloud API only works:
      -client-side (from user tabs)
      -requests from SoundCloud site
  */

  // For API fetching, we use this, its fast and reliable
  const proxy = "https://corsproxy.io?url=";
  // For file fetching, we must use this, its slower but works all the time
  // We also use it as a backup in case proxy 1 fails to work. (Only happens to the "extractID" block)
  const proxy2 = "https://api.codetabs.com/v1/proxy?quest=";

  /*
    I am using arrays since the API has JSON paths in order to get certain elements
    If people are familiar with JS/JSON, people can do the same
    Or they can just input the text value
  */
  const trackMenu = [
    { text: "name", value: `["title"]` },
    { text: "artist", value: `["user", "username"]` },
    { text: "artist ID", value: `["user_id"]` },
    { text: "description", value: `["description"]` },
    { text: "cover", value: `["artwork_url"]` },
    { text: "release date", value: `["created_at"]` },
    { text: "duration", value: `["duration"]` },
    { text: "plays", value: `["playback_count"]` },
    { text: "likes", value: `["likes_count"]` },
    { text: "comment count", value: `["comment_count"]` },
    { text: "genre", value: `["genre"]` }
  ];
  const artistMenu = [
    { text: "username", value: "username" },
    { text: "description", value: "description" },
    { text: "profile picture", value: "avatar_url" },
    { text: "join date", value: "created_at" },
    { text: "track count", value: "track_count" },
    { text: "follower count", value: "followers_count" },
    { text: "following count", value: "followings_count" }
  ];

  class SPsoundCloud {
    getInfo() {
      return {
        id: "SPsoundCloud",
        name: "SoundCloud API",
        color1: "#ff2200",
        color2: "#db1b00",
        color3: "#c02300",
        menuIconURI,
        blockIconURI,
        blocks: [
          {
            opcode: "setClient",
            blockType: Scratch.BlockType.COMMAND,
            text: "set client ID [ID]",
            arguments: {
              ID: { type: Scratch.ArgumentType.STRING, defaultValue: "8BBZpqUP1KSN4W6YB64xog2PX4Dw98b1" }
            }
          },
          {
            opcode: "getClientID",
            blockType: Scratch.BlockType.REPORTER,
            text: "client ID"
          },
          { blockType: Scratch.BlockType.LABEL, text: "Must be True for Extension to Work" },
          {
            opcode: "testClient",
            blockType: Scratch.BlockType.BOOLEAN,
            disableMonitor: true,
            text: "test client ID"
          },
          "---",
          {
            opcode: "extractID",
            blockType: Scratch.BlockType.REPORTER,
            text: "ID of [THING] from url [URL]",
            arguments: {
              THING: {
                type: Scratch.ArgumentType.STRING,
                menu: "IDS"
              },
              URL: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: "https://soundcloud.com/"
              }
            }
          },
          { blockType: Scratch.BlockType.LABEL, text: "Songs" },
          {
            opcode: "getTrackAtt",
            blockType: Scratch.BlockType.REPORTER,
            text: "fetch [THING] from track ID [ID]",
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
            text: "fetch mp3 of track ID [ID]",
            arguments: {
              ID: { type: Scratch.ArgumentType.NUMBER, defaultValue: 241049935 }
            }
          },
          {
            opcode: "getTrackComment",
            blockType: Scratch.BlockType.REPORTER,
            text: "fetch [NUM2] offset [NUM1] of [TYPE] comments from track ID [ID]",
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
            text: "fetch track search results with query [QUERY]",
            arguments: {
              QUERY: { type: Scratch.ArgumentType.STRING, defaultValue: "Ancient Visions" }
            }
          },
          { blockType: Scratch.BlockType.LABEL, text: "Artists" },
          {
            opcode: "getArtistAtt",
            blockType: Scratch.BlockType.REPORTER,
            text: "fetch [THING] from artist ID [ID]",
            arguments: {
              THING: { type: Scratch.ArgumentType.STRING, menu: "ARTISTS" },
              ID: { type: Scratch.ArgumentType.NUMBER, defaultValue: 127123168 }
            }
          },
          {
            opcode: "getFollowers",
            blockType: Scratch.BlockType.REPORTER,
            text: "fetch [NUM2] offset [NUM1] of followers from artist ID [ID]",
            arguments: {
              ID: { type: Scratch.ArgumentType.NUMBER, defaultValue: 127123168 },
              NUM1: { type: Scratch.ArgumentType.NUMBER, defaultValue: 0 },
              NUM2: { type: Scratch.ArgumentType.NUMBER, defaultValue: 20 }
            },
          },
          {
            opcode: "getTracks",
            blockType: Scratch.BlockType.REPORTER,
            text: "fetch [NUM2] offset [NUM1] of tracks from artist ID [ID]",
            arguments: {
              ID: { type: Scratch.ArgumentType.NUMBER, defaultValue: 127123168 },
              NUM1: { type: Scratch.ArgumentType.NUMBER, defaultValue: 0 },
              NUM2: { type: Scratch.ArgumentType.NUMBER, defaultValue: 20 }
            },
          },
          {
            opcode: "searchArtists",
            blockType: Scratch.BlockType.REPORTER,
            text: "fetch artist search results with query [QUERY]",
            arguments: {
              QUERY: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: "Aliantos"
              }
            }
          },
        ],
        menus: {
          IDS: {
            acceptReporters: true,
            items: ["track", "artist"]
          },
          COMMENT: {
            acceptReporters: true,
            items: ["new", "old"]
          },
          TRACKS: {
            acceptReporters: true,
            items: trackMenu
          },
          ARTISTS: {
            acceptReporters: true,
            items: artistMenu
          },
        },
      };
    }

    // Menu Utility
    // @param {menuType} => artistMenu or trackMenu
    // @param {value} => string user inputted
    
    // determine wether the input value is an array path (for the API)
    // or a preset text item (see Line : 41)
    decodeMenuArgs(menuType, value) {
      const menu = menuType === "artistMenu" ? artistMenu : trackMenu;
      value = Scratch.Cast.toString(value);
      const menuItem = menu.find(item => item.text === value);
      if (menuItem) return menuItem.value; // Assume user referenced menu text and not value
      else return value; // Assume its an array path
    }

    setClient(args) { clientID = Scratch.Cast.toString(args.ID) }

    getClientID() { return clientID }

    async testClient() {
      try {
        const url = `https://api-auth.soundcloud.com/oauth/session?client_id=${clientID}`;
        if (!await Scratch.canFetch(url)) return false;
        // eslint-disable-next-line
        const response = await fetch(`${proxy}${url}`);
        if (!response.ok) return false;
        const responseData = await response.json();
        return Object.keys(responseData).length > 0;
      } catch { return false }
    }

    async extractID(args) {
      try {
        let response;
        if (!args.URL.startsWith("https://soundcloud")) return "";
        if (!await Scratch.canFetch(args.URL)) return "";
        let success = false;
        let proxyUse = proxy;
        while (!success && proxyUse) {
          try {
            // eslint-disable-next-line
            response = await fetch(`${proxyUse}${args.URL}`);
            if (!response.ok) {
              if (proxyUse === proxy) proxyUse = proxy2;
              else return "Error: 404";
            } else { success = true }
          } catch {
            if (proxyUse === proxy) proxyUse = proxy2;
            else return "";
          }
        }
        if (success) {
          response = await response.text();
          const regex = args.THING === "track" ? /soundcloud:\/\/sounds:(\d+)/ : /soundcloud:\/\/users:(\d+)/;
          const match = response.match(regex);
          if (match && match[1]) return match[1] ?? "";
        }
      } catch { return "" }
      return "";
    }

    async getTrackAtt(args) {
      try {
        let response;
        const path = JSON.parse(this.decodeMenuArgs("trackMenu", args.THING));
        if (!Array.isArray(path)) return "";
        if (!await Scratch.canFetch(`https://api-v2.soundcloud.com/tracks/${args.ID}?client_id=${clientID}&app_locale=en`)) return "";
        // eslint-disable-next-line
        response = await fetch(`${proxy}https://api-v2.soundcloud.com/tracks/${args.ID}?client_id=${clientID}&app_locale=en`);
        if (!response.ok) return "Error: 404";
        let json = await response.json();
        for (var i = 0; i < path.length; i++) {
          json = json[path[i]];
        }
        if (path[0] === "duration") json = this.milli2Time(json);
        return json ?? "";
      } catch { return "" }
    }
    milli2Time(milli) {
      let seconds = Math.floor(milli / 1000);
      let hours = Math.floor(seconds / 3600);
      seconds %= 3600;
      let minutes = Math.floor(seconds / 60);
      seconds %= 60;
      return `${hours}:${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
    }

    async getTrackMp3(args) {
      try {
        let response;
        if (!await Scratch.canFetch(`https://api-v2.soundcloud.com/tracks/${args.ID}/download?client_id=${clientID}&app_locale=en`)) return "";
        // eslint-disable-next-line
        response = await fetch(`${proxy2}https://api-v2.soundcloud.com/tracks/${args.ID}/download?client_id=${clientID}&app_locale=en`);
        if (!response.ok) return "Error: 404";
        let json = await response.json();
        return json.redirectUri ?? "Error: Downloads are Disabled for this Track";
      } catch { return "" }
    }

    async getTrackComment(args) {
      try {
        let response;
        const type = args.TYPE === "new" ? "newest" : "oldest";
        if (!await Scratch.canFetch(`https://api-v2.soundcloud.com/tracks/${args.ID}/comments?sort=${type}&threaded=1&client_id=${clientID}&limit=${args.NUM2}&offset=${args.NUM1}&app_locale=en`)) return "";
        // eslint-disable-next-line
        response = await fetch(`${proxy}https://api-v2.soundcloud.com/tracks/${args.ID}/comments?sort=${type}&threaded=1&client_id=${clientID}&limit=${args.NUM2}&offset=${args.NUM1}&app_locale=en`);
        if (!response.ok) return "Error: 404";
        let json = await response.json();
        return JSON.stringify(json.collection);
      } catch { return "[]" }
    }

    async getArtistAtt(args) {
      try {
        let response;
        if (!await Scratch.canFetch(`https://api-v2.soundcloud.com/users/${args.ID}?client_id=${clientID}&app_locale=en`)) return "";
        // eslint-disable-next-line
        response = await fetch(`${proxy}https://api-v2.soundcloud.com/users/${args.ID}?client_id=${clientID}&app_locale=en`);
        if (!response.ok) return "Error: 404";
        let json = await response.json();
        args.THING = this.decodeMenuArgs("artistMenu", args.THING);
        return json[args.THING] ?? "";
      } catch { return "" }
    }

    async getFollowers(args) { return await this.getArtistStuff(args, "followers?") }
    async getTracks(args) { return await this.getArtistStuff(args, "tracks?representation=1&") }

    async getArtistStuff(args, type) {
      try {
        let response;
        if (!await Scratch.canFetch(`https://api-v2.soundcloud.com/users/${args.ID}/${type}client_id=${clientID}&limit=${args.NUM2}&offset=${args.NUM1}&app_locale=en`)) return "";
        // eslint-disable-next-line
        response = await fetch(`${proxy}https://api-v2.soundcloud.com/users/${args.ID}/${type}client_id=${clientID}&limit=${args.NUM2}&offset=${args.NUM1}&app_locale=en`);
        if (!response.ok) return "Error: 404";
        let json = await response.json();
        return JSON.stringify(json.collection);
      } catch { return "[]" }
    }

    async searchTracks(args) { return await this.fetchSearch(args, "tracks") }
    async searchArtists(args) { return await this.fetchSearch(args, "users") }

    async fetchSearch(args, type) {
      try {
        let response;
        args.QUERY = encodeURIComponent(args.QUERY);
        if (!await Scratch.canFetch(`https://api-v2.soundcloud.com/search/${type}?q=${args.QUERY}&client_id=${clientID}&limit=${args.NUM2}&offset=${args.NUM1}&app_locale=en`)) return "";
        // eslint-disable-next-line
        response = await fetch(`${proxy}https://api-v2.soundcloud.com/search/${type}?q=${args.QUERY}&client_id=${clientID}&limit=${args.NUM2}&offset=${args.NUM1}&app_locale=en`);
        if (!response.ok) return "Error: 404";
        let json = await response.json();
        return JSON.stringify(json.collection);
      } catch { return "[]" }
    }
  }

  function add2Body() {
    var grad = document.createElement("div");
    grad.innerHTML = `
      <svg><defs>
        <linearGradient x1="240" y1="0" x2="240" y2="100" gradientUnits="userSpaceOnUse" id="SPsoundCloud-GRAD1">
        <stop offset="0" stop-color="#ff7600"/><stop offset="0.5" stop-color="#ff2200"/></linearGradient>
      </defs></svg>`;
    document.body.appendChild(grad);
  }
  if (Scratch.gui) Scratch.gui.getBlockly().then((SB) => {
    add2Body();
    if (!SB?.SPgradients?.patched) {
      // Gradient Patch by 0znzw & SharkPool
      SB.SPgradients = { gradientUrls: {}, patched: false };
      const BSP = SB.BlockSvg.prototype, BSPR = BSP.render;
      BSP.render = function(...args) {
        const blockTheme = ReduxStore.getState().scratchGui?.theme?.theme?.blocks;
        const res = BSPR.apply(this, args);
        let category;
        if (this?.svgPath_ && this?.category_ && (category = this.type.slice(0, this.type.indexOf("_"))) && SB.SPgradients.gradientUrls[category]) {
          const urls = SB.SPgradients.gradientUrls[category];
          if (urls) {
            this.svgPath_.setAttribute("fill", urls[0]);
            if (blockTheme === "dark") {
              this.svgPath_.setAttribute("fill-opacity", ".5");
              this.svgPath_.setAttribute("stroke", "#ff4a08");
            }
          }
        }
        return res;
      }
      SB.SPgradients.patched = true;
    }
    ScratchBlocks.SPgradients.gradientUrls["SPsoundCloud"] = ["url(#SPsoundCloud-GRAD1)"];
  });

  Scratch.extensions.register(new SPsoundCloud());
})(Scratch);
