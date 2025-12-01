import Image from "next/image";
import image1 from "@/assets/images/contact-1.jpg";
import Button from "./Button";

export default function ContactCard() {
  return (
    <section className="relative px-18 mx-auto py-30 flex flex-col items-center gap-12">
      <div className="-z-1 absolute inset-0 bg-gradient-to-r from-brand-dark-blue/80 via-brand-blue/80 to-brand-light-blue/10"></div>

      <Image
        src={image1}
        fill
        alt="Image of Business Meeting"
        className="-z-2 object-cover"
        placeholder="blur"
      />

      <div className="text-center text-grey-0 flex flex-col gap-3">
        <h2 className="font-semibold text-4xl">
          Ready to Transform Your Business?
        </h2>
        <p className="font-medium text-lg">
          Partner with us for expert guidance and strategies that drive growth
          and success.
        </p>
      </div>

      <Button
        content={{ label: "Contact Us", to: "#" }}
        className="border border-grey-0 bg-transparent"
      />
    </section>
  );
}
