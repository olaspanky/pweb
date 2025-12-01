// 'use client';

// import Navigation from "@/components/Navigation";
// import Button from "@/components/Button";
// import Image from "next/image";
// import useEmblaCarousel from "embla-carousel-react";
// import Autoplay from "embla-carousel-autoplay";
// import { useEffect, useState, useCallback } from "react";

// import HeroImage1 from "@/assets/images/ab1.png";
// import HeroImage2 from "@/assets/images/ab2.png";
// import HeroImage3 from "@/assets/images/ab3.png";
// import HeroImage4 from "@/assets/images/ab4.png";
// import HeroImage5 from "@/assets/images/ab5.png";

// const slides = [
//   {
//     image: HeroImage5,
//     title: (
//       <>
//         Empowering <span className="text-brand-green">Healthcare</span> Success in{" "}
//         <span className="text-brand-gold">Emerging Markets</span>
//       </>
//     ),
//     subtitle: "For healthcare organizations seeking to succeed in emerging markets, PBR Life Sciences is the intelligent data partner that transforms complex healthcare dynamics into actionable insights through AI-powered analytics and deep market understanding. Unlike traditional data providers, we combine multivariate real-world data with advanced technology to reveal unprecedented opportunities for growth and impact.",
//   },
//   {
//     image: HeroImage1,
//     title: (
//       <>
//        To Pioneer the Future of <span className="text-brand-green">Healthcare Intelligence </span> – Transforming Data into Global Impact Across <span className="text-brand-gold">Emerging Markets</span>
//       </>
//     ),
//     subtitle: "To be the world's foremost AI-powered healthcare intelligence company, pioneering data transformation across emerging markets." ,
//   },
//   {
//     image: HeroImage2,
//     title: (
//       <>
//         Advancing <span className="text-brand-green">Global Healthcare </span> With Insight and  <span className="text-brand-gold">Intelligence</span> 
       
//       </>
//     ),
//     subtitle: "To transform global healthcare through intelligent data, creating equal access to better health decisions worldwide.",
//   },
//   {
//     image: HeroImage3,
//     title: (
//       <> 
//        Our <span className="text-brand-green">Commitment</span>{" "} to  <span className="text-brand-gold">Excellence</span> and Integrity 
//       </>
//     ),
//     subtitle: (
//       <ul className="space-y-2 text-grey-0/90 leading-relaxed">
//         {[
//           "Innovation: Finding solutions to complex problems",
//           "Excellence: Delivering outstanding work that exceeds expectations",
//           "Customer-centricity: Creating what truly helps customers succeed",
//           "Integrity: Being truthful and transparent in all actions",
//           "Global perspective: Bringing world-class standards to every market",
//           "Respect for people culture and environment: Embracing diversity, honoring local traditions, and ensuring sustainable practices",
//         ].map((item, idx) => (
//           <li key={idx} className="flex items-start">
//             <span className="mr-2">•</span>
//             <span>{item.split(":")[0]}:</span>
//             <span className="font-light ml-1">{item.split(":").slice(1).join(":")}</span>
//           </li>
//         ))}
//       </ul>
//     )},
//   {
//     image: HeroImage4,
//     title: (
//       <>
//         Powering <spam className="text-brand-green">Strategic Advantage</spam> Through <span className="text-brand-gold">Intelligent Data</span> 
//       </>
//     ),
//     subtitle: "At PBR Life Sciences, we bridge the gap between data and decisive action. Our suite of proprietary platforms and expert consulting services transforms complex emerging market healthcare landscapes into clear, actionable strategies. Grounded in local realities and built on a global standard of excellence, we provide the clarity you need to win in dynamic markets.",
//   },
// ];

// export default function HeroSection() {
//   const [emblaRef, emblaApi] = useEmblaCarousel(
//     { loop: true },
//     [Autoplay({ delay: 5000, stopOnInteraction: false })]
//   );

//   const [selectedIndex, setSelectedIndex] = useState(0);

//   const onSelect = useCallback(() => {
//     if (!emblaApi) return;
//     setSelectedIndex(emblaApi.selectedScrollSnap());
//   }, [emblaApi]);

//   useEffect(() => {
//     if (!emblaApi) return;
//     onSelect();
//     emblaApi.on("select", onSelect);
//     return () => emblaApi.off("select", onSelect);
//   }, [emblaApi, onSelect]);

//   return (
//     <header className="relative pb-48 overflow-hidden">
//       {/* Background Slider */}
//       <div className="absolute inset-0 -z-10">
//         <div className="embla h-full w-full" ref={emblaRef}>
//           <div className="embla__container flex h-full">
//             {slides.map((slide, index) => (
//               <div
//                 className="embla__slide relative flex-[0_0_100%] min-w-0"
//                 key={index}
//               >
//                 <Image
//                   src={slide.image}
//                   fill
//                   alt={`Hero slide ${index + 1}`}
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

