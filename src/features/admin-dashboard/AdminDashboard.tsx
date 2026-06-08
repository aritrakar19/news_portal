import { motion } from "framer-motion"
import { AdminStatCards } from "./components/AdminStatCards"
import { AdminQuickActions } from "./components/AdminQuickActions"
import { AdminCharts } from "./components/AdminCharts"
import { AdminPendingNewsTable } from "./components/AdminPendingNewsTable"
import { AdminRecentApplicationsTable } from "./components/AdminRecentApplicationsTable"

import { useTranslation } from "react-i18next"

export function AdminDashboard() {
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
          <h1 className="text-3xl font-heading font-extrabold text-slate-900 dark:text-white">{t("admin.dashboard.title", "Admin Command Center")}</h1>
          <p className="text-muted-foreground mt-2 max-w-2xl">
            {t("admin.dashboard.subtitle", "Platform overview. Manage reporters, approve news, and monitor revenue from a single dashboard.")}
          </p>
        </div>
      </motion.div>

      <motion.div variants={itemVariants}>
        <AdminStatCards />
      </motion.div>

      <motion.div variants={itemVariants}>
        <AdminQuickActions />
      </motion.div>

      <motion.div variants={itemVariants}>
        <AdminCharts />
      </motion.div>

      <motion.div variants={itemVariants} className="grid grid-cols-1 xl:grid-cols-2 gap-8">
        <AdminPendingNewsTable />
        <AdminRecentApplicationsTable />
      </motion.div>
    </motion.div>
  )
}
