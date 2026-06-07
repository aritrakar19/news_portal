import { Button } from "@/components/ui/button"
import { ShieldCheck, Video, ArrowRight } from "lucide-react"
import { Link } from "react-router-dom"

export function CallToActionGroup() {
  return (
    <section className="py-16 relative">
      <div className="container relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Become a Reporter CTA */}
          <div className="rounded-2xl overflow-hidden relative group">
            <div className="absolute inset-0 bg-slate-900" />
            <img 
              src="https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?q=80&w=1000&auto=format&fit=crop" 
              alt="Reporter"
              className="absolute inset-0 w-full h-full object-cover opacity-40 mix-blend-overlay group-hover:scale-105 transition-transform duration-700"
            width={800} height={400} onError={(e) => { e.currentTarget.src = 'https://images.unsplash.com/photo-1585829365295-ab7cd400c167?q=80&w=800&auto=format&fit=crop'; e.currentTarget.onerror = null; }} />
            <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/80 to-transparent" />
            
            <div className="relative p-8 md:p-12 h-full flex flex-col justify-center">
              <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center mb-6">
                <Video className="h-6 w-6 text-slate-900" />
              </div>
              <h3 className="text-3xl font-heading font-extrabold text-white mb-4">
                Join Our Network
              </h3>
              <p className="text-slate-300 mb-8 max-w-sm">
                Empower your local community. Report the truth, build your audience, and earn directly from your impact.
              </p>
              <div>
                <Button asChild className="bg-white text-slate-900 hover:bg-slate-100 font-bold px-6">
                  <Link to="/reporter/apply">
                    Become a Reporter
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>

          {/* Digital Press ID CTA */}
          <div className="rounded-2xl overflow-hidden relative group border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 shadow-soft">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
            
            <div className="relative p-8 md:p-12 h-full flex flex-col justify-center">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                <ShieldCheck className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-3xl font-heading font-extrabold text-slate-900 dark:text-white mb-4">
                Verify Digital Press ID
              </h3>
              <p className="text-muted-foreground mb-8 max-w-sm">
                Authenticity matters. Verify any PUBLIC NEWS 1 reporter instantly using our secure blockchain-backed ID system.
              </p>
              <div>
                <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white font-bold px-6">
                  Verify ID Now
                  <ShieldCheck className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
