import { PlayCircle } from "lucide-react"

export function LiveTvPreview() {
  return (
    <section className="py-12 bg-slate-900 border-y border-slate-800 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/4 pointer-events-none" />
      
      <div className="container relative z-10">
        <div className="flex flex-col lg:flex-row gap-8 items-center">
          <div className="w-full lg:w-1/3 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/10 border border-red-500/20 text-red-500 text-sm font-bold tracking-widest uppercase">
              <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
              Live TV
            </div>
            <h2 className="text-3xl md:text-5xl font-heading font-extrabold text-white leading-tight">
              PUBLIC NEWS 1 <br/> 24x7 Stream
            </h2>
            <p className="text-slate-400 text-lg">
              Watch round-the-clock coverage, exclusive interviews, and breaking news as it unfolds, directly from our studio.
            </p>
            <div className="pt-4">
              <div className="flex items-center gap-4 text-slate-300 font-medium">
                <div className="flex -space-x-3">
                  {[1, 2, 3].map((i) => (
                    <img key={i} className="object-cover h-full w-full w-10 h-10 rounded-full border-2 border-slate-900" src={`https://i.pravatar.cc/100?img=${i+10}`} alt="Viewer" width={800} height={400} onError={(e) => { e.currentTarget.src = 'https://images.unsplash.com/photo-1585829365295-ab7cd400c167?q=80&w=800&auto=format&fit=crop'; e.currentTarget.onerror = null; }} />
                  ))}
                  <div className="w-10 h-10 rounded-full border-2 border-slate-900 bg-slate-800 flex items-center justify-center text-xs">
                    +24K
                  </div>
                </div>
                <span>Watching now</span>
              </div>
            </div>
          </div>
          
          <div className="w-full lg:w-2/3">
            <div className="relative aspect-video rounded-2xl overflow-hidden border border-slate-700 shadow-2xl group cursor-pointer bg-slate-950">
              <img 
                src="https://images.unsplash.com/photo-1622737133809-d95047b9e673?q=80&w=2000&auto=format&fit=crop" 
                alt="Live Studio"
                className="w-full h-full object-cover opacity-80 group-hover:opacity-60 transition-opacity duration-500"
              width={800} height={400} onError={(e) => { e.currentTarget.src = 'https://images.unsplash.com/photo-1585829365295-ab7cd400c167?q=80&w=800&auto=format&fit=crop'; e.currentTarget.onerror = null; }} />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />
              
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center shadow-glow group-hover:scale-110 transition-transform duration-300">
                  <PlayCircle className="w-10 h-10 text-white fill-white" />
                </div>
              </div>
              
              <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="px-2 py-1 bg-red-600 text-white text-xs font-bold rounded">LIVE</div>
                  <span className="text-white font-medium drop-shadow-md">Prime Time Debate: The Economic Impact</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
