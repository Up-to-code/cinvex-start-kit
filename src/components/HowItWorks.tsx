// components/HowItWorks.tsx
import { FiCheck, FiPlay, FiArrowRight } from 'react-icons/fi';

export default function HowItWorks() {
  const steps = [
    {
      step: "1",
      image: "/images/template-step.png",
      title: "Choose Template",
      description: "Select from 1600+ professionally designed templates for every industry and use case",
      features: ["1600+ Templates", "All Industries", "Mobile Ready", "Easy to Customize"]
    },
    {
      step: "2", 
      image: "/images/design-step.png",
      title: "Customize Design", 
      description: "Use our drag-and-drop editor to create perfect emails in minutes, no coding required",
      features: ["Drag & Drop Editor", "No Coding Skills", "Live Preview", "Brand Controls"]
    },
    {
      step: "3",
      image: "/images/analyze-step.png",
      title: "Send & Analyze",
      description: "Launch campaigns and track performance with real-time analytics and A/B testing",
      features: ["Smart Scheduling", "Real-time Analytics", "A/B Testing", "Performance Reports"]
    }
  ];

  return (
    <section id="how-it-works" className="py-20 px-6 bg-[#FCF6EA]">
      <div className="max-w-6xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-white rounded-xl px-5 py-3 mb-6 border border-[#F5CB9B]">
            <FiPlay className="text-[#62BCBA] text-base" />
            <span className="text-[#62BCBA] font-semibold text-sm">HOW IT WORKS</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-[#2D3748] mb-6">
            Create Amazing Emails in 3 Simple Steps
          </h2>
          <p className="text-xl text-[#4A5568] max-w-2xl mx-auto">
            Follow our easy process to design, build, and launch successful email campaigns
          </p>
        </div>

        {/* Timeline with Images */}
        <div className="relative">
          {/* Center Timeline */}
          <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-[#F5CB9B] transform -translate-x-1/2 hidden md:block"></div>
          
          {/* Steps Container */}
          <div className="space-y-20">
            {steps.map((step, index) => (
              <div key={index} className={`flex flex-col md:flex-row items-center gap-8 ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}>
                
                {/* Content Side */}
                <div className="md:w-1/2">
                  <div className="bg-white rounded-2xl border-2 border-[#F5CB9B] p-8 hover:border-[#62BCBA] transition-all duration-300 group hover:shadow-lg">
                    {/* Step Header */}
                    <div className="flex items-center gap-4 mb-6">
                      <div className={`text-white w-14 h-14 rounded-xl flex items-center justify-center text-xl font-bold ${
                        index % 2 === 0 ? 'bg-[#62BCBA]' : 'bg-[#F78D50]'
                      } group-hover:scale-110 transition-transform duration-300`}>
                        {step.step}
                      </div>
                      <h3 className="text-2xl font-bold text-[#2D3748] group-hover:text-[#62BCBA] transition-colors duration-300">
                        {step.title}
                      </h3>
                    </div>

                    {/* Description */}
                    <p className="text-[#4A5568] mb-6 text-lg leading-relaxed">
                      {step.description}
                    </p>

                    {/* Features */}
                    <div className="space-y-3">
                      {step.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-4 group/feature">
                          <div className="bg-[#62BCBA] rounded-full p-2 flex items-center justify-center group-hover/feature:bg-[#F78D50] transition-colors duration-300">
                            <FiCheck className="w-4 h-4 text-white" />
                          </div>
                          <span className="text-[#4A5568] text-lg font-medium group-hover/feature:text-[#2D3748] transition-colors duration-300">
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Center Dot - Desktop */}
                <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2">
                  <div className={`w-8 h-8 rounded-full border-4 border-white ${
                    index % 2 === 0 ? 'bg-[#62BCBA]' : 'bg-[#F78D50]'
                  } group-hover:scale-125 transition-transform duration-300`}></div>
                </div>

                {/* Image Side */}
                <div className="md:w-1/2">
                  <div className="relative group/image">
                    <div className="bg-white rounded-2xl border-2 border-[#F5CB9B] p-4 hover:border-[#62BCBA] transition-all duration-300">
                      <div className="bg-[#FCF6EA] rounded-xl border border-[#F5CB9B] p-3">
                        {/* Image Container */}
                        <div className="w-full h-64 bg-gradient-to-br from-[#62BCBA] to-[#F78D50] rounded-lg flex items-center justify-center relative overflow-hidden">
                          {/* Image Placeholder - Replace with actual image */}
                          <div className="text-white text-center z-10">
                            <div className="text-2xl font-bold mb-2">Step {step.step}</div>
                            <div className="text-lg opacity-90">{step.title}</div>
                          </div>
                          {/* Hover Overlay */}
                          <div className="absolute inset-0 bg-black/0 group-hover/image:bg-black/10 transition-all duration-300"></div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Mobile Step Dot */}
                    <div className="md:hidden absolute -top-4 -left-4 w-8 h-8 rounded-full border-4 border-white bg-[#62BCBA] flex items-center justify-center text-white font-bold">
                      {step.step}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Progress Indicator */}
        <div className="flex items-center justify-center gap-6 mt-16 mb-12">
          {steps.map((step, index) => (
            <div key={index} className="flex items-center">
              <div className={`w-5 h-5 rounded-full transition-all duration-300 ${
                index % 2 === 0 ? 'bg-[#62BCBA]' : 'bg-[#F78D50]'
              } hover:scale-125`}></div>
              {index < steps.length - 1 && (
                <div className="w-12 h-1 bg-[#F5CB9B] mx-3"></div>
              )}
            </div>
          ))}
        </div>

        {/* Enhanced CTA */}
        <div className="text-center">
          <div className="bg-white rounded-2xl border-2 border-[#F5CB9B] p-10 max-w-2xl mx-auto hover:border-[#62BCBA] transition-all duration-300 group/cta">
            <h3 className="text-3xl font-bold text-[#2D3748] mb-4 group-hover/cta:text-[#62BCBA] transition-colors duration-300">
              Ready to Get Started?
            </h3>
            <p className="text-[#4A5568] text-lg mb-8">
              Join 10,000+ businesses creating amazing emails with Emailly
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className="group/btn bg-[#F78D50] text-white rounded-xl px-8 py-4 font-semibold text-lg flex items-center justify-center gap-3 hover:bg-[#E67C3F] transition-all duration-300 hover:scale-105 min-w-[200px]">
                <span>Start Free Trial</span>
                <FiArrowRight className="group-hover/btn:translate-x-1 transition-transform duration-300" />
              </button>
              
              <button className="border-2 border-[#62BCBA] text-[#62BCBA] rounded-xl px-8 py-4 font-semibold text-lg hover:bg-[#62BCBA] hover:text-white transition-all duration-300 min-w-[200px]">
                Watch Demo
              </button>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-8 text-[#4A5568]">
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <div key={star} className="w-4 h-4 bg-[#F78D50] rounded-sm"></div>
                  ))}
                </div>
                <span className="text-sm font-medium">4.9/5 from 2,500+ reviews</span>
              </div>
              
              <div className="hidden sm:block w-1 h-1 bg-[#F5CB9B] rounded-full"></div>
              
              <div className="flex items-center gap-2">
                <FiCheck className="text-[#62BCBA] text-lg" />
                <span className="text-sm font-medium">No credit card required</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}