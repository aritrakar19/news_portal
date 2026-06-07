import { Badge } from "@/components/ui/badge"

const HERO_STORIES = [
  {
    id: 1,
    title: "Global Summit Reaches Unprecedented Climate Agreement",
    category: "Politics",
    time: "2 hours ago",
    image: "https://images.unsplash.com/photo-1611273426858-450d8e3c9cce?q=80&w=2000&auto=format&fit=crop",
    isBreaking: true
  },
  {
    id: 2,
    title: "Tech Giants Announce Coalition for AI Safety Standards",
    category: "Technology",
    time: "4 hours ago",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1000&auto=format&fit=crop",
  },
  {
    id: 3,
    title: "Central Bank Keeps Interest Rates Steady Amid Inflation Fears",
    category: "Economy",
    time: "5 hours ago",
    image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=1000&auto=format&fit=crop",
  },
  {
    id: 4,
    title: "National Cricket Team Triumphs in Thrilling Final Match",
    category: "Sports",
    time: "6 hours ago",
    image: "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?q=80&w=1000&auto=format&fit=crop",
  }
]

export function HeroGrid() {
  const [mainStory, ...sideStories] = HERO_STORIES

  return (
    <section className="py-8">
      <div className="container grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-6 lg:h-[550px]">
        {/* Main Story */}
        <div className="lg:col-span-8 relative rounded-xl overflow-hidden group cursor-pointer h-[400px] sm:h-[500px] lg:h-full">
          <img 
            src={mainStory.image} 
            alt={mainStory.title} 
            width={2000}
            height={1333}
            onError={(e) => {
              e.currentTarget.src = "https://images.unsplash.com/photo-1585829365295-ab7cd400c167?q=80&w=2000&auto=format&fit=crop";
              e.currentTarget.onerror = null;
            }}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-transparent flex flex-col justify-end p-6 md:p-10">
            <div className="flex items-center gap-3 mb-4">
              {mainStory.isBreaking && (
                <Badge variant="destructive" className="animate-pulse">BREAKING</Badge>
              )}
              <Badge variant="secondary" className="bg-white/20 hover:bg-white/30 text-white backdrop-blur-md border-none">
                {mainStory.category}
              </Badge>
              <span className="text-white/80 text-sm font-medium">{mainStory.time}</span>
            </div>
            <h1 className="text-2xl sm:text-3xl md:text-5xl font-heading font-extrabold text-white leading-tight mb-2 group-hover:text-slate-200 transition-colors">
              {mainStory.title}
            </h1>
            <p className="text-slate-300 md:text-lg max-w-3xl line-clamp-2 mt-2 text-sm sm:text-base">
              In a historic move, delegates from 195 nations have signed a comprehensive agreement aimed at accelerating the global transition to renewable energy sources by 2035.
            </p>
          </div>
        </div>

        {/* Side Stories Grid */}
        <div className="lg:col-span-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-1 gap-4 lg:gap-6 h-auto lg:h-full">
          {sideStories.map((story) => (
            <div key={story.id} className="relative rounded-xl overflow-hidden group cursor-pointer h-[250px] lg:h-auto lg:flex-1">
              <img 
                src={story.image} 
                alt={story.title} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              width={800} height={400} onError={(e) => { e.currentTarget.src = 'https://images.unsplash.com/photo-1585829365295-ab7cd400c167?q=80&w=800&auto=format&fit=crop'; e.currentTarget.onerror = null; }} />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/95 via-slate-900/60 to-transparent flex flex-col justify-end p-5">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-accent text-xs font-bold tracking-wider uppercase">
                    {story.category}
                  </span>
                  <span className="text-white/60 text-xs">• {story.time}</span>
                </div>
                <h3 className="text-lg font-heading font-bold text-white leading-tight group-hover:text-slate-200 transition-colors">
                  {story.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
