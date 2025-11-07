
'use client'

import { useQuery, useMutation } from 'convex/react'
import { api } from '../../convex/_generated/api'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { useRouter } from 'next/navigation'
import SuccessModal from './SuccessModal'
import { useState } from 'react'

export default function CheckoutModal({ form }) {
  const router = useRouter()

  // Fetch cart items
  const cart = useQuery(api.cart.getCart)
  const clearCart = useMutation(api.cart.clearCart)
  const createCheckout = useMutation(api.checkout.createCheckout)

  const [showSuccess, setShowSuccess] = useState(false)

  if (!cart) return <p>Loading...</p>

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0)
  const shippingFee = 50
  const vat = total * 0.2
  const grandTotal = total + shippingFee + vat

  const isEmailValid = form.email && form.email.includes('@')

  const handleCheckout = async () => {
    if (
      !form.name ||
      !form.email ||
      !form.phone ||
      !form.address ||
      !form.zip ||
      !form.city ||
      !form.country
    ) {
      alert('Please fill all required fields!')
      return
    }

    if (!isEmailValid) {
      alert('Please enter a valid email!')
      return
    }

    try {
      await createCheckout({
        name: form.name,
        email: form.email,
        phone: form.phone,
        address: form.address,
        zip: form.zip,
        city: form.city,
        country: form.country,
        paymentMethod: form.paymentMethod,
        emoneyNumber: form.emoneyNumber,
        emoneyPin: form.emoneyPin,
        items: cart.map((item) => ({
          productId: item._id,
          name: item.name,
          price: item.price,
          quantity: item.quantity,
        })),
        totalAmount: total,
        shippingFee,
        vat,
        grandTotal,
      })

      // await clearCart()
      setShowSuccess(true)
    } catch (err) {
      console.error(err)
      alert('❌ Something went wrong. Please try again.')
    }
  }

  return (
    <section>
      <div className="bg-white shadow-lg w-full max-w-sm p-6 z-50 mt-20 mr-10">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-bold">Cart ({cart.length})</h2>
          <button onClick={() => clearCart()} className="text-[#D87D4A] text-sm">
            Remove all
          </button>
        </div>

        {cart.length === 0 ? (
          <p className="text-center text-gray-500">Your cart is empty.</p>
        ) : (
          <ul className="space-y-3">
            {cart.map((item) => (
              <li key={item._id} className="flex items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <Image
                    src={item.image}
                    alt={item.name}
                    width={50}
                    height={50}
                    className="rounded-md"
                  />
                  <div>
                    <p className="font-bold text-sm">{item.name}</p>
                    <p className="text-sm text-gray-500">${item.price}</p>
                  </div>
                </div>
                <div>x{item.quantity}</div>
              </li>
            ))}
          </ul>
        )}

        {/* Summary */}
        <div className="flex justify-between mt-6">
          <small>Total</small>
          <p className="font-bold text-lg">${total}</p>
        </div>
        <div className="flex justify-between mt-3">
          <small>Shipping</small>
          <p className="font-bold text-lg">${shippingFee}</p>
        </div>
        <div className="flex justify-between mt-3">
          <small>VAT</small>
          <p className="font-bold text-lg">${vat}</p>
        </div>
        <div className="flex justify-between mt-3">
          <small>Grand Total</small>
          <p className="font-bold text-lg">${grandTotal}</p>
        </div>

        <Button
          className="w-full mt-6 bg-[#D87D4A] rounded-none hover:bg-[#FBAF85] text-white"
          onClick={handleCheckout}
        >
          Continue & Pay
        </Button>
      </div>

      {showSuccess && <SuccessModal onClose={() => setShowSuccess(false)} />}
    </section>
  )
}
// 'use client'

// import { useQuery, useMutation } from 'convex/react'
// import { api } from '../../convex/_generated/api'
// import Image from 'next/image'
// import { Button } from '@/components/ui/button'
// import { useRouter } from 'next/navigation'
// 'use client'

// import { useQuery, useMutation } from 'convex/react'
// import { api } from '../../convex/_generated/api'
// import Image from 'next/image'
// import { Button } from '@/components/ui/button'
// import { useRouter } from 'next/navigation'
// import SuccessModal from './SuccessModal';
// // import { useState } from 'react'


