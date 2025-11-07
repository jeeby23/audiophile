'use client'

import Container from '../components/Container'
import CategoryCard from '../components/CategoryCard'

export default function CategoryList() {
  return (
    <section className="mt-10 sm:mt-24 lg:mt-[120px] w-full  ">
        <Container>
        <div className="flex flex-col sm:flex-row lg:flex-row items-center sm:items-stretch justify-start gap-10 sm:gap-4 lg:gap-[30px] z-10">
          <CategoryCard title="Headphones" imageSrc="/minimic.png" href="/headdetailestwo"  />
          <CategoryCard title="Speakers" imageSrc="/preview.png" href="/speaker1" />
          <CategoryCard title="Earphones" imageSrc="/Group5.png" href="/earphones1" />
        </div>
    </Container>
      </section>
  )
}