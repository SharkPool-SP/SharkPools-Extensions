  /*
  * ColorAtXY extension v1.1 by 0znzw
  * Do not remove this comment
  */
(function (Scratch) {
    'use strict';

    const BlockType = Scratch.BlockType;
    const ArgumentType = Scratch.ArgumentType;
    const Cast = Scratch.Cast;
    const renderer = Scratch.vm.renderer;

    //Icons by SharkPool
    const menuIconURI =
'data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHdpZHRoPSIxMTEuMjE1MzMiIGhlaWdodD0iMTExLjIxNTMzIiB2aWV3Qm94PSIwLDAsMTExLjIxNTMzLDExMS4yMTUzMyI+PGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTE4NC4zOTIzMiwtMTI0LjM5MjMyKSI+PGcgZGF0YS1wYXBlci1kYXRhPSJ7JnF1b3Q7aXNQYWludGluZ0xheWVyJnF1b3Q7OnRydWV9IiBzdHJva2U9Im5vbmUiIHN0cm9rZS1saW5lY2FwPSJidXR0IiBzdHJva2UtbGluZWpvaW49Im1pdGVyIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS1kYXNoYXJyYXk9IiIgc3Ryb2tlLWRhc2hvZmZzZXQ9IjAiIHN0eWxlPSJtaXgtYmxlbmQtbW9kZTogbm9ybWFsIj48cGF0aCBkPSJNMTg0LjM5MjMyLDE3OS45OTk5OGMwLC0zMC43MTEyNiAyNC44OTY0LC01NS42MDc2NiA1NS42MDc2NiwtNTUuNjA3NjZjMzAuNzExMjYsMCA1NS42MDc2NiwyNC44OTY0IDU1LjYwNzY2LDU1LjYwNzY2YzAsMzAuNzExMjYgLTI0Ljg5NjQsNTUuNjA3NjYgLTU1LjYwNzY2LDU1LjYwNzY2Yy0zMC43MTEyNiwwIC01NS42MDc2NiwtMjQuODk2NCAtNTUuNjA3NjYsLTU1LjYwNzY2eiIgZmlsbD0iI2IxMmFkZSIgZmlsbC1ydWxlPSJub256ZXJvIiBzdHJva2Utd2lkdGg9IjAiLz48cGF0aCBkPSJNMjMwLjQ3NjcsMTk5LjkyMTFjLTEuMTY3NjUsOC4yMzg2NyAtOC40ODYwMyw4LjI5MTQ5IC0xNC41NjgzMyw4LjI5MTQ5YzAsMCAtNSwwIC01LC01YzAsLTUgMTQuNTY0NTgsLTE1LjgwNzI1IDE0LjU2NDU4LC0xNS44MDcyNWMwLDAgMy4wMDgxMSwtMC4yNjE0OSAyLjk4NDkyLDAuOTY5ODdjLTAuMDIyODIsMS4yMTE0MiAtMy4wODQ5NSwzLjkxMjMzIC0yLjEyNjQ0LDQuMzUzM2MxLjA4MDM3LDAuNDk3MDIgMi40NDEsLTEuNDcxOTUgNC4wNDI2OCwtMS41NzE2OWMwLjc5NjYxLC0wLjA0OTYxIC0wLjM5MjEzLDMuMzk3NDUgMC4zMTY2NywzLjg2MjIyYzAuOTY2MDcsMC42MzM0NiAwLjY3MzAyLDQuNzE1NTggLTAuMjE0MDgsNC45MDIwN3oiIGZpbGw9IiNmYTY2ZmYiIGZpbGwtcnVsZT0ibm9uemVybyIgc3Ryb2tlLXdpZHRoPSIwLjUiLz48cGF0aCBkPSJNMjUzLjY3MzQ5LDE3My42NDI4NGwtNy4zMTMsLTcuMzA4NGwtMTcuNDE1NSwxNy4zMjkxOGMtMC41Mjc3NCwwLjYwMjc2IC0wLjkwNDcsMS4yMDU1MSAtMS4wNTU0OCwxLjgwODI1Yy0wLjgyOTMsMy43NjcyMSAtMy42MTg4Miw2LjYzMDI4IC02LjcwOTg4LDcuNjA5NzZjLTEuMDU1NDgsMC4zMDEzOCAtMi4xMTA5NiwxLjI4MDg2IC0yLjU2MzMyLDIuMjYwMzVsLTMuNjk0MTgsNy45MTExMmMtMC4yMjYxOCwwLjUyNzQxIC0wLjIyNjE4LDAuODI4ODEgLTAuMjI2MTgsMC45MDQxNWwxLjIwNjI2LDEuMTMwMTVjMC4xNTA3OCwwIDAuNDUyMzYsLTAuMDc1MzMgMC44MjkzMiwtMC4yMjYwM2w3Ljg0MDc0LC0zLjY5MTg2YzEuMDU1NDgsLTAuNTI3NDEgMi4wMzU1OCwtMS41ODIyMiAyLjMzNzE0LC0yLjU2MTcxYzAuOTA0NywtMy4wODkxMSAzLjg0NDk4LC01Ljg3Njg1IDYuOTM2MDQsLTYuNTU0OTVjMS4yMDYyNiwtMC4zMDEzOCAxLjg4NDgsLTAuNjc4MTIgMi40MTI1NCwtMS4yODA4NnpNMjYyLjY0NTExLDE2NS43MzE3bDAuNjAzMTQsMC42MDI3NGwyLjU2MzMyLDIuNTYxNzFjMS41MDc4NCwxLjUwNjg5IDEuNTA3ODQsMy45OTMyNCAwLDUuNTAwMTNsLTIuOTQwMjgsMi44NjMwOWMtMS4zNTcwNiwxLjQzMTUzIC0zLjYxODgsMS41ODIyIC01LjEyNjY0LDAuMzAxMzZsLTE3LjQ5MDksMTcuNDA0NTFjLTEuMjgxNjYsMS4zNTYyIC0yLjg2NDg4LDIuMjYwMzUgLTQuNDQ4MSwyLjYzNzA2Yy0xLjgwOTQsMC4zNzY3MiAtMy4xNjY0NiwxLjY1NzU2IC0zLjQ2ODAyLDIuODYzMDdjLTAuNzUzOTIsMi40ODYzNSAtMi44NjQ5LDQuODIyMDMgLTUuMzUyODIsNi4wMjc1NGwtNy45MTYxNCwzLjY5MTg4Yy0xLjA1NTQ4LDAuNDUyMDcgLTIuMTg2MzYsMC43NTM0MyAtMy4xNjY0NiwwLjc1MzQzYy0xLjUwNzg0LDAgLTIuODY0ODgsLTAuNTI3NDEgLTMuODQ0OTgsLTEuNTA2ODlsLTEuNTA3ODQsLTEuNTA2ODdjLTEuNjU4NjIsLTEuNzMyOTIgLTEuOTYwMTYsLTQuNDQ1MzMgLTAuNzUzOSwtNy4wODIzOGwzLjY5NDE4LC03LjgzNTc5YzEuMTMwODgsLTIuNDg2MzUgMy41NDM0NCwtNC41OTYgNi4wMzEzNiwtNS4zNDk0NGMxLjIwNjI2LC0wLjM3NjcyIDIuNDg3OTIsLTEuNjU3NTYgMi43MTQxLC0yLjc4NzczYzAuNTI3NzQsLTIuMjYwMzIgMS40MzI0NCwtMy44NDI1NSAyLjcxNDEsLTUuMTk4NzVsMTcuNDkwODcsLTE3LjQwNDUxYy0xLjI4MTY2LC0xLjUwNjg5IC0xLjIwNjI2LC0zLjY5MTg2IDAuMjI2MTgsLTUuMTk4NzVsMi45NDAyOCwtMi44NjMwOWMxLjUwNzg0LC0xLjUwNjg5IDMuOTk1NzYsLTEuNTA2ODkgNS41MDM2LDBsMi40MTI1NCwyLjQxMTAxbDAuNzUzOTIsMC43NTM0M2w2LjU1OTA4LC02LjU1NDk1YzIuMzM3MTQsLTIuMzM1NjggNi4wMzEzNCwtMi4zMzU2OCA4LjM2ODQ4LDBjMS4xMzA4OCwxLjEzMDE3IDEuNzM0MDIsMi42MzcwNCAxLjczNDAyLDQuMTQzOTNjMCwxLjUwNjg5IC0wLjYwMzE0LDMuMDg5MTEgLTEuNzM0MDIsNC4yMTkyOXoiIGZpbGw9IiNmZmZmZmYiIGZpbGwtcnVsZT0iZXZlbm9kZCIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9nPjwvZz48L3N2Zz4=';
    const blockIconURI =
'data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHdpZHRoPSI2MS44NzY0MyIgaGVpZ2h0PSI2MS44NzY0NyIgdmlld0JveD0iMCwwLDYxLjg3NjQzLDYxLjg3NjQ3Ij48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMjA5LjA2MTc3LC0xNDkuMDYxNzUpIj48ZyBkYXRhLXBhcGVyLWRhdGE9InsmcXVvdDtpc1BhaW50aW5nTGF5ZXImcXVvdDs6dHJ1ZX0iIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLWxpbmVjYXA9ImJ1dHQiIHN0cm9rZS1saW5lam9pbj0ibWl0ZXIiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgc3Ryb2tlLWRhc2hhcnJheT0iIiBzdHJva2UtZGFzaG9mZnNldD0iMCIgc3R5bGU9Im1peC1ibGVuZC1tb2RlOiBub3JtYWwiPjxwYXRoIGQ9Ik0yMzAuNDc2NywxOTkuOTIxMWMtMS4xNjc2NSw4LjIzODY3IC04LjQ4NjAzLDguMjkxNDkgLTE0LjU2ODMzLDguMjkxNDljMCwwIC01LDAgLTUsLTVjMCwtNSAxNC41NjQ1OCwtMTUuODA3MjUgMTQuNTY0NTgsLTE1LjgwNzI1YzAsMCAzLjAwODExLC0wLjI2MTQ5IDIuOTg0OTIsMC45Njk4N2MtMC4wMjI4MiwxLjIxMTQyIC0zLjA4NDk1LDMuOTEyMzMgLTIuMTI2NDQsNC4zNTMzYzEuMDgwMzcsMC40OTcwMiAyLjQ0MSwtMS40NzE5NSA0LjA0MjY4LC0xLjU3MTY5YzAuNzk2NjEsLTAuMDQ5NjEgLTAuMzkyMTMsMy4zOTc0NSAwLjMxNjY3LDMuODYyMjJjMC45NjYwNywwLjYzMzQ2IDAuNjczMDIsNC43MTU1OCAtMC4yMTQwOCw0LjkwMjA3eiIgZmlsbD0iI2ZhNjZmZiIgZmlsbC1ydWxlPSJub256ZXJvIiBzdHJva2Utd2lkdGg9IjAuNSIvPjxwYXRoIGQ9Ik0yNTMuNjczNDksMTczLjY0Mjg0bC03LjMxMywtNy4zMDg0bC0xNy40MTU1LDE3LjMyOTE4Yy0wLjUyNzc0LDAuNjAyNzYgLTAuOTA0NywxLjIwNTUxIC0xLjA1NTQ4LDEuODA4MjVjLTAuODI5MywzLjc2NzIxIC0zLjYxODgyLDYuNjMwMjggLTYuNzA5ODgsNy42MDk3NmMtMS4wNTU0OCwwLjMwMTM4IC0yLjExMDk2LDEuMjgwODYgLTIuNTYzMzIsMi4yNjAzNWwtMy42OTQxOCw3LjkxMTEyYy0wLjIyNjE4LDAuNTI3NDEgLTAuMjI2MTgsMC44Mjg4MSAtMC4yMjYxOCwwLjkwNDE1bDEuMjA2MjYsMS4xMzAxNWMwLjE1MDc4LDAgMC40NTIzNiwtMC4wNzUzMyAwLjgyOTMyLC0wLjIyNjAzbDcuODQwNzQsLTMuNjkxODZjMS4wNTU0OCwtMC41Mjc0MSAyLjAzNTU4LC0xLjU4MjIyIDIuMzM3MTQsLTIuNTYxNzFjMC45MDQ3LC0zLjA4OTExIDMuODQ0OTgsLTUuODc2ODUgNi45MzYwNCwtNi41NTQ5NWMxLjIwNjI2LC0wLjMwMTM4IDEuODg0OCwtMC42NzgxMiAyLjQxMjU0LC0xLjI4MDg2ek0yNjIuNjQ1MTEsMTY1LjczMTdsMC42MDMxNCwwLjYwMjc0bDIuNTYzMzIsMi41NjE3MWMxLjUwNzg0LDEuNTA2ODkgMS41MDc4NCwzLjk5MzI0IDAsNS41MDAxM2wtMi45NDAyOCwyLjg2MzA5Yy0xLjM1NzA2LDEuNDMxNTMgLTMuNjE4OCwxLjU4MjIgLTUuMTI2NjQsMC4zMDEzNmwtMTcuNDkwOSwxNy40MDQ1MWMtMS4yODE2NiwxLjM1NjIgLTIuODY0ODgsMi4yNjAzNSAtNC40NDgxLDIuNjM3MDZjLTEuODA5NCwwLjM3NjcyIC0zLjE2NjQ2LDEuNjU3NTYgLTMuNDY4MDIsMi44NjMwN2MtMC43NTM5MiwyLjQ4NjM1IC0yLjg2NDksNC44MjIwMyAtNS4zNTI4Miw2LjAyNzU0bC03LjkxNjE0LDMuNjkxODhjLTEuMDU1NDgsMC40NTIwNyAtMi4xODYzNiwwLjc1MzQzIC0zLjE2NjQ2LDAuNzUzNDNjLTEuNTA3ODQsMCAtMi44NjQ4OCwtMC41Mjc0MSAtMy44NDQ5OCwtMS41MDY4OWwtMS41MDc4NCwtMS41MDY4N2MtMS42NTg2MiwtMS43MzI5MiAtMS45NjAxNiwtNC40NDUzMyAtMC43NTM5LC03LjA4MjM4bDMuNjk0MTgsLTcuODM1NzljMS4xMzA4OCwtMi40ODYzNSAzLjU0MzQ0LC00LjU5NiA2LjAzMTM2LC01LjM0OTQ0YzEuMjA2MjYsLTAuMzc2NzIgMi40ODc5MiwtMS42NTc1NiAyLjcxNDEsLTIuNzg3NzNjMC41Mjc3NCwtMi4yNjAzMiAxLjQzMjQ0LC0zLjg0MjU1IDIuNzE0MSwtNS4xOTg3NWwxNy40OTA4NywtMTcuNDA0NTFjLTEuMjgxNjYsLTEuNTA2ODkgLTEuMjA2MjYsLTMuNjkxODYgMC4yMjYxOCwtNS4xOTg3NWwyLjk0MDI4LC0yLjg2MzA5YzEuNTA3ODQsLTEuNTA2ODkgMy45OTU3NiwtMS41MDY4OSA1LjUwMzYsMGwyLjQxMjU0LDIuNDExMDFsMC43NTM5MiwwLjc1MzQzbDYuNTU5MDgsLTYuNTU0OTVjMi4zMzcxNCwtMi4zMzU2OCA2LjAzMTM0LC0yLjMzNTY4IDguMzY4NDgsMGMxLjEzMDg4LDEuMTMwMTcgMS43MzQwMiwyLjYzNzA0IDEuNzM0MDIsNC4xNDM5M2MwLDEuNTA2ODkgLTAuNjAzMTQsMy4wODkxMSAtMS43MzQwMiw0LjIxOTI5eiIgZmlsbD0iI2ZmZmZmZiIgZmlsbC1ydWxlPSJldmVub2RkIiBzdHJva2Utd2lkdGg9IjEiLz48L2c+PC9nPjwvc3ZnPg==';

class ColorAtXY {
        getInfo() {
            return {
                id: '0znzwColorAtXY',
                name: 'Color At XY',
                color1: '#b12ade',
                menuIconURI,
                blockIconURI,
                blocks: [
                    {
                        opcode: 'getColorAt',
                        text: 'get [attr] of color at x: [x] y: [y]',
                        disableMonitor: true,
                        blockType: BlockType.REPORTER,
                        arguments: {
                            attr: { type: ArgumentType.STRING, menu: 'modes' },
                            x: { type: ArgumentType.NUMBER, defaultValue: 0 },
                            y: { type: ArgumentType.NUMBER, defaultValue: 0 },
                        }
                    }
                ],
                menus: {
                    modes: {
                        acceptReporters: true,
                        items: ['hex','json','rgba(json object)','red(r)','green(g)','blue(b)','alpha(a)']
                    }
                }
            };
        }

        getColorAt(args) {
          function rgbaToHex(t,r,a,S){let n=t.toString(16).padStart(2,"0"),o=r.toString(16).padStart(2,"0"),g=a.toString(16).padStart(2,"0"),i=S.toString(16).padStart(2,"0");return`#${n}${o}${g}${i}`}
          var x = Cast.toNumber(args.x);
          var y = Cast.toNumber(args.y);
          const returnObj = renderer.extractColor(vm.runtime.stageWidth/2+x,vm.runtime.stageHeight/2+y,1).color;
          switch (args.attr) {
            case 'hex':
              return rgbaToHex(returnObj.r,returnObj.g,returnObj.b,returnObj.a).toString();
            case 'rgba(json object)':
              return JSON.stringify(returnObj);
            case 'json':
              return JSON.stringify([returnObj.r,returnObj.g,returnObj.b,returnObj.a]);
            case 'hex':
              return 
            case 'red(r)':
              return returnObj.r;
            case 'green(g)':
              return returnObj.g;
            case 'blue(b)':
              return returnObj.b;
            case 'alpha(a)':
              return returnObj.a;
          }
        }
    }

    Scratch.extensions.register(new ColorAtXY());
})(Scratch);
