import { useState } from "react"
import { motion, type Variants } from "framer-motion"
import { UserStatsCards } from "./components/UserStatsCards"
import { UserAnalytics } from "./components/UserAnalytics"
import { UsersTable } from "./components/UsersTable"
import { UserDetailsSheet } from "./components/UserDetailsSheet"
import { UserActivityFeed } from "./components/UserActivityFeed"
import { PlusCircle, DownloadCloud } from "lucide-react"
import { Button } from "@/components/ui/button"
import type { SystemUser } from "./data/mockUsers"
import { useTranslation } from "react-i18next"

export function AdminUsersPage() {
  const { t } = useTranslation()
  const [selectedUser, setSelectedUser] = useState<SystemUser | null>(null)
  const [isSheetOpen, setIsSheetOpen] = useState(false)

  const handleViewUser = (user: SystemUser) => {
    setSelectedUser(user)
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
          <h1 className="text-3xl font-heading font-extrabold text-slate-900 dark:text-white">{t("admin.users.title", "System Users")}</h1>
          <p className="text-muted-foreground mt-2 max-w-2xl">
            {t("admin.users.subtitle", "Manage roles, permissions, and account statuses across the entire platform.")}
          </p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline" className="hidden sm:flex">
            <DownloadCloud className="mr-2 h-4 w-4" /> {t("admin.users.exportReport", "Export Report")}
          </Button>
          <Button className="bg-blue-600 hover:bg-blue-700 text-white">
            <PlusCircle className="mr-2 h-4 w-4" /> {t("admin.users.createNewUser", "Create New User")}
          </Button>
        </div>
      </motion.div>

      <motion.div variants={itemVariants}>
        <UserStatsCards />
      </motion.div>

      <motion.div variants={itemVariants}>
        <UserAnalytics />
      </motion.div>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
        <motion.div variants={itemVariants} className="xl:col-span-2">
          <UsersTable onViewUser={handleViewUser} />
        </motion.div>
        <motion.div variants={itemVariants} className="xl:col-span-1">
          <UserActivityFeed />
        </motion.div>
      </div>

      <UserDetailsSheet 
        user={selectedUser} 
        open={isSheetOpen} 
        onOpenChange={setIsSheetOpen} 
      />
    </motion.div>
  )
}
