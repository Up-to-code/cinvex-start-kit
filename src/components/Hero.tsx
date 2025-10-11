// components/Hero.tsx
import { FiPlay, FiArrowRight, FiUsers, FiMail, FiStar } from 'react-icons/fi';

export default function Hero() {
  return (
    <section className="py-16 px-8 bg-gradient-to-br from-[#FCF6EA] to-[#F8F0E0]">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Left Column - Text Content */}
          <div className="lg:w-1/2 text-center lg:text-left">
            {/* Badge */}
            <div className="inline-flex items-center gap-3 bg-white rounded-2xl px-6 py-3 mb-8 border-2 border-[#F5CB9B]">
              <FiMail className="text-[#62BCBA] text-lg" />
              <span className="text-[#62BCBA] font-semibold">DRAG-N-DROP HTML EMAIL BUILDER</span>
            </div>
            
            {/* Headline */}
            <h1 className="text-4xl lg:text-5xl font-bold text-[#2D3748] mb-6 leading-tight">
              Design Emails<br />
              <span className="text-[#62BCBA]">Your Way</span> with<br />
              Easy Drag & Drop
            </h1>
            
            {/* Subtitle */}
            <p className="text-lg text-[#4A5568] mb-8 font-normal leading-relaxed">
              Create stunning email campaigns that convert. No coding required, just drag, drop, and send.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
              <button className="bg-[#F78D50] hover:bg-[#E67C3F] text-white rounded-2xl px-8 py-4 text-lg font-semibold transition-all duration-300 flex items-center justify-center gap-3 group">
                Get Started Free
                <FiArrowRight className="text-xl group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="bg-white hover:bg-gray-50 text-[#62BCBA] border-2 border-[#62BCBA] rounded-2xl px-8 py-4 text-lg font-semibold transition-all duration-300 flex items-center justify-center gap-3">
                <FiPlay className="text-xl" />
                Watch Demo
              </button>
            </div>

            {/* Ratings & Avatars */}
            <div className="flex flex-col sm:flex-row items-center gap-6 mb-8">
              {/* Avatar Stack */}
              <div className="flex -space-x-3">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div 
                    key={i}
                    className="w-12 h-12 bg-gradient-to-br from-[#62BCBA] to-[#F78D50] rounded-full border-2 border-white flex items-center justify-center text-white font-bold text-sm"
                  >
                    U{i}
                  </div>
                ))}
              </div>
              
              {/* Stars & Rating */}
              <div className="flex items-center gap-3">
                <div className="flex gap-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <FiStar key={star} className="text-yellow-400 fill-current text-xl" />
                  ))}
                </div>
                <div className="text-left">
                  <p className="font-bold text-[#2D3748] text-lg">5.0 Rating</p>
                  <p className="text-[#4A5568] text-sm">from 2,500+ reviews</p>
                </div>
              </div>
            </div>

            {/* Trust Stats */}
            <div className="bg-white rounded-2xl p-6 border-2 border-[#F5CB9B]">
              <div className="flex items-center gap-4 mb-4">
                <FiUsers className="text-[#62BCBA] text-2xl" />
                <p className="text-xl font-bold text-[#2D3748]">
                  Join <span className="text-[#62BCBA]">1,500,000+</span> users
                </p>
              </div>
              <p className="text-[#4A5568] mb-4">Trusted by businesses worldwide</p>
              
              {/* Progress bar */}
              <div className="bg-[#FCF6EA] rounded-2xl h-3 overflow-hidden">
                <div className="flex h-full">
                  <div className="bg-[#62BCBA] w-2/5"></div>
                  <div className="bg-[#F78D50] w-1/5"></div>
                  <div className="bg-[#F5CB9B] w-2/5"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Email Examples */}
          <div className="lg:w-1/2">
            <div className="relative">
              {/* Main Email Example */}
              <div className="bg-white rounded-2xl p-8 border-2 border-[#F5CB9B] transform rotate-2 shadow-lg">
                <div className="flex gap-2 mb-4">
                  <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                </div>
                <div className="space-y-4">
                  {/* Email Header */}
                  <div className="bg-[#FCF6EA] rounded-xl p-4 border border-[#F5CB9B]">
                    <div className="text-sm text-[#4A5568]">To: customer@example.com</div>
                    <div className="text-sm text-[#4A5568]">Subject: Welcome to Our Service!</div>
                  </div>
                  
                  {/* Email Content Blocks */}
                  <div className="grid grid-cols-2 gap-3">
                    <div className="bg-[#62BCBA] rounded-xl h-20"></div>
                    <div className="bg-[#F78D50] rounded-xl h-20"></div>
                    <div className="bg-[#F5CB9B] rounded-xl h-32 col-span-2"></div>
                  </div>
                  
                  {/* CTA Button in Email */}
                  <div className="bg-[#2D3748] text-white text-center py-3 rounded-xl font-semibold">
                    Get Started Now
                  </div>
                </div>
              </div>

              {/* Floating Mini Email - Top Right */}
              <div className="absolute -top-4 -right-4 bg-white rounded-xl p-4 border-2 border-[#62BCBA] transform -rotate-6 w-32">
                <div className="space-y-2">
                  <div className="bg-[#62BCBA] rounded h-2"></div>
                  <div className="bg-[#F5CB9B] rounded h-2"></div>
                  <div className="bg-[#F78D50] rounded h-6"></div>
                </div>
              </div>

              {/* Floating Mini Email - Bottom Left */}
              <div className="absolute -bottom-4 -left-4 bg-white rounded-xl p-4 border-2 border-[#F78D50] transform rotate-6 w-32">
                <div className="space-y-2">
                  <div className="bg-[#F78D50] rounded h-3"></div>
                  <div className="bg-[#62BCBA] rounded h-3"></div>
                  <div className="bg-[#F5CB9B] rounded h-4"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}