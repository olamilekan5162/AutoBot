import { Mastra } from "@mastra/core/mastra";
import { PinoLogger } from "@mastra/loggers";
import { LibSQLStore } from "@mastra/libsql";
import { autobotWorkflow } from "./workflows/autobot_workflow";
import { autobotAgent } from "./agents/autobot_agent";

export const mastra = new Mastra({
  workflows: { autobotWorkflow },
  agents: { autobotAgent },
  storage: new LibSQLStore({
    // stores telemetry, evals, ... into memory storage, if it needs to persist, change to file:../mastra.db
    url: ":memory:",
  }),
  logger: new PinoLogger({
    name: "Mastra",
    level: "info",
  }),
});