//       {/* Navigation */}
//       <div className="relative z-50">
//         <Navigation className="" />
//       </div>

//       {/* Dynamic Hero Content */}
//       <div className="relative z-20 max-w-[1440px] px-18 mx-auto flex flex-col items-start justify-center gap-8 pt-16 2xl:pt-32">
       
//         <h1 className="text-grey-0 uppercase text-5xl lg:text-[xl] w-full md:w-[80%] font-medium leading-tight animate-fade-in">
//           {slides[selectedIndex].title}
//         </h1>

//         <p className="text-xl md:text-[lg] text-grey-0 max-w-2xl animate-fade-in delay-150">
//           {slides[selectedIndex].subtitle}
//         </p>

       

//         {/* Active Dots */}
//         <div className="flex items-center gap-4 mt-16">
//           {slides.map((_, index) => (
//             <button
//               key={index}
//               onClick={() => emblaApi?.scrollTo(index)}
//               className={`relative h-3 w-3 md:h-4 md:w-4 rounded-full overflow-hidden transition-all ${
//                 index === selectedIndex
//                   ? "bg-grey-0"
//                   : "bg-grey-0/40 hover:bg-grey-0/70"
//               }`}
//               aria-label={`Go to slide ${index + 1}`}
//             >
//               {index === selectedIndex && (
//                 <span className="absolute inset-0 bg-brand-blue animate-progress" />
//               )}
//             </button>
//           ))}
//         </div>
//       </div>

//       {/* Tiny fade-in + progress animation */}
//       <style jsx>{`
//         @keyframes fade-in {
//           from {
//             opacity: 0;
//             transform: translateY(20px);
//           }
//           to {
//             opacity: 1;
//             transform: translateY(0);
//           }
//         }
//         .animate-fade-in {
//           animation: fade-in 0.8s ease-out forwards;
//         }
//         .delay-150 {
//           animation-delay: 0.15s;
//         }
//         @keyframes progress {
//           from {
//             transform: scaleX(0);
//           }
//           to {
//             transform: scaleX(1);
//           }
//         }
//         .animate-progress {
//           transform-origin: left;
//           animation: progress 5s linear forwards;
//         }
//       `}</style>
//     </header>
//   );
// }

'use client';

import Navigation from "@/components/Navigation";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { useEffect, useState, useCallback } from "react";

import HeroImage1 from "@/assets/images/ab1.png";
import HeroImage2 from "@/assets/images/ab2.png";
import HeroImage3 from "@/assets/images/ab3.png";
import HeroImage4 from "@/assets/images/ab4.png";
import HeroImage5 from "@/assets/images/ab5.png";

const slides = [
  {
    image: HeroImage5,
    title: (
      <>
        Empowering <span className="text-brand-green">Healthcare</span> Success in{" "}
        <span className="text-brand-gold">Emerging Markets</span>
      </>
    ),
    subtitle: "For healthcare organizations seeking to succeed in emerging markets, PBR Life Sciences is the intelligent data partner that transforms complex healthcare dynamics into actionable insights through AI-powered analytics and deep market understanding. Unlike traditional data providers, we combine multivariate real-world data with advanced technology to reveal unprecedented opportunities for growth and impact.",
  },
  {
    image: HeroImage1,
    title: (
      <>
       To Pioneer the Future of <span className="text-brand-green">Healthcare Intelligence </span> – Transforming Data into Global Impact Across <span className="text-brand-gold">Emerging Markets</span>
      </>
    ),
    subtitle: "To be the world's foremost AI-powered healthcare intelligence company, pioneering data transformation across emerging markets." ,
  },
  {
    image: HeroImage2,
    title: (
      <>
        Advancing <span className="text-brand-green">Global Healthcare </span> With Insight and  <span className="text-brand-gold">Intelligence</span> 
       
      </>
    ),
    subtitle: "To transform global healthcare through intelligent data, creating equal access to better health decisions worldwide.",
  },
  {
    image: HeroImage3,
    title: (
      <> 
       Our <span className="text-brand-green">Commitment</span>{" "} to  <span className="text-brand-gold">Excellence</span> and Integrity 
      </>
    ),
    subtitle: (
      <ul className="space-y-2 text-grey-0/90 leading-relaxed">
        {[
          "Innovation: Finding solutions to complex problems",
          "Excellence: Delivering outstanding work that exceeds expectations",
          "Customer-centricity: Creating what truly helps customers succeed",
          "Integrity: Being truthful and transparent in all actions",
          "Global perspective: Bringing world-class standards to every market",
          "Respect for people culture and environment: Embracing diversity, honoring local traditions, and ensuring sustainable practices",
        ].map((item, idx) => (
          <li key={idx} className="flex items-start">
            <span className="mr-2">•</span>
            <span>{item.split(":")[0]}:</span>
            <span className="font-light ml-1">{item.split(":").slice(1).join(":")}</span>
          </li>
        ))}
      </ul>
    )},
  {
    image: HeroImage4,
    title: (
      <>
        Powering <spam className="text-brand-green">Strategic Advantage</spam> Through <span className="text-brand-gold">Intelligent Data</span> 
      </>
    ),
    subtitle: "At PBR Life Sciences, we bridge the gap between data and decisive action. Our suite of proprietary platforms and expert consulting services transforms complex emerging market healthcare landscapes into clear, actionable strategies. Grounded in local realities and built on a global standard of excellence, we provide the clarity you need to win in dynamic markets.",
  },
];

