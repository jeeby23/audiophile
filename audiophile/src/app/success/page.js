'use client'
import { createPortal } from 'react-dom'
import { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useQuery } from 'convex/react'
import { api } from '../../../convex/_generated/api'
import { Button } from '@/components/ui/button'
import Navbar from '@/components/Navbar'
// import Footer from '@/components/Hero'
import Hero from '@/components/Hero'
import Footer from '@/components/Footer'
import Container from '@/components/Container'

export default function SuccessModal({ isOpen, onClose }) {
  const cart = useQuery(api.cart.getCart)
  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])
 
  if (!cart) return null 

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0)

  return createPortal(
    <div className="fixed inset-0 z-50 bg-black/50 flex justify-center items-center p-4">
      <div className="absolute inset-0" onClick={onClose}></div>

      {/* Optional Navbar/Hero if needed */}
      {/* <section className="bg-[#0E0E0E] absolute top-0 left-0 w-full">
        <Hero>
          <Navbar />
        </Hero>
      </section> */}

      <div className="relative z-50 bg-white rounded-lg shadow-lg w-full max-w-md p-8 flex flex-col gap-6 ">
        <Image
          src="/Groupsuc.png"
          alt="Success check"
          width={64}
          height={64}
          className=""
        />
        <div>
          <h2 className="text-2xl  font-bold mb-2">
            THANK YOU<br />FOR YOUR ORDER
          </h2>
          <p className="text-gray-500 text-sm">
            You will receive an email confirmation shortly.
          </p>
        </div>

        <div className='flex flex-row  item-center'>

        <div className="bg-[#F1F1F1] h-20 rounded-lg p-4 text-left">
          <ul className="space-y-3 overflow-y-auto max-h-48">
            {cart.map((item) => (
              <li key={item._id} className="flex justify-between items-start">
                <div className="flex gap-3 items-center">
                  <Image
                    src={item.image}
                    alt={item.name}
                    width={50}
                    height={50}
                    className="rounded-md"
                  />
                  <div>
                    <p className="font-bold text-sm">{item.name}</p>
                    <p className="text-gray-500 text-sm">${item.price}</p>
                  </div>
                </div>
                <p className="text-gray-700">x{item.quantity}</p>
              </li>
            ))}
          </ul>
        </div>

          <div className="bg-black text-white p-4 rounded-md mt-4 flex justify-between items-start h-20">
            <p className="text-sm uppercase tracking-wide">Grand Total</p>
            <p className="text-lg font-bold">${total.toLocaleString()}</p>
          </div>
        </div>


        <Button
          asChild
          className="bg-[#D87D4A] hover:bg-[#FBAF85] text-white w-full py-3 rounded-none uppercase"
        >
          <Link href="/">Back to home</Link>
        </Button>

      </div>
    </div>,
    document.body
  )
}