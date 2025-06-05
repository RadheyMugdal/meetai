import { db } from "@/db";
import { agents } from "@/db/schema";
import {
  baseProcedure,
  createTRPCRouter,
  protectedProcedure,
} from "@/trpc/init";
import { agentInsertSchema } from "../schemas";
import { z } from "zod";
import { eq } from "drizzle-orm";

export const agentsRouter = createTRPCRouter({
  getOne: baseProcedure
    .input(z.object({ id: z.string() }))
    .query(async ({ input, ctx }) => {
      const { id } = input;
      const [data] = await db.select().from(agents).where(eq(agents.id, id));
      return data;
    }),
  getMany: baseProcedure.query(async () => {
    return [];
  }),
  create: protectedProcedure
    .input(agentInsertSchema)
    .mutation(async ({ input, ctx }) => {
      const { name, instructions } = input;
      const { auth } = ctx;
      const [data] = await db
        .insert(agents)
        .values({
          name,
          instructions,
          userId: auth.user.id,
        })
        .returning();
      return data;
    }),
});
