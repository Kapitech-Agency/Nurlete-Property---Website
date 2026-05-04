import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router';
import { motion, useScroll, useTransform } from 'motion/react';
import { ArrowLeft, ChevronRight, Calendar, User, Clock, Share2 } from 'lucide-react';

export function ArticleDetail() {
  const { id } = useParams();

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 1000], [0, 150]);

  return (
    <div className="pt-[160px] pb-[120px] md:pb-[160px] w-full z-10 bg-[#F5F4F0] font-['Inter'] relative min-h-screen">
      
      {/* Decorative Grid */}
      <motion.div style={{ y: y1, backgroundImage: 'linear-gradient(#1A1A1A 1px, transparent 1px), linear-gradient(90deg, #1A1A1A 1px, transparent 1px)', backgroundSize: '40px 40px' }} className="absolute inset-0 opacity-[0.015] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-[20px] md:px-[80px] w-full relative z-10">
        
        {/* Breadcrumb Navigation */}
        <nav className="flex items-center gap-[12px] mb-[48px] text-[#1A1A1A]/50 font-['Inter'] font-semibold text-[13px] uppercase tracking-wide">
          <Link to="/insights" className="hover:text-[#1A1A1A] transition-colors flex items-center gap-[8px] min-h-[44px]">
            <ArrowLeft size={16} /> Back to Insights
          </Link>
          <ChevronRight size={16} />
          <span className="text-[#1A1A1A]">Market Trends</span>
        </nav>

        {/* Article Header */}
        <header className="mb-[64px]">
          <h1 className="font-['Inter'] text-[36px] md:text-[52px] leading-[1.2] font-semibold text-[#1A1A1A] tracking-tight mb-[32px]">
            Ambon Real Estate: The 2026 Surge in Premium Coastal Living
          </h1>
          <div className="flex flex-wrap items-center gap-[24px] pb-[32px] border-b border-[#1A1A1A]/10 text-[#1A1A1A]/60 font-medium text-[15px]">
            <div className="flex items-center gap-[8px]">
              <Calendar size={18} /> May 01, 2026
            </div>
            <div className="flex items-center gap-[8px]">
              <User size={18} /> By Nurlete Research
            </div>
            <div className="flex items-center gap-[8px]">
              <Clock size={18} /> 5 min read
            </div>
            <button className="flex items-center gap-[8px] ml-auto text-[#1A1A1A] hover:bg-[#1A1A1A]/5 px-[16px] py-[8px] rounded-full transition-colors font-bold min-h-[44px]">
              <Share2 size={18} /> Share
            </button>
          </div>
        </header>

        {/* Featured Image */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="w-full aspect-[16/9] md:aspect-[21/9] rounded-[32px] overflow-hidden mb-[64px] shadow-[0_24px_64px_rgba(0,0,0,0.05),inset_0_0_0_1px_rgba(0,0,0,0.05)] bg-[#E5E3DF]"
        >
          <img 
            src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920" 
            alt="Ambon Coastal Property" 
            className="w-full h-full object-cover grayscale sepia-[0.1]"
          />
        </motion.div>

        {/* Rich Text Content */}
        <article className="prose prose-lg md:prose-xl prose-slate max-w-none font-['Inter'] selection:bg-[#1A1A1A] selection:text-white">
          <p className="text-[20px] md:text-[24px] leading-[1.6] font-medium text-[#1A1A1A]/80 mb-[48px]">
            As the urban centers of Eastern Indonesia become increasingly congested, property investors and prospective homeowners are looking towards the serene, elevated landscapes of Halong Atas.
          </p>

          <h2 className="text-[28px] font-semibold text-[#1A1A1A] mt-[64px] mb-[24px] tracking-tight">The Shift to Halong Atas</h2>
          <p className="text-[16px] md:text-[18px] leading-[1.8] text-[#1A1A1A]/70 mb-[32px]">
            For decades, real estate in Ambon was heavily concentrated near the bay's edge and the central business district. However, data from Q1 2026 shows a definitive shift. Premium developers, spearheaded by Nurlete Property, have identified the hills of Halong Atas as the next frontier for luxury minimalist living. The elevation provides not only a natural escape from the city's humidity but also guarantees panoramic vistas that lower-lying properties simply cannot match.
          </p>

          <div className="bg-white/80 backdrop-blur-[40px] border-l-[4px] border-[#1A1A1A] rounded-r-[24px] p-[32px] md:p-[48px] my-[48px] shadow-[0_16px_40px_rgba(0,0,0,0.02)]">
            <p className="text-[20px] md:text-[24px] font-semibold leading-[1.5] text-[#1A1A1A] italic m-0">
              "The modern homebuyer in Ambon isn't just looking for square footage; they are investing in climate, elevation, and architectural tranquility."
            </p>
          </div>

          <h2 className="text-[28px] font-semibold text-[#1A1A1A] mt-[64px] mb-[24px] tracking-tight">Investment Metrics</h2>
          <p className="text-[16px] md:text-[18px] leading-[1.8] text-[#1A1A1A]/70 mb-[32px]">
            From an investment standpoint, the numbers are compelling. Properties within secured cluster developments in the Halong area have seen an average annual appreciation of 12% over the last two years. This outpaces the traditional downtown assets by a significant margin. 
          </p>

          <ul className="space-y-[16px] mb-[48px] text-[16px] md:text-[18px] leading-[1.8] text-[#1A1A1A]/70">
            <li className="flex items-start gap-[16px]">
              <span className="w-[8px] h-[8px] mt-[10px] rounded-full bg-[#1A1A1A] shrink-0" />
              <strong>High Rental Yields:</strong> Due to proximity to the Pattimura Airport bypass and the JMP bridge, properties here command premium rental rates from expatriates and executives.
            </li>
            <li className="flex items-start gap-[16px]">
              <span className="w-[8px] h-[8px] mt-[10px] rounded-full bg-[#1A1A1A] shrink-0" />
              <strong>Environmental Sustainability:</strong> Hillside plots require rigorous foundational work (such as the coral rock bases used in Nava Terra), which ultimately ensures multi-generational structural integrity.
            </li>
          </ul>

          <h2 className="text-[28px] font-semibold text-[#1A1A1A] mt-[64px] mb-[24px] tracking-tight">Looking Forward</h2>
          <p className="text-[16px] md:text-[18px] leading-[1.8] text-[#1A1A1A]/70 mb-[32px]">
            As Ambon continues to develop as the primary hub for Eastern Indonesia, the definition of luxury will evolve. It is no longer just about extravagant materials, but about the harmonious integration of space, nature, and invisible smart technology. Projects like Nava Terra are currently setting the benchmark for what this future looks like.
          </p>
        </article>

        {/* Footer Next/Prev */}
        <div className="mt-[80px] pt-[48px] border-t border-[#1A1A1A]/10 flex flex-col md:flex-row items-center justify-between gap-[32px]">
           <Link to="/insights" className="group flex items-center justify-center gap-[12px] bg-white/80 backdrop-blur-md border border-[#1A1A1A]/10 rounded-full px-[32px] py-[16px] font-bold text-[#1A1A1A] hover:bg-white shadow-[0_8px_24px_rgba(0,0,0,0.02),inset_0_1px_1px_rgba(255,255,255,1)] active:scale-95 transition-all w-full md:w-auto min-h-[56px]">
              <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" /> All Insights
           </Link>

           <a href="https://wa.me/6282239415718" target="_blank" rel="noreferrer" className="flex items-center justify-center gap-[12px] bg-[#1A1A1A] text-white rounded-full px-[32px] py-[16px] font-bold text-[15px] shadow-[0_16px_32px_rgba(26,26,26,0.2),inset_0_1px_1px_rgba(255,255,255,0.2)] hover:scale-[1.02] active:scale-[0.98] transition-all w-full md:w-auto min-h-[56px]">
              Discuss Market Trends on WhatsApp <ChevronRight size={20} />
           </a>
        </div>

      </div>
    </div>
  );
}
