import { useState } from "react"
import { motion, type Variants } from "framer-motion"
import { mockNews, type NewsStory } from "./data/mockNews"
import { NewsStatsCards } from "./components/NewsStatsCards"
import { NewsFilters } from "./components/NewsFilters"
import { NewsTable } from "./components/NewsTable"
import { StoryReviewSheet } from "./components/StoryReviewSheet"
import { RecentEditorialActivity } from "./components/RecentEditorialActivity"
import { Settings, FileCheck } from "lucide-react"
import { Button } from "@/components/ui/button"

export function AdminNewsPage() {
  const [selectedStory, setSelectedStory] = useState<NewsStory | null>(null)
  const [isSheetOpen, setIsSheetOpen] = useState(false)

  const handleViewStory = (story: NewsStory) => {
    setSelectedStory(story)
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
          <h1 className="text-3xl font-heading font-extrabold text-slate-900 dark:text-white">News Approval Center</h1>
          <p className="text-muted-foreground mt-2 max-w-2xl">
            Review, verify, and publish stories submitted by the reporter network.
          </p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline">
            <Settings className="mr-2 h-4 w-4" /> Guidelines
          </Button>
          <Button className="bg-emerald-600 hover:bg-emerald-700 text-white">
            <FileCheck className="mr-2 h-4 w-4" /> Bulk Approve
          </Button>
        </div>
      </motion.div>

      <motion.div variants={itemVariants}>
        <NewsStatsCards />
      </motion.div>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
        <motion.div variants={itemVariants} className="xl:col-span-2 space-y-6">
          <div className="bg-slate-50/50 dark:bg-slate-900/50 p-6 rounded-xl border">
            <h2 className="text-xl font-semibold mb-4">Editorial Queue</h2>
            <NewsFilters />
            <NewsTable news={mockNews} onViewStory={handleViewStory} />
          </div>
        </motion.div>

        <motion.div variants={itemVariants} className="xl:col-span-1">
          <RecentEditorialActivity />
        </motion.div>
      </div>

      <StoryReviewSheet 
        story={selectedStory} 
        open={isSheetOpen} 
        onOpenChange={setIsSheetOpen} 
      />
    </motion.div>
  )
}
