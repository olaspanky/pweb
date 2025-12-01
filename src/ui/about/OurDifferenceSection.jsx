import Image from "next/image";
import image from "@/assets/images/ab21.png";
import H2 from "@/components/Typography";
import Button from "@/components/Button";

export default function OurDifferenceSection() {
  return (
    <section id="difference" className="py-20">
      <div className="flex justify-center items-center  gap-12 max-w-[1440px] px-18 mx-auto">
        <figure className="rounded-xl overflow-hidden relative w-1/2">
          <Image
            src={image}
            alt="Man pointing to statistics"
            width={1200}
            height={600}
            className="object-cover object-top h-full"
          />
         
        </figure>

        <div className="flex flex-col items-start gap-6 w-1/2" >
         

          <H2>Pioneering Data for a Healthier Future</H2>

          <p className="text-lg text-justify text-grey-700 font-medium">
            At PBR Life Sciences, we are dedicated to bridging the gaps in global healthcare by delivering intelligent, AI-powered analytics tailored to emerging markets. Our mission is to transform complex real-world data into precise, actionable insights that empower pharmaceutical companies, NGOs, and life sciences organizations to drive growth, innovation, and impact especially in underserved regions like Africa.
          </p>

         
        </div>
      </div>
    </section>
  );
}

// divide-x-2 divide-brand-green
