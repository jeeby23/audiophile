'use client'
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Container from '@/components/Container'
import Footer from '@/components/Footer'
import ChecoutModal from '@/components/ChecoutModal'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { useState } from 'react'
import { useMutation } from 'convex/react'
import { api } from '../../../convex/_generated/api'
import useCartStore from '@/store/useCartStore'

export default function Page() {
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
      items: cartItems,
      totalAmount,
      shippingFee: 50,
      vat: totalAmount * 0.2,
      grandTotal: totalAmount + 50 + totalAmount * 0.2,
    })
    alert('✅ Checkout details saved successfully!')
  }

  return (
    <section className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-[#0E0E0E]">
        <Hero>
          <Navbar />
        </Hero>
      </section>

      {/* Checkout Form */}
      <Container>
        <h1 className="font-manrope text-[15px] leading-[25px] text-black opacity-60 mt-10 mb-6 cursor-pointer hover:text-[#D87D4A] transition">
          Go Back
        </h1>

        <div className="w-full mx-auto  flex flex-col lg:flex-row gap-6 sm:gap-10 items-start p-4 sm:p-8 md:p-10 ">
          {/* LEFT: Checkout Form */}
          <div className="w-full">
            <section className="w-full  p-4 sm:p-8 ">
              <h1 className="font-manrope font-bold text-2xl sm:text-3xl mb-8 text-[#101010]">
                Checkout
              </h1>

              <form className="space-y-8" onSubmit={handleSubmit}>
                {/* Billing Details */}
                <div>
                  <h2 className="font-manrope font-bold text-[13px] tracking-[0.93px] uppercase text-[#D87D4A] mb-6">
                    Billing Details
                  </h2>
                  <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
                    <div>
                      <Label htmlFor="name">Name</Label>
                      <Input
                        id="name"
                        value={form.name}
                        onChange={handleChange}
                        placeholder="Alexel Ward"
                        className="mt-2 focus:ring-[#D87D4A]"
                      />
                    </div>
                    <div>
                      <Label htmlFor="email">Email Address</Label>
                      <Input
                        id="email"
                        value={form.email}
                        onChange={handleChange}
                        placeholder="alexel@mail.com"
                        className="mt-2 focus:ring-[#D87D4A]"
                      />
                    </div>
                  </div>
                </div>

                {/* Phone */}
                <div>
                  <Label htmlFor="phone">Phone Number</Label>
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
                  <Label htmlFor="address">Address</Label>
                  <Input
                    id="address"
                    value={form.address}
                    onChange={handleChange}
                    placeholder="1137 Williams Avenue"
                    className="mt-2 focus:ring-[#D87D4A]"
                  />

                  <div className="grid sm:grid-cols-2 gap-4 sm:gap-6 mt-4">
                    <div>
                      <Label htmlFor="zip">Zip Code</Label>
                      <Input
                        id="zip"
                        value={form.zip}
                        onChange={handleChange}
                        placeholder="10001"
                        className="mt-2 focus:ring-[#D87D4A]"
                      />
                    </div>
                    <div>
                      <Label htmlFor="city">City</Label>
                      <Input
                        id="city"
                        value={form.city}
                        onChange={handleChange}
                        placeholder="New York"
                        className="mt-2 focus:ring-[#D87D4A]"
                      />
                    </div>
                  </div>

                  <div className="mt-4">
                    <Label htmlFor="country">Country</Label>
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

                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-6 w-full">
                    <p className="text-gray-800 font-medium mt-1">Payment Method</p>
                    <div className="flex flex-col space-y-4 w-full sm:w-[320px]">
                      <RadioGroup defaultValue="e-money" className="space-y-4">
                        <div className="flex items-center justify-between border border-gray-300 rounded-xl p-4 hover:border-[#D87D4A] transition w-full">
                          <RadioGroupItem
                            value="e-money"
                            id="e-money"
                            onChange={handleChange}
                          />
                          <Label htmlFor="e-money">e-Money</Label>
                        </div>

                        <div className="flex items-center justify-between border border-gray-300 rounded-xl p-4 hover:border-[#D87D4A] transition w-full">
                          <RadioGroupItem value="cash" id="cash" onChange={handleChange} />
                          <Label htmlFor="cash">Cash on Delivery</Label>
                        </div>
                      </RadioGroup>
                    </div>
                  </div>
                </div>

                {/* e-Money Inputs */}
                {form.paymentMethod === 'e-money' && (
                  <div className="grid sm:grid-cols-2 gap-4 sm:gap-6 mt-8">
                    <div>
                      <Label htmlFor="emoneyNumber">e-Money Number</Label>
                      <Input
                        id="emoneyNumber"
                        value={form.emoneyNumber}
                        onChange={handleChange}
                        placeholder="238521993"
                        className="mt-2 focus:ring-[#D87D4A]"
                      />
                    </div>
                    <div>
                      <Label htmlFor="emoneyPin">e-Money PIN</Label>
                      <Input
                        id="emoneyPin"
                        value={form.emoneyPin}
                        onChange={handleChange}
                        placeholder="6891"
                        className="mt-2 focus:ring-[#D87D4A]"
                      />
                    </div>
                  </div>
                )}
              </form>
            </section>
          </div>

          {/* RIGHT: Checkout Summary */}
          <div className="w-full lg:w-[40%] mt-6 lg:mt-0">
            <ChecoutModal form={form} />
          </div>
        </div>
      </Container>

      <Footer />
    </section>
  )
}