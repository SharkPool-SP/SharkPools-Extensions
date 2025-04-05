// Name: Money Utilities
// ID: SPmoney
// Description: Convert Currencies and get Currency Information
// By: SharkPool
// License: MIT

// Version 1.0.11

(function (Scratch) {
  "use strict";
  if (!Scratch.extensions.unsandboxed) throw new Error("Money Extension must run unsandboxed");

  const menuIconURI =
"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI4NS43MTYiIGhlaWdodD0iODUuNzE2IiB2aWV3Qm94PSIwIDAgODUuNzE2IDg1LjcxNiI+PHBhdGggZD0iTTIgNDIuODU4QzIgMjAuMjkzIDIwLjI5MyAyIDQyLjg1OCAyczQwLjg1OCAxOC4yOTMgNDAuODU4IDQwLjg1OC0xOC4yOTMgNDAuODU4LTQwLjg1OCA0MC44NThTMiA2NS40MjMgMiA0Mi44NTh6IiBmaWxsPSIjMzViMzAwIiBzdHJva2U9IiMwYjY3MDAiIHN0cm9rZS13aWR0aD0iNCIvPjxwYXRoIGQ9Ik0zOS40MDEgNjguNTkxdi0zLjQwM2MtNC43MDYtLjQ4Mi05LjM3OC0xLjgwOC0xMy41MTItMy44NC0yLjgxNC0xLjM4LTMuNDk3LTQuOTMtMS44MDQtNy40MjggMS42OTEtMi41IDUuMTEtMy4wMDQgNy45MDEtMS41OCAyLjYyIDEuMzM4IDUuMTk0IDIuMjExIDcuODI0IDIuNjM1di04LjE3Yy0xMC45Ni0yLjUxNi0xNi41NDItNi4yNjItMTYuNTQyLTE0LjcwMnYtLjEzN2MwLTguMDMyIDUuODUzLTEzLjYxNCAxNi4yNy0xNC4zNjR2LTEuOTRjMC0xLjA2OCAxLjU4NS0xLjkzOCAzLjU0LTEuOTM4czMuNTQuOTE2IDMuNTQgMi4wNDJ2Mi4wNDJjMy40NTguMzc5IDYuNTggMS4yNTcgOS40MjQgMi41MzMgMi44NTcgMS4yODIgMy42OSA0LjgxOSAyLjE0OCA3LjMzNi0xLjU0IDIuNTItNC42MjUgMy4yMjQtNy4xNjMgMi4xYTI4LjMgMjguMyAwIDAgMC00Ljc0OS0xLjYydjcuODk1YzEwLjgyMyAyLjUxOCAxNi4yNyA2LjM5OCAxNi4yNyAxNC44Mzl2LjEzNmMwIDguMzA1LTYuNCAxMy40MS0xNi4wNjUgMTQuMjk2djMuMzMzYzAgMS44NDMtMS41ODYgMy4zMzYtMy41NCAzLjMzNi0xLjk1NiAwLTMuNTQtMS41MjQtMy41NDItMy40bTYuODA4LTEzLjIwN2MzLjEzMi0uMzQyIDQuNTYxLTEuNDk4IDQuNTYxLTMuNDcydi0uMTM3YzAtMS44MzctMS4wMi0yLjg2LTQuNTYxLTMuODh6bS02LjMzMi0yMC40OXYtNy4zNTJjLTMuMzM0LjI3MS00LjYyOSAxLjYzMy00LjYyOSAzLjQwM3YuMTM1YzAgMS43Ny45NTQgMi43OTIgNC42MjkgMy44MTQiIGZpbGw9IiNmZmYiLz48L3N2Zz4=";
  const blockIconURI =
"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI3MC43NSIgaGVpZ2h0PSI3MC43NSIgdmlld0JveD0iMCAwIDcwLjc1IDcwLjc1Ij48cGF0aCBkPSJNMCA3MC43NVYwaDcwLjc1djcwLjc1eiIgZmlsbD0iIzM1YjMwMCIvPjxwYXRoIGQ9Ik0zMS45MTggNjEuMTA4di0zLjQwM2MtNC43MDYtLjQ4Mi05LjM3OC0xLjgwOC0xMy41MTItMy44NC0yLjgxNC0xLjM4LTMuNDk3LTQuOTMtMS44MDQtNy40MjggMS42OTEtMi41IDUuMTEtMy4wMDQgNy45MDEtMS41OCAyLjYyIDEuMzM4IDUuMTk0IDIuMjExIDcuODI0IDIuNjM1di04LjE3Yy0xMC45Ni0yLjUxNi0xNi41NDItNi4yNjItMTYuNTQyLTE0LjcwMnYtLjEzN2MwLTguMDMyIDUuODUzLTEzLjYxNCAxNi4yNy0xNC4zNjR2LTEuOTRjMC0xLjA2OCAxLjU4NS0xLjkzOCAzLjU0LTEuOTM4czMuNTQuOTE2IDMuNTQgMi4wNDJ2Mi4wNDJjMy40NTguMzc5IDYuNTggMS4yNTcgOS40MjQgMi41MzMgMi44NTcgMS4yODIgMy42OSA0LjgxOSAyLjE0OCA3LjMzNi0xLjU0IDIuNTItNC42MjUgMy4yMjQtNy4xNjMgMi4xYTI4LjMgMjguMyAwIDAgMC00Ljc0OS0xLjYydjcuODk1YzEwLjgyMyAyLjUxOCAxNi4yNyA2LjM5OCAxNi4yNyAxNC44Mzl2LjEzNmMwIDguMzA1LTYuNCAxMy40MS0xNi4wNjUgMTQuMjk2djMuMzMzYzAgMS44NDMtMS41ODYgMy4zMzYtMy41NCAzLjMzNi0xLjk1NiAwLTMuNTQtMS41MjQtMy41NDItMy40bTYuODA4LTEzLjIwN2MzLjEzMi0uMzQyIDQuNTYxLTEuNDk4IDQuNTYxLTMuNDcydi0uMTM3YzAtMS44MzctMS4wMi0yLjg2LTQuNTYxLTMuODh6bS02LjMzMi0yMC40OVYyMC4wNmMtMy4zMzQuMjcxLTQuNjI5IDEuNjMzLTQuNjI5IDMuNDAzdi4xMzVjMCAxLjc3Ljk1NCAyLjc5MiA0LjYyOSAzLjgxNCIgZmlsbD0iI2ZmZiIvPjwvc3ZnPg==";

  const proxy = "https://corsproxy.io?url=";

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
        const response = await fetch(`${proxy}https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${args.CUR1}.json`);
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
        const response = await fetch(`${proxy}https://tradingeconomics.com/country-list/inflation-rate?continent=world`);
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
