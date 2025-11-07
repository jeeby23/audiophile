'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function ProductFeature({
  imageSrc,
  imageAlt,
  title,
  subtitle,
  description,
  href,
  reverse = false, // flip layout left/right
  isNew = false,
}) {
  return (
    <section className="sm:max-w-[689px] sm:min-h-[706px] lg:max-w-[1440px] lg:min-h-[560px] mx-auto px-4">
      <div
        className={`flex flex-col lg:flex-row ${
          reverse ? 'lg:flex-row-reverse' : ''
        } items-center lg:justify-between gap-10 lg:gap-[105px]`}
      >
        {/* Image Section */}
        <div className="bg-[#F1F1F1] rounded-xl flex justify-center items-center w-full sm:h-auto lg:w-[540px] lg:h-[560px]">
          <Image
            src={imageSrc}
            alt={imageAlt}
            width={349}
            height={386}
            className="object-contain w-full h-[352px] sm:w-full sm:h-[352px] lg:w-[349px] lg:h-[386px]"
            priority
          />
        </div>

        {/* Text Section */}
        <div className="flex flex-col justify-center text-center mt-6 sm:mt-8 lg:mt-0 lg:text-left lg:w-[445px]">
          {isNew && (
            <h3 className="font-manrope font-normal text-[14px] leading-[100%] tracking-[10px] uppercase text-[#D87D4A] mb-4">
              NEW PRODUCT
            </h3>
          )}

          <h1 className="font-manrope font-bold leading-11 tracking-[1.43px] uppercase text-[28px] lg:text-[40px] mb-6">
            {title}
          </h1>

          <p className="font-manrope font-normal text-[15px] leading-[25px] text-[#000000]/50 mb-8 max-w-[445px] mx-auto lg:mx-0">
            {description}
          </p>

          <Button className="w-40 h-12 text-white font-manrope font-bold tracking-[1px] uppercase bg-[#D87D4A] rounded-none hover:bg-[#FBAF85] mx-auto lg:mx-0">
            <Link href={href}>See Product</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}