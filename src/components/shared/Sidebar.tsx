import { Link, useLocation } from "react-router-dom"
import { Home, FileText, DollarSign, Settings, Users, LogOut } from "lucide-react"
import { useTranslation } from "react-i18next"

export function Sidebar({ isAdmin = false, className }: { isAdmin?: boolean, className?: string }) {
  const location = useLocation()
  const { t } = useTranslation()
  
  const reporterLinks = [
    { name: t("sidebar.dashboard"), href: "/reporter", icon: Home },
    { name: t("sidebar.uploadNews"), href: "/reporter/upload", icon: FileText },
    { name: t("sidebar.myNews"), href: "/reporter/stories", icon: FileText },
    { name: t("sidebar.earnings"), href: "/reporter/earnings", icon: DollarSign },
    { name: t("sidebar.wallet"), href: "/reporter/wallet", icon: DollarSign },
    { name: t("sidebar.referrals"), href: "/reporter/referrals", icon: Users },
    { name: t("sidebar.pressId"), href: "/reporter/press-id", icon: FileText },
    { name: t("sidebar.profile"), href: "/reporter/settings", icon: Settings },
  ]
  
  const adminLinks = [
    { name: t("sidebar.overview"), href: "/admin", icon: Home },
    { name: t("sidebar.allStories"), href: "/admin/stories", icon: FileText },
    { name: t("sidebar.network"), href: "/admin/reporters", icon: Users },
    { name: t("sidebar.finance"), href: "/admin/finance", icon: DollarSign },
    { name: t("sidebar.ads"), href: "/admin/ads", icon: FileText },
    { name: t("sidebar.users"), href: "/admin/users", icon: Users },
    { name: t("sidebar.settings"), href: "/admin/settings", icon: Settings },
  ]
  
  const links = isAdmin ? adminLinks : reporterLinks

  return (
    <aside className={`w-64 border-r border-border bg-card text-card-foreground flex-col h-[calc(100vh-4rem)] sticky top-16 ${className ?? 'hidden md:flex'}`}>
      <div className="flex-1 py-6 px-4 space-y-1 overflow-y-auto">
        <div className="mb-4 px-2">
          <h2 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
            {isAdmin ? t("sidebar.adminPortal") : t("sidebar.reporterHub")}
          </h2>
        </div>
        <nav className="space-y-1">
          {links.map((link) => {
            const Icon = link.icon
            const isActive = location.pathname === link.href
            return (
              <Link
                key={link.name}
                to={link.href}
                className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all ${
                  isActive 
                    ? "bg-primary/10 text-primary" 
                    : "text-muted-foreground hover:bg-slate-100 hover:text-foreground dark:hover:bg-slate-800"
                }`}
              >
                <Icon className={`h-4 w-4 ${isActive ? "text-primary" : ""}`} />
                {link.name}
              </Link>
            )
          })}
        </nav>
      </div>
      <div className="p-4 border-t border-border">
        <button className="flex w-full items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium text-destructive hover:bg-destructive/10 transition-colors">
          <LogOut className="h-4 w-4" />
          {t("sidebar.signOut")}
        </button>
      </div>
    </aside>
  )
}
