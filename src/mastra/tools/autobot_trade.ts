import { createTool } from "@mastra/core/tools";
import axios from "axios";
import { log } from "console";
import { z } from "zod";

export const autobotTrade = createTool({
  id: "autobot-trade",
  description: "Execute a spot trade on the Recall Network",
  inputSchema: z.object({
    fromToken: z.string().describe("ERC-20 address"),
    toToken: z.string().describe("ERC-20 address"),
    amount: z.string().describe("Human-readable amount in FROM token"),
    reason: z.string().optional(),
  }),
  outputSchema: z.any(),
  execute: async ({ context }) => {
    const { fromToken, toToken, amount, reason } = context;
    const { RECALL_API_URL, RECALL_API_KEY } = process.env;
    const body = JSON.stringify({
      fromToken,
      toToken,
      amount,
      reason,
    });
    const request = await fetch(`${RECALL_API_URL}/api/trade/execute`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${RECALL_API_KEY}`,
        "Content-Type": "application/json",
      },
      body,
    })
      .then((response) => response.json())
      .catch((error) => {
        console.log(error.error);
      });

    return request;
  },
});
