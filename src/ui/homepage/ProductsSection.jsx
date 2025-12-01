import { ArrowLeft, ArrowRight } from "@/components/icons/Icons";
import H2 from "@/components/Typography";
import Image from "next/image";
import Link from "next/link";

export default function ProductsSection() {
  return (
    <section
      id="products"
      className="max-w-[1440px] px-6 md:px-12 lg:px-18 mx-auto py-16 md:py-20 flex flex-col gap-12"
    >
      {/* Top Row */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 md:gap-0">
        <div className="flex flex-col gap-3 w-full md:w-[70%]">
          <H2>Data Solutions for Global Pharma Future</H2>
          <p className="text-grey-700 font-medium w-full md:w-[80%]">
            Leverage our proprietary platforms to navigate 78 therapy areas and
            a $45.3B global antibiotics market with confidence.
          </p>
        </div>

        {/* Buttons */}
        <div className="flex gap-4 self-start md:self-auto">
          <button className="flex items-center justify-center border-2 border-brand-light-blue rounded-full w-12 h-12 md:w-14 md:h-14 text-brand-light-blue hover:text-grey-0 hover:bg-brand-light-blue transition-all">
            <ArrowLeft className="h-6 w-6 md:h-7 md:w-7 stroke-current" />
          </button>
          <button className="flex items-center justify-center border-2 border-brand-light-blue rounded-full w-12 h-12 md:w-14 md:h-14 text-brand-light-blue hover:text-grey-0 hover:bg-brand-light-blue transition-all">
            <ArrowRight className="h-6 w-6 md:h-7 md:w-7 stroke-current" />
          </button>
        </div>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {/* Card 1 */}
        <div className="bg-brand-light-blue px-8 md:px-10 py-10 relative">
          <h3 className="text-2xl md:text-3xl font-medium text-grey-0 mb-8 md:mb-10">
            Data Platforms & Subscriptions
          </h3>

          <div className="flex flex-col gap-6 pb-20 md:pb-30">
            <p className="text-grey-0 font-medium flex flex-col">
              <span className="mb-2">
                Turn complex data into actionable insights
              </span>
              <span>
                <strong>VERSUS</strong> – Retail Pharmacy Analytics (Nigeria)
              </span>
              <span>
                <strong>VERSUS Ghana</strong> – Retail Pharmacy Analytics
                (Ghana)
              </span>
              <span>
                <strong>Invisio</strong> – Hospital Analytics
              </span>
            </p>
            <Link href="#" className="text-grey-0 font-medium underline">
              Discover Strategic Solutions
            </Link>
          </div>

          <Image
            src="/mesh.svg"
            width={220}
            height={220}
            alt="Mesh"
            className="absolute top-0 left-0 opacity-70"
          />
        </div>

        {/* Card 2 */}
        <div className="bg-grey-50 px-8 md:px-10 py-10 relative">
          <h3 className="text-2xl md:text-3xl font-medium text-grey-900 mb-8 md:mb-10">
            Analytics Engine
          </h3>

          <div className="flex flex-col gap-6 pb-16 md:pb-20">
            <p className="text-grey-700 font-medium">
              <strong>Research data lab</strong> – A first of its kind
              all-in-one analytic engine designed to drive faster, safer, and
              more inclusive global health innovation from Africa
            </p>
            <Link
              href="#"
              className="text-brand-light-blue font-medium underline"
            >
              Discover Strategic Solutions
            </Link>
          </div>

          <Image
            src="/mesh2.svg"
            width={220}
            height={220}
            alt="Mesh"
            className="absolute bottom-0 right-0 opacity-80"
          />
        </div>

        {/* Card 3 */}
        <div className="bg-brand-gold px-8 md:px-10 py-10 relative">
          <h3 className="text-2xl md:text-3xl font-medium text-grey-0 mb-8 md:mb-10">
            Consulting & Market Insights
          </h3>

          <div className="flex flex-col gap-6 pb-16 md:pb-20">
            <p className="text-grey-0 font-medium flex flex-col">
              <span className="mb-2">
                Expert guidance to unlock growth opportunities
              </span>
              <span className="mb-2">Market Intelligence Reports</span>
              <span>White Papers</span>
            </p>
            <Link href="#" className="text-grey-0 font-medium underline">
              Discover Strategic Solutions
            </Link>
          </div>

          <Image
            src="/mesh.svg"
            width={220}
            height={220}
            alt="Mesh"
            className="absolute top-0 right-0 rotate-90 opacity-70"
          />
        </div>
      </div>
    </section>
  );
}
