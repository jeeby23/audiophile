import ProductFeature from '@/components/ProductFeature'

export default function HomePage() {
  return (
    <>
      <ProductFeature
        imageSrc="/head2.jpg"
        imageAlt="XX99 Mark II Headphones"
        title="XX99 Mark II Headphones"
        description="The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound."
        href="/headphonedeatils"
        isNew={true}
      />

    </>
  )
}

