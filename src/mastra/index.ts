import { Mastra } from "@mastra/core/mastra";
import { PinoLogger } from "@mastra/loggers";
import { autobotWorkflow } from "./workflows/autobot_workflow.ts";
import { autobotAgent } from "./agents/autobot_agent";

export const mastra = new Mastra({
  workflows: { autobotWorkflow },
  agents: { autobotAgent },
  logger: new PinoLogger({
    name: "Mastra",
    level: "info",
  }),
});
