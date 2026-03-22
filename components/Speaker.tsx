import React from "react";
import { Speaker } from "../types";

interface TeamProps {
  Speakers: Speaker[];
  title: string;
}

export const SpeakerPerson: React.FC<TeamProps> = ({ Speakers, title }) => {
  const len = Speakers.length;
  const isFour = len === 4;

  return (
    <div className="bg-slate-950 pt-24 pb-12 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-heading font-bold text-white mb-4">
            <span className="text-cyan-400">{title}</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            The experts taking the stage.
          </p>
        </div>

        {/* Cards */}
        <div className="flex flex-wrap justify-center gap-8">
          {Speakers.map((member) => (
            <div
              key={member.id}
              className={`relative group ${isFour ? "w-96" : "w-80 flex-shrink-0"}`}
            >
              {/* Glow backdrop */}
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-600 rounded-xl blur opacity-20 group-hover:opacity-60 transition duration-500" />

              {/* Card */}
              <div className="relative bg-slate-900 p-6 rounded-xl border border-slate-800 group-hover:border-cyan-500/40 transition-colors duration-500 flex flex-col items-center text-center h-full">
                {/* Avatar stack */}
                <div className="relative mb-6 mt-2">
                  {/* Outer spinning ring */}
                  <div
                    className="absolute inset-0 rounded-full"
                    style={{
                      padding: "3px",
                      background:
                        "conic-gradient(from 0deg, #22d3ee, #3b82f6, #0e7490, #22d3ee)",
                      borderRadius: "9999px",
                      animation: "spin 4s linear infinite",
                      opacity: 0,
                      transition: "opacity 0.4s",
                    }}
                  />
                  <style>{`
                    @keyframes spin { to { transform: rotate(360deg); } }
                    .group:hover .avatar-ring { opacity: 1 !important; }
                    @keyframes shimmer {
                      0% { transform: translateX(-100%) rotate(45deg); }
                      100% { transform: translateX(200%) rotate(45deg); }
                    }
                  `}</style>

                  {/* Static ring always visible */}
                  <div
                    className="avatar-ring absolute inset-0 rounded-full transition-opacity duration-500"
                    style={{
                      padding: "2.5px",
                      background:
                        "conic-gradient(from 0deg, #22d3ee, #3b82f6, #0e7490, #22d3ee)",
                      borderRadius: "9999px",
                      animation: "spin 4s linear infinite",
                      opacity: 0,
                    }}
                  />

                  {/* Glowing halo behind image */}
                  <div className="absolute inset-0 rounded-full bg-cyan-500/20 blur-md scale-110 group-hover:bg-cyan-400/30 transition-all duration-500" />

                  {/* Image wrapper */}
                  <div
                    className="relative w-32 h-32 rounded-full overflow-hidden"
                    style={{
                      boxShadow:
                        "0 0 0 2px #0e7490, 0 0 0 4px rgba(34,211,238,0.15), 0 8px 32px rgba(34,211,238,0.25)",
                    }}
                  >
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />

                    {/* Shimmer overlay on hover */}
                    <div
                      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      style={{
                        background:
                          "linear-gradient(135deg, transparent 40%, rgba(255,255,255,0.15) 50%, transparent 60%)",
                        animation: "shimmer 1.2s ease-in-out",
                      }}
                    />
                  </div>
                </div>

                {/* Name */}
                <h3 className="text-xl font-bold text-white mb-2">
                  {member.name}
                </h3>

                {/* Role pill */}
                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-cyan-500/10 text-cyan-300 border border-cyan-500/30 mb-4 tracking-wide uppercase">
                  {member.role}
                </span>

                {/* About */}
                <p className="text-slate-400 text-sm leading-relaxed">
                  {member.about}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
