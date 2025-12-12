import React from 'react';

export default function ReportsPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Top Report Section */}
      <section className="max-w-7xl mx-auto px-4 py-12">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-3xl font-bold text-gray-900">Top Report Section</h2>
          <a href="#" className="text-blue-600 hover:underline text-sm">View all reports</a>
        </div>
        
        <p className="text-gray-600 mb-8 leading-relaxed">
          Explore our collection of free whitepapers and paid market intelligence reports covering the latest trends, analyses, and forecasts in the pharmaceutical and life sciences industry. Whether you're a pharmaceutical executive, product manager, or investor, PBR Life Sciences provides the insights you need to stay ahead.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[1, 2, 3, 4].map((item) => (
            <div key={item} className="rounded-lg overflow-hidden shadow-md aspect-[3/4]">
              <img 
                src={`/white/w${item}.png`} 
                alt={`Top Report ${item}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </section>

      {/* Whitepaper Section */}
      <section className="max-w-7xl mx-auto px-4 py-12">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-3xl font-bold text-gray-900">Whitepaper Section</h2>
          <a href="#" className="text-blue-600 hover:underline text-sm">View all reports</a>
        </div>
        
        <p className="text-gray-600 mb-8 leading-relaxed">
          Access our free whitepapers to stay informed on critical industry topics. Simply fill out a quick form to download and start exploring actionable insights.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[1, 2, 3, 4].map((item) => (
            <div key={item} className="rounded-lg overflow-hidden shadow-md">
              <img 
                src={`/white/w${item}.png`} 
                alt={`Whitepaper ${item}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </section>

      {/* Market Intelligence Reports Section */}
      <section className="max-w-7xl mx-auto px-4 py-12">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-3xl font-bold text-gray-900">Market Intelligence Reports Section</h2>
          <a href="#" className="text-blue-600 hover:underline text-sm">View all reports</a>
        </div>
        
        <p className="text-gray-600 mb-8 leading-relaxed">
          Our premium Market Intelligence Reports offer in-depth analyses for only $10 each. Purchase securely in your local currency and gain immediate access to exclusive data.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[1, 2, 3, 4].map((item) => (
            <div key={item} className="rounded-lg overflow-hidden shadow-md">
              <img 
                src={`/white/w${item}.png`} 
                alt={`Market Intelligence Report ${item}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <div className="text-center mb-4">
          <p className="text-sm text-gray-500 uppercase tracking-wider mb-2">TESTIMONIALS</p>
          <h2 className="text-4xl font-bold text-gray-900">What our customers say</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {/* Testimonial 1 */}
          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <p className="text-sm text-gray-500 mb-4">Verified Purchase</p>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius enim in eros elementum tristique.
            </p>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center">
                <span className="text-gray-500 text-sm">👤</span>
              </div>
              <div>
                <p className="font-semibold text-gray-900">Oluwaseun</p>
                <p className="text-sm text-gray-500">Asa Creatives</p>
              </div>
            </div>
          </div>

          {/* Testimonial 2 */}
          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <p className="text-sm text-gray-500 mb-4">Verified Purchase</p>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Great Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius enim in eros elementum tristique.
            </p>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center">
                <span className="text-gray-500 text-sm">👤</span>
              </div>
              <div>
                <p className="font-semibold text-gray-900">Olayinka</p>
                <p className="text-sm text-gray-500">Asa Creatives</p>
              </div>
            </div>
          </div>

          {/* Testimonial 3 */}
          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <p className="text-sm text-gray-500 mb-4">Verified Purchase</p>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Massive Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius enim in eros elementum tristique.
            </p>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center">
                <span className="text-gray-500 text-sm">👤</span>
              </div>
              <div>
                <p className="font-semibold text-gray-900">Olayinka</p>
                <p className="text-sm text-gray-500">Asa Creatives</p>
              </div>
            </div>
          </div>

          {/* Testimonial 4 */}
          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <p className="text-sm text-gray-500 mb-4">Verified Purchase</p>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Lorem ipsum, consectetur adipiscing elit. Varius enim in eros elementum tristique.
            </p>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center">
                <span className="text-gray-500 text-sm">👤</span>
              </div>
              <div>
                <p className="font-semibold text-gray-900">Joyce</p>
                <p className="text-sm text-gray-500">Asa Creatives</p>
              </div>
            </div>
          </div>

          {/* Testimonial 5 */}
          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <p className="text-sm text-gray-500 mb-4">Verified Purchase</p>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Insightful Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius enim in eros elementum tristique.
            </p>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center">
                <span className="text-gray-500 text-sm">👤</span>
              </div>
              <div>
                <p className="font-semibold text-gray-900">Olayinka</p>
                <p className="text-sm text-gray-500">Asa Creatives</p>
              </div>
            </div>
          </div>

          {/* Testimonial 6 */}
          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <p className="text-sm text-gray-500 mb-4">Verified Purchase</p>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Respect Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius enim in eros elementum tristique.
            </p>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center">
                <span className="text-gray-500 text-sm">👤</span>
              </div>
              <div>
                <p className="font-semibold text-gray-900">Joyce</p>
                <p className="text-sm text-gray-500">Asa Creatives</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}