import { PremiumCard, PremiumCardContent } from "@/components/shared/PremiumCard"
import { Badge } from "@/components/ui/badge"
import { ArrowRight } from "lucide-react"

export interface NewsStory {
  id: number | string
  title: string
  summary: string
  category: string
  time: string
  image: string
}

interface NewsGridProps {
  title: string
  stories: NewsStory[]
  viewAllLink?: string
}

export function NewsGrid({ title, stories, viewAllLink = "#" }: NewsGridProps) {
  return (
    <section className="py-12">
      <div className="container">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-heading font-extrabold flex items-center gap-3">
            <span className="w-2 h-8 bg-primary rounded-full inline-block"></span>
            {title}
          </h2>
          <a href={viewAllLink} className="text-primary font-medium hover:underline flex items-center text-sm md:text-base">
            View All <ArrowRight className="ml-1 h-4 w-4" />
          </a>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
          {stories.map((story) => (
            <PremiumCard key={story.id} hoverEffect className="group cursor-pointer flex flex-col">
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={story.image} 
                  alt={story.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                width={800} height={400} onError={(e) => { e.currentTarget.src = 'https://images.unsplash.com/photo-1585829365295-ab7cd400c167?q=80&w=800&auto=format&fit=crop'; e.currentTarget.onerror = null; }} />
                <Badge className="absolute top-3 left-3 bg-slate-900/80 backdrop-blur border-none hover:bg-slate-900">
                  {story.category}
                </Badge>
              </div>
              <PremiumCardContent className="flex-1 flex flex-col p-5">
                <div className="text-xs text-muted-foreground font-medium mb-2">
                  {story.time}
                </div>
                <h3 className="font-heading font-bold text-lg leading-tight mb-2 group-hover:text-primary transition-colors line-clamp-2">
                  {story.title}
                </h3>
                <p className="text-sm text-muted-foreground line-clamp-3 mb-4 flex-1">
                  {story.summary}
                </p>
                <div className="mt-auto flex items-center text-sm font-semibold text-primary">
                  Read More <ArrowRight className="ml-1 h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                </div>
              </PremiumCardContent>
            </PremiumCard>
          ))}
        </div>
      </div>
    </section>
  )
}
