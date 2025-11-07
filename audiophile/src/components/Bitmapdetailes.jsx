import Image from 'next/image'

export default function Bitmapdetailes() {
  return (
    <section className="mt-[200px]">
      <div className="max-w-[327px] h-[698px] sm:max-w-[689px] sm:h-[633px] lg:max-w-[1110px] lg:h-[588px] flex flex-col-reverse sm:flex-col-reverse lg:flex-row items-center justify-center gap-[125px] mx-auto text-center sm:text-center lg:text-left">
        
        <div className="w-full flex flex-col items-center lg:items-start">
          <h1 className="font-manrope font-bold text-[40px] leading-11 tracking-[1.43px] uppercase w-full max-w-[445px] opacity-100 mb-10 sm:mb-[63px] lg:mb-8">
            Bringing you the <span className="text-[#FBAF85]">best</span> audio gear
          </h1>
          <p className="font-manrope font-normal text-[15px] leading-[25px] text-[#000000] opacity-50 w-full max-w-[445px]">
            Located at the heart of New York City, Audiophile is the premier store for high end
            headphones, earphones, speakers, and audio accessories. We have a large showroom and
            luxury demonstration rooms available for you to browse and experience a wide range of
            our products. Stop by our store to meet some of the fantastic people who make Audiophile
            the best place to buy your portable audio equipment.
          </p>
        </div>

        <div className="flex justify-center w-full">
          <Image
            src="/Bitmaptwo.png"
            alt="Bitmap"
            width={540}
            height={588}
            quality={100}
            className="cursor-pointer w-[327px] h-[300px] sm:w-[689px] sm:h-[300px] lg:w-[540px] lg:h-[588px]"
          />
        </div>
      </div>
    </section>
  )
}