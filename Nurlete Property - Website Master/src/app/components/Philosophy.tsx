import React from 'react';
import { Leaf, ShieldCheck, Sparkles, Cpu } from 'lucide-react';

export function Philosophy() {
  const philosophies = [
    {
      icon: <Leaf size={32} />,
      title: "Sustainable Footprint",
      desc1: "We pioneer eco-conscious development. Integrating light brick and coral rock minimizes environmental impact.",
      desc2: "Our designs reduce carbon footprints while enhancing natural cooling for Ambon's tropical climate."
    },
    {
      icon: <ShieldCheck size={32} />,
      title: "Absolute Precision",
      desc1: "Safety and durability are non-negotiable. Our reinforced concrete structures are built to outlast generations.",
      desc2: "Every structural element undergoes rigorous quality control to meet international building standards."
    },
    {
      icon: <Sparkles size={32} />,
      title: "Quality Craftsmanship",
      desc1: "Minimalism demands perfection. Clean lines are complemented by flawless 60x60 granite finishing.",
      desc2: "We marry premium materials with expert craftsmanship to deliver an unparalleled aesthetic experience."
    },
    {
      icon: <Cpu size={32} />,
      title: "Invisible Tech",
      desc1: "We believe in smart homes that don't look like server rooms. Technology must empower, not intrude.",
      desc2: "Seamlessly integrated climate and security systems preserve the visual harmony of your modern space."
    }
  ];

  return (
    <section id="philosophy" className="py-[120px] md:py-[160px] relative z-10 w-full font-['Inter'] bg-[#F5F4F0]">
      <div className="max-w-7xl mx-auto px-[20px] md:px-[80px] w-full">
        
        <div className="w-full bg-white/60 backdrop-blur-[60px] border border-[#1A1A1A]/[0.08] rounded-[40px] md:rounded-[64px] p-[40px] md:p-[80px] shadow-[0_32px_80px_rgba(0,0,0,0.04),inset_0_1px_1px_rgba(255,255,255,1)] relative overflow-hidden group">
          
          <div className="absolute top-[-20%] right-[-10%] w-[60%] h-[60%] rounded-full bg-gradient-to-bl from-white via-white/50 to-transparent blur-[80px] pointer-events-none group-hover:scale-125 transition-transform duration-1000 z-0" />
          <div className="absolute bottom-[-20%] left-[-10%] w-[50%] h-[50%] rounded-full bg-[#1A1A1A]/[0.03] blur-[100px] pointer-events-none group-hover:scale-110 transition-transform duration-1000 z-0" />

          <div className="text-center mb-[64px] md:mb-[96px] relative z-10">
            <div className="inline-flex items-center gap-[8px] px-[16px] py-[8px] rounded-full bg-white/80 border border-[#1A1A1A]/[0.05] mb-[24px] shadow-[inset_0_1px_1px_rgba(255,255,255,1),0_4px_16px_rgba(0,0,0,0.03)] min-h-[44px]">
              <span className="w-[8px] h-[8px] rounded-full bg-[#1A1A1A] shadow-[0_0_8px_rgba(26,26,26,0.3)]" />
              <span className="text-[#1A1A1A] font-bold uppercase tracking-[0.2em] text-[11px] leading-none">Our Code</span>
            </div>
            <h2 className="font-['Inter'] text-[36px] md:text-[48px] leading-[1.2] text-[#1A1A1A] font-semibold tracking-tight">
              The Developer's Philosophy
            </h2>
            <p className="font-['Inter'] text-[#1A1A1A]/60 text-[16px] md:text-[18px] leading-[1.6] mt-[24px] max-w-2xl mx-auto font-medium">
              We believe true luxury emerges at the absolute intersection of aesthetic brilliance, environmental responsibility, and structural perfection.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[40px] md:gap-[48px] relative z-10 w-full">
            {philosophies.map((item, idx) => (
              <div key={idx} className="flex flex-col group/card w-full p-[32px] rounded-[32px] bg-white/40 border border-[#1A1A1A]/[0.03] shadow-[0_8px_24px_rgba(0,0,0,0.02),inset_0_1px_1px_rgba(255,255,255,1)] hover:-translate-y-2 hover:shadow-[0_24px_64px_rgba(0,0,0,0.06)] hover:bg-white/80 transition-all duration-500">
                <div className="w-[64px] h-[64px] rounded-[24px] bg-[#1A1A1A]/5 border border-[#1A1A1A]/10 flex items-center justify-center text-[#1A1A1A] mb-[32px] shadow-[inset_0_1px_1px_rgba(255,255,255,0.8)] group-hover/card:bg-[#1A1A1A] group-hover/card:text-white transition-colors duration-500">
                  {item.icon}
                </div>
                <h3 className="font-['Inter'] text-[20px] md:text-[22px] leading-[1.3] font-semibold text-[#1A1A1A] mb-[16px] tracking-tight">
                  {item.title}
                </h3>
                <p className="font-['Inter'] text-[#1A1A1A]/70 text-[15px] leading-[1.6] mb-[16px] font-medium flex-1">
                  {item.desc1}
                </p>
                <p className="font-['Inter'] text-[#1A1A1A]/40 group-hover/card:text-[#1A1A1A]/60 text-[14px] leading-[1.6] font-medium transition-colors duration-500">
                  {item.desc2}
                </p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
