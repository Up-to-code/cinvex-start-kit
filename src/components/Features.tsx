// components/Features.tsx
import { FiLayers, FiSmartphone, FiZap, FiBarChart2, FiLock, FiCode, FiCheck } from 'react-icons/fi';

export default function Features() {
  const features = [
    {
      icon: <FiLayers className="text-3xl" />,
      title: "1600+ Free Templates",
      description: "Professional HTML email templates for every occasion and industry",
      items: ["Fully customizable", "Mobile-responsive", "Professional designs", "One-click import"]
    },
    {
      icon: <FiZap className="text-3xl" />,
      title: "AI Assistant",
      description: "Smart AI that helps you write compelling copy and optimize content",
      items: ["Smart copywriting", "Design suggestions", "Content optimization", "Personalized recommendations"]
    },
    {
      icon: <FiCode className="text-3xl" />,
      title: "Stripe Integration",
      description: "Seamless plugin for transactional emails and payment notifications",
      items: ["Payment notifications", "Receipt templates", "Real-time sync", "Automated workflows"]
    },
    {
      icon: <FiBarChart2 className="text-3xl" />,
      title: "Advanced Analytics",
      description: "Track opens, clicks, and conversions with detailed insights",
      items: ["Real-time tracking", "Conversion analytics", "Custom reports", "ROI measurement"]
    },
    {
      icon: <FiSmartphone className="text-3xl" />,
      title: "Mobile Responsive",
      description: "Perfect emails on every device with automatic optimization",
      items: ["Auto-responsive", "Mobile preview", "Touch optimized", "Cross-device testing"]
    },
    {
      icon: <FiLock className="text-3xl" />,
      title: "Enterprise Security",
      description: "Bank-level security and compliance for your data",
      items: ["GDPR compliant", "SOC2 certified", "Data encryption", "Regular audits"]
    }
  ];

  return (
    <section id="features" className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 bg-[#FCF6EA] rounded-2xl px-6 py-3 mb-8 border-2 border-[#F5CB9B]">
            <FiLayers className="text-[#62BCBA] text-lg" />
            <span className="text-[#62BCBA] font-semibold text-sm">POWERFUL FEATURES</span>
          </div>
          <h2 className="text-4xl font-bold text-[#2D3748] mb-6">
            Everything You Need to Succeed
          </h2>
          <p className="text-lg text-[#4A5568] max-w-2xl mx-auto">
            Powerful features designed to help you create stunning email campaigns that convert and drive real results
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-white rounded-2xl p-6 border-2 border-[#F5CB9B] hover:border-[#62BCBA] transition-colors duration-300"
            >
              {/* Icon Container */}
              <div className="bg-[#62BCBA] rounded-2xl p-4 inline-flex mb-6">
                <div className="text-white">
                  {feature.icon}
                </div>
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-[#2D3748] mb-4">
                {feature.title}
              </h3>
              
              <p className="text-[#4A5568] mb-6 text-sm leading-relaxed">
                {feature.description}
              </p>
              
              {/* Features List */}
              <ul className="space-y-3">
                {feature.items.map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-[#4A5568]">
                    <div className="bg-[#62BCBA] rounded-full p-1.5 flex items-center justify-center">
                      <FiCheck className="w-3 h-3 text-white" />
                    </div>
                    <span className="text-sm font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center">
          <div className="bg-[#FCF6EA] rounded-2xl p-8 border-2 border-[#F5CB9B] max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold text-[#2D3748] mb-4">
              Ready to Transform Your Email Marketing?
            </h3>
            <p className="text-[#4A5568] mb-6 text-lg">
              Join 10,000+ users creating amazing emails with Emailly
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-6">
              <button className="bg-[#F78D50] text-white rounded-xl px-8 py-4 font-semibold text-base flex items-center justify-center gap-3 hover:bg-[#E67C3F] transition-colors duration-300">
                <span>Start Free Trial</span>
                <FiZap className="text-lg" />
              </button>
              
              <button className="bg-white text-[#62BCBA] border-2 border-[#62BCBA] rounded-xl px-8 py-4 font-semibold text-base flex items-center justify-center gap-3 hover:bg-[#62BCBA] hover:text-white transition-colors duration-300">
                <FiBarChart2 className="text-lg" />
                <span>View Demo</span>
              </button>
            </div>

            {/* Trust Indicators */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-2xl mx-auto">
              <div className="flex flex-col items-center text-center">
                <div className="flex items-center gap-1 mb-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <div key={star} className="w-3 h-3 bg-[#F78D50] rounded-sm"></div>
                  ))}
                </div>
                <span className="text-[#4A5568] text-sm font-medium">4.9/5 Rating</span>
              </div>
              
              <div className="flex flex-col items-center text-center">
                <div className="flex items-center gap-2 mb-2">
                  <FiCheck className="text-[#62BCBA] text-lg" />
                  <span className="text-[#4A5568] text-sm font-medium">No Credit Card</span>
                </div>
                <span className="text-[#4A5568] text-xs">14-day free trial</span>
              </div>
              
              <div className="flex flex-col items-center text-center">
                <div className="flex items-center gap-2 mb-2">
                  <FiLock className="text-[#62BCBA] text-lg" />
                  <span className="text-[#4A5568] text-sm font-medium">Secure & Reliable</span>
                </div>
                <span className="text-[#4A5568] text-xs">99.9% uptime</span>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="flex flex-wrap justify-center gap-8 mt-8 pt-8 border-t border-[#F5CB9B]">
              <div className="text-center">
                <div className="text-xl font-bold text-[#2D3748]">10,000+</div>
                <div className="text-[#4A5568] text-sm">Active Users</div>
              </div>
              <div className="text-center">
                <div className="text-xl font-bold text-[#2D3748]">98%</div>
                <div className="text-[#4A5568] text-sm">Satisfaction</div>
              </div>
              <div className="text-center">
                <div className="text-xl font-bold text-[#2D3748]">24/7</div>
                <div className="text-[#4A5568] text-sm">Support</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}