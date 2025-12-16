import useSWR from 'swr';
import { Star } from 'lucide-react';

const fetcher = (url) => fetch(url).then((res) => res.json());



export default function FreeReportsSection() {
  const { data, error, isLoading } = useSWR(
    'https://cms.pbr.com.ng/api/reports',
    fetcher
  );

  const freeReports = data?.filter((report) => report.isFree) || [];

  // Show only the first 4 free reports
  const displayedReports = freeReports.slice(0, 4);

  const renderStars = (rating) => {
    return (
      <div className="flex items-center gap-1">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={`w-4 h-4 ${
              i < Math.floor(rating)
                ? 'fill-yellow-400 text-yellow-400'
                : 'text-gray-300'
            }`}
          />
        ))}
        <span className="ml-2 text-sm text-gray-600">82 reviews</span>
      </div>
    );
  };

  if (isLoading) {
    return (
      <section className="py-16  text-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Navigating Africa's Healthcare Evolution
            </h2>
            <p className="text-lg text-gray-300 max-w-4xl mx-auto">
              Gain from 200% revenue-backed insights across 10,958 SKUs and
              Sub-Saharan Africa's dynamic pharmaceutical landscape.
            </p>
          </div>
          <div className="flex justify-center items-center h-96">
            <p className="text-xl">Loading free reports...</p>
          </div>
        </div>
      </section>
    );
  }

  if (error || displayedReports.length === 0) {
    return null; // Or show a fallback message
  }

  return (
    <section className="py-16  text-black">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Navigating Africa's Healthcare Evolution
          </h2>
          <p className="text-lg text-black max-w-4xl mx-auto">
            Gain from 200% revenue-backed insights across 10,958 SKUs and
            Sub-Saharan Africa's dynamic pharmaceutical landscape.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {displayedReports.map((report) => (
            <div
              key={report._id}
              className="group relative bg-gradient-to-b from-gray-800 to-gray-900 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              {/* Optional: You can add a background image per card if available */}
              <div className="aspect-[3/4] bg-gradient-to-br from-teal-600/20 to-blue-600/20 p-8 flex flex-col justify-between">
                <div>
                  <div className="flex justify-between items-start mb-6">
                    <div className="bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2">
                      <span className="text-xs uppercase tracking-wider text-teal-300">
                        FREE
                      </span>
                    </div>
                    <div className="w-20 h-12 bg-white rounded-lg flex items-center justify-center">
                      <span className="text-xl font-bold text-teal-600">
                        pbr
                      </span>
                    </div>
                  </div>

                  <h3 className="text-xl font-bold mb-4 line-clamp-3">
                    {report.title.replace(/^PBR - /, '')}
                  </h3>

                  <p className="text-sm text-gray-300 mb-6 line-clamp-4">
                    {report.description}
                  </p>
                </div>

                <div>
                  {report.rating && renderStars(report.rating)}

                  <a
                    href={report.downloadUrl || '#'}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 inline-flex items-center gap-2 bg-white text-black font-semibold px-6 py-3 rounded-full hover:bg-teal-500 hover:text-white transition-colors"
                  >
                    Download now
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}