import ProductFeature from '@/components/ProductFeature'

export default function HomePage() {
  return (
    <>
      <ProductFeature
        imageSrc="/ear.jpg"
        imageAlt="  YX1 WIRELESS EARPHONES"
        title="  YX1 WIRELESS EARPHONES"
        description=" Tailor your listening experience with bespoke dynamic drivers from the new YX1 Wireless Earphones. Enjoy incredible high-fidelity sound even in noisy environments with its active noise cancellation feature."
        href="/earphones1"
        isNew={true}
      />

    </>
  )
}

