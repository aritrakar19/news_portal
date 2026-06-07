import { useState } from "react"
import { motion } from "framer-motion"
import { 
  PlayCircle, 
  Clock, 
  ChevronRight, 
  TrendingUp, 
  MapPin, 
  FileText,
  Mail,
  ArrowRight
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Separator } from "@/components/ui/separator"

// --- Dummy Data ---

const HERO_STORY = {
  id: "hero-1",
  title: "Parliament Passes Historic Digital Privacy Bill After Marathon Session",
  summary: "In a landmark move that will reshape the digital landscape, lawmakers have approved the comprehensive privacy framework following intense debates across party lines. The new legislation introduces strict data handling mandates and significant penalties for breaches.",
  image: "https://images.unsplash.com/photo-1523995462485-3d171b5c8fa9?q=80&w=1200&auto=format&fit=crop",
  category: "National",
  time: "2 hours ago",
  author: "Sarah Jenkins"
}

const BREAKING_NEWS = [
  "Prime Minister announces new infrastructure package worth $50B",
  "Opposition leaders unite for upcoming state assembly elections",
  "Supreme Court to hear petitions on electoral bonds tomorrow",
  "Finance Minister hints at tax relief for middle class in upcoming budget"
]

const TOP_HEADLINES = [
  {
    id: "th-1",
    title: "Election Commission announces dates for 5 state assembly polls",
    image: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?q=80&w=400&auto=format&fit=crop",
    time: "4 hours ago",
    category: "Elections"
  },
  {
    id: "th-2",
    title: "Cabinet reshuffle likely next week, hint top sources",
    image: "https://images.unsplash.com/photo-1555848962-6e79363ec58f?q=80&w=400&auto=format&fit=crop",
    time: "5 hours ago",
    category: "Government"
  },
  {
    id: "th-3",
    title: "Bilateral summit: Trade and defense top the agenda",
    image: "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?q=80&w=400&auto=format&fit=crop",
    time: "7 hours ago",
    category: "Foreign Policy"
  }
]

const ANALYSIS_ARTICLES = [
  {
    id: "an-1",
    title: "Decoding the political arithmetic of the upcoming general elections",
    author: "Dr. Arvind Mehta",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=150&auto=format&fit=crop",
    readTime: "8 min read"
  },
  {
    id: "an-2",
    title: "Why regional parties hold the key to the next coalition",
    author: "Priya Sharma",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=150&auto=format&fit=crop",
    readTime: "6 min read"
  }
]

const VIDEO_NEWS = [
  {
    id: "vn-1",
    title: "Exclusive Interview: Home Minister on Border Security",
    thumbnail: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=600&auto=format&fit=crop",
    duration: "12:45"
  },
  {
    id: "vn-2",
    title: "Debate: Does the new economic policy favor the rich?",
    thumbnail: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=600&auto=format&fit=crop",
    duration: "45:20"
  },
  {
    id: "vn-3",
    title: "Ground Report: Voter mood in battleground states",
    thumbnail: "https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?q=80&w=600&auto=format&fit=crop",
    duration: "08:15"
  }
]

const STATE_NEWS = {
  "Delhi": [
    { id: "st-d1", title: "Delhi Assembly winter session to begin from December 15" },
    { id: "st-d2", title: "Mayor announces new clean air initiative ahead of winter" },
    { id: "st-d3", title: "Ruling party faces backlash over water supply disruptions" }
  ],
  "Maharashtra": [
    { id: "st-m1", title: "Political realignment in Maharashtra: Two factions announce merger" },
    { id: "st-m2", title: "Farmers protest enters day 5, CM calls for dialogue" },
    { id: "st-m3", title: "BMC elections: Major parties finalize seat-sharing formula" }
  ],
  "Uttar Pradesh": [
    { id: "st-u1", title: "Mega infrastructure projects launched in Purvanchal" },
    { id: "st-u2", title: "Law and order debate dominates UP assembly proceedings" },
    { id: "st-u3", title: "Opposition rallies against sugarcane pricing policy" }
  ],
  "West Bengal": [
    { id: "st-w1", title: "State government announces new welfare scheme for women" },
    { id: "st-w2", title: "Panchayat poll violence: High Court demands status report" },
    { id: "st-w3", title: "Governor and CM clash over university chancellor appointments" }
  ]
}

