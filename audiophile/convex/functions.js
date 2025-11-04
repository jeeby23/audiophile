import { mutation } from "./_generated/server";
import { v } from "convex/values";

export const createCheckout = mutation({
  args: { /* your args here */ },
  handler: async (ctx, args) => {
    return await ctx.db.insert("orders", { ...args, createdAt: Date.now() });
  },
});