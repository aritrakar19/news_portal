import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, PlayCircle } from "lucide-react"

export function FeaturedStory() {
  return (
    <section className="py-12 md:py-20 bg-slate-950 relative overflow-hidden">
      {/* Background with parallax-like styling */}
      <div 
        className="absolute inset-0 opacity-40 bg-[url('https://images.unsplash.com/photo-1551218808-94e220e084d2?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center bg-fixed"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/80 to-transparent" />
      
      <div className="container relative z-10">
        <div className="max-w-3xl">
          <Badge className="bg-accent hover:bg-accent text-slate-900 mb-6 font-bold tracking-wider rounded-sm px-3 py-1">
            EXCLUSIVE INVESTIGATION
          </Badge>
          <h2 className="text-4xl md:text-6xl font-heading font-extrabold text-white leading-tight mb-6 drop-shadow-lg">
            Uncovering the Digital Underground: The Syndicates Behind Next-Gen Scams
          </h2>
          <p className="text-xl text-slate-300 mb-8 max-w-2xl leading-relaxed">
            A six-month undercover operation by our investigative team reveals the sophisticated networks targeting vulnerable citizens, and how authorities are fighting back.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-white font-bold h-12 px-8 rounded-full">
              Read Full Story
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10 glass-dark font-medium h-12 px-8 rounded-full">
              <PlayCircle className="mr-2 h-5 w-5 text-accent" />
              Watch Documentary
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
