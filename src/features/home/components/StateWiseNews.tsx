import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { PremiumCard, PremiumCardContent } from "@/components/shared/PremiumCard"
import { MapPin } from "lucide-react"

const STATES = ["Maharashtra", "Delhi", "Uttar Pradesh", "Karnataka", "West Bengal"]

const STATE_STORIES = [
  {
    id: 1,
    title: "New Metro Line Inaugurated in Mumbai, Promising Reduced Commute Times",
    time: "3 hours ago",
    image: "https://images.unsplash.com/photo-1570168007204-dfb528c6958f?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: 2,
    title: "State Government Announces Relief Package for Farmers After Untimely Rains",
    time: "5 hours ago",
    image: "https://images.unsplash.com/photo-1592982537447-6f2334208f64?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: 3,
    title: "Local Startups Receive Major Funding Boost from State Tech Initiative",
    time: "1 day ago",
    image: "https://images.unsplash.com/photo-1556761175-5973dc0f32b7?q=80&w=1000&auto=format&fit=crop"
  }
]

export function StateWiseNews() {
  return (
    <section className="py-12 bg-slate-50 dark:bg-slate-900 border-y border-border">
      <div className="container">
        <div className="flex items-center gap-3 mb-8">
          <MapPin className="h-8 w-8 text-primary" />
          <h2 className="text-3xl font-heading font-extrabold">State Wise News</h2>
        </div>
        
        <Tabs defaultValue={STATES[0]} className="w-full">
          <div className="overflow-x-auto pb-2 mb-6 scrollbar-hide">
            <TabsList className="w-auto inline-flex h-12 bg-slate-200/50 dark:bg-slate-800 p-1">
              {STATES.map(state => (
                <TabsTrigger 
                  key={state} 
                  value={state}
                  className="px-6 py-2.5 rounded-md font-medium data-[state=active]:bg-white dark:data-[state=active]:bg-slate-950 data-[state=active]:text-primary data-[state=active]:shadow-sm transition-all"
                >
                  {state}
                </TabsTrigger>
              ))}
            </TabsList>
          </div>
          
          {STATES.map(state => (
            <TabsContent key={state} value={state} className="mt-0 animate-fade-in outline-none">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {STATE_STORIES.map(story => (
                  <PremiumCard key={story.id} hoverEffect className="group cursor-pointer">
                    <div className="flex flex-row md:flex-col h-full">
                      <div className="w-1/3 md:w-full md:h-48 relative overflow-hidden shrink-0">
                        <img 
                          src={story.image} 
                          alt={story.title}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        width={800} height={400} onError={(e) => { e.currentTarget.src = 'https://images.unsplash.com/photo-1585829365295-ab7cd400c167?q=80&w=800&auto=format&fit=crop'; e.currentTarget.onerror = null; }} />
                      </div>
                      <PremiumCardContent className="flex-1 p-5">
                        <span className="text-xs font-bold text-accent tracking-wider uppercase mb-2 block">
                          {state} Focus
                        </span>
                        <h3 className="font-heading font-bold text-lg leading-tight mb-2 group-hover:text-primary transition-colors">
                          {story.title}
                        </h3>
                        <p className="text-xs text-muted-foreground mt-auto">
                          {story.time}
                        </p>
                      </PremiumCardContent>
                    </div>
                  </PremiumCard>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  )
}