// export default function CheckoutModal({ form }) {
//   const router = useRouter()

//   // Fetch cart items
//   const cart = useQuery(api.cart.getCart)
//   const clearCart = useMutation(api.cart.clearCart)
//   const createCheckout = useMutation(api.checkout.createCheckout)

//   if (!cart) return <p>Loading...</p>

//   const [showSuccess, setShowSuccess] = useState(false);
//   const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0)
//   const shippingFee = 50
//   const vat = total * 0.2
//   const grandTotal = total + shippingFee + vat

//   const isEmailValid = form.email && form.email.includes('@')

//   const handleCheckout = async () => {
//     // Validate form fields
//     if (
//       !form.name ||
//       !form.email ||
//       !form.phone ||
//       !form.address ||
//       !form.zip ||
//       !form.city ||
//       !form.country
//     ) {
//       alert('Please fill all required fields!')
//       return
//     }

//     if (!isEmailValid) {
//       alert('Please enter a valid email!')
//       return
//     }

//     try {
//       // Save order + user details to Convex
//       await createCheckout({
//         name: form.name,
//         email: form.email,
//         phone: form.phone,
//         address: form.address,
//         zip: form.zip,
//         city: form.city,
//         country: form.country,
//         paymentMethod: form.paymentMethod,
//         emoneyNumber: form.emoneyNumber,
//         emoneyPin: form.emoneyPin,
//         items: cart.map((item) => ({
//           productId: item._id,
//           name: item.name,
//           price: item.price,
//           quantity: item.quantity,
//         })),
//         totalAmount: total,
//         shippingFee,
//         vat,
//         grandTotal,
//       })

//       // Clear the cart after successful checkout
//     //   await clearCart()
   
   
//    setShowSuccess(true);
//       // Navigate to success page
//     //   router.push('/SuccessModal')
//     } catch (err) {
//       console.error(err)
//       alert('❌ Something went wrong. Please try again.')
//     }
//   }

//   return (

//     <section>

//     <div className="bg-white shadow-lg w-full max-w-sm p-6 z-50 mt-20 mr-10">
//       <div className="flex justify-between items-center mb-4">
//         <h2 className="text-lg font-bold">Cart ({cart.length})</h2>
//         <button onClick={() => clearCart()} className="text-[#D87D4A] text-sm">
//           Remove all
//         </button>
//       </div>

//       {cart.length === 0 ? (
//         <p className="text-center text-gray-500">Your cart is empty.</p>
//       ) : (
//         <ul className="space-y-3">
//           {cart.map((item) => (
//             <li key={item._id} className="flex items-center justify-between gap-4">
//               <div className="flex items-center gap-3">
//                 <Image
//                   src={item.image}
//                   alt={item.name}
//                   width={50}
//                   height={50}
//                   className="rounded-md"
//                 />
//                 <div>
//                   <p className="font-bold text-sm">{item.name}</p>
//                   <p className="text-sm text-gray-500">${item.price}</p>
//                 </div>
//               </div>
//               <div>x{item.quantity}</div>
//             </li>
//           ))}
//         </ul>
//       )}

//       {/* Summary */}
//       <div className="flex justify-between mt-6">
//         <small>Total</small>
//         <p className="font-bold text-lg">${total}</p>
//       </div>
//       <div className="flex justify-between mt-3">
//         <small>Shipping</small>
//         <p className="font-bold text-lg">${shippingFee}</p>
//       </div>
//       <div className="flex justify-between mt-3">
//         <small>VAT</small>
//         <p className="font-bold text-lg">${vat}</p>
//       </div>
//       <div className="flex justify-between mt-3">
//         <small>Grand Total</small>
//         <p className="font-bold text-lg">${grandTotal}</p>
//       </div>

//       {/* Checkout Button */}
//       <Button
//         className="w-full mt-6 bg-[#D87D4A] rounded-none hover:bg-[#FBAF85] text-white"
//         onClick={handleCheckout}
//       >
//         Continue & Pay
//       </Button>
//     </div>
//      {showSuccess && <SuccessModal onClose={() => setShowSuccess(false)} />}
//     </section>
//   )
// } 
// import { useState } from 'react'


