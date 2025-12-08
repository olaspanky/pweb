import Image from "next/image";
import HeroImage1 from "@/assets/images/cl1.png";
import HeroImage2 from "@/assets/images/cl2.png";


export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative">
        <div className="flex gap-8 items-center max-w-7xl mx-auto px-6 py-16">
          {/* Left: Image */}
          <div className=" w-7/12 relative h-96 bg-gray-200 rounded-lg overflow-hidden z-20" >
            {/* Replace with your image */}
   <Image
                  src={HeroImage1}
                  fill
                  className="object-cover object-center " 
                  placeholder="blur"
                />          </div>

          {/* Right: Content */}
          <div className="bg-gray-50 p-8 border border-[#51BC4A] shadow-sm ml-[-96] z-99">
            <h2 className="text-2xl font-bold mb-6 text-gray-900">
              What We Help You Achieve
            </h2>
            
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">
                  1. Decide Where to Play:
                </h3>
                <p className="text-gray-600 text-sm">
                  Market & portfolio segmentation, opportunity sizing, country entry sequencing.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-2">
                  2. Decide How to Win:
                </h3>
                <p className="text-gray-600 text-sm">
                  Pricing & pack strategy, RWE/HEOR evidence, market access strategy, KOL engagement models.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-2">
                  3. Scale Fast & Stay in Control:
                </h3>
                <p className="text-gray-600 text-sm">
                  Real-time commercial dashboards, omnichannel orchestration, field + call-center execution.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose PBR Section */}
      <section className=" text-white py-16">
     <div
className="max-w-[1440px] mx-auto px-6 sm:px-12 lg:px-16 py-20 relative"
style={{
backgroundImage: `url("/bg1.png")`,
backgroundSize: "cover",
backgroundPosition: "center",
backgroundRepeat: "no-repeat",
}}
>
          <h2 className="text-3xl font-bold mb-12">
            Why Emerging-Market Leaders Choose PBR
          </h2>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left: Benefits */}
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-bold mb-3">Africa Real-World Data</h3>
                <p className="text-blue-100 text-sm leading-relaxed">
                  Emerging-markets real-world data assets, including pharmacy sell-out, hospital, claims and programme data from markets across Asia, Africa, Latin America & Europe.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-3">Local Realities, Global Rigor</h3>
                <p className="text-blue-100 text-sm leading-relaxed">
                  Proven in-market experience translating local realities like resource constraints, regulatory and registration requirements, and infrastructure constraints into practical GTM and engagement models that can scale across emerging markets.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-3">Strategy, Tech & Execution</h3>
                <p className="text-blue-100 text-sm leading-relaxed">
                  Integrated consulting + technology + operations: strategy, platforms and call-centre/field execution in one stack.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-3">Compliance by Design</h3>
                <p className="text-blue-100 text-sm leading-relaxed">
                  Data governance, pharma/intelligence-aligned processes and traceable e-consent across channels, aligned with local and international standards.
                </p>
              </div>
            </div>

            {/* Right: Image */}
            <div className="relative h-96 bg-blue-800 rounded-lg overflow-hidden">
              {/* Replace with your image */}
 <Image
                  src={HeroImage2}
                  fill
                  className="object-cover object-center " 
                  placeholder="blur"
                />                </div>
          </div>
        </div>
      </section>

      {/* Core Solutions Section */}
      <section className="py-16 
      ">
     <div
