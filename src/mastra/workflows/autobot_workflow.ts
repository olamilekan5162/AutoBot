import { createStep, createWorkflow } from "@mastra/core/workflows";
import { z } from "zod";

const tradeStep = createStep({
  id: "run-autobot-agent",
  description: "Invoke the Autobot agent to place one sandbox trade",
  inputSchema: z.object({
    userPrompt: z.string(),
  }),
  outputSchema: z.object({
    result: z.string(),
  }),
  execute: async ({ input, mastra }) => {
    const agent = mastra?.getAgent("autobotAgent");
    if (!agent) throw new Error("autobotAgent not found");

    const response = await agent.stream([
      { role: "user", content: input.userPrompt },
    ]);

    let text = "";
    for await (const chunk of response.textStream) {
      process.stdout.write(chunk);
      text += chunk;
    }

    return { result: text };
  },
});

const autobotWorkflow = createWorkflow({
  id: "autobot_workflow",
  inputSchema: z.object({
    userPrompt: z.string(),
  }),
  outputSchema: z.object({
    result: z.string(),
  }),
}).then(tradeStep);

autobotWorkflow.commit();

export { autobotWorkflow };
