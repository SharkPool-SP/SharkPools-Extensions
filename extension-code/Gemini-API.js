// Name: Gemini API
// ID: smolderdevGeminiAPI
// Description: Gemini API Requests with Customization
// By: cs3203402
// License: MIT

// Version V.1.0.0

(async function(Scratch) {
  "use strict";

  const menuIconURI =
"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2NSIgaGVpZ2h0PSI2NSIgdmlld0JveD0iMCAwIDY1IDY1IiBmaWxsPSJub25lIj48cGF0aCBkPSJNNTcuODY1IDI5LjAxcS03LjUtMy4yMjgtMTMuMTI2LTguODUzLTUuNjI1LTUuNjI2LTguODU0LTEzLjEyNmEzOSAzOSAwIDAgMS0xLjk5OS01LjkwNUExLjQ4NSAxLjQ4NSAwIDAgMCAzMi40NDcuMDAxYy0uNjggMC0xLjI3Mi40NjUtMS40MzggMS4xMjVhMzkgMzkgMCAwIDEtMiA1LjkwNXEtMy4yMjggNy41LTguODUzIDEzLjEyNlExNC41MyAyNS43ODIgNy4wMyAyOS4wMWEzOSAzOSAwIDAgMS01LjkwNSAyQTEuNDg1IDEuNDg1IDAgMCAwIDAgMzIuNDQ4YzAgLjY4LjQ2NSAxLjI3MiAxLjEyNSAxLjQzOGEzOSAzOSAwIDAgMSA1LjkwNSAycTcuNDk5IDMuMjI4IDEzLjEyNiA4Ljg1MyA1LjYyNiA1LjYyNiA4Ljg1NCAxMy4xMjZhMzkgMzkgMCAwIDEgMS45OTkgNS45MDVjLjE2Ni42Ni43NTggMS4xMjUgMS40MzggMS4xMjUuNjgxIDAgMS4yNzMtLjQ2NSAxLjQzOS0xLjEyNWEzOSAzOSAwIDAgMSAyLTUuOTA1cTMuMjI4LTcuNDk5IDguODUzLTEzLjEyNiA1LjYyNi01LjYyNSAxMy4xMjYtOC44NTRhMzkgMzkgMCAwIDEgNS45MDUtMS45OTkgMS40ODUgMS40ODUgMCAwIDAgMS4xMjUtMS40MzhjMC0uNjgxLS40NjUtMS4yNzMtMS4xMjUtMS40MzlhMzkgMzkgMCAwIDEtNS45MDUtMiIgZmlsbD0iI2ZmZiIvPjxtYXNrIGlkPSJiIiBzdHlsZT0ibWFzay10eXBlOmFscGhhIiBtYXNrVW5pdHM9InVzZXJTcGFjZU9uVXNlIiB4PSIwIiB5PSIwIiB3aWR0aD0iNjUiIGhlaWdodD0iNjUiPjxwYXRoIGQ9Ik0zMi40NDcgMGMuNjggMCAxLjI3My40NjUgMS40MzkgMS4xMjVhMzkgMzkgMCAwIDAgMS45OTkgNS45MDVxMy4yMyA3LjUgOC44NTQgMTMuMTI1IDUuNjI3IDUuNjI2IDEzLjEyNSA4Ljg1NWEzOSAzOSAwIDAgMCA1LjkwNiAxLjk5OWMuNjYuMTY2IDEuMTI0Ljc1OCAxLjEyNCAxLjQzOHMtLjQ2NCAxLjI3My0xLjEyNSAxLjQzOWEzOSAzOSAwIDAgMC01LjkwNSAxLjk5OXEtNy41IDMuMjMtMTMuMTI1IDguODU0LTUuNjI1IDUuNjI3LTguODU0IDEzLjEyNWEzOSAzOSAwIDAgMC0yIDUuOTA2IDEuNDg1IDEuNDg1IDAgMCAxLTEuNDM4IDEuMTI0Yy0uNjggMC0xLjI3Mi0uNDY0LTEuNDM4LTEuMTI1YTM5IDM5IDAgMCAwLTItNS45MDVxLTMuMjI3LTcuNS04Ljg1NC0xMy4xMjUtNS42MjUtNS42MjUtMTMuMTI1LTguODU0YTM5IDM5IDAgMCAwLTUuOTA1LTJBMS40ODUgMS40ODUgMCAwIDEgMCAzMi40NDhjMC0uNjguNDY1LTEuMjcyIDEuMTI1LTEuNDM4YTM5IDM5IDAgMCAwIDUuOTA1LTJxNy41LTMuMjI4IDEzLjEyNS04Ljg1NCA1LjYyNi01LjYyNCA4Ljg1NS0xMy4xMjVhMzkgMzkgMCAwIDAgMS45OTktNS45MDVBMS40ODUgMS40ODUgMCAwIDEgMzIuNDQ3IDAiIGZpbGw9IiMwMDAiLz48cGF0aCBkPSJNMzIuNDQ3IDBjLjY4IDAgMS4yNzMuNDY1IDEuNDM5IDEuMTI1YTM5IDM5IDAgMCAwIDEuOTk5IDUuOTA1cTMuMjMgNy41IDguODU0IDEzLjEyNSA1LjYyNyA1LjYyNiAxMy4xMjUgOC44NTVhMzkgMzkgMCAwIDAgNS45MDYgMS45OTljLjY2LjE2NiAxLjEyNC43NTggMS4xMjQgMS40MzhzLS40NjQgMS4yNzMtMS4xMjUgMS40MzlhMzkgMzkgMCAwIDAtNS45MDUgMS45OTlxLTcuNSAzLjIzLTEzLjEyNSA4Ljg1NC01LjYyNSA1LjYyNy04Ljg1NCAxMy4xMjVhMzkgMzkgMCAwIDAtMiA1LjkwNiAxLjQ4NSAxLjQ4NSAwIDAgMS0xLjQzOCAxLjEyNGMtLjY4IDAtMS4yNzItLjQ2NC0xLjQzOC0xLjEyNWEzOSAzOSAwIDAgMC0yLTUuOTA1cS0zLjIyNy03LjUtOC44NTQtMTMuMTI1LTUuNjI1LTUuNjI1LTEzLjEyNS04Ljg1NGEzOSAzOSAwIDAgMC01LjkwNS0yQTEuNDg1IDEuNDg1IDAgMCAxIDAgMzIuNDQ4YzAtLjY4LjQ2NS0xLjI3MiAxLjEyNS0xLjQzOGEzOSAzOSAwIDAgMCA1LjkwNS0ycTcuNS0zLjIyOCAxMy4xMjUtOC44NTQgNS42MjYtNS42MjQgOC44NTUtMTMuMTI1YTM5IDM5IDAgMCAwIDEuOTk5LTUuOTA1QTEuNDg1IDEuNDg1IDAgMCAxIDMyLjQ0NyAwIiBmaWxsPSJ1cmwoI2EpIi8+PC9tYXNrPjxnIG1hc2s9InVybCgjYikiPjxnIGZpbHRlcj0idXJsKCNjKSI+PGVsbGlwc2UgY3g9IjE0LjQwNyIgY3k9IjE2Ljk1IiByeD0iMTQuNDA3IiByeT0iMTYuOTUiIHRyYW5zZm9ybT0icm90YXRlKDE5LjU1MiAtNDQuNTc2IC0xNi40OTYpIiBmaWxsPSIjZmZlNDMyIi8+PC9nPjxnIGZpbHRlcj0idXJsKCNkKSI+PGVsbGlwc2UgY3g9IjI3LjQzMyIgY3k9IjIuNTg3IiByeD0iMTguNjUyIiByeT0iMTkuMDYyIiBmaWxsPSIjZmM0MTNkIi8+PC9nPjxnIGZpbHRlcj0idXJsKCNlKSI+PGVsbGlwc2UgY3g9IjE4Ljk1MSIgY3k9IjU3LjM4NiIgcng9IjE5LjQ5MyIgcnk9IjI1LjI1MyIgdHJhbnNmb3JtPSJyb3RhdGUoLTIuNzk5IDE4Ljk1MSA1Ny4zODYpIiBmaWxsPSIjMDBiOTVjIi8+PC9nPjxnIGZpbHRlcj0idXJsKCNmKSI+PGVsbGlwc2UgY3g9IjE4Ljk1MSIgY3k9IjU3LjM4NiIgcng9IjE5LjQ5MyIgcnk9IjI1LjI1MyIgdHJhbnNmb3JtPSJyb3RhdGUoLTIuNzk5IDE4Ljk1MSA1Ny4zODYpIiBmaWxsPSIjMDBiOTVjIi8+PC9nPjxnIGZpbHRlcj0idXJsKCNnKSI+PGVsbGlwc2UgY3g9IjIwLjAyIiBjeT0iNTYuMjExIiByeD0iMTkuMTA3IiByeT0iMjEuMDM1IiB0cmFuc2Zvcm09InJvdGF0ZSgtMzEuMzE4IDIwLjAyIDU2LjIxMSkiIGZpbGw9IiMwMGI5NWMiLz48L2c+PGcgZmlsdGVyPSJ1cmwoI2gpIj48ZWxsaXBzZSBjeD0iNjcuMzkxIiBjeT0iMjUuMzI3IiByeD0iMTguMzQ2IiByeT0iMTcuNjY3IiBmaWxsPSIjMzE4NmZmIi8+PC9nPjxnIGZpbHRlcj0idXJsKCNpKSI+PGVsbGlwc2UgY3g9IjIxLjIyMiIgY3k9IjIyLjM4NCIgcng9IjIxLjIyMiIgcnk9IjIyLjM4NCIgdHJhbnNmb3JtPSJyb3RhdGUoMzcuMjUyIDkuNzUyIC04LjAwOSkiIGZpbGw9IiNmYmJjMDQiLz48L2c+PGcgZmlsdGVyPSJ1cmwoI2opIj48ZWxsaXBzZSBjeD0iMjQuNDY5IiBjeT0iMjIuNjA0IiByeD0iMjQuNDY5IiByeT0iMjIuNjA0IiB0cmFuc2Zvcm09InJvdGF0ZSgzNC41MSAxOS41ODcgNjQuODUyKSIgZmlsbD0iIzMxODZmZiIvPjwvZz48ZyBmaWx0ZXI9InVybCgjaykiPjxwYXRoIGQ9Ik01NC45ODQtMi4zMzZjMi44MzMgMy44NTItLjgwOCAxMS4zNC04LjEzMSAxNi43MjdzLTE1LjU1NyA2LjYzMS0xOC4zOSAyLjc4Yy0yLjgzMy0zLjg1My44MDctMTEuMzQyIDguMTMtMTYuNzI4czE1LjU1OC02LjYzMSAxOC4zOS0yLjc4IiBmaWxsPSIjNzQ5YmZmIi8+PC9nPjxnIGZpbHRlcj0idXJsKCNsKSI+PGVsbGlwc2UgY3g9IjE5LjkwMiIgY3k9IjMuMzU2IiByeD0iMjcuOTcxIiByeT0iMTcuMzg4IiB0cmFuc2Zvcm09InJvdGF0ZSgtNDIuODQ4IDE5LjkwMiAzLjM1NikiIGZpbGw9IiNmYzQxM2QiLz48L2c+PGcgZmlsdGVyPSJ1cmwoI20pIj48ZWxsaXBzZSBjeD0iMTMuNTgzIiBjeT0iNDYuNzUiIHJ4PSIxNC45ODkiIHJ5PSI4LjcxNyIgdHJhbnNmb3JtPSJyb3RhdGUoMzUuNTkyIDEzLjU4MyA0Ni43NSkiIGZpbGw9IiNmZmVlNDgiLz48L2c+PC9nPjxkZWZzPjxmaWx0ZXIgaWQ9ImMiIHg9Ii0xOS44MjQiIHk9IjEzLjE1MiIgd2lkdGg9IjM5LjI3NCIgaGVpZ2h0PSI0My4yMTciIGZpbHRlclVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgY29sb3ItaW50ZXJwb2xhdGlvbi1maWx0ZXJzPSJzUkdCIj48ZmVGbG9vZCBmbG9vZC1vcGFjaXR5PSIwIiByZXN1bHQ9IkJhY2tncm91bmRJbWFnZUZpeCIvPjxmZUJsZW5kIGluPSJTb3VyY2VHcmFwaGljIiBpbjI9IkJhY2tncm91bmRJbWFnZUZpeCIgcmVzdWx0PSJzaGFwZSIvPjxmZUdhdXNzaWFuQmx1ciBzdGREZXZpYXRpb249IjIuNDYiIHJlc3VsdD0iZWZmZWN0MV9mb3JlZ3JvdW5kQmx1cl8xMDg1OV80ODk1Ii8+PC9maWx0ZXI+PGZpbHRlciBpZD0iZCIgeD0iLTE1LjAwMSIgeT0iLTQwLjI1NyIgd2lkdGg9Ijg0Ljg2OCIgaGVpZ2h0PSI4NS42ODgiIGZpbHRlclVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgY29sb3ItaW50ZXJwb2xhdGlvbi1maWx0ZXJzPSJzUkdCIj48ZmVGbG9vZCBmbG9vZC1vcGFjaXR5PSIwIiByZXN1bHQ9IkJhY2tncm91bmRJbWFnZUZpeCIvPjxmZUJsZW5kIGluPSJTb3VyY2VHcmFwaGljIiBpbjI9IkJhY2tncm91bmRJbWFnZUZpeCIgcmVzdWx0PSJzaGFwZSIvPjxmZUdhdXNzaWFuQmx1ciBzdGREZXZpYXRpb249IjExLjg5MSIgcmVzdWx0PSJlZmZlY3QxX2ZvcmVncm91bmRCbHVyXzEwODU5XzQ4OTUiLz48L2ZpbHRlcj48ZmlsdGVyIGlkPSJlIiB4PSItMjAuNzc2IiB5PSIxMS45MjciIHdpZHRoPSI3OS40NTQiIGhlaWdodD0iOTAuOTE3IiBmaWx0ZXJVbml0cz0idXNlclNwYWNlT25Vc2UiIGNvbG9yLWludGVycG9sYXRpb24tZmlsdGVycz0ic1JHQiI+PGZlRmxvb2QgZmxvb2Qtb3BhY2l0eT0iMCIgcmVzdWx0PSJCYWNrZ3JvdW5kSW1hZ2VGaXgiLz48ZmVCbGVuZCBpbj0iU291cmNlR3JhcGhpYyIgaW4yPSJCYWNrZ3JvdW5kSW1hZ2VGaXgiIHJlc3VsdD0ic2hhcGUiLz48ZmVHYXVzc2lhbkJsdXIgc3RkRGV2aWF0aW9uPSIxMC4xMDkiIHJlc3VsdD0iZWZmZWN0MV9mb3JlZ3JvdW5kQmx1cl8xMDg1OV80ODk1Ii8+PC9maWx0ZXI+PGZpbHRlciBpZD0iZiIgeD0iLTIwLjc3NiIgeT0iMTEuOTI3IiB3aWR0aD0iNzkuNDU0IiBoZWlnaHQ9IjkwLjkxNyIgZmlsdGVyVW5pdHM9InVzZXJTcGFjZU9uVXNlIiBjb2xvci1pbnRlcnBvbGF0aW9uLWZpbHRlcnM9InNSR0IiPjxmZUZsb29kIGZsb29kLW9wYWNpdHk9IjAiIHJlc3VsdD0iQmFja2dyb3VuZEltYWdlRml4Ii8+PGZlQmxlbmQgaW49IlNvdXJjZUdyYXBoaWMiIGluMj0iQmFja2dyb3VuZEltYWdlRml4IiByZXN1bHQ9InNoYXBlIi8+PGZlR2F1c3NpYW5CbHVyIHN0ZERldmlhdGlvbj0iMTAuMTA5IiByZXN1bHQ9ImVmZmVjdDFfZm9yZWdyb3VuZEJsdXJfMTA4NTlfNDg5NSIvPjwvZmlsdGVyPjxmaWx0ZXIgaWQ9ImciIHg9Ii0xOS44NDUiIHk9IjE1LjQ1OSIgd2lkdGg9Ijc5LjczMSIgaGVpZ2h0PSI4MS41MDUiIGZpbHRlclVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgY29sb3ItaW50ZXJwb2xhdGlvbi1maWx0ZXJzPSJzUkdCIj48ZmVGbG9vZCBmbG9vZC1vcGFjaXR5PSIwIiByZXN1bHQ9IkJhY2tncm91bmRJbWFnZUZpeCIvPjxmZUJsZW5kIGluPSJTb3VyY2VHcmFwaGljIiBpbjI9IkJhY2tncm91bmRJbWFnZUZpeCIgcmVzdWx0PSJzaGFwZSIvPjxmZUdhdXNzaWFuQmx1ciBzdGREZXZpYXRpb249IjEwLjEwOSIgcmVzdWx0PSJlZmZlY3QxX2ZvcmVncm91bmRCbHVyXzEwODU5XzQ4OTUiLz48L2ZpbHRlcj48ZmlsdGVyIGlkPSJoIiB4PSIyOS44MzIiIHk9Ii0xMS41NTIiIHdpZHRoPSI3NS4xMTciIGhlaWdodD0iNzMuNzU4IiBmaWx0ZXJVbml0cz0idXNlclNwYWNlT25Vc2UiIGNvbG9yLWludGVycG9sYXRpb24tZmlsdGVycz0ic1JHQiI+PGZlRmxvb2QgZmxvb2Qtb3BhY2l0eT0iMCIgcmVzdWx0PSJCYWNrZ3JvdW5kSW1hZ2VGaXgiLz48ZmVCbGVuZCBpbj0iU291cmNlR3JhcGhpYyIgaW4yPSJCYWNrZ3JvdW5kSW1hZ2VGaXgiIHJlc3VsdD0ic2hhcGUiLz48ZmVHYXVzc2lhbkJsdXIgc3RkRGV2aWF0aW9uPSI5LjYwNiIgcmVzdWx0PSJlZmZlY3QxX2ZvcmVncm91bmRCbHVyXzEwODU5XzQ4OTUiLz48L2ZpbHRlcj48ZmlsdGVyIGlkPSJpIiB4PSItMzguNTgzIiB5PSItMTYuMjUzIiB3aWR0aD0iNzguMTM1IiBoZWlnaHQ9Ijc4Ljc1OCIgZmlsdGVyVW5pdHM9InVzZXJTcGFjZU9uVXNlIiBjb2xvci1pbnRlcnBvbGF0aW9uLWZpbHRlcnM9InNSR0IiPjxmZUZsb29kIGZsb29kLW9wYWNpdHk9IjAiIHJlc3VsdD0iQmFja2dyb3VuZEltYWdlRml4Ii8+PGZlQmxlbmQgaW49IlNvdXJjZUdyYXBoaWMiIGluMj0iQmFja2dyb3VuZEltYWdlRml4IiByZXN1bHQ9InNoYXBlIi8+PGZlR2F1c3NpYW5CbHVyIHN0ZERldmlhdGlvbj0iOC43MDYiIHJlc3VsdD0iZWZmZWN0MV9mb3JlZ3JvdW5kQmx1cl8xMDg1OV80ODk1Ii8+PC9maWx0ZXI+PGZpbHRlciBpZD0iaiIgeD0iOC4xMDciIHk9Ii01Ljk2NiIgd2lkdGg9Ijc4Ljg3NyIgaGVpZ2h0PSI3Ny41MzkiIGZpbHRlclVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgY29sb3ItaW50ZXJwb2xhdGlvbi1maWx0ZXJzPSJzUkdCIj48ZmVGbG9vZCBmbG9vZC1vcGFjaXR5PSIwIiByZXN1bHQ9IkJhY2tncm91bmRJbWFnZUZpeCIvPjxmZUJsZW5kIGluPSJTb3VyY2VHcmFwaGljIiBpbjI9IkJhY2tncm91bmRJbWFnZUZpeCIgcmVzdWx0PSJzaGFwZSIvPjxmZUdhdXNzaWFuQmx1ciBzdGREZXZpYXRpb249IjcuNzc1IiByZXN1bHQ9ImVmZmVjdDFfZm9yZWdyb3VuZEJsdXJfMTA4NTlfNDg5NSIvPjwvZmlsdGVyPjxmaWx0ZXIgaWQ9ImsiIHg9IjEzLjU4NyIgeT0iLTE4LjQ4OCIgd2lkdGg9IjU2LjI3MiIgaGVpZ2h0PSI1MS44MSIgZmlsdGVyVW5pdHM9InVzZXJTcGFjZU9uVXNlIiBjb2xvci1pbnRlcnBvbGF0aW9uLWZpbHRlcnM9InNSR0IiPjxmZUZsb29kIGZsb29kLW9wYWNpdHk9IjAiIHJlc3VsdD0iQmFja2dyb3VuZEltYWdlRml4Ii8+PGZlQmxlbmQgaW49IlNvdXJjZUdyYXBoaWMiIGluMj0iQmFja2dyb3VuZEltYWdlRml4IiByZXN1bHQ9InNoYXBlIi8+PGZlR2F1c3NpYW5CbHVyIHN0ZERldmlhdGlvbj0iNi45NTciIHJlc3VsdD0iZWZmZWN0MV9mb3JlZ3JvdW5kQmx1cl8xMDg1OV80ODk1Ii8+PC9maWx0ZXI+PGZpbHRlciBpZD0ibCIgeD0iLTE1LjUyNiIgeT0iLTMxLjI5NyIgd2lkdGg9IjcwLjg1NiIgaGVpZ2h0PSI2OS4zMDYiIGZpbHRlclVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgY29sb3ItaW50ZXJwb2xhdGlvbi1maWx0ZXJzPSJzUkdCIj48ZmVGbG9vZCBmbG9vZC1vcGFjaXR5PSIwIiByZXN1bHQ9IkJhY2tncm91bmRJbWFnZUZpeCIvPjxmZUJsZW5kIGluPSJTb3VyY2VHcmFwaGljIiBpbjI9IkJhY2tncm91bmRJbWFnZUZpeCIgcmVzdWx0PSJzaGFwZSIvPjxmZUdhdXNzaWFuQmx1ciBzdGREZXZpYXRpb249IjUuODc2IiByZXN1bHQ9ImVmZmVjdDFfZm9yZWdyb3VuZEJsdXJfMTA4NTlfNDg5NSIvPjwvZmlsdGVyPjxmaWx0ZXIgaWQ9Im0iIHg9Ii0xNC4xNjgiIHk9IjIwLjk2NCIgd2lkdGg9IjU1LjUwMiIgaGVpZ2h0PSI1MS41NzEiIGZpbHRlclVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgY29sb3ItaW50ZXJwb2xhdGlvbi1maWx0ZXJzPSJzUkdCIj48ZmVGbG9vZCBmbG9vZC1vcGFjaXR5PSIwIiByZXN1bHQ9IkJhY2tncm91bmRJbWFnZUZpeCIvPjxmZUJsZW5kIGluPSJTb3VyY2VHcmFwaGljIiBpbjI9IkJhY2tncm91bmRJbWFnZUZpeCIgcmVzdWx0PSJzaGFwZSIvPjxmZUdhdXNzaWFuQmx1ciBzdGREZXZpYXRpb249IjcuMjczIiByZXN1bHQ9ImVmZmVjdDFfZm9yZWdyb3VuZEJsdXJfMTA4NTlfNDg5NSIvPjwvZmlsdGVyPjxsaW5lYXJHcmFkaWVudCBpZD0iYSIgeDE9IjE4LjQ0NyIgeTE9IjQzLjQyIiB4Mj0iNTIuMTUzIiB5Mj0iMTUuMDA0IiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHN0b3Agc3RvcC1jb2xvcj0iIzQ4OTNmYyIvPjxzdG9wIG9mZnNldD0iLjI3IiBzdG9wLWNvbG9yPSIjNDg5M2ZjIi8+PHN0b3Agb2Zmc2V0PSIuNzc3IiBzdG9wLWNvbG9yPSIjOTY5ZGZmIi8+PHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjYmQ5OWZlIi8+PC9saW5lYXJHcmFkaWVudD48L2RlZnM+PC9zdmc+";

  // typically extensions should work offline, but this is a online AI extension,
  // so all offline rules break for this...
  const { GoogleGenAI } = await import("https://cdn.jsdelivr.net/npm/@google/genai@1.33.0/+esm")

  const displayModels = [
    "Gemini 2.5 - Flash Lite", "Gemini 2.5 - Flash", "Gemini 2.5 - Pro",
    "Gemini 3 - Flash (Preview)", "Gemini 3 - Pro (Preview)", "Gemini 3 - Deep Thinking"
  ];
  const actualModels = [
    "gemini-2.5-flash-lite", "gemini-2.5-flash", "gemini-2.5-pro",
    "gemini-3-flash-preview", "gemini-3-pro-preview", "gemini-3-deep-think"
  ];

  let ai = new GoogleGenAI({ apiKey: "" });
  let instruction = "";
  let key = "No API key has been set.";
  let modelChoice = "gemini-2.5-flash";

  class smolderdevGeminiAPI {
    getInfo() {
      return {
        id: "smolderdevGeminiAPI",
        name: Scratch.translate("Gemini API"),
        color1: "#0086c9",
        menuIconURI,
        blockIconURI: menuIconURI,
        blocks: [
          {
            opcode: "generate",
            blockType: Scratch.BlockType.REPORTER,
            text: Scratch.translate(
              "generate with prompt [contents] and creativity (0-2) [temp]"
            ),
            arguments: {
              contents: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: "Tell me about Gemini.",
              },
              temp: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: 1,
              },
            },
          },
          {
            opcode: "getKey",
            blockType: Scratch.BlockType.REPORTER,
            text: Scratch.translate("current API key"),
          },
          {
            opcode: "getModel",
            blockType: Scratch.BlockType.REPORTER,
            text: Scratch.translate("selected model"),
          },
          {
            opcode: "setKey",
            blockType: Scratch.BlockType.COMMAND,
            text: Scratch.translate("set API key to [key]"),
            arguments: {
              key: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: "",
              },
            },
          },
          {
            opcode: "setInstruction",
            blockType: Scratch.BlockType.COMMAND,
            text: Scratch.translate("set personality to [personality]"),
            arguments: {
              personality: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: "",
              },
            },
          },
          {
            opcode: "setModel",
            blockType: Scratch.BlockType.COMMAND,
            text: Scratch.translate("use model [model]"),
            arguments: {
              model: {
                type: Scratch.ArgumentType.STRING,
                menu: "models",
              },
            },
          },
        ],
        menus: {
          models: displayModels
        },
      };
    }

    async generate(args) {
      const response = await ai.models.generateContent({
        model: getActualModel(modelChoice),
        contents: Scratch.Cast.toString(args.contents),
        config: {
          systemInstruction: instruction,
          temperature: Math.max(0, Math.min(2, Scratch.Cast.toNumber(args.temp))),
        },
      });
      return response.text;
    }

    setKey(args) {
      key = Scratch.Cast.toString(args.key);
      ai = new GoogleGenAI({
        apiKey: key
      });
    }

    setInstruction(args) {
      instruction = Scratch.cast.toString(args.personality);
    }

    setModel(args) {
      modelChoice = Scratch.Cast.toString(args.model);
    }

    getKey() {
      return key;
    }

    getModel() {
      return modelChoice;
    }

    getActualModel(display) {
      return actualModels[displayModels.indexOf(display)];
    }
  }
  Scratch.extensions.register(new smolderdevGeminiAPI());
})(Scratch);
