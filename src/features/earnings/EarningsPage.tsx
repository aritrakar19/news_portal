import { motion } from "framer-motion"
import { EarningsStatCards } from "./components/EarningsStatCards"
import { RevenueSourceCards } from "./components/RevenueSourceCards"
import { EarningsCharts } from "./components/EarningsCharts"
import { EarningsHistoryTable } from "./components/EarningsHistoryTable"
import { RevenueSourcesTable } from "./components/RevenueSourcesTable"

import { useTranslation } from "react-i18next"

export function EarningsPage() {
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
          <h1 className="text-3xl font-heading font-extrabold text-slate-900 dark:text-white">{t("earnings.title", "Earnings & Payouts")}</h1>
          <p className="text-muted-foreground mt-2 max-w-2xl">
            {t("earnings.subtitle", "Track your revenue from articles, videos, and referrals. All payouts are processed securely on the 5th of every month.")}
          </p>
        </div>
      </motion.div>

      <motion.div variants={itemVariants}>
        <EarningsStatCards />
      </motion.div>

      <motion.div variants={itemVariants}>
        <RevenueSourceCards />
      </motion.div>

      <motion.div variants={itemVariants}>
        <EarningsCharts />
      </motion.div>

      <motion.div variants={itemVariants} className="grid grid-cols-1 xl:grid-cols-2 gap-8">
        <EarningsHistoryTable />
        <RevenueSourcesTable />
      </motion.div>
    </motion.div>
  )
}
