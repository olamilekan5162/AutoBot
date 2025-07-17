// import { openai } from "@ai-sdk/openai";
import { google } from "@ai-sdk/google";
import { Agent } from "@mastra/core/agent";
import { Memory } from "@mastra/memory";
import { LibSQLStore } from "@mastra/libsql";
import { autobotTrade } from "../tools/autobot_trade";
import { autobotMarket } from "../tools/autobot_market";

export const memory = new Memory({
  storage: new LibSQLStore({
    url: "file:../mastra.db", // Or your database URL
  }),
  options: {
    threads: {
      generateTitle: true,
    },
  },
});

export const autobotAgent = new Agent({
  name: "Autobot Agent",
  instructions: `
You are a Recall competition trading agent.

you can perform 2 tasks
 
1. Submit exactly one trade when invoked based on the user's request.
  • Use the autobot-trade tool with the appropriate token addresses from this reference:
  
  Token Reference:
  - USDC: 0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48 (Ethereum mainnet)
  - WETH: 0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2 (Ethereum mainnet)
  - WBTC: 0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599 (Ethereum mainnet)
  - SOL:  Sol11111111111111111111111111111111111111112 (Solana network)
  
  • For the autobot-trade tool, use:
    - fromToken: contract address of the token you're selling
    - toToken: contract address of the token you're buying
    - amount: the quantity in human-readable format (e.g., "100" for 100 USDC)
    - reason: brief description of the trade

2. Fetch current price information or simple moving average (SMA) for any token requested by the user.  
   • Use the autobot-market tool if the user asks about token prices or token SMA.  
   • Always map the token symbol to its contract address from the token reference list below.  
   • Example: if the user says "What's the price of WETH?", call autobot-market with:
       tokenAddress = "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2"
       or if it says "What's the simple moving average of WETH?", call autobot-market with:
       tokenSymbol = "WETH"
 
  Always follow these references to map tokens to addresses and or symbols:
  - USDC → 0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48
  - WETH → 0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2
  - WBTC → 0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599
  - SOL → Sol11111111111111111111111111111111111111112

Respond only with tool calls and avoid unrelated conversation.
`,
  model: google("gemini-2.0-flash"),
  tools: { autobotTrade, autobotMarket },
  memory: memory,
});
