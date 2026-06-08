
import { motion } from "framer-motion"
import { 
  Cpu, 
  Smartphone, 
  ShieldAlert, 
  Rocket, 
  PlayCircle, 
  Clock, 
  ChevronRight, 
  Zap,
  ArrowRight,
  Mail,
  TerminalSquare
} from "lucide-react"
import { useTranslation } from "react-i18next"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

// --- Dummy Data ---

const HERO_STORY = {
  id: "hero-t1",
  title: "Next-Gen Quantum Processor Shatters Previous Computation Records",
  summary: "Researchers have unveiled a new 1000-qubit processor architecture that promises to solve complex molecular simulations in seconds, bringing practical quantum supremacy closer to reality.",
  image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?q=80&w=1200&auto=format&fit=crop",
  category: "Quantum Computing",
  time: "2 hours ago",
  author: "Alex Rivera"
}

const TOP_HEADLINES = [
  {
    id: "th-t1",
    title: "Major smartphone brand delays foldable launch to perfect hinge mechanics",
    time: "3 hours ago"
  },
  {
    id: "th-t2",
    title: "Global semiconductor shortage shows signs of easing ahead of holiday season",
    time: "5 hours ago"
  },
  {
    id: "th-t3",
    title: "Open-source consortium releases new standards for interoperable smart homes",
    time: "6 hours ago"
  },
  {
    id: "th-t4",
    title: "Social media giant faces fresh regulatory scrutiny over data tracking",
    time: "8 hours ago"
  }
]

const AI_INNOVATION = [
  {
    id: "ai-1",
    title: "Generative AI models now matching specialized doctors in diagnostics",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=400&auto=format&fit=crop",
    time: "1 hour ago",
    readTime: "5 min read"
  },
  {
    id: "ai-2",
    title: "New autonomous robotics framework dramatically reduces training time",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=400&auto=format&fit=crop",
    time: "4 hours ago",
    readTime: "8 min read"
  }
]

const GADGET_NEWS = [
  {
    id: "gd-1",
    title: "Review: The new VR headset that actually gets mixed reality right",
    image: "https://images.unsplash.com/photo-1622979135225-d2ba269cf1ac?q=80&w=400&auto=format&fit=crop",
    rating: "9.2/10"
  },
  {
    id: "gd-2",
    title: "This ultra-thin laptop compromises on ports, but not on battery life",
    image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?q=80&w=400&auto=format&fit=crop",
    rating: "8.5/10"
  },
  {
    id: "gd-3",
    title: "Next year's flagship phones will feature satellite connectivity standard",
    image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?q=80&w=400&auto=format&fit=crop",
    rating: "News"
  }
]

const CYBERSECURITY = [
  {
    id: "cy-1",
    title: "Critical zero-day vulnerability found in popular enterprise VPN software",
    level: "Critical",
    time: "30 mins ago"
  },
  {
    id: "cy-2",
    title: "Ransomware gang targets healthcare providers in coordinated global attack",
    level: "High",
    time: "2 hours ago"
  },
  {
    id: "cy-3",
    title: "Security researchers uncover massive botnet powered by smart TVs",
    level: "Medium",
    time: "5 hours ago"
  }
]

const TECH_VIDEOS = [
  {
    id: "tv-1",
    title: "Hands-on: Driving the first fully autonomous EV prototype",
    thumbnail: "https://images.unsplash.com/photo-1593941707882-a5bba14938cb?q=80&w=600&auto=format&fit=crop",
    duration: "14:20"
  },
  {
    id: "tv-2",
    title: "Inside the server farm powering the next generation of AI",
    thumbnail: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=600&auto=format&fit=crop",
    duration: "22:15"
  },
  {
    id: "tv-3",
    title: "Tech Weekly: Top 5 announcements from the Developer Conference",
    thumbnail: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=600&auto=format&fit=crop",
    duration: "08:45"
  }
]

