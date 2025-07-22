import { createTool } from "@mastra/core/tools";
import axios from "axios";
import { z } from "zod";

async function fetchSma(tokenSymbol) {
  const response = await fetch(
    `https://www.alphavantage.co/query?function=SMA&symbol=${tokenSymbol}USD&interval=daily&time_period=10&series_type=close&apikey=${process.env.ALPHAVANTAGE_API_KEY}`
  );
  const data = await response.json();
  const smaSeries = data["Technical Analysis: SMA"];
  const [latestDate] = Object.keys(smaSeries);
  const { SMA: latestSMA } = smaSeries[latestDate];
  console.log(latestSMA);

  return latestSMA;
}

export const autobotMarket = createTool({
  id: "autobot-market",
  description:
    "Fetch current price data and or simple moving average (sma) for supported token from the Recall Network",
  inputSchema: z.object({
    tokenSymbol: z.string().describe("ERC-20 token symbol"),
    tokenAddress: z.string().describe("ERC-20 token contract address"),
  }),
  outputSchema: z.any(),
  execute: async ({ context }) => {
    const { tokenSymbol, tokenAddress } = context;
    const { RECALL_API_URL, RECALL_API_KEY } = process.env;

    const { data: price } = await axios.get(
      `${RECALL_API_URL}/api/price?token=${tokenAddress}&chain=svm&specificChain=eth"`,
      {
        headers: {
          Authorization: `Bearer ${RECALL_API_KEY}`,
          "Content-Type": "application/json",
        },
      }
    );

    const sma = await fetchSma(tokenSymbol);
    console.log({ price: price, SMA: sma });

    return { price: price, SMA: sma };
  },
});
