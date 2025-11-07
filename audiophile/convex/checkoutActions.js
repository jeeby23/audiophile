import { mutation, action } from "./_generated/server";
import { v } from "convex/values";

export const createCheckout = mutation({
  args: {
    name: v.string(),
    email: v.string(),
    phone: v.string(),
    address: v.string(),
    zip: v.string(),
    city: v.string(),
    country: v.string(),
    paymentMethod: v.string(),
    emoneyNumber: v.optional(v.string()),
    emoneyPin: v.optional(v.string()),
    items: v.array(
      v.object({
        productId: v.string(),
        name: v.string(),
        price: v.float64(),
        quantity: v.float64(),
      })
    ),
    totalAmount: v.float64(),
    shippingFee: v.float64(),
    vat: v.float64(),
    grandTotal: v.float64(),
  },
  handler: async (ctx, args) => {
    const orderId = await ctx.db.insert("orders", {
      ...args,
      createdAt: Date.now(),
    });
    return orderId;
  },
});

export const processCheckout = action({
  args: {
    name: v.string(),
    email: v.string(),
    phone: v.string(),
    address: v.string(),
    zip: v.string(),
    city: v.string(),
    country: v.string(),
    paymentMethod: v.string(),
    emoneyNumber: v.optional(v.string()),
    emoneyPin: v.optional(v.string()),
    items: v.array(
      v.object({
        productId: v.string(),
        name: v.string(),
        price: v.float64(),
        quantity: v.float64(),
      })
    ),
    totalAmount: v.float64(),
    shippingFee: v.float64(),
    vat: v.float64(),
    grandTotal: v.float64(),
  },
  handler: async (ctx, args) => {
    const orderId = await ctx.runMutation("checkoutActions:createCheckout", args);

    await ctx.runAction("email:sendOrderEmail", {
      email: args.email,
      name: args.name,
      orderId,
      grandTotal: args.grandTotal,
    });

    return orderId;
  },
});