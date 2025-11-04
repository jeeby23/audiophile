'use client'

import Image from 'next/image'
import Link from 'next/link'

export default function CategoryCard({ title, imageSrc, href = '/' }) {
  return (
    <div
      className="
        flex flex-col items-center justify-end
        bg-[#F1F1F1] relative
        w-full sm:w-[223px] lg:w-[300px]
        h-[200px] sm:h-[200px] lg:h-[204px]
        px-6 sm:px-6 lg:px-6 overflow-visible z-10 mt-10
      "
    >
      {/* Image */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 w-[150px] h-[150px]">
        <Image
          src={imageSrc}
          alt={title}
          width={150}
          height={150}
          className="object-contain "
          style={{
            filter: 'drop-shadow(0px 15px 20px rgba(0, 0, 0, 0.6))',
            borderRadius: '10px',
          }}
          priority
        />
      </div>

      {/* Text */}
      <div className="mt-auto mb-6 flex flex-col items-center">
        <h3 className="font-manrope font-bold text-[18px] uppercase text-center w-[133px] mb-[15px]">
          {title}
        </h3>

        <Link
          href={href}
          className="inline-flex items-center gap-2 font-bold text-[13px] uppercase text-[#000000] opacity-50 hover:text-[#D87D4A] hover:opacity-100 transition-all"
        >
          <span>Shop</span>
        </Link>
      </div>
    </div>
  )
}