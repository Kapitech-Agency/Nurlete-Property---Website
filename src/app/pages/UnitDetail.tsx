import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router';
import { motion } from 'motion/react';
import { ArrowLeft, MapPin, Maximize, Home, Layout, MessageCircle, ChevronRight, Ruler, Play, Calculator, Percent } from 'lucide-react';

export function UnitDetail() {
  const { type } = useParams();
  
  // Specific data depending on unit type
  const isType82 = type === "82";
  const title = isType82 ? "Type 82" : "Type 50";
  const price = isType82 ? "Rp 1.250.000.000" : "Rp 850.000.000";
  const lb = isType82 ? "82 m²" : "50 m²";
  const lt = isType82 ? "106 m²" : "78 m²";
  const beds = isType82 ? "3" : "2";
  const baths = isType82 ? "2" : "1";
  const desc = isType82 
    ? "Spacious and airy design tailored for growing families, offering a dedicated master suite, extended dining area, and premium granite finishes. This unit provides the ultimate minimalist luxury with expansive living areas."
    : "The perfect modern minimalist starter home. Features an open-plan living area, abundant natural light, and highly efficient space utilization designed for young professionals or small families.";
  
  const waLink = "https://wa.me/6282239415718";

  const [dpPercent, setDpPercent] = useState<number>(20);
  const [tenureYears, setTenureYears] = useState<number>(15);
  const interestRate = 6.5; // fixed assumption

  const basePriceNum = isType82 ? 1250000000 : 850000000;
  const dpAmount = basePriceNum * (dpPercent / 100);
  const loanAmount = basePriceNum - dpAmount;
  const monthlyRate = (interestRate / 100) / 12;
  const numPayments = tenureYears * 12;
  const monthlyPayment = (loanAmount * monthlyRate) / (1 - Math.pow(1 + monthlyRate, -numPayments));

  const formatIDR = (num: number) => {
    return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', maximumFractionDigits: 0 }).format(num);
  };

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [type]);

  return (
    <div className="pt-[160px] pb-0 w-full z-10 bg-[#F5F4F0] font-['Inter'] relative min-h-screen">
      
      {/* Decorative Grid */}
      <div className="absolute inset-0 opacity-[0.015] pointer-events-none" style={{ backgroundImage: 'linear-gradient(#1A1A1A 1px, transparent 1px), linear-gradient(90deg, #1A1A1A 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

      <div className="max-w-7xl mx-auto px-[20px] md:px-[80px] w-full relative z-10 mb-[64px]">
        
        {/* Breadcrumb Navigation */}
        <nav className="flex items-center gap-[12px] mb-[48px] text-[#1A1A1A]/50 font-['Inter'] font-semibold text-[13px] uppercase tracking-wide">
          <Link to="/project/nava-terra" className="hover:text-[#1A1A1A] transition-colors flex items-center gap-[8px] min-h-[44px]">
            <ArrowLeft size={16} /> Nava Terra
          </Link>
          <ChevronRight size={16} />
          <span className="text-[#1A1A1A]">Unit {title}</span>
        </nav>

        {/* Hero Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-[48px] md:gap-[64px]">
          
          {/* Main Visuals Gallery */}
          <div className="lg:col-span-7 flex flex-col gap-[24px]">
            <motion.div 
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              className="w-full aspect-[4/3] md:aspect-[16/10] rounded-[32px] overflow-hidden shadow-[0_32px_80px_rgba(0,0,0,0.1),inset_0_1px_1px_rgba(255,255,255,0.3)] bg-[#1A1A1A] relative group cursor-pointer"
            >
              <img 
                src="https://images.unsplash.com/photo-1705321963943-de94bb3f0dd3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080" 
                alt={`${title} Interior`} 
                className="w-full h-full object-cover opacity-80 mix-blend-overlay transition-all duration-[3s] group-hover:scale-110 group-hover:opacity-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A]/90 via-[#1A1A1A]/10 to-transparent transition-opacity duration-500 group-hover:opacity-70" />
              
              <div className="absolute bottom-[32px] left-[32px] right-[32px] flex justify-between items-end transform group-hover:-translate-y-2 transition-transform duration-500">
                <div>
                  <div className="bg-white/20 backdrop-blur-md border border-white/20 rounded-full px-[16px] py-[6px] font-bold text-[11px] uppercase tracking-widest text-white shadow-sm inline-block mb-[12px]">
                    Living Space
                  </div>
                  <h3 className="text-white font-['Inter'] font-semibold text-[24px] md:text-[32px] leading-none drop-shadow-md">Premium Interior Showcase</h3>
                </div>
              </div>
            </motion.div>

            <div className="grid grid-cols-2 gap-[24px]">
              <div className="w-full aspect-[4/3] rounded-[24px] overflow-hidden shadow-[inset_0_0_0_1px_rgba(0,0,0,0.05)] bg-[#E5E3DF] relative group">
                <img 
                  src="https://images.unsplash.com/photo-1766603636562-531bb3e1dda8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800" 
                  alt="Tampak Depan" 
                  className="w-full h-full object-cover grayscale sepia-[0.1] transition-transform duration-[2s] group-hover:scale-105"
                />
                <div className="absolute top-[16px] left-[16px] bg-white/90 backdrop-blur-md rounded-full px-[12px] py-[6px] font-bold text-[10px] uppercase tracking-widest text-[#1A1A1A]">
                  Tampak Depan
                </div>
              </div>
              <div className="w-full aspect-[4/3] rounded-[24px] overflow-hidden shadow-[inset_0_0_0_1px_rgba(0,0,0,0.05)] bg-white border border-[#1A1A1A]/10 relative group p-[24px] flex items-center justify-center">
                <img 
                  src="https://images.unsplash.com/photo-1721244654210-a505a99661e9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800" 
                  alt="Floor Plan" 
                  className="w-full h-full object-cover opacity-80 mix-blend-multiply transition-transform duration-[2s] group-hover:scale-105"
                />
                <div className="absolute top-[16px] left-[16px] bg-[#1A1A1A] text-white rounded-full px-[12px] py-[6px] font-bold text-[10px] uppercase tracking-widest">
                  Floor Plan (1:100)
                </div>
              </div>
            </div>
          </div>

          {/* Sticky Detail Sidebar */}
          <div className="lg:col-span-5">
            <div className="sticky top-[120px] bg-white/80 backdrop-blur-[40px] border border-[#1A1A1A]/[0.08] rounded-[32px] p-[32px] md:p-[48px] shadow-[0_24px_64px_rgba(0,0,0,0.04),inset_0_1px_1px_rgba(255,255,255,1)]">
              
              <div className="inline-flex items-center gap-[8px] px-[16px] py-[8px] rounded-full bg-[#1A1A1A]/5 border border-[#1A1A1A]/10 mb-[24px] min-h-[44px]">
                <MapPin size={14} className="text-[#1A1A1A]/60" />
                <span className="text-[#1A1A1A] font-bold uppercase tracking-[0.2em] text-[11px] leading-none">Nava Terra Cluster</span>
              </div>

              <h1 className="font-['Inter'] text-[40px] md:text-[48px] leading-[1.1] font-semibold text-[#1A1A1A] tracking-tight mb-[16px]">
                {title}
              </h1>
              
              <div className="text-[24px] md:text-[28px] font-bold text-[#1A1A1A] mb-[32px]">
                {price}
              </div>

              <p className="font-['Inter'] text-[#1A1A1A]/60 text-[15px] leading-[1.6] font-medium mb-[40px]">
                {desc}
              </p>

              {/* Key Specs */}
              <div className="grid grid-cols-2 gap-[16px] mb-[48px]">
                <div className="bg-[#F5F4F0] rounded-[20px] p-[16px] border border-[#1A1A1A]/[0.05]">
                  <div className="flex items-center text-[#1A1A1A]/50 mb-[8px]"><Maximize size={16} className="mr-[8px]" /> <span className="text-[12px] font-bold uppercase tracking-wider">Luas Tanah</span></div>
                  <span className="text-[#1A1A1A] font-semibold text-[18px]">{lt}</span>
                </div>
                <div className="bg-[#F5F4F0] rounded-[20px] p-[16px] border border-[#1A1A1A]/[0.05]">
                  <div className="flex items-center text-[#1A1A1A]/50 mb-[8px]"><Ruler size={16} className="mr-[8px]" /> <span className="text-[12px] font-bold uppercase tracking-wider">Luas Bangunan</span></div>
                  <span className="text-[#1A1A1A] font-semibold text-[18px]">{lb}</span>
                </div>
                <div className="bg-[#F5F4F0] rounded-[20px] p-[16px] border border-[#1A1A1A]/[0.05]">
                  <div className="flex items-center text-[#1A1A1A]/50 mb-[8px]"><Home size={16} className="mr-[8px]" /> <span className="text-[12px] font-bold uppercase tracking-wider">Bedrooms</span></div>
                  <span className="text-[#1A1A1A] font-semibold text-[18px]">{beds} Rooms</span>
                </div>
                <div className="bg-[#F5F4F0] rounded-[20px] p-[16px] border border-[#1A1A1A]/[0.05]">
                  <div className="flex items-center text-[#1A1A1A]/50 mb-[8px]"><Layout size={16} className="mr-[8px]" /> <span className="text-[12px] font-bold uppercase tracking-wider">Bathrooms</span></div>
                  <span className="text-[#1A1A1A] font-semibold text-[18px]">{baths} Room(s)</span>
                </div>
              </div>

              <div className="border-t border-[#1A1A1A]/10 pt-[32px] space-y-[16px] mb-[48px]">
                <h4 className="font-bold text-[#1A1A1A] text-[16px] mb-[16px]">Technical Specifications</h4>
                <ul className="space-y-[12px] text-[#1A1A1A]/60 text-[14px] font-medium">
                  <li className="flex justify-between items-center border-b border-[#1A1A1A]/5 pb-[8px]">
                    <span>Foundation</span> <span className="text-[#1A1A1A] font-semibold">Coral Rock (Batu Karang)</span>
                  </li>
                  <li className="flex justify-between items-center border-b border-[#1A1A1A]/5 pb-[8px]">
                    <span>Structure</span> <span className="text-[#1A1A1A] font-semibold">Reinforced Concrete</span>
                  </li>
                  <li className="flex justify-between items-center border-b border-[#1A1A1A]/5 pb-[8px]">
                    <span>Flooring</span> <span className="text-[#1A1A1A] font-semibold">Premium 60x60 Granite</span>
                  </li>
                  <li className="flex justify-between items-center pb-[8px]">
                    <span>Sanitary</span> <span className="text-[#1A1A1A] font-semibold">TOTO or Equivalent</span>
                  </li>
                </ul>
              </div>

              {/* Mortgage/KPR Calculator */}
              <div className="bg-[#1A1A1A] rounded-[24px] p-[32px] text-white shadow-[0_16px_40px_rgba(26,26,26,0.2),inset_0_1px_1px_rgba(255,255,255,0.1)] mb-[48px] relative overflow-hidden">
                 <div className="absolute top-0 right-0 w-[50%] h-[100%] bg-gradient-to-l from-white/5 to-transparent pointer-events-none" />
                 
                 <div className="flex items-center gap-[12px] mb-[24px] relative z-10">
                   <div className="w-[32px] h-[32px] rounded-full bg-white/10 flex items-center justify-center text-white">
                     <Calculator size={16} />
                   </div>
                   <h4 className="font-['Inter'] font-semibold text-[18px]">Est. Installment (KPR)</h4>
                 </div>

                 <div className="space-y-[24px] relative z-10">
                    <div>
                      <div className="flex justify-between text-[13px] text-white/60 font-medium mb-[8px]">
                        <span>Down Payment ({dpPercent}%)</span>
                        <span>{formatIDR(dpAmount)}</span>
                      </div>
                      <input 
                        type="range" 
                        min="10" max="50" step="5" 
                        value={dpPercent} 
                        onChange={(e) => setDpPercent(parseInt(e.target.value))}
                        className="w-full h-[4px] bg-white/20 rounded-full appearance-none cursor-pointer accent-white"
                      />
                    </div>

                    <div>
                      <div className="flex justify-between text-[13px] text-white/60 font-medium mb-[8px]">
                        <span>Tenure (Years)</span>
                        <span>{tenureYears} Years</span>
                      </div>
                      <input 
                        type="range" 
                        min="5" max="25" step="5" 
                        value={tenureYears} 
                        onChange={(e) => setTenureYears(parseInt(e.target.value))}
                        className="w-full h-[4px] bg-white/20 rounded-full appearance-none cursor-pointer accent-white"
                      />
                    </div>

                    <div className="pt-[24px] border-t border-white/10 flex justify-between items-end">
                      <div className="text-white/60 text-[12px] font-medium">
                        Based on {interestRate}% fixed rate.<br/>
                        *Estimation only.
                      </div>
                      <div className="text-right">
                        <div className="text-[20px] font-bold text-white leading-none mb-[4px]">{formatIDR(monthlyPayment)}</div>
                        <div className="text-white/50 text-[12px] uppercase tracking-wider font-bold">/ Month</div>
                      </div>
                    </div>
                 </div>
              </div>

              {/* CTA */}
              <div>
                <a href={waLink} target="_blank" rel="noreferrer" className="flex items-center justify-center gap-[12px] w-full bg-[#1A1A1A] text-white py-[20px] px-[24px] rounded-full font-bold text-[16px] font-['Inter'] hover:bg-[#333] hover:scale-[1.02] active:scale-[0.98] transition-all shadow-[0_16px_32px_rgba(26,26,26,0.2)] min-h-[56px]">
                  <MessageCircle size={20} /> Inquire About {title}
                </a>
                <p className="text-center text-[#1A1A1A]/40 text-[12px] font-medium mt-[16px]">Directly connect with our sales team via WhatsApp.</p>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