const NEWS_GRID = [
  {
    id: "ng-1",
    title: "New Education Policy debate stalls parliamentary proceedings",
    category: "Parliament",
    time: "1 hour ago",
    image: "https://images.unsplash.com/photo-1577563908411-5077b6dc7624?q=80&w=400&auto=format&fit=crop"
  },
  {
    id: "ng-2",
    title: "Diplomatic row: Ambassador recalled for consultations",
    category: "Foreign Affairs",
    time: "3 hours ago",
    image: "https://images.unsplash.com/photo-1529651737248-dad5e287768e?q=80&w=400&auto=format&fit=crop"
  },
  {
    id: "ng-3",
    title: "Central bank governor meets PM amidst inflation concerns",
    category: "Economy",
    time: "5 hours ago",
    image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=400&auto=format&fit=crop"
  },
  {
    id: "ng-4",
    title: "Cybersecurity task force formed to protect critical infrastructure",
    category: "Security",
    time: "6 hours ago",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=400&auto=format&fit=crop"
  },
  {
    id: "ng-5",
    title: "Regional transport agreement signed between 4 neighboring states",
    category: "Infrastructure",
    time: "8 hours ago",
    image: "https://images.unsplash.com/photo-1464082354059-27db6ce50048?q=80&w=400&auto=format&fit=crop"
  },
  {
    id: "ng-6",
    title: "Supreme Court collegium recommends 5 new judges for High Courts",
    category: "Judiciary",
    time: "10 hours ago",
    image: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?q=80&w=400&auto=format&fit=crop"
  }
]

