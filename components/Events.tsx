import React, { useState } from 'react';
import { EVENTS } from '../constants';
import { Clock, Users, Calendar as CalendarIcon } from 'lucide-react';

export const Events: React.FC = () => {
  const [filter, setFilter] = useState<'All' | 'Competition' | 'Workshop' | 'Guest Lecture'>('All');

  const filteredEvents = filter === 'All' 
    ? EVENTS 
    : EVENTS.filter(e => e.category === filter);

  return (
    <div id="events-section" className="min-h-screen bg-slate-950 pt-24 pb-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-heading font-bold text-white mb-4">
            Events & <span className="text-cyan-400">Workshops</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-blue-600 mx-auto rounded-full"></div>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {['All', 'Competition', 'Workshop', 'Guest Lecture'].map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat as any)}
              className={`px-6 py-2 rounded-full border transition-all duration-300 ${
                filter === cat
                  ? 'bg-cyan-500/20 border-cyan-400 text-cyan-300 shadow-[0_0_15px_rgba(6,182,212,0.3)]'
                  : 'bg-slate-900 border-slate-700 text-slate-400 hover:border-slate-500'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredEvents.map((event) => (
            <div 
              key={event.id}
              className="group relative bg-slate-900 border border-slate-800 rounded-xl overflow-hidden hover:border-cyan-500/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
            >
              <div className="aspect-video w-full overflow-hidden">
                <img 
                  src={event.image} 
                  alt={event.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 opacity-80 group-hover:opacity-100"
                />
                <div className="absolute top-4 right-4 bg-slate-950/80 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold text-cyan-400 border border-cyan-500/30">
                  {event.category}
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-heading font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                  {event.title}
                </h3>
                <p className="text-slate-400 text-sm mb-6 line-clamp-3">
                  {event.description}
                </p>

                <div className="grid grid-cols-2 gap-4 text-sm text-slate-300">
                  <div className="flex items-center gap-2">
                    <CalendarIcon className="w-4 h-4 text-cyan-500" />
                    <span>{event.date}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-cyan-500" />
                    <span>{event.time}</span>
                  </div>
                  {
                  (event.teamSize != 0)?(
                  <div className="flex items-center gap-2">
                    <Users className="w-4 h-4 text-cyan-500" />
                    <span>Team: {event.teamSize === 0 ? 'Open' : event.teamSize}</span>
                  </div>
                  ):(<div></div>)
                  }
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};