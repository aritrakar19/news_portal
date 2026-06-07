import { ArrowRight } from "lucide-react"

const CATEGORIES = [
  { name: "Politics", color: "bg-blue-600", image: "https://images.unsplash.com/photo-1540910419892-4a36d2c3266c?q=80&w=800&auto=format&fit=crop" },
  { name: "Business", color: "bg-emerald-600", image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=800&auto=format&fit=crop" },
  { name: "Technology", color: "bg-purple-600", image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=800&auto=format&fit=crop" },
  { name: "Sports", color: "bg-orange-600", image: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?q=80&w=800&auto=format&fit=crop" },
  { name: "Entertainment", color: "bg-pink-600", image: "https://images.unsplash.com/photo-1603190287605-e6ade32fa852?q=80&w=800&auto=format&fit=crop" },
  { name: "Health", color: "bg-teal-600", image: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?q=80&w=800&auto=format&fit=crop" },
]

export function CategorySection() {
  return (
    <section className="py-12">
      <div className="container">
        <h2 className="text-3xl font-heading font-extrabold flex items-center gap-3 mb-8">
          <span className="w-2 h-8 bg-primary rounded-full inline-block"></span>
          Explore by Category
        </h2>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {CATEGORIES.map((cat) => (
            <div key={cat.name} className="group cursor-pointer relative overflow-hidden rounded-xl aspect-square">
              <img 
                src={cat.image} 
                alt={cat.name}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              width={800} height={400} onError={(e) => { e.currentTarget.src = 'https://images.unsplash.com/photo-1585829365295-ab7cd400c167?q=80&w=800&auto=format&fit=crop'; e.currentTarget.onerror = null; }} />
              <div className={`absolute inset-0 opacity-80 mix-blend-multiply ${cat.color} transition-opacity group-hover:opacity-60`} />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent" />
              
              <div className="absolute inset-0 p-4 flex flex-col justify-end items-center text-center">
                <h3 className="text-white font-heading font-bold text-lg md:text-xl drop-shadow-md mb-2 group-hover:-translate-y-1 transition-transform">
                  {cat.name}
                </h3>
                <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all transform translate-y-2 group-hover:translate-y-0">
                  <ArrowRight className="h-4 w-4 text-white" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
