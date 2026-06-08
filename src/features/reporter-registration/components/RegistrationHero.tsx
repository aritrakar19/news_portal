import { Badge } from "@/components/ui/badge"
import { ShieldCheck, CheckCircle2 } from "lucide-react"
import { useTranslation } from "react-i18next"

export function RegistrationHero() {
  const { t } = useTranslation()

  return (
    <section className="relative pt-20 pb-16 md:pt-32 md:pb-24 overflow-hidden bg-slate-950">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1585829365295-ab7cd400c167?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center opacity-20" />
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950/80 via-slate-950/95 to-slate-950" />
      
      {/* Decorative blur */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/20 rounded-full blur-[120px] pointer-events-none" />

      <div className="container relative z-10 text-center max-w-4xl mx-auto px-4">
        <Badge className="bg-primary/20 text-primary border-primary/30 hover:bg-primary/30 mb-6 py-1.5 px-4 rounded-full text-sm font-semibold tracking-wider uppercase">
          <ShieldCheck className="w-4 h-4 mr-2 inline-block" />
          {t("registration.officialNetwork", "Official Network Application")}
        </Badge>
        
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-extrabold text-white mb-6 leading-tight tracking-tight drop-shadow-xl">
          {t("registration.becomeCertified", "Become a Certified")} <br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-200 to-slate-400">{t("registration.nationalReporter", "National Reporter")}</span>
        </h1>
        
        <p className="text-lg md:text-xl text-slate-300 mb-10 max-w-2xl mx-auto leading-relaxed">
          {t("registration.heroDesc", "Join the nation's fastest-growing premium digital news network. Publish breaking news, earn for your coverage, and get an officially recognized Digital Press ID.")}
        </p>

        <div className="flex flex-wrap justify-center gap-4 md:gap-8 text-sm md:text-base text-slate-200 font-medium">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-5 h-5 text-accent" />
            <span>{t("registration.pressId", "Digital Press ID")}</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-5 h-5 text-accent" />
            <span>{t("registration.publishingRights", "Publishing Rights")}</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-5 h-5 text-accent" />
            <span>{t("registration.directEarnings", "Direct Earnings")}</span>
          </div>
        </div>
      </div>
    </section>
  )
}
