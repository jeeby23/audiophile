import ProductFeature from '@/components/ProductFeature'

export default function HomePage() {
  return (
    <>
      
      <ProductFeature
        imageSrc="/zx7speaker.jpg"
        imageAlt=" ZX7 SPEAKER"
        title="XX99 Mark I Headphones"
        description="Stream high quality sound wirelessly with minimal loss. The ZX7 bookshelf speaker uses
         high-end audiophile components that represents the top of the line powered speakers for           home or studio use."
        href="/speaker2"
        reverse={true}
      />
    </>
  )
}


