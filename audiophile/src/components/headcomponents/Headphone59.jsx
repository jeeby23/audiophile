import ProductFeature from '@/components/ProductFeature'

export default function HomePage() {
  return (
    <>
      <ProductFeature
        imageSrc="/headk1.jpg"
        imageAlt="XX59 Headphones"
        title="XX99 Mark II Headphones"
        description=" Enjoy your audio almost anywhere and customize it to your specific tastes with the XX59 headphones. The stylish yet durable versatile wireless headset is a brilliant companion at home or on the move."
        href="/headdetailsxx5"
        isNew={true}
      />

    </>
  )
}

