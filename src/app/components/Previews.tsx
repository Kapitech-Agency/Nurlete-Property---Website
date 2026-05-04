import React from 'react';
import { ArrowRight, ShieldCheck, Diamond, LineChart, Cpu } from 'lucide-react';
import { Link } from 'react-router';

export function Previews() {
  return (
    <section className="py-[120px] md:py-[160px] relative z-10 border-t border-[#1A1A1A]/[0.05] bg-[#F5F4F0] overflow-hidden">
      
      {/* Decorative Background Element */}
      <div className="absolute top-0 right-0 w-[50%] h-[100%] pointer-events-none opacity-20">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid-pattern" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#1A1A1A" strokeWidth="0.5" strokeOpacity="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid-pattern)" />
        </svg>
        <div className="absolute inset-0 bg-gradient-to-l from-transparent to-[#F5F4F0]" />
      </div>

      <div className="max-w-7xl mx-auto px-[20px] md:px-[80px] w-full relative z-10">
        
        <div className="flex flex-col lg:flex-row gap-[64px] items-center">
          
          <div className="flex-1 w-full">
            <div className="inline-flex items-center gap-[8px] px-[16px] py-[8px] rounded-full bg-white/80 backdrop-blur-xl border border-[#1A1A1A]/[0.08] mb-[24px] shadow-[inset_0_1px_1px_rgba(255,255,255,1),0_4px_12px_rgba(0,0,0,0.03)] min-h-[44px]">
              <span className="w-[8px] h-[8px] rounded-full bg-[#1A1A1A] shadow-[0_0_8px_rgba(26,26,26,0.3)]" />
              <span className="text-[#1A1A1A] font-['Inter'] font-bold uppercase tracking-[0.2em] text-[11px] leading-none">The Nurlete Advantage</span>
            </div>
            
            <h2 className="font-['Inter'] text-[#1A1A1A] text-[36px] md:text-[48px] leading-[1.2] font-semibold tracking-tight mb-[24px]">
              Elevating the Ambon Standard.
            </h2>
            
            <p className="font-['Inter'] text-[#1A1A1A]/60 text-[15px] md:text-[16px] leading-[1.6] font-medium mb-[40px] max-w-xl">
              We bridge the gap between visionary design and everyday functionality. Through rigorous engineering, premium materials, and a deep understanding of tropical climates, we create properties that appreciate in both value and comfort.
            </p>

            <Link to="/project/nava-terra" className="inline-flex items-center justify-center gap-[12px] bg-[#1A1A1A] text-white px-[32px] py-[16px] rounded-full font-['Inter'] font-bold text-[15px] shadow-[0_16px_32px_rgba(26,26,26,0.2),inset_0_1px_1px_rgba(255,255,255,0.2)] hover:bg-[#333] hover:scale-105 active:scale-95 transition-all min-h-[56px] min-w-[44px] group">
              Explore Nava Terra <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="flex-1 w-full grid grid-cols-1 sm:grid-cols-2 gap-[24px]">
            
            {[
              { icon: <Diamond size={24} />, title: "Premium Materiality", desc: "Sourcing strictly high-grade 60x60 granite and structural steel." },
              { icon: <Cpu size={24} />, title: "Smart Ecosystem", desc: "Invisible smart home integrations ready for modern living." },
              { icon: <ShieldCheck size={24} />, title: "Coral Rock Base", desc: "Deep foundation technology ensuring generational durability." },
              { icon: <LineChart size={24} />, title: "High Yield Asset", desc: "Strategically located to maximize capital appreciation." }
            ].map((adv, idx) => (
              <div key={idx} className="bg-white/80 backdrop-blur-[40px] border border-[#1A1A1A]/[0.05] rounded-[32px] p-[32px] shadow-[0_16px_40px_rgba(0,0,0,0.02),inset_0_1px_1px_rgba(255,255,255,1)] hover:bg-white hover:-translate-y-2 hover:shadow-[0_24px_64px_rgba(0,0,0,0.04)] transition-all duration-500 group">
                <div className="w-[48px] h-[48px] rounded-[16px] bg-[#1A1A1A]/5 text-[#1A1A1A] flex items-center justify-center mb-[24px] group-hover:bg-[#1A1A1A] group-hover:text-white transition-colors duration-500">
                  {adv.icon}
                </div>
                <h3 className="font-['Inter'] text-[#1A1A1A] text-[18px] font-semibold leading-[1.3] mb-[12px]">{adv.title}</h3>
                <p className="font-['Inter'] text-[#1A1A1A]/60 text-[14px] leading-[1.6] font-medium">{adv.desc}</p>
              </div>
            ))}

          </div>

        </div>
      </div>
    </section>
  );
}
