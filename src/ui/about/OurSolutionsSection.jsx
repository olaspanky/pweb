import React from 'react';

const DifferentiatingEdge = () => {
  const features = [
    {
      title: "Deep Roots in Emerging Markets",
      description: "We thrive where others hesitate, filling critical voids in real-world healthcare data across Africa and beyond. Sourcing anonymized insights directly from African pharmacies on drug quantities, purchase patterns, and market behaviors we offer unparalleled local intelligence. This granular understanding of regulatory landscapes, commercial dynamics, and consumer realities equips our clients to navigate and conquer these high-potential markets with confidence."
    },
    {
      title: "AI-Powered Analytics",
      description: "Our robust AI and machine learning infrastructure turns millions of data points into instant, transformative analytics. Through generative AI, clients can pose natural language queries and receive tailored responses for pricing optimization, demand forecasting, and new product launches. This sophistication enables faster, smarter decisions that propel commercial success and patient impact."
    },
    {
      title: "Real-World Data as a Service",
      description: "Operating on a flexible Data-as-a-Service model, we deliver anonymized real-world evidence via intuitive dashboards, subscriptions, bespoke reports, and expert consultancy. Beyond raw data, our platform generates real-world evidence tailored for strategic planning, ensuring life sciences leaders gain a competitive edge in commercial execution and beyond."
    },
    {
      title: "Local Insight Meets Global Acumen",
      description: "Our team unites pharmacy professionals, medical experts, data scientists, and seasoned consultants many with direct experience from giants like Pfizer, AstraZeneca, and GSK. Led by founder Ayodeji Alaran, we maintain a strong on-the ground presence in Lagos, Sub-Saharan Africa, complemented by an international network. This fusion of local nuance and multidisciplinary prowess delivers holistic solutions attuned to the unique rhythms of emerging healthcare ecosystems."
    },
    {
      title: "Unmatched Scale",
      description: "Backed by a proprietary repository encompassing over 50 million pharmaceutical data points, 10,000+ brands, and performance metrics for 1,500+ companies, our assets form the bedrock for reliable, predictive analytics. This depth ensures our insights are not only comprehensive but also scalable, supporting everything from tactical operations to visionary R&D."
    },
    {
      title: "Traction, Growth, and Trusted Partnership",
      description: "With $1 million in pre-seed funding from esteemed backers like Techstars, Launch Africa, and ARM Labs, we've achieved explosive 200% revenue growth since 2023. Serving marquee clients including Sanofi and Roche, we validate our model daily turning emerging market challenges into opportunities for sustainable expansion."
    }
  ];

  return (
    <div className="relative min-h-screen overflow-hidden flex justify-center items-center  py-20">
      {/* Background Pattern Overlay */}
      <div 
        className="  max-w-[1440px] p-20"
        style={{
          backgroundImage: `url("./bg1.png")`,
        }}
      >
      
      {/* Decorative Gradient Orbs */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-3xl font-bold text-white mb-6">
            Our Differentiating Edge: Connected Intelligence for Emerging Markets
          </h1>
          <p className="text-lg md:text-sm text-blue-100 max-w-4xl mx-auto leading-relaxed">
            What sets PBR Life Sciences apart is our unique blend of localized expertise, cutting-edge technology, 
            and vast proprietary data assets. We don't just provide data; we connect it with advanced AI to accelerate 
            decision-making from market entry strategies to product forecasting delivering results in minutes, not months.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white/5 backdrop-blur-sm border border-cyan-500/20 rounded-lg p-6 hover:bg-white/10 hover:border-cyan-400/40 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/20"
            >
              {/* Decorative Corner Accent */}
              
              <h3 className="text-lg font-semibold text-white mb-4">
                {feature.title}
              </h3>
              <p className="text-blue-100 leading-relaxed text-xs">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Diagonal Stripe Decorations */}
        <div className="absolute top-1/4 left-0 w-32 h-32 opacity-20">
          <div className="w-full h-full bg-gradient-to-br from-cyan-400 to-transparent transform -rotate-45" 
               style={{ clipPath: 'polygon(0 0, 100% 0, 100% 20%, 0 20%)' }} />
        </div>
        <div className="absolute bottom-1/4 right-0 w-32 h-32 opacity-20">
          <div className="w-full h-full bg-gradient-to-tl from-blue-400 to-transparent transform rotate-45" 
               style={{ clipPath: 'polygon(0 80%, 100% 80%, 100% 100%, 0 100%)' }} />
        </div>
      </div>
      </div>
    </div>
  );
};

export default DifferentiatingEdge;