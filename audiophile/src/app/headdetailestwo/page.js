'use client'
import Navbar from '@/components/Navbar'
import Link from 'next/link'
import Image from 'next/image'
import Details from '@/components/Details'
import Markone from '@/components/headcomponents/Markone'
import Headfeatures from '@/components/headfeatures'
import Hero from '@/components/Hero'
import Typeheadphone from '@/components/Typeheadphone'
import Gallerysection from '@/components/Gallerysection'
import Container from '@/components/Container'
import Bitmapdetailes from '@/components/Bitmapdetailes'
import Categorylist from '@/components/categorylist'
import Footer from '@/components/Footer'
export default function page() {
  const galleryImages = ['/hegallery1.jpg', '/hegallery2.jpg', '/hegallery3.jpg']
  return (
    <section>
        <section className="bg-[#0E0E0E]">

      <Hero>
        <Navbar/>
      </Hero>
        </section>
      <Container>
        <h1 className="font-manrope font-normal text-[15px] leading-[25px] tracking-[0px] text-black opacity-50 w-[57px] h-[25px] mt-[79px] mb-14">
          Go Back
        </h1>
       
        <Details
          imageSrc="/headone.jpg"
          imageAlt=" Headphone"
          label=""
          title="XX99 Mark I Headphones"
          description="As the gold standard for headphones, the classic XX99 Mark I offers detailed and accurate audio reproduction for audiophiles, mixing engineers, and music aficionados alike in "
          amount="2999"
          showTwoButtons={true}
          button1Label="Buy Now"
          button2Label="Learn More"
          reverseLayout={true}
        />
        <Headfeatures
          description="As the headphones all others are measured against, the XX99 Mark I demonstrates over five decades of audio expertise, redefining the critical listening experience. This pair of closed-back headphones are made of industrial, aerospace-grade materials to emphasize durability at a relatively light weight of 11 oz."
          descriptionone="From the handcrafted microfiber ear cushions to the robust metal headband with inner damping element, the components work together to deliver comfort and uncompromising sound. Its closed-back design delivers up to 27 dB of passive noise cancellation, reducing resonance by reflecting sound to a dedicated absorber. For connectivity, a specially tuned cable is included with a balanced gold connector."
          boxItems={[
            { qty: 1, name: 'Headphone Unit' },
            { qty: 2, name: 'Replacement Earcups' },
            { qty: 1, name: 'User Manual' },
            { qty: 1, name: '3.5mm 5m Audio Cable' },
          ]}
        />
        <section>
          <Gallerysection images={galleryImages} />
        </section>
        <section>
          <Typeheadphone />
        </section>
        <section>
          <Categorylist />
        </section>
        <section>
          <Bitmapdetailes />
        </section>
      </Container>
      <Footer />
    </section>
  )
}
