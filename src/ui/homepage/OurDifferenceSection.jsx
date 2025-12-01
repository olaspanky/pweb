import Image from "next/image";
import image from "@/assets/images/difference.jpg";
import H2 from "@/components/Typography";
import Button from "@/components/Button";

export default function OurDifferenceSection() {
  return (
    <section id="difference" className="py-20">
      <div className="flex flex-col lg:grid grid-cols-2 gap-12 max-w-[1440px] p-3 lg:px-18 mx-auto">
        <figure className="rounded-xl overflow-hidden relative w-full">
  <Image
    src={image}
    alt="Man pointing to statistics"
    width={1200}
    height={600}
    className="w-full h-[300px] sm:h-[400px] md:h-[500px] object-cover object-top"
  />

  <figcaption
    className="
      absolute top-4 left-4
      sm:top-8 sm:left-8
      md:top-12 md:left-12

      px-4 py-4 sm:px-6 sm:py-8
      bg-grey-0/90 backdrop-blur

      flex flex-col gap-3 sm:gap-4
      divide-y divide-brand-green
      rounded-lg shadow-lg
      max-w-[150px] sm:max-w-none
    "
  >
    <p className="flex flex-col pb-3 sm:pb-4">
      <span className="text-xl sm:text-2xl font-semibold text-grey-900">
        8,269+
      </span>
      <span className="text-grey-700 text-sm sm:text-base">Brands</span>
    </p>

    <p className="flex flex-col pb-3 sm:pb-4">
      <span className="text-xl sm:text-2xl font-semibold text-grey-900">
        10,958+
      </span>
      <span className="text-grey-700 text-sm sm:text-base">SKUs</span>
    </p>

    <p className="flex flex-col pb-3 sm:pb-4">
      <span className="text-xl sm:text-2xl font-semibold text-grey-900">
        $1M
      </span>
      <span className="text-grey-700 text-sm sm:text-base">Company Growth</span>
    </p>

    <p className="flex flex-col">
      <span className="text-xl sm:text-2xl font-semibold text-grey-900">
        1000+
      </span>
      <span className="text-grey-700 text-sm sm:text-base">Partnerships</span>
    </p>
  </figcaption>
</figure>


        <div className="flex flex-col items-start gap-6">
          <div className="flex items-center font-medium text-xl text-grey-900">
            <p>
              Key statistics<span className="text-brand-green mx-2">|</span>
            </p>
            <p>
              Company Growth<span className="text-brand-green mx-2">|</span>
            </p>
            <p>Brand Coverage</p>
          </div>

          <H2>Pioneering Insights for Emerging Markets in Life Sciences</H2>

          <p className="text-lg text-justify text-grey-700 font-medium">
            PBR Life Sciences captures the pulse of African pharmaceuticals with
            AI-powered analytics, tracking 10,958 SKUs and 8,289 unique brands
            through VERSUS™, alongside 7,000+ brands across 78 therapy areas via
            MarketSizer™. Our data highlights a $1.01B Nigerian pharma market by
            2028, driven by a population set to exceed 377 million by 2050, yet
            challenged by 70% import reliance. With 1,000+ pharmacy partnerships
            and a 200% revenue increase, PBR’s insights—recognized in “Top 15
            Startups to Watch in 2025”—empower stakeholders to seize
            opportunities in a $45.3B global antibiotics market and beyond.
          </p>

          <Button
            content={{ label: "Learn More", to: "#" }}
            className="uppercase"
          />
        </div>
      </div>
    </section>
  );
}

// divide-x-2 divide-brand-green
