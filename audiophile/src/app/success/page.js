// app/success/page.jsx
'use client'

import { useSearchParams } from 'next/navigation'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import Container from '@/components/Container'
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Footer from '@/components/Footer'

export default function SuccessPage() {
  const searchParams = useSearchParams()
  const orderId = searchParams.get('orderId')

  return (
    <section>
      <section className="bg-[#0E0E0E]">
        <Hero>
          <Navbar />
        </Hero>
      </section>

      <Container>
        <div className="max-w-2xl mx-auto my-20 p-8 bg-white rounded-2xl shadow-lg">
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
              </svg>
            </div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Thank You For Your Order!</h1>
            <p className="text-gray-600">Your order has been confirmed and will be shipped soon.</p>
            {orderId && (
              <p className="text-sm text-gray-500 mt-2">Order ID: {orderId}</p>
            )}
          </div>

          <div className="text-center">
            <p className="text-gray-600 mb-6">
              You will receive an email confirmation shortly with tracking details.
            </p>
            
            <div className="flex gap-4 justify-center">
              <Link href="/">
                <Button className="bg-[#D87D4A] hover:bg-[#FBAF85] text-white">
                  Continue Shopping
                </Button>
              </Link>
              <Link href="/orders">
                <Button variant="outline" className="border-[#D87D4A] text-[#D87D4A] hover:bg-[#D87D4A] hover:text-white">
                  View Orders
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </Container>
      <Footer />
    </section>
  )
}