export function PoliticsPage() {
  const [activeState, setActiveState] = useState("Delhi")

  return (
    <div className="bg-slate-50 dark:bg-slate-950 min-h-screen pb-16">
      
      {/* 3. Breaking Political Updates (Marquee Style Banner) */}
      <div className="bg-red-600 text-white py-2.5 overflow-hidden sticky top-[64px] z-20 shadow-md">
        <div className="container mx-auto px-4 flex items-center">
          <Badge className="bg-white text-red-600 hover:bg-gray-100 uppercase tracking-widest font-bold mr-4 rounded-sm whitespace-nowrap shrink-0">
            Breaking
          </Badge>
          <div className="flex-1 overflow-hidden relative">
            <motion.div 
              className="flex whitespace-nowrap gap-10"
              animate={{ x: [0, -1000] }}
              transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
            >
              {BREAKING_NEWS.map((news, i) => (
                <span key={i} className="flex items-center text-sm font-medium">
                  {news}
                  {i < BREAKING_NEWS.length - 1 && <span className="mx-5 opacity-50">•</span>}
                </span>
              ))}
            </motion.div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8 max-w-7xl">
        
        {/* Page Title */}
        <div className="mb-8 flex items-center justify-between border-b-2 border-slate-900 dark:border-white pb-4">
          <h1 className="text-4xl md:text-5xl font-black font-heading tracking-tight text-slate-900 dark:text-white uppercase">
            Politics
          </h1>
          <div className="text-sm font-medium text-muted-foreground flex items-center gap-2">
            <TrendingUp className="h-4 w-4" /> Leading the Conversation
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12">
          
          {/* 1. Politics Hero Story */}
          <div className="lg:col-span-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="group cursor-pointer relative overflow-hidden rounded-xl h-full min-h-[400px] md:min-h-[500px]"
            >
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors z-10"></div>
              <img 
                src={HERO_STORY.image} 
                alt="Hero" 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              width={800} height={400} onError={(e) => { e.currentTarget.src = 'https://images.unsplash.com/photo-1585829365295-ab7cd400c167?q=80&w=800&auto=format&fit=crop'; e.currentTarget.onerror = null; }} />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent z-10"></div>
              
              <div className="absolute bottom-0 left-0 w-full p-6 md:p-8 z-20">
                <Badge className="bg-red-600 hover:bg-red-700 text-white mb-4 border-none rounded-sm uppercase tracking-wider font-bold">
                  {HERO_STORY.category}
                </Badge>
                <h2 className="text-3xl md:text-5xl font-bold font-heading text-white leading-tight mb-4 group-hover:text-slate-200 transition-colors">
                  {HERO_STORY.title}
                </h2>
                <p className="text-slate-200 text-base md:text-lg max-w-3xl mb-6 line-clamp-3 md:line-clamp-none">
                  {HERO_STORY.summary}
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-slate-300 text-sm gap-4">
                    <span className="flex items-center gap-1.5"><Clock className="h-4 w-4" /> {HERO_STORY.time}</span>
                    <span className="flex items-center gap-1.5"><FileText className="h-4 w-4" /> By {HERO_STORY.author}</span>
                  </div>
                  <Button className="bg-white text-slate-900 hover:bg-gray-100 rounded-full font-bold group-hover:translate-x-1 transition-transform">
                    Read Story <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
            </motion.div>
          </div>

          {/* 2. Top Political Headlines (Sidebar) */}
          <div className="lg:col-span-4 flex flex-col space-y-6">
            <div className="flex items-center justify-between border-b border-border pb-2">
              <h3 className="text-xl font-bold font-heading uppercase text-slate-900 dark:text-white">Top Headlines</h3>
            </div>
            
            <div className="flex flex-col gap-6 flex-1">
              {TOP_HEADLINES.map((headline, index) => (
                <motion.div 
                  key={headline.id}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.4 }}
                  className="group flex gap-4 cursor-pointer"
                >
                  <div className="w-1/3 aspect-video rounded-lg overflow-hidden shrink-0">
                    <img src={headline.image} alt={headline.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" width={800} height={400} onError={(e) => { e.currentTarget.src = 'https://images.unsplash.com/photo-1585829365295-ab7cd400c167?q=80&w=800&auto=format&fit=crop'; e.currentTarget.onerror = null; }} />
                  </div>
                  <div className="flex flex-col justify-between flex-1 py-1">
                    <span className="text-xs font-bold text-red-600 uppercase tracking-wider">{headline.category}</span>
                    <h4 className="text-base font-bold leading-snug text-slate-900 dark:text-white group-hover:text-primary transition-colors line-clamp-3">
                      {headline.title}
                    </h4>
                    <span className="text-xs text-muted-foreground flex items-center gap-1 mt-2">
                      <Clock className="h-3 w-3" /> {headline.time}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Newsletter Mini */}
            <div className="bg-slate-100 dark:bg-slate-900 p-5 rounded-xl border border-border mt-auto">
              <h4 className="font-bold font-heading mb-2">Politics Newsletter</h4>
              <p className="text-sm text-muted-foreground mb-4">Get the daily briefing in your inbox.</p>
              <div className="flex gap-2">
                <Input placeholder="Email address" className="bg-white dark:bg-slate-950" />
                <Button className="shrink-0 bg-slate-900 text-white dark:bg-white dark:text-slate-900 hover:opacity-90">Subscribe</Button>
              </div>
            </div>
          </div>
        </div>

        {/* 7. Video News Section */}
        <div className="mb-16">
          <div className="flex items-center justify-between mb-6 border-b border-border pb-2">
            <h3 className="text-2xl font-bold font-heading uppercase text-slate-900 dark:text-white flex items-center gap-2">
              <PlayCircle className="h-6 w-6 text-red-600" /> Political Pulse (Video)
            </h3>
            <Button variant="ghost" className="text-sm hover:text-red-600 font-medium">View All <ChevronRight className="h-4 w-4 ml-1" /></Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {VIDEO_NEWS.map((video, index) => (
              <motion.div 
                key={video.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group cursor-pointer space-y-3"
              >
                <div className="relative aspect-video rounded-xl overflow-hidden bg-slate-900">
                  <img src={video.thumbnail} alt={video.title} className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500" width={800} height={400} onError={(e) => { e.currentTarget.src = 'https://images.unsplash.com/photo-1585829365295-ab7cd400c167?q=80&w=800&auto=format&fit=crop'; e.currentTarget.onerror = null; }} />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="h-12 w-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center group-hover:bg-red-600 transition-colors">
                      <PlayCircle className="h-8 w-8 text-white" />
                    </div>
                  </div>
                  <div className="absolute bottom-2 right-2 bg-black/80 text-white text-xs font-bold px-2 py-1 rounded">
                    {video.duration}
                  </div>
                </div>
                <h4 className="text-lg font-bold font-heading leading-tight group-hover:text-red-600 transition-colors">
                  {video.title}
                </h4>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16">
          
          {/* 8. Politics News Grid */}
          <div className="lg:col-span-8">
            <div className="flex items-center justify-between mb-6 border-b border-border pb-2">
              <h3 className="text-2xl font-bold font-heading uppercase text-slate-900 dark:text-white">
                Latest News
              </h3>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              {NEWS_GRID.map((news, index) => (
                <motion.div 
                  key={news.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="group cursor-pointer flex flex-col gap-3"
                >
                  <div className="relative aspect-[4/3] rounded-xl overflow-hidden">
                    <img src={news.image} alt={news.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" width={800} height={400} onError={(e) => { e.currentTarget.src = 'https://images.unsplash.com/photo-1585829365295-ab7cd400c167?q=80&w=800&auto=format&fit=crop'; e.currentTarget.onerror = null; }} />
                    <Badge className="absolute top-3 left-3 bg-white/90 text-slate-900 hover:bg-white border-none rounded-sm font-bold shadow-sm backdrop-blur-sm">
                      {news.category}
                    </Badge>
                  </div>
                  <h4 className="text-xl font-bold font-heading leading-tight group-hover:text-primary transition-colors">
                    {news.title}
                  </h4>
                  <span className="text-xs text-muted-foreground flex items-center gap-1 font-medium">
                    <Clock className="h-3.5 w-3.5" /> {news.time}
                  </span>
                </motion.div>
              ))}
            </div>

            {/* 9. Load More Button */}
            <div className="mt-10 text-center">
              <Button variant="outline" className="rounded-full px-8 py-6 font-bold text-base border-2 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
                Load More Stories
              </Button>
            </div>
          </div>

          {/* Right Sidebar - Analysis & State-wise */}
          <div className="lg:col-span-4 space-y-10">
            
            {/* 6. Political Analysis Section */}
            <div>
              <div className="mb-6 border-b border-border pb-2">
                <h3 className="text-xl font-bold font-heading uppercase text-slate-900 dark:text-white text-emerald-600 dark:text-emerald-500">
                  Opinion & Analysis
                </h3>
              </div>
              <div className="space-y-6">
                {ANALYSIS_ARTICLES.map((article) => (
                  <div key={article.id} className="group cursor-pointer bg-slate-100 dark:bg-slate-900 p-5 rounded-xl hover:shadow-md transition-shadow">
                    <h4 className="text-lg font-bold font-heading leading-snug mb-4 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                      "{article.title}"
                    </h4>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <img src={article.image} alt={article.author} className="h-full w-full w-8 h-8 rounded-full object-cover border-2 border-white dark:border-slate-800" width={800} height={400} onError={(e) => { e.currentTarget.src = 'https://images.unsplash.com/photo-1585829365295-ab7cd400c167?q=80&w=800&auto=format&fit=crop'; e.currentTarget.onerror = null; }} />
                        <span className="text-sm font-medium">{article.author}</span>
                      </div>
                      <span className="text-xs text-muted-foreground">{article.readTime}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* 5. State-wise Political Coverage */}
            <div>
              <div className="mb-6 border-b border-border pb-2 flex items-center gap-2">
                <MapPin className="h-5 w-5 text-blue-600" />
                <h3 className="text-xl font-bold font-heading uppercase text-slate-900 dark:text-white">
                  State Focus
                </h3>
              </div>
              <Card className="border border-border/50 shadow-sm overflow-hidden bg-white/50 dark:bg-slate-900/50">
                <Tabs defaultValue="Delhi" onValueChange={setActiveState}>
                  <TabsList className="w-full rounded-none bg-slate-100/50 dark:bg-slate-800/50 h-auto p-0 flex flex-wrap justify-start">
                    {Object.keys(STATE_NEWS).map((state) => (
                      <TabsTrigger 
                        key={state} 
                        value={state}
                        className="rounded-none border-b-2 border-transparent data-[state=active]:border-blue-600 data-[state=active]:bg-transparent py-3 px-4 font-bold"
                      >
                        {state}
                      </TabsTrigger>
                    ))}
                  </TabsList>
                  
                  {Object.entries(STATE_NEWS).map(([state, newsList]) => (
                    <TabsContent key={state} value={state} className="p-0 m-0 outline-none">
                      <div className="flex flex-col divide-y divide-border/50">
                        {newsList.map((news) => (
                          <div key={news.id} className="p-4 hover:bg-slate-50 dark:hover:bg-slate-800/50 cursor-pointer group transition-colors">
                            <h4 className="text-sm font-bold leading-snug group-hover:text-blue-600 transition-colors">
                              {news.title}
                            </h4>
                          </div>
                        ))}
                      </div>
                      <div className="p-3 bg-slate-50 dark:bg-slate-800/50 border-t border-border/50 text-center">
                        <Button variant="link" className="text-xs font-bold text-blue-600">
                          More from {state} <ChevronRight className="h-3 w-3 ml-1" />
                        </Button>
                      </div>
                    </TabsContent>
                  ))}
                </Tabs>
              </Card>
            </div>

          </div>
        </div>
      </div>

      {/* 10. Newsletter Subscription (Full width) */}
      <div className="bg-slate-900 dark:bg-slate-950 text-white py-16 border-t border-slate-800">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <Mail className="h-10 w-10 text-red-500 mx-auto mb-4" />
          <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">Subscribe to Political Briefing</h2>
          <p className="text-slate-400 mb-8 max-w-2xl mx-auto text-lg">
            Get the most important political stories of the day, curated by our senior editors, delivered straight to your inbox every evening.
          </p>
          <form className="flex flex-col sm:flex-row max-w-md mx-auto gap-3">
            <Input 
              type="email" 
              placeholder="Your email address" 
              className="bg-slate-800 border-slate-700 text-white placeholder:text-slate-500 h-12" 
              required
            />
            <Button type="button" className="bg-red-600 hover:bg-red-700 text-white font-bold h-12 px-8">
              Subscribe
            </Button>
          </form>
          <p className="text-xs text-slate-500 mt-4">
            By subscribing, you agree to our Terms of Service and Privacy Policy.
          </p>
        </div>
      </div>

    </div>
  )
}
