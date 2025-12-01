import H2 from "@/components/Typography";
import Image from "next/image";
import image1 from "@/assets/images/solutions-1.jpg";

export default function OurSolutions() {
  return (
    <section id="solutions" className="max-w-[1440px] px-18 mx-auto">
      <div className=" bg-grey-100 px-16 py-20 flex flex-col gap-12">
        <div className="flex flex-col gap-3">
          <H2>Our Solutions</H2>
          <p className="text-grey-700 font-medium">
            Lorem Ipsum has been the industry's standard dummy text ever since
          </p>
        </div>

        <div className="grid grid-cols-2 gap-12 items-center">
          <div className="flex flex-col">
            <div className="flex flex-col gap-3 bg-grey-0 px-10 py-6">
              <h3 className="text-xl font-semibold text-brand-blue uppercase">
                Pbr Life Sciences Market Data & Intelligence Platforms
              </h3>
              <p className="text-grey-700 font-medium">
                Cutting-edge, AI-powered digital platforms that provide
                multi-variate, multi-channel real-world market insights for
                pharmaceutical and healthcare industries.
              </p>
            </div>

            <div className="flex flex-col gap-3 bg-grey-0 px-10 py-6 border-2 border-brand-light-blue">
              <h3 className="text-xl font-semibold text-brand-green uppercase">
                Pbr Life Sciences Analytics & Advisory
              </h3>
              <p className="text-grey-700 font-medium">
                Providing customized data solutions, forecasting models, and
                strategic recommendations for life sciences companies operating
                in emerging markets.
              </p>
            </div>

            <div className="flex flex-col gap-3 bg-grey-0 px-10 py-6">
              <h3 className="text-xl font-semibold text-brand-light-blue uppercase">
                Pbr Global Health Analytics & Advisory
              </h3>
              <p className="text-grey-700 font-medium">
                Delivering deep market intelligence and strategic advisory
                services to global health organisations, policymakers, and
                private sector players.
              </p>
            </div>
          </div>

          <figure className="rounded-xl overflow-hidden relative">
            <Image
              src={image1}
              alt="Man with data laptop"
              width={1500}
              height={700}
            />
          </figure>
        </div>
      </div>
    </section>
  );
}
