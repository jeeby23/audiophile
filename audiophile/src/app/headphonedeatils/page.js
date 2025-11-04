'use client'
import Navbar from '@/components/Navbar'
import Link from 'next/link'
import Image from 'next/image'
import Details from '@/components/Details'
import Hero from '@/components/Hero'
import Container from '@/components/Container'
import Headfeatures from '@/components/headfeatures'
import Typeheadphone from '@/components/Typeheadphone'
import Gallerysection from '@/components/Gallerysection'
import Marktwo from '@/components/headcomponents/Marktwo'
import Bitmapdetailes from '@/components/Bitmapdetailes'
import Categorylist from '@/components/categorylist'
import Footer from '@/components/Footer'

export default function page() {
  const galleryImages = ['/galleryone.jpg', '/gallerytwo.jpg', '/gallerythree.jpg']

  return (
    <section>
        <section className="bg-[#0E0E0E]">

      <Hero>
        <Navbar />
      </Hero>
        </section>
      <Container>
        <h1 className="font-manrope font-normal text-[15px] leading-[25px] tracking-[0px] text-black opacity-50 w-[57px] h-[25px] mt-[79px] mb-14">
          Go Back
        </h1>
        <Details
          imageSrc="/head2.jpg"
          imageAlt=" Headphone"
          label=" NEW PRODUCT"
          title="  XX99 Mark II Headphones"
          description=" The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio‑quality sound."
          amount="2999"
          showTwoButtons={true}
          button1Label="Buy Now"
          button2Label="Learn More"
          reverseLayout={true}
        />
        <Headfeatures
          description="Featuring a genuine leather head strap and premium earcups, these headphones deliver superior comfort for those who like to enjoy endless listening. It includes  intuitive controls designed for any situation. Whether you’re taking a business call or just in your own personal space, the auto on/off and pause features ensure that you’ll never miss a beat ."
          descriptionone="The advanced Active Noise Cancellation with built-in equalizer allow you to experience your audio world on your terms. It lets you enjoy your audio in peace, but quickly interact with your surroundings when you need to. Combined with Bluetooth 5. 0 compliant connectivity and 17 hour battery life, the XX99 Mark II headphones gives you superior sound, cutting-edge technology, and a modern design aesthetic."
          boxItems={[
            { qty: 1, name: 'Headphone Unit' },
            { qty: 2, name: 'Replacement Earcups' },
            { qty: 1, name: 'User Manual' },
            { qty: 1, name: '3.5mm 5m Audio Cable' },
            { qty: 1, name: 'Travel Bag' },
          ]}
        />
        <Gallerysection images={galleryImages} />
        <section>
          <Typeheadphone />
        </section>
        <section>
          <Categorylist/>
        </section>
        <section>
          <Bitmapdetailes />
        </section>
      </Container>
      <Footer />
    </section>
  )
}
