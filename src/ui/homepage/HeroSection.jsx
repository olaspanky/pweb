// 'use client';

// import Navigation from "@/components/Navigation";
// import Button from "@/components/Button";
// import Image from "next/image";
// import useEmblaCarousel from "embla-carousel-react";
// import Autoplay from "embla-carousel-autoplay";
// import { useCallback } from "react";

// import HeroImage1 from "@/assets/images/hero-1.jpg";
// import HeroImage2 from "@/assets/images/hero-2.png";


// const heroImages = [HeroImage1, HeroImage2];

// export default function HeroSection() {
//   const [emblaRef, emblaApi] = useEmblaCarousel(
//     { loop: true },
//     [Autoplay({ delay: 5000, stopOnInteraction: false })]
//   );

//   return (
//     <header className="relative pb-48 overflow-hidden">
//       {/* Background Slider - stays behind everything */}
//       <div className="absolute inset-0 -z-10">
//         <div className="embla h-full w-full" ref={emblaRef}>
//           <div className="embla__container flex h-full">
//             {heroImages.map((image, index) => (
//               <div className="embla__slide relative flex-[0_0_100%] min-w-0" key={index}>
//                 <Image
//                   src={image}
//                   fill
//                   alt={`Hero background ${index + 1}`}
//                   className="object-cover object-top"
//                   priority={index === 0}
//                   placeholder="blur"
//                 />
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Gradient Overlay */}
//         <div className="absolute inset-0 bg-gradient-to-r from-brand-dark-blue via-brand-blue/80 to-brand-light-blue/10" />
//       </div>

//       {/* Navigation - now properly on top */}
//       <div className="relative z-50">
//         <Navigation className="" />
//       </div>

//       {/* Hero Content */}
//       <div className="relative z-20 max-w-[1440px] px-18 mx-auto flex flex-col items-start justify-center gap-8 pt-16 2xl:pt-32">
//         <h1 className="text-grey-0 uppercase text-5xl lg:text-[xl] w-full md:w-[80%] font-medium leading-tight animate-fade-in">
//           Transforming <span className="text-brand-green">Healthcare</span> In
//           Emerging Markets Through{" "}
//           <span className="text-brand-gold">Intelligent Data</span>
//         </h1>

//         <p className="text-xl md:text-[lg] text-grey-0 max-w-2xl animate-fade-in delay-150">
//           Unlocking Insights to Improve Access, Efficiency, and Outcomes
//         </p>

//         <Button content={{ to: "/", label: "Learn More" }} className="uppercase" />

//         {/* Slider Dots */}
        // <div className="flex items-center gap-4 mt-16">
        //   {heroImages.map((_, index) => (
        //     <button
        //       key={index}
        //       onClick={() => emblaApi?.scrollTo(index)}
        //       className="group relative h-3 w-3 md:h-4 md:w-4 rounded-full bg-grey-0/40 overflow-hidden transition-all hover:bg-grey-0/70"
        //       aria-label={`Go to slide ${index + 1}`}
        //     >
        //       <span className="absolute inset-0 bg-brand-blue origin-left scale-x-0 transition-transform duration-5000 group-[.active]:scale-x-100" />
        //     </button>
        //   ))}
        // </div>
//       </div>
//     </header>
//   );
// }

"use client";

import Navigation from "@/components/Navigation";
import Button from "@/components/Button";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

import HeroImage1 from "@/assets/images/hero-1.jpg";
import HeroImage2 from "@/assets/images/hero-2.png";

const heroImages = [HeroImage1, HeroImage2];

export default function HeroSection() {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true },
    [Autoplay({ delay: 5000, stopOnInteraction: false })]
  );

  return (
    <header className="relative w-full h-screen overflow-hidden">
      {/* Background Slider */}
      <div className="absolute inset-0 -z-10 h-full">
        <div className="embla h-full w-full" ref={emblaRef}>
          <div className="embla__container flex h-full">
            {heroImages.map((image, index) => (
              <div
                key={index}
                className="embla__slide relative flex-[0_0_100%] h-full"
              >
                <Image
                  src={image}
                  fill
                  alt={`Hero background ${index + 1}`}
                  className="object-cover object-center"
                  priority={index === 0}
                  placeholder="blur"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-brand-dark-blue via-brand-blue/70 to-brand-light-blue/10" />
      </div>

      {/* Navigation */}
      <div className="relative z-50">
        <Navigation />
      </div>

      {/* Hero Content */}
      <div className="relative z-20 max-w-[1440px] px-6 lg:px-18 mx-auto h-full flex flex-col justify-center gap-6 md:gap-8">
        <h1 className="text-grey-0 uppercase text-3xl sm:text-5xl lg:text-6xl w-full sm:w-[85%] md:w-[70%] font-medium leading-tight">
          Transforming{" "}
          <span className="text-brand-green">Healthcare</span> In Emerging
          Markets Through{" "}
          <span className="text-brand-gold">Intelligent Data</span>
        </h1>

        <p className="text-base sm:text-lg md:text-xl text-grey-0 max-w-2xl">
          Unlocking Insights to Improve Access, Efficiency, and Outcomes
        </p>

<Button content={{ to: "/", label: "Learn More" }} className="uppercase w-48" />
        {/* Slider Dots */}
        <div className="flex items-center gap-4 mt-16">
          {heroImages.map((_, index) => (
            <button
              key={index}
              onClick={() => emblaApi?.scrollTo(index)}
              className="group relative h-3 w-3 md:h-4 md:w-4 rounded-full bg-grey-0/40 overflow-hidden transition-all hover:bg-grey-0/70"
              aria-label={`Go to slide ${index + 1}`}
            >
              <span className="absolute inset-0 bg-brand-blue origin-left scale-x-0 transition-transform duration-5000 group-[.active]:scale-x-100" />
            </button>
          ))}
        </div>
      </div>
    </header>
  );
}
