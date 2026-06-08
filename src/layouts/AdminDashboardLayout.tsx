import { useState } from "react"
import { Outlet, NavLink, useNavigate } from "react-router-dom"
import { useTranslation } from "react-i18next"
import { LanguageSwitcher } from "@/components/shared/LanguageSwitcher"
import { 
  LayoutDashboard, 
  Users, 
  FileText, 
  IndianRupee, 
  Wallet, 
  Megaphone, 
  Settings, 
  LogOut,
  ShieldCheck,
  Bell,
  Search,
  Menu
} from "lucide-react"
import { Sheet, SheetContent, SheetTrigger, SheetTitle, SheetDescription } from "@/components/ui/sheet"

const ADMIN_NAV_KEYS = [
  { nameKey: "adminNav.dashboard", path: "/admin", icon: LayoutDashboard },
  { nameKey: "adminNav.reporters", path: "/admin/reporters", icon: Users },
  { nameKey: "adminNav.newsApproval", path: "/admin/news", icon: FileText },
  { nameKey: "adminNav.earnings", path: "/admin/earnings", icon: IndianRupee },
  { nameKey: "adminNav.walletRequests", path: "/admin/wallet-requests", icon: Wallet },
  { nameKey: "adminNav.ads", path: "/admin/ads", icon: Megaphone },
  { nameKey: "adminNav.users", path: "/admin/users", icon: ShieldCheck },
  { nameKey: "adminNav.settings", path: "/admin/settings", icon: Settings },
]

export function AdminDashboardLayout() {
  const navigate = useNavigate()
  const { t } = useTranslation()
  const [isOpen, setIsOpen] = useState(false)

  const NavContent = () => (
    <div className="h-full bg-slate-900 text-slate-300 flex flex-col border-r border-slate-800 w-full">
      <div className="p-6 border-b border-slate-800 shrink-0">
        <div className="flex items-center gap-2 mb-1">
          <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center font-bold text-white font-heading">A</div>
          <span className="font-heading font-black text-xl tracking-tight text-white">{t("admin.title")}</span>
        </div>
        <p className="text-xs font-medium text-slate-500 uppercase tracking-wider">{t("admin.subtitle")}</p>
      </div>
      
      <nav className="flex-1 py-6 px-3 space-y-1 overflow-y-auto">
        {ADMIN_NAV_KEYS.map((item) => {
          const Icon = item.icon
          return (
            <NavLink
              key={item.path}
              to={item.path}
              end={item.path === '/admin'}
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                `flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                  isActive 
                    ? "bg-blue-600 text-white shadow-md shadow-blue-900/20" 
                    : "hover:bg-slate-800 hover:text-white"
                }`
              }
            >
              <Icon className="w-5 h-5" />
              {t(item.nameKey)}
            </NavLink>
          )
        })}
      </nav>

      <div className="p-4 border-t border-slate-800 shrink-0">
        <button 
          onClick={() => {
            setIsOpen(false)
            navigate("/")
          }}
          className="flex items-center gap-3 px-4 py-3 w-full text-left rounded-lg text-sm font-medium text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
        >
          <LogOut className="w-5 h-5" />
          {t("admin.exitAdmin")}
        </button>
      </div>
    </div>
  )

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#0B1120] text-slate-900 dark:text-slate-100 font-sans flex">
      {/* Sidebar - Desktop */}
      <aside className="w-64 flex-shrink-0 hidden md:block h-screen sticky top-0">
        <NavContent />
      </aside>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
        {/* Top Header */}
        <header className="h-16 bg-white dark:bg-slate-900 border-b border-border flex items-center justify-between px-4 sm:px-6 shrink-0 z-10 sticky top-0">
          <div className="flex items-center gap-3">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild className="md:hidden">
                <button className="p-2 -ml-2 text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg">
                  <Menu className="w-5 h-5" />
                  <span className="sr-only">Toggle Sidebar</span>
                </button>
              </SheetTrigger>
              <SheetContent side="left" className="p-0 w-64 border-none">
                <SheetTitle className="sr-only">Menu</SheetTitle>
                <SheetDescription className="sr-only">Mobile Navigation</SheetDescription>
                <NavContent />
              </SheetContent>
            </Sheet>
            
            <div className="relative w-full max-w-md hidden sm:block">
              <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
              <input 
                type="text" 
                placeholder={t("admin.searchPlaceholder")} 
                className="w-full bg-slate-100 dark:bg-slate-800 border-0 h-9 rounded-full pl-10 pr-4 text-sm focus:ring-2 focus:ring-blue-500 outline-none"
              />
            </div>
          </div>
          
          <div className="flex items-center gap-4">
            <LanguageSwitcher />
            <button className="relative p-2 text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white transition-colors">
              <Bell className="w-5 h-5" />
              <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-blue-600 rounded-full border border-white dark:border-slate-900"></span>
            </button>
            <div className="w-8 h-8 bg-blue-100 dark:bg-blue-900/50 rounded-full flex items-center justify-center text-blue-700 dark:text-blue-400 font-bold text-sm">
              S
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 overflow-y-auto p-4 md:p-8 bg-slate-50 dark:bg-[#0B1120]">
          <Outlet />
        </main>
      </div>
    </div>
  )
}
