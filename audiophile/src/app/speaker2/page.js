'use client'
import React, { useState } from 'react'
import Details from '@/components/Details'
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Container from '@/components/Container'
import Headfeatures from '@/components/headfeatures'
import Gallerysection from '@/components/Gallerysection'
import Typeheadphone from '@/components/Typeheadphone'
import Bitmapdetailes from '@/components/Bitmapdetailes'
import Categorylist from '@/components/categorylist'
import Footer from '@/components/Footer'

export default function page() {
  const galleryImages = ['/s2gallery1.jpg', '/s2gallery2.jpg', '/s2gallery3.jpg']
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
          imageSrc="/zx7speaker.jpg"
          imageAlt=" speaker 2"
          label=""
          title=" ZX7 SPEAKER"
          description=" Stream high quality sound wirelessly with minimal loss. The ZX7 bookshelf speaker uses high-end audiophile components that represents the top of the line powered speakers for home or studio use."
          amount="2999"
          showTwoButtons={true}
          button1Label="Buy Now"
          button2Label="Learn More"
          reverseLayout={true}
        />
        <Headfeatures
          description="Reap the advantages of a flat diaphragm tweeter cone. This provides a fast response rate and excellent high frequencies that lower tiered bookshelf speakers cannot provide. The woofers are made from aluminum that produces a unique and clear sound. XLR inputs allow you to connect to a mixer for more advanced usage."
          descriptionone="The ZX7 speaker is the perfect blend of stylish design and high performance. It houses an encased MDF wooden enclosure which minimises acoustic resonance. Dual connectivity allows pairing through bluetooth or traditional optical and RCA input. Switch input sources and control volume at your finger tips with the included wireless remote. This versatile speaker is equipped to deliver an authentic listening experience."
          boxItems={[
            { qty: 2, name: 'Speaker Unit' },
            { qty: 2, name: 'Speaker Cloth Panel' },
            { qty: 1, name: 'User Manual' },
            { qty: 1, name: '3.5mm 5m Audio Cable' },
            { qty: 1, name: '7.5m Optical Cable' },
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
