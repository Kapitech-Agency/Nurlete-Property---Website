import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router';
import { ArrowLeft, Waves, Wind, ShieldCheck, MapPin, Ruler, ArrowUpRight, MessageCircle, FileText, Download, Map } from 'lucide-react';
import { motion } from 'motion/react';

export function ProjectDetail() {
  const { id } = useParams();
  const waLink = "https://wa.me/6282239415718";

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  return (
    <div className="pt-[160px] pb-0 w-full z-10 bg-[#F5F4F0] font-['Inter']">
      
      {/* Back Navigation */}
      <div className="px-[20px] md:px-[80px] max-w-7xl mx-auto w-full mb-[40px]">
        <Link to="/portfolios" className="inline-flex items-center text-[#1A1A1A]/50 hover:text-[#1A1A1A] font-semibold text-[15px] leading-[1.5] transition-colors min-h-[44px] min-w-[44px]">
          <ArrowLeft size={20} className="mr-[8px]" /> Back to Catalog
        </Link>
      </div>

      {/* 1. Hero Excellence Section */}
      <section className="px-[20px] md:px-[80px] max-w-7xl mx-auto mb-[120px] md:mb-[160px] w-full">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="w-full relative h-[60vh] md:h-[80vh] min-h-[500px] rounded-[32px] md:rounded-[48px] overflow-hidden border border-[#1A1A1A]/[0.08] shadow-[0_32px_80px_rgba(0,0,0,0.1)] flex items-end p-[32px] md:p-[80px] selection:bg-white selection:text-[#1A1A1A]"
        >
          <img 
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920" 
            alt="Nava Terra Main Gate" 
            className="absolute inset-0 w-full h-full object-cover grayscale opacity-90"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A]/90 via-[#1A1A1A]/30 to-transparent" />
          
          <div className="relative z-10 w-full max-w-4xl">
            <span className="font-['Inter'] text-[12px] font-bold uppercase tracking-widest text-white/80 mb-[24px] block">
              Modern Minimalist Cluster
            </span>
            <h1 className="font-['Inter'] text-[36px] md:text-[52px] leading-[1.2] font-semibold text-white tracking-tight drop-shadow-lg mb-[32px]">
              Nava Terra: The 2026 Vision of Tropical Living in Ambon
            </h1>
            <p className="font-['Inter'] text-white/80 text-[15px] md:text-[16px] leading-[1.6] font-medium max-w-3xl">
              A premium residential cluster perched in the strategic hills of Halong. Developed with uncompromising 2026 architectural standards, it offers a harmonious blend of modern minimalist geometry, charcoal and warm beige textures, and the serene, elevated beauty of Ambon Bay.
            </p>
          </div>
        </motion.div>
      </section>

      {/* 2. The 'Experience' Section */}
      <section className="px-[20px] md:px-[80px] max-w-7xl mx-auto mb-[120px] md:mb-[160px] w-full">
        <div className="text-center mb-[64px] md:mb-[96px] w-full">
          <div className="inline-flex items-center gap-[8px] px-[16px] py-[8px] rounded-full bg-[#1A1A1A]/5 border border-[#1A1A1A]/10 mb-[24px] shadow-[inset_0_1px_1px_rgba(255,255,255,0.8),0_4px_12px_rgba(0,0,0,0.03)] min-h-[44px]">
            <span className="w-[8px] h-[8px] rounded-full bg-[#1A1A1A] shadow-[0_0_8px_rgba(26,26,26,0.3)]" />
            <span className="text-[#1A1A1A]/80 font-bold uppercase tracking-[0.2em] text-[11px] leading-none">Cluster Highlights</span>
          </div>
          <h2 className="font-['Inter'] text-[32px] md:text-[48px] leading-[1.2] font-semibold text-[#1A1A1A] tracking-tight mb-[24px]">The Nava Terra Experience</h2>
          <p className="font-['Inter'] text-[#1A1A1A]/60 text-[16px] md:text-[18px] leading-[1.6] font-medium max-w-2xl mx-auto">Discover a lifestyle tailored for modern families, blending security, luxury, and Ambon's natural coastal beauty.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[24px] w-full">
          {[
            { icon: <Waves size={32} />, title: "Breeze & Bay", desc: "Strategically oriented to capture the rejuvenating sea breeze and serene vistas of Ambon Bay." },
            { icon: <Wind size={32} />, title: "Architectural Serenity", desc: "Generous volumes and crisp white interiors engineered for natural cooling and mental calm." },
            { icon: <ShieldCheck size={32} />, title: "Modern Enclave", desc: "A tightly knit community secured by a premium one-gate system and invisible smart surveillance." },
            { icon: <MapPin size={32} />, title: "City Connectivity", desc: "Secluded in Halong Atas, yet positioned mere minutes away from Ambon's critical business and travel hubs." }
          ].map((feature, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="w-full bg-white/60 backdrop-blur-[60px] border border-[#1A1A1A]/[0.08] rounded-[40px] p-[32px] md:p-[40px] shadow-[0_16px_40px_rgba(0,0,0,0.04),inset_0_1px_1px_rgba(255,255,255,1)] hover:-translate-y-2 hover:shadow-[0_24px_64px_rgba(0,0,0,0.08)] transition-all duration-300 group flex flex-col items-start"
            >
              <div className="w-[64px] h-[64px] rounded-[24px] bg-[#1A1A1A]/5 text-[#1A1A1A] flex items-center justify-center mb-[32px] border border-[#1A1A1A]/10 group-hover:bg-[#1A1A1A] group-hover:text-white transition-colors duration-500 shadow-[inset_0_1px_1px_rgba(255,255,255,1)]">
                {feature.icon}
              </div>
              <h3 className="font-['Inter'] text-[20px] md:text-[24px] leading-[1.3] font-semibold text-[#1A1A1A] mb-[16px] tracking-tight">{feature.title}</h3>
              <p className="font-['Inter'] text-[#1A1A1A]/60 text-[15px] leading-[1.6] font-medium w-full flex-1">
                {feature.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 3. Project Specification & Features */}
      <section className="px-[20px] md:px-[80px] max-w-7xl mx-auto mb-[120px] md:mb-[160px] w-full">
        <div className="w-full bg-white/60 backdrop-blur-[60px] border border-[#1A1A1A]/[0.08] rounded-[40px] md:rounded-[64px] p-[32px] md:p-[64px] shadow-[0_24px_80px_rgba(0,0,0,0.04),inset_0_1px_1px_rgba(255,255,255,1)]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-[64px] lg:gap-[80px] items-center w-full">
            
            <div className="lg:col-span-6 w-full aspect-square lg:aspect-auto lg:h-[640px] min-h-[400px] rounded-[32px] md:rounded-[40px] overflow-hidden relative shadow-[0_16px_40px_rgba(0,0,0,0.05),inset_0_1px_1px_rgba(255,255,255,0.8)] border border-[#1A1A1A]/10 group">
              <img 
                src="https://images.unsplash.com/photo-1705321963943-de94bb3f0dd3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080" 
                alt="Nava Terra Interior" 
                className="absolute inset-0 w-full h-full object-cover sepia-[0.2] grayscale-[0.2] transition-transform duration-[3s] group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>

            <div className="lg:col-span-6 flex flex-col justify-center w-full">
              <h2 className="font-['Inter'] text-[32px] md:text-[48px] leading-[1.2] font-semibold text-[#1A1A1A] mb-[48px] tracking-tight">Technical Specifications</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-[40px] gap-y-[32px] mb-[48px] w-full">
                {[
                  { label: "Foundation", value: "Coral Rock" },
                  { label: "Structure", value: "Reinforced Concrete" },
                  { label: "Walls", value: "Light Brick" },
                  { label: "Flooring", value: "60x60 Granite" },
                  { label: "Electricity", value: "2200W - 3500W" },
                  { label: "Water Source", value: "PDAM + Reservoir" }
                ].map((spec, i) => (
                  <div key={i} className="flex flex-col border-b border-[#1A1A1A]/10 pb-[16px] w-full">
                    <span className="font-['Inter'] text-[11px] uppercase tracking-widest text-[#1A1A1A]/50 font-bold mb-[8px]">{spec.label}</span>
                    <span className="font-['Inter'] text-[16px] md:text-[18px] leading-[1.5] font-semibold text-[#1A1A1A]">{spec.value}</span>
                  </div>
                ))}
              </div>

              <div className="w-full bg-[#1A1A1A]/[0.03] backdrop-blur-md rounded-[32px] p-[32px] md:p-[40px] border border-[#1A1A1A]/10 shadow-[inset_0_1px_2px_rgba(255,255,255,0.5)]">
                <h3 className="font-['Inter'] text-[18px] md:text-[20px] leading-[1.3] font-semibold text-[#1A1A1A] mb-[24px]">Premium Finishes</h3>
                <ul className="space-y-[20px] font-['Inter'] text-[15px] text-[#1A1A1A]/70 font-medium leading-[1.6] w-full">
                  <li className="flex items-start gap-[16px]"><div className="w-[6px] h-[6px] mt-[9px] rounded-full bg-[#1A1A1A] shrink-0" /> Premium 60x60 Granite Flooring</li>
                  <li className="flex items-start gap-[16px]"><div className="w-[6px] h-[6px] mt-[9px] rounded-full bg-[#1A1A1A] shrink-0" /> High-Quality Wood Accents</li>
                  <li className="flex items-start gap-[16px]"><div className="w-[6px] h-[6px] mt-[9px] rounded-full bg-[#1A1A1A] shrink-0" /> Deep Charcoal Aluminum Frames</li>
                  <li className="flex items-start gap-[16px]"><div className="w-[6px] h-[6px] mt-[9px] rounded-full bg-[#1A1A1A] shrink-0" /> Warm Beige & Crisp White Palette</li>
                </ul>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3.5 Interactive Site Plan & Download Center */}
      <section className="px-[20px] md:px-[80px] max-w-7xl mx-auto mb-[120px] md:mb-[160px] w-full grid grid-cols-1 lg:grid-cols-12 gap-[48px]">
        
        {/* Left: Interactive Site Plan placeholder */}
        <div className="lg:col-span-8 w-full bg-white/60 backdrop-blur-[60px] border border-[#1A1A1A]/[0.08] rounded-[40px] p-[32px] md:p-[48px] shadow-[0_24px_80px_rgba(0,0,0,0.04),inset_0_1px_1px_rgba(255,255,255,1)]">
          <div className="flex justify-between items-end mb-[40px]">
            <div>
              <h2 className="font-['Inter'] text-[28px] md:text-[36px] leading-[1.2] font-semibold text-[#1A1A1A] mb-[12px] tracking-tight">Master Site Plan</h2>
              <p className="font-['Inter'] text-[#1A1A1A]/60 text-[16px] font-medium">Explore the Nava Terra cluster layout and unit availability.</p>
            </div>
            <div className="hidden md:flex items-center gap-[8px] bg-white/80 backdrop-blur-md px-[20px] py-[10px] rounded-full text-[14px] font-bold text-[#1A1A1A] border border-[#1A1A1A]/10 shadow-[0_4px_16px_rgba(0,0,0,0.05)]">
              <Map size={18} /> Interactive Map
            </div>
          </div>
          
          <div className="w-full aspect-[16/10] bg-[#1A1A1A]/5 rounded-[28px] overflow-hidden relative border border-[#1A1A1A]/10 group cursor-pointer shadow-[inset_0_1px_2px_rgba(0,0,0,0.1)]">
            <img 
              src="https://images.unsplash.com/photo-1721244654210-a505a99661e9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080" 
              alt="Site Plan" 
              className="w-full h-full object-cover mix-blend-multiply opacity-60 group-hover:scale-105 group-hover:opacity-80 transition-all duration-[3s]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A]/30 to-transparent" />
            
            {/* Interactive Markers (Placeholders) */}
            <div className="absolute top-[30%] left-[40%] w-[36px] h-[36px] bg-[#25D366] text-white rounded-full flex items-center justify-center font-bold text-[13px] shadow-[0_4px_16px_rgba(37,211,102,0.4)] animate-pulse hover:animate-none hover:scale-110 transition-transform">82</div>
            <div className="absolute top-[45%] left-[55%] w-[36px] h-[36px] bg-[#1A1A1A] text-white rounded-full flex items-center justify-center font-bold text-[13px] shadow-[0_8px_24px_rgba(26,26,26,0.3)] hover:scale-110 transition-transform">50</div>
            <div className="absolute top-[60%] left-[30%] w-[36px] h-[36px] bg-white/40 backdrop-blur-md text-[#1A1A1A]/40 rounded-full flex items-center justify-center font-bold text-[13px] shadow-[0_4px_16px_rgba(0,0,0,0.05)] line-through border border-[#1A1A1A]/10">50</div>

            <div className="absolute bottom-[24px] left-[24px] flex gap-[12px]">
              <span className="bg-white/90 backdrop-blur-xl text-[#1A1A1A] px-[16px] py-[8px] rounded-full text-[11px] font-bold uppercase tracking-wider shadow-[0_8px_24px_rgba(0,0,0,0.1)] flex items-center gap-[8px] border border-white">
                <span className="w-[8px] h-[8px] bg-[#25D366] rounded-full shadow-[0_0_8px_rgba(37,211,102,0.8)]"></span> Available
              </span>
              <span className="bg-white/90 backdrop-blur-xl text-[#1A1A1A] px-[16px] py-[8px] rounded-full text-[11px] font-bold uppercase tracking-wider shadow-[0_8px_24px_rgba(0,0,0,0.1)] flex items-center gap-[8px] border border-white">
                <span className="w-[8px] h-[8px] bg-[#1A1A1A]/30 rounded-full"></span> Sold
              </span>
            </div>
          </div>
        </div>

        {/* Right: Download Center */}
        <div className="lg:col-span-4 w-full flex flex-col gap-[24px]">
          <div className="bg-[#1A1A1A] rounded-[40px] p-[40px] shadow-[0_32px_80px_rgba(26,26,26,0.2),inset_0_1px_1px_rgba(255,255,255,0.1)] relative overflow-hidden flex-1 flex flex-col selection:bg-white selection:text-[#1A1A1A]">
            <div className="absolute top-[-20%] right-[-20%] w-[80%] h-[80%] bg-gradient-to-bl from-white/10 to-transparent rounded-bl-[100%] pointer-events-none" />
            
            <div className="w-[64px] h-[64px] bg-white/10 rounded-full flex items-center justify-center text-white mb-[32px] border border-white/20">
              <FileText size={32} />
            </div>
            <h2 className="font-['Inter'] text-[28px] md:text-[32px] leading-[1.2] font-semibold text-white mb-[16px] tracking-tight">Digital Assets</h2>
            <p className="font-['Inter'] text-white/60 text-[15px] leading-[1.6] font-medium mb-[48px]">
              Access comprehensive brochures, high-resolution master plans, and in-depth technical specifications.
            </p>

            <div className="mt-auto flex flex-col gap-[16px]">
              <button className="w-full flex items-center justify-between bg-white/5 hover:bg-white/10 border border-white/10 rounded-[24px] p-[20px] transition-all duration-300 group hover:shadow-[0_8px_32px_rgba(0,0,0,0.2)]">
                <div className="flex flex-col items-start">
                  <span className="text-white font-bold text-[15px] leading-[1.2] mb-[6px]">Nava Terra Brochure</span>
                  <span className="text-white/40 text-[11px] font-medium uppercase tracking-wider">PDF • 4.2 MB</span>
                </div>
                <div className="w-[48px] h-[48px] rounded-full bg-white text-[#1A1A1A] flex items-center justify-center group-hover:scale-110 transition-transform shadow-[0_8px_24px_rgba(255,255,255,0.2)]">
                  <Download size={20} />
                </div>
              </button>

              <button className="w-full flex items-center justify-between bg-white/5 hover:bg-white/10 border border-white/10 rounded-[24px] p-[20px] transition-all duration-300 group hover:shadow-[0_8px_32px_rgba(0,0,0,0.2)]">
                <div className="flex flex-col items-start">
                  <span className="text-white font-bold text-[15px] leading-[1.2] mb-[6px]">Tech Specifications</span>
                  <span className="text-white/40 text-[11px] font-medium uppercase tracking-wider">PDF • 1.8 MB</span>
                </div>
                <div className="w-[48px] h-[48px] rounded-full bg-white text-[#1A1A1A] flex items-center justify-center group-hover:scale-110 transition-transform shadow-[0_8px_24px_rgba(255,255,255,0.2)]">
                  <Download size={20} />
                </div>
              </button>
            </div>
          </div>
        </div>

      </section>

      {/* 4. Floor Plans / Unit Details E-Commerce Flow */}
      <section className="px-[20px] md:px-[80px] max-w-7xl mx-auto mb-[120px] md:mb-[160px] w-full">
        <div className="text-center mb-[64px] md:mb-[96px] w-full">
          <h2 className="font-['Inter'] text-[32px] md:text-[48px] leading-[1.2] font-semibold text-[#1A1A1A] tracking-tight mb-[24px]">Available Units</h2>
          <p className="font-['Inter'] text-[#1A1A1A]/50 text-[16px] md:text-[18px] leading-[1.6] font-medium max-w-2xl mx-auto">
            Designed for spatial intelligence, offering a minimalist, airy environment to maximize comfort. Click on a unit to explore detailed architectural specifications.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-[40px] w-full">
          
          {/* Unit Type 50 (6 cols) */}
          <Link to={`/project/nava-terra/unit/50`} className="w-full lg:col-span-6 bg-white/60 backdrop-blur-[60px] border border-[#1A1A1A]/[0.08] rounded-[40px] p-[24px] shadow-[0_16px_40px_rgba(0,0,0,0.04),inset_0_1px_1px_rgba(255,255,255,1)] flex flex-col h-full hover:-translate-y-2 hover:shadow-[0_32px_80px_rgba(0,0,0,0.12)] transition-all duration-500 group">
            <div className="w-full aspect-[4/3] bg-white rounded-[28px] border border-[#1A1A1A]/5 flex flex-col items-center justify-center mb-[32px] relative overflow-hidden shadow-[inset_0_1px_2px_rgba(0,0,0,0.05)]">
              <div className="absolute inset-0 bg-gradient-to-tr from-white/40 via-transparent to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-10" />
              <img src="https://images.unsplash.com/photo-1721244654210-a505a99661e9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800" alt="Type 50 Plan" className="w-full h-full object-cover mix-blend-multiply opacity-70 group-hover:scale-105 transition-transform duration-[3s]" />
              <div className="absolute top-[20px] left-[20px] bg-white/90 backdrop-blur-xl border border-[#1A1A1A]/10 text-[#1A1A1A] rounded-full px-[16px] py-[8px] font-bold text-[11px] uppercase tracking-widest shadow-[0_4px_16px_rgba(0,0,0,0.05)] z-20">Type 50 Schematic</div>
            </div>
            
            <div className="px-[16px] pb-[16px] flex flex-col flex-1">
              <div className="flex justify-between items-center mb-[16px] w-full">
                <h3 className="font-['Inter'] text-[28px] md:text-[32px] leading-[1.2] font-semibold text-[#1A1A1A] tracking-tight">Type 50</h3>
                <span className="bg-[#1A1A1A]/5 border border-[#1A1A1A]/10 px-[16px] py-[8px] rounded-full text-[13px] font-bold text-[#1A1A1A]/60">LT 78 / LB 50</span>
              </div>
              <div className="font-bold text-[24px] text-[#1A1A1A] mb-[24px]">Rp 850.000.000</div>
              <div className="flex gap-[16px] mb-[32px] w-full">
                <span className="text-[#1A1A1A]/70 text-[15px] font-semibold">2 Bedrooms</span>
                <span className="w-[4px] h-[4px] bg-[#1A1A1A]/20 rounded-full my-auto" />
                <span className="text-[#1A1A1A]/70 text-[15px] font-semibold">1 Bathrooms</span>
              </div>
              <p className="font-['Inter'] text-[#1A1A1A]/60 text-[15px] leading-[1.6] mb-[40px] font-medium w-full flex-1">
                The perfect modern minimalist starter home. Features an open-plan living area, abundant natural light, and highly efficient space utilization.
              </p>
              <div className="flex items-center justify-center gap-[12px] min-h-[56px] w-full bg-[#1A1A1A] text-white py-[16px] px-[24px] rounded-full font-bold text-[16px] font-['Inter'] group-hover:bg-[#333] transition-colors shadow-[0_8px_24px_rgba(26,26,26,0.2)]">
                View Architecture Detail <ArrowUpRight size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </div>
            </div>
          </Link>

          {/* Unit Type 82 (6 cols) */}
          <Link to={`/project/nava-terra/unit/82`} className="w-full lg:col-span-6 bg-white/60 backdrop-blur-[60px] border border-[#1A1A1A]/[0.08] rounded-[40px] p-[24px] shadow-[0_16px_40px_rgba(0,0,0,0.04),inset_0_1px_1px_rgba(255,255,255,1)] flex flex-col h-full hover:-translate-y-2 hover:shadow-[0_32px_80px_rgba(0,0,0,0.12)] transition-all duration-500 group">
            <div className="w-full aspect-[4/3] bg-white rounded-[28px] border border-[#1A1A1A]/5 flex flex-col items-center justify-center mb-[32px] relative overflow-hidden shadow-[inset_0_1px_2px_rgba(0,0,0,0.05)]">
              <div className="absolute inset-0 bg-gradient-to-tr from-white/40 via-transparent to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-10" />
              <img src="https://images.unsplash.com/photo-1721244654210-a505a99661e9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800" alt="Type 82 Plan" className="w-full h-full object-cover mix-blend-multiply opacity-70 group-hover:scale-105 transition-transform duration-[3s]" />
              <div className="absolute top-[20px] left-[20px] bg-white/90 backdrop-blur-xl border border-[#1A1A1A]/10 text-[#1A1A1A] rounded-full px-[16px] py-[8px] font-bold text-[11px] uppercase tracking-widest shadow-[0_4px_16px_rgba(0,0,0,0.05)] z-20">Type 82 Schematic</div>
            </div>
            
            <div className="px-[16px] pb-[16px] flex flex-col flex-1">
              <div className="flex justify-between items-center mb-[16px] w-full">
                <h3 className="font-['Inter'] text-[28px] md:text-[32px] leading-[1.2] font-semibold text-[#1A1A1A] tracking-tight">Type 82</h3>
                <span className="bg-[#1A1A1A]/5 border border-[#1A1A1A]/10 px-[16px] py-[8px] rounded-full text-[13px] font-bold text-[#1A1A1A]/60">LT 106 / LB 82</span>
              </div>
              <div className="font-bold text-[24px] text-[#1A1A1A] mb-[24px]">Rp 1.250.000.000</div>
              <div className="flex gap-[16px] mb-[32px] w-full">
                <span className="text-[#1A1A1A]/70 text-[15px] font-semibold">3 Bedrooms</span>
                <span className="w-[4px] h-[4px] bg-[#1A1A1A]/20 rounded-full my-auto" />
                <span className="text-[#1A1A1A]/70 text-[15px] font-semibold">2 Bathrooms</span>
              </div>
              <p className="font-['Inter'] text-[#1A1A1A]/60 text-[15px] leading-[1.6] mb-[40px] font-medium w-full flex-1">
                Spacious and airy design tailored for growing families, offering a dedicated master suite, extended dining area, and premium granite finishes.
              </p>
              <div className="flex items-center justify-center gap-[12px] min-h-[56px] w-full bg-[#1A1A1A] text-white py-[16px] px-[24px] rounded-full font-bold text-[16px] font-['Inter'] group-hover:bg-[#333] transition-colors shadow-[0_8px_24px_rgba(26,26,26,0.2)]">
                View Architecture Detail <ArrowUpRight size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </div>
            </div>
          </Link>

        </div>
      </section>

      {/* 5. Neighborhood & Amenities (The Map) */}
      <section className="px-[20px] md:px-[80px] max-w-7xl mx-auto mb-[120px] md:mb-[160px] w-full">
        <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-[64px] lg:gap-[96px] items-center">
          
          <div className="lg:col-span-5 flex flex-col justify-center w-full">
            <div className="inline-flex items-center gap-[8px] px-[16px] py-[8px] rounded-full bg-white/80 backdrop-blur-xl border border-[#1A1A1A]/10 mb-[32px] shadow-[inset_0_1px_1px_rgba(255,255,255,0.8),0_4px_12px_rgba(0,0,0,0.03)] min-h-[44px] w-fit">
              <span className="w-[8px] h-[8px] rounded-full bg-[#1A1A1A] shadow-[0_0_8px_rgba(26,26,26,0.3)]" />
              <span className="text-[#1A1A1A]/80 font-['Inter'] text-[11px] font-bold uppercase tracking-[0.2em] leading-none">Location</span>
            </div>
            <h2 className="font-['Inter'] text-[28px] md:text-[40px] leading-[1.2] font-semibold text-[#1A1A1A] mb-[24px]">Jl. PHB Halong Atas</h2>
            <p className="font-['Inter'] text-[#1A1A1A]/60 text-[15px] md:text-[16px] leading-[1.6] font-medium mb-[48px] w-full">
              Strategically positioned in Ambon, Nava Terra ensures you remain intimately connected to vital hubs while retaining absolute residential tranquility.
            </p>
            
            <ul className="space-y-[20px] w-full">
              <li className="w-full flex items-center bg-white/80 backdrop-blur-[20px] border border-[#1A1A1A]/5 rounded-[24px] p-[20px] md:p-[24px] shadow-[0_4px_16px_rgba(0,0,0,0.02),inset_0_1px_1px_rgba(255,255,255,1)]">
                <div className="font-['Inter'] font-bold text-[24px] leading-[1.2] text-[#1A1A1A] w-[64px] text-center shrink-0">15m</div>
                <div className="font-['Inter'] font-medium text-[15px] leading-[1.5] text-[#1A1A1A]/70 border-l border-[#1A1A1A]/10 pl-[24px]">to Pattimura International Airport</div>
              </li>
              <li className="w-full flex items-center bg-white/80 backdrop-blur-[20px] border border-[#1A1A1A]/5 rounded-[24px] p-[20px] md:p-[24px] shadow-[0_4px_16px_rgba(0,0,0,0.02),inset_0_1px_1px_rgba(255,255,255,1)]">
                <div className="font-['Inter'] font-bold text-[24px] leading-[1.2] text-[#1A1A1A] w-[64px] text-center shrink-0">10m</div>
                <div className="font-['Inter'] font-medium text-[15px] leading-[1.5] text-[#1A1A1A]/70 border-l border-[#1A1A1A]/10 pl-[24px]">to JMP Bridge (Jembatan Merah Putih)</div>
              </li>
              <li className="w-full flex items-center bg-white/80 backdrop-blur-[20px] border border-[#1A1A1A]/5 rounded-[24px] p-[20px] md:p-[24px] shadow-[0_4px_16px_rgba(0,0,0,0.02),inset_0_1px_1px_rgba(255,255,255,1)]">
                <div className="font-['Inter'] font-bold text-[24px] leading-[1.2] text-[#1A1A1A] w-[64px] text-center shrink-0">5m</div>
                <div className="font-['Inter'] font-medium text-[15px] leading-[1.5] text-[#1A1A1A]/70 border-l border-[#1A1A1A]/10 pl-[24px]">to Local Healthcare (Puskesmas Halong)</div>
              </li>
              <li className="w-full flex items-center bg-white/80 backdrop-blur-[20px] border border-[#1A1A1A]/5 rounded-[24px] p-[20px] md:p-[24px] shadow-[0_4px_16px_rgba(0,0,0,0.02),inset_0_1px_1px_rgba(255,255,255,1)]">
                <div className="font-['Inter'] font-bold text-[24px] leading-[1.2] text-[#1A1A1A] w-[64px] text-center shrink-0">5m</div>
                <div className="font-['Inter'] font-medium text-[15px] leading-[1.5] text-[#1A1A1A]/70 border-l border-[#1A1A1A]/10 pl-[24px]">to Ambon City Center (ACC)</div>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-7 w-full h-[500px] md:h-[600px] rounded-[32px] md:rounded-[48px] overflow-hidden border border-[#1A1A1A]/[0.05] shadow-[0_24px_64px_rgba(0,0,0,0.05),inset_0_1px_1px_rgba(255,255,255,1)] relative bg-[#E5E3DF]">
            {/* Functional Google Maps Embed */}
            <iframe 
              src="https://maps.google.com/maps?q=-3.6620772,128.2172711&t=m&z=15&output=embed" 
              width="100%" 
              height="100%" 
              style={{ border: 0, filter: 'contrast(1.1) grayscale(0.7) sepia(0.15) opacity(0.9)', position: 'absolute', inset: 0 }} 
              allowFullScreen={false} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Nava Terra Location Map"
            />
            
            {/* Overlay Info Box */}
            <div className="absolute top-[20px] left-[20px] md:top-[32px] md:left-[32px] z-10 bg-white/95 backdrop-blur-xl border border-[#1A1A1A]/10 rounded-[24px] p-[20px] md:p-[24px] shadow-[0_16px_40px_rgba(0,0,0,0.08),inset_0_1px_1px_rgba(255,255,255,1)] max-w-[260px] md:max-w-[300px]">
              <div className="flex items-center gap-[12px] mb-[16px]">
                <div className="w-[48px] h-[48px] rounded-full bg-[#1A1A1A]/5 flex items-center justify-center text-[#1A1A1A] shrink-0 border border-[#1A1A1A]/10">
                  <MapPin size={24} />
                </div>
                <div>
                  <h3 className="font-['Inter'] font-bold text-[16px] leading-[1.2] text-[#1A1A1A] mb-[2px]">Nava Terra</h3>
                  <p className="text-[#1A1A1A]/60 font-semibold text-[12px] tracking-wide uppercase">Future Residential Site</p>
                </div>
              </div>
              <p className="font-['Inter'] text-[#1A1A1A]/80 text-[14px] leading-[1.5] mb-[20px] font-medium border-l-[2px] border-[#1A1A1A]/20 pl-[12px]">
                Jl. PHB Halong Atas, Ambon
              </p>
              <a href="https://www.google.com/maps/dir/?api=1&destination=-3.6620772,128.2172711" target="_blank" rel="noreferrer" className="flex items-center justify-center w-full min-h-[44px] bg-[#1A1A1A] text-white rounded-[16px] font-['Inter'] font-bold text-[14px] hover:bg-[#333] transition-colors shadow-[0_4px_12px_rgba(26,26,26,0.2)]">
                Get Directions
              </a>
            </div>

            {/* WA CTA anchored to bottom right */}
            <div className="absolute bottom-[20px] right-[20px] md:bottom-[32px] md:right-[32px] z-10">
              <a href={waLink} target="_blank" rel="noreferrer" className="flex items-center gap-[12px] bg-[#25D366] text-white px-[20px] py-[12px] md:px-[24px] md:py-[16px] rounded-full font-['Inter'] font-bold text-[14px] md:text-[15px] shadow-[0_16px_32px_rgba(37,211,102,0.3),inset_0_1px_1px_rgba(255,255,255,0.4)] hover:scale-105 transition-all min-h-[48px] md:min-h-[56px]">
                <MessageCircle size={24} /> <span className="hidden sm:inline">WhatsApp Sales</span><span className="inline sm:hidden">Sales</span>
              </a>
            </div>
          </div>

        </div>
      </section>

      {/* 6. Final Call to Action */}
      <section className="bg-[#1A1A1A] text-white w-full py-[120px] md:py-[160px] px-[20px] md:px-[80px] relative overflow-hidden selection:bg-white selection:text-[#1A1A1A]">
        
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920" 
            alt="Background" 
            className="w-full h-full object-cover grayscale opacity-10"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A] via-[#1A1A1A]/80 to-[#1A1A1A]" />
        </div>

        <div className="w-full max-w-7xl mx-auto flex flex-col items-center text-center relative z-10">
          
          <h2 className="font-['Inter'] text-[36px] md:text-[52px] leading-[1.2] font-semibold mb-[32px] tracking-tight text-[#F5F4F0] drop-shadow-lg">
            Ready to secure your future in Ambon?
          </h2>
          <p className="font-['Inter'] text-[#F5F4F0]/60 text-[16px] md:text-[18px] leading-[1.6] mb-[48px] max-w-2xl font-medium">
            Join the exclusive Nava Terra community. Talk to our senior sales consultants to discuss availability, premium financing options, and schedule your private site visit.
          </p>
          
          <a href={waLink} target="_blank" rel="noreferrer" className="inline-flex items-center gap-[12px] bg-[#25D366] text-white px-[32px] py-[20px] rounded-full font-['Inter'] font-bold text-[16px] shadow-[0_16px_32px_rgba(37,211,102,0.3),inset_0_1px_1px_rgba(255,255,255,0.4)] hover:scale-105 active:scale-95 transition-all min-h-[56px]">
            <MessageCircle size={24} /> Connect via WhatsApp
          </a>
          <p className="mt-[24px] text-white/50 text-[15px] leading-[1.5]">Official Contact: 0822-3941-5718</p>

        </div>
      </section>

    </div>
  );
}
