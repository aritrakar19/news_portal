import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Target, Globe, Eye, TrendingUp, CheckCircle, ArrowRight, PlayCircle, BarChart3 } from "lucide-react"

export function AdvertisementBanner() {
  const benefits = [
    { icon: <Eye className="h-5 w-5 text-cyan-400" />, title: "High Visibility", desc: "Prime homepage placement" },
    { icon: <Globe className="h-5 w-5 text-blue-400" />, title: "National Reach", desc: "Engage users nationwide" },
    { icon: <Target className="h-5 w-5 text-purple-400" />, title: "Targeted Audience", desc: "Reach specific demographics" },
    { icon: <TrendingUp className="h-5 w-5 text-emerald-400" />, title: "Brand Awareness", desc: "Build lasting recognition" },
  ]

  const stats = [
    { value: "15M+", label: "Monthly Impressions" },
    { value: "500+", label: "Active Advertisers" },
    { value: "4.8%", label: "Avg. CTR" },
    { value: "Nationwide", label: "Audience Reach" },
  ]

  return (
    <section className="py-12">
      <div className="container">
        <div className="relative overflow-hidden rounded-3xl bg-slate-950 border border-slate-800 shadow-2xl">
          {/* Glassmorphic Background Elements */}
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
            <div className="absolute top-[-20%] left-[-10%] w-[500px] h-[500px] bg-cyan-600/20 blur-[120px] rounded-full"></div>
            <div className="absolute bottom-[-20%] right-[-10%] w-[500px] h-[500px] bg-blue-600/20 blur-[120px] rounded-full"></div>
          </div>

          <div className="relative z-10 p-8 md:p-12 lg:p-16">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              
              {/* Left Column: Intro & Benefits */}
              <div className="lg:col-span-5 flex flex-col gap-8">
                <div>
                  <Badge variant="outline" className="text-cyan-400 border-cyan-500/30 bg-cyan-500/10 mb-4 font-bold tracking-widest uppercase text-xs px-3 py-1">
                    Premium Advertising
                  </Badge>
                  <h2 className="text-4xl md:text-5xl font-black font-heading text-white leading-tight mb-4">
                    Elevate Your Brand with Us
                  </h2>
                  <p className="text-slate-400 text-lg">
                    Partner with the nation's fastest-growing digital news platform. Deliver your message directly to millions of highly engaged, premium readers.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {benefits.map((b, i) => (
                    <div key={i} className="flex gap-4 p-4 rounded-xl bg-slate-900/50 border border-slate-800/50 backdrop-blur-sm hover:bg-slate-800/50 transition-colors">
                      <div className="shrink-0 mt-1">{b.icon}</div>
                      <div>
                        <h4 className="text-white font-bold text-sm mb-1">{b.title}</h4>
                        <p className="text-slate-500 text-xs">{b.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="flex flex-col sm:flex-row gap-4 mt-2">
                  <Button className="bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold px-8 h-12 text-base rounded-full transition-all">
                    Advertise With Us <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                  <Button variant="outline" className="border-slate-700 text-white hover:bg-slate-800 hover:text-white px-8 h-12 text-base rounded-full font-bold transition-all bg-transparent">
                    Request Media Kit
                  </Button>
                </div>
              </div>

              {/* Right Column: Visual Showcase */}
              <div className="lg:col-span-7">
                <div className="relative rounded-2xl bg-slate-900/40 border border-slate-800/60 backdrop-blur-md p-6 overflow-hidden">
                  
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-white font-bold text-lg flex items-center gap-2">
                      <BarChart3 className="h-5 w-5 text-cyan-500" /> Ad Placements
                    </h3>
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-500">Preview</span>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* Mockup 1: Premium Banner */}
                    <div className="rounded-xl overflow-hidden border border-slate-800 group relative">
                      <img 
                        src="https://images.unsplash.com/photo-1557838923-2985c318be48?q=80&w=600&auto=format&fit=crop" 
                        alt="Banner Campaign" 
                        width={600}
                        height={300}
                        className="w-full h-32 object-cover opacity-80 group-hover:opacity-100 transition-all duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 to-transparent flex flex-col justify-end p-4">
                        <Badge className="w-fit mb-2 bg-blue-500/20 text-blue-300 border-none">Banner Ad</Badge>
                        <h4 className="text-white font-bold text-sm">High-Impact Display</h4>
                      </div>
                    </div>

                    {/* Mockup 2: Sponsored Story */}
                    <div className="rounded-xl overflow-hidden border border-slate-800 group relative">
                      <img 
                        src="https://images.unsplash.com/photo-1504711434969-e33886168f5c?q=80&w=600&auto=format&fit=crop" 
                        alt="Sponsored Story" 
                        width={600}
                        height={300}
                        className="w-full h-32 object-cover opacity-80 group-hover:opacity-100 transition-all duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 to-transparent flex flex-col justify-end p-4">
                        <Badge className="w-fit mb-2 bg-purple-500/20 text-purple-300 border-none">Native Content</Badge>
                        <h4 className="text-white font-bold text-sm">Sponsored Story</h4>
                      </div>
                    </div>

                    {/* Mockup 3: Video Ad */}
                    <div className="md:col-span-2 rounded-xl overflow-hidden border border-slate-800 group relative h-40">
                      <img 
                        src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop" 
                        alt="Video Advertisement" 
                        width={800}
                        height={400}
                        className="w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-all duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none">
                        <div className="h-12 w-12 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center">
                          <PlayCircle className="h-6 w-6 text-white ml-0.5" />
                        </div>
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 to-transparent flex flex-col justify-end p-4">
                        <Badge className="w-fit mb-2 bg-emerald-500/20 text-emerald-300 border-none z-20">Pre-Roll Video</Badge>
                        <h4 className="text-white font-bold text-sm z-20">Premium Video Placements</h4>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>

            {/* Bottom Stats & Trust Bar */}
            <div className="mt-12 pt-8 border-t border-slate-800/50 flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 w-full md:w-auto flex-1">
                {stats.map((s, i) => (
                  <div key={i} className="text-center md:text-left">
                    <div className="text-2xl md:text-3xl font-black text-white font-heading">{s.value}</div>
                    <div className="text-xs text-slate-500 font-bold uppercase tracking-wider mt-1">{s.label}</div>
                  </div>
                ))}
              </div>

              <div className="hidden lg:flex items-center gap-6 border-l border-slate-800/50 pl-8">
                <div className="text-xs text-slate-500 font-bold uppercase tracking-wider text-right">
                  Trusted by<br />Top Brands
                </div>
                <div className="flex gap-3">
                  <div className="w-8 h-8 rounded-full bg-slate-800/50 flex items-center justify-center"><CheckCircle className="h-4 w-4 text-cyan-500" /></div>
                  <div className="w-8 h-8 rounded-full bg-slate-800/50 flex items-center justify-center"><CheckCircle className="h-4 w-4 text-purple-500" /></div>
                  <div className="w-8 h-8 rounded-full bg-slate-800/50 flex items-center justify-center"><CheckCircle className="h-4 w-4 text-emerald-500" /></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
