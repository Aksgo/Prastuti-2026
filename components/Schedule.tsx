import React from 'react';
import { EVENTS } from '../constants';
import { Clock } from 'lucide-react';

export const Schedule: React.FC = () => {
  // Sort events by date and time
  const sortedEvents = [...EVENTS].sort((a, b) => {
    const dateA = new Date(`${a.date} ${a.time}`);
    const dateB = new Date(`${b.date} ${b.time}`);
    return dateA.getTime() - dateB.getTime();
  });

  // Group events by date
  const groupedEvents = sortedEvents.reduce((acc, event) => {
    if (!acc[event.date]) acc[event.date] = [];
    acc[event.date].push(event);
    return acc;
  }, {} as Record<string, typeof EVENTS>);

  const dates = Object.keys(groupedEvents);

  return (
    <div className="min-h-screen bg-slate-950 pt-24 pb-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16 animate-[fade-in_0.5s_ease-out]">
          <h2 className="text-4xl font-heading font-bold text-white mb-4">
            Event <span className="text-cyan-400">Timeline</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-blue-600 mx-auto rounded-full"></div>
          <p className="mt-4 text-slate-400">Follow the sequence of innovation.</p>
        </div>

        <div className="relative">
          {/* Vertical Timeline Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-500/10 via-cyan-500/50 to-cyan-500/10 md:-translate-x-1/2"></div>

          {dates.map((date, dateIndex) => {
            // Calculate starting index based on previous dates
            const previousEventsCount = dates
              .slice(0, dateIndex)
              .reduce((count, d) => count + groupedEvents[d].length, 0);
            
            return (
            <div key={date} className="mb-16">
              <div className="sticky top-24 z-30 flex justify-center mb-10">
                <div className="px-6 py-2 bg-slate-900/90 backdrop-blur-md border border-cyan-500/50 rounded-full text-cyan-400 font-bold shadow-[0_0_15px_rgba(6,182,212,0.2)]">
                  {date}
                </div>
              </div>

              <div className="space-y-12">
                {groupedEvents[date].map((event, index) => {
                  const globalIndex = previousEventsCount + index;
                  const isLeft = globalIndex % 2 === 0;
                  return (
                    <div key={event.id} className={`relative flex flex-col md:flex-row gap-8 ${isLeft ? 'md:flex-row-reverse' : ''} group`}>
                      
                      {/* Timeline Dot */}
                      <div className="absolute left-4 md:left-1/2 top-0 w-4 h-4 bg-slate-950 border-2 border-cyan-400 rounded-full -translate-x-1/2 z-20 shadow-[0_0_10px_rgba(6,182,212,0.8)] mt-6 transition-transform duration-300 group-hover:scale-125">
                        <div className="w-full h-full bg-cyan-400 rounded-full animate-ping opacity-20"></div>
                      </div>

                      {/* Content Card */}
                      <div className="ml-12 md:ml-0 md:w-1/2 px-4">
                         <div className={`
                           bg-slate-900/50 border border-slate-800 p-6 rounded-xl 
                           backdrop-blur-sm hover:border-cyan-500/50 hover:bg-slate-900
                           transition-all duration-300 hover:shadow-[0_0_20px_rgba(6,182,212,0.1)] 
                           hover:-translate-y-1
                           ${isLeft ? 'md:text-left' : 'md:text-right'}
                         `}>
                            <div className={`flex items-center gap-2 text-cyan-400 mb-2 ${isLeft ? 'md:justify-start' : 'md:justify-end'}`}>
                              <Clock className="w-4 h-4" />
                              <span className="font-mono text-sm tracking-wider">{event.time}</span>
                            </div>
                            
                            <h3 className="text-xl font-heading font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                              {event.title}
                            </h3>
                            
                            <div className={`inline-block px-3 py-1 rounded-full text-xs font-semibold mb-3 border ${
                              event.category === 'Competition' ? 'bg-purple-500/10 text-purple-300 border-purple-500/30' :
                              event.category === 'Workshop' ? 'bg-green-500/10 text-green-300 border-green-500/30' :
                              'bg-blue-500/10 text-blue-300 border-blue-500/30'
                            }`}>
                              {event.category}
                            </div>
                            
                            <p className="text-slate-400 text-sm leading-relaxed">
                              {event.description}
                            </p>
                         </div>
                      </div>
                      
                      {/* Spacer for opposite side */}
                      <div className="hidden md:block md:w-1/2"></div>
                    </div>
                  );
                })}
              </div>
            </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};