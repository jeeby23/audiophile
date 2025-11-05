import Image from 'next/image'
import { Button } from '@/components/ui/button'

export default function Typeheadphone() {
  return (
    <section className='sm:max-w-[691px] sm:min-h-[563px] lg:max-w-[1110px] lg:min-h-[571px]'>
      <div>
        <h1 className='font-manrope font-bold text-[32px] leading-9 tracking-[1.14px] uppercase text-center mb-16' >You May Also Like</h1>
      </div>
      <figure>
        <div className="flex flex-col  lg:flex-row sm:flex-row gap-[30px]">
          <div>
            <Image
              src="/headone.jpg"
              alt="markone"
              width={350}
              height={318}
              className="object-contain w-full h-[352px] sm:w-[223px] sm:[318px] lg:w-[350] lg:h-[318px]"
              priority
            />
            <span className="flex flex-col justify-center items-center text-center">
              <h1 className="text-[24px] font-manrope font-bold leading-[100%] tracking-[1.71px] uppercase py-10">XX99 MARK I</h1>
              <Button className="w-40 h-12 font-manrope font-bold  text-[13px] leading-[100%] tracking-[1px] bg-[#D87D4A] hover rounded-none hover:bg-[#FBAF85] uppercase">
                see products
              </Button>
            </span>
          </div>

          <div>
            <Image
              src="/headk1.jpg"
              alt="headphone59"
              width={350}
              height={318}
              className="object-contain w-full h-[352px] sm:w-[223px] sm:[318px] lg:w-[350px] lg:h-[318px]"
              priority
            />
            <span className="flex flex-col justify-center items-center text-center ">
              <h1 className="text-[24px] font-manrope font-bold leading-[100%] tracking-[1.71px] uppercase py-10">XX99 MARK I</h1>
              <Button className="w-40 h-12 font-manrope font-bold  text-[13px] leading-[100%] tracking-[1px] hover:bg-[#FBAF85] bg-[#D87D4A] rounded-none uppercase">
                see products
              </Button>
            </span>
          </div>

          <div>
            <Image
              src="/zx9speaker.jpg"
              alt="headphone-mark2"
              width={350}
              height={318}
              className="object-contain w-full  sm:w-[223px] sm:h-[318px] lg:w-[350px] lg:h-[318px]"
              priority
            />
            <span className="flex flex-col justify-center items-center text-center text-[24px]">
              <h1 className="text-[24px] font-manrope font-bold leading-[100%] tracking-[1.71px] uppercase py-10">XX99 MARK I</h1>
              <Button className="w-40 h-12 font-manrope font-bold  text-[13px] leading-[100%] tracking-[1px] hover:bg-[#FBAF85] bg-[#D87D4A] rounded-none uppercase">
                see products
              </Button>
            </span>
          </div>
        </div>
      </figure>
    </section>
  )
}
