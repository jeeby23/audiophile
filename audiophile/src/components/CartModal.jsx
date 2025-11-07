"use client";
import { createPortal } from "react-dom";
import { useEffect, useState } from "react";
import Image from "next/image";
import { useQuery, useMutation } from "convex/react";
import { api } from "../../convex/_generated/api";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function CartModal({ isOpen, onClose }) {
  const [mounted, setMounted] = useState(false);
  const [showTwoButtons, setShowTwoButtons] = useState(true);

  // ✅ Always declare hooks before any conditional return
  const cart = useQuery(api.cart.getCart);
  const clearCart = useMutation(api.cart.clearCart);
  const updateQuantity = useMutation(api.cart.updateQuantity);

  useEffect(() => setMounted(true), []);

  // Disable scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // ✅ Now handle conditions AFTER hooks
  if (!mounted || !isOpen) return null;
  if (!cart) return null;

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const handleQuantityChange = async (item, newQuantity) => {
    if (newQuantity < 1) return;
    try {
      await updateQuantity({
        itemId: item._id,
        quantity: newQuantity,
      });
    } catch (error) {
      console.error("Error updating quantity:", error);
      alert("Failed to update item quantity.");
    }
  };

  return createPortal(
    <div className="fixed inset-0 bg-black/50 flex justify-end items-start z-50 p-6">
      <div className="absolute inset-0" onClick={onClose}></div>

      <div className="relative bg-white shadow-lg w-full max-w-sm p-6 z-50 mt-20 mr-10">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-bold">Cart ({cart.length})</h2>
          <button onClick={() => clearCart()} className="text-[#D87D4A] text-sm">
            Remove all
          </button>
        </div>

        {cart.length === 0 ? (
          <p className="text-center text-gray-500">Your cart is empty.</p>
        ) : (
          <ul className="space-y-3">
            {cart.map((item) => (
              <li key={item._id} className="flex items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <Image
                    src={item.image}
                    alt={item.name}
                    width={50}
                    height={50}
                    className="rounded-md"
                  />
                  <div>
                    <p className="font-bold text-sm">{item.name}</p>
                    <p className="text-sm text-gray-500">${item.price}</p>
                  </div>
                </div>

                {showTwoButtons && (
                  <div className="flex items-center bg-gray-300 h-8 px-2 rounded">
                    <button
                      onClick={() =>
                        handleQuantityChange(item, item.quantity - 1)
                      }
                      className="px-2 font-bold"
                    >
                      -
                    </button>
                    <span className="px-3 text-black text-sm">{item.quantity}</span>
                    <button
                      onClick={() =>
                        handleQuantityChange(item, item.quantity + 1)
                      }
                      className="px-2 font-bold"
                    >
                      +
                    </button>
                  </div>
                )}
              </li>
            ))}
          </ul>
        )}

        <div className="flex justify-between mt-6">
          <small>Total</small>
          <p className="font-bold text-lg">${total}</p>
        </div>

        <Button className="w-full mt-6 rounded-none p-3 bg-[#D87D4A] hover:bg-[#FBAF85] text-white">
          <Link href="/checkout" className="w-full text-center block">
            Checkout
          </Link>
        </Button>
      </div>
    </div>,
    document.body
  );
}