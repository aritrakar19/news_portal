
import { motion } from "framer-motion"
import { 
  TrendingUp, 
  TrendingDown, 
  PlayCircle, 
  Clock, 
  ChevronRight, 
  Briefcase, 
  Building2, 
  Rocket, 
  LineChart,
  ArrowRight,
  Mail,
  DollarSign,
  Activity
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

// --- Dummy Data ---

const MARKET_SNAPSHOT = [
  { symbol: "SENSEX", value: "73,500.25", change: "+450.50", changePercent: "+0.62%", isUp: true },
  { symbol: "NIFTY 50", value: "22,330.15", change: "+145.20", changePercent: "+0.65%", isUp: true },
  { symbol: "GOLD", value: "₹63,200", change: "-120.00", changePercent: "-0.19%", isUp: false },
  { symbol: "USD/INR", value: "82.95", change: "+0.15", changePercent: "+0.18%", isUp: false } // USD going up means INR depreciating, usually marked red in local context, but let's keep it simple. Let's make it up (green) for UI variety or down depending on context. Let's say down (red) to show mix.
]

const HERO_STORY = {
  id: "hero-b1",
  title: "Central Bank Maintains Rates, Raises GDP Growth Forecast for FY25",
  summary: "In a highly anticipated monetary policy committee meeting, the central bank opted to keep the repo rate unchanged at 6.5% for the sixth consecutive time, while expressing confidence in the economy's robust growth momentum.",
  image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=1200&auto=format&fit=crop",
  category: "Economy",
  time: "1 hour ago",
  author: "Neha Agarwal"
}

const TOP_HEADLINES = [
  {
    id: "th-b1",
    title: "Tech giant announces $2B investment in local AI data centers",
    time: "2 hours ago"
  },
  {
    id: "th-b2",
    title: "Auto sales hit record high during festive season, up 15% YoY",
    time: "4 hours ago"
  },
  {
    id: "th-b3",
    title: "Global oil prices cool down amidst easing supply chain concerns",
    time: "5 hours ago"
  },
  {
    id: "th-b4",
    title: "Major telecom merger gets antitrust regulatory approval",
    time: "7 hours ago"
  }
]

const STARTUP_NEWS = [
  {
    id: "st-1",
    title: "Fintech unicorn secures $150M in Series E funding led by global investors",
    image: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?q=80&w=400&auto=format&fit=crop",
    time: "3 hours ago"
  },
  {
    id: "st-2",
    title: "EV startup unveils disruptive solid-state battery technology",
    image: "https://images.unsplash.com/photo-1593941707882-a5bba14938cb?q=80&w=400&auto=format&fit=crop",
    time: "6 hours ago"
  },
  {
    id: "st-3",
    title: "Healthtech platform hits 10 million active users milestone",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=400&auto=format&fit=crop",
    time: "8 hours ago"
  }
]

const CORPORATE_NEWS = [
  {
    id: "cr-1",
    title: "FMCG major announces 1:2 stock split and special dividend",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=400&auto=format&fit=crop",
    time: "1 hour ago"
  },
  {
    id: "cr-2",
    title: "IT services firm posts better-than-expected Q3 earnings",
    image: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=400&auto=format&fit=crop",
    time: "4 hours ago"
  },
  {
    id: "cr-3",
    title: "Aviation sector braces for consolidation as key players resume merger talks",
    image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=400&auto=format&fit=crop",
    time: "6 hours ago"
  }
]

const VIDEO_REPORTS = [
  {
    id: "vr-1",
    title: "Market Open: Expert Analysis on Today's Trading Setup",
    thumbnail: "https://images.unsplash.com/photo-1535320903710-d993d3d77d29?q=80&w=600&auto=format&fit=crop",
    duration: "10:20"
  },
  {
    id: "vr-2",
    title: "CEO Interview: Expanding Global Footprint in 2026",
    thumbnail: "https://images.unsplash.com/photo-1573164713988-8665fc963095?q=80&w=600&auto=format&fit=crop",
    duration: "25:40"
  }
]

const BUSINESS_GRID = [
  {
    id: "bg-1",
    title: "Commodity markets rally as supply constraints tighten globally",
    category: "Markets",
    time: "2 hours ago",
    image: "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?q=80&w=400&auto=format&fit=crop"
  },
  {
    id: "bg-2",
    title: "Real estate sector witnesses 20% surge in commercial leasing",
    category: "Real Estate",
    time: "4 hours ago",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=400&auto=format&fit=crop"
  },
  {
    id: "bg-3",
    title: "Government unveils new export incentive scheme for textile manufacturers",
    category: "Economy",
    time: "5 hours ago",
    image: "https://images.unsplash.com/photo-1558098329-a11cff621064?q=80&w=400&auto=format&fit=crop"
  },
  {
    id: "bg-4",
    title: "Cryptocurrency regulations: Industry awaits clarity in upcoming session",
    category: "Crypto",
    time: "7 hours ago",
    image: "https://images.unsplash.com/photo-1518546305927-5a555bb7020d?q=80&w=400&auto=format&fit=crop"
  },
  {
    id: "bg-5",
    title: "Retail inflation drops to 11-month low, offering relief to consumers",
    category: "Economy",
    time: "9 hours ago",
    image: "https://images.unsplash.com/photo-1580519542036-ed47f3e42214?q=80&w=400&auto=format&fit=crop"
  },
  {
    id: "bg-6",
    title: "Pharmaceutical exports touch new highs on robust demand",
    category: "Corporate",
    time: "11 hours ago",
    image: "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?q=80&w=400&auto=format&fit=crop"
  }
]

export function BusinessPage() {
  return (
    <div className="bg-slate-50 dark:bg-slate-950 min-h-screen pb-16 font-sans">
      
      {/* 2. Market Snapshot Cards (Ticker style) */}
      <div className="bg-slate-900 text-slate-100 border-b border-slate-800">
        <div className="container mx-auto px-4 max-w-7xl overflow-x-auto hide-scrollbar">
          <div className="flex items-center gap-6 py-3 min-w-max">
            <div className="font-bold text-slate-400 text-sm uppercase tracking-wider border-r border-slate-700 pr-4 shrink-0 flex items-center gap-2">
              <Activity className="h-4 w-4" /> Market Watch
            </div>
            {MARKET_SNAPSHOT.map((item, index) => (
              <div key={index} className="flex flex-col shrink-0 pr-6 border-r border-slate-800 last:border-0">
                <div className="text-xs font-semibold text-slate-400">{item.symbol}</div>
                <div className="flex items-center gap-2 mt-0.5">
                  <span className="font-bold font-mono tracking-tight">{item.value}</span>
                  <div className={`flex items-center text-xs font-bold ${item.isUp ? 'text-emerald-400' : 'text-red-400'}`}>
                    {item.isUp ? <TrendingUp className="h-3 w-3 mr-0.5" /> : <TrendingDown className="h-3 w-3 mr-0.5" />}
                    {item.change} ({item.changePercent})
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8 max-w-7xl">
        
        {/* Page Title */}
        <div className="mb-8 flex flex-col md:flex-row md:items-end justify-between border-b-2 border-slate-200 dark:border-slate-800 pb-4 gap-4">
          <div>
            <h1 className="text-4xl md:text-5xl font-black font-heading tracking-tight text-slate-900 dark:text-white uppercase flex items-center gap-3">
              Business <DollarSign className="h-8 w-8 text-blue-600 hidden md:block" />
            </h1>
            <p className="text-muted-foreground mt-1 text-sm font-medium">Markets, Economy & Corporate Intelligence</p>
          </div>
          <div className="flex items-center gap-4">
            <div className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Markets open</div>
            <div className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse"></div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12">
          
          {/* 1. Featured Business Story */}
          <div className="lg:col-span-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="group cursor-pointer relative overflow-hidden rounded-xl h-full min-h-[400px] md:min-h-[480px] bg-slate-900"
            >
              <img 
                src={HERO_STORY.image} 
                alt="Hero" 
                className="absolute inset-0 w-full h-full object-cover opacity-60 transition-transform duration-700 group-hover:scale-105 mix-blend-overlay"
              width={800} height={400} onError={(e) => { e.currentTarget.src = 'https://images.unsplash.com/photo-1585829365295-ab7cd400c167?q=80&w=800&auto=format&fit=crop'; e.currentTarget.onerror = null; }} />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent z-10"></div>
              
              <div className="absolute bottom-0 left-0 w-full p-6 md:p-8 z-20">
                <Badge className="bg-blue-600 hover:bg-blue-700 text-white mb-4 border-none rounded-sm uppercase tracking-wider font-bold">
                  {HERO_STORY.category}
                </Badge>
                <h2 className="text-3xl md:text-4xl font-bold font-heading text-white leading-tight mb-4 group-hover:text-blue-200 transition-colors">
                  {HERO_STORY.title}
                </h2>
                <p className="text-slate-300 text-base md:text-lg max-w-3xl mb-6 line-clamp-3 md:line-clamp-none font-medium">
                  {HERO_STORY.summary}
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-slate-400 text-sm gap-4 font-medium">
                    <span className="flex items-center gap-1.5"><Clock className="h-4 w-4" /> {HERO_STORY.time}</span>
                  </div>
                  <Button className="bg-blue-600 text-white hover:bg-blue-700 rounded-sm font-bold group-hover:translate-x-1 transition-transform">
                    Full Coverage <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
            </motion.div>
          </div>

          {/* 3. Business Headlines (Sidebar) */}
          <div className="lg:col-span-4 flex flex-col h-full">
            <Card className="border-border shadow-sm flex-1 bg-white dark:bg-slate-900 rounded-xl overflow-hidden">
              <CardHeader className="bg-slate-50 dark:bg-slate-950 border-b border-border py-4">
                <CardTitle className="text-lg font-bold font-heading uppercase text-slate-900 dark:text-white flex items-center gap-2">
                  <LineChart className="h-5 w-5 text-blue-600" /> Executive Briefing
                </CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <div className="flex flex-col divide-y divide-border">
                  {TOP_HEADLINES.map((headline, index) => (
                    <motion.div 
                      key={headline.id}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1, duration: 0.4 }}
                      className="p-5 group cursor-pointer hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors"
                    >
                      <h4 className="text-base font-bold leading-snug text-slate-900 dark:text-white group-hover:text-blue-600 transition-colors line-clamp-3">
                        {headline.title}
                      </h4>
                      <span className="text-xs text-muted-foreground flex items-center gap-1 mt-3 font-medium">
                        <Clock className="h-3 w-3" /> {headline.time}
                      </span>
                    </motion.div>
                  ))}
                </div>
                <div className="p-4 bg-slate-50 dark:bg-slate-950 border-t border-border text-center mt-auto">
                  <Button variant="link" className="text-xs font-bold text-blue-600 uppercase tracking-widest">
                    All Latest News <ChevronRight className="h-3 w-3 ml-1" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Categories Section (Startup & Corporate) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          
          {/* 4. Startup News */}
          <div>
            <div className="mb-6 border-b-2 border-slate-200 dark:border-slate-800 pb-2 flex items-center gap-2">
              <Rocket className="h-6 w-6 text-orange-500" />
              <h3 className="text-2xl font-bold font-heading uppercase text-slate-900 dark:text-white">
                Startups & Tech
              </h3>
            </div>
            <div className="space-y-6">
              {STARTUP_NEWS.map((news) => (
                <div key={news.id} className="group flex gap-4 cursor-pointer">
                  <div className="w-1/3 aspect-video rounded-lg overflow-hidden shrink-0">
                    <img src={news.image} alt={news.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" width={800} height={400} onError={(e) => { e.currentTarget.src = 'https://images.unsplash.com/photo-1585829365295-ab7cd400c167?q=80&w=800&auto=format&fit=crop'; e.currentTarget.onerror = null; }} />
                  </div>
                  <div className="flex flex-col justify-center flex-1">
                    <h4 className="text-base font-bold leading-snug text-slate-900 dark:text-white group-hover:text-orange-500 transition-colors line-clamp-3">
                      {news.title}
                    </h4>
                    <span className="text-xs text-muted-foreground flex items-center gap-1 mt-2 font-medium">
                      <Clock className="h-3 w-3" /> {news.time}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 5. Corporate News */}
          <div>
            <div className="mb-6 border-b-2 border-slate-200 dark:border-slate-800 pb-2 flex items-center gap-2">
              <Building2 className="h-6 w-6 text-indigo-600" />
              <h3 className="text-2xl font-bold font-heading uppercase text-slate-900 dark:text-white">
                Corporate India
              </h3>
            </div>
            <div className="space-y-6">
              {CORPORATE_NEWS.map((news) => (
                <div key={news.id} className="group flex gap-4 cursor-pointer">
                  <div className="w-1/3 aspect-video rounded-lg overflow-hidden shrink-0">
                    <img src={news.image} alt={news.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" width={800} height={400} onError={(e) => { e.currentTarget.src = 'https://images.unsplash.com/photo-1585829365295-ab7cd400c167?q=80&w=800&auto=format&fit=crop'; e.currentTarget.onerror = null; }} />
                  </div>
                  <div className="flex flex-col justify-center flex-1">
                    <h4 className="text-base font-bold leading-snug text-slate-900 dark:text-white group-hover:text-indigo-600 transition-colors line-clamp-3">
                      {news.title}
                    </h4>
                    <span className="text-xs text-muted-foreground flex items-center gap-1 mt-2 font-medium">
                      <Clock className="h-3 w-3" /> {news.time}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* 7. Business Video Reports */}
        <div className="mb-16 bg-slate-900 dark:bg-slate-950 text-white rounded-2xl p-6 md:p-8 border border-slate-800">
          <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4 border-b border-slate-800 pb-4">
            <div>
              <h3 className="text-2xl font-bold font-heading uppercase flex items-center gap-2">
                <PlayCircle className="h-6 w-6 text-blue-500" /> Bloomberg Style TV
              </h3>
              <p className="text-slate-400 text-sm mt-1">Live market coverage and expert interviews</p>
            </div>
            <Button variant="outline" className="text-sm font-medium border-slate-700 bg-slate-800 hover:bg-slate-700 text-white">
              Watch Live <ChevronRight className="h-4 w-4 ml-1" />
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {VIDEO_REPORTS.map((video, index) => (
              <motion.div 
                key={video.id}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group cursor-pointer"
              >
                <div className="relative aspect-video rounded-xl overflow-hidden bg-slate-800 mb-4 border border-slate-700">
                  <img src={video.thumbnail} alt={video.title} className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500" width={800} height={400} onError={(e) => { e.currentTarget.src = 'https://images.unsplash.com/photo-1585829365295-ab7cd400c167?q=80&w=800&auto=format&fit=crop'; e.currentTarget.onerror = null; }} />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent flex items-center justify-center">
                    <div className="h-14 w-14 rounded-full bg-blue-600/90 flex items-center justify-center group-hover:bg-blue-500 transition-colors shadow-lg">
                      <PlayCircle className="h-8 w-8 text-white ml-1" />
                    </div>
                  </div>
                  <div className="absolute bottom-3 right-3 bg-black/80 text-white text-xs font-bold px-2 py-1 rounded">
                    {video.duration}
                  </div>
                </div>
                <h4 className="text-xl font-bold font-heading leading-tight group-hover:text-blue-400 transition-colors">
                  {video.title}
                </h4>
              </motion.div>
            ))}
          </div>
        </div>

        {/* 9. Business News Grid */}
        <div className="mb-16">
          <div className="flex items-center justify-between mb-8 border-b-2 border-slate-200 dark:border-slate-800 pb-2">
            <h3 className="text-2xl font-bold font-heading uppercase text-slate-900 dark:text-white flex items-center gap-2">
              <Briefcase className="h-6 w-6 text-slate-700 dark:text-slate-400" /> 
              More Business News
            </h3>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {BUSINESS_GRID.map((news, index) => (
              <motion.div 
                key={news.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="group cursor-pointer flex flex-col gap-4"
              >
                <div className="relative aspect-[16/10] rounded-xl overflow-hidden border border-border/50">
                  <img src={news.image} alt={news.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" width={800} height={400} onError={(e) => { e.currentTarget.src = 'https://images.unsplash.com/photo-1585829365295-ab7cd400c167?q=80&w=800&auto=format&fit=crop'; e.currentTarget.onerror = null; }} />
                  <Badge className="absolute bottom-3 left-3 bg-slate-900/90 text-white hover:bg-slate-900 border-none rounded-sm font-bold shadow-sm backdrop-blur-sm">
                    {news.category}
                  </Badge>
                </div>
                <div>
                  <h4 className="text-lg font-bold font-heading leading-snug group-hover:text-blue-600 transition-colors mb-2">
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
            <Button variant="outline" className="rounded-sm px-8 py-6 font-bold text-base border-2 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
              Load More Market News
            </Button>
          </div>
        </div>
      </div>

      {/* 10. Newsletter Section */}
      <div className="bg-blue-900 text-white py-16 border-t-4 border-blue-500">
        <div className="container mx-auto px-4 max-w-5xl flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex-1 text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-bold font-heading mb-3 text-white">The Daily Market Open</h2>
            <p className="text-blue-200 max-w-xl mx-auto md:mx-0 text-lg">
              Expert financial analysis, pre-market briefs, and corporate insights delivered before the bell rings.
            </p>
          </div>
          <form className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
            <div className="relative">
              <Mail className="absolute left-3 top-3 h-5 w-5 text-blue-300" />
              <Input 
                type="email" 
                placeholder="Enter your email" 
                className="bg-blue-950 border-blue-800 text-white placeholder:text-blue-400 pl-10 h-12 w-full sm:w-72" 
                required
              />
            </div>
            <Button type="button" className="bg-blue-500 hover:bg-blue-400 text-white font-bold h-12 px-8">
              Subscribe Free
            </Button>
          </form>
        </div>
      </div>

    </div>
  )
}
