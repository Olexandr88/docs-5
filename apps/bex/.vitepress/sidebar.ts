// Imports
// ========================================================
import { DefaultTheme } from "vitepress";
import { constants } from "@berachain/config/constants";

// Constants
// ========================================================
const SIDEBAR = {
  /**
   * Main section for both the root / and /learn
   */
  LEARN: [
    {
      text: "Introduction To BEX",
      items: [
        { text: "What is BEX?", link: "/learn/" },
        {
          text: "BEX dApp",
          link: `${constants.testnet.dapps.bex.url}`,
          target: "_blank",
          rel: "no-referrer",
        },
      ],
    },
    {
      text: "Core Concepts",
      items: [
        { text: "AMMs", link: "/learn/concepts/amm" },
        { text: "Governance", link: "/learn/concepts/governance" },
        {
          text: "Pools",
          link: "/learn/concepts/pools",
          items: [
            {
              text: "Weighted Pools",
              link: "/learn/concepts/pools/weighted-pools",
            },
            {
              text: "Stable Pools",
              link: "/learn/concepts/pools/stable-pools",
            },
          ],
        },
        { text: "Smart Order Router", link: "/learn/concepts/sor" },
      ],
    },
    {
      text: "User Guides",
      items: [
        { text: "Swaps", link: "/learn/guides/swaps" },
        { text: "Fees", link: "/learn/guides/fees" },
        {
          text: "Liquidity Provision",
          link: "/learn/guides/liquidity/intro",
          items: [
            { text: "Intro", link: "/learn/guides/liquidity/intro" },
            { text: "Proof of Liquidity", link: "/learn/guides/liquidity/pol" },
          ],
        },
        { text: "Pool Creation", link: "/learn/guides/pool-creation" },
        {
          text: "Pool Configuration",
          link: "/learn/guides/pool-configuration",
        },
      ],
    },
  ],
  /**
   * Main section for /developers
   */
  DEVELOPERS: [
    {
      text: "Berachain BEX For Devs",
      items: [
        { text: "Deployed Contracts", link: "/developers/" },
        { text: "BEX Migration Guide", link: "/developers/migration-guide" },
      ],
    },
    {
      text: "Contracts References",
      items: [
        {
          text: "Vault Contract",
          link: "/developers/contracts/vault",
        },
        {
          text: "Query Contract",
          link: "/developers/contracts/query",
        },
        {
          text: "Pool Factory Contracts",
          items: [
            {
              text: "WeightedPoolFactory",
              link: "/developers/contracts/factory/weighted-pool-factory",
            },
            {
              text: "StablePoolFactory",
              link: "/developers/contracts/factory/stable-pool-factory",
            },
          ],
        },
      ],
    },
    {
      text: "Advanced Concepts",
      items: [
        {
          text: "Pool Interfacing",
          link: "/developers/advanced-concepts/pool-interfacing",
        },
        {
          text: "Swaps",
          items: [
            {
              text: "Single Swap",
              link: "/developers/advanced-concepts/swaps/single-swap",
            },
            {
              text: "Batch Swap",
              link: "/developers/advanced-concepts/swaps/batch-swap",
            },
          ],
        },
        {
          text: "Joins and Exits",
          items: [
            {
              text: "Pool Joins",
              link: "/developers/advanced-concepts/joins-exits/joins",
            },
            {
              text: "Pool Exits",
              link: "/developers/advanced-concepts/joins-exits/exits",
            },
          ],
        },
        {
          text: "LP Tokens",
          items: [
            {
              text: "Underlying Tokens",
              link: "/developers/advanced-concepts/lp-tokens/underlying",
            },
            {
              text: "Valuing",
              link: "/developers/advanced-concepts/lp-tokens/valuing",
            },
          ],
        },
        {
          text: "Flash Loans",
          link: "/developers/advanced-concepts/flash-loans",
        },
      ],
    },
    {
      text: "Developer Guides",
      items: [
        { text: "Smart Order Router", link: "/developers/guides/sor" },
        {
          text: "Get Spot Prices",
          link: "/developers/guides/spot-prices",
        },
      ],
    },
    {
      text: "Help",
      items: [
        {
          text: "Error Codes",
          link: "/developers/error-codes",
        },
      ],
    },
  ],
};

// Main Sidebar Configuration
// ========================================================
export const sidebar: DefaultTheme.Sidebar = {
  "/learn": SIDEBAR.LEARN,
  "/developers": SIDEBAR.DEVELOPERS,
  "/": SIDEBAR.LEARN,
};
