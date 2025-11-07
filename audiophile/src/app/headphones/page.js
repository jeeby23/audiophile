'use client'
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Container from '@/components/Container'
import Categorylist from '@/components/categorylist'
import Marktwo from '@/components/headcomponents/Marktwo'
import Markone from '@/components/headcomponents/Markone'
import Headphone59 from '@/components/headcomponents/Headphone59'
import Bitmapdetailes from '@/components/Bitmapdetailes'
import Footer from '@/components/Footer'

export default function Headphones() {
  return (
    <section >
        <section className="bg-[#0E0E0E]">

      <Hero>
        <Navbar />
        <Container>
          <section className="h-[336px] flex justify-center items-center">
            <h1 className="font-manrope font-bold text-[40px] leading-11 tracking-[1.43px] uppercase  text-white lg:mb-40">
              Headphones
            </h1>
          </section>
        </Container>
      </Hero>
        </section>
      <Container>
        <section className="mt-40">
          <Marktwo/>
        </section>
         </Container>
         <Container>

        <section className="mt-40">
          <Markone/>
        </section>
         </Container>
        <Container>
        <section className="mt-40">
          <Headphone59/>
        </section>
        </Container>
       
        <section className="mt-40">
          <Categorylist/>
        </section>
         <Container>    
        <section className="mt-40">
          <Bitmapdetailes/>
        </section>
        </Container>
     
      <section className="mt-40">
        <Footer />
      </section>
    </section>
  )
}
