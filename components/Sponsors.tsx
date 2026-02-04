import React from "react";

const sponsors = [
  { name: "CodeChef (Unacademy Initiative)", logo: "/sponsors/codechef.png" },
  { name: "Newton School", logo: "/sponsors/newtonschool.png" },
  { name: "OYO", logo: "/sponsors/oyo.png" },
  { name: "Barbeque Nation", logo: "/sponsors/barbequenation.png" },
  { name: "T.I.M.E.", logo: "/sponsors/time.png" },
  { name: "General Electric", logo: "/sponsors/ge.png" },
  { name: "Aditya Birla Group", logo: "/sponsors/adityabirla.png" },
  { name: "Power Grid Corporation of India", logo: "/sponsors/powergrid.png" },
  { name: "Dibz", logo: "/sponsors/dibz.png" },
  { name: "Merch & Wiser", logo: "/sponsors/merchewiser.png" },
  { name: "TONI&GUY Hairdressing", logo: "/sponsors/toniguy.png" },

  { name: "Cafebility", logo: "/sponsors/cafebility.png" },
  { name: "The College Fever", logo: "/sponsors/collegefever.png" },
  { name: "Altair", logo: "/sponsors/altair.png" },
  { name: "The Boring News Co.", logo: "/sponsors/boringnews.png" },
  { name: "Grill Inn", logo: "/sponsors/grillinn.png" },
  { name: "WittyFeed", logo: "/sponsors/wittyfeed.png" },
  { name: "Paprika", logo: "/sponsors/paprika.png" },
  { name: "Awestruck", logo: "/sponsors/awestruck.png" },
  { name: "IEEE Student Branch IIT(BHU)", logo: "/sponsors/ieee.png" },
  { name: "TimeOut Café", logo: "/sponsors/timeoutcafe.png" },
  { name: "eLearnMarkets", logo: "/sponsors/elearnmarkets.png" },
  { name: "Stark Bistro", logo: "/sponsors/starkbistro.png" },
  { name: "FestPav", logo: "/sponsors/festpav.png" },
  { name: "GeeksforGeeks", logo: "/sponsors/gfg.png" },
];

const Sponsors = () => {
  return (
    <section className="relative py-20 px-6 bg-[#050b1a] overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.12),_transparent_65%)]" />

      <div className="relative max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl mt-5 font-bold bg-gradient-to-r from-cyan-400 via-blue-400 to-violet-400 bg-clip-text text-transparent">
            Our Past Sponsors
          </h2>
          <p className="mt-4 text-gray-400 max-w-3xl mx-auto">
            We proudly acknowledge the organizations that support innovation,
            technology, and creativity at PRASTUTI
          </p>
        </div>

        <div className="grid grid-cols-2 cursor-pointer sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8">
          {sponsors.map((sponsor, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center
                         bg-[#0a1228]/70 backdrop-blur-md
                         border border-cyan-400/10
                         rounded-xl p-6
                         transition-all duration-300
                         hover:border-cyan-400/40
                         hover:shadow-[0_0_28px_rgba(56,189,248,0.25)]"
            >
              <img
                src={sponsor.logo}
                alt={sponsor.name}
                className="h-16 md:h-20 object-contain mb-4
                           transition duration-300"
              />

              <p className="text-sm md:text-base text-gray-300 font-medium">
                {sponsor.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Sponsors;
