import { motion, type Variants } from "framer-motion"
import { FinanceStatsCards } from "./components/FinanceStatsCards"
import { RevenueAnalytics } from "./components/RevenueAnalytics"
import { ReporterEarningsTable } from "./components/ReporterEarningsTable"
import { WithdrawalRequestsTable } from "./components/WithdrawalRequestsTable"
import { TopEarnersLeaderboard } from "./components/TopEarnersLeaderboard"
import { FinanceActivityFeed } from "./components/FinanceActivityFeed"
import { DownloadCloud, Settings, FileText } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useTranslation } from "react-i18next"

export function AdminFinancePage() {
  const { t } = useTranslation()

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  }

  const itemVariants: Variants = {
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
          <h1 className="text-3xl font-heading font-extrabold text-slate-900 dark:text-white">{t("admin.finance.title", "Finance & Earnings")}</h1>
          <p className="text-muted-foreground mt-2 max-w-2xl">
            {t("admin.finance.subtitle", "Executive control center for platform revenue, payouts, and financial analytics.")}
          </p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline">
            <Settings className="mr-2 h-4 w-4" /> {t("admin.finance.rules", "Rules")}
          </Button>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                <DownloadCloud className="mr-2 h-4 w-4" /> {t("admin.finance.exportReports", "Export Reports")}
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-[200px]">
              <DropdownMenuLabel>{t("admin.finance.generateReport", "Generate Report")}</DropdownMenuLabel>
              <DropdownMenuItem><FileText className="mr-2 h-4 w-4" /> {t("admin.finance.dailySummary", "Daily Summary")}</DropdownMenuItem>
              <DropdownMenuItem><FileText className="mr-2 h-4 w-4" /> {t("admin.finance.weeklyBreakdown", "Weekly Breakdown")}</DropdownMenuItem>
              <DropdownMenuItem><FileText className="mr-2 h-4 w-4" /> {t("admin.finance.monthlyStatement", "Monthly Statement")}</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuLabel>{t("admin.finance.format", "Format")}</DropdownMenuLabel>
              <DropdownMenuItem>{t("admin.finance.exportPdf", "Export as PDF")}</DropdownMenuItem>
              <DropdownMenuItem>{t("admin.finance.exportExcel", "Export as Excel (XLSX)")}</DropdownMenuItem>
              <DropdownMenuItem>{t("admin.finance.exportCsv", "Export as CSV")}</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </motion.div>

      <motion.div variants={itemVariants}>
        <FinanceStatsCards />
      </motion.div>

      <Tabs defaultValue="overview" className="space-y-8">
        <motion.div variants={itemVariants}>
          <TabsList className="bg-muted/50 p-1">
            <TabsTrigger value="overview">{t("admin.finance.overview", "Overview")}</TabsTrigger>
            <TabsTrigger value="earnings">{t("admin.finance.reporterEarnings", "Reporter Earnings")}</TabsTrigger>
            <TabsTrigger value="withdrawals">{t("admin.finance.withdrawals", "Withdrawals")}</TabsTrigger>
          </TabsList>
        </motion.div>

        <TabsContent value="overview" className="space-y-8 mt-0 border-0 p-0">
          <motion.div variants={itemVariants}>
            <RevenueAnalytics />
          </motion.div>
          
          <motion.div variants={itemVariants} className="grid grid-cols-1 xl:grid-cols-3 gap-6">
            <div className="xl:col-span-2">
              <TopEarnersLeaderboard />
            </div>
            <div className="xl:col-span-1">
              <FinanceActivityFeed />
            </div>
          </motion.div>
        </TabsContent>

        <TabsContent value="earnings" className="mt-0 border-0 p-0">
          <motion.div variants={itemVariants}>
            <ReporterEarningsTable />
          </motion.div>
        </TabsContent>

        <TabsContent value="withdrawals" className="mt-0 border-0 p-0">
          <motion.div variants={itemVariants}>
            <WithdrawalRequestsTable />
          </motion.div>
        </TabsContent>
      </Tabs>

    </motion.div>
  )
}
