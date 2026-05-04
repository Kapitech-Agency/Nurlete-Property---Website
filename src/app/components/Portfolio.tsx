import React from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight, MapPin } from 'lucide-react';
import { Link } from 'react-router';

// Consolidated to only feature Nava Terra and a placeholder for future expansion
const projects = [
  {
    id: "nava-terra",
    title: "Nava Terra",
    category: "Premium Housing Cluster",
    location: "Halong Atas, Ambon",
    price: "Now Selling",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    isActive: true
  },
  {
    id: "future-development",
    title: "Project Oasis",
    category: "Future Development",
    location: "Ambon Bay Area",
    price: "Coming Soon",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    isActive: false
  }
];

export function Portfolio() {
  return (
    <section id="portfolios" className="py-[120px] md:py-[160px] relative z-10 w-full font-['Inter'] bg-[#F5F4F0]">
      <div className="max-w-7xl mx-auto px-[20px] md:px-[80px] w-full">
        
        <div className="flex flex-col lg:flex-row justify-between lg:items-end mb-[64px] gap-[32px]">
          <div>
            <div className="inline-flex items-center gap-[8px] px-[16px] py-[8px] rounded-full bg-white/80 backdrop-blur-[40px] border border-[#1A1A1A]/[0.08] mb-[24px] shadow-[inset_0_1px_1px_rgba(255,255,255,1),0_4px_12px_rgba(0,0,0,0.03)] min-h-[44px]">
              <span className="w-[8px] h-[8px] rounded-full bg-[#1A1A1A] shadow-[0_0_8px_rgba(26,26,26,0.3)]" />
              <span className="text-[#1A1A1A] font-bold uppercase tracking-[0.2em] text-[11px] leading-none">Flagship Project</span>
            </div>
            <h2 className="font-['Inter'] text-[#1A1A1A] text-[32px] md:text-[40px] leading-[1.2] font-semibold tracking-tight">
              Our Signature Collection
            </h2>
          </div>
          <Link to="/project/nava-terra" className="flex items-center justify-center min-h-[44px] gap-[8px] bg-white/80 backdrop-blur-[40px] border border-[#1A1A1A]/[0.08] rounded-full px-[32px] py-[12px] text-[#1A1A1A] font-bold text-[15px] shadow-[0_8px_32px_rgba(0,0,0,0.06),inset_0_1px_1px_rgba(255,255,255,1)] hover:bg-white transition-all active:scale-95 group w-full lg:w-auto">
            Discover More <ArrowUpRight size={20} className="text-[#1A1A1A] group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </Link>
        </div>

        {/* Using a 2-column grid but keeping a clean aesthetic */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-[40px] w-full">
          {projects.map((project) => (
            project.isActive ? (
              <Link 
                key={project.id}
                to={`/project/${project.id}`}
                className="w-full bg-white/60 backdrop-blur-[40px] border border-[#1A1A1A]/[0.05] rounded-[32px] md:rounded-[40px] p-[16px] shadow-[0_24px_48px_rgba(0,0,0,0.02),inset_0_1px_1px_rgba(255,255,255,1)] hover:bg-white transition-all duration-500 group flex flex-col h-full cursor-pointer relative overflow-hidden"
              >
                {/* Image Container - Square Aspect Ratio */}
                <div className="aspect-square rounded-[24px] md:rounded-[32px] overflow-hidden relative mb-[32px] shadow-[inset_0_0_0_1px_rgba(0,0,0,0.05)] w-full">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover grayscale sepia-[0.15] transition-transform duration-[2s] group-hover:scale-105" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A]/50 via-[#1A1A1A]/10 to-transparent opacity-80" />
                  
                  <div className="absolute top-[16px] left-[16px] md:top-[24px] md:left-[24px] bg-white/90 backdrop-blur-xl border border-[#1A1A1A]/10 rounded-full px-[16px] py-[8px] shadow-[0_4px_16px_rgba(0,0,0,0.1),inset_0_1px_1px_rgba(255,255,255,1)]">
                    <span className="text-[#1A1A1A] text-[11px] uppercase tracking-widest font-bold leading-none">{project.category}</span>
                  </div>

                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="bg-white/90 backdrop-blur-md rounded-full px-[24px] py-[12px] text-[15px] font-bold text-[#1A1A1A] flex items-center gap-[8px] shadow-[0_8px_32px_rgba(0,0,0,0.2)] transform translate-y-4 group-hover:translate-y-0 transition-all min-h-[44px]">
                      View Details <ArrowUpRight size={20} />
                    </div>
                  </div>
                </div>

                <div className="px-[8px] md:px-[16px] pb-[8px] md:pb-[16px] flex flex-col flex-1 w-full">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-[16px] mb-[16px]">
                    <h3 className="text-[#1A1A1A] font-['Inter'] text-[20px] md:text-[28px] leading-[1.2] font-semibold tracking-tight">{project.title}</h3>
                    <div className="text-[#1A1A1A] font-bold text-[14px] leading-[1.5] whitespace-nowrap bg-[#1A1A1A]/[0.04] px-[16px] py-[8px] rounded-[16px] w-fit border border-[#1A1A1A]/5">{project.price}</div>
                  </div>
                  
                  <div className="flex items-center text-[#1A1A1A]/60 text-[15px] leading-[1.5] font-medium mt-auto">
                    <MapPin size={20} className="mr-[8px]" /> {project.location}
                  </div>
                </div>
              </Link>
            ) : (
              <div 
                key={project.id}
                className="w-full bg-[#1A1A1A]/[0.02] border border-[#1A1A1A]/[0.05] rounded-[32px] md:rounded-[40px] p-[16px] flex flex-col h-full relative overflow-hidden"
              >
                <div className="aspect-square rounded-[24px] md:rounded-[32px] overflow-hidden relative mb-[32px] border-2 border-dashed border-[#1A1A1A]/10 w-full flex items-center justify-center bg-[#F5F4F0]">
                  <div className="absolute inset-0 bg-[#1A1A1A]/5 backdrop-blur-[2px] z-10" />
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover grayscale opacity-20 absolute inset-0" 
                  />
                  <div className="relative z-20 text-center">
                    <div className="w-[48px] h-[48px] rounded-full bg-white/50 flex items-center justify-center mx-auto mb-[12px] border border-[#1A1A1A]/10">
                      <span className="w-[8px] h-[8px] rounded-full bg-[#1A1A1A]/30" />
                    </div>
                    <span className="font-['Inter'] font-bold text-[12px] tracking-widest uppercase text-[#1A1A1A]/40">{project.price}</span>
                  </div>
                </div>

                <div className="px-[8px] md:px-[16px] pb-[8px] md:pb-[16px] flex flex-col flex-1 w-full opacity-50">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-[16px] mb-[16px]">
                    <h3 className="text-[#1A1A1A] font-['Inter'] text-[20px] md:text-[28px] leading-[1.2] font-semibold tracking-tight">{project.title}</h3>
                  </div>
                  <div className="flex items-center text-[#1A1A1A]/60 text-[15px] leading-[1.5] font-medium mt-auto">
                    <MapPin size={20} className="mr-[8px]" /> {project.location}
                  </div>
                </div>
              </div>
            )
          ))}
        </div>
      </div>
    </section>
  );
}
