// convex/orders.js

import { query } from "./_generated/server";
import { v } from "convex/values";

export const getOrderById = query({
  args: { orderId: v.id("orders") },
  handler: async (ctx, { orderId }) => {
    const order = await ctx.db.get(orderId);
    if (!order) {
      throw new Error("Order not found");
    }
    return order;
  }
});