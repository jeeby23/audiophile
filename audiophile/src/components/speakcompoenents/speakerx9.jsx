import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'

export default function speakerx9() {
  return (
    <section className="sm:max-w-[689px] sm:min-h-[706px] lg:max-w-[1110px] lg:min-h-[560px] mx-auto px-4">
      <div className="flex flex-col lg:flex-row items-center lg:justify-between lg:gap-[125px]">
        {/* Image Section */}
        <div className="bg-[#F1F1F1] rounded-xl flex justify-center items-center w-full sm:w-full sm:h-auto lg:w-[540px] lg:h-[560px]">
          <Image
            src="/zx9speaker.jpg"
            alt="speaker zx9"
            width={291.24}
            height={350}
            className="object-contain w-full h-[352px] sm:w-full sm:h-[352px] lg:w-[291.24px] lg:h-[350px]"
            priority
          />
        </div>

        {/* Text Section */}
        <div className="flex flex-col justify-center text-center mt-6 sm:mt-8 lg:mt-0 lg:text-left lg:w-[445px] lg:h-[343px]">
          <h3 className="font-manrope font-normal text-[14px] leading-[100%] tracking-[10px] uppercase text-[#D87D4A] rounded-none  mb-4 lg:w-[199px] lg:h-[19px] whitespace-nowrap">
            NEW PRODUCT
          </h3>
          <h1 className="font-manrope font-bold leading-11 tracking-[1.43px] uppercase text-[28px] lg:text-[40px] mb-6 lg:w-[445px] lg:h-[88px]">
            ZX9 SPEAKER
          </h1>
          <p className="font-manrope font-normal text-[15px] leading-[25px] text-[#000000]/50 mb-8 max-w-[445px] min-h-[100px] mx-auto lg:mx-0">
           Upgrade your sound system with the all new ZX9 active speaker. It’s a bookshelf speaker system that offers truly wireless connectivity -- creating new possibilities for more pleasing and practical audio setups.
          </p>
          <Button className="w-40 h-12 text-white font-manrope font-bold tracking-[1px] uppercase bg-[#D87D4A] rounded-none  hover:bg-[#FBAF85] mx-auto lg:mx-0">
             <Link href="/speaker1"> See Product</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
