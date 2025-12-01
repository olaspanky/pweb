import Button from "@/components/Button";
import H2 from "@/components/Typography";
import Image from "next/image";
import insights1 from "@/assets/images/insights-1.jpg";
import insights2 from "@/assets/images/insights-2.png";
import insights3 from "@/assets/images/insights-3.png";

export default function InsightsSection() {
  return (
    <section
      id="insights"
      className="max-w-[1440px] px-18 mx-auto py-20 flex flex-col items-center gap-12"
    >
      <div className="flex flex-col gap-3 items-center text-center">
        <H2>Navigating Africa's Healthcare Evolution</H2>
        <p className="text-grey-700 font-medium w-[70%]">
          Gain from 200% revenue-backed insights across 10,958 SKUs and
          Sub-Saharan Africa's dynamic pharmaceutical landscape.
        </p>
      </div>

      <div className="grid grid-cols-3 gap-6 w-full">
        <figure className="rounded-xl overflow-hidden relative">
          <Image
            src={insights1}
            width={400}
            height={400}
            alt="PBR Webinar Image"
            className="w-full h-full object-cover"
          />
          <div className="bg-gradient-to-t from-grey-900 via-grey-900/20 to-transparent h-full w-full absolute bottom-0"></div>
          <figcaption className="absolute bottom-0 z-1 m-8 text-grey-0 font-semibold text-lg">
            Lorem Ipsum has been the industry's standard dummy text
          </figcaption>
        </figure>
        <figure className="rounded-xl overflow-hidden relative">
          <Image
            src={insights2}
            width={400}
            height={400}
            alt="PBR Webinar Image"
            className="w-full h-full object-cover"
          />
          <div className="bg-gradient-to-t from-grey-900 via-grey-900/20 to-transparent h-full w-full absolute bottom-0"></div>
          <figcaption className="absolute bottom-0 z-1 m-8 text-grey-0 font-semibold text-lg">
            Lorem Ipsum has been the industry's standard dummy text
          </figcaption>
        </figure>
        <figure className="rounded-xl overflow-hidden relative">
          <Image
            src={insights3}
            width={400}
            height={400}
            alt="PBR Webinar Image"
            className="w-full h-full object-cover object-top-left"
          />
          <div className="bg-gradient-to-t from-grey-900 via-grey-900/20 to-transparent h-full w-full absolute bottom-0"></div>
          <figcaption className="absolute bottom-0 z-1 m-8 text-grey-0 font-semibold text-lg">
            Lorem Ipsum has been the industry's standard dummy text
          </figcaption>
        </figure>
      </div>

      <Button
        content={{ label: "Learn More", to: "#" }}
        className="uppercase"
      />
    </section>
  );
}
