// components/CTA.tsx
import { FiArrowRight, FiCalendar, FiMail, FiUsers, FiStar, FiCheck } from 'react-icons/fi';

export default function CTA() {
  return (
    <section id="cta" className="py-20 px-6 bg-[#FCF6EA]">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-left">
            <div className="inline-flex items-center gap-3 bg-white rounded-2xl px-5 py-3 mb-8 border-2 border-[#F5CB9B]">
              <FiMail className="text-[#62BCBA] text-lg" />
              <span className="text-[#62BCBA] font-semibold text-sm">READY TO GET STARTED?</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold text-[#2D3748] mb-6 leading-tight">
              Start Creating
              <span className="block text-[#62BCBA]">Amazing Emails</span>
              Today
            </h2>
            
            <p className="text-[#4A5568] text-lg mb-8 leading-relaxed">
              Join thousands of users creating stunning email campaigns with our intuitive drag-and-drop builder. No credit card required.
            </p>

            {/* Trust Indicators */}
            <div className="flex flex-col sm:flex-row gap-8 mb-8">
              <div className="flex items-center gap-4">
                <div className="flex -space-x-3">
                  {[1, 2, 3].map((i) => (
                    <div 
                      key={i}
                      className="w-10 h-10 bg-[#62BCBA] rounded-full border-2 border-white flex items-center justify-center text-white text-sm font-bold"
                    >
                      {i}
                    </div>
                  ))}
                </div>
                <div className="text-[#2D3748]">
                  <div className="font-bold text-lg">10,000+</div>
                  <div className="text-[#4A5568] text-sm">Active Users</div>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="flex gap-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <div key={star} className="w-4 h-4 bg-[#F78D50] rounded-sm"></div>
                  ))}
                </div>
                <div className="text-[#2D3748]">
                  <div className="font-bold text-lg">4.9/5</div>
                  <div className="text-[#4A5568] text-sm">Rating</div>
                </div>
              </div>
            </div>

            {/* Feature List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
              {[
                "No credit card required",
                "Free forever plan",
                "30-day money back",
                "24/7 support"
              ].map((feature, index) => (
                <div key={index} className="flex items-center gap-3 text-[#4A5568]">
                  <div className="bg-[#62BCBA] rounded-full p-1.5">
                    <FiCheck className="w-3 h-3 text-white" />
                  </div>
                  <span className="font-medium text-sm">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content - CTA Cards */}
          <div className="space-y-6">
            {/* Main CTA Card */}
            <div className="bg-white rounded-2xl p-8 border-2 border-[#F5CB9B] text-center hover:border-[#62BCBA] transition-colors duration-300">
              <h3 className="text-2xl font-bold text-[#2D3748] mb-4">Start Free Today</h3>
              <p className="text-[#4A5568] mb-6">Get immediate access to all basic features</p>
              
              <div className="space-y-4 mb-6">
                <button className="w-full bg-[#F78D50] text-white rounded-xl px-6 py-4 font-semibold text-base flex items-center justify-center gap-3 hover:bg-[#E67C3F] transition-colors duration-300">
                  Get Started Free
                  <FiArrowRight className="text-lg" />
                </button>
                
                <button className="w-full bg-white text-[#62BCBA] border-2 border-[#62BCBA] rounded-xl px-6 py-4 font-semibold text-base flex items-center justify-center gap-3 hover:bg-[#62BCBA] hover:text-white transition-colors duration-300">
                  <FiCalendar className="text-lg" />
                  Schedule a Demo
                </button>
              </div>

              <p className="text-[#4A5568] text-xs">
                Free forever plan • No credit card • Cancel anytime
              </p>
            </div>

            {/* Trust Badge */}
            <div className="bg-white rounded-2xl p-6 border-2 border-[#F5CB9B] text-center hover:border-[#62BCBA] transition-colors duration-300">
              <div className="flex items-center justify-center gap-4 text-[#2D3748]">
                <FiUsers className="text-2xl text-[#62BCBA]" />
                <div>
                  <div className="font-bold text-lg">Join 10,000+ Users</div>
                  <div className="text-[#4A5568] text-sm">Worldwide Community</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Trust Bar */}
        <div className="text-center mt-12 pt-8 border-t border-[#F5CB9B]">
          <div className="flex flex-wrap justify-center gap-6 text-[#4A5568] text-sm">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span>99.9% Uptime</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
              <span>Bank-Level Security</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
              <span>GDPR Compliant</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
              <span>24/7 Support</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}