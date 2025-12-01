import Link from "next/link";
import { Facebook, Instagram, Linkedin, Twitter } from "./icons/Socials";
import Image from "next/image";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="py-20 bg-brand-dark-blue relative">
      <div className="max-w-[1440px] px-18 mx-auto flex flex-col gap-12">
        <div className="grid grid-cols-[repeat(4,_1fr)_1.5fr]">
          <div className="flex flex-col gap-6 text-grey-0 font-medium ">
            <Link href="#" className="hover:underline">
              About Us
            </Link>
            <Link href="#" className="hover:underline">
              Our Company
            </Link>
            <Link href="#" className="hover:underline">
              Contact Us
            </Link>
            <Link href="#" className="hover:underline">
              Career
            </Link>
          </div>
          <div className="flex flex-col gap-6 text-grey-0 font-medium ">
            <Link href="#" className="hover:underline">
              Products
            </Link>
          </div>
          <div className="flex flex-col gap-6 text-grey-0 font-medium ">
            <Link href="#" className="hover:underline">
              Solutions
            </Link>
          </div>
          <div className="flex flex-col gap-6 text-grey-0 font-medium ">
            <Link href="#" className="hover:underline">
              Testimonials
            </Link>
          </div>
          <div className="flex flex-col gap-12 text-grey-0 font-medium ">
            <p>
              Reach us at {""}
              <Link href="#" className="hover:underline font-semibold">
                marketanalytics@pbrinsight.com
              </Link>{" "}
              or through our online contact form.
            </p>

            <div className="flex items-center gap-6">
              <a href="#">
                <Facebook />
              </a>
              <a href="#">
                <Linkedin />
              </a>
              <a href="#">
                <Instagram />
              </a>
              <a href="#">
                <Twitter />
              </a>
            </div>
          </div>
        </div>

        <hr className="border-grey-0/30" />

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-6 font-medium text-grey-0">
            <p className="">©{year} PBR Life Sciences.</p>
            <div className="flex items-center gap-4">
              <Link href="#" className="hover:underline">
                Privacy
              </Link>
              <p>.</p>
              <Link href="#" className="hover:underline">
                Terms
              </Link>
              <p>.</p>
              <p>All rights reserved.</p>
            </div>
          </div>

          <div className="flex items-center gap-4 text-grey-0 font-medium uppercase divide-x">
            <p className="pr-4">United Kingdom</p>
            <p className="pr-4">Nigeria</p>
            <p className="pr-4">Ghana</p>
            <p>Kenya</p>
          </div>
        </div>
      </div>

      {/* <Image
        src="/map.png"
        width={400}
        height={400}
        alt="Map"
        className="absolute top-0 z-1 object-cover opacity-20"
      /> */}
    </footer>
  );
}
