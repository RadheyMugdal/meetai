import { z } from "zod";
import { baseProcedure, createTRPCRouter } from "../init";
import { agentsRouter } from "@/modules/agents/server/procedure";
import { meetingsRouter } from "@/modules/meetings/server/procedure";
import { premiumRouter } from "@/modules/premium/server/procedures";
export const appRouter = createTRPCRouter({
  agents: agentsRouter,
  meetings: meetingsRouter,
  premium: premiumRouter,
});
// export type definition of API
export type AppRouter = typeof appRouter;
