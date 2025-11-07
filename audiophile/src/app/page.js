'use client'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Link from 'next/link'
import Container from '../components/Container'
import { Button } from '../components/ui/button'
import Image from 'next/image'
import CartModal from '../components/CartModal'
import Categorylist from '../components/categorylist'
import Bitmapdetailes from '../components/Bitmapdetailes'
import Footer from '../components/Footer'
import { useState } from 'react'

export default function Page() {
  return (
    <section>
      <section className="bg-[#131313] relative z-10">
        <Hero>
          <Navbar />
          <Container>
            <section className="mb-[70px] lg:mb-[120px] sm:mb-24 bg-[#131313] ">
              <div className="flex flex-col md:flex-row items-center justify-between gap-[46.6px] text-center md:text-left relative ">
                <div className="absolute md:relative md:order-2 inset-0 md:inset-auto flex justify-center md:justify-end w-full md:w-auto pointer-events-none md:pointer-events-auto">
                  <Image
                    src="/Bitmap.png"
                    alt="Bitmap"
                    width={708.8}
                    height={886}
                    className="object-contain opacity-50 md:opacity-100"
                    priority
                  />
                </div>

                {/* TEXT SECTION - Positioned relatively on mobile/tablet to appear above image */}
                <div className="relative z-10 md:z-auto md:order-1 flex flex-col justify-center sm:justify-center items-center  sm:items-center md:items-start w-full sm:w-[379px] md:w-[379px] text-center md:text-left px-6 sm:px-0 py-20 md:py-0">
                  <h3 className="font-manrope font-normal text-[14px] leading-[100%] tracking-[10px] uppercase text-[#FFFFFF] lg:pt-0 opacity-[.4964]">
                    NEW PRODUCT
                  </h3>
                  <h1 className="font-manrope font-bold text-white pb-6 text-[36px] leading-10 tracking-[1.29px] uppercase text-center sm:text-[56px] sm:leading-[58px] sm:tracking-[2px] sm:w-[396px] sm:h-[116px] md:text-left md:w-auto md:h-auto pt-4">
                    XX99 Mark II Headphones
                  </h1>
                  <p className="text-[#FFFFFF] opacity-75 pb-10 font-medium font-manrope text-[15px] leading-[25px] tracking-[0px]">
                    Experience natural, lifelike audio and exceptional build quality made for the
                    passionate music enthusiast.
                  </p>
                  <div className="sm:flex sm:justify-center justify-start">
                    <Button className="font-manrope w-40 h-12 bg-[#D87D4A] hover:bg-[#FBAF85] text-white text-center font-bold text-[13px] leading-[100%] tracking-[1px] uppercase rounded-none transition-colors">
                      <Link href="/headphonedeatils">SEE PRODUCT</Link>
                    </Button>
                  </div>
                </div>
              </div>
            </section>
          </Container>
        </Hero>
      </section>
     <section>
      <Categorylist/>
     </section>
      <section className="mt-[168px] lg:mb-0">
        <Container>
          <div
            className="bg-[url('/Group4.png')] bg-cover bg-center bg-[#D87D4A] grid lg:grid-cols-2 sm:grid-cols-1 items-center gap-[118px]  rounded-lg 
      max-w-screen min-h-[600px] sm:max-w-[689px] sm:min-h-0 lg:max-w-[1400px] lg:h-auto 
      sm:text-center sm:justify-items-center mx-auto"
          >
            <div>
              <Image
                src="/bottomspeaker.png"
                alt="speaker"
                width={410.23}
                height={493}
                className="object-contain w-[172.25px] h-[207px] lg:ml-[200px] mt-24 lg:w-[410.23px] lg:h-[493px] sm:w-[197.21px] sm:h-[237px] mx-auto "
                priority
              />
            </div>

            <div className="flex flex-col items-center justify-center lg:items-start lg:text-left">
              <h1 className="font-manrope font-bold text-[56px] leading-[58px] tracking-[2px] uppercase w-[261px] h-[116px] text-white mb-6 text-center lg:text-left">
                ZX9 SPEAKER
              </h1>
              <p className="font-manrope font-normal text-[15px] leading-[25px] text-[#FFFFFF]/75 w-[349px] h-[75px] mb-10 text-center lg:text-left">
                Upgrade to premium speakers that are phenomenally built to deliver truly remarkable
                sound.
              </p>
              <div className="w-40 h-12 bg-black text-white flex justify-center items-center mb-10">
                <Button className="font-manrope font-bold text-[13px] tracking-[1px] uppercase w-[99px] h-[18px]">
                  <Link href="/speaker1"> SEE PRODUCT</Link>
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </section>
      <section>
        <Container>
          <div className="bg-[url('/Bitmapk.png')] bg-cover bg-center sm:max-w-auto lg:max-w-[1440px] h-80 my-12 px-3">
            <div className="w-[204px h-[118px] pl-24 py-[101px]">
              <span className="w-[202px] h-[38px]">
                <h1 className="font-manrope font-bold text-[28px] leading-[100%] tracking-[2px] uppercase   whitespace-nowrap">
                  ZX7 SPEAKER
                </h1>
              </span>
              <div className="w-40 h-12 ">
                <button className="font-manrope font-bold text-[13px] leading-[100%] tracking-[1px] uppercase sm:mb-10 lg:mt-8 border border-[#000000] py-[15px] px-[31px]  whitespace-nowrap">
                  <Link href="/speaker2"> See Product</Link>
                </button>
              </div>
            </div>
          </div>
          <section className="">
            <div className="flex flex-col sm:flex-row lg:flex-row gap-10 sm:gap-8 lg:gap-[30px] ">
              {/* Image section */}
              <div>
                <Image
                  src="/Group12.png"
                  alt="earphone"
                  width={540}
                  height={320}
                  className="object-contain sm:w-[339px] sm:h-80 lg:w-[540px] lg:h-80"
                  priority
                />
              </div>

              {/* Text section */}
              <div className="bg-[#F1F1F1] sm:w-[339px] sm:h-80 lg:w-[540px] lg:h-80 flex flex-col items-center justify-start">
                <div className=" h-80 text-center sm:text-left flex flex-col justify-center items-center sm:items-start">
                  <h1 className="font-manrope font-bold text-[28px] leading-[100%] tracking-[2px] uppercase">
                    YX1 EARPHONES
                  </h1>
                  <div className="w-40 h-12 mx-auto sm:mx-0">
                    <button className="font-manrope font-bold text-[13px] leading-[100%] tracking-[1px] uppercase mt-8 border border-[#000000] py-[15px] px-[31px] whitespace-nowrap">
                      <Link href="/earphones1"> See Product</Link>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <Bitmapdetailes />
        </Container>
      </section>
      <Footer />
    </section>
  )
}
