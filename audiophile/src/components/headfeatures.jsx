export default function HeadFeatures({
  title = 'FEATURES',
  description,
  descriptionone,
  boxItems = [],
}) {
  return (
    <section className="lg:max-w-[1440px] lg:min-h-[318px] sm:py-[120px] lg:py-40">
      <div className="flex flex-col lg:flex-row sm:flex-col items-start lg:gap-[125px]">
        <div className="lg:w-[635px] lg:h-[318px]">
          <h1 className="font-manrope font-bold text-[32px] leading-9 tracking-[1.14px] uppercase py-8">
            {title}
          </h1>
          <p className="font-manrope font-normal text-[15px] leading-[25px] opacity-50">
            {description}
          </p>
          <p className="font-manrope font-normal text-[15px] leading-[25px] opacity-50 pb-20 sm:pb-40">
            {descriptionone}
          </p>
        </div>

        <div className="space-y-8 lg:w-[350px] lg:h-[225px]">
          <h1 className="font-manrope font-bold text-[32px] leading-9 tracking-[1.14px] uppercase pb-8">
            In the Box
          </h1>
          <ul className="space-y-4 list-none ">
            {boxItems.map((item, index) => (
              <li key={index} className="font-manrope text-[15px] leading-[25px] opacity-50 sm:">
                <span className="text-[#D87D4A] font-bold font-manrope text-[15px] leading-[25px] tracking-[0px] px-3   sm:ml-auto">
                  {item.qty}x
                </span>{' '}
                {item.name}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
