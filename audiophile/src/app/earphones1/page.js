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
  const galleryImages = ['/Egallery1.jpg', '/Egallery2.jpg', '/Egallery3.jpg']
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
          imageSrc="/ear.jpg"
          imageAlt=" earphone"
          label="NEW PRODUCT"
          title=" YX1 WIRELESS EARPHONES"
          description="Tailor your listening experience with bespoke dynamic drivers from the new YX1 Wireless Earphones. Enjoy incredible high-fidelity sound even in noisy environments with its active noise cancellation feature.."
          amount="2999"
          showTwoButtons={true}
          button1Label="Buy Now"
          button2Label="Learn More"
          reverseLayout={true}
        />
         </Container>

         <Container>
        <Headfeatures
          description="Experience unrivalled stereo sound thanks to innovative acoustic technology. With improved ergonomics designed for full day wearing, these revolutionary earphones have been finely crafted to provide you with the perfect fit, delivering complete comfort all day long while enjoying exceptional noise isolation and truly immersive sound."
          descriptionone="The YX1 Wireless Earphones features customizable controls for volume, music, calls, and voice assistants built into both earbuds. The new 7-hour battery life can be extended up to 28 hours with the charging case, giving you uninterrupted play time. Exquisite craftsmanship with a splash resistant design now available in an all new white and grey color scheme as well as the popular classic black"
          boxItems={[
            { qty: 2, name: 'Earphone Unit' },
            { qty: 2, name: 'Multi-size Earplugs' },
            { qty: 1, name: 'User Manual' },
            { qty: 1, name: 'USB-C Charging Cable' },
            { qty: 1, name: 'Travel Pouch' },
          ]}
        />
         </Container>
         <Container>

        <section>
          <Gallerysection images={galleryImages} />
        </section>
         </Container>
         <Container>

        <section>
          <Typeheadphone />
        </section>
         </Container>
        <section>
          <Categorylist />
        </section>
        <Container>
        <section>
          <Bitmapdetailes />
        </section>
        </Container>
      <Footer/>
    </section>
  )
}
