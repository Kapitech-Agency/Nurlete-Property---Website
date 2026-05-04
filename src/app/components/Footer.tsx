import React from 'react';
import { Link } from 'react-router';
import { Instagram, Linkedin, Twitter, ArrowUpRight } from 'lucide-react';

export function Footer() {
  return (
    <footer className="relative z-10 py-[64px] px-[20px] md:px-[80px] mt-[64px] w-full font-['Inter']">
      <div className="max-w-7xl mx-auto w-full">
        
        {/* Main Dark Footer Container */}
        <div className="w-full bg-[#1A1A1A] selection:bg-white selection:text-[#1A1A1A] backdrop-blur-[60px] border border-white/[0.08] rounded-[32px] md:rounded-[48px] p-[40px] md:p-[80px] shadow-[0_-24px_48px_rgba(0,0,0,0.1),inset_0_1px_1px_rgba(255,255,255,0.1)] relative overflow-hidden">
          
          {/* Subtle glow behind footer content */}
          <div className="absolute bottom-[-20%] left-[20%] w-[60%] h-[60%] rounded-full bg-white/[0.02] blur-[120px] pointer-events-none mix-blend-screen" />
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-[48px] lg:gap-[80px] mb-[80px] relative z-10 w-full">
            
            {/* Brand Column */}
            <div className="lg:col-span-4 flex flex-col items-start w-full">
              <Link to="/" className="flex items-center gap-[16px] mb-[32px] group min-h-[44px] min-w-[44px]">
                <div className="w-[48px] h-[48px] rounded-[16px] bg-white flex items-center justify-center shadow-[inset_0_1px_1px_rgba(0,0,0,0.2)] group-hover:scale-105 transition-transform">
                  <span className="text-[#1A1A1A] font-['Inter'] font-bold text-[24px] leading-none">N</span>
                </div>
                <span className="font-['Inter'] font-semibold text-[20px] leading-[1.3] tracking-wide text-white group-hover:opacity-80 transition-opacity">
                  Nurlete Property
                </span>
              </Link>
              <p className="font-['Inter'] text-white/60 text-[15px] md:text-[16px] leading-[1.6] max-w-sm mb-[40px] font-medium w-full">
                Defining the future of luxury real estate through modern minimalist design, exceptional structural integrity, and visionary architecture like Nava Terra.
              </p>
              
              <div className="flex items-center gap-[16px] w-full">
                <a href="#" className="w-[48px] h-[48px] min-w-[48px] min-h-[48px] rounded-full bg-white/[0.05] border border-white/[0.1] flex items-center justify-center text-white/60 hover:text-white hover:bg-white/[0.1] transition-all shadow-[0_4px_12px_rgba(0,0,0,0.2),inset_0_1px_1px_rgba(255,255,255,0.1)]">
                  <Instagram size={20} />
                </a>
                <a href="#" className="w-[48px] h-[48px] min-w-[48px] min-h-[48px] rounded-full bg-white/[0.05] border border-white/[0.1] flex items-center justify-center text-white/60 hover:text-white hover:bg-white/[0.1] transition-all shadow-[0_4px_12px_rgba(0,0,0,0.2),inset_0_1px_1px_rgba(255,255,255,0.1)]">
                  <Linkedin size={20} />
                </a>
                <a href="#" className="w-[48px] h-[48px] min-w-[48px] min-h-[48px] rounded-full bg-white/[0.05] border border-white/[0.1] flex items-center justify-center text-white/60 hover:text-white hover:bg-white/[0.1] transition-all shadow-[0_4px_12px_rgba(0,0,0,0.2),inset_0_1px_1px_rgba(255,255,255,0.1)]">
                  <Twitter size={20} />
                </a>
              </div>
            </div>

            {/* Site Map Column */}
            <div className="lg:col-span-3 lg:col-start-6 w-full">
              <h4 className="font-['Inter'] text-white font-bold text-[13px] uppercase tracking-[0.15em] mb-[32px]">Site Map</h4>
              <ul className="space-y-[16px] w-full">
                <li><Link to="/" className="flex items-center min-h-[44px] min-w-[44px] font-['Inter'] font-semibold text-white/60 hover:text-white text-[15px] leading-[1.5] transition-colors py-[8px] w-full">Home</Link></li>
                <li><Link to="/story" className="flex items-center min-h-[44px] min-w-[44px] font-['Inter'] font-semibold text-white/60 hover:text-white text-[15px] leading-[1.5] transition-colors py-[8px] w-full">Our Heritage</Link></li>
                <li><Link to="/portfolios" className="flex items-center min-h-[44px] min-w-[44px] font-['Inter'] font-semibold text-white/60 hover:text-white text-[15px] leading-[1.5] transition-colors py-[8px] w-full">Portfolios</Link></li>
                <li><Link to="/contact" className="flex items-center min-h-[44px] min-w-[44px] font-['Inter'] font-semibold text-white/60 hover:text-white text-[15px] leading-[1.5] transition-colors py-[8px] w-full">Contact Sales</Link></li>
              </ul>
            </div>

            {/* Newsletter Column */}
            <div className="lg:col-span-4 w-full">
              <h4 className="font-['Inter'] text-white font-bold text-[13px] uppercase tracking-[0.15em] mb-[32px]">Direct Inquiry</h4>
              <p className="font-['Inter'] text-white/60 text-[15px] leading-[1.6] mb-[32px] font-medium w-full">
                Connect with our VIP Concierge directly on WhatsApp for Nava Terra viewing appointments.
              </p>
              
              <a href="https://wa.me/6282239415718" target="_blank" rel="noreferrer" className="inline-flex bg-white text-[#1A1A1A] rounded-full px-[32px] py-[20px] text-[15px] leading-[1.5] font-bold items-center justify-center gap-[12px] hover:bg-white/90 hover:scale-[1.02] active:scale-[0.98] transition-all shadow-[0_4px_12px_rgba(255,255,255,0.1)] min-h-[56px] min-w-[44px] w-full lg:w-auto">
                Chat on WhatsApp <ArrowUpRight size={20} />
              </a>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center pt-[48px] border-t border-white/[0.08] gap-[32px] relative z-10 w-full">
            <p className="font-['Inter'] text-white/40 text-[14px] leading-[1.5] font-semibold w-full md:w-auto">
              © 2026 Nurlete Property. All rights reserved.
            </p>

            <div className="flex flex-col md:flex-row items-start md:items-center gap-[16px] md:gap-[32px] font-['Inter'] text-white/40 text-[14px] leading-[1.5] font-semibold w-full md:w-auto">
              <a href="#" className="flex items-center min-h-[44px] min-w-[44px] hover:text-white transition-colors py-[8px] w-full md:w-auto">Privacy Policy</a>
              <a href="#" className="flex items-center min-h-[44px] min-w-[44px] hover:text-white transition-colors py-[8px] w-full md:w-auto">Terms of Service</a>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
}
