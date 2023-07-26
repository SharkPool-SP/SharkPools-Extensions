//All blocks in this extension were made by SharkPool
//Subscribe to my YouTube! https://www.youtube.com/@SharkPool_SP

(function(Scratch) {
  'use strict';

  if (!Scratch.extensions.unsandboxed) {
    throw new Error('Added Motion must run unsandboxed');
  }
      const menuIconURI = 'data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHdpZHRoPSIxMzQuMTc2MjgiIGhlaWdodD0iMTM0LjE3NjI4IiB2aWV3Qm94PSIwLDAsMTM0LjE3NjI4LDEzNC4xNzYyOCI+PGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTE3Mi45MTE4NiwtMTEyLjkxMTg2KSI+PGcgZGF0YS1wYXBlci1kYXRhPSJ7JnF1b3Q7aXNQYWludGluZ0xheWVyJnF1b3Q7OnRydWV9IiBmaWxsLXJ1bGU9Im5vbnplcm8iIHN0cm9rZS1saW5lY2FwPSJidXR0IiBzdHJva2UtbGluZWpvaW49Im1pdGVyIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS1kYXNoYXJyYXk9IiIgc3Ryb2tlLWRhc2hvZmZzZXQ9IjAiIHN0eWxlPSJtaXgtYmxlbmQtbW9kZTogbm9ybWFsIj48cGF0aCBkPSJNMTcyLjkxMTg2LDE4MGMwLC0zNy4wNTE3NiAzMC4wMzYzOCwtNjcuMDg4MTQgNjcuMDg4MTQsLTY3LjA4ODE0YzM3LjA1MTc2LDAgNjcuMDg4MTQsMzAuMDM2MzggNjcuMDg4MTQsNjcuMDg4MTRjMCwzNy4wNTE3NiAtMzAuMDM2MzgsNjcuMDg4MTQgLTY3LjA4ODE0LDY3LjA4ODE0Yy0zNy4wNTE3NiwwIC02Ny4wODgxNCwtMzAuMDM2MzggLTY3LjA4ODE0LC02Ny4wODgxNHoiIGZpbGw9IiM5NDAwZmYiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIwIi8+PHBhdGggZD0iTTI0OS42Nzg4MiwxNDEuMDQ1NzZsMTAuODMzOSwwLjAzOTgzYzEwLjUxNTI2LDAuMDc5NjYgMTAuODMzOSwwLjExOTQ5IDExLjUxMTAyLDAuNTk3NDVjMi40Mjk2NiwxLjg3MjA0IDIuMzg5ODMsNC45Mzg5OSAtMC4xNTkzMyw2LjY1MTY5Yy0wLjc1Njc4LDAuNTE3OCAtMS4xMTUyNSwwLjU1NzYzIC00LjM0MTUyLDAuNTU3NjNoLTMuNTA1MDl2MzEuMTA3NjN2MzEuMDY3NzloMy40NjUyNmMzLjk0MzIyLDAgNC44OTkxNiwwLjMxODY1IDUuODE1MjYsMS45NTE3YzEuMDM1NiwxLjgzMjIgMC41MTc4LDMuOTQzMjMgLTEuMjc0NTgsNS4yNTc2M2MtMC42NzcxMiwwLjUxNzggLTAuOTk1NzYsMC41MTc4IC0xMS41MTEwMiwwLjU5NzQ1bC0xMC44MzM5LDAuMDc5NjZsLTEuMTE1MjUsLTAuNTU3NjNjLTEuMTU1MDksLTAuNjM3MjkgLTIuMTkwNjgsLTIuMTUwODUgLTIuMTkwNjgsLTMuMzg1NmMwLC0wLjg3NjI3IDAuOTk1NzcsLTIuNjY4NjQgMS43OTIzNywtMy4yNjYxYzAuNTk3NDYsLTAuNDc3OTcgMS4xMTUyNSwtMC41MTc4IDQuMzQxNTIsLTAuNTk3NDVsMy42NjQ0LC0wLjA3OTY3di0zMS4wNjc3OXYtMzEuMDY3NzlsLTMuNjY0NCwtMC4wNzk2N2MtMy4yMjYyNywtMC4wNzk2NiAtMy43NDQwNiwtMC4xMTk0OSAtNC4zNDE1MiwtMC41OTc0NWMtMC43OTY2MSwtMC41NTc2MyAtMS43OTIzNywtMi4zNSAtMS43OTIzNywtMy4yNjYxYzAsLTEuMjM0NzUgMC45OTU3NiwtMi43ODgxNCAyLjE5MDY4LC0zLjM4NTZ6IiBmaWxsPSJub25lIiBzdHJva2U9IiM2OTAwYjQiIHN0cm9rZS13aWR0aD0iMTAiLz48cGF0aCBkPSJNMjI0LjY2NTI2LDE1OC40NTE3aDI4LjA0MDY3djIxLjU0ODMxdjIxLjUwODQ4bC0yOC40Mzg5OCwtMC4wMzk4M2MtMjguMiwtMC4wNzk2NiAtMjguNDM4OTksLTAuMDc5NjcgLTI5LjMxNTI2LC0wLjU5NzQ2Yy0wLjQ3Nzk3LC0wLjI3ODgyIC0xLjExNTI1LC0wLjkxNjEgLTEuMzk0MDcsLTEuNDczNzNsLTAuNTU3NjMsLTAuOTU1OTN2LTE4LjQ0MTUzYzAsLTE3LjcyNDU4IDAuMDM5ODMsLTE4LjQ0MTUzIDAuNDc3OTcsLTE5LjM1NzYzYzAuNTk3NDYsLTEuMDc1NDIgMC45NTU5MywtMS40MzM5IDIuMTUwODUsLTEuODcyMDNjMC43NTY3OCwtMC4yMzg5OSA2LjE3MzczLC0wLjMxODY1IDI5LjAzNjQ0LC0wLjMxODY1ek0yMTQuNjI3OTcsMTY4LjQ0OTE2Yy0wLjYzNzI5LDAuMzk4MyAtMS4zMTQ0MSwxLjc5MjM3IC01LjAxODY0LDkuOTk3NDZjLTQuNjIwMzQsMTAuMjM2NDQgLTQuODU5MzIsMTAuOTEzNTYgLTMuODIzNzIsMTIuMDI4ODJjMS4xNTUwOSwxLjIzNDc1IDIuOTQ3NDUsMS4yNzQ1NyAzLjk4MzA1LDAuMDM5ODNjMC4zMTg2NSwtMC4zOTgzIDAuNzk2NiwtMS4yNzQ1NyAxLjAzNTU5LC0xLjk1MTdsMC40MzgxNCwtMS4yMzQ3NWg0Ljc3OTY2aDQuNzc5NjZsMC41NTc2MywxLjQzMzljMC43MTY5NSwxLjk1MTcgMS40NzM3MywyLjYyODgyIDIuOTA3NjMsMi42Mjg4MmMwLjkxNjEsMCAxLjE5NDkxLC0wLjExOTQ5IDEuNzkyMzcsLTAuNzk2NjFjMC41MTc4LC0wLjU1NzYzIDAuNzE2OTUsLTEuMDM1NTkgMC43MTY5NSwtMS42NzI4OGMwLC0wLjYzNzI5IC0xLjE1NTA4LC0zLjU4NDc0IC0zLjc4MzksLTkuNDM5ODNjLTQuOTc4ODEsLTExLjE5MjM3IC00LjczOTg0LC0xMC43MTQ0MSAtNS41MzY0NSwtMTEuMTEyNzFjLTAuOTE2MSwtMC41MTc4IC0xLjkxMTg3LC0wLjQ3Nzk2IC0yLjgyNzk3LDAuMDc5NjZ6IiBmaWxsPSJub25lIiBzdHJva2U9IiM2OTAwYjQiIHN0cm9rZS13aWR0aD0iMTAiLz48cGF0aCBkPSJNMjE2LjEwMTcsMTc2LjA5NjYxYzAuMTU5MzIsMC4xNTkzMiAyLjU4ODk4LDYuMTMzOSAyLjU4ODk4LDYuMzMzMDVjMCwwLjE1OTMyIC0xLjE5NDkxLDAuMjM4OTggLTIuNzA4NDcsMC4yMzg5OGMtMi4wNzExOCwwIC0yLjY2ODY0LC0wLjA3OTY2IC0yLjU4ODk4LC0wLjMxODY1YzAuMDc5NjYsLTAuMTU5MzIgMC42NzcxMiwtMS42MzMwNSAxLjM5NDA3LC0zLjMwNTkzYzAuNzE2OTUsLTEuNjMzMDUgMS4zMTQ0LC0yLjk4NzI5IDEuMzE0NCwtMi45NDc0NnoiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzY5MDBiNCIgc3Ryb2tlLXdpZHRoPSIxMCIvPjxwYXRoIGQ9Ik0yNjcuNjQyMzgsMTgwdi0yMS41ODgxM2w4LjI4NDc0LDAuMDc5NjZjNy44MDY3OCwwLjA3OTY2IDguMzI0NTgsMC4xMTk1IDkuMTIxMTksMC41OTc0NmMwLjQ3Nzk2LDAuMjc4ODIgMS4xMTUyNSwwLjkxNjEgMS4zOTQwNywxLjQ3MzczbDAuNTU3NjIsMC45NTU5M3YxOC40ODEzNnYxOC40NDE1M2wtMC41NTc2MiwwLjk1NTkzYy0wLjI3ODgyLDAuNTU3NjMgLTAuOTE2MTEsMS4xOTQ5MSAtMS4zOTQwNywxLjQ3MzczYy0wLjgzNjQ0LDAuNTE3OCAtMS4zMTQ0MSwwLjUxNzggLTkuMTIxMTksMC41OTc0NmwtOC4yODQ3NCwwLjA3OTY2di0yMS41NDgzeiIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjNjkwMGI0IiBzdHJva2Utd2lkdGg9IjEwIi8+PHBhdGggZD0iTTI0OS42Nzg4MiwxNDEuMDQ1NzZsMTAuODMzOSwwLjAzOTgzYzEwLjUxNTI2LDAuMDc5NjYgMTAuODMzOSwwLjExOTQ5IDExLjUxMTAyLDAuNTk3NDVjMi40Mjk2NiwxLjg3MjA0IDIuMzg5ODMsNC45Mzg5OSAtMC4xNTkzMyw2LjY1MTY5Yy0wLjc1Njc4LDAuNTE3OCAtMS4xMTUyNSwwLjU1NzYzIC00LjM0MTUyLDAuNTU3NjNoLTMuNTA1MDl2MzEuMTA3NjN2MzEuMDY3NzloMy40NjUyNmMzLjk0MzIyLDAgNC44OTkxNiwwLjMxODY1IDUuODE1MjYsMS45NTE3YzEuMDM1NiwxLjgzMjIgMC41MTc4LDMuOTQzMjMgLTEuMjc0NTgsNS4yNTc2M2MtMC42NzcxMiwwLjUxNzggLTAuOTk1NzYsMC41MTc4IC0xMS41MTEwMiwwLjU5NzQ1bC0xMC44MzM5LDAuMDc5NjZsLTEuMTE1MjUsLTAuNTU3NjNjLTEuMTU1MDksLTAuNjM3MjkgLTIuMTkwNjgsLTIuMTUwODUgLTIuMTkwNjgsLTMuMzg1NmMwLC0wLjg3NjI3IDAuOTk1NzcsLTIuNjY4NjQgMS43OTIzNywtMy4yNjYxYzAuNTk3NDYsLTAuNDc3OTcgMS4xMTUyNSwtMC41MTc4IDQuMzQxNTIsLTAuNTk3NDVsMy42NjQ0LC0wLjA3OTY3di0zMS4wNjc3OXYtMzEuMDY3NzlsLTMuNjY0NCwtMC4wNzk2N2MtMy4yMjYyNywtMC4wNzk2NiAtMy43NDQwNiwtMC4xMTk0OSAtNC4zNDE1MiwtMC41OTc0NWMtMC43OTY2MSwtMC41NTc2MyAtMS43OTIzNywtMi4zNSAtMS43OTIzNywtMy4yNjYxYzAsLTEuMjM0NzUgMC45OTU3NiwtMi43ODgxNCAyLjE5MDY4LC0zLjM4NTZ6IiBmaWxsPSIjZmZmZmZmIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIvPjxwYXRoIGQ9Ik0yNTEuMzcyNiwxNTguNDUxN3Y0My4wNTY3OGMwLDAgLTU1LjU0NDYzLC0wLjExOTUgLTU2LjQyMDksLTAuNjM3MjljLTAuNDc3OTcsLTAuMjc4ODIgLTEuMTE1MjUsLTAuOTE2MSAtMS4zOTQwNywtMS40NzM3M2wtMC41NTc2MywtMC45NTU5M3YtMTguNDQxNTNjMCwtMTcuNzI0NTggMC4wMzk4MywtMTguNDQxNTMgMC40Nzc5NywtMTkuMzU3NjNjMC41OTc0NiwtMS4wNzU0MiAwLjk1NTkzLC0xLjQzMzkgMi4xNTA4NSwtMS44NzIwM2MwLjc1Njc4LC0wLjIzODk5IDU1Ljc0Mzc4LC0wLjMxODY1IDU1Ljc0Mzc4LC0wLjMxODY1ek0yMTQuNjI3OTcsMTY4LjQ0OTE2Yy0wLjYzNzI5LDAuMzk4MyAtMS4zMTQ0MSwxLjc5MjM3IC01LjAxODY0LDkuOTk3NDZjLTQuNjIwMzQsMTAuMjM2NDQgLTQuODU5MzIsMTAuOTEzNTYgLTMuODIzNzIsMTIuMDI4ODJjMS4xNTUwOSwxLjIzNDc1IDIuOTQ3NDUsMS4yNzQ1NyAzLjk4MzA1LDAuMDM5ODNjMC4zMTg2NSwtMC4zOTgzIDAuNzk2NiwtMS4yNzQ1NyAxLjAzNTU5LC0xLjk1MTdsMC40MzgxNCwtMS4yMzQ3NWg0Ljc3OTY2aDQuNzc5NjZsMC41NTc2MywxLjQzMzljMC43MTY5NSwxLjk1MTcgMS40NzM3MywyLjYyODgyIDIuOTA3NjMsMi42Mjg4MmMwLjkxNjEsMCAxLjE5NDkxLC0wLjExOTQ5IDEuNzkyMzcsLTAuNzk2NjFjMC41MTc4LC0wLjU1NzYzIDAuNzE2OTUsLTEuMDM1NTkgMC43MTY5NSwtMS42NzI4OGMwLC0wLjYzNzI5IC0xLjE1NTA4LC0zLjU4NDc0IC0zLjc4MzksLTkuNDM5ODNjLTQuOTc4ODEsLTExLjE5MjM3IC00LjczOTg0LC0xMC43MTQ0MSAtNS41MzY0NSwtMTEuMTEyNzFjLTAuOTE2MSwtMC41MTc4IC0xLjkxMTg3LC0wLjQ3Nzk2IC0yLjgyNzk3LDAuMDc5NjZ6IiBmaWxsPSIjZmZmZmZmIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIvPjxwYXRoIGQ9Ik0yMTYuMTAxNywxNzYuMDk2NjFjMC4xNTkzMiwwLjE1OTMyIDIuNTg4OTgsNi4xMzM5IDIuNTg4OTgsNi4zMzMwNWMwLDAuMTU5MzIgLTEuMTk0OTEsMC4yMzg5OCAtMi43MDg0NywwLjIzODk4Yy0yLjA3MTE4LDAgLTIuNjY4NjQsLTAuMDc5NjYgLTIuNTg4OTgsLTAuMzE4NjVjMC4wNzk2NiwtMC4xNTkzMiAwLjY3NzEyLC0xLjYzMzA1IDEuMzk0MDcsLTMuMzA1OTNjMC43MTY5NSwtMS42MzMwNSAxLjMxNDQsLTIuOTg3MjkgMS4zMTQ0LC0yLjk0NzQ2eiIgZmlsbD0iI2ZmZmZmZiIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiLz48cGF0aCBkPSJNMjY4Ljk3NTcxLDE1OC40MTE4N2MwLDAgMTUuMjc1OTksMC4xOTkxNSAxNi4wNzI2LDAuNjc3MTJjMC40Nzc5NiwwLjI3ODgyIDEuMTE1MjUsMC45MTYxIDEuMzk0MDcsMS40NzM3M2wwLjU1NzYyLDAuOTU1OTN2MTguNDgxMzZ2MTguNDQxNTNsLTAuNTU3NjIsMC45NTU5M2MtMC4yNzg4MiwwLjU1NzYzIC0wLjkxNjExLDEuMTk0OTEgLTEuMzk0MDcsMS40NzM3M2MtMC44MzY0NCwwLjUxNzggLTE2LjA3MjYsMC42NzcxMiAtMTYuMDcyNiwwLjY3NzEyeiIgZmlsbD0iI2ZmZmZmZiIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiLz48L2c+PC9nPjwvc3ZnPg==';

      const blockIconURI = 'data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHdpZHRoPSI3OS4zNjMxMyIgaGVpZ2h0PSI4Ny45MjE0OSIgdmlld0JveD0iMCwwLDc5LjM2MzEzLDg3LjkyMTQ5Ij48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMjAwLjMxODQzLC0xMzYuMDQxNDMpIj48ZyBkYXRhLXBhcGVyLWRhdGE9InsmcXVvdDtpc1BhaW50aW5nTGF5ZXImcXVvdDs6dHJ1ZX0iIGZpbGwtcnVsZT0ibm9uemVybyIgc3Ryb2tlLWxpbmVjYXA9ImJ1dHQiIHN0cm9rZS1saW5lam9pbj0ibWl0ZXIiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgc3Ryb2tlLWRhc2hhcnJheT0iIiBzdHJva2UtZGFzaG9mZnNldD0iMCIgc3R5bGU9Im1peC1ibGVuZC1tb2RlOiBub3JtYWwiPjxwYXRoIGQ9Ik0yMzIuNjcxMTksMTgwLjAwMDAzdjIxLjU0ODNsLTExLjcwNjUyLC0wLjA3OTY2Yy0xMS4wMzExNiwtMC4wNzk2NiAtMTEuNzA2NTQsLTAuMDc5NjYgLTEyLjg4ODQ1LC0wLjU5NzQ2Yy0wLjY3NTM3LC0wLjI3ODgyIC0xLjU3NTg3LC0wLjkxNjEgLTEuOTY5ODUsLTEuNDczNzNsLTAuNzg3OTMsLTAuOTU1OTN2LTE4LjQ0MTUzdi0xOC40ODEzNmwwLjc4NzkzLC0wLjk1NTkzYzAuMzkzOTgsLTAuNTU3NjMgMS4yOTQ0OCwtMS4xOTQ5MSAxLjk2OTg1LC0xLjQ3MzczYzEuMTI1NjMsLTAuNDc3OTYgMS44NTcyOSwtMC41MTc4IDEyLjg4ODQ1LC0wLjU5NzQ2bDExLjcwNjUyLC0wLjA3OTY2djIxLjU4ODEzeiIgZGF0YS1wYXBlci1kYXRhPSJ7JnF1b3Q7aW5kZXgmcXVvdDs6bnVsbH0iIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzY5MDBiNCIgc3Ryb2tlLXdpZHRoPSIxMCIvPjxwYXRoIGQ9Ik0yMzAuNzg3MTYsMjAxLjU0ODMzYzAsMCAtMjEuNTI5MDQsLTAuMTU5MzIgLTIyLjcxMDk0LC0wLjY3NzEyYy0wLjY3NTM3LC0wLjI3ODgyIC0xLjU3NTg3LC0wLjkxNjEgLTEuOTY5ODUsLTEuNDczNzNsLTAuNzg3OTMsLTAuOTU1OTN2LTE4LjQ0MTUzdi0xOC40ODEzNmwwLjc4NzkzLC0wLjk1NTkzYzAuMzkzOTgsLTAuNTU3NjMgMS4yOTQ0OCwtMS4xOTQ5MSAxLjk2OTg1LC0xLjQ3MzczYzEuMTI1NjMsLTAuNDc3OTcgMjIuNzEwOTQsLTAuNjc3MTIgMjIuNzEwOTQsLTAuNjc3MTJ6IiBkYXRhLXBhcGVyLWRhdGE9InsmcXVvdDtpbmRleCZxdW90OzpudWxsfSIgZmlsbD0iI2ZmZmZmZiIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiLz48cGF0aCBkPSJNMjQ3LjMyODgxLDE4MC4wMDAwMXYtMjEuNTg4MTNsMTEuNzA2NTIsMC4wNzk2NmMxMS4wMzExNiwwLjA3OTY2IDExLjc2MjgyLDAuMTE5NSAxMi44ODg0NSwwLjU5NzQ2YzAuNjc1MzcsMC4yNzg4MiAxLjU3NTg3LDAuOTE2MSAxLjk2OTg1LDEuNDczNzNsMC43ODc5MywwLjk1NTkzdjE4LjQ4MTM2djE4LjQ0MTUzbC0wLjc4NzkzLDAuOTU1OTNjLTAuMzkzOTgsMC41NTc2MyAtMS4yOTQ0OCwxLjE5NDkxIC0xLjk2OTg1LDEuNDczNzNjLTEuMTgxOTEsMC41MTc4IC0xLjg1NzI5LDAuNTE3OCAtMTIuODg4NDUsMC41OTc0NmwtMTEuNzA2NTIsMC4wNzk2NnYtMjEuNTQ4M3oiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzY5MDBiNCIgc3Ryb2tlLXdpZHRoPSIxMCIvPjxwYXRoIGQ9Ik0yNDkuMjEyODQsMTU4LjQxMTg4YzAsMCAyMS41ODUzMiwwLjE5OTE1IDIyLjcxMDk0LDAuNjc3MTJjMC42NzUzNywwLjI3ODgyIDEuNTc1ODcsMC45MTYxIDEuOTY5ODUsMS40NzM3M2wwLjc4NzkzLDAuOTU1OTN2MTguNDgxMzZ2MTguNDQxNTNsLTAuNzg3OTMsMC45NTU5M2MtMC4zOTM5OCwwLjU1NzYzIC0xLjI5NDQ4LDEuMTk0OTEgLTEuOTY5ODUsMS40NzM3M2MtMS4xODE5MSwwLjUxNzggLTIyLjcxMDk0LDAuNjc3MTIgLTIyLjcxMDk0LDAuNjc3MTJ6IiBmaWxsPSIjZmZmZmZmIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIvPjxwYXRoIGQ9Ik0yMjkuNTk1NTYsMTQxLjA0NTc3bDEwLjgzMzksMC4wMzk4M2MxMC41MTUyNiwwLjA3OTY2IDEwLjgzMzksMC4xMTk0OSAxMS41MTEwMiwwLjU5NzQ1YzIuNDI5NjYsMS44NzIwNCAyLjM4OTgzLDQuOTM4OTkgLTAuMTU5MzMsNi42NTE2OWMtMC43NTY3OCwwLjUxNzggLTEuMTE1MjUsMC41NTc2MyAtNC4zNDE1MiwwLjU1NzYzaC0zLjUwNTA5djMxLjEwNzYzdjMxLjA2Nzc5aDMuNDY1MjZjMy45NDMyMiwwIDQuODk5MTYsMC4zMTg2NSA1LjgxNTI2LDEuOTUxN2MxLjAzNTYsMS44MzIyIDAuNTE3OCwzLjk0MzIzIC0xLjI3NDU4LDUuMjU3NjNjLTAuNjc3MTIsMC41MTc4IC0wLjk5NTc2LDAuNTE3OCAtMTEuNTExMDIsMC41OTc0NWwtMTAuODMzOSwwLjA3OTY2bC0xLjExNTI1LC0wLjU1NzYzYy0xLjE1NTA5LC0wLjYzNzI5IC0yLjE5MDY4LC0yLjE1MDg1IC0yLjE5MDY4LC0zLjM4NTZjMCwtMC44NzYyNyAwLjk5NTc3LC0yLjY2ODY0IDEuNzkyMzcsLTMuMjY2MWMwLjU5NzQ2LC0wLjQ3Nzk3IDEuMTE1MjUsLTAuNTE3OCA0LjM0MTUyLC0wLjU5NzQ1bDMuNjY0NCwtMC4wNzk2N3YtMzEuMDY3Nzl2LTMxLjA2Nzc5bC0zLjY2NDQsLTAuMDc5NjdjLTMuMjI2MjcsLTAuMDc5NjYgLTMuNzQ0MDYsLTAuMTE5NDkgLTQuMzQxNTIsLTAuNTk3NDVjLTAuNzk2NjEsLTAuNTU3NjMgLTEuNzkyMzcsLTIuMzUgLTEuNzkyMzcsLTMuMjY2MWMwLC0xLjIzNDc1IDAuOTk1NzYsLTIuNzg4MTQgMi4xOTA2OCwtMy4zODU2eiIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjNjkwMGI0IiBzdHJva2Utd2lkdGg9IjEwIi8+PHBhdGggZD0iTTIyOS41OTU1NiwxNDEuMDQ1NzdsMTAuODMzOSwwLjAzOTgzYzEwLjUxNTI2LDAuMDc5NjYgMTAuODMzOSwwLjExOTQ5IDExLjUxMTAyLDAuNTk3NDVjMi40Mjk2NiwxLjg3MjA0IDIuMzg5ODMsNC45Mzg5OSAtMC4xNTkzMyw2LjY1MTY5Yy0wLjc1Njc4LDAuNTE3OCAtMS4xMTUyNSwwLjU1NzYzIC00LjM0MTUyLDAuNTU3NjNoLTMuNTA1MDl2MzEuMTA3NjN2MzEuMDY3NzloMy40NjUyNmMzLjk0MzIyLDAgNC44OTkxNiwwLjMxODY1IDUuODE1MjYsMS45NTE3YzEuMDM1NiwxLjgzMjIgMC41MTc4LDMuOTQzMjMgLTEuMjc0NTgsNS4yNTc2M2MtMC42NzcxMiwwLjUxNzggLTAuOTk1NzYsMC41MTc4IC0xMS41MTEwMiwwLjU5NzQ1bC0xMC44MzM5LDAuMDc5NjZsLTEuMTE1MjUsLTAuNTU3NjNjLTEuMTU1MDksLTAuNjM3MjkgLTIuMTkwNjgsLTIuMTUwODUgLTIuMTkwNjgsLTMuMzg1NmMwLC0wLjg3NjI3IDAuOTk1NzcsLTIuNjY4NjQgMS43OTIzNywtMy4yNjYxYzAuNTk3NDYsLTAuNDc3OTcgMS4xMTUyNSwtMC41MTc4IDQuMzQxNTIsLTAuNTk3NDVsMy42NjQ0LC0wLjA3OTY3di0zMS4wNjc3OXYtMzEuMDY3NzlsLTMuNjY0NCwtMC4wNzk2N2MtMy4yMjYyNywtMC4wNzk2NiAtMy43NDQwNiwtMC4xMTk0OSAtNC4zNDE1MiwtMC41OTc0NWMtMC43OTY2MSwtMC41NTc2MyAtMS43OTIzNywtMi4zNSAtMS43OTIzNywtMy4yNjYxYzAsLTEuMjM0NzUgMC45OTU3NiwtMi43ODgxNCAyLjE5MDY4LC0zLjM4NTZ6IiBmaWxsPSIjZmZmZmZmIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIvPjwvZz48L2c+PC9zdmc+';
      
      const formatIcon = 'data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHdpZHRoPSIxNTAuOTAzNTUiIGhlaWdodD0iOTUuNSIgdmlld0JveD0iMCwwLDE1MC45MDM1NSw5NS41Ij48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMTY0LjU0ODIyLC0xMzIuMjUpIj48ZyBkYXRhLXBhcGVyLWRhdGE9InsmcXVvdDtpc1BhaW50aW5nTGF5ZXImcXVvdDs6dHJ1ZX0iIGZpbGwtcnVsZT0ibm9uemVybyIgc3Ryb2tlLWxpbmVjYXA9ImJ1dHQiIHN0cm9rZS1saW5lam9pbj0ibWl0ZXIiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgc3Ryb2tlLWRhc2hhcnJheT0iIiBzdHJva2UtZGFzaG9mZnNldD0iMCIgc3R5bGU9Im1peC1ibGVuZC1tb2RlOiBub3JtYWwiPjxwYXRoIGQ9Ik0yMzkuNzQxOTcsMjAxLjgxODIzYzAsMCAtNDAuMjY2OTcsLTAuMTU5MzIgLTQxLjU1OTI5LC0wLjY3NzEyYy0wLjczODQ2LC0wLjI3ODgyIC0xLjcyMzA5LC0wLjkxNjEgLTIuMTUzODcsLTEuNDczNzNsLTAuODYxNTQsLTAuOTU1OTN2LTE4LjQ0MTUzdi0xOC40ODEzNmwwLjg2MTU0LC0wLjk1NTkzYzAuNDMwNzksLTAuNTU3NjMgMS40MTU0MSwtMS4xOTQ5MSAyLjE1Mzg3LC0xLjQ3MzczYzEuMjMwNzksLTAuNDc3OTYgNDEuNTU5MjksLTAuNjc3MTIgNDEuNTU5MjksLTAuNjc3MTJ6IiBkYXRhLXBhcGVyLWRhdGE9InsmcXVvdDtpbmRleCZxdW90OzpudWxsfSIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjNjkwMGI0IiBzdHJva2Utd2lkdGg9IjEwIi8+PHBhdGggZD0iTTIzNC4wOTEzNiwxNTguNjgxNzhjMCwwIDQyLjY2MTg0LDAuMTk5MTYgNDMuODkyNjIsMC42NzcxMmMwLjczODQ2LDAuMjc4ODIgMS43MjMwOSwwLjkxNjEgMi4xNTM4NywxLjQ3MzczbDAuODYxNTQsMC45NTU5M3YxOC40ODEzNnYxOC40NDE1M2wtMC44NjE1NCwwLjk1NTkzYy0wLjQzMDc5LDAuNTU3NjMgLTEuNDE1NDEsMS4xOTQ5MSAtMi4xNTM4NywxLjQ3MzczYy0xLjI5MjMyLDAuNTE3OCAtNDMuODkyNjIsMC42NzcxMiAtNDMuODkyNjIsMC42NzcxMnoiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzY5MDBiNCIgc3Ryb2tlLXdpZHRoPSIxMCIvPjxwYXRoIGQ9Ik0yMzYuMTUxNCwxNTguNjgxNzhjMCwwIDQwLjYwMTgxLDAuMTk5MTUgNDEuODMyNTksMC42NzcxMmMwLjczODQ2LDAuMjc4ODIgMS43MjMwOSwwLjkxNjEgMi4xNTM4NywxLjQ3MzczbDAuODYxNTQsMC45NTU5M3YxOC40ODEzNnYxOC40NDE1M2wtMC44NjE1NCwwLjk1NTkzYy0wLjQzMDc5LDAuNTU3NjMgLTEuNDE1NDEsMS4xOTQ5MSAtMi4xNTM4NywxLjQ3MzczYy0xLjI5MjMyLDAuNTE3OCAtNDEuODMyNTksMC42NzcxMiAtNDEuODMyNTksMC42NzcxMnoiIGZpbGw9IiNmZmZmZmYiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIi8+PHBhdGggZD0iTTIzNy42ODE5MywyMDEuODE4MjNjMCwwIC0zOC4yMDY5NCwtMC4xNTkzMiAtMzkuNDk5MjYsLTAuNjc3MTJjLTAuNzM4NDYsLTAuMjc4ODIgLTEuNzIzMDksLTAuOTE2MSAtMi4xNTM4NywtMS40NzM3M2wtMC44NjE1NCwtMC45NTU5M3YtMTguNDQxNTN2LTE4LjQ4MTM2bDAuODYxNTQsLTAuOTU1OTNjMC40MzA3OSwtMC41NTc2MyAxLjQxNTQxLC0xLjE5NDkxIDIuMTUzODcsLTEuNDczNzNjMS4yMzA3OCwtMC40Nzc5NyAzOS40OTkyNiwtMC42NzcxMiAzOS40OTkyNiwtMC42NzcxMnoiIGRhdGEtcGFwZXItZGF0YT0ieyZxdW90O2luZGV4JnF1b3Q7Om51bGx9IiBmaWxsPSIjZmZmZmZmIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIvPjxwYXRoIGQ9Ik0xNjkuNTQ4MjIsMTU0LjQwNzUydi0xNy4xNTc1MmgxNy4xNTc1MnoiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzY5MDBiNCIgc3Ryb2tlLXdpZHRoPSIxMCIvPjxwYXRoIGQ9Ik0zMTAuNDUxNzgsMjA1LjU5MjQ4djE3LjE1NzUyaC0xNy4xNTc1MnoiIGRhdGEtcGFwZXItZGF0YT0ieyZxdW90O2luZGV4JnF1b3Q7Om51bGx9IiBmaWxsPSJub25lIiBzdHJva2U9IiM2OTAwYjQiIHN0cm9rZS13aWR0aD0iMTAiLz48cGF0aCBkPSJNMTY5LjU0ODIzLDE1NC40MDc1MnYtMTcuMTU3NTJoMTcuMTU3NTJ6IiBmaWxsPSIjZmZmZmZmIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMCIvPjxwYXRoIGQ9Ik0zMTAuNDUxNzgsMjA1LjU5MjQ4djE3LjE1NzUyaC0xNy4xNTc1MnoiIGRhdGEtcGFwZXItZGF0YT0ieyZxdW90O2luZGV4JnF1b3Q7Om51bGx9IiBmaWxsPSIjZmZmZmZmIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMCIvPjxwYXRoIGQ9Ik0xODYuNzA1NzYsMjIyLjc1aC0xNy4xNTc1MnYtMTcuMTU3NTJ6IiBkYXRhLXBhcGVyLWRhdGE9InsmcXVvdDtpbmRleCZxdW90OzpudWxsfSIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjNjkwMGI0IiBzdHJva2Utd2lkdGg9IjEwIi8+PHBhdGggZD0iTTI5My4yOTQyNSwxMzcuMjVoMTcuMTU3NTJ2MTcuMTU3NTJ6IiBkYXRhLXBhcGVyLWRhdGE9InsmcXVvdDtpbmRleCZxdW90OzpudWxsfSIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjNjkwMGI0IiBzdHJva2Utd2lkdGg9IjEwIi8+PHBhdGggZD0iTTE4Ni43MDU3NiwyMjIuNzVoLTE3LjE1NzUydi0xNy4xNTc1MnoiIGRhdGEtcGFwZXItZGF0YT0ieyZxdW90O2luZGV4JnF1b3Q7Om51bGx9IiBmaWxsPSIjZmZmZmZmIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMCIvPjxwYXRoIGQ9Ik0yOTMuMjk0MjUsMTM3LjI1aDE3LjE1NzUydjE3LjE1NzUyeiIgZGF0YS1wYXBlci1kYXRhPSJ7JnF1b3Q7aW5kZXgmcXVvdDs6bnVsbH0iIGZpbGw9IiNmZmZmZmYiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIwIi8+PHBhdGggZD0iTTIzNi4yNjY0NCwxNjUuNjY5ODVjMS4xODI3MiwtMC43MTk5MSAyLjQ4NDMxLC0wLjc3MTMzIDMuNjY3MDMsLTAuMTAyODNjMS4wMjg0NSwwLjUxNDIyIDAuNzc2MzksLTAuMDQwOTQgNy4yMDQyMSwxNC40MDg4YzMuMzkzOSw3LjU1OTEzIDQuODY5NjUsMTEuNDA4NTMgNC44Njk2NSwxMi4yMzEyOWMwLDAuODIyNzYgLTAuMjYyMzgsMS40NDUyOSAtMC45MzA4OCwyLjE2NTIxYy0wLjc3MTM0LDAuODc0MTkgLTEuMTM3ODQsMS4wMzM3NCAtMi4zMjA1NSwxLjAzMzc0Yy0xLjg1MTIxLDAgLTIuODk4MjIsLTAuOTgyNTUgLTMuODIzODIsLTMuNTAyMjdsLTAuNjUyODgsLTEuNzQwOWwtNi4yMDUwNSwwLjAwOTg1bC02LjIwNSwtMC4wMDk5bC0wLjQ5ODQ5LDEuNDgzODZjLTAuMzA4NTQsMC44NzQyIC0wLjk5MDc4LDIuMTE2OTMgLTEuNDAyMTcsMi42MzExNWMtMS4zMzcsMS41OTQwOSAtMy42NjMxMywxLjUzMzU5IC01LjE1NDM5LC0wLjA2MDUxYy0xLjMzNywtMS40Mzk4NCAtMS4wNDcyOSwtMi4zNzMyOCA0LjkxNzczLC0xNS41ODg4OGM0Ljc4MjI5LC0xMC41OTMwNiA1LjcxMTg0LC0xMi40NDQ0MSA2LjUzNDYsLTEyLjk1ODYzeiIgZGF0YS1wYXBlci1kYXRhPSJ7JnF1b3Q7bm9Ib3ZlciZxdW90OzpmYWxzZSwmcXVvdDtvcmlnSXRlbSZxdW90OzpbJnF1b3Q7UGF0aCZxdW90Oyx7JnF1b3Q7YXBwbHlNYXRyaXgmcXVvdDs6dHJ1ZSwmcXVvdDtzZWdtZW50cyZxdW90OzpbW1szMzcuMjU1OTQsMTk4LjIzMTY1XSxbMCwwXSxbLTEuMjc0NTgsMC43OTY2XV0sW1szMjcuMjE4NjYsMjE4LjIyNjU3XSxbNy40MDg0NiwtMTYuNDEwMThdLFstOS4yNDA2OCwyMC40NzI4OF1dLFtbMzE5LjU3MTIyLDI0Mi4yODQyMV0sWy0yLjA3MTIsLTIuMjMwNTJdLFsyLjMxMDE4LDIuNDY5NV1dLFtbMzI3LjUzNzMyLDI0Mi4zNjM4N10sWy0yLjA3MTIsMi40Njk0OF0sWzAuNjM3MywtMC43OTY2XV0sW1szMjkuNjA4NSwyMzguNDYwNDddLFstMC40Nzc5OCwxLjM1NDI2XSxbMCwwXV0sWzMzMC40ODQ3OCwyMzUuOTkwOTddLFszNDAuMDQ0MSwyMzUuOTkwOTddLFszNDkuNjAzNDIsMjM1Ljk5MDk3XSxbWzM1MC43MTg2OCwyMzguODU4NzddLFswLDBdLFsxLjQzMzksMy45MDM0XV0sW1szNTYuNTMzOTQsMjQ0LjExNjQxXSxbLTIuODY3OCwwXSxbMS44MzIyLDBdXSxbWzM2MC4xMTg2OCwyNDIuNTIzMTldLFstMS4xOTQ5MiwxLjM1NDI0XSxbMS4wMzU2LC0xLjExNTI2XV0sW1szNjEuNTUyNTgsMjM5LjE3NzQzXSxbMCwxLjI3NDU4XSxbMCwtMS4yNzQ1OF1dLFtbMzUzLjk4NDc4LDIyMC4yOTc3N10sWzUuMjU3NjQsMTEuNzEwMThdLFstOS45NTc2MiwtMjIuMzg0NzRdXSxbWzM0Mi45MTE4OCwxOTguMDcyMzVdLFsxLjU5MzIyLDAuNzk2Nl0sWy0xLjgzMjIsLTEuMDM1Nl1dLFtbMzM3LjI1NTk0LDE5OC4yMzE2N10sWzEuODMyMiwtMS4xMTUyNF0sWzAsMF1dXSwmcXVvdDtjbG9zZWQmcXVvdDs6dHJ1ZSwmcXVvdDtmaWxsQ29sb3ImcXVvdDs6WzAsMCwwLDFdfV19IiBmaWxsPSIjNjkwMGI0IiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMC41Ii8+PHBhdGggZD0iTTIzOC4xNzcwNCwxNzUuNjA3MDJjMC4yMDU2OSwwLjIwNTY5IDMuMzQyNDYsNy45MTkwOCAzLjM0MjQ2LDguMTc2MTljMCwwLjIwNTY5IC0xLjU0MjY3LDAuMzA4NTMgLTMuNDk2NzMsMC4zMDg1M2MtMi42NzM5NywwIC0zLjQ0NTMxLC0wLjEwMjg0IC0zLjM0MjQ2LC0wLjQxMTM5YzAuMTAyODQsLTAuMjA1NjkgMC44NzQxOSwtMi4xMDgzMiAxLjc5OTc5LC00LjI2ODA3YzAuOTI1NjEsLTIuMTA4MzIgMS42OTY5NCwtMy44NTY3IDEuNjk2OTQsLTMuODA1Mjd6IiBmaWxsPSIjZmZmZmZmIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIvPjwvZz48L2c+PC9zdmc+'; 
      
      const colorIcon = 'data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHdpZHRoPSI3NS41MzUxNyIgaGVpZ2h0PSI3MS40OTc0NiIgdmlld0JveD0iMCwwLDc1LjUzNTE3LDcxLjQ5NzQ2Ij48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMjAyLjIzMjQxLC0xNDQuMjUxMjcpIj48ZyBkYXRhLXBhcGVyLWRhdGE9InsmcXVvdDtpc1BhaW50aW5nTGF5ZXImcXVvdDs6dHJ1ZX0iIGZpbGwtcnVsZT0ibm9uemVybyIgc3Ryb2tlLWxpbmVjYXA9ImJ1dHQiIHN0cm9rZS1saW5lam9pbj0ibWl0ZXIiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgc3Ryb2tlLWRhc2hhcnJheT0iIiBzdHJva2UtZGFzaG9mZnNldD0iMCIgc3R5bGU9Im1peC1ibGVuZC1tb2RlOiBub3JtYWwiPjxwYXRoIGQ9Ik0yMjMuNTM4NTYsMTY1LjcxMjcxYzAsLTkuMDkxNDEgNy4zNzAwNCwtMTYuNDYxNDQgMTYuNDYxNDQsLTE2LjQ2MTQ0YzkuMDkxNDEsMCAxNi40NjE0NCw3LjM3MDA0IDE2LjQ2MTQ0LDE2LjQ2MTQ0YzAsOS4wOTE0MSAtNy4zNzAwMywxNi40NjE0NCAtMTYuNDYxNDQsMTYuNDYxNDRjLTkuMDkxNDEsMCAtMTYuNDYxNDQsLTcuMzcwMDMgLTE2LjQ2MTQ0LC0xNi40NjE0NHoiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzY5MDBiNCIgc3Ryb2tlLXdpZHRoPSIxMCIvPjxwYXRoIGQ9Ik0yMDcuMjMyNDIsMTk0LjI4NzI5YzAsLTkuMDkxNDEgNy4zNzAwNCwtMTYuNDYxNDQgMTYuNDYxNDQsLTE2LjQ2MTQ0YzkuMDkxNDEsMCAxNi40NjE0NCw3LjM3MDA0IDE2LjQ2MTQ0LDE2LjQ2MTQ0YzAsOS4wOTE0MSAtNy4zNzAwNCwxNi40NjE0NCAtMTYuNDYxNDQsMTYuNDYxNDRjLTkuMDkxNDEsMCAtMTYuNDYxNDQsLTcuMzcwMDMgLTE2LjQ2MTQ0LC0xNi40NjE0NHoiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzY5MDBiNCIgc3Ryb2tlLXdpZHRoPSIxMCIvPjxwYXRoIGQ9Ik0yMzkuODQ0NzEsMTk0LjI4NzI5YzAsLTkuMDkxNDEgNy4zNzAwNCwtMTYuNDYxNDQgMTYuNDYxNDQsLTE2LjQ2MTQ0YzkuMDkxNDEsMCAxNi40NjE0NCw3LjM3MDA0IDE2LjQ2MTQ0LDE2LjQ2MTQ0YzAsOS4wOTE0MSAtNy4zNzAwMywxNi40NjE0NCAtMTYuNDYxNDQsMTYuNDYxNDRjLTkuMDkxNDEsMCAtMTYuNDYxNDQsLTcuMzcwMDMgLTE2LjQ2MTQ0LC0xNi40NjE0NHoiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzY5MDBiNCIgc3Ryb2tlLXdpZHRoPSIxMCIvPjxwYXRoIGQ9Ik0yMjMuNTM4NTYsMTY1LjcxMjcxYzAsLTkuMDkxNDEgNy4zNzAwMywtMTYuNDYxNDQgMTYuNDYxNDQsLTE2LjQ2MTQ0YzkuMDkxNCwwIDE2LjQ2MTQ0LDcuMzcwMDQgMTYuNDYxNDQsMTYuNDYxNDRjMCw5LjA5MTQxIC03LjM3MDAzLDE2LjQ2MTQ0IC0xNi40NjE0NCwxNi40NjE0NGMtOS4wOTE0LDAgLTE2LjQ2MTQ0LC03LjM3MDAzIC0xNi40NjE0NCwtMTYuNDYxNDR6IiBmaWxsPSIjMDBmZjAxIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0ibm9uZSIvPjxwYXRoIGQ9Ik0yMDcuMjMyNDEsMTk0LjI4NzI5YzAsLTkuMDkxNCA3LjM3MDA0LC0xNi40NjE0NCAxNi40NjE0NCwtMTYuNDYxNDRjOS4wOTE0LDAgMTYuNDYxNDQsNy4zNzAwNCAxNi40NjE0NCwxNi40NjE0NGMwLDkuMDkxNCAtNy4zNzAwNCwxNi40NjE0NCAtMTYuNDYxNDQsMTYuNDYxNDRjLTkuMDkxNCwwIC0xNi40NjE0NCwtNy4zNzAwNCAtMTYuNDYxNDQsLTE2LjQ2MTQ0eiIgZmlsbD0iI2ZmMDAwMCIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9Im5vbmUiLz48cGF0aCBkPSJNMjM5Ljg0NDcxLDE5NC4yODcyOWMwLC05LjA5MTQxIDcuMzcwMDMsLTE2LjQ2MTQ0IDE2LjQ2MTQ0LC0xNi40NjE0NGM5LjA5MTQsMCAxNi40NjE0NCw3LjM3MDA0IDE2LjQ2MTQ0LDE2LjQ2MTQ0YzAsOS4wOTE0MSAtNy4zNzAwMywxNi40NjE0NCAtMTYuNDYxNDQsMTYuNDYxNDRjLTkuMDkxNCwwIC0xNi40NjE0NCwtNy4zNzAwNCAtMTYuNDYxNDQsLTE2LjQ2MTQ0eiIgZmlsbD0iIzAwNzFmZiIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9Im5vbmUiLz48L2c+PC9nPjwvc3ZnPg==';
  
  class BetterInputSP {
  constructor() {
    this.isWaitingForInput = false;
    this.userInput = null;
    this.fontSize = '14px'; // Default font size
    this.questionColor = '#000000'; // Default question text color (black)
    this.inputColor = '#000000'; // Default input text color (black)
    this.textBoxColor = '#ffffff'; // Default text box color (white)
    this.inputBackgroundColor = '#ffffff'; // Default input background color (white)
    this.inputOutlineColor = '#000000'; // Default input outline color (black)
    this.textAlign = 'left'; // Default text alignment
    this.fontFamily = 'Arial'; // Default font family
    this.showCancelButton = true; // Show cancel button by default
    this.submitButtonText = 'OK'; // Default submit button text
    this.cancelButtonText = 'Cancel'; // Default cancel button text
    this.submitButtonColor = '#0074D9'; // Default submit button color
    this.cancelButtonColor = '#d9534f'; // Default cancel button color
    this.isInputEnabled = true; // Enable input box by default
    this.submitButtonTextColor = '#ffffff'; // Default submit button text color
    this.cancelButtonTextColor = '#ffffff'; // Default cancel button text color
  }
    
  getInfo() {
    return {
      id: 'BetterInputSP',
      name: 'Better Input',
      color1: '#9400ff',
      menuIconURI,
      blockIconURI,
      blocks: [
        {
        blockType: Scratch.BlockType.LABEL,
        text: 'Text Blocks',
        },
        {
          opcode: 'askAndWait',
          blockType: Scratch.BlockType.COMMAND,
          text: 'ask [question] and wait',
          arguments: {
            question: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: 'What is your name?',
            },
          },
        },
        {
          opcode: 'getUserInput',
          blockType: Scratch.BlockType.REPORTER,
          text: 'user input',
        },
        {
          opcode: 'setFontSize',
          blockType: Scratch.BlockType.COMMAND,
          text: 'set font size to [SIZE]',
          arguments: {
            SIZE: {
              type: Scratch.ArgumentType.NUMBER,
              defaultValue: 14,
            },
          },
        },
        {
          opcode: 'setSubmitButtonText',
          blockType: Scratch.BlockType.COMMAND,
          text: 'set submit button text to [TEXT]',
          arguments: {
            TEXT: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: 'OK',
            },
          },
        },
        {
          opcode: 'setCancelButtonText',
          blockType: Scratch.BlockType.COMMAND,
          text: 'set cancel button text to [TEXT]',
          arguments: {
            TEXT: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: 'Cancel',
            },
          },
        },
        {
        blockType: Scratch.BlockType.LABEL,
        text: 'Formatting',
        },
        {
          opcode: 'setTextAlignment',
          blockType: Scratch.BlockType.COMMAND,
          text: 'set text alignment to [ALIGNMENT]',
          blockIconURI: formatIcon,
          arguments: {
            ALIGNMENT: {
              type: Scratch.ArgumentType.STRING,
              menu: 'alignmentMenu',
              defaultValue: 'left',
            },
          },
        },
        {
          opcode: 'setFontFamily',
          blockType: Scratch.BlockType.COMMAND,
          text: 'set font to [FONT]',
          blockIconURI: formatIcon,
          arguments: {
            FONT: {
              type: Scratch.ArgumentType.STRING,
              menu: 'fontMenu',
              defaultValue: 'Arial',
            },
          },
        },
        {
          opcode: 'setInputEnabled',
          blockType: Scratch.BlockType.COMMAND,
          text: 'set input [INPUT_ACTION]',
          blockIconURI: formatIcon,
          arguments: {
            INPUT_ACTION: {
              type: Scratch.ArgumentType.STRING,
              menu: 'inputActionMenu',
              defaultValue: 'Enable',
            },
          },
        },
        {
          opcode: 'setCancelButton',
          blockType: Scratch.BlockType.COMMAND,
          text: 'set cancel button to [ACTION]',
          blockIconURI: formatIcon,
          arguments: {
            ACTION: {
              type: Scratch.ArgumentType.STRING,
              menu: 'cancelMenu',
              defaultValue: 'Enable',
            },
          },
        },
        {
        blockType: Scratch.BlockType.LABEL,
        text: 'Color Setting',
        },
        {
          opcode: 'setQuestionColor',
          blockType: Scratch.BlockType.COMMAND,
          text: 'set question color to [COLOR]',
          blockIconURI: colorIcon,
          arguments: {
            COLOR: {
              type: Scratch.ArgumentType.COLOR,
              defaultValue: '#000000',
            },
          },
        },
        {
          opcode: 'setInputColor',
          blockType: Scratch.BlockType.COMMAND,
          text: 'set input color to [COLOR]',
          blockIconURI: colorIcon,
          arguments: {
            COLOR: {
              type: Scratch.ArgumentType.COLOR,
              defaultValue: '#000000',
            },
          },
        },
        {
          opcode: 'setTextBoxColor',
          blockType: Scratch.BlockType.COMMAND,
          text: 'set text box color to [COLOR]',
          blockIconURI: colorIcon,
          arguments: {
            COLOR: {
              type: Scratch.ArgumentType.COLOR,
              defaultValue: '#ffffff',
            },
          },
        },
        {
          opcode: 'setInputBackgroundColor',
          blockType: Scratch.BlockType.COMMAND,
          text: 'set input background color to [COLOR]',
          blockIconURI: colorIcon,
          arguments: {
            COLOR: {
              type: Scratch.ArgumentType.COLOR,
              defaultValue: '#ffffff',
            },
          },
        },
        {
          opcode: 'setInputOutlineColor',
          blockType: Scratch.BlockType.COMMAND,
          text: 'set input outline color to [COLOR]',
          blockIconURI: colorIcon,
          arguments: {
            COLOR: {
              type: Scratch.ArgumentType.COLOR,
              defaultValue: '#000000',
            },
          },
        },
        {
          opcode: 'setSubmitButtonColor',
          blockType: Scratch.BlockType.COMMAND,
          text: 'set submit button color to [COLOR]',
          blockIconURI: colorIcon,
          arguments: {
            COLOR: {
              type: Scratch.ArgumentType.COLOR,
              defaultValue: '#0074D9',
            },
          },
        },
        {
          opcode: 'setCancelButtonColor',
          blockType: Scratch.BlockType.COMMAND,
          text: 'set cancel button color to [COLOR]',
          blockIconURI: colorIcon,
          arguments: {
            COLOR: {
              type: Scratch.ArgumentType.COLOR,
              defaultValue: '#d9534f',
            },
          },
        },
        {
          opcode: 'setSubmitButtonTextColor',
          blockType: Scratch.BlockType.COMMAND,
          text: 'set submit button text color to [COLOR]',
          blockIconURI: colorIcon,
          arguments: {
            COLOR: {
              type: Scratch.ArgumentType.COLOR,
              defaultValue: '#ffffff',
            },
          },
        },
        {
          opcode: 'setCancelButtonTextColor',
          blockType: Scratch.BlockType.COMMAND,
          text: 'set cancel button text color to [COLOR]',
          blockIconURI: colorIcon,
          arguments: {
            COLOR: {
              type: Scratch.ArgumentType.COLOR,
              defaultValue: '#ffffff',
            },
          },
        },
      ],
      menus: {
        alignmentMenu: ['left', 'right', 'center'],
        fontMenu: ['Arial', 'Times New Roman', 'Comic Sans MS', 'Verdana', 'Courier New', 'Impact', 'Cursive'],
        cancelMenu: ['Enable', 'Disable'],
        inputActionMenu: ['Enable', 'Disable'],
      },
    };
  }

  setFontSize(args) {
    this.fontSize = args.SIZE + 'px';
  }

  setQuestionColor(args) {
    this.questionColor = args.COLOR;
  }

  setInputColor(args) {
    this.inputColor = args.COLOR;
  }

  setTextBoxColor(args) {
    this.textBoxColor = args.COLOR;
  }

  setInputBackgroundColor(args) {
    this.inputBackgroundColor = args.COLOR;
  }

  setInputOutlineColor(args) {
    this.inputOutlineColor = args.COLOR;
  }

  setTextAlignment(args) {
    this.textAlign = args.ALIGNMENT;
  }

  setFontFamily(args) {
    this.fontFamily = args.FONT;
  }

  setCancelButton(args) {
    this.showCancelButton = args.ACTION === 'Enable';
  }

  setSubmitButtonText(args) {
    this.submitButtonText = args.TEXT;
  }

  setCancelButtonText(args) {
    this.cancelButtonText = args.TEXT;
  }

  setSubmitButtonColor(args) {
    this.submitButtonColor = args.COLOR;
  }

  setCancelButtonColor(args) {
    this.cancelButtonColor = args.COLOR;
  }

  setInputEnabled(args) {
    this.isInputEnabled = args.INPUT_ACTION === 'Enable';
  }

  setSubmitButtonTextColor(args) {
    this.submitButtonTextColor = args.COLOR;
  }

  setCancelButtonTextColor(args) {
    this.cancelButtonTextColor = args.COLOR;
  }

  askAndWait(args) {
    const question = args.question;
    this.isWaitingForInput = true;
    this.userInput = null;

    return new Promise((resolve) => {
      const overlay = document.createElement('div');
      overlay.classList.add('ask-box'); // Add class for styling purposes
      overlay.style.position = 'fixed';
      overlay.style.top = '50%';
      overlay.style.left = '50%';
      overlay.style.transform = 'translate(-50%, -50%)';
      overlay.style.backgroundColor = this.textBoxColor; // Set text box color
      overlay.style.boxShadow = '0 0 5px rgba(0, 0, 0, 0.3)';
      overlay.style.borderRadius = '5px';
      overlay.style.padding = '15px';
      overlay.style.fontSize = this.fontSize; // Set font size
      overlay.style.textAlign = this.textAlign; // Set text alignment
      overlay.style.fontFamily = this.fontFamily; // Set font family

      const questionText = document.createElement('div');
      questionText.classList.add('question');
      questionText.style.fontSize = '16px';
      questionText.style.marginBottom = '10px';
      questionText.style.color = this.questionColor;
      questionText.textContent = question;

      const inputField = document.createElement('input');
      inputField.style.display = this.isInputEnabled ? 'block' : 'none';
      inputField.style.width = '100%';
      inputField.style.padding = '5px';
      inputField.style.fontSize = this.fontSize; // Set font size
      inputField.style.color = this.inputColor; // Set input text color
      inputField.style.backgroundColor = this.inputBackgroundColor;
      inputField.style.border = `1px solid ${this.inputOutlineColor}`;
      inputField.style.borderRadius = '4px';

      const submitButton = document.createElement('button');
      submitButton.style.marginTop = '10px';
      submitButton.style.marginRight = '5px';
      submitButton.style.padding = '5px 10px';
      submitButton.style.backgroundColor = this.submitButtonColor;
      submitButton.style.color = this.submitButtonTextColor;
      submitButton.style.border = 'none';
      submitButton.style.borderRadius = '4px';
      submitButton.style.cursor = 'pointer';
      submitButton.textContent = this.submitButtonText;

      submitButton.addEventListener('click', () => {
        this.userInput = inputField.value;
        this.isWaitingForInput = false;
        document.body.removeChild(overlay);
        resolve();
      });

      const cancelButton = document.createElement('button');
      cancelButton.style.marginTop = '10px';
      cancelButton.style.padding = '5px 10px';
      cancelButton.style.backgroundColor = this.cancelButtonColor;
      cancelButton.style.color = this.cancelButtonTextColor;
      cancelButton.style.border = 'none';
      cancelButton.style.borderRadius = '4px';
      cancelButton.style.cursor = 'pointer';
      cancelButton.textContent = this.cancelButtonText;
      cancelButton.style.display = this.showCancelButton ? 'inline-block' : 'none'; // Show/hide cancel button

      cancelButton.addEventListener('click', () => {
        this.userInput = 'cancelled'; // Set user response to 'cancelled'
        this.isWaitingForInput = false;
        document.body.removeChild(overlay);
        resolve();
      });


      overlay.appendChild(questionText);
      
      if (this.isInputEnabled) {
      overlay.appendChild(inputField);
      }
      
      overlay.appendChild(submitButton);
      overlay.appendChild(cancelButton);

      document.body.appendChild(overlay);
      inputField.focus();
    });
  }

  getUserInput() {
    return this.userInput;
  }
}

Scratch.extensions.register(new BetterInputSP());
})(Scratch);