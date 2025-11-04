"use client";
import React, { useState } from 'react';
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
  const galleryImages = ['/sgallery1.jpg', '/sgallery2.jpg', '/sgallery3.jpg']
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
          imageSrc="/zx9speaker.jpg"
          imageAlt=" Headphone"
          label=""
          title=" ZX9 SPEAKER"
          description=" Upgrade your sound system with the all new ZX9 active speaker. It’s a bookshelf speaker system that offers truly wireless connectivity -- creating new possibilities for more pleasing and practical audio setups."
          amount="2999"
          showTwoButtons={true}
          button1Label="Buy Now"
          button2Label="Learn More"
          reverseLayout={true}
        />
        <Headfeatures
          description="Connect via Bluetooth or nearly any wired source. This speaker features optical, digital coaxial, USB Type-B, stereo RCA, and stereo XLR inputs, allowing you to have up to five wired source devices connected for easy switching. Improved bluetooth technology offers near lossless audio quality at up to 328ft (100m)."
          descriptionone="Discover clear, more natural sounding highs than the competition with ZX9’s signature planar diaphragm tweeter. Equally important is its powerful room-shaking bass courtesy of a 6.5” aluminum alloy bass unit. You’ll be able to enjoy equal sound quality whether in a large room or small den. Furthermore, you will experience new sensations from old songs since it can respond to even the subtle waveforms."
          boxItems={[
            { qty: 2, name: 'Speaker Unit' },
            { qty: 2, name: 'Speaker Cloth Panel' },
            { qty: 1, name: 'User Manual' },
            { qty: 1, name: '3.5mm 5m Audio Cable' },
            { qty: 1, name: '10m Optical Cable' },
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
      <Footer/>
    </section>
  )
}
