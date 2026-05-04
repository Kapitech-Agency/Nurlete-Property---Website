import React from 'react';
import { ArrowUpRight } from 'lucide-react';

export function About() {
  return (
    <section id="story" className="py-32 relative z-10">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="bg-white/60 backdrop-blur-[40px] border border-black/[0.08] rounded-[48px] p-8 md:p-16 shadow-[0_24px_48px_rgba(0,0,0,0.05),inset_0_1px_1px_rgba(255,255,255,1)] flex flex-col lg:flex-row gap-16 lg:gap-24 items-center overflow-hidden relative">
          
          {/* Subtle glow orb inside the container */}
          <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] rounded-full bg-black/5 blur-[100px] pointer-events-none" />

          {/* Left: Artistic Image */}
          <div className="w-full lg:w-5/12 relative z-10">
            <div className="aspect-[4/5] rounded-[32px] overflow-hidden shadow-[0_32px_64px_rgba(0,0,0,0.1),inset_0_0_0_1px_rgba(0,0,0,0.05)] relative">
              <img 
                src="https://images.unsplash.com/photo-1768268958096-96ec77907596?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMG1vZGVybiUyMGJ1aWxkaW5nJTIwZmFjYWRlJTIwZGV0YWlsJTIwYXJjaGl0ZWN0dXJhbHxlbnwxfHx8fDE3Nzc3OTEwNDB8MA&ixlib=rb-4.1.0&q=80&w=1080" 
                alt="Architectural Detail" 
                className="w-full h-full object-cover grayscale transition-all duration-[1.5s]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
            </div>
            
            {/* Floating Glass Stats Badge */}
            <div className="absolute -bottom-8 -right-8 bg-white/90 backdrop-blur-[40px] border border-black/[0.08] rounded-[24px] p-6 shadow-[0_24px_48px_rgba(0,0,0,0.1),inset_0_1px_1px_rgba(255,255,255,1)]">
              <div className="font-['Inter'] text-black text-4xl font-bold mb-1 tracking-tight">25+</div>
              <div className="font-['Inter'] text-black/50 text-xs uppercase tracking-widest font-bold">Years of Excellence</div>
            </div>
          </div>

          {/* Right: Copy */}
          <div className="w-full lg:w-6/12 flex flex-col justify-center z-10">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 border border-black/[0.08] mb-8 shadow-[inset_0_1px_1px_rgba(255,255,255,1)] w-fit">
              <span className="w-2 h-2 rounded-full bg-black shadow-[0_0_8px_rgba(0,0,0,0.3)]" />
              <span className="text-black font-['Inter'] text-[11px] font-bold uppercase tracking-[0.2em]">Our Legacy</span>
            </div>
            
            <h2 className="font-['Inter'] text-black text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight mb-8 leading-[1.1]">
              Shaping skylines, <br/>
              <span className="text-black/40">elevating lifestyles.</span>
            </h2>
            
            <div className="space-y-6 font-['Inter'] text-black/60 text-lg font-medium max-w-xl leading-relaxed">
              <p>
                At Kapitech Land, we believe that true luxury lies in the details. For over two decades, we have been at the forefront of modern architectural development, transforming prime locations into timeless masterpieces.
              </p>
              <p>
                Our 'Quality First' philosophy ensures that every project, from exclusive residential estates to iconic high-rise towers, is crafted with meticulous attention to design, sustainability, and unparalleled comfort.
              </p>
            </div>

            <div className="mt-12">
              <button className="bg-black hover:bg-black/80 rounded-full px-8 py-4 text-white font-['Inter'] font-semibold text-[15px] transition-all shadow-[0_8px_24px_rgba(0,0,0,0.2),inset_0_1px_1px_rgba(255,255,255,0.2)] hover:shadow-[0_12px_32px_rgba(0,0,0,0.3)] flex items-center gap-2">
                Discover Our Story <ArrowUpRight className="text-white" size={18} />
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
