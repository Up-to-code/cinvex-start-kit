"use client";
// components/Navigation.tsx
import { useState } from 'react';
import { FiMail, FiMenu, FiX, FiHome, FiLayers, FiDollarSign, FiUser } from 'react-icons/fi';

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <nav className="bg-white/90 backdrop-blur-sm px-6 py-4 border-b border-[#F5CB9B]/30 sticky top-0 z-50">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          {/* Logo */}
          <div className="flex-1">
            <a className="text-xl font-bold flex items-center gap-2">
              <div className="relative">
                <div className="w-8 h-8 bg-[#62BCBA] rounded-full flex items-center justify-center text-white font-bold">
                  e
                </div>
                <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-[#F78D50] rounded-full border-2 border-white"></div>
              </div>
              <span className="text-[#62BCBA]">e</span>
              <span className="text-[#2D3748]">mailly</span>
              <div className="w-4 h-1 bg-[#F78D50] rounded-full mt-1"></div>
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-6">
            <button className="text-[#2D3748] font-medium hover:text-[#62BCBA] transition-colors flex items-center gap-2">
              <FiHome className="text-lg" />
              Templates
            </button>
            <button className="text-[#2D3748] font-medium hover:text-[#62BCBA] transition-colors flex items-center gap-2">
              <FiLayers className="text-lg" />
              Features
            </button>
            <button className="text-[#2D3748] font-medium hover:text-[#62BCBA] transition-colors flex items-center gap-2">
              <FiDollarSign className="text-lg" />
              Pricing
            </button>
            <button className="bg-[#F78D50] hover:bg-[#E67C3F] text-white rounded-2xl px-6 py-2 font-medium transition-all duration-300 flex items-center gap-2">
              <FiUser className="text-lg" />
              Sign In
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden">
            <button 
              className="p-2 text-[#62BCBA] hover:text-[#F78D50] transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <FiX className="text-2xl" /> : <FiMenu className="text-2xl" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-black/50 z-40 md:hidden" onClick={() => setIsMenuOpen(false)}>
          <div className="bg-white absolute top-0 right-0 w-80 h-full p-6 transform transition-transform">
            {/* Mobile Menu Header */}
            <div className="flex items-center justify-between mb-8">
              <div className="text-lg font-bold flex items-center gap-2">
                <div className="w-6 h-6 bg-[#62BCBA] rounded-full flex items-center justify-center text-white text-sm font-bold">
                  e
                </div>
                <span>emailly</span>
              </div>
              <button 
                className="p-1 text-[#2D3748] hover:text-[#F78D50]"
                onClick={() => setIsMenuOpen(false)}
              >
                <FiX className="text-xl" />
              </button>
            </div>

            {/* Mobile Menu Items */}
            <div className="space-y-4">
              <button className="w-full text-left p-4 rounded-2xl bg-[#FCF6EA] border border-[#F5CB9B] text-[#2D3748] font-medium flex items-center gap-3 hover:bg-[#F8F0E0] transition-colors">
                <FiHome className="text-lg text-[#62BCBA]" />
                Templates
              </button>
              
              <button className="w-full text-left p-4 rounded-2xl bg-[#FCF6EA] border border-[#F5CB9B] text-[#2D3748] font-medium flex items-center gap-3 hover:bg-[#F8F0E0] transition-colors">
                <FiLayers className="text-lg text-[#62BCBA]" />
                Features
              </button>
              
              <button className="w-full text-left p-4 rounded-2xl bg-[#FCF6EA] border border-[#F5CB9B] text-[#2D3748] font-medium flex items-center gap-3 hover:bg-[#F8F0E0] transition-colors">
                <FiDollarSign className="text-lg text-[#62BCBA]" />
                Pricing
              </button>
              
              <div className="pt-4 border-t border-[#F5CB9B]">
                <button className="w-full bg-[#F78D50] hover:bg-[#E67C3F] text-white rounded-2xl p-4 font-medium flex items-center justify-center gap-2 transition-colors">
                  <FiUser className="text-lg" />
                  Sign In
                </button>
              </div>
            </div>

            {/* Trust Badge in Mobile Menu */}
            <div className="absolute bottom-6 left-6 right-6">
              <div className="bg-[#FCF6EA] rounded-2xl p-4 border border-[#F5CB9B] text-center">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <FiMail className="text-[#62BCBA]" />
                  <span className="text-sm font-semibold text-[#62BCBA]">TRUSTED BY 1.5M+ USERS</span>
                </div>
                <div className="flex justify-center gap-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <span key={star} className="text-yellow-400 text-sm">★</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}