// export default function CheckoutModal({ form }) {
//   const router = useRouter()

//   // Fetch cart items
//   const cart = useQuery(api.cart.getCart)
//   const clearCart = useMutation(api.cart.clearCart)
//   const createCheckout = useMutation(api.checkout.createCheckout)

//   if (!cart) return <p>Loading...</p>

//   const [showSuccess, setShowSuccess] = useState(false);
//   const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0)
//   const shippingFee = 50
//   const vat = total * 0.2
//   const grandTotal = total + shippingFee + vat

//   const isEmailValid = form.email && form.email.includes('@')

//   const handleCheckout = async () => {
//     // Validate form fields
//     if (
//       !form.name ||
//       !form.email ||
//       !form.phone ||
//       !form.address ||
//       !form.zip ||
//       !form.city ||
//       !form.country
//     ) {
//       alert('Please fill all required fields!')
//       return
//     }

//     if (!isEmailValid) {
//       alert('Please enter a valid email!')
//       return
//     }

//     try {
//       // Save order + user details to Convex
//       await createCheckout({
//         name: form.name,
//         email: form.email,
//         phone: form.phone,
//         address: form.address,
//         zip: form.zip,
//         city: form.city,
//         country: form.country,
//         paymentMethod: form.paymentMethod,
//         emoneyNumber: form.emoneyNumber,
//         emoneyPin: form.emoneyPin,
//         items: cart.map((item) => ({
//           productId: item._id,
//           name: item.name,
//           price: item.price,
//           quantity: item.quantity,
//         })),
//         totalAmount: total,
//         shippingFee,
//         vat,
//         grandTotal,
//       })

//       // Clear the cart after successful checkout
//     //   await clearCart()
   
   
//    setShowSuccess(true);
//       // Navigate to success page
//     //   router.push('/SuccessModal')
//     } catch (err) {
//       console.error(err)
//       alert('❌ Something went wrong. Please try again.')
//     }
//   }

//   return (

//     <section>

//     <div className="bg-white shadow-lg w-full max-w-sm p-6 z-50 mt-20 mr-10">
//       <div className="flex justify-between items-center mb-4">
//         <h2 className="text-lg font-bold">Cart ({cart.length})</h2>
//         <button onClick={() => clearCart()} className="text-[#D87D4A] text-sm">
//           Remove all
//         </button>
//       </div>

//       {cart.length === 0 ? (
//         <p className="text-center text-gray-500">Your cart is empty.</p>
//       ) : (
//         <ul className="space-y-3">
//           {cart.map((item) => (
//             <li key={item._id} className="flex items-center justify-between gap-4">
//               <div className="flex items-center gap-3">
//                 <Image
//                   src={item.image}
//                   alt={item.name}
//                   width={50}
//                   height={50}
//                   className="rounded-md"
//                 />
//                 <div>
//                   <p className="font-bold text-sm">{item.name}</p>
//                   <p className="text-sm text-gray-500">${item.price}</p>
//                 </div>
//               </div>
//               <div>x{item.quantity}</div>
//             </li>
//           ))}
//         </ul>
//       )}

//       {/* Summary */}
//       <div className="flex justify-between mt-6">
//         <small>Total</small>
//         <p className="font-bold text-lg">${total}</p>
//       </div>
//       <div className="flex justify-between mt-3">
//         <small>Shipping</small>
//         <p className="font-bold text-lg">${shippingFee}</p>
//       </div>
//       <div className="flex justify-between mt-3">
//         <small>VAT</small>
//         <p className="font-bold text-lg">${vat}</p>
//       </div>
//       <div className="flex justify-between mt-3">
//         <small>Grand Total</small>
//         <p className="font-bold text-lg">${grandTotal}</p>
//       </div>

//       {/* Checkout Button */}
//       <Button
//         className="w-full mt-6 bg-[#D87D4A] rounded-none hover:bg-[#FBAF85] text-white"
//         onClick={handleCheckout}
//       >
//         Continue & Pay
//       </Button>
//     </div>
//      {showSuccess && <Success onClose={() => setShowSuccess(false)} />}
//     </section>
//   )
// }