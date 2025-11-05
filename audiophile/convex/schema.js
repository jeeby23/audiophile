import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  cart: defineTable({
    productId: v.optional(v.string()), // optional to fix old data
    name: v.string(),
    price: v.number(),
    quantity: v.number(),
    image: v.string(),
    createdAt: v.optional(v.number()),
  }),

 orders: defineTable({
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
  createdAt: v.number(),
}),
});