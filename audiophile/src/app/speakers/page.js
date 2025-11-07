'use client'
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Container from '@/components/Container'
import Categorylist from '@/components/categorylist'
import Speakerx9 from '@/components/speakcompoenents/speakerx9'
import Speakerx7 from '@/components/speakcompoenents/speakerx7'
import Bitmapdetailes from '@/components/Bitmapdetailes'
import Footer from '@/components/Footer'



export default function speakers() {
  return (
    <section>
        <section className="bg-[#0E0E0E]">

      <Hero>
        <Navbar />
        <Container>
          <section className="h-[336px] flex justify-center items-center">
            <h1 className="font-manrope font-bold text-[40px] leading-11 tracking-[1.43px] uppercase  text-center text-white lg:mb-40">
              Speakers
            </h1>
          </section>
        </Container>
      </Hero>
        </section>

      <Container>
        <section  className="mt-40">
      <Speakerx9/>
        </section>
         </Container>
         <Container>
        <section  className="mt-40">
      <Speakerx7/>
        </section>
         </Container>
        <section  className="mt-40">
      <Categorylist/>
        </section>
        <Container>
        <section  className="mt-40">
      <Bitmapdetailes/>
        </section>  
        </Container>
     
      <section className="mt-40">
        <Footer />
      </section>
    </section>
  )
}