const TECH_GRID = [
  {
    id: "tg-1",
    title: "Space tourism company successfully completes commercial test flight",
    category: "Aerospace",
    time: "2 hours ago",
    image: "https://images.unsplash.com/photo-1517976487492-5750f3195933?q=80&w=400&auto=format&fit=crop"
  },
  {
    id: "tg-2",
    title: "Gaming giant acquires independent studio in $2B mega-deal",
    category: "Gaming",
    time: "4 hours ago",
    image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=400&auto=format&fit=crop"
  },
  {
    id: "tg-3",
    title: "New synthetic biology technique allows for faster biodegradable plastics",
    category: "Biotech",
    time: "5 hours ago",
    image: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?q=80&w=400&auto=format&fit=crop"
  },
  {
    id: "tg-4",
    title: "Cloud infrastructure providers announce universal pricing drop",
    category: "Cloud",
    time: "7 hours ago",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=400&auto=format&fit=crop"
  },
  {
    id: "tg-5",
    title: "Wearable tech moves beyond fitness to real-time blood analysis",
    category: "Health Tech",
    time: "9 hours ago",
    image: "https://images.unsplash.com/photo-1575311373937-040b8e1fd5b6?q=80&w=400&auto=format&fit=crop"
  },
  {
    id: "tg-6",
    title: "Europe introduces right-to-repair legislation for consumer electronics",
    category: "Policy",
    time: "11 hours ago",
    image: "https://images.unsplash.com/photo-1592833159155-c62df1b65634?q=80&w=400&auto=format&fit=crop"
  }
]

