import React, { useState } from 'react';
import { EVENTS } from '../constants';
import { useAuth } from '../App';
import { CheckCircle, AlertCircle } from 'lucide-react';

export const Registration: React.FC = () => {
  const { user } = useAuth();
  const [selectedEvent, setSelectedEvent] = useState(EVENTS[0].id);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  if (!user) {
    return (
      <div className="min-h-screen bg-slate-950 flex items-center justify-center px-4 pt-20">
        <div className="text-center bg-slate-900 p-8 rounded-xl border border-red-500/30">
          <AlertCircle className="w-12 h-12 text-red-400 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-white mb-2">Login Required</h2>
          <p className="text-slate-400">Please login to register for events.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-950 pt-24 pb-12 px-4">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-heading font-bold text-white mb-8 border-l-4 border-cyan-500 pl-4">
          Event Registration
        </h2>

        <div className="bg-slate-900 rounded-xl p-8 border border-slate-800 shadow-xl">
          {submitted ? (
            <div className="text-center py-12 animate-[fade-in_0.5s_ease-out]">
              <div className="w-16 h-16 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-green-500" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">Registration Successful!</h3>
              <p className="text-slate-400">We've sent a confirmation email to {user.email}.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">Full Name</label>
                  <input
                    type="text"
                    value={user.name}
                    disabled
                    className="w-full bg-slate-950 border border-slate-700 rounded-lg px-4 py-3 text-slate-400 cursor-not-allowed"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">College</label>
                  <input
                    type="text"
                    value={user.college}
                    disabled
                    className="w-full bg-slate-950 border border-slate-700 rounded-lg px-4 py-3 text-slate-400 cursor-not-allowed"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">Select Event</label>
                <select
                  value={selectedEvent}
                  onChange={(e) => setSelectedEvent(e.target.value)}
                  className="w-full bg-slate-950 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-500"
                >
                  {EVENTS.map(event => (
                    <option key={event.id} value={event.id}>
                      {event.title} ({event.category})
                    </option>
                  ))}
                </select>
              </div>

              {/* Team Members Fields (Dynamic based on team size could be added here) */}
              
              <div className="pt-4">
                <button
                  type="submit"
                  className="w-full bg-cyan-600 hover:bg-cyan-500 text-white font-bold py-4 rounded-lg transition-colors shadow-[0_0_20px_rgba(8,145,178,0.4)]"
                >
                  Confirm Registration
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
