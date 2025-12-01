'use client';

import Image from "next/image";

const logos = [
  { src: "/logos/xa-africa.png",      width: 110 },
  { src: "/logos/techstars.png",      width: 110 },
  { src: "/logos/octerra.png",        width: 120 },
  { src: "/logos/microtraction.png",  width: 90 },
  { src: "/logos/microsoft.png",      width: 150 },
  { src: "/logos/marula.png",         width: 70 },
  { src: "/logos/launch-africa.png",  width: 100 },
  { src: "/logos/aws.png",            width: 70 },
];

export default function BackedBy() {
  return (
    <div>
      {/* Header — 100% unchanged */}
      <div className="py-6 bg-gradient-to-r from-brand-dark-blue via-brand-blue/90 to-brand-light-blue/30">
        <p className="text-grey-0 text-center text-2xl font-semibold">
          We are backed by
        </p>
      </div>

      {/* Scrolling logos — same spacing as your original */}
      <div className="overflow-hidden">
        <div className="py-6 animate-marquee whitespace-nowrap">
          <div className="inline-flex items-center gap-32 px-18">
            {/* First set */}
            {logos.map((logo, i) => (
              <Image
                key={i}
                src={logo.src}
                alt="Backed by"
                width={150}
                height={70}
                className={`flex-shrink-0 w-[${logo.width}px]`}
              />
            ))}

            {/* Repeated set for seamless loop */}
            {logos.map((logo, i) => (
              <Image
                key={i + logos.length}
                src={logo.src}
                alt="Backed by"
                width={150}
                height={70}
                className={`flex-shrink-0 w-[${logo.width}px] ml-6`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Pure CSS marquee — no pause, infinite */}
      <style jsx>{`
        @keyframes marquee {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          display: inline-block;
          animation: marquee 35s linear infinite;
        }
      `}</style>
    </div>
  );
}