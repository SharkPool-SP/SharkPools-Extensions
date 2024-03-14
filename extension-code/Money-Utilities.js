// Name: Money Utilities
// ID: SPmoney
// Description: Convert Currencies and get Currency Information
// By: SharkPool

//  Version 1.0.1

(function (Scratch) {
  "use strict";
  if (!Scratch.extensions.unsandboxed) throw new Error("Money Extension must run unsandboxed");

  const menuIconURI =
"data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHdpZHRoPSI4NS43MTU2IiBoZWlnaHQ9Ijg1LjcxNTYiIHZpZXdCb3g9IjAsMCw4NS43MTU2LDg1LjcxNTYiPjxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0xOTcuMTQyMiwtMTM3LjE0MjIpIj48ZyBkYXRhLXBhcGVyLWRhdGE9InsmcXVvdDtpc1BhaW50aW5nTGF5ZXImcXVvdDs6dHJ1ZX0iIGZpbGwtcnVsZT0ibm9uemVybyIgc3Ryb2tlLWxpbmVjYXA9ImJ1dHQiIHN0cm9rZS1saW5lam9pbj0ibWl0ZXIiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgc3Ryb2tlLWRhc2hhcnJheT0iIiBzdHJva2UtZGFzaG9mZnNldD0iMCIgc3R5bGU9Im1peC1ibGVuZC1tb2RlOiBub3JtYWwiPjxwYXRoIGQ9Ik0xOTkuMTQyMiwxODBjMCwtMjIuNTY1MTQgMTguMjkyNjYsLTQwLjg1NzggNDAuODU3OCwtNDAuODU3OGMyMi41NjUxNCwwIDQwLjg1NzgsMTguMjkyNjYgNDAuODU3OCw0MC44NTc4YzAsMjIuNTY1MTQgLTE4LjI5MjY2LDQwLjg1NzggLTQwLjg1NzgsNDAuODU3OGMtMjIuNTY1MTQsMCAtNDAuODU3OCwtMTguMjkyNjYgLTQwLjg1NzgsLTQwLjg1Nzh6IiBmaWxsPSIjMzViMzAwIiBzdHJva2U9IiMwYjY3MDAiIHN0cm9rZS13aWR0aD0iNCIvPjxwYXRoIGQ9Ik0yMzYuNTQyNzYsMjA1LjczMzA4di0zLjQwMzAxYy00LjcwNTgyLC0wLjQ4MTk0IC05LjM3Nzc1LC0xLjgwODUgLTEzLjUxMTU4LC0zLjgzOTE3Yy0yLjgxMzcsLTEuMzgwNSAtMy40OTcyNywtNC45MzA0NiAtMS44MDQ1NSwtNy40MjkyMmMxLjY5MTQ4LC0yLjQ5OTk5IDUuMTEwNTcsLTMuMDAzNDUgNy45MDE1LC0xLjU3OTY2YzIuNjE5OTgsMS4zMzc3IDUuMTk0MTksMi4yMTEwMyA3LjgyMzU3LDIuNjM0ODJ2LTguMTY5NDRjLTEwLjk2MDEzLC0yLjUxNjMyIC0xNi41NDE3NSwtNi4yNjI0NyAtMTYuNTQxNzUsLTE0LjcwMjMydi0wLjEzNzMxYzAsLTguMDMyMTMgNS44NTM1MiwtMTMuNjEzNzUgMTYuMjcwMSwtMTQuMzYzMzhjMCwwIDAsLTAuODY3ODggMCwtMS45NDAzN2MwLC0xLjA2ODI4IDEuNTg1MSwtMS45Mzc2NSAzLjU0MDMxLC0xLjkzNzY1YzEuOTU1MjEsMCAzLjUzOTA4LDAuOTE1MTQgMy41MzkwOCwyLjA0MTMxdjIuMDQyNzljMy40NTgxOCwwLjM3ODAzIDYuNTgwMTMsMS4yNTY4IDkuNDI0NzUsMi41MzI0YzIuODU2NzQsMS4yODI1MyAzLjY4OTc0LDQuODE4ODggMi4xNDc2OSw3LjMzNjQ0Yy0xLjU0MDgyLDIuNTE5MDQgLTQuNjI0OTIsMy4yMjQxMyAtNy4xNjI3NiwyLjA5OTJjLTEuNTc2OTQsLTAuNjk5OSAtMy4xOTA0OSwtMS4yMzk0OCAtNC43NDg2MiwtMS42MjAyM3Y3Ljg5NjA2YzEwLjgyMjgyLDIuNTE3OCAxNi4yNjg2Miw2LjM5NzMgMTYuMjY4NjIsMTQuODM4Mzl2MC4xMzU4MmMwLDguMzA1MjYgLTYuMzk4NTQsMTMuNDEwNjQgLTE2LjA2NDI2LDE0LjI5NjA5YzAsMCAwLDEuNDkyMzIgMCwzLjMzMzI0YzAsMS44NDMzOSAtMS41ODYzNCwzLjMzNTcxIC0zLjU0MDMxLDMuMzM1NzFjLTEuOTU1MjEsMCAtMy41NDAzMSwtMS41MjMyNSAtMy41NDE4LC0zLjQwMDUzek0yNDMuMzUwNTEsMTkyLjUyNjA1YzMuMTMyNiwtMC4zNDE5MSA0LjU2MTU5LC0xLjQ5Nzc3IDQuNTYxNTksLTMuNDcxNzh2LTAuMTM3MzFjMCwtMS44MzY3MSAtMS4wMTk3OSwtMi44NTk0NiAtNC41NjE1OSwtMy44Nzk1ek0yMzcuMDE5MDEsMTcyLjAzNjAydi03LjM1MjUyYy0zLjMzNDQ4LDAuMjcxNjUgLTQuNjI4ODgsMS42MzM1OSAtNC42Mjg4OCwzLjQwMzAxdjAuMTM1ODJjMCwxLjc2OTQxIDAuOTU0MjMsMi43OTIxNyA0LjYyODg4LDMuODEzNjl6IiBmaWxsPSIjZmZmZmZmIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIvPjwvZz48L2c+PC9zdmc+";

  const blockIconURI =
"data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHdpZHRoPSI3MC43NSIgaGVpZ2h0PSI3MC43NSIgdmlld0JveD0iMCwwLDcwLjc1LDcwLjc1Ij48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMjA0LjYyNDk4LC0xNDQuNjI0OTgpIj48ZyBkYXRhLXBhcGVyLWRhdGE9InsmcXVvdDtpc1BhaW50aW5nTGF5ZXImcXVvdDs6dHJ1ZX0iIGZpbGwtcnVsZT0ibm9uemVybyIgc3Ryb2tlLWxpbmVjYXA9ImJ1dHQiIHN0cm9rZS1saW5lam9pbj0ibWl0ZXIiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgc3Ryb2tlLWRhc2hhcnJheT0iIiBzdHJva2UtZGFzaG9mZnNldD0iMCIgc3R5bGU9Im1peC1ibGVuZC1tb2RlOiBub3JtYWwiPjxwYXRoIGQ9Ik0yMDQuNjI0OTgsMjE1LjM3NDk4di03MC43NWg3MC43NXY3MC43NXoiIGZpbGw9IiMzNWIzMDAiIHN0cm9rZT0iIzBiNjcwMCIgc3Ryb2tlLXdpZHRoPSIwIi8+PHBhdGggZD0iTTIzNi41NDI3NiwyMDUuNzMzMDh2LTMuNDAzMDFjLTQuNzA1ODIsLTAuNDgxOTQgLTkuMzc3NzUsLTEuODA4NSAtMTMuNTExNTgsLTMuODM5MTdjLTIuODEzNywtMS4zODA1IC0zLjQ5NzI3LC00LjkzMDQ2IC0xLjgwNDU1LC03LjQyOTIyYzEuNjkxNDgsLTIuNDk5OTkgNS4xMTA1NywtMy4wMDM0NSA3LjkwMTUsLTEuNTc5NjZjMi42MTk5OCwxLjMzNzcgNS4xOTQxOSwyLjIxMTAzIDcuODIzNTcsMi42MzQ4MnYtOC4xNjk0NGMtMTAuOTYwMTMsLTIuNTE2MzIgLTE2LjU0MTc1LC02LjI2MjQ3IC0xNi41NDE3NSwtMTQuNzAyMzJ2LTAuMTM3MzFjMCwtOC4wMzIxMyA1Ljg1MzUyLC0xMy42MTM3NSAxNi4yNzAxLC0xNC4zNjMzOGMwLDAgMCwtMC44Njc4OCAwLC0xLjk0MDM3YzAsLTEuMDY4MjggMS41ODUxLC0xLjkzNzY1IDMuNTQwMzEsLTEuOTM3NjVjMS45NTUyMSwwIDMuNTM5MDgsMC45MTUxNCAzLjUzOTA4LDIuMDQxMzF2Mi4wNDI3OWMzLjQ1ODE4LDAuMzc4MDMgNi41ODAxMywxLjI1NjggOS40MjQ3NSwyLjUzMjRjMi44NTY3NCwxLjI4MjUzIDMuNjg5NzQsNC44MTg4OCAyLjE0NzY5LDcuMzM2NDRjLTEuNTQwODIsMi41MTkwNCAtNC42MjQ5MiwzLjIyNDEzIC03LjE2Mjc2LDIuMDk5MmMtMS41NzY5NCwtMC42OTk5IC0zLjE5MDQ5LC0xLjIzOTQ4IC00Ljc0ODYyLC0xLjYyMDIzdjcuODk2MDZjMTAuODIyODIsMi41MTc4IDE2LjI2ODYyLDYuMzk3MyAxNi4yNjg2MiwxNC44MzgzOXYwLjEzNTgyYzAsOC4zMDUyNiAtNi4zOTg1NCwxMy40MTA2NCAtMTYuMDY0MjYsMTQuMjk2MDljMCwwIDAsMS40OTIzMiAwLDMuMzMzMjRjMCwxLjg0MzM5IC0xLjU4NjM0LDMuMzM1NzEgLTMuNTQwMzEsMy4zMzU3MWMtMS45NTUyMSwwIC0zLjU0MDMxLC0xLjUyMzI1IC0zLjU0MTgsLTMuNDAwNTN6TTI0My4zNTA1MSwxOTIuNTI2MDVjMy4xMzI2LC0wLjM0MTkxIDQuNTYxNTksLTEuNDk3NzcgNC41NjE1OSwtMy40NzE3OHYtMC4xMzczMWMwLC0xLjgzNjcxIC0xLjAxOTc5LC0yLjg1OTQ2IC00LjU2MTU5LC0zLjg3OTV6TTIzNy4wMTkwMSwxNzIuMDM2MDJ2LTcuMzUyNTJjLTMuMzM0NDgsMC4yNzE2NSAtNC42Mjg4OCwxLjYzMzU5IC00LjYyODg4LDMuNDAzMDF2MC4xMzU4MmMwLDEuNzY5NDEgMC45NTQyMywyLjc5MjE3IDQuNjI4ODgsMy44MTM2OXoiIGZpbGw9IiNmZmZmZmYiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9nPjwvZz48L3N2Zz4=";

  class SPmoney {
    getInfo() {
      return {
        id: "SPmoney",
        name: "Money Utilities",
        color1: "#35b300",
        color2: "#0e8e00",
        color3: "#0b6700",
        menuIconURI,
        blockIconURI,
        blocks: [
          {
            opcode: "convertDollar",
            blockType: Scratch.BlockType.REPORTER,
            text: "convert [NUM] [CUR1] to [CUR2]",
            arguments: {
              CUR1: { type: Scratch.ArgumentType.STRING, menu: "CURRENCIES" },
              CUR2: { type: Scratch.ArgumentType.STRING, menu: "CURRENCIES" },
              NUM: { type: Scratch.ArgumentType.NUMBER, defaultValue: 1 }
            }
          },
          {
            opcode: "getDollarSymbol",
            blockType: Scratch.BlockType.REPORTER,
            text: "get symbol for [CUR]",
            arguments: {
              CUR: { type: Scratch.ArgumentType.STRING, menu: "CURRENCIES" }
            }
          },
          {
            opcode: "getInflation",
            blockType: Scratch.BlockType.REPORTER,
            text: "get inflation rate of [COUNTRY]",
            arguments: {
              COUNTRY: { type: Scratch.ArgumentType.STRING, menu: "COUNTRIES" }
            }
          },
        ],
        menus: {
          CURRENCIES: {
            acceptReporters: true,
            items: [
              { text: "United States Dollar", value: "USD" },
              { text: "Euro", value: "EUR" },
              { text: "Japanese Yen", value: "JPY" },
              { text: "British Pound Sterling", value: "GBP" },
              { text: "Swiss Franc", value: "CHF" },
              { text: "Canadian Dollar", value: "CAD" },
              { text: "Australian Dollar", value: "AUD" },
              { text: "Chinese Yuan Renminbi", value: "CNY" },
              { text: "Indian Rupee", value: "INR" },
              { text: "Brazilian Real", value: "BRL" },
              { text: "South African Rand", value: "ZAR" },
              { text: "Russian Ruble", value: "RUB" },
              { text: "Mexican Peso", value: "MXN" },
              { text: "Singapore Dollar", value: "SGD" },
              { text: "New Zealand Dollar", value: "NZD" },
              { text: "Swedish Krona", value: "SEK" },
              { text: "Norwegian Krone", value: "NOK" },
              { text: "Danish Krone", value: "DKK" },
              { text: "Hong Kong Dollar", value: "HKD" },
              { text: "South Korean Won", value: "KRW" },
              { text: "Turkish Lira", value: "TRL" }
            ]
          },
          COUNTRIES: {
            acceptReporters: true,
            items: [
              "United States", "Germany", "Japan",
              "United Kingdom", "Switzerland", "Canada",
              "Australia", "China", "India", "Brazil",
              "South Africa", "Russia", "Mexico",
              "Singapore", "New Zealand", "Sweden",
              "Norway", "Denmark", "Hong Kong",
              "South Korea", "Turkey"
            ]
          },
        }
      };
    }

    async convertDollar(args) {
      args.CUR1 = Scratch.Cast.toString(args.CUR1).toLowerCase();
      args.CUR2 = Scratch.Cast.toString(args.CUR2).toLowerCase();
      if (!await Scratch.canFetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${args.CUR1}.json`)) return "";
      try {
        const response = await fetch(`https://corsproxy.io?https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${args.CUR1}.json`);
        const data = await response.json();
        let difference = data[args.CUR1][args.CUR2] ? data[args.CUR1][args.CUR2] : 1;
        difference = Scratch.Cast.toNumber(args.NUM) * difference;
        return Math.round(difference * 100) / 100;
      } catch (error) {
        console.error(error);
        return "Couldnt Convert";
      }
    }

    async getDollarSymbol(args) {
      args.CUR = Scratch.Cast.toString(args.CUR);
      if (!await Scratch.canFetch(`https://gist.githubusercontent.com/stevekinney/8334552/raw/28d6e58f99ba242b7f798a27877e2afce75a5dca/currency-symbols.json`)) return "";
      try {
        const response = await fetch(`https://gist.githubusercontent.com/stevekinney/8334552/raw/28d6e58f99ba242b7f798a27877e2afce75a5dca/currency-symbols.json`);
        const data = await response.json();
        for (let i = 0; i < data.length; i++) {
          if (data[i].abbreviation === args.CUR) {
            const parser = new DOMParser();
            const symbol = args.CUR === "INR" ? "&#8377;" : data[i].symbol;
            return parser.parseFromString(`<!doctype html><body>${symbol}`, "text/html").body.textContent;
          }
        }
        return "";
      } catch (error) {
        return "";
      }
    }

    async getInflation(args) {
      if (!await Scratch.canFetch(`https://tradingeconomics.com/country-list/inflation-rate?continent=world`)) return "";
      try {
        const response = await fetch(`https://corsproxy.io?https://tradingeconomics.com/country-list/inflation-rate?continent=world`);
        let text = await response.text();
        const regex = new RegExp(`<a[^>]*>\\s*${args.COUNTRY}\\s*<\\/a>\\s*<\\/td>\\s*<td[^>]*data-heatmap-value=["']([0-9.-]+)["'][^>]*>[^<]*<\\/td>\\s*<td[^>]*>([0-9.-]+)<\\/td>`, "i");
        text = text.match(regex)
        return text && text[2] ? text[2] : 0;
      } catch (error) {
        return 0;
      }
    }
  }
  Scratch.extensions.register(new SPmoney);
})(Scratch);
