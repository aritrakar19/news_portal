import { ShieldCheck, PenTool, Banknote, Users } from "lucide-react"
import { useTranslation } from "react-i18next"

export function BenefitsSection() {
  const { t } = useTranslation()

  const BENEFITS = [
    {
      icon: ShieldCheck,
      title: t("registration.benefits.pressIdTitle", "Official Digital Press ID"),
      description: t("registration.benefits.pressIdDesc", "Get instantly recognized anywhere. Your Press ID is secured and globally verifiable."),
      color: "bg-blue-500/10 text-blue-500"
    },
    {
      icon: PenTool,
      title: t("registration.benefits.publishingTitle", "Publishing Rights"),
      description: t("registration.benefits.publishingDesc", "Submit news directly to our editorial team and see your stories published nationally."),
      color: "bg-red-500/10 text-red-500"
    },
    {
      icon: Banknote,
      title: t("registration.benefits.earningsTitle", "Direct Earnings"),
      description: t("registration.benefits.earningsDesc", "Monetize your journalism. Earn competitive payouts based on story engagement."),
      color: "bg-green-500/10 text-green-500"
    },
    {
      icon: Users,
      title: t("registration.benefits.referTitle", "Refer & Earn Program"),
      description: t("registration.benefits.referDesc", "Grow the network. Invite trusted reporters in your area and earn referral bonuses."),
      color: "bg-purple-500/10 text-purple-500"
    }
  ]
  return (
    <section className="py-20 bg-white dark:bg-card">
      <div className="container max-w-5xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-heading font-extrabold mb-6">
            {t("registration.benefits.title", "Why Join PUBLIC NEWS 1?")}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t("registration.benefits.subtitle", "We provide our reporters with the best tools, recognition, and financial rewards in the industry.")}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {BENEFITS.map((benefit, i) => (
            <div 
              key={i} 
              className="flex items-start gap-6 p-6 md:p-8 rounded-2xl border border-border bg-slate-50 dark:bg-slate-900/50 hover:-translate-y-1 hover:shadow-soft transition-all duration-300"
            >
              <div className={`w-14 h-14 shrink-0 rounded-xl flex items-center justify-center ${benefit.color}`}>
                <benefit.icon className="w-7 h-7" />
              </div>
              <div>
                <h3 className="text-xl font-heading font-bold mb-2 text-slate-900 dark:text-white">
                  {benefit.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
