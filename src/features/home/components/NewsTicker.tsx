import { motion } from "framer-motion"

const TICKER_ITEMS = [
  "BREAKING: Historic trade agreement signed in New Delhi.",
  "ELECTION 2026: Key battleground states show tight race in early polling.",
  "TECH: Revolutionary AI chip unveiled, promising 10x performance.",
  "SPORTS: National team secures spot in the World Cup finals.",
  "MARKETS: Sensex hits new all-time high amidst strong global cues."
]

export function NewsTicker() {
  return (
    <div className="w-full bg-slate-900 text-slate-50 border-y border-slate-800 flex items-center h-10 overflow-hidden relative">
      <div className="absolute left-0 top-0 bottom-0 z-10 flex items-center bg-primary px-4 font-bold text-xs tracking-wider uppercase shadow-lg">
        Breaking News
      </div>
      
      {/* Spacer to push marquee past the absolute breaking badge */}
      <div className="w-[140px] shrink-0" />
      
      <div className="flex-1 overflow-hidden relative flex items-center">
        {/* Gradient fades for the edges */}
        <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-slate-900 to-transparent z-10"></div>
        <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-slate-900 to-transparent z-10"></div>
        
        <motion.div
          className="flex whitespace-nowrap gap-12"
          animate={{ x: [0, -1000] }}
          transition={{
            repeat: Infinity,
            duration: 30,
            ease: "linear",
          }}
        >
          {/* Double the array to create seamless infinite loop effect */}
          {[...TICKER_ITEMS, ...TICKER_ITEMS].map((text, i) => (
            <div key={i} className="flex items-center gap-4 text-sm font-medium">
              <span className="w-1.5 h-1.5 rounded-full bg-accent"></span>
              {text}
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  )
}