export function TechPage() {
  const { t } = useTranslation()

  return (
    <div className="bg-slate-50 dark:bg-slate-950 min-h-screen pb-16 font-sans selection:bg-cyan-500/30">
      
      {/* Dynamic Top Bar */}
      <div className="bg-gradient-to-r from-cyan-600 to-blue-700 text-white py-1.5 px-4 text-center text-sm font-medium tracking-wide">
        <span className="animate-pulse inline-block mr-2 text-cyan-200">●</span> 
        {t("tech.liveBanner", "Live: Tech Developer Conference 2026 Keynote starting in 30 minutes.")} 
        <a href="#" className="underline ml-2 font-bold hover:text-cyan-200">{t("tech.watchStream", "Watch Stream")}</a>
      </div>

      <div className="container mx-auto px-4 py-8 max-w-7xl">
        
        {/* Page Title */}
        <div className="mb-8 flex flex-col md:flex-row md:items-end justify-between border-b border-border pb-4 gap-4">
          <div>
            <h1 className="text-4xl md:text-5xl font-black font-heading tracking-tight text-slate-900 dark:text-white flex items-center gap-3 uppercase">
              {t("tech.title", "Technology")} <TerminalSquare className="h-8 w-8 text-cyan-500 hidden md:block" />
            </h1>
            <p className="text-muted-foreground mt-1 text-sm font-medium">{t("tech.subtitle", "Innovation, AI, Gadgets & Future Tech")}</p>
          </div>
          <div className="flex gap-2">
            <Badge variant="outline" className="border-cyan-500/30 text-cyan-600 dark:text-cyan-400 font-bold bg-cyan-500/5">
              {t("tech.tagAi", "#AI")}
            </Badge>
            <Badge variant="outline" className="border-purple-500/30 text-purple-600 dark:text-purple-400 font-bold bg-purple-500/5">
              {t("tech.tagGadgets", "#Gadgets")}
            </Badge>
            <Badge variant="outline" className="border-blue-500/30 text-blue-600 dark:text-blue-400 font-bold bg-blue-500/5">
              {t("tech.tagCybersecurity", "#Cybersecurity")}
            </Badge>
          </div>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-12 gap-8 mb-12">
          
          {/* 1. Featured Technology Story */}
          <div className="xl:col-span-8">
            <motion.div 
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="group cursor-pointer relative overflow-hidden rounded-2xl h-full min-h-[450px] bg-slate-900 border border-slate-800"
            >
              <img 
                src={HERO_STORY.image} 
                alt="Hero" 
                className="absolute inset-0 w-full h-full object-cover opacity-70 transition-transform duration-1000 group-hover:scale-105 group-hover:opacity-60"
              width={800} height={400} onError={(e) => { e.currentTarget.src = 'https://images.unsplash.com/photo-1585829365295-ab7cd400c167?q=80&w=800&auto=format&fit=crop'; e.currentTarget.onerror = null; }} />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/60 to-transparent z-10"></div>
              
              <div className="absolute bottom-0 left-0 w-full p-6 md:p-10 z-20">
                <Badge className="bg-cyan-500 hover:bg-cyan-600 text-slate-950 mb-4 border-none rounded-sm uppercase tracking-widest font-black text-xs">
                  {HERO_STORY.category}
                </Badge>
                <h2 className="text-3xl md:text-5xl font-black font-heading text-white leading-tight mb-4 group-hover:text-cyan-300 transition-colors">
                  {HERO_STORY.title}
                </h2>
                <p className="text-slate-300 text-base md:text-lg max-w-3xl mb-6 font-medium line-clamp-2 md:line-clamp-none">
                  {HERO_STORY.summary}
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-slate-400 text-sm gap-4 font-medium">
                    <span className="flex items-center gap-1.5"><Clock className="h-4 w-4 text-cyan-500" /> {HERO_STORY.time}</span>
                  </div>
                  <Button className="bg-white text-slate-900 hover:bg-cyan-50 rounded-full font-bold group-hover:px-6 transition-all duration-300">
                    {t("tech.readArticle", "Read Article")} <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
            </motion.div>
          </div>

          {/* 8. Latest Tech Headlines & 5. Cybersecurity */}
          <div className="xl:col-span-4 flex flex-col gap-6">
            
            {/* Tech Headlines */}
            <Card className="border-border shadow-sm flex-1 bg-white dark:bg-slate-900 rounded-2xl overflow-hidden border-t-4 border-t-cyan-500">
              <CardContent className="p-0 flex flex-col h-full">
                <div className="p-5 border-b border-border/50">
                  <h3 className="text-lg font-black font-heading uppercase text-slate-900 dark:text-white flex items-center gap-2">
                    <Zap className="h-5 w-5 text-cyan-500" /> {t("tech.theWire", "The Wire")}
                  </h3>
                </div>
                <div className="flex flex-col divide-y divide-border/50 flex-1">
                  {TOP_HEADLINES.map((headline) => (
                    <div key={headline.id} className="p-5 group cursor-pointer hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                      <h4 className="text-sm font-bold leading-snug text-slate-900 dark:text-slate-200 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
                        {headline.title}
                      </h4>
                      <span className="text-xs text-muted-foreground flex items-center gap-1 mt-2 font-medium">
                        <Clock className="h-3 w-3" /> {headline.time}
                      </span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Cybersecurity Updates Mini */}
            <Card className="border-border shadow-sm bg-slate-900 dark:bg-slate-950 rounded-2xl overflow-hidden border border-slate-800">
              <CardContent className="p-0">
                <div className="p-4 border-b border-slate-800 bg-slate-950/50">
                  <h3 className="text-base font-bold font-heading uppercase text-white flex items-center gap-2">
                    <ShieldAlert className="h-4 w-4 text-red-500" /> {t("tech.threatIntel", "Threat Intelligence")}
                  </h3>
                </div>
                <div className="flex flex-col divide-y divide-slate-800/50">
                  {CYBERSECURITY.slice(0, 2).map((threat) => (
                    <div key={threat.id} className="p-4 group cursor-pointer hover:bg-slate-800/50 transition-colors">
                      <div className="flex items-center gap-2 mb-1.5">
                        <Badge variant="outline" className={`text-[10px] uppercase font-bold border-none px-1.5 py-0 rounded-sm ${
                          threat.level === 'Critical' ? 'bg-red-500/20 text-red-400' : 
                          threat.level === 'High' ? 'bg-orange-500/20 text-orange-400' : 'bg-yellow-500/20 text-yellow-400'
                        }`}>
                          {threat.level}
                        </Badge>
                        <span className="text-xs text-slate-500">{threat.time}</span>
                      </div>
                      <h4 className="text-sm font-medium leading-snug text-slate-300 group-hover:text-white transition-colors">
                        {threat.title}
                      </h4>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* 2. AI & 3. Gadgets Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          
          {/* AI & Innovation */}
          <div>
            <div className="mb-6 border-b border-border pb-2 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Cpu className="h-6 w-6 text-purple-500" />
                <h3 className="text-2xl font-black font-heading uppercase text-slate-900 dark:text-white">
                  {t("tech.artificialIntelligence", "Artificial Intelligence")}
                </h3>
              </div>
              <ChevronRight className="h-5 w-5 text-muted-foreground cursor-pointer" />
            </div>
            <div className="space-y-6">
              {AI_INNOVATION.map((news) => (
                <div key={news.id} className="group cursor-pointer">
                  <div className="relative aspect-video rounded-xl overflow-hidden mb-4 border border-border/50">
                    <img src={news.image} alt={news.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" width={800} height={400} onError={(e) => { e.currentTarget.src = 'https://images.unsplash.com/photo-1585829365295-ab7cd400c167?q=80&w=800&auto=format&fit=crop'; e.currentTarget.onerror = null; }} />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  </div>
                  <h4 className="text-xl font-bold font-heading leading-snug text-slate-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                    {news.title}
                  </h4>
                  <div className="flex items-center text-xs text-muted-foreground gap-3 mt-2 font-medium">
                    <span className="flex items-center gap-1"><Clock className="h-3.5 w-3.5" /> {news.time}</span>
                    <span className="text-purple-500/50">•</span>
                    <span>{news.readTime}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Gadget News */}
          <div>
            <div className="mb-6 border-b border-border pb-2 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Smartphone className="h-6 w-6 text-blue-500" />
                <h3 className="text-2xl font-black font-heading uppercase text-slate-900 dark:text-white">
                  {t("tech.gadgetsHardware", "Gadgets & Hardware")}
                </h3>
              </div>
              <ChevronRight className="h-5 w-5 text-muted-foreground cursor-pointer" />
            </div>
            <div className="flex flex-col gap-6">
              {GADGET_NEWS.map((gadget) => (
                <div key={gadget.id} className="group flex gap-5 cursor-pointer bg-white dark:bg-slate-900 p-3 rounded-2xl border border-border shadow-sm hover:shadow-md transition-all">
                  <div className="w-32 h-24 rounded-xl overflow-hidden shrink-0">
                    <img src={gadget.image} alt={gadget.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" width={800} height={400} onError={(e) => { e.currentTarget.src = 'https://images.unsplash.com/photo-1585829365295-ab7cd400c167?q=80&w=800&auto=format&fit=crop'; e.currentTarget.onerror = null; }} />
                  </div>
                  <div className="flex flex-col justify-center flex-1 pr-2">
                    <Badge variant="secondary" className="w-fit mb-2 text-[10px] font-bold uppercase tracking-wider bg-blue-100 text-blue-700 dark:bg-blue-500/20 dark:text-blue-300">
                      {gadget.rating}
                    </Badge>
                    <h4 className="text-sm md:text-base font-bold leading-snug text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors line-clamp-2">
                      {gadget.title}
                    </h4>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Startup Banner Mini */}
            <div className="mt-6 bg-gradient-to-br from-indigo-600 to-purple-700 rounded-2xl p-6 text-white relative overflow-hidden group cursor-pointer">
              <Rocket className="absolute right-[-20px] bottom-[-20px] h-32 w-32 text-white/10 group-hover:text-white/20 transition-colors transform -rotate-12" />
              <div className="relative z-10">
                <Badge className="bg-white/20 text-white hover:bg-white/30 border-none mb-3">{t("tech.startupFunding", "Startup & Funding")}</Badge>
                <h4 className="text-xl font-bold font-heading leading-snug mb-1">{t("tech.startupBannerTitle", "Q3 Venture Capital Report is out")}</h4>
                <p className="text-indigo-200 text-sm">{t("tech.startupBannerDesc", "See which sectors secured the most funding this quarter.")}</p>
              </div>
            </div>
          </div>
        </div>

        {/* 6. Technology Videos Section */}
        <div className="mb-16">
          <div className="flex items-center justify-between mb-6 border-b border-border pb-2">
            <h3 className="text-2xl font-black font-heading uppercase text-slate-900 dark:text-white flex items-center gap-2">
              <PlayCircle className="h-6 w-6 text-slate-700 dark:text-slate-400" /> {t("tech.featuredVideo", "Featured Video")}
            </h3>
            <Button variant="ghost" className="font-bold">{t("tech.browseChannel", "Browse Channel")} <ChevronRight className="h-4 w-4 ml-1" /></Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            <div className="md:col-span-8 group cursor-pointer">
              <div className="relative aspect-video rounded-2xl overflow-hidden bg-black mb-4 shadow-md">
                <img src={TECH_VIDEOS[0].thumbnail} alt={TECH_VIDEOS[0].title} className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700" width={800} height={400} onError={(e) => { e.currentTarget.src = 'https://images.unsplash.com/photo-1585829365295-ab7cd400c167?q=80&w=800&auto=format&fit=crop'; e.currentTarget.onerror = null; }} />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="h-16 w-16 rounded-full bg-cyan-500/90 backdrop-blur-sm flex items-center justify-center group-hover:bg-cyan-400 transition-colors group-hover:scale-110 duration-300">
                    <PlayCircle className="h-10 w-10 text-white ml-1" />
                  </div>
                </div>
                <div className="absolute bottom-4 right-4 bg-black/80 text-white text-sm font-bold px-3 py-1.5 rounded-lg backdrop-blur-md">
                  {TECH_VIDEOS[0].duration}
                </div>
              </div>
              <h4 className="text-2xl font-black font-heading leading-tight group-hover:text-cyan-600 transition-colors">
                {TECH_VIDEOS[0].title}
              </h4>
            </div>
            
            <div className="md:col-span-4 flex flex-col gap-6">
              {TECH_VIDEOS.slice(1).map((video) => (
                <div key={video.id} className="group cursor-pointer">
                  <div className="relative aspect-video rounded-xl overflow-hidden bg-black mb-3">
                    <img src={video.thumbnail} alt={video.title} className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500" width={800} height={400} onError={(e) => { e.currentTarget.src = 'https://images.unsplash.com/photo-1585829365295-ab7cd400c167?q=80&w=800&auto=format&fit=crop'; e.currentTarget.onerror = null; }} />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="h-10 w-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center group-hover:bg-cyan-500 transition-colors">
                        <PlayCircle className="h-6 w-6 text-white ml-0.5" />
                      </div>
                    </div>
                    <div className="absolute bottom-2 right-2 bg-black/80 text-white text-xs font-bold px-2 py-1 rounded">
                      {video.duration}
                    </div>
                  </div>
                  <h4 className="text-base font-bold font-heading leading-tight group-hover:text-cyan-600 transition-colors line-clamp-2">
                    {video.title}
                  </h4>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* 9. Technology News Grid */}
        <div className="mb-16">
          <div className="flex items-center justify-between mb-8 border-b border-border pb-2">
            <h3 className="text-2xl font-black font-heading uppercase text-slate-900 dark:text-white">
              {t("tech.latestFromGrid", "Latest from the Grid")}
            </h3>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 gap-y-12">
            {TECH_GRID.map((news, index) => (
              <motion.div 
                key={news.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="group cursor-pointer flex flex-col gap-4"
              >
                <div className="relative aspect-[16/10] rounded-2xl overflow-hidden border border-border/50">
                  <img src={news.image} alt={news.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" width={800} height={400} onError={(e) => { e.currentTarget.src = 'https://images.unsplash.com/photo-1585829365295-ab7cd400c167?q=80&w=800&auto=format&fit=crop'; e.currentTarget.onerror = null; }} />
                  <div className="absolute top-3 left-3 bg-slate-900/80 backdrop-blur-md border border-slate-700 text-white text-[10px] uppercase font-bold tracking-wider px-2.5 py-1 rounded-full">
                    {news.category}
                  </div>
                </div>
                <div>
                  <h4 className="text-lg font-bold font-heading leading-snug group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors mb-2">
                    {news.title}
                  </h4>
                  <span className="text-xs text-muted-foreground flex items-center gap-1 font-medium">
                    <Clock className="h-3.5 w-3.5" /> {news.time}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Button className="rounded-full px-8 py-6 font-bold text-base bg-slate-900 text-white dark:bg-white dark:text-slate-900 hover:opacity-90 transition-opacity">
              {t("tech.loadMore", "Load More Tech News")}
            </Button>
          </div>
        </div>
      </div>

      {/* 10. Newsletter Section */}
      <div className="bg-slate-950 text-white py-20 relative overflow-hidden">
        {/* Abstract Tech Background Elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-20">
          <div className="absolute top-[-10%] left-[-5%] w-96 h-96 bg-cyan-600 blur-[100px] rounded-full"></div>
          <div className="absolute bottom-[-10%] right-[-5%] w-96 h-96 bg-purple-600 blur-[100px] rounded-full"></div>
        </div>

        <div className="container mx-auto px-4 max-w-4xl text-center relative z-10">
          <Badge className="bg-cyan-500/20 text-cyan-400 hover:bg-cyan-500/20 border border-cyan-500/30 rounded-full px-4 py-1 mb-6 uppercase tracking-widest text-xs font-bold">
            {t("tech.stayUpdated", "Stay Updated")}
          </Badge>
          <h2 className="text-3xl md:text-5xl font-black font-heading mb-4">{t("tech.subscribeTitle", "The Future, In Your Inbox.")}</h2>
          <p className="text-slate-400 mb-10 max-w-2xl mx-auto text-lg md:text-xl font-medium">
            {t("tech.subscribeDesc", "Join 250,000+ tech professionals receiving our curated weekly digest of the most critical technology news, AI breakthroughs, and gadget reviews.")}
          </p>
          <form className="flex flex-col sm:flex-row max-w-lg mx-auto gap-3">
            <div className="relative flex-1">
              <Mail className="absolute left-4 top-3.5 h-5 w-5 text-slate-400" />
              <Input 
                type="email" 
                placeholder={t("tech.emailPlaceholder", "developer@example.com")} 
                className="bg-slate-900/80 border-slate-700 text-white placeholder:text-slate-500 h-12 pl-12 rounded-xl focus-visible:ring-cyan-500 focus-visible:border-transparent" 
                required
              />
            </div>
            <Button type="button" className="bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold h-12 px-8 rounded-xl transition-colors">
              {t("tech.subscribeBtn", "Subscribe")}
            </Button>
          </form>
          <p className="text-xs text-slate-500 mt-6">
            {t("tech.subscribeTerms", "Zero spam. One email per week. Unsubscribe at any time.")}
          </p>
        </div>
      </div>

    </div>
  )
}
