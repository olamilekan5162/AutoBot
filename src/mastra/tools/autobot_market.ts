import { createTool } from "@mastra/core/tools";
import axios from "axios";
import { z } from "zod";

export const autobotMarket = createTool({
  id: "autobot-market",
  description:
    "Fetch current price data for supported token from the Recall Network",
  inputSchema: z.object({
    tokenAddress: z.string().describe("ERC-20 token contract address"),
  }),
  outputSchema: z.any(),
  execute: async ({ context }) => {
    const { tokenAddress } = context;
    const { RECALL_API_URL, RECALL_API_KEY } = process.env;

    const { data } = await axios.get(
      `${RECALL_API_URL}/api/price?token=${tokenAddress}&chain=svm&specificChain=eth"`,
      {
        headers: {
          Authorization: `Bearer ${RECALL_API_KEY}`,
          "Content-Type": "application/json",
        },
      }
    );
    return data;
  },
});
