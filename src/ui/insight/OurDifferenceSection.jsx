"use client"
import React, { useState, useEffect } from 'react';
import { Search, ChevronDown } from 'lucide-react';

const TestimonialCard = ({ text, name, company }) => (
  <div className="bg-white p-6 rounded-lg border border-gray-200 w-96 flex-shrink-0">
    <p className="text-sm text-gray-500 mb-4">Verified Purchase</p>
    <p className="text-gray-700 mb-6 leading-relaxed">{text}</p>
    <div className="flex items-center gap-3">
      <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center">
        <span className="text-gray-500 text-sm">👤</span>
      </div>
      <div>
        <p className="font-semibold text-gray-900">{name}</p>
        <p className="text-sm text-gray-500">{company}</p>
      </div>
    </div>
  </div>
);

const ReportSearchBar = ({ onSearch, onSort, onCategoryFilter, categories }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedSort, setSelectedSort] = useState('newest');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [showSortDropdown, setShowSortDropdown] = useState(false);
  const [showCategoryDropdown, setShowCategoryDropdown] = useState(false);

  const sortOptions = [
    { value: 'newest', label: 'Newest First' },
    { value: 'oldest', label: 'Oldest First' },
    { value: 'rating', label: 'Highest Rating' },
    { value: 'title', label: 'A-Z' }
  ];

  const handleSearch = () => {
    onSearch(searchQuery.trim());
  };

  const handleSortSelect = (value) => {
    setSelectedSort(value);
    onSort(value);
    setShowSortDropdown(false);
  };

  const handleCategorySelect = (value) => {
    setSelectedCategory(value);
    onCategoryFilter(value);
    setShowCategoryDropdown(false);
  };

  return (
    <div className=" px-4 py-6">
      <div className="max-w-5xl mx-auto bg-white rounded-lg shadow-sm">
        <div className="flex flex-col sm:flex-row gap-3 items-stretch sm:items-center p-7 shadow-lg rounded-xl">
          {/* Search Input */}
          <div className="flex-1 relative">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-gray-500" />
            </div>
            <input
              type="text"
              placeholder="What are you looking for"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
              className="w-full pl-12 pr-5 py-4 bg-gray-100 rounded-xl text-gray-700 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-green-500 focus:bg-white transition-all"
            />
          </div>

          {/* Sort by */}
          <div className="relative">
            <button 
              onClick={() => {
                setShowSortDropdown(!showSortDropdown);
                setShowCategoryDropdown(false);
              }}
              className="flex items-center justify-between gap-3 w-full sm:w-auto px-5 py-4 bg-gray-100 rounded-xl text-gray-700 hover:bg-gray-200 transition-colors whitespace-nowrap"
            >
              <span>{sortOptions.find(o => o.value === selectedSort)?.label || 'Sort by'}</span>
              <ChevronDown className="h-5 w-5" />
            </button>
            {showSortDropdown && (
              <div className="absolute top-full mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 z-50">
                {sortOptions.map((option) => (
                  <button
                    key={option.value}
                    onClick={() => handleSortSelect(option.value)}
                    className={`w-full text-left px-4 py-3 hover:bg-gray-100 transition-colors first:rounded-t-lg last:rounded-b-lg ${
                      selectedSort === option.value ? 'bg-green-50 text-green-700' : 'text-gray-700'
                    }`}
                  >
                    {option.label}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Categories */}
          <div className="relative">
            <button 
              onClick={() => {
                setShowCategoryDropdown(!showCategoryDropdown);
                setShowSortDropdown(false);
              }}
              className="flex items-center justify-between gap-3 w-full sm:w-auto px-5 py-4 bg-gray-100 rounded-xl text-gray-700 hover:bg-gray-200 transition-colors whitespace-nowrap"
            >
              <span>{selectedCategory === 'all' ? 'Categories' : selectedCategory}</span>
              <ChevronDown className="h-5 w-5" />
            </button>
            {showCategoryDropdown && (
              <div className="absolute top-full mt-2 w-56 bg-white rounded-lg shadow-lg border border-gray-200 z-50 max-h-64 overflow-y-auto">
                <button
                  onClick={() => handleCategorySelect('all')}
                  className={`w-full text-left px-4 py-3 hover:bg-gray-100 transition-colors first:rounded-t-lg ${
                    selectedCategory === 'all' ? 'bg-green-50 text-green-700' : 'text-gray-700'
                  }`}
                >
                  All Categories
                </button>
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => handleCategorySelect(category)}
                    className={`w-full text-left px-4 py-3 hover:bg-gray-100 transition-colors last:rounded-b-lg ${
                      selectedCategory === category ? 'bg-green-50 text-green-700' : 'text-gray-700'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Search Button */}
          <button 
            onClick={handleSearch}
            className="px-8 py-4 bg-green-500 hover:bg-green-600 text-white font-medium rounded-xl transition-colors shadow-md hover:shadow-lg whitespace-nowrap"
          >
            Search available reports
          </button>
        </div>
      </div>
    </div>
  );
};

export default function ReportsPage() {
  const [allReports, setAllReports] = useState([]);
  const [filteredReports, setFilteredReports] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('newest');
  const [categoryFilter, setCategoryFilter] = useState('all');

  useEffect(() => {
    fetchReports();
  }, []);

  useEffect(() => {
    applyFilters();
  }, [allReports, searchQuery, sortBy, categoryFilter]);

  const fetchReports = async () => {
    try {
      setLoading(true);
      const response = await fetch('https://cms.pbr.com.ng/api/reports');
      if (!response.ok) throw new Error('Failed to fetch reports');
      const data = await response.json();
      setAllReports(data);
      setFilteredReports(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const applyFilters = () => {
    let filtered = [...allReports];

    // Search filter
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase().trim();
      filtered = filtered.filter(report => 
        report.title?.toLowerCase().includes(query) ||
        report.description?.toLowerCase().includes(query)
      );
    }

    // Category filter - now uses .includes() for flexibility (matches your section logic)
    if (categoryFilter !== 'all') {
      const filterLower = categoryFilter.toLowerCase().trim();
      filtered = filtered.filter(report => 
        report.category?.toLowerCase().includes(filterLower)
      );
    }

    // Sort
    filtered = [...filtered].sort((a, b) => {
      switch (sortBy) {
        case 'newest':
          return new Date(b.createdAt) - new Date(a.createdAt);
        case 'oldest':
          return new Date(a.createdAt) - new Date(b.createdAt);
        case 'rating':
          return (b.rating || 0) - (a.rating || 0);
        case 'title':
          return a.title.localeCompare(b.title);
        default:
          return 0;
      }
    });

    setFilteredReports(filtered);
  };

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  const handleSort = (sortValue) => {
    setSortBy(sortValue);
  };

  const handleCategoryFilter = (category) => {
    setCategoryFilter(category);
  };

  const getUniqueCategories = () => {
    const cats = [...new Set(allReports.map(r => r.category).filter(Boolean))];
    return cats.sort();
  };

  const categorizeReports = () => {
    const topReports = filteredReports.slice(0, 4);
    const whitepapers = filteredReports
      .filter(r => r.category?.toLowerCase().includes('white') && r.isFree)
      .slice(0, 4);
    const marketReports = filteredReports
      .filter(r => !r.category?.toLowerCase().includes('white') || !r.isFree)
      .slice(0, 4);

    return { topReports, whitepapers, marketReports };
  };

  const { topReports, whitepapers, marketReports } = categorizeReports();

  const clearFilters = () => {
    setSearchQuery('');
    setCategoryFilter('all');
    setSortBy('newest');
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading reports...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <p className="text-red-600 mb-4">Error: {error}</p>
          <button 
            onClick={fetchReports}
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            Retry
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      {/* Search Bar - EXACTLY as you had it */}
      <ReportSearchBar 
        onSearch={handleSearch}
        onSort={handleSort}
        onCategoryFilter={handleCategoryFilter}
        categories={getUniqueCategories()}
      />

      {/* Results Info + Clear Button */}
      {(searchQuery || categoryFilter !== 'all') && (
        <div className="max-w-7xl mx-auto px-4 py-4">
          <p className="text-gray-600">
            Found {filteredReports.length} report{filteredReports.length !== 1 ? 's' : ''}
            {searchQuery && ` for "${searchQuery}"`}
            {categoryFilter !== 'all' && ` in ${categoryFilter}`}
            <button 
              onClick={clearFilters}
              className="ml-4 text-blue-600 hover:underline text-sm"
            >
              Clear filters
            </button>
          </p>
        </div>
      )}

      {/* Top Report Section - unchanged */}
      <section className="max-w-7xl mx-auto px-4 py-12">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-3xl font-bold text-gray-900">Top Report Section</h2>
          <a href="#" className="text-blue-600 hover:underline text-sm">View all reports</a>
        </div>
        
        <p className="text-gray-600 mb-8 leading-relaxed">
          Explore our collection of free whitepapers and paid market intelligence reports covering the latest trends, analyses, and forecasts in the pharmaceutical and life sciences industry.
        </p>

        {topReports.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {topReports.map((report) => (
              <div key={report._id} className="rounded-lg overflow-hidden shadow-md bg-white hover:shadow-lg transition-shadow">
                <div className="aspect-[3/4] bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center p-6">
                  <h3 className="text-white font-bold text-lg text-center">{report.title}</h3>
                </div>
                <div className="p-4">
                  <p className="text-sm text-gray-600 mb-2 line-clamp-2">{report.description}</p>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">{report.category}</span>
                    {report.isFree && <span className="text-xs text-green-600 font-semibold">FREE</span>}
                  </div>
                  {report.downloadUrl && (
                    <a 
                      href={report.downloadUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="block w-full text-center bg-blue-600 text-white py-2 rounded text-sm hover:bg-blue-700 transition-colors"
                    >
                      Download
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-gray-500 text-center py-8">No reports found matching your criteria.</p>
        )}
      </section>

      {/* Whitepaper Section - unchanged */}
      <section className="max-w-7xl mx-auto px-4 py-12">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-3xl font-bold text-gray-900">Whitepaper Section</h2>
          <a href="#" className="text-blue-600 hover:underline text-sm">View all reports</a>
        </div>
        
        <p className="text-gray-600 mb-8 leading-relaxed">
          Access our free whitepapers to stay informed on critical industry topics.
        </p>

        {whitepapers.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {whitepapers.map((report) => (
              <div key={report._id} className="rounded-lg overflow-hidden shadow-md bg-white hover:shadow-lg transition-shadow">
                <div className="aspect-[3/4] bg-gradient-to-br from-green-500 to-green-700 flex items-center justify-center p-6">
                  <h3 className="text-white font-bold text-lg text-center">{report.title}</h3>
                </div>
                <div className="p-4">
                  <p className="text-sm text-gray-600 mb-2 line-clamp-2">{report.description}</p>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded">{report.category}</span>
                    <span className="text-xs text-green-600 font-semibold">FREE</span>
                  </div>
                  {report.downloadUrl && (
                    <a 
                      href={report.downloadUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="block w-full text-center bg-green-600 text-white py-2 rounded text-sm hover:bg-green-700 transition-colors"
                    >
                      Download
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-gray-500 text-center py-8">No whitepapers found matching your criteria.</p>
        )}
      </section>

      {/* Market Intelligence Reports Section - unchanged */}
      <section className="max-w-7xl mx-auto px-4 py-12">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-3xl font-bold text-gray-900">Market Intelligence Reports Section</h2>
          <a href="#" className="text-blue-600 hover:underline text-sm">View all reports</a>
        </div>
        
        <p className="text-gray-600 mb-8 leading-relaxed">
          Our premium Market Intelligence Reports offer in-depth analyses for only $10 each.
        </p>

        {marketReports.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {marketReports.map((report) => (
              <div key={report._id} className="rounded-lg overflow-hidden shadow-md bg-white hover:shadow-lg transition-shadow">
                <div className="aspect-[3/4] bg-gradient-to-br from-purple-500 to-purple-700 flex items-center justify-center p-6">
                  <h3 className="text-white font-bold text-lg text-center">{report.title}</h3>
                </div>
                <div className="p-4">
                  <p className="text-sm text-gray-600 mb-2 line-clamp-2">{report.description}</p>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs bg-purple-100 text-purple-800 px-2 py-1 rounded">{report.category}</span>
                    {!report.isFree && <span className="text-xs text-purple-600 font-semibold">$10</span>}
                  </div>
                  {report.downloadUrl && (
                    <a 
                      href={report.downloadUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="block w-full text-center bg-purple-600 text-white py-2 rounded text-sm hover:bg-purple-700 transition-colors"
                    >
                      {report.isFree ? 'Download' : 'Purchase & Download'}
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-gray-500 text-center py-8">No market intelligence reports found.</p>
        )}
      </section>

      {/* Testimonials Section - exactly as you had it */}
      <section className="max-w-7xl mx-auto px-4 py-16 overflow-hidden">
        <div className="text-center mb-4">
          <p className="text-sm text-gray-500 uppercase tracking-wider mb-2">TESTIMONIALS</p>
          <h2 className="text-4xl font-bold text-gray-900">What our customers say</h2>
        </div>

        <div className="relative mt-12 mb-8">
          <div className="flex gap-8 animate-scroll-right">
            {[...Array(2)].map((_, idx) => (
              <React.Fragment key={idx}>
                <TestimonialCard 
                  text="The insights from PBR reports have been invaluable for our market strategy. Highly recommended!"
                  name="Oluwaseun"
                  company="Asa Creatives"
                />
                <TestimonialCard 
                  text="Great resource for understanding the pharmaceutical landscape in Nigeria. The data is comprehensive and actionable."
                  name="Olayinka"
                  company="Pharma Solutions Ltd"
                />
                <TestimonialCard 
                  text="Massive value for money. These reports helped us identify key opportunities in the market."
                  name="Chidi"
                  company="HealthTech Nigeria"
                />
                <TestimonialCard 
                  text="The whitepaper on sickle cell disease was eye-opening. Excellent research quality."
                  name="Joyce"
                  company="Medical Research Institute"
                />
                <TestimonialCard 
                  text="Insightful analysis that helped shape our investment decisions. Worth every penny!"
                  name="Ademola"
                  company="Capital Ventures"
                />
              </React.Fragment>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="flex gap-8 animate-scroll-left">
            {[...Array(2)].map((_, idx) => (
              <React.Fragment key={idx}>
                <TestimonialCard 
                  text="Respect to the team at PBR. Their market intelligence reports are top-notch and always timely."
                  name="Funmilayo"
                  company="BioHealth Innovations"
                />
                <TestimonialCard 
                  text="As a pharmaceutical executive, these reports are essential for staying competitive in the Nigerian market."
                  name="Emeka"
                  company="MedCare Nigeria"
                />
                <TestimonialCard 
                  text="The depth of analysis is impressive. PBR has become our go-to source for industry intelligence."
                  name="Aisha"
                  company="LifeScience Consultants"
                />
                <TestimonialCard 
                  text="Outstanding research quality. The obesity report opened our eyes to new market opportunities."
                  name="Tunde"
                  company="Wellness Group Africa"
                />
                <TestimonialCard 
                  text="Professional, detailed, and actionable insights. Exactly what we needed for our expansion plans."
                  name="Ngozi"
                  company="Global Pharma Partners"
                />
              </React.Fragment>
            ))}
          </div>
        </div>

        <style jsx>{`
          @keyframes scroll-right {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          @keyframes scroll-left {
            0% { transform: translateX(-50%); }
            100% { transform: translateX(0); }
          }
          .animate-scroll-right { animation: scroll-right 40s linear infinite; }
          .animate-scroll-left { animation: scroll-left 40s linear infinite; }
        `}</style>
      </section>
    </div>
  );
}