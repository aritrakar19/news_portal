import { useState } from "react"
import { motion, type Variants } from "framer-motion"
import { mockReporters, type Reporter } from "./data/mockReporters"
import { ReportersStatsCards } from "./components/ReportersStatsCards"
import { ReportersFilters } from "./components/ReportersFilters"
import { ReportersTable } from "./components/ReportersTable"
import { ReporterDetailsSheet } from "./components/ReporterDetailsSheet"
import { RecentApplications } from "./components/RecentApplications"
import { UserPlus, Settings } from "lucide-react"
import { Button } from "@/components/ui/button"

export function ReportersManagementPage() {
  const [selectedReporter, setSelectedReporter] = useState<Reporter | null>(null)
  const [isSheetOpen, setIsSheetOpen] = useState(false)

  const handleViewProfile = (reporter: Reporter) => {
    setSelectedReporter(reporter)
    setIsSheetOpen(true)
  }

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
          <h1 className="text-3xl font-heading font-extrabold text-slate-900 dark:text-white">Reporters Management</h1>
          <p className="text-muted-foreground mt-2 max-w-2xl">
            Manage your network of reporters, review applications, and monitor activity.
          </p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline">
            <Settings className="mr-2 h-4 w-4" /> Config
          </Button>
          <Button className="bg-blue-600 hover:bg-blue-700 text-white">
            <UserPlus className="mr-2 h-4 w-4" /> Invite Reporter
          </Button>
        </div>
      </motion.div>

      <motion.div variants={itemVariants}>
        <ReportersStatsCards />
      </motion.div>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
        <motion.div variants={itemVariants} className="xl:col-span-2 space-y-6">
          <div className="bg-slate-50/50 dark:bg-slate-900/50 p-6 rounded-xl border">
            <h2 className="text-xl font-semibold mb-4">All Reporters Directory</h2>
            <ReportersFilters />
            <ReportersTable reporters={mockReporters} onViewProfile={handleViewProfile} />
          </div>
        </motion.div>

        <motion.div variants={itemVariants} className="xl:col-span-1">
          <RecentApplications reporters={mockReporters} onViewProfile={handleViewProfile} />
        </motion.div>
      </div>

      <ReporterDetailsSheet 
        reporter={selectedReporter} 
        open={isSheetOpen} 
        onOpenChange={setIsSheetOpen} 
      />
    </motion.div>
  )
}
