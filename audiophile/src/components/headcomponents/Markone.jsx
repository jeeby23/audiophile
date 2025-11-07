import ProductFeature from '@/components/ProductFeature'

export default function HomePage() {
  return (
    <>
      

      {/* Example of reversed layout */}
      <ProductFeature
        imageSrc="/headone.jpg"
        imageAlt="XX99 Mark I Headphones"
        title="XX99 Mark I Headphones"
        description="As the gold standard for headphones, the classic XX99 Mark I offers detailed and accurate audio reproduction for audiophiles, mixing engineers, and music aficionados alike in studios and on the go."
        href="/headdetailestwo"
        reverse={true}
      />
    </>
  )
}



