import { motion } from "framer-motion"
import { ReferralHeroCard } from "./components/ReferralHeroCard"
import { ReferralPerformanceCards } from "./components/ReferralPerformanceCards"
import { ReferralGrowthChart } from "./components/ReferralGrowthChart"
import { ReferralHistoryTable } from "./components/ReferralHistoryTable"
import { BonusProgramSection } from "./components/BonusProgramSection"

import { useTranslation } from "react-i18next"

export function ReferralsPage() {
  const { t } = useTranslation()

  const containerVariants: any = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  }

  const itemVariants: any = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, type: "spring", stiffness: 100 }
    }
  }

  return (
    <motion.div 
      className="pb-12 space-y-8"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.div variants={itemVariants} className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <h1 className="text-3xl font-heading font-extrabold text-slate-900 dark:text-white">{t("referrals.title", "Referrals & Network")}</h1>
          <p className="text-muted-foreground mt-2 max-w-2xl">
            {t("referrals.subtitle", "Grow your network and earn passive income for every reporter you invite to PUBLIC NEWS 1.")}
          </p>
        </div>
      </motion.div>

      <motion.div variants={itemVariants}>
        <ReferralHeroCard />
      </motion.div>

      <motion.div variants={itemVariants}>
        <ReferralPerformanceCards />
      </motion.div>

      <motion.div variants={itemVariants} className="grid grid-cols-1 xl:grid-cols-2 gap-8">
        <ReferralGrowthChart />
        <BonusProgramSection />
      </motion.div>

      <motion.div variants={itemVariants}>
        <ReferralHistoryTable />
      </motion.div>
    </motion.div>
  )
}
