import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function CtaSection() {
  const scrollToForm = () => {
    document.getElementById("apply")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section className="py-24 relative overflow-hidden bg-primary">
      {/* Decorative patterns */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/10 rounded-full blur-[100px] translate-x-1/2 -translate-y-1/2 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-black/10 rounded-full blur-[100px] -translate-x-1/2 translate-y-1/2 pointer-events-none" />

      <div className="container relative z-10 text-center max-w-3xl mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-heading font-extrabold text-white mb-6 leading-tight">
          Ready to Start Your Journey?
        </h2>
        <p className="text-lg md:text-xl text-primary-foreground/90 mb-10">
          Join thousands of other reporters who are changing the way news is delivered to the public. 
          Your press ID is just a few steps away.
        </p>
        <Button 
          size="lg" 
          onClick={scrollToForm}
          className="bg-white text-primary hover:bg-slate-100 font-bold text-lg h-14 px-8 rounded-full shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
        >
          Apply Now <ArrowRight className="ml-2 h-5 w-5" />
        </Button>
      </div>
    </section>
  )
}
