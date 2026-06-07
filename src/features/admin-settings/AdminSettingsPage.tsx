import { motion, type Variants } from "framer-motion"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { Save, RotateCcw, Server, Settings, Palette, Users, CreditCard, Bell, Shield, Search, Lock, Link as LinkIcon, Badge as BadgeIcon } from "lucide-react"

// Import all tabs
import { GeneralSettingsTab } from "./tabs/GeneralSettingsTab"
import { BrandingTab } from "./tabs/BrandingTab"
import { ReporterSettingsTab } from "./tabs/ReporterSettingsTab"
import { PressIdSettingsTab } from "./tabs/PressIdSettingsTab"
import { PaymentsTab } from "./tabs/PaymentsTab"
import { NotificationsTab } from "./tabs/NotificationsTab"
import { SecurityTab } from "./tabs/SecurityTab"
import { SeoTab } from "./tabs/SeoTab"
import { RolesPermissionsTab } from "./tabs/RolesPermissionsTab"
import { IntegrationsTab } from "./tabs/IntegrationsTab"
import { SettingsActivityLog } from "./components/SettingsActivityLog"

export function AdminSettingsPage() {
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
          <h1 className="text-3xl font-heading font-extrabold text-slate-900 dark:text-white">Platform Settings</h1>
          <p className="text-muted-foreground mt-2 max-w-2xl">
            System configuration center. Control branding, onboarding, security, and external integrations.
          </p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline" className="hidden sm:flex text-rose-600 hover:text-rose-700 hover:bg-rose-50 dark:hover:bg-rose-950/50">
            <RotateCcw className="mr-2 h-4 w-4" /> Reset Defaults
          </Button>
          <Button className="bg-blue-600 hover:bg-blue-700 text-white">
            <Save className="mr-2 h-4 w-4" /> Save Changes
          </Button>
        </div>
      </motion.div>

      <motion.div variants={itemVariants} className="flex flex-col xl:flex-row gap-8">
        {/* Main Settings Tabs Area */}
        <div className="flex-1 min-w-0">
          <Tabs defaultValue="general" className="w-full">
            <div className="overflow-x-auto pb-2 mb-4 scrollbar-hide">
              <TabsList className="w-max inline-flex justify-start h-12 p-1 gap-1 bg-slate-100 dark:bg-slate-900 border">
                <TabsTrigger value="general" className="gap-2 py-2 data-[state=active]:bg-white dark:data-[state=active]:bg-slate-950">
                <Settings className="h-4 w-4" /> General
              </TabsTrigger>
              <TabsTrigger value="branding" className="gap-2 py-2 data-[state=active]:bg-white dark:data-[state=active]:bg-slate-950">
                <Palette className="h-4 w-4" /> Branding
              </TabsTrigger>
              <TabsTrigger value="reporter" className="gap-2 py-2 data-[state=active]:bg-white dark:data-[state=active]:bg-slate-950">
                <Users className="h-4 w-4" /> Reporter
              </TabsTrigger>
              <TabsTrigger value="press-id" className="gap-2 py-2 data-[state=active]:bg-white dark:data-[state=active]:bg-slate-950">
                <BadgeIcon className="h-4 w-4" /> Press ID
              </TabsTrigger>
              <TabsTrigger value="payments" className="gap-2 py-2 data-[state=active]:bg-white dark:data-[state=active]:bg-slate-950">
                <CreditCard className="h-4 w-4" /> Payments
              </TabsTrigger>
              <TabsTrigger value="notifications" className="gap-2 py-2 data-[state=active]:bg-white dark:data-[state=active]:bg-slate-950">
                <Bell className="h-4 w-4" /> Notifications
              </TabsTrigger>
              <TabsTrigger value="security" className="gap-2 py-2 data-[state=active]:bg-white dark:data-[state=active]:bg-slate-950">
                <Shield className="h-4 w-4" /> Security
              </TabsTrigger>
              <TabsTrigger value="seo" className="gap-2 py-2 data-[state=active]:bg-white dark:data-[state=active]:bg-slate-950">
                <Search className="h-4 w-4" /> SEO
              </TabsTrigger>
              <TabsTrigger value="roles" className="gap-2 py-2 data-[state=active]:bg-white dark:data-[state=active]:bg-slate-950">
                <Lock className="h-4 w-4" /> Roles (RBAC)
              </TabsTrigger>
              <TabsTrigger value="integrations" className="gap-2 py-2 data-[state=active]:bg-white dark:data-[state=active]:bg-slate-950">
                <LinkIcon className="h-4 w-4" /> Integrations
              </TabsTrigger>
            </TabsList>
            </div>

            <div className="mt-4">
              <TabsContent value="general" className="mt-0 outline-none"><GeneralSettingsTab /></TabsContent>
              <TabsContent value="branding" className="mt-0 outline-none"><BrandingTab /></TabsContent>
              <TabsContent value="reporter" className="mt-0 outline-none"><ReporterSettingsTab /></TabsContent>
              <TabsContent value="press-id" className="mt-0 outline-none"><PressIdSettingsTab /></TabsContent>
              <TabsContent value="payments" className="mt-0 outline-none"><PaymentsTab /></TabsContent>
              <TabsContent value="notifications" className="mt-0 outline-none"><NotificationsTab /></TabsContent>
              <TabsContent value="security" className="mt-0 outline-none"><SecurityTab /></TabsContent>
              <TabsContent value="seo" className="mt-0 outline-none"><SeoTab /></TabsContent>
              <TabsContent value="roles" className="mt-0 outline-none"><RolesPermissionsTab /></TabsContent>
              <TabsContent value="integrations" className="mt-0 outline-none"><IntegrationsTab /></TabsContent>
            </div>
          </Tabs>
        </div>

        {/* Sidebar / Activity Info */}
        <div className="w-full xl:w-80 flex flex-col gap-6 shrink-0">
          <SettingsActivityLog />
          
          <div className="bg-slate-50 dark:bg-slate-900 border border-border rounded-xl p-5 shadow-sm">
            <h3 className="text-sm font-semibold flex items-center gap-2 mb-4">
              <Server className="h-4 w-4 text-slate-500" /> System Information
            </h3>
            <div className="space-y-3 text-sm">
              <div className="flex justify-between items-center">
                <span className="text-muted-foreground">Version</span>
                <span className="font-mono font-medium">v2.4.1-stable</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-muted-foreground">Build</span>
                <span className="font-mono font-medium text-xs">a9f84b2</span>
              </div>
              <Separator />
              <div className="flex justify-between items-center">
                <span className="text-muted-foreground">Server Status</span>
                <span className="flex items-center gap-1.5 text-emerald-600 dark:text-emerald-400 font-medium">
                  <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse"></span>
                  Operational
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-muted-foreground">Last Backup</span>
                <span>Today, 04:00 AM</span>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}
