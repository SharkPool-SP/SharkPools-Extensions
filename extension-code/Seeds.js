// Name: Seeds
// ID: SeedsSP
// Description: Generate random seeded numbers, generated terrain, and more!
// By: SharkPool

// Version V.2.0.0
  
(function(Scratch) {
  "use strict";
  
  if (!Scratch.extensions.unsandboxed) throw new Error("Seeds must run unsandboxed");

  const menuIconURI =
"data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHdpZHRoPSIxMjEuMDAxOTYiIGhlaWdodD0iMTIxLjAwMTk2IiB2aWV3Qm94PSIwLDAsMTIxLjAwMTk2LDEyMS4wMDE5NiI+PGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTE3OS40OTkwNSwtMTE5LjQ5OTA1KSI+PGcgZGF0YS1wYXBlci1kYXRhPSJ7JnF1b3Q7aXNQYWludGluZ0xheWVyJnF1b3Q7OnRydWV9IiBmaWxsLXJ1bGU9Im5vbnplcm8iIHN0cm9rZS1saW5lam9pbj0ibWl0ZXIiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgc3Ryb2tlLWRhc2hhcnJheT0iIiBzdHJva2UtZGFzaG9mZnNldD0iMCIgc3R5bGU9Im1peC1ibGVuZC1tb2RlOiBub3JtYWwiPjxwYXRoIGQ9Ik0xNzkuNDk5MDUsMTgwLjAwMDAxYzAsLTMzLjQxMzc3IDI3LjA4NzIxLC02MC41MDA5NyA2MC41MDA5OCwtNjAuNTAwOTdjMzMuNDEzNzcsMCA2MC41MDA5OCwyNy4wODcyMSA2MC41MDA5OCw2MC41MDA5OGMwLDMzLjQxMzc3IC0yNy4wODcyMSw2MC41MDA5OCAtNjAuNTAwOTgsNjAuNTAwOThjLTMzLjQxMzc3LDAgLTYwLjUwMDk4LC0yNy4wODcyMSAtNjAuNTAwOTgsLTYwLjUwMDk4eiIgZmlsbD0iI2U2NGUyOCIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjAiIHN0cm9rZS1saW5lY2FwPSJidXR0Ii8+PHBhdGggZD0iTTI0NS43MDU5NiwxNjMuODYwMTZjMC43MjMwNiwtMS4yNjUzNSAwLjk3MTM4LC0zLjAwODY3IDEuOTgwNzIsLTMuOTg1ODFjMC4xNTM5MywtMC4xNDkwMiAwLjMyNTU3LC0wLjI4MDIyIDAuNTE5MjgsLTAuMzg5MTljMC4yNDU4MywtMC4xMzgyOCAwLjUwNzkyLC0wLjI0MTIyIDAuNzc5MjUsLTAuMzIxMDJjMC41MzY1MSwtMC4xOTY2NSAxLjExNjEsLTAuMzAzOTggMS43MjA3NSwtMC4zMDM5OGMxLjAzNjMsLTAuMTM0NTIgOS4zODI1OSwtNC4zNDcxOCA3Ljg1MTY3LC02LjgwNjcyYy0zLjE1Mzk5LC01LjA2NzEyIC0xMy41MTA3NSwtNi42Mzc0IC0xNC40MjMxMiwtMTMuMDIyMjVjLTAuNTkwNDMsLTQuMTMxODkgMS43NDk3MiwtNy44NDg5OSA2LjU3MTQ1LC02Ljg4NTc1YzIuNjIwNjQsMC41MjM1MyAxMi42NDg1Miw0LjkwMzg0IDExLjQyNDEzLDYuMDU5MDljLTEuMDgzMTYsMS4wMjE5OSAtMTAuOTUxNzQsLTEuODIzNjkgLTkuNjk5OTksMC45ODA3NmMxLjI1MTc2LDIuODA0NDUgOS4yMzM1Nyw0LjMwODk0IDEyLjY3ODEyLDEwLjc3MTZjMy40NDQ1NSw2LjQ2MjY2IDIuOTYwODEsOC43OTM2OSAtMi4wMzgwNywxMy41NTU0NGMtMi42NTUxNywyLjUyOTIyIC01Ljg2NzE2LDUuMzk2NjQgLTkuODYxODEsNS4zNDc4MmMtMC43NTQzLC0wLjAwOTIyIC00LjQ5MjA2LDAuMjY4MDUgLTUuMDQwMDUsLTAuNjkwOTJ6IiBmaWxsPSIjZmZlMTY2IiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMC41IiBzdHJva2UtbGluZWNhcD0iYnV0dCIvPjxwYXRoIGQ9Ik0yNTkuOTg2ODQsMjAxLjIzNTE2Yy0zLjEwMTU4LDUuNzgzMDggLTQuMzU4NzksMTIuMzM3NzcgLTguNDA3NzksMTYuMjgwMDFjLTguOTEwMDEsOC42NzUwNyAtMjEuNjc3OTMsMTAuNzM3NzMgLTI5LjA5MjYyLDYuNzYxMDljLTguODQzMzQsLTQuNzQyODUgLTEyLjc4ODA0LC0yMC4wOTYyNSAtNy43Njg4MywtMzUuMjIyODJjMS4xMDE1NSwtMy4zMTk3OSA0LjQyOTc4LC01LjQzMjA1IDYuMjE2MywtOC43NjMxMmM4LjUzMDkxLC0xNS45MDY0MSAyMi4xMzAzLC0yNS43NjE3OSAzMi42MzA4MSwtMjQuNTQ3OTNjMS43MTgwOSwwLjE5ODYxIC03LjAxODM3LDEyLjk1MDkgLTUuNTAxOTgsMTMuNzY0MTdjMi4wMjIyNywxLjA4NDU4IDE0LjA2MTM1LC05LjU5OTA3IDE1LjM3MDU1LC03LjYzNTc4YzUuNjcyNCw4LjUwNjM2IDQuNjE4ODMsMjQuMzI2MjEgLTMuNDQ2NDIsMzkuMzY0Mzl6IiBmaWxsPSIjOGIzOTAwIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMCIgc3Ryb2tlLWxpbmVjYXA9ImJ1dHQiLz48cGF0aCBkPSJNMjE0LjMzNDAxLDIwMy43NzUwOWMtMC41NDc0NiwtMC4yMDA4MyAtMC4yNzYzNiwtNi4yMjEgLTAuMjI3NDYsLTYuODUyMzVjMC42NjI4MSwtOC41NTc4MiA1LjAwMzgyLC0yMS4xNjk3MiAxMy40ODc5OSwtMjcuNDg2MDJjMi4yNTQyNywtMS42NzgyNiAxMC43NzU4NywtOS4xMTA1OSAxMi44NTA2NSwtMTEuMDI1NzhjMC42NTMyLC0wLjYwMjk2IDEwLjgwMzU4LC0zLjA0NTc0IDEwLjgwMzU4LC0wLjgzNjZjMCwwLjg4Mzg3IC0wLjI4NjY4LDEuNzAwNzggLTAuNzcyMTIsMi4zNjI4M2wtMS40NTU1LDIuMDM3NjljLTMuNjQ1NjMsNi40Mjk1NSAtNC44MDU3MiwxNC4yNjkyMiAtOC44ODkwNSwyMC4yMzkwOGMwLDAgLTMuNDQ1MSwtOS41Mzc5NiAtNC43MTExMSwtOC40NzkwNWMtMi45MDM3MSwyLjQyODcyIC03LjEwODA4LDcuMDc4ODUgLTguMTE4NjMsNy44MDYyMmMtMS4zOTk2NSwxLjAwNzQ0IC03LjgzMDIxLDI0LjExODggLTEyLjk2ODM1LDIyLjIzMzk4eiIgZmlsbD0iI2FkNDgwMCIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjAuNSIgc3Ryb2tlLWxpbmVjYXA9ImJ1dHQiLz48cGF0aCBkPSJNMjU3LjcxNzI1LDE2Mi43OTY3N2MzLjU3NzcxLC0xLjc4ODg2IDYuMzA5NDQsLTAuNzI1NDcgNi4zMDk0NCwtMC43MjU0N2MyLjQyNjMxLDQuOTQzMTcgMS45NjI2OCw4Ljg0NzUzIDIuMzAwMywxNC4xMTE5NGMwLjI3NTIzLDQuMjkxNTcgLTEuMzQ4MTQsOC42OTQxOSAtMS45MDc5OCwxMi45OTQ2MmMtMC45NjU3LDcuNDE4MDcgLTUuMDU5NjksMTMuNDA0NDIgLTguNjY4NjEsMTkuNzI0NjljLTIuMDQ1NTgsMy41NzQ0OCAtMi4zNTU1Myw4LjU2MzQ2IC01LjY5NzEzLDExLjIwMzA2Yy0zLjAxNjMyLDIuMzgyNjYgLTIzLjA5MDg4LDkuMDMyNDUgLTIyLjY1MjQ3LDUuMzQ5ODZjMC4xMzk1MiwtMS4xNzE5NCAwLjUwODkzLC01LjIzNzg5IDUuMjUzNjUsLTguMzYyMTNjMi44MzUyNCwtMS44NjY5MiA5LjI1MzQ2LC0xLjc4MTA2IDEyLjUxMjEyLC01LjAyNTYyYzEuOTUwOTIsLTEuOTQyNDggMC4yODkyOCwtNi45OTU4NiAyLjIzNzcsLTkuOTgwODdjMi42Mjc0MiwtNC4wMjUyNSA4LjczMjc5LC02LjA4OTkgOS45ODc1OSwtOC42ODMzNmMyLjMwNTU0LC00Ljc2NTE0IC0zLjIxNjMyLC0xMC4wMDA0MyAtMy40OTY5LC0xNC43NzQzN2MtMC40OTEwOCwtOC4zNTUzMiAyLjc1MjQ5LC0xNS4yOTc0MyAzLjgyMjMxLC0xNS44MzIzNHoiIGZpbGw9IiNhZDQ4MDAiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIwLjUiIHN0cm9rZS1saW5lY2FwPSJidXR0Ii8+PHBhdGggZD0iTTI1OS45ODY4NCwyMDEuMjM1MTZjLTEuMzI5NSwyLjQ3ODkzIC0yLjc4MjA5LDQuODEwODkgLTQuMzI2ODgsNi45NzY5Yy0yLjI1MDk4LDMuMTU2MTggLTEuMjQwNSw4LjE2MDAzIC0zLjc4NzMsMTAuNTUyN2MtMi42OTg1NSwyLjUzNTIzIC04Ljk2NjY4LDIuNDA4ODIgLTExLjc3NjIsMy45NTA5NWMtMy4wODA3NCwxLjY5MDk5IC02LjE1OTc4LDQuOTQyOTQgLTkuMDg3MTEsNS4yNjM2Yy0zLjA2NDYyLDAuMzM1NyAtNS45NjI5NywtMi4zMzAwOCAtOC41MjI5MiwtMy43MDMwM2MtMS43Njk1LC0wLjk0OTAyIC01LjQ2NzQxLC0xLjAxNTM2IC02LjY5MTI5LC0yLjY0NjY3Yy0xLjM3MTYyLC0xLjgyODIzIC0wLjE5OTA4LC01LjMwMDIzIC0wLjg3OTE1LC03LjgwNzgyYy0wLjg5NDM2LC0zLjI5Nzc4IC0xLjE4NzgyLC03LjEwMTg3IC0wLjg3Mjg0LC0xMS4xOTg4YzAuMzA0MjYsLTMuOTU3NjMgLTEuOTY2NjEsLTguMTg4NTEgLTAuNTIwMDMsLTEyLjUwMDIyYzEuMDkzNCwtMy4yNTkgNS42NTc5NSwtNi41NjQxNyA3LjQxMDc4LC05LjgzMjQzYzIuNTE5NTQsLTQuNjk3ODQgNS40ODExOSwtOC44Njc4NiA4LjY3NDU0LC0xMi4zODA4YzEuMjgxMTUsLTEuNDA5MzcgMC4wODUyNywtMi43MTI5NiAxLjQyNzQyLC0zLjkwMjQ2YzAuODk1MjYsLTAuNzkzNDMgNC4zMTUzOSwtMS41MzYwOSA1LjIyNzcyLC0yLjIyNTVjNi4zNzcyNiwtNC44MTkwNSAxMy4wNzI5LC03LjAzNjI0IDE4LjcwOTYzLC01LjgwNTMzYzAuNTk1MDcsMC4xMjk5NCAtNy41Njk4NCwxMC4zMDE2NSAtMTIuNzM5MTUsMjAuODgyNjFjLTUuMzEzNTYsMTAuODc2MjIgLTguNDY3NiwyMS43MjYyNSAtNy45MTE5OCwyMi4wMjQyNGMwLjU2NjQ2LDAuMzAzODEgNC4yODc5MSwtOS41OTE0IDEwLjc4MjA3LC0yMC4wMjc3NGM2LjEyOTU0LC05Ljg1MDM2IDE1Ljg4NTE4LC0xOS44MzUyNyAxNi4zMTc0MiwtMTkuNDE1NWMxLjExMzAyLDEuMDgwOTIgNC44ODkzMywyLjM2MzQyIDUuNjcwNiwzLjgxNjA5YzEuMjE4OTUsMi4yNjY0OSAtMC43OTU4NSw0Ljk0NzI0IC0wLjM5MTM4LDcuOTIyOTZjMC43ODc5Niw1Ljc5NzE1IDAuMDIyMzYsMTIuNzEzODIgLTIuMzI3OTYsMTkuODY4MWMtMC41OTk2MywxLjgyNTIzIDAuNTgzMzUsNS4yMzczOCAtMC4yMjMwOSw3LjA3ODg5Yy0wLjY4NDMsMS41NjI2MyAtMy4zMjg5OSwxLjU1NDM5IC00LjE2Mjg5LDMuMTA5MjZ6IiBmaWxsPSJub25lIiBzdHJva2U9IiM2NTJhMDAiIHN0cm9rZS13aWR0aD0iNSIgc3Ryb2tlLWxpbmVjYXA9ImJ1dHQiLz48cGF0aCBkPSJNMjIzLjM2MjY3LDIxMi41NzUyM2MwLDAgLTIuNzg4MjUsLTguMzUwMjkgLTIuNTE0MzMsLTEzLjgyODc5YzAuMjczOTIsLTUuNDc4NSAzLjE3MzkzLC02LjE4MTI5IDUuMDI4NjUsLTEwLjM3MTZjMS44NTQ3MywtNC4xOTAzMSAzLjQ1NzIsLTguODAwMTQgMy40NTcyLC04LjgwMDE0IiBmaWxsPSJub25lIiBzdHJva2U9IiM2NTJhMDAiIHN0cm9rZS13aWR0aD0iMi41IiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48cGF0aCBkPSJNMjYxLjUxMjk1LDE2OC44MjkxN2MwLDAgLTAuNzQ0NTMsMy40ODg5NSAtMS4xNzI0Myw2LjgxMTJjLTAuNDI3OSwzLjMyMjI1IDEuMTE4ODUsNC44NjAyIC0wLjc4NTMxLDguMzg4OTNjLTEuOTA0MTYsMy41Mjg3MyAtNC42MTA1Niw4LjMyMTMzIC00LjYxMDU2LDguMzIxMzMiIGRhdGEtcGFwZXItZGF0YT0ieyZxdW90O2luZGV4JnF1b3Q7Om51bGx9IiBmaWxsPSJub25lIiBzdHJva2U9IiM2NTJhMDAiIHN0cm9rZS13aWR0aD0iMi41IiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48cGF0aCBkPSJNMjQ4LjcwNDA0LDE5Mi4yMDIzNmMwLDAgLTQuMTc5MzgsMi44NDA4MiAtNS40OTQ0MSw1LjkyMTU4Yy0xLjMxNTAzLDMuMDgwNzYgMC42OTgxOCw3LjgwOTkzIC0yLjA5MzY0LDEwLjY4ODAzYy0yLjc5MTgyLDIuODc4MSAtNS4xMjc4Myw0LjI0MDAzIC01LjEyNzgzLDQuMjQwMDMiIGRhdGEtcGFwZXItZGF0YT0ieyZxdW90O2luZGV4JnF1b3Q7Om51bGx9IiBmaWxsPSJub25lIiBzdHJva2U9IiM2NTJhMDAiIHN0cm9rZS13aWR0aD0iMi41IiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48L2c+PC9nPjwvc3ZnPg==";

  const blockIconURI =
"data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHdpZHRoPSI1OC40MzkyMSIgaGVpZ2h0PSI5OC40ODc1NSIgdmlld0JveD0iMCwwLDU4LjQzOTIxLDk4LjQ4NzU1Ij48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMjExLjE1Mjk2LC0xMzEuOTkxNzQpIj48ZyBkYXRhLXBhcGVyLWRhdGE9InsmcXVvdDtpc1BhaW50aW5nTGF5ZXImcXVvdDs6dHJ1ZX0iIGZpbGwtcnVsZT0ibm9uemVybyIgc3Ryb2tlLWxpbmVqb2luPSJtaXRlciIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBzdHJva2UtZGFzaGFycmF5PSIiIHN0cm9rZS1kYXNob2Zmc2V0PSIwIiBzdHlsZT0ibWl4LWJsZW5kLW1vZGU6IG5vcm1hbCI+PHBhdGggZD0iTTI0NS43MDU5NiwxNjMuODYwMTVjMC43MjMwNiwtMS4yNjUzNSAwLjk3MTM4LC0zLjAwODY3IDEuOTgwNzIsLTMuOTg1ODFjMC4xNTM5MywtMC4xNDkwMiAwLjMyNTU3LC0wLjI4MDIyIDAuNTE5MjgsLTAuMzg5MTljMC4yNDU4MywtMC4xMzgyOCAwLjUwNzkyLC0wLjI0MTIyIDAuNzc5MjUsLTAuMzIxMDJjMC41MzY1MSwtMC4xOTY2NSAxLjExNjEsLTAuMzAzOTggMS43MjA3NSwtMC4zMDM5OGMxLjAzNjMsLTAuMTM0NTIgOS4zODI1OSwtNC4zNDcxOCA3Ljg1MTY3LC02LjgwNjcyYy0zLjE1Mzk5LC01LjA2NzEyIC0xMy41MTA3NSwtNi42Mzc0IC0xNC40MjMxMiwtMTMuMDIyMjVjLTAuNTkwNDMsLTQuMTMxODkgMS43NDk3MiwtNy44NDg5OSA2LjU3MTQ1LC02Ljg4NTc1YzIuNjIwNjQsMC41MjM1MyAxMi42NDg1Miw0LjkwMzg0IDExLjQyNDEzLDYuMDU5MDljLTEuMDgzMTYsMS4wMjE5OSAtMTAuOTUxNzQsLTEuODIzNjkgLTkuNjk5OTksMC45ODA3NmMxLjI1MTc2LDIuODA0NDUgOS4yMzM1Nyw0LjMwODk0IDEyLjY3ODEyLDEwLjc3MTZjMy40NDQ1NSw2LjQ2MjY2IDIuOTYwODEsOC43OTM2OSAtMi4wMzgwNywxMy41NTU0NGMtMi42NTUxNywyLjUyOTIyIC01Ljg2NzE2LDUuMzk2NjQgLTkuODYxODEsNS4zNDc4MmMtMC43NTQzLC0wLjAwOTIyIC00LjQ5MjA2LDAuMjY4MDUgLTUuMDQwMDUsLTAuNjkwOTJ6IiBmaWxsPSIjZmZlMTY2IiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMC41IiBzdHJva2UtbGluZWNhcD0iYnV0dCIvPjxwYXRoIGQ9Ik0yNTkuOTg2ODQsMjAxLjIzNTE1Yy0zLjEwMTU4LDUuNzgzMDggLTQuMzU4NzksMTIuMzM3NzcgLTguNDA3NzksMTYuMjgwMDFjLTguOTEwMDEsOC42NzUwNyAtMjEuNjc3OTMsMTAuNzM3NzMgLTI5LjA5MjYyLDYuNzYxMDljLTguODQzMzQsLTQuNzQyODUgLTEyLjc4ODA0LC0yMC4wOTYyNSAtNy43Njg4MywtMzUuMjIyODJjMS4xMDE1NSwtMy4zMTk3OSA0LjQyOTc4LC01LjQzMjA1IDYuMjE2MywtOC43NjMxMmM4LjUzMDkxLC0xNS45MDY0MSAyMi4xMzAzLC0yNS43NjE3OSAzMi42MzA4MSwtMjQuNTQ3OTNjMS43MTgwOSwwLjE5ODYxIC03LjAxODM3LDEyLjk1MDkgLTUuNTAxOTgsMTMuNzY0MTdjMi4wMjIyNywxLjA4NDU4IDE0LjA2MTM1LC05LjU5OTA3IDE1LjM3MDU1LC03LjYzNTc4YzUuNjcyNCw4LjUwNjM2IDQuNjE4ODMsMjQuMzI2MjEgLTMuNDQ2NDIsMzkuMzY0Mzl6IiBmaWxsPSIjOGIzOTAwIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMCIgc3Ryb2tlLWxpbmVjYXA9ImJ1dHQiLz48cGF0aCBkPSJNMjE0LjMzNDAxLDIwMy43NzUwOGMtMC41NDc0NiwtMC4yMDA4MyAtMC4yNzYzNiwtNi4yMjEgLTAuMjI3NDYsLTYuODUyMzVjMC42NjI4MSwtOC41NTc4MiA1LjAwMzgyLC0yMS4xNjk3MiAxMy40ODc5OSwtMjcuNDg2MDJjMi4yNTQyNywtMS42NzgyNiAxMC43NzU4NywtOS4xMTA1OSAxMi44NTA2NSwtMTEuMDI1NzhjMC42NTMyLC0wLjYwMjk2IDEwLjgwMzU4LC0zLjA0NTc0IDEwLjgwMzU4LC0wLjgzNjZjMCwwLjg4Mzg3IC0wLjI4NjY4LDEuNzAwNzggLTAuNzcyMTIsMi4zNjI4M2wtMS40NTU1LDIuMDM3NjljLTMuNjQ1NjMsNi40Mjk1NSAtNC44MDU3MiwxNC4yNjkyMiAtOC44ODkwNSwyMC4yMzkwOGMwLDAgLTMuNDQ1MSwtOS41Mzc5NiAtNC43MTExMSwtOC40NzkwNWMtMi45MDM3MSwyLjQyODcyIC03LjEwODA4LDcuMDc4ODUgLTguMTE4NjMsNy44MDYyMmMtMS4zOTk2NSwxLjAwNzQ0IC03LjgzMDIxLDI0LjExODggLTEyLjk2ODM1LDIyLjIzMzk4eiIgZmlsbD0iI2FkNDgwMCIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjAuNSIgc3Ryb2tlLWxpbmVjYXA9ImJ1dHQiLz48cGF0aCBkPSJNMjU3LjcxNzI1LDE2Mi43OTY3NmMzLjU3NzcxLC0xLjc4ODg2IDYuMzA5NDQsLTAuNzI1NDcgNi4zMDk0NCwtMC43MjU0N2MyLjQyNjMxLDQuOTQzMTcgMS45NjI2OCw4Ljg0NzUzIDIuMzAwMywxNC4xMTE5NGMwLjI3NTIzLDQuMjkxNTcgLTEuMzQ4MTQsOC42OTQxOSAtMS45MDc5OCwxMi45OTQ2MmMtMC45NjU3LDcuNDE4MDcgLTUuMDU5NjksMTMuNDA0NDIgLTguNjY4NjEsMTkuNzI0NjljLTIuMDQ1NTgsMy41NzQ0OCAtMi4zNTU1Myw4LjU2MzQ2IC01LjY5NzEzLDExLjIwMzA2Yy0zLjAxNjMyLDIuMzgyNjYgLTIzLjA5MDg4LDkuMDMyNDUgLTIyLjY1MjQ3LDUuMzQ5ODZjMC4xMzk1MiwtMS4xNzE5NCAwLjUwODkzLC01LjIzNzg5IDUuMjUzNjUsLTguMzYyMTNjMi44MzUyNCwtMS44NjY5MiA5LjI1MzQ2LC0xLjc4MTA2IDEyLjUxMjEyLC01LjAyNTYyYzEuOTUwOTIsLTEuOTQyNDggMC4yODkyOCwtNi45OTU4NiAyLjIzNzcsLTkuOTgwODdjMi42Mjc0MiwtNC4wMjUyNSA4LjczMjc5LC02LjA4OTkgOS45ODc1OSwtOC42ODMzNmMyLjMwNTU0LC00Ljc2NTE0IC0zLjIxNjMyLC0xMC4wMDA0MyAtMy40OTY5LC0xNC43NzQzN2MtMC40OTEwOCwtOC4zNTUzMiAyLjc1MjQ5LC0xNS4yOTc0MyAzLjgyMjMxLC0xNS44MzIzNHoiIGZpbGw9IiNhZDQ4MDAiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIwLjUiIHN0cm9rZS1saW5lY2FwPSJidXR0Ii8+PHBhdGggZD0iTTI1OS45ODY4NCwyMDEuMjM1MTVjLTEuMzI5NSwyLjQ3ODkzIC0yLjc4MjA5LDQuODEwODkgLTQuMzI2ODgsNi45NzY5Yy0yLjI1MDk4LDMuMTU2MTggLTEuMjQwNSw4LjE2MDAzIC0zLjc4NzMsMTAuNTUyN2MtMi42OTg1NSwyLjUzNTIzIC04Ljk2NjY4LDIuNDA4ODIgLTExLjc3NjIsMy45NTA5NWMtMy4wODA3NCwxLjY5MDk5IC02LjE1OTc4LDQuOTQyOTQgLTkuMDg3MTEsNS4yNjM2Yy0zLjA2NDYyLDAuMzM1NyAtNS45NjI5NywtMi4zMzAwOCAtOC41MjI5MiwtMy43MDMwM2MtMS43Njk1LC0wLjk0OTAyIC01LjQ2NzQxLC0xLjAxNTM2IC02LjY5MTI5LC0yLjY0NjY3Yy0xLjM3MTYyLC0xLjgyODIzIC0wLjE5OTA4LC01LjMwMDIzIC0wLjg3OTE1LC03LjgwNzgyYy0wLjg5NDM2LC0zLjI5Nzc4IC0xLjE4NzgyLC03LjEwMTg3IC0wLjg3Mjg0LC0xMS4xOTg4YzAuMzA0MjYsLTMuOTU3NjMgLTEuOTY2NjEsLTguMTg4NTEgLTAuNTIwMDMsLTEyLjUwMDIyYzEuMDkzNCwtMy4yNTkgNS42NTc5NSwtNi41NjQxNyA3LjQxMDc4LC05LjgzMjQzYzIuNTE5NTQsLTQuNjk3ODQgNS40ODExOSwtOC44Njc4NiA4LjY3NDU0LC0xMi4zODA4YzEuMjgxMTUsLTEuNDA5MzcgMC4wODUyNywtMi43MTI5NiAxLjQyNzQyLC0zLjkwMjQ2YzAuODk1MjYsLTAuNzkzNDMgNC4zMTUzOSwtMS41MzYwOSA1LjIyNzcyLC0yLjIyNTVjNi4zNzcyNiwtNC44MTkwNSAxMy4wNzI5LC03LjAzNjI0IDE4LjcwOTYzLC01LjgwNTMzYzAuNTk1MDcsMC4xMjk5NCAtNy41Njk4NCwxMC4zMDE2NSAtMTIuNzM5MTUsMjAuODgyNjFjLTUuMzEzNTYsMTAuODc2MjIgLTguNDY3NiwyMS43MjYyNSAtNy45MTE5OCwyMi4wMjQyNGMwLjU2NjQ2LDAuMzAzODEgNC4yODc5MSwtOS41OTE0IDEwLjc4MjA3LC0yMC4wMjc3NGM2LjEyOTU0LC05Ljg1MDM2IDE1Ljg4NTE4LC0xOS44MzUyNyAxNi4zMTc0MiwtMTkuNDE1NWMxLjExMzAyLDEuMDgwOTIgNC44ODkzMywyLjM2MzQyIDUuNjcwNiwzLjgxNjA5YzEuMjE4OTUsMi4yNjY0OSAtMC43OTU4NSw0Ljk0NzI0IC0wLjM5MTM4LDcuOTIyOTZjMC43ODc5Niw1Ljc5NzE1IDAuMDIyMzYsMTIuNzEzODIgLTIuMzI3OTYsMTkuODY4MWMtMC41OTk2MywxLjgyNTIzIDAuNTgzMzUsNS4yMzczOCAtMC4yMjMwOSw3LjA3ODg5Yy0wLjY4NDMsMS41NjI2MyAtMy4zMjg5OSwxLjU1NDM5IC00LjE2Mjg5LDMuMTA5MjZ6IiBmaWxsPSJub25lIiBzdHJva2U9IiM2NTJhMDAiIHN0cm9rZS13aWR0aD0iNSIgc3Ryb2tlLWxpbmVjYXA9ImJ1dHQiLz48cGF0aCBkPSJNMjIzLjM2MjY3LDIxMi41NzUyMmMwLDAgLTIuNzg4MjUsLTguMzUwMjkgLTIuNTE0MzMsLTEzLjgyODc5YzAuMjczOTIsLTUuNDc4NSAzLjE3MzkzLC02LjE4MTI5IDUuMDI4NjUsLTEwLjM3MTZjMS44NTQ3MywtNC4xOTAzMSAzLjQ1NzIsLTguODAwMTQgMy40NTcyLC04LjgwMDE0IiBmaWxsPSJub25lIiBzdHJva2U9IiM2NTJhMDAiIHN0cm9rZS13aWR0aD0iMi41IiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48cGF0aCBkPSJNMjYxLjUxMjk1LDE2OC44MjkxNmMwLDAgLTAuNzQ0NTMsMy40ODg5NSAtMS4xNzI0Myw2LjgxMTJjLTAuNDI3OSwzLjMyMjI1IDEuMTE4ODUsNC44NjAyIC0wLjc4NTMxLDguMzg4OTNjLTEuOTA0MTYsMy41Mjg3MyAtNC42MTA1Niw4LjMyMTMzIC00LjYxMDU2LDguMzIxMzMiIGRhdGEtcGFwZXItZGF0YT0ieyZxdW90O2luZGV4JnF1b3Q7Om51bGx9IiBmaWxsPSJub25lIiBzdHJva2U9IiM2NTJhMDAiIHN0cm9rZS13aWR0aD0iMi41IiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48cGF0aCBkPSJNMjQ4LjcwNDA0LDE5Mi4yMDIzNWMwLDAgLTQuMTc5MzgsMi44NDA4MiAtNS40OTQ0MSw1LjkyMTU4Yy0xLjMxNTAzLDMuMDgwNzYgMC42OTgxOCw3LjgwOTkzIC0yLjA5MzY0LDEwLjY4ODAzYy0yLjc5MTgyLDIuODc4MSAtNS4xMjc4Myw0LjI0MDAzIC01LjEyNzgzLDQuMjQwMDMiIGRhdGEtcGFwZXItZGF0YT0ieyZxdW90O2luZGV4JnF1b3Q7Om51bGx9IiBmaWxsPSJub25lIiBzdHJva2U9IiM2NTJhMDAiIHN0cm9rZS13aWR0aD0iMi41IiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48L2c+PC9nPjwvc3ZnPg==";

  class SeedsSP {
    constructor() { this.seeds = {} }
    getInfo() {
      return {
        id: "SeedsSP",
        name: "Seeds",
        docsURI: "https://docs.google.com/document/d/19Xo41od1j6AhFrOQ3_NrJl-OC8cp3Z2FEm3V9lIYSCQ",
        color1: "#e64e28",
        menuIconURI,
        blockIconURI,
        blocks: [
          { blockType: Scratch.BlockType.LABEL, text: "Operations" },
          {
            opcode: "reportSeed",
            blockType: Scratch.BlockType.REPORTER,
            text: "return seed ID [SEED_NAME] [REPORT]",
            arguments: {
              REPORT: { type: Scratch.ArgumentType.STRING, menu: "REPORT" },
              SEED_NAME: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: "seed-1"
              }
            }
          },
          {
            opcode: "resetSeed",
            blockType: Scratch.BlockType.COMMAND,
            text: "delete seed ID [SEED_NAME]",
            arguments: {
              SEED_NAME: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: "seed-1"
              }
            }
          },
          {
            opcode: "toArray",
            blockType: Scratch.BlockType.REPORTER,
            text: "seed ID [SEED_NAME] to Array",
            hideFromPalette: true, // repetitive block, not needed
            arguments: {
              SEED_NAME: { type: Scratch.ArgumentType.STRING, defaultValue: "seed-1" }
            }
          },
          {
            opcode: "seedExists",
            blockType: Scratch.BlockType.BOOLEAN,
            text: "seed ID [SEED_NAME] exists?",
            arguments: {
              SEED_NAME: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: "seed-1"
              }
            }
          },
          {
            opcode: "allSeeds",
            blockType: Scratch.BlockType.REPORTER,
            text: "all seed IDs"
          },
          { blockType: Scratch.BlockType.LABEL, text: "Number Randomizer" },
          {
            opcode: "genSeed",
            blockType: Scratch.BlockType.COMMAND,
            text: "generate number with ID [NAME] from [MIN] to [MAX] and length [LENGTH]",
            arguments: {
              NAME: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: "seed-1"
              },
              LENGTH: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: 1
              },
              MIN: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: 1
              },
              MAX: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: 10
              }
            }
          },
          { blockType: Scratch.BlockType.LABEL, text: "Basic Terrain Generation" },
          {
            opcode: "genTerrain",
            blockType: Scratch.BlockType.COMMAND,
            text: "generate new terrain with ID [NAME] length [LENGTH] with lowpoint [MIN] and peak [MAX]",
            arguments: {
              NAME: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: "seed-1"
              },
              LENGTH: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: 10
              },
              MIN: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: 0
              },
              MAX: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: 10
              }
            }
          },
          { blockType: Scratch.BlockType.LABEL, text: "Pseudorandom Noise Generation" },
          {
            opcode: "genCoolNoise",
            blockType: Scratch.BlockType.COMMAND,
            text: "generate noise with ID [NAME] seed [KEY] repeated [REPEAT] times",
            arguments: {
              NAME: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: "noise-1"
              },
              KEY: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: 15
              },
              REPEAT: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: 10
              }
            }
          },
          {
            opcode: "genAcceptedNoise",
            blockType: Scratch.BlockType.COMMAND,
            text: "generate noise with ID [NAME] seed [KEY] repeated [REPEAT] times with accepted number array: [ALLOW]",
            arguments: {
              NAME: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: "noise-1"
              },
              KEY: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: 15
              },
              REPEAT: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: 10
              },
              ALLOW: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: "[1, 2, 3, 4, 5]"
              }
            }
          }
        ],
        menus: {
          REPORT: ["json", "type", "settings", "output"]
        }
      }
    }

    reportSeed(args) {
      const seedName = args.SEED_NAME;
      if (this.seeds[seedName] === undefined) return "seed doesnt exist!";
      switch (args.REPORT) {
        case "type":
          return this.seeds[seedName].type;
        case "settings":
          return JSON.stringify(this.seeds[seedName].settings);
        case "output":
          return JSON.stringify(this.seeds[seedName].output);
        default:
          return JSON.stringify(this.seeds[seedName]);
      }
    }

    toArray(args) { return JSON.stringify(this.seeds[args.SEED_NAME].output) }

    resetSeed(args) { delete this.seeds[args.SEED_NAME] }

    seedExists(args) { return Scratch.Cast.toBoolean(this.seeds[args.SEED_NAME]) }

    allSeeds(args) { return JSON.stringify(Object.keys(this.seeds)) }

    genSeed(args) {
      if (args.LENGTH < 1) args.LENGTH = 1;
      let generatedSeed = "";
      const settings = { min: Math.round(args.MIN), max: Math.round(args.MAX), length: Math.round(args.LENGTH) };
      for (let i = 0; i < settings["length"]; i++) {
        generatedSeed += Math.floor(Math.random() * (settings.max - settings.min + 1)) + settings.min;
      }
      this.seeds[args.NAME] = { type: "RND", settings: settings, output: [generatedSeed] };
    }

    genTerrain(args) {
      if (args.LENGTH < 1) args.LENGTH = 1;
      const settings = { min: Math.round(args.MIN), max: Math.round(args.MAX), length: Math.round(args.LENGTH) };
      let generatedNoise = [];
      let currentValue = (settings.min + settings.max) / 2;
      for (let i = 0; i < settings["length"]; i++) {
        const randomChange = Math.floor(Math.random() * (settings.max - settings.min + 1)) + settings.min;
        currentValue += randomChange * (Math.random() < 0.5 ? -1 : 1);
        currentValue = Math.max(settings.min, Math.min(settings.max, currentValue));
        generatedNoise.push(currentValue);
      }
      this.seeds[args.NAME] = { type: "TER", settings: settings, output: generatedNoise };
    }

    genCoolNoise(args) {
      const noiseName = args.NAME;
      const settings = { seed: args.KEY, repeat: Math.round(args.REPEAT) };
      let key = BigInt((settings.seed * 100) + 100);
      let generatedNoise = [];
      for (let i = 0; i < settings.repeat; i++) {
        const squaredKey = key * key;
        if (squaredKey.toString().length < 3) {
          generatedNoise = `Error: ${settings.seed} is a Bad Seed`;
          break;
        }
        generatedNoise.push(squaredKey.toString().substring(1, 4));
        key = BigInt(squaredKey.toString().substring(1, 4));
      }
      this.seeds[args.NAME] = { type: "NOI1", settings: settings, output: generatedNoise };
    }

    genAcceptedNoise(args) {
      let allowedNums = args.ALLOW ? args.ALLOW : [0];
      try {
        allowedNums = JSON.parse(args.ALLOW);
        if (!Array.isArray(allowedNums)) {
          allowedNums = [0];
        } else {
          allowedNums = allowedNums.filter(value => !isNaN(value));
          if (allowedNums.length === 0) allowedNums = [0];
        }
      } catch (error) { allowedNums = [0] }
      const settings = { seed: args.KEY, repeat: Math.round(args.REPEAT), allowedValues: allowedNums };
      let key = (settings.seed * 100) + 100;
      let generatedNoise = [];
      for (let i = 0; i < settings.repeat; i++) {
        const squaredKey = key * key;
        if (squaredKey.toString().length < 3) {
          generatedNoise = `Error: ${args.KEY} is a Bad Seed`;
          break;
        }
        const noiseValue = parseInt(squaredKey.toString().substring(1, 4));
        let replacementValue;
        if (args.ALLOW.length > 0) {
          const acceptItems = settings.allowedValues;
          const numAcceptItems = acceptItems.length;
          if (numAcceptItems === 1) {
            replacementValue = acceptItems[0];
          } else {
            const rangeDivider = 1000 / numAcceptItems;
            for (let j = 0; j < numAcceptItems; j++) {
              const lowerRange = j * rangeDivider;
              const upperRange = (j + 1) * rangeDivider;
              if (noiseValue >= lowerRange && noiseValue < upperRange) {
                replacementValue = acceptItems[j];
                break;
              }
            }
          }
        }
        generatedNoise.push(replacementValue === null || replacementValue === undefined ? 0 : replacementValue);
        key = BigInt(squaredKey.toString().substring(1, 4));
      }
      this.seeds[args.NAME] = { type: "NOI2", settings: settings, output: generatedNoise };
    }
  }
  
  Scratch.extensions.register(new SeedsSP());
})(Scratch);
