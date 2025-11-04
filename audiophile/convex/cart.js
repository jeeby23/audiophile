import { mutation, query } from "./_generated/server";
import { v } from "convex/values";

// Get all cart items
export const getCart = query(async ({ db }) => {
  const cartItems = await db.query("cart").collect();
  // sort by createdAt ascending
  cartItems.sort((a, b) => a.createdAt - b.createdAt);
  return cartItems;
});
// Update quantity of an item
export const updateQuantity = mutation({
  args: {
    itemId: v.id("cart"),
    quantity: v.number(),
  },
  handler: async (ctx, { itemId, quantity }) => {
    await ctx.db.patch(itemId, { quantity });
  },
});

// Add item to cart
export const addToCart = mutation({
  args: {
    item: v.object({
      productId: v.optional(v.string()),
      name: v.string(),
      quantity: v.number(),
      price: v.any(),
      image: v.string(),
    }),
  },
  handler: async ({ db }, { item }) => {
    // Find existing item by productId if exists, otherwise by name
    let existing;
    if (item.productId) {
      existing = await db.query("cart")
        .filter((q) => q.eq(q.field("productId"), item.productId))
        .first();
    }

    if (!existing) {
      existing = await db.query("cart")
        .filter((q) => q.eq(q.field("name"), item.name))
        .first();
    }

    if (existing) {
      await db.patch(existing._id, {
        quantity: existing.quantity + item.quantity,
      });
    } else {
      await db.insert("cart", {
        ...item,
        price: Number(item.price),
        createdAt: Date.now(),
      });
    }
  },
});

export const removeItem = mutation(async ({ db }, id) => {
  await db.delete(id);
});


export const clearCart = mutation(async ({ db }) => {
  const items = await db.query("cart").collect();
  for (const item of items) await db.delete(item._id);
});