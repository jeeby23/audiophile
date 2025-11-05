import { mutation, query } from "./_generated/server";
import { v } from "convex/values";

/**
 * 🛒 Get all items in the cart
 */
export const getCart = query(async ({ db }) => {
  const cartItems = await db.query("cart").collect();
  // Sort by createdAt ascending
  cartItems.sort((a, b) => a.createdAt - b.createdAt);
  return cartItems;
});

/**
 * 🔁 Update quantity of a cart item
 */
export const updateQuantity = mutation({
  args: {
    itemId: v.id("cart"),
    quantity: v.number(),
  },
  handler: async (ctx, { itemId, quantity }) => {
    await ctx.db.patch(itemId, { quantity });
  },
});

/**
 * ➕ Add an item to the cart
 */
export const addToCart = mutation({
  args: {
    productId: v.optional(v.string()),
    name: v.string(),
    quantity: v.number(),
    price: v.any(),
    image: v.string(),
  },
  handler: async (ctx, args) => {
    const { db } = ctx;
    const { productId, name, quantity, price, image } = args;

    // Find existing item by productId if exists, otherwise by name
    let existing = null;
    if (productId) {
      existing = await db.query("cart")
        .filter((q) => q.eq(q.field("productId"), productId))
        .first();
    }

    if (!existing) {
      existing = await db.query("cart")
        .filter((q) => q.eq(q.field("name"), name))
        .first();
    }

    if (existing) {
      await db.patch(existing._id, {
        quantity: existing.quantity + quantity,
      });
    } else {
      await db.insert("cart", {
        productId,
        name,
        quantity,
        price: Number(price),
        image,
        createdAt: Date.now(), // Generate it here instead of frontend
      });
    }
  },
});
/**
 * ❌ Remove a single item from the cart
 */
export const removeItem = mutation({
  args: {
    itemId: v.id("cart"),
  },
  handler: async ({ db }, { itemId }) => {
    await db.delete(itemId);
  },
});

/**
 * 🧹 Clear all items in the cart
 */
export const clearCart = mutation(async ({ db }) => {
  const items = await db.query("cart").collect();
  for (const item of items) {
    await db.delete(item._id);
  }
});