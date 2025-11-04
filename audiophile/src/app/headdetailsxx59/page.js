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
  const galleryImages = ['/kgallery1.jpg', '/kgallery2.jpg', '/kgallery3.jpg']
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
          imageSrc="/headk1.jpg"
          imageAlt=" Headphone"
          label=""
          title="XX59 Headphones"
          description="Enjoy your audio almost anywhere and customize it to your specific tastes with the XX59 headphones. The stylish yet durable versatile wireless headset is a brilliant companion at home or on the move."
          amount="2999"
          showTwoButtons={true}
          button1Label="Buy Now"
          button2Label="Learn More"
          reverseLayout={true}
        />
        <Headfeatures
          description="These headphones have been created from durable, high-quality materials tough enough to take anywhere. Its compact folding design fuses comfort and minimalist style making it perfect for travel. Flawless transmission is assured by the latest wireless technology engineered for audio synchronization with videos."

          descriptionone="More than a simple pair of headphones, this headset features a pair of built-in microphones for clear, hands-free calling when paired with a compatible smartphone. Controlling music and calls is also intuitive thanks to easy-access touch buttons on the earcups. Regardless of how you use the XX59 headphones, you can do so all day thanks to an impressive 30-hour battery life that can be rapidly recharged via USB-C."
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
          <Categorylist/>
        </section>
        <section>
          <Bitmapdetailes />
        </section>
      </Container>
      <Footer/>
    </section>
  )
}