className="max-w-[1440px] mx-auto px-6 sm:px-12 lg:px-16 py-20 relative"
style={{
backgroundImage: `url("/bg22.png")`,
backgroundSize: "cover",
backgroundPosition: "center",
backgroundRepeat: "no-repeat",
}}
>          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Core Solutions</h2>
            <p className="text-gray-600 max-w-2xl">
              Understand your data better and act on it for free from the same secure platform you use to run your business.
            </p>
          </div>

          {/* Solutions Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {/* Solution 1 */}
            <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-900">
                GTM & Evidence for Emerging Markets
              </h3>
              <ul className="space-y-2 text-gray-600 text-sm">
                <li>• Market & portfolio prioritization</li>
                <li>• Pricing & reimbursement strategy</li>
                <li>• RWE/HEOR programs</li>
                <li>• Product registration & distributor design</li>
              </ul>
            </div>

            {/* Solution 2 */}
            <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-900">
                HCP & Patient Engagement
              </h3>
              <ul className="space-y-2 text-gray-600 text-sm">
                <li>• SONUS e-consent</li>
                <li>• Call Centre as a Service</li>
                <li>• Druglied patient support programs</li>
                <li>• Digital pharmacovigilance</li>
              </ul>
            </div>

            {/* Solution 3 */}
            <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-900">
                Commercial Intelligence & Omnichannel Performance
              </h3>
              <ul className="space-y-2 text-gray-600 text-sm">
                <li>• Performance Mgt dashboards</li>
                <li>• Sales Navigator CRM</li>
                <li>• Campaign Tracker</li>
                <li>• Real-time resource allocation</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* How We Work Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left: Content */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">How We Work</h2>
              
              <div className="space-y-6 mb-8">
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">
                    1. Start with Your Real Questions
                  </h3>
                  <p className="text-gray-600 text-sm">
                    We frame the work around the decisions your regional and country leadership actually need to make now.
                  </p>
                </div>

                <div>
                  <h3 className="font-bold text-gray-900 mb-2">
                    2. Co-Design a Practical Roadmap
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Strategy, evidence, technology, and execution in one aligned plan.
                  </p>
                </div>

                <div>
                  <h3 className="font-bold text-gray-900 mb-2">
                    3. Implement, Measure, Refine
                  </h3>
                  <p className="text-gray-600 text-sm">
                    We stay in the market with you with dashboards, field teams, call centers – until results are locked in.
                  </p>
                </div>
              </div>

              <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-6 py-3 rounded-lg transition-colors">
                LEARN MORE
              </button>
            </div>

            {/* Right: Image */}
            <div className="relative h-96 bg-gray-200 rounded-lg overflow-hidden">
              {/* Replace with your image */}
              <div className="absolute inset-0 flex items-center justify-center text-gray-500">
                [Team Collaboration Image]
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Stat 1 */}
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <svg className="w-12 h-12 text-blue-500" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z"/>
                </svg>
              </div>
              <div className="text-4xl font-bold text-gray-900 mb-2">$1M</div>
              <div className="text-orange-500 text-sm font-medium">pre-seed funding</div>
            </div>

            {/* Stat 2 */}
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <svg className="w-12 h-12 text-blue-500" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/>
                </svg>
              </div>
              <div className="text-4xl font-bold text-gray-900 mb-2">50+</div>
              <div className="text-orange-500 text-sm font-medium">Happy Clients</div>
            </div>

            {/* Stat 3 */}
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <svg className="w-12 h-12 text-blue-500" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
              </div>
              <div className="text-4xl font-bold text-gray-900 mb-2">20+</div>
              <div className="text-orange-500 text-sm font-medium">Awards Win</div>
            </div>

            {/* Stat 4 */}
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <svg className="w-12 h-12 text-blue-500" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
              </div>
              <div className="text-4xl font-bold text-gray-900 mb-2">9M+</div>
              <div className="text-orange-500 text-sm font-medium">Patients supported</div>
            </div>
          </div>

          {/* Experience Section */}
          <div className="mt-16 text-center">
            <div className="flex justify-center mb-4">
              <svg className="w-16 h-16 text-blue-500" fill="currentColor" viewBox="0 0 24 24">
                <path d="M7 10l5 5 5-5z"/>
              </svg>
            </div>
            <h3 className="text-4xl font-bold text-blue-900 mb-4">
              100+ years put together experience
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Validated by investors, accelerating with global leaders, and already delivering results across high-growth markets.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}