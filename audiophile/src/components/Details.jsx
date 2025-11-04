'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { useMutation } from 'convex/react';
import { api } from '../../convex/_generated/api';

export default function AddToCartButton({
  imageSrc = '/headone.jpg',
  imageAlt = 'XX99 Mark I Headphones',
  imageWidth = 296,
  imageHeight = 385,
  label = 'FEATURED PRODUCT',
  title = 'XX99 Mark I Headphones',
  description = 'As the gold standard for headphones, the classic XX99 Mark I offers detailed and accurate audio reproduction for audiophiles, mixing engineers, and music aficionados alike in studios and on the go.',
  extraDescription = '',
  amount = 2999,
  showTwoButtons = false,
  button1Label = 'See Product',
  onButton1Click = () => {},
  reverseLayout = false,
  sectionClasses = 'lg:max-w-[1110px] lg:min-h-[560px] mx-auto px-4',
}) {
  const [quantity, setQuantity] = useState(1);
  const addToCart = useMutation(api.cart.addToCart);

  // 🛒 Add to cart logic
  const handleAdd = async () => {
    try {
      await addToCart({
        name: title,
        price: Number(amount),
        quantity,
        image: imageSrc,
        createdAt: Date.now(),
      });
      alert('Item added to cart successfully ✅');
    } catch (error) {
      console.error('Error adding to cart:', error);
      alert('Failed to add item to cart.');
    }
  };

  return (
    <section className={sectionClasses}>
      <div
        className={`flex flex-col-reverse lg:flex-row items-center lg:justify-between gap-10 lg:gap-[125px] ${
          reverseLayout ? 'lg:flex-row-reverse' : ''
        }`}
      >
        {/* 📝 Text Section */}
        <div className="flex flex-col justify-center text-center lg:text-left lg:w-[445px] lg:h-[308px]">
          {label && (
            <h3 className="font-manrope font-normal text-[14px] tracking-[10px] uppercase text-[#D87D4A] mb-4">
              {label}
            </h3>
          )}

          <h1 className="font-manrope font-bold leading-11 tracking-[1.43px] uppercase text-[28px] lg:text-[40px] mb-6">
            {title}
          </h1>

          <p className="font-manrope font-normal text-[15px] leading-[25px] text-[#000000]/50 mb-8 max-w-[445px] mx-auto lg:mx-0">
            {description} {extraDescription}
          </p>

          {amount && (
            <p className="text-[24px] font-manrope font-bold mb-4">${amount}</p>
          )}

          {showTwoButtons ? (
            <div className="flex gap-4 justify-center lg:justify-start items-center">
              {/* Quantity Control */}
              <div className="flex items-center bg-gray-300 h-12 px-3 rounded">
                <button
                  onClick={() => quantity > 1 && setQuantity(quantity - 1)}
                  className="px-3 font-bold"
                >
                  -
                </button>
                <span className="px-4 text-black">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="px-3 font-bold"
                >
                  +
                </button>
              </div>

              <Button
                onClick={handleAdd}
                className="w-40 h-12 text-white font-bold bg-[#D87D4A] hover:bg-[#FBAF85] rounded-none"
              >
                Add to Cart
              </Button>
            </div>
          ) : (
            <Button
              onClick={onButton1Click}
              className="w-40 h-12 text-white font-manrope font-bold tracking-[1px] uppercase bg-[#D87D4A] hover:bg-[#FBAF85] rounded-none mx-auto lg:mx-0"
            >
              {button1Label}
            </Button>
          )}
        </div>

        {/* 🎧 Image Section */}
        <div className="bg-[#F1F1F1] rounded-xl flex justify-center items-center w-full sm:w-full lg:w-[540px] lg:h-[560px]">
          <Image
            src={imageSrc}
            alt={imageAlt}
            width={imageWidth}
            height={imageHeight}
            className="object-contain w-full h-[352px] sm:w-full lg:w-[295.84px] lg:h-[385px]"
            priority
          />
        </div>
      </div>
    </section>
  );
}