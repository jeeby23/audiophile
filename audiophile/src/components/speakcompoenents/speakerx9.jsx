import ProductFeature from '@/components/ProductFeature'

export default function HomePage() {
  return (
    <>
      <ProductFeature
        imageSrc="/zx9speaker.jpg"
        imageAlt=" ZX9 SPEAKER"
        title=" ZX9 SPEAKER"
        description=" Upgrade your sound system with the all new ZX9 active speaker. It’s a bookshelf speaker system that offers truly wireless connectivity -- creating new possibilities for more pleasing and practical audio setups."
        href="/speaker1"
        isNew={true}
      />

    </>
  )
}