export default function HeroSection() {
const [emblaRef, emblaApi] = useEmblaCarousel(
{ loop: true },
[Autoplay({ delay: 5000, stopOnInteraction: false })]
);

const [selectedIndex, setSelectedIndex] = useState(0);

const onSelect = useCallback(() => {
if (!emblaApi) return;
setSelectedIndex(emblaApi.selectedScrollSnap());
}, [emblaApi]);

useEffect(() => {
if (!emblaApi) return;
onSelect();
emblaApi.on("select", onSelect);
return () => emblaApi.off("select", onSelect);
}, [emblaApi, onSelect]);

return ( <header className="relative min-h-screen overflow-hidden">
{/* Background Slider */} <div className="absolute inset-0 -z-10"> <div className="embla h-full w-full" ref={emblaRef}> <div className="embla__container flex h-full">
{slides.map((slide, index) => ( <div
             className="embla__slide relative flex-[0_0_100%] min-w-0"
             key={index}
           >
<Image
src={slide.image}
fill
alt={`Hero slide ${index + 1}`}
className="object-cover object-center"
priority={index === 0}
placeholder="blur"
/> </div>
))} </div> </div> <div className="absolute inset-0 bg-gradient-to-r from-brand-dark-blue via-brand-blue/80 to-brand-light-blue/10" /> </div>

```
  {/* Navigation */}
  <div className="relative z-50">
    <Navigation />
  </div>

  {/* Dynamic Hero Content */}
  <div className="relative z-20 max-w-[1440px] px-6 sm:px-12 md:px-16 lg:px-20 mx-auto flex flex-col items-start justify-center gap-6 md:gap-8 pt-12 md:pt-16 lg:pt-32">
    <h1 className="text-grey-0 uppercase text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium leading-snug md:leading-tight animate-fade-in w-full md:w-[85%]">
      {slides[selectedIndex].title}
    </h1>

    <p className="text-grey-0 text-base sm:text-lg md:text-xl max-w-full md:max-w-2xl animate-fade-in delay-150">
      {slides[selectedIndex].subtitle}
    </p>

    {/* If the slide content has a list */}
    {typeof slides[selectedIndex].subtitle === "object" && (
      <ul className="mt-4 md:mt-6 space-y-2 text-grey-0 text-sm sm:text-base md:text-lg max-w-2xl">
        {slides[selectedIndex].subtitle.props.children.map((item, idx) => (
          <li key={idx} className="flex items-start gap-2">
            <span className="text-brand-green font-bold">•</span>
            <span className="font-medium">{item}</span>
          </li>
        ))}
      </ul>
    )}

    {/* Active Dots */}
    <div className="flex items-center gap-3 md:gap-4 mt-8 md:mt-12">
      {slides.map((_, index) => (
        <button
          key={index}
          onClick={() => emblaApi?.scrollTo(index)}
          className={`relative h-2.5 w-2.5 md:h-4 md:w-4 rounded-full overflow-hidden transition-all ${
            index === selectedIndex
              ? "bg-grey-0"
              : "bg-grey-0/40 hover:bg-grey-0/70"
          }`}
          aria-label={`Go to slide ${index + 1}`}
        >
          {index === selectedIndex && (
            <span className="absolute inset-0 bg-brand-blue animate-progress" />
          )}
        </button>
      ))}
    </div>
  </div>

  <style jsx>{`
    @keyframes fade-in {
      from {
        opacity: 0;
        transform: translateY(20px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }
    .animate-fade-in {
      animation: fade-in 0.8s ease-out forwards;
    }
    .delay-150 {
      animation-delay: 0.15s;
    }
    @keyframes progress {
      from {
        transform: scaleX(0);
      }
      to {
        transform: scaleX(1);
      }
    }
    .animate-progress {
      transform-origin: left;
      animation: progress 5s linear forwards;
    }
  `}</style>
</header>


);
}
