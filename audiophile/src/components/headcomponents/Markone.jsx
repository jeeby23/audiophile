import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'

export default function Markone() {
  return (
    <section className="lg:max-w-[1110px] lg:min-h-[560px] mx-auto px-4">
      <div className="flex flex-col-reverse lg:flex-row items-center lg:justify-between gap-10 lg:gap-[125px]">
        
        {/* Text Section */}
        <div className="flex flex-col justify-center text-center lg:text-left lg:w-[445px] lg:h-[308px]">
          <h1 className="font-manrope font-bold leading-11 tracking-[1.43px] uppercase text-[28px] lg:text-[40px] mb-6 lg:w-[445px] lg:h-[88px] lg:mt-4">
            XX99 Mark I Headphones
          </h1>
          <p className="font-manrope font-normal text-[15px] leading-[25px] text-[#000000]/50 mb-8 max-w-[445px] min-h-[100px] mx-auto lg:mx-0">
            As the gold standard for headphones, the classic XX99 Mark I offers detailed and accurate audio reproduction for audiophiles, mixing engineers, and music aficionados alike in studios and on the go.
          </p>
          <Button className="w-40 h-12 text-white font-manrope font-bold tracking-[1px] uppercase bg-[#D87D4A] rounded-none  hover:bg-[#FBAF85] mx-auto lg:mx-0">
            
            <Link href="/headdetailestwo">See Product</Link>
          </Button>
        </div>

        {/* Image Section */}
        <div className="bg-[#F1F1F1] rounded-xl flex justify-center items-center w-full sm:w-full lg:w-[540px] lg:h-[560px]">
          <Image
            src="/headone.jpg"
            alt="markone"
            width={295.84}
            height={385}
            className="object-contain w-full h-[352px] sm:w-full lg:w-[295.84] lg:h-[385px]"
            priority
          />
        </div>

      </div>
    </section>
  )
}