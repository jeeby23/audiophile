import Link from 'next/link'
import Container from '../components/Container'
import Activelink from '../components/activelink'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons'

export default function Footer() {
  return (
    <footer>
      <section className="bg-[#101010]  h-[654px] sm:max-w-3xl sm:h-[400px] lg:max-w-[1440px] lg:h-[365px] mx-auto mt-[133px] sm:mt-24">
        <Container>
          <div className="max-w-[1110px] mx-auto">

            {/* Rectangle image */}
            <div className='flex justify-center sm:justify-between'>
              <img src="/Rectangle.png" alt="Rectangle" />
            </div>

            {/* Logo + Nav list */}
            <div className="lg:flex justify-between items-center mt-[71px] flex-col sm:flex-row sm:items-center">
              <div className="text-white text-[24px] font-bold text-center sm:text-left">
                audiophile
              </div>

              <ul className="flex flex-col items-center gap-8 text-[#FFFFFF] uppercase tracking-[2px] text-[13px] leading-[25px] sm:flex-row sm:items-start">
                <li><Activelink href="/">Home</Activelink></li>
                <li><Activelink href="/headphones">Headphones</Activelink></li>
                <li><Activelink href="/speakers">Speakers</Activelink></li>
                <li><Activelink href="/earphones">Earphones</Activelink></li>
              </ul>
            </div>

            {/* Text + Social icons */}
            <div className="flex justify-between items-center mt-[71px] flex-col sm:flex-row sm:items-center">
              <p className="font-manrope font-medium text-[15px] leading-[25px] opacity-50 text-white text-center sm:text-left sm:max-w-[540px]">
                Audiophile is an all in one stop to fulfill your audio needs. We're a small team
                of music lovers and sound specialists who are devoted to helping you get the most
                out of personal audio. Come and visit our demo facility - we’re open 7 days a week.
              </p>

              <div className=" flex gap-[2.5px] mt-6 sm:mt-0">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faFacebookF} className="text-white" />
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faTwitter} className="text-white" />
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faInstagram} className="text-white" />
                </a>
              </div>
            </div>

            <div className='pt-14 text-center sm:text-left'>
              <small className="font-manrope font-bold text-[15px] leading-[25px] opacity-50 text-white">
                Copyright 2021. All Rights Reserved
              </small>
            </div>

          </div>
        </Container>
      </section>
    </footer>
  )
}