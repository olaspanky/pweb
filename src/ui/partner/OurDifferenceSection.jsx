import Image from "next/image";
import image from "@/assets/images/pt1.png";
import image2 from "@/assets/images/pt2.png";
import H2 from "@/components/Typography";

export default function OurDifferenceSection() {
  return (
    <div className="flex flex-col">
      <section id="difference" className="py-16 sm:py-20 ">
        {" "}
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12 max-w-[1440px] px-6 sm:px-12 md:px-16 mx-auto">
          {/* Image */}{" "}
          <figure className="rounded-xl overflow-hidden relative w-full lg:w-1/2 h-64 sm:h-80 md:h-96 lg:h-[500px]">
            <Image
              src={image}
              alt="Man pointing to statistics"
              fill
              className="object-cover object-top"
            />{" "}
          </figure>
          {/* Text Content */}
          <div className="relative w-full lg:w-1/2 flex flex-col items-start gap-4 lg:gap-6">
            {/* Optional overlay for readability */}
            <div className="absolute inset-0  rounded-xl -z-10 lg:hidden" />

            <H2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-grey-900">
              Your Pharmacy. Your Impact. Powered by Data.{" "}
            </H2>

            <p className="text-grey-700 text-base sm:text-lg md:text-xl text-justify font-medium">
              As a community pharmacy, you are already a vital part of the
              healthcare system. With PBR Life Sciences, your data can go even
              further by helping researchers and organizations make
              evidence-based decisions that improve public health.{" "}
            </p>
          </div>
        </div>
      </section>
      <section id="difference" className="py-16 sm:py-20 ">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12 max-w-[1440px] px-6 sm:px-12 md:px-16 mx-auto">
          {/* Text Content */}
          <div className="relative w-full lg:w-1/2 ">
            {/* Optional overlay for readability */}
            <div className="absolute inset-0  rounded-xl -z-10 lg:hidden flex flex-col gap-7" />
            <div className="flex flex-col items-start gap-2 ">
              <h2 className="text-md  font-semibold text-grey-900">
                Designed for{" "}
              </h2>

              <p className="text-grey-700 text-base sm:text-sm md:text-md text-justify font-medium">
                Pharmaceutical brand managers, commercial strategy teams,
                pricing and revenue management specialists, and sales leadership
                seeking to validate performance with ground-truth data.
              </p>
            </div>
            <div className="flex flex-col items-start gap-2">
              <h2 className="text-md  font-semibold text-grey-900">
                Enjoy rewards{" "}
              </h2>

              <p className="text-grey-700 text-base sm:text-sm md:text-md text-justify font-medium">
               Earn benefits for participating, from direct incentives to early access to new services
              </p>
            </div>
            <div className="flex flex-col items-start gap-2 ">
              <h2 className="text-md  font-semibold text-grey-900">
                Guaranteed privacy{" "}
              </h2>

              <p className="text-grey-700 text-base sm:text-sm md:text-md text-justify font-medium">
               All data collected is fully anonymised, secured and handled with your pharmacy data’s security in mind. We use trusted AWS infrastructure and strictly comply with data regulation policies including the Nigeria Data Protection Act (NDPA), Ghana’s Data Protection Act, and the EU’s General Data Protection Regulation (GDPR). View our compliance certificates here.
              </p>
            </div>
          </div>
          {/* Image */}{" "}
          <figure className="rounded-xl overflow-hidden relative w-full lg:w-1/2 h-64 sm:h-80 md:h-96 lg:h-[500px]">
            <Image
              src={image2}
              alt="Man pointing to statistics"
              fill
              className="object-cover object-top"
            />{" "}
          </figure>
        </div>
      </section>
    </div>
  );
}
