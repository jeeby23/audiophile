import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'

export default function Headphone59() {
  return (
    <section className="lg:max-w-[1110px] lg:min-h-[560px] mx-auto px-4">
      <div className="flex flex-col lg:flex-row items-center lg:justify-between gap-10 lg:gap-[125px]">
        
        {/* Image Section */}
        <div className="bg-[#F1F1F1] rounded-xl flex justify-center items-center w-full sm:w-full lg:w-[540px] lg:h-[560px]">
          <Image
            src="/headk1.jpg"
            alt="headphone59"
            width={372.98}
            height={389}
            className="object-contain w-full h-[352px] sm:w-full lg:w-[372.98px] lg:h-[389px]"
            priority
          />
        </div>

        {/* Text Section */}
        <div className="flex flex-col justify-center text-center lg:text-left lg:w-[445px] lg:h-[343px] mt-6 sm:mt-6 lg:mt-0">
          <h1 className="font-manrope font-bold leading-11 tracking-[1.43px] uppercase text-[28px] lg:text-[40px] mb-6 lg:w-[445px] lg:h-[88px]">
            XX59 Headphones
          </h1>
          <p className="font-manrope font-normal text-[15px] leading-[25px] text-[#000000]/50 mb-8 max-w-[445px] min-h-[100px] mx-auto lg:mx-0">
            Enjoy your audio almost anywhere and customize it to your specific tastes with the XX59 headphones. The stylish yet durable versatile wireless headset is a brilliant companion at home or on the move.
          </p>
          <Button className="w-40 h-12 text-white font-manrope font-bold tracking-[1px] uppercase bg-[#D87D4A] rounded-none  hover:bg-[#FBAF85] mx-auto lg:mx-0">
            <Link href="/headdetailsxx59">See Product</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}