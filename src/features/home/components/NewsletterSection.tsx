import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Mail } from "lucide-react"

export function NewsletterSection() {
  return (
    <section className="py-20 bg-slate-100 dark:bg-slate-900/50">
      <div className="container max-w-4xl text-center">
        <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
          <Mail className="h-8 w-8 text-primary" />
        </div>
        
        <h2 className="text-3xl md:text-5xl font-heading font-extrabold mb-4 text-slate-900 dark:text-white">
          Get the News Before It Breaks
        </h2>
        
        <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
          Subscribe to our daily briefing. We deliver the most important national and local stories directly to your inbox, ad-free.
        </p>
        
        <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
          <Input 
            type="email" 
            placeholder="Enter your email address" 
            className="h-12 bg-white dark:bg-slate-950 border-slate-300 dark:border-slate-800"
            required
          />
          <Button type="submit" size="lg" className="h-12 px-8 font-bold">
            Subscribe
          </Button>
        </form>
        
        <p className="text-xs text-muted-foreground mt-4">
          By subscribing, you agree to our Terms of Service and Privacy Policy.
        </p>
      </div>
    </section>
  )
}
