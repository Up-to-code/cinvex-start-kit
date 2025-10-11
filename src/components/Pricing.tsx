// components/Pricing.tsx
import { FiCheck, FiStar, FiZap, FiUser, FiUsers } from 'react-icons/fi';

export default function Pricing() {
  const plans = [
    {
      name: "Free",
      price: "$0",
      period: "forever",
      description: "Perfect for getting started",
      popular: false,
      features: [
        { text: "1,000 emails/month", included: true },
        { text: "Basic templates", included: true },
        { text: "Drag & Drop editor", included: true },
        { text: "Community support", included: true },
        { text: "AI Assistant", included: false },
        { text: "Advanced analytics", included: false },
        { text: "Stripe integration", included: false }
      ],
      icon: <FiUser className="text-2xl" />,
      buttonStyle: "bg-white text-[#62BCBA] border-2 border-[#62BCBA] hover:bg-[#62BCBA] hover:text-white"
    },
    {
      name: "Starter",
      price: "$19",
      period: "per month",
      description: "Everything to grow your business",
      popular: true,
      features: [
        { text: "10,000 emails/month", included: true },
        { text: "All 1600+ templates", included: true },
        { text: "Advanced editor", included: true },
        { text: "Priority support", included: true },
        { text: "AI Assistant", included: true },
        { text: "Basic analytics", included: true },
        { text: "Stripe integration", included: true }
      ],
      icon: <FiUsers className="text-2xl" />,
      buttonStyle: "bg-[#F78D50] text-white border-2 border-[#F78D50] hover:bg-[#E67C3F] hover:border-[#E67C3F]"
    },
    {
      name: "Professional",
      price: "$49",
      period: "per month",
      description: "Advanced features for scaling",
      popular: false,
      features: [
        { text: "100,000 emails/month", included: true },
        { text: "All templates + Custom", included: true },
        { text: "Advanced automation", included: true },
        { text: "24/7 phone support", included: true },
        { text: "Advanced AI Assistant", included: true },
        { text: "Advanced analytics", included: true },
        { text: "Stripe + API access", included: true }
      ],
      icon: <FiZap className="text-2xl" />,
      buttonStyle: "bg-[#62BCBA] text-white border-2 border-[#62BCBA] hover:bg-[#4AA8A6] hover:border-[#4AA8A6]"
    }
  ];

  return (
    <section id="pricing" className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 bg-[#FCF6EA] rounded-2xl px-6 py-3 mb-8 border-2 border-[#F5CB9B]">
            <FiStar className="text-[#62BCBA] text-lg" />
            <span className="text-[#62BCBA] font-semibold">SIMPLE PRICING</span>
          </div>
          <h2 className="text-4xl font-bold text-[#2D3748] mb-6">
            Choose Your Perfect Plan
          </h2>
          <p className="text-lg text-[#4A5568] max-w-2xl mx-auto">
            Start free, upgrade as you grow. No hidden fees, no surprises.
          </p>
        </div>

        {/* Pricing Cards - All in One Line */}
        <div className="flex flex-col lg:flex-row gap-6 mb-16 items-stretch">
          {plans.map((plan, index) => (
            <div 
              key={index} 
              className={`flex-1 rounded-2xl p-6 border-2 relative group ${
                plan.popular 
                  ? 'border-[#F78D50] bg-[#FCF6EA]' 
                  : 'border-[#F5CB9B] bg-white'
              } hover:border-[#62BCBA] transition-colors duration-300`}
            >
              {/* Light Hover Effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#62BCBA]/5 to-[#F78D50]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              {/* Popular Badge */}
              {plan.popular && (
                <div className="bg-[#F78D50] text-white px-4 py-2 rounded-xl text-sm font-semibold mb-6 inline-flex items-center gap-2 relative z-10">
                  <FiStar className="text-sm" />
                  Most Popular
                </div>
              )}
              
              {/* Plan Header */}
              <div className="text-center mb-6 relative z-10">
                <div className="bg-white rounded-xl p-3 inline-flex mb-4 border-2 border-[#F5CB9B] group-hover:border-[#62BCBA] transition-colors duration-300">
                  <div className="text-[#62BCBA]">
                    {plan.icon}
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-[#2D3748] mb-2">{plan.name}</h3>
                <p className="text-[#4A5568] text-sm">{plan.description}</p>
              </div>
              
              {/* Price */}
              <div className="text-center mb-6 relative z-10">
                <span className="text-4xl font-bold text-[#2D3748]">{plan.price}</span>
                <span className="text-[#4A5568] ml-2">/{plan.period}</span>
              </div>

              {/* Features List */}
              <ul className="space-y-3 mb-6 relative z-10">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-3">
                    {feature.included ? (
                      <div className="bg-[#62BCBA] rounded-full p-1.5 flex items-center justify-center group-hover:bg-[#F78D50] transition-colors duration-300">
                        <FiCheck className="w-3 h-3 text-white" />
                      </div>
                    ) : (
                      <div className="bg-gray-200 rounded-full p-1.5 flex items-center justify-center">
                        <div className="w-3 h-3 bg-gray-400 rounded-full"></div>
                      </div>
                    )}
                    <span className={`text-sm ${feature.included ? "text-[#2D3748]" : "text-[#718096] line-through"}`}>
                      {feature.text}
                    </span>
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <button className={`w-full rounded-xl py-3 font-semibold text-base flex items-center justify-center gap-2 relative z-10 transition-colors duration-300 ${plan.buttonStyle}`}>
                Get Started
              </button>
            </div>
          ))}
        </div>

        {/* Trust Section */}
        <div className="text-center">
          <div className="bg-[#FCF6EA] rounded-2xl p-8 border-2 border-[#F5CB9B] max-w-4xl mx-auto group hover:border-[#62BCBA] transition-colors duration-300">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
              <div className="text-center lg:text-left">
                <h3 className="text-2xl font-bold text-[#2D3748] mb-3">
                  Not Sure Which Plan to Choose?
                </h3>
                <p className="text-[#4A5568] mb-4">
                  Join <span className="text-[#62BCBA] font-bold">1,500,000+</span> businesses that trust our platform
                </p>
                <div className="flex flex-col sm:flex-row items-center gap-4">
                  <div className="flex items-center gap-2">
                    <div className="flex gap-1">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <div key={star} className="w-3 h-3 bg-[#F78D50] rounded-sm"></div>
                      ))}
                    </div>
                    <span className="text-[#4A5568] text-sm font-medium">4.9/5 Rating</span>
                  </div>
                  <div className="hidden sm:block w-1 h-4 bg-[#F5CB9B]"></div>
                  <div className="text-[#4A5568] text-sm font-medium">
                    <span className="text-[#62BCBA] font-bold">30-Day</span> Money Back
                  </div>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-3">
                <button className="bg-[#F78D50] text-white rounded-xl px-6 py-3 font-semibold text-sm flex items-center justify-center gap-2 hover:bg-[#E67C3F] transition-colors duration-300">
                  Start Free Trial
                </button>
                <button className="bg-white text-[#62BCBA] border-2 border-[#62BCBA] rounded-xl px-6 py-3 font-semibold text-sm flex items-center justify-center gap-2 hover:bg-[#62BCBA] hover:text-white transition-colors duration-300">
                  <FiUsers className="text-lg" />
                  Contact Sales
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}