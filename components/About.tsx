import React, { useEffect, useState } from 'react'

const fullText = `
Prastuti was started as an All India Students' Paper Presentation contest organized by the Electrical Engineering Society (EES) in 2001.
Since then, Prastuti has grown in eminence and, through its nationwide notability, has impacted many technically curious minds.

Over the years, as technology has developed, we expanded our horizons and introduced various new events, giving young minds their first
experience of the fast-paced technical world.

Following the glorious legacy of the Electrical Engineering Department, IIT (BHU), Varanasi proudly presents the 22nd iteration of its
annual fiesta. Prastuti ’26 brings together a series of intellectual and innovative events, leading into a technological renaissance.
`

const images = [
  '/assets/img1.jpeg',
  '/assets/img2.jpeg',
  '/assets/img3.jpeg',
  '/assets/img4.jpeg',
]

export const About: React.FC = () => {
  const [displayText, setDisplayText] = useState('')
  const [index, setIndex] = useState(0)

  useEffect(() => {
    if (index < fullText.length) {
      const timer = setTimeout(() => {
        setDisplayText(prev => prev + fullText[index])
        setIndex(prev => prev + 1)
      }, 15)
      return () => clearTimeout(timer)
    }
  }, [index])

  return (
    <div className="min-h-screen bg-slate-950 pt-12 pb-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto py-12 animate-[fade-in_0.6s_ease-out]">

        <h2 className="text-4xl font-heading font-bold text-center text-white mb-4">
          About <span className="text-cyan-400">Prastuti</span>
        </h2>
        <div className="w-24 mb-6 h-1 bg-gradient-to-r from-cyan-500 to-blue-600 mx-auto rounded-full animate-pulse"></div>

        <div className="mx-2 sm:mx-28 backdrop-blur-md bg-slate-900/50
                        border border-cyan-400/30 rounded-lg p-6
                        text-slate-300 shadow-[0_0_15px_rgba(6,182,212,0.2)]
                        leading-relaxed">

          <p className="text-lg whitespace-pre-line">
            {displayText}
            <span className="inline-block w-2 animate-pulse text-cyan-400">|</span>
          </p>


          <div className="my-10 h-px bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent"></div>

          {/* Gallery */}
          <div>
            <h3 className="text-2xl font-heading font-semibold text-center text-white mb-8">
              Past Editions in <span className="text-cyan-400">Focus</span>
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {images.map((src, i) => (
                <div
                  key={i}
                  className="group relative overflow-hidden rounded-lg backdrop-blur-md
                             bg-slate-900/50 border border-cyan-400/30
                             shadow-[0_0_15px_rgba(6,182,212,0.2)]
                             transition-transform duration-300"
                >
                  <img
                    src={src}
                    loading="lazy"
                    alt={`Prastuti moment ${i + 1}`}
                    className="h-56 w-full object-cover transition-all duration-500
                               group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 to-transparent"></div>
                  <div className="absolute bottom-0 w-full px-3 py-2 text-sm text-slate-300
                                  opacity-0 group-hover:opacity-100 transition">
                    Prastuti • Innovation & Excellence
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}
