import { motion } from "framer-motion"
import type { Variants } from "framer-motion"
import { DashboardStatCards } from "./components/DashboardStatCards"
import { PerformanceCharts } from "./components/PerformanceCharts"
import { QuickActions } from "./components/QuickActions"
import { RecentNewsTable } from "./components/RecentNewsTable"
import { RecentEarningsTable } from "./components/RecentEarningsTable"
import { ReferralPerformanceCard } from "./components/ReferralPerformanceCard"
import { ProfileCompletionCard } from "./components/ProfileCompletionCard"
import { WalletSummaryCard } from "./components/WalletSummaryCard"

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
}

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
}

export function ReporterDashboard() {
  return (
    <motion.div 
      className="space-y-6 pb-12"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.div variants={itemVariants} className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-2">
        <div>
          <h1 className="text-3xl font-heading font-extrabold text-slate-900 dark:text-white">Overview</h1>
          <p className="text-muted-foreground mt-1">Welcome back, Aritra. Here's what's happening with your stories today.</p>
        </div>
      </motion.div>

      <motion.div variants={itemVariants}>
        <DashboardStatCards />
      </motion.div>

      <motion.div variants={itemVariants}>
        <QuickActions />
      </motion.div>

      <motion.div variants={itemVariants}>
        <PerformanceCharts />
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <motion.div variants={itemVariants} className="lg:col-span-2">
          <RecentNewsTable />
        </motion.div>
        <motion.div variants={itemVariants} className="lg:col-span-1 space-y-6">
          <ProfileCompletionCard />
          <ReferralPerformanceCard />
        </motion.div>
      </div>

      <motion.div variants={itemVariants} className="space-y-6">
        <WalletSummaryCard />
        <RecentEarningsTable />
      </motion.div>
    </motion.div>
  )
}
