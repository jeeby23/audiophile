import { mutation } from "./_generated/server";
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
// import { mutation } from './_generated/server'
// import { v } from 'convex/values'

// export const addOrder = mutation({
//   args: {
//     name: v.string(),
//     email: v.string(),
//     phone: v.string(),
//     address: v.string(),
//     zip: v.string(),
//     city: v.string(),
//     country: v.string(),
//     paymentMethod: v.string(),
//     items: v.array(
//       v.object({
//         productId: v.string(),
//         name: v.string(),
//         price: v.float64(),
//         quantity: v.float64(), // ✅ change from v.number() to v.float64()
//       })
//     ),
//     // emoneyNumber: v.optional(v.string()), // keep optional
//     // emoneyPin: v.optional(v.string()),    // keep optional
//     totalAmount: v.float64(),
//     shippingFee: v.float64(),
//     vat: v.float64(),         // if you send VAT from frontend
//     grandTotal: v.float64(),  // if you send Grand Total
//   },
//   handler: async (ctx, args) => {
//     const orderId = await ctx.db.insert('orders', {
//       ...args,
//       createdAt: Date.now(),
//     })
//     return orderId
//   },
// })