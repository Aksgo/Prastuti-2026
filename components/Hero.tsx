import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, MapPin, ChevronRight, Cpu } from 'lucide-react';
import { FEST_DATES } from '../constants';

export const Hero: React.FC = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-slate-950 pt-16">
      {/* Background Grid */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 z-0"></div>
      <div className="absolute inset-0 z-0 opacity-20" 
           style={{
             backgroundImage: 'radial-gradient(#0891b2 1px, transparent 1px)',
             backgroundSize: '40px 40px'
           }}>
      </div>
      
      {/* Animated Glows */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-600/20 rounded-full blur-[100px] animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-[100px] animate-pulse delay-1000"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-800/50 border border-cyan-500/30 backdrop-blur-sm mb-8 animate-[fade-in_1s_ease-out]">
          <Cpu className="w-4 h-4 text-cyan-400" />
          <span className="text-cyan-200 text-sm font-medium tracking-wide">DEPARTMENT OF ELECTRICAL ENGINEERING, IIT BHU</span>
        </div>

        <h1 className="text-5xl md:text-8xl font-heading font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 mb-6 drop-shadow-[0_0_15px_rgba(6,182,212,0.5)]">
          PRASTUTI '26
        </h1>

        <p className="mt-4 max-w-2xl mx-auto text-xl text-slate-400 font-light">
          Experience the surge of innovation. Where circuits meet creativity and code meets consciousness.
        </p>

        <div className="mt-8 flex flex-col md:flex-row items-center justify-center gap-6 text-lg font-medium text-slate-300">
          <div className="flex items-center gap-2">
            <Calendar className="w-5 h-5 text-yellow-400" />
            <span>{FEST_DATES}</span>
          </div>
          <div className="hidden md:block w-1.5 h-1.5 rounded-full bg-slate-600"></div>
          <div className="flex items-center gap-2">
            <MapPin className="w-5 h-5 text-red-400" />
            <span>IIT BHU, Varanasi</span>
          </div>
        </div>

        <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/schedule"
            className="group relative px-8 py-4 bg-cyan-600 hover:bg-cyan-500 text-white font-bold rounded-lg overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(6,182,212,0.6)]"
          >
            <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]"></div>
            <span className="flex items-center justify-center gap-2">
              View Schedule <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </span>
          </Link>
          <Link
            to="/events"
            className="px-8 py-4 bg-slate-800 hover:bg-slate-700 text-cyan-400 border border-cyan-500/30 font-bold rounded-lg transition-all duration-300 hover:scale-105"
          >
            Explore Events
          </Link>
        </div>
      </div>
    </div>
  );
};
