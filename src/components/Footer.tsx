// components/Footer.tsx
import { FiMail, FiGithub, FiTwitter, FiLinkedin, FiHeart, FiArrowRight } from 'react-icons/fi';

export default function Footer() {
  return (
    <footer className="bg-white py-16 px-6 border-t-2 border-[#F5CB9B]">
      <div className="max-w-6xl mx-auto">
        {/* Newsletter Section */}
        <div className="bg-[#FCF6EA] rounded-2xl p-8 border-2 border-[#F5CB9B] mb-12 text-center">
          <h3 className="text-2xl font-bold text-[#2D3748] mb-3">Stay Updated</h3>
          <p className="text-[#4A5568] mb-6 max-w-md mx-auto">
            Get the latest tips, templates, and updates delivered to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Enter your email"
              className="flex-1 rounded-xl px-4 py-3 border-2 border-[#F5CB9B] focus:border-[#62BCBA] focus:outline-none transition-colors duration-300"
            />
            <button className="bg-[#F78D50] text-white rounded-xl px-6 py-3 font-semibold flex items-center justify-center gap-2 hover:bg-[#E67C3F] transition-colors duration-300">
              Subscribe
              <FiArrowRight className="text-lg" />
            </button>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center md:text-left mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-3 text-2xl font-bold justify-center md:justify-start">
              <div className="relative">
                <div className="w-10 h-10 bg-[#62BCBA] rounded-xl flex items-center justify-center text-white font-bold text-lg">
                  e
                </div>
                <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-[#F78D50] rounded-full border-2 border-white"></div>
              </div>
              <span className="text-[#62BCBA]">e</span>
              <span className="text-[#2D3748]">mailly</span>
            </div>
            <p className="text-[#4A5568] leading-relaxed text-sm">
              Create beautiful emails that convert with our drag-and-drop builder and professional templates.
            </p>
            <div className="flex gap-4 justify-center md:justify-start">
              {[
                { icon: <FiGithub className="text-xl" />, color: "hover:text-[#62BCBA]" },
                { icon: <FiTwitter className="text-xl" />, color: "hover:text-[#62BCBA]" },
                { icon: <FiLinkedin className="text-xl" />, color: "hover:text-[#62BCBA]" },
                { icon: <FiMail className="text-xl" />, color: "hover:text-[#F78D50]" }
              ].map((social, index) => (
                <div 
                  key={index}
                  className="w-10 h-10 bg-white rounded-xl border-2 border-[#F5CB9B] flex items-center justify-center text-[#4A5568] cursor-pointer hover:border-[#62BCBA] transition-colors duration-300"
                >
                  <div className={social.color}>
                    {social.icon}
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Product */}
          <div>
            <h4 className="font-bold text-[#2D3748] mb-4 text-lg">Product</h4>
            <div className="space-y-3">
              {['Templates', 'Features', 'Pricing', 'Integrations', 'API Docs'].map((item) => (
                <a 
                  key={item} 
                  href="#" 
                  className="block text-[#4A5568] hover:text-[#62BCBA] transition-colors duration-300 text-sm"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
          
          {/* Resources */}
          <div>
            <h4 className="font-bold text-[#2D3748] mb-4 text-lg">Resources</h4>
            <div className="space-y-3">
              {['Documentation', 'Tutorials', 'Blog', 'Community', 'Support'].map((item) => (
                <a 
                  key={item} 
                  href="#" 
                  className="block text-[#4A5568] hover:text-[#F78D50] transition-colors duration-300 text-sm"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
          
          {/* Company */}
          <div>
            <h4 className="font-bold text-[#2D3748] mb-4 text-lg">Company</h4>
            <div className="space-y-3">
              {['About Us', 'Careers', 'Contact', 'Privacy Policy', 'Terms of Service'].map((item) => (
                <a 
                  key={item} 
                  href="#" 
                  className="block text-[#4A5568] hover:text-[#62BCBA] transition-colors duration-300 text-sm"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="border-t border-[#F5CB9B] pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-[#4A5568] text-sm flex items-center gap-2">
              © 2024 Emailly. Made with <FiHeart className="text-[#F78D50]" /> for email creators worldwide.
            </p>
            
            <div className="flex flex-wrap justify-center gap-6 text-[#4A5568] text-sm">
              <a href="#" className="hover:text-[#62BCBA] transition-colors duration-300">Privacy</a>
              <a href="#" className="hover:text-[#62BCBA] transition-colors duration-300">Terms</a>
              <a href="#" className="hover:text-[#62BCBA] transition-colors duration-300">Cookies</a>
              <a href="#" className="hover:text-[#62BCBA] transition-colors duration-300">Security</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}