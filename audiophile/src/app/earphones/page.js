'use client'
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Container from '@/components/Container'
import Earphonewire from '@/components/Earphonewire'
import Categorylist from '@/components/categorylist'
import Bitmapdetailes from '@/components/Bitmapdetailes'
import Footer from '@/components/Footer'

export default function earphones() {
  return (
    <section>
        <section className="bg-[#0E0E0E]">

      <Hero>
        <Navbar />
        <Container>
          <section className="h-[336px] flex justify-center items-center">
            <h1 className="font-manrope font-bold text-[40px] leading-11 tracking-[1.43px] uppercase  text-center text-white lg:mb-40">
              EARPHONES
            </h1>
          </section>
        </Container>
      </Hero>
        </section>
      <Container>
        <section className="mt-40">
          <Earphonewire />
        </section>
        <section className="mt-40">
          <Categorylist/>
        </section>
        <section className="mt-40">
          <Bitmapdetailes />
        </section>
      </Container>
      <section className="mt-40">
        <Footer />
      </section>
    </section>
  )
}
