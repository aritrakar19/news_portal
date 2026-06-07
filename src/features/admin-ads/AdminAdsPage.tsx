import { useState } from "react"
import { motion, type Variants } from "framer-motion"
import { AdStatsCards } from "./components/AdStatsCards"
import { CampaignAnalytics } from "./components/CampaignAnalytics"
import { CampaignsTable } from "./components/CampaignsTable"
import { CreateAdModal } from "./components/CreateAdModal"
import { TopAdvertisers } from "./components/TopAdvertisers"
import { AdActivityFeed } from "./components/AdActivityFeed"
import { PlusCircle, DownloadCloud, Settings } from "lucide-react"
import { Button } from "@/components/ui/button"

export function AdminAdsPage() {
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false)

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
          <h1 className="text-3xl font-heading font-extrabold text-slate-900 dark:text-white">Advertisement Management</h1>
          <p className="text-muted-foreground mt-2 max-w-2xl">
            Monitor ad performance, manage campaigns, and optimize platform revenue.
          </p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline" className="hidden sm:flex">
            <Settings className="mr-2 h-4 w-4" /> Placements
          </Button>
          <Button variant="outline" className="hidden sm:flex">
            <DownloadCloud className="mr-2 h-4 w-4" /> Export Report
          </Button>
          <Button className="bg-emerald-600 hover:bg-emerald-700 text-white" onClick={() => setIsCreateModalOpen(true)}>
            <PlusCircle className="mr-2 h-4 w-4" /> Create Advertisement
          </Button>
        </div>
      </motion.div>

      <motion.div variants={itemVariants}>
        <AdStatsCards />
      </motion.div>

      <motion.div variants={itemVariants}>
        <CampaignAnalytics />
      </motion.div>

      <motion.div variants={itemVariants}>
        <CampaignsTable />
      </motion.div>

      <motion.div variants={itemVariants} className="grid grid-cols-1 xl:grid-cols-2 gap-6">
        <TopAdvertisers />
        <AdActivityFeed />
      </motion.div>

      <CreateAdModal 
        open={isCreateModalOpen} 
        onOpenChange={setIsCreateModalOpen} 
      />
    </motion.div>
  )
}
