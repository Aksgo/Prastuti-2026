import React from 'react';
import { TEAM } from '../constants';
import { Linkedin, Mail } from 'lucide-react';

export const Team: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-950 pt-24 pb-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-heading font-bold text-white mb-4">
            Meet the <span className="text-cyan-400">Core Team</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            The minds behind the machines.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {TEAM.map((member) => (
            <div key={member.id} className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-600 rounded-xl blur opacity-25 group-hover:opacity-75 transition duration-500"></div>
              <div className="relative bg-slate-900 p-6 rounded-xl border border-slate-800 flex flex-col items-center text-center h-full">
                <div className="w-32 h-32 mb-4 rounded-full overflow-hidden border-2 border-cyan-500/50 p-1">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-full rounded-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold text-white mb-1">{member.name}</h3>
                <p className="text-cyan-400 text-sm font-medium mb-4">{member.role}</p>
                
                <div className="flex gap-4 mt-auto">
                  <button className="text-slate-400 hover:text-white transition-colors">
                    <Linkedin className="w-5 h-5" />
                  </button>
                  <button className="text-slate-400 hover:text-white transition-colors">
                    <Mail className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
