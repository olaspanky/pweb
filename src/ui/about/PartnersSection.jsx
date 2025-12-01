import Button from "@/components/Button";
import H2 from "@/components/Typography";
import Image from "next/image";
import img from "./../../../public/images/ab22.png";

export default function PartnersSection() {
  return (
    <section className="max-w-[1440px] px-18 mx-auto py-20 grid grid-cols-2 items-center gap-12">
      <div className="flex flex-col items-start gap-6">

        <H2>A Vision for Inclusive Innovation</H2>

        <p className="text-lg text-justify text-grey-700 font-medium">
         We envision a world where African and emerging market data enriches global healthcare, fostering equitable access to superior health decisions. By expanding to key hubs like Ghana and Kenya, integrating blockchain for secure data sharing, and contributing to drug discovery and clinical research, PBR Life Sciences is committed to representing diverse populations in life sciences advancements creating a healthier, more inclusive tomorrow for all.
        </p>

       
      </div>

      <Image
                 src={img}
                 alt="Man pointing to statistics"
                 width={1200}
                 height={600}
                 className="object-cover object-top h-full"
               />
              
    </section>
  );
}
