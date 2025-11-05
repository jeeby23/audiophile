'use client'
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Container from '@/components/Container'
import Footer from '@/components/Footer'
import ChecoutModal from '@/components/ChecoutModal'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { useEffect, useState } from 'react'

import { useMutation } from 'convex/react'
import { api } from '@/../convex/_generated/api'
import useCartStore from '@/store/useCartStore'

export default function page() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    zip: '',
    city: '',
    country: '',
    paymentMethod: 'e-money',
    emoneyNumber: '',
    emoneyPin: '',
  })

  const cartItems = useCartStore((state) => state.cart)
  const totalAmount = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0)
  const createCheckout = useMutation(api.checkout.createCheckout)

  const handleChange = (e) => {
    setForm({ ...form, [e.target.id]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    await createCheckout({
      ...form,
      totalAmount,
      cartItems,
    })
    alert('✅ Checkout details saved successfully!')
  }
  return (
    <section>
      {/* Hero Section */}
      <section className="bg-[#0E0E0E]">
        <Hero>
          <Navbar />
        </Hero>
      </section>

      {/* Checkout Form */}
      <Container>
        <h1 className="font-manrope text-[15px] leading-[25px] text-black opacity-60 mt-20 mb-10 cursor-pointer hover:text-[#D87D4A] transition">
          Go Back
        </h1>
        <div className="w-full max-w-[1110px] mx-auto bg-white rounded-2xl flex flex-col lg:flex-row gap-10 items-start p-4 sm:p-8 md:p-10">
          <div>
            <section className="w-full shadow-lg p-6 sm:p-8 rounded-xl">
              <div>
                <h1 className="font-manrope font-bold text-3xl mb-10 text-[#101010]">Checkout</h1>

                {/* Billing Details */}
                <div className="mb-10">
                  <h2 className="font-manrope font-bold text-[13px] tracking-[0.93px] uppercase text-[#D87D4A] mb-6">
                    Billing Details
                  </h2>

                  <form className="space-y-8" onSubmit={handleSubmit}>
                    <div className="grid sm:grid-cols-2 gap-6">
                      <div>
                        <Label htmlFor="name" className="text-sm font-medium text-gray-700">
                          Name
                        </Label>
                        <Input
                          id="name"
                          value={form.name}
                          onChange={handleChange}
                          placeholder="Alexel Ward"
                          className="mt-2 focus:ring-[#D87D4A]"
                        />
                      </div>
                      <div>
                        <Label htmlFor="email" className="text-sm font-medium text-gray-700">
                          Email Address
                        </Label>
                        <Input
                          id="email"
                          placeholder="alexel@mail.com"
                          value={form.email}
                          onChange={handleChange}
                          className="mt-2 focus:ring-[#D87D4A]"
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="phone" className="text-sm font-medium text-gray-700">
                        Phone Number
                      </Label>
                      <Input
                        id="phone"
                        value={form.phone}
                        onChange={handleChange}
                        placeholder="+1 202-555-0136"
                        className="mt-2 focus:ring-[#D87D4A]"
                      />
                    </div>

                    {/* Shipping Info */}
                    <div>
                      <h2 className="font-manrope font-bold text-[13px] tracking-[0.93px] uppercase text-[#D87D4A] mt-8 mb-4">
                        Shipping Info
                      </h2>
                      <div>
                        <Label htmlFor="address" className="text-sm font-medium text-gray-700">
                          Address
                        </Label>
                        <Input
                          id="address"
                          value={form.address}
                          onChange={handleChange}
                          placeholder="1137 Williams Avenue"
                          className="mt-2 focus:ring-[#D87D4A]"
                        />
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div>
                          <Label htmlFor="zip" className="text-sm font-medium text-gray-700">
                            Zip Code
                          </Label>
                          <Input
                            id="zip"
                            value={form.zip}
                            onChange={handleChange}
                            placeholder="10001"
                            className="mt-2 focus:ring-[#D87D4A]"
                          />
                        </div>
                        <div>
                          <Label htmlFor="city" className="text-sm font-medium text-gray-700">
                            City
                          </Label>
                          <Input
                            id="city"
                            value={form.city}
                            onChange={handleChange}
                            placeholder="New York"
                            className="mt-2 focus:ring-[#D87D4A]"
                          />
                        </div>
                      </div>

                      <div className="mt-6">
                        <Label htmlFor="country" className="text-sm font-medium text-gray-700">
                          Country
                        </Label>
                        <Input
                          id="country"
                          value={form.country}
                          onChange={handleChange}
                          placeholder="United States"
                          className="mt-2 focus:ring-[#D87D4A]"
                        />
                      </div>
                    </div>

                    {/* Payment Details */}
                    <div className="mt-10">
                      <h2 className="font-manrope font-bold text-[13px] tracking-[0.93px] uppercase text-[#D87D4A] mb-4">
                        Payment Details
                      </h2>

<div className="flex flex-col md:flex-row md:items-start justify-between gap-6 w-full">
                        <p className="text-gray-800 font-medium mt-1">Payment Method</p>

                        <div className="flex flex-col space-y-4 w-full md:w-[320px]">
                          <RadioGroup defaultValue="e-money" className="space-y-4">
                           <div className="flex items-center justify-between border border-gray-300 rounded-xl p-4 hover:border-[#D87D4A] transition w-full">
                              <RadioGroupItem
                                value="e-money"
                                id="e-money"
                                onChange={handleChange}
                              />
                              <Label htmlFor="e-money" className="font-medium text-gray-700">
                                e-Money
                              </Label>
                            </div>

                            <div className="flex items-center justify-between border border-gray-300 rounded-xl p-4 hover:border-[#D87D4A] transition w-full">
                              <RadioGroupItem value={form.name} onChange={handleChange} id="cash" />
                              <Label htmlFor="cash" className="font-medium text-gray-700">
                                Cash on Delivery
                              </Label>
                            </div>
                          </RadioGroup>
                        </div>
                      </div>
                    </div>

                    {/* e-Money Fields */}
                    <div className="grid sm:grid-cols-2 gap-6 mt-8">
                      <div>
                        <Label
                          htmlFor="emoney-number"
                          className="text-sm font-medium text-gray-700"
                        >
                          e-Money Number
                        </Label>
                        <Input
                          id="emoneyNumber"
                          value={form.emoneyNumber}
                          onChange={handleChange}
                          placeholder="238521993"
                          className="mt-2 focus:ring-[#D87D4A]"
                        />
                      </div>
                      <div>
                        <Label htmlFor="emoney-pin" className="text-sm font-medium text-gray-700">
                          e-Money PIN
                        </Label>
                        <Input
                          id="emoneyPin"
                          value={form.emoneyPin}
                          onChange={handleChange}
                          placeholder="6891"
                          className="mt-2 focus:ring-[#D87D4A]"
                        />
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </section>
          </div>

         <div className="w-full lg:w-[40%] mt-6 lg:mt-0">
           <ChecoutModal form={form} />
          </div>
        </div>
      </Container>
      <Footer />
    </section>
  )
}
