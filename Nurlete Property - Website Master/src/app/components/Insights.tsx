import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router';

const news = [
  {
    id: 1,
    date: "MAY 01, 2026",
    title: "Ambon Real Estate: The 2026 Surge in Premium Coastal Living",
    category: "Market Trends",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800"
  },
  {
    id: 2,
    date: "APR 15, 2026",
    title: "Nava Terra Site Update: Foundation Works Complete Ahead of Schedule",
    category: "Progress",
    image: "https://images.unsplash.com/photo-1541888081622-1f31f98fb04b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800"
  },
  {
    id: 3,
    date: "MAR 28, 2026",
    title: "Minimalism in the Tropics: Why High Ceilings Matter in Ambon",
    category: "Design Tips",
    image: "https://images.unsplash.com/photo-1600607686527-6fb886090705?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800"
  }
];

export function Insights() {
  return (
    <section className="py-[120px] md:py-[160px] relative z-10">
      <div className="max-w-7xl mx-auto px-[20px] md:px-[80px]">
        
        <div className="flex flex-col md:flex-row justify-between md:items-end mb-[64px] gap-[32px]">
          <div>
            <div className="inline-flex items-center gap-[8px] px-[16px] py-[8px] rounded-full bg-white/80 backdrop-blur-[40px] border border-[#1A1A1A]/[0.08] mb-[24px] shadow-[inset_0_1px_1px_rgba(255,255,255,1),0_4px_12px_rgba(0,0,0,0.03)] min-h-[44px]">
              <span className="w-[8px] h-[8px] rounded-full bg-[#1A1A1A] shadow-[0_0_8px_rgba(0,0,0,0.3)]" />
              <span className="text-[#1A1A1A] font-['Inter'] text-[11px] font-bold uppercase tracking-[0.2em]">Latest News</span>
            </div>
            <h2 className="font-['Inter'] text-[#1A1A1A] text-[36px] md:text-[48px] leading-[1.2] font-semibold tracking-tight">
              News & Insights
            </h2>
          </div>
          <Link to="/insights" className="flex items-center justify-center gap-[8px] bg-white/80 backdrop-blur-[40px] border border-[#1A1A1A]/[0.08] rounded-full px-[32px] py-[12px] min-h-[44px] text-[#1A1A1A] font-['Inter'] text-[15px] font-bold hover:bg-white transition-all shadow-[0_8px_32px_rgba(0,0,0,0.06),inset_0_1px_1px_rgba(255,255,255,1)] active:scale-95 group w-full md:w-auto">
            Read All Articles <ArrowUpRight size={20} className="text-[#1A1A1A] group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-[32px]">
          {news.map((item) => (
            <Link to="/insights" key={item.id} className="bg-white/60 backdrop-blur-[40px] border border-[#1A1A1A]/[0.08] rounded-[32px] p-[16px] shadow-[0_16px_40px_rgba(0,0,0,0.02),inset_0_1px_1px_rgba(255,255,255,1)] hover:bg-white hover:-translate-y-2 transition-all duration-500 group cursor-pointer flex flex-col h-full active:scale-[0.98]">
              
              <div className="aspect-[4/3] rounded-[24px] overflow-hidden relative mb-[24px] shadow-[inset_0_0_0_1px_rgba(0,0,0,0.05)]">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover grayscale sepia-[0.15] transition-transform duration-[2s] group-hover:scale-105" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A]/40 via-transparent to-transparent" />
                <div className="absolute top-[16px] left-[16px] bg-white/90 backdrop-blur-md border border-[#1A1A1A]/10 rounded-full px-[16px] py-[4px] shadow-[0_4px_12px_rgba(0,0,0,0.1)]">
                  <span className="text-[#1A1A1A] font-['Inter'] text-[10px] uppercase tracking-wider font-bold">{item.category}</span>
                </div>
              </div>

              <div className="px-[12px] pb-[16px] flex flex-col flex-1">
                <span className="text-[#1A1A1A]/40 font-['Inter'] text-[12px] font-bold tracking-widest mb-[12px]">{item.date}</span>
                <h3 className="text-[#1A1A1A] font-['Inter'] text-[20px] font-bold tracking-tight leading-[1.3] mb-[16px] group-hover:text-[#1A1A1A]/70 transition-colors">
                  {item.title}
                </h3>
                
                <div className="mt-auto flex items-center gap-[8px] text-[#1A1A1A] font-['Inter'] font-bold text-[14px]">
                  Read Article <ArrowUpRight size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </div>
              </div>
              
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}
