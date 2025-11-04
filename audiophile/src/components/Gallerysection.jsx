import Image from "next/image";

export default function GallerySection({ images }) {
  return (
    <section className="lg:max-w-[1110px] lg:min-h-[592px] pt-30 lg:pt-40 pb-40 mx-auto">
      <div className="flex flex-col sm:flex-row gap-[30px]">
        <div className="flex flex-col gap-8">
          <div>
            <Image
              src={images[0]}
              alt="gallery-image-1"
              width={445}
              height={280}
              className="cursor-pointer"
            />
          </div>
          <div>
            <Image
              src={images[1]}
              alt="gallery-image-2"
              width={445}
              height={280}
              className="cursor-pointer"
            />
          </div>
        </div>

        <div>
          <Image
            src={images[2]}
            alt="gallery-image-3"
            width={635}
            height={592}
            className="cursor-pointer"
          />
        </div>
      </div>
    </section>
  );
}

//  <section className="lg:max-w-[1110px] lg:min-h-[592px] pt-30 lg:pt-40 pb-40">
//           <div>
//             <div className="flex flex-col sm:flex-row gap-[30px]">
//               <div
//                 className="
//               flex flex-col gap-8 "
//               >
//                 <div>
//                   <Image
//                     src="/galleryone.jpg"
//                     alt="gallery-headphone"
//                     width={445}
//                     height={280}
//                     className="cursor-pointer"
//                   />
//                 </div>
//                 <div>
//                   <Image
//                     src="/gallerytwo.jpg"
//                     alt="gallery-headphone"
//                     width={445}
//                     height={280}
//                     className="cursor-pointer"
//                   />
//                 </div>
//               </div>
//               <div>
//                 <Image
//                   src="/gallerythree.jpg"
//                   alt="gallery-headphone"
//                   width={635}
//                   height={592}
//                   className="cursor-pointer"
//                 />
//               </div>
//             </div>
//           </div>
//         </section>