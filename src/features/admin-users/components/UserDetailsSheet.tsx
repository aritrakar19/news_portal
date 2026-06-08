import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { User, Mail, Phone, MapPin, Calendar, Clock, Activity, IndianRupee, Users, ShieldAlert, CheckCircle2, XCircle } from "lucide-react"
import type { SystemUser } from "../data/mockUsers"
import { useTranslation } from "react-i18next"

interface UserDetailsSheetProps {
  user: SystemUser | null
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function UserDetailsSheet({ user, open, onOpenChange }: UserDetailsSheetProps) {
  const { t } = useTranslation()

  if (!user) return null

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "Active": return <Badge className="bg-emerald-100 text-emerald-800 hover:bg-emerald-100 dark:bg-emerald-900/30 dark:text-emerald-400">{t("admin.users.table.statusActive", "Active")}</Badge>
      case "Pending": return <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-100 dark:bg-blue-900/30 dark:text-blue-400">{t("admin.users.table.statusPending", "Pending")}</Badge>
      case "Suspended": return <Badge className="bg-amber-100 text-amber-800 hover:bg-amber-100 dark:bg-amber-900/30 dark:text-amber-400">{t("admin.users.table.statusSuspended", "Suspended")}</Badge>
      case "Blocked": return <Badge className="bg-rose-100 text-rose-800 hover:bg-rose-100 dark:bg-rose-900/30 dark:text-rose-400">{t("admin.users.table.statusBlocked", "Blocked")}</Badge>
      default: return <Badge variant="secondary">{status}</Badge>
    }
  }

  const PermissionRow = ({ label, isGranted }: { label: string, isGranted: boolean }) => (
    <div className="flex items-center justify-between py-2 border-b border-border last:border-0">
      <span className="text-sm font-medium">{label}</span>
      {isGranted ? (
        <CheckCircle2 className="h-4 w-4 text-emerald-500" />
      ) : (
        <XCircle className="h-4 w-4 text-slate-300 dark:text-slate-600" />
      )}
    </div>
  )

  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent className="w-full sm:max-w-md overflow-y-auto p-0">
        <div className="p-6 bg-slate-50 dark:bg-slate-900 border-b relative">
          <SheetHeader className="text-left mb-6">
            <div className="flex justify-between items-start">
              <SheetTitle>{t("admin.users.sheet.title", "User Profile")}</SheetTitle>
              {getStatusBadge(user.status)}
            </div>
          </SheetHeader>
          
          <div className="flex flex-col items-center text-center space-y-3">
            <Avatar className="h-24 w-24 border-4 border-white dark:border-slate-800 shadow-md">
              <AvatarImage src={user.avatar} alt={user.fullName} />
              <AvatarFallback className="text-2xl">{user.fullName.charAt(0)}</AvatarFallback>
            </Avatar>
            <div>
              <h2 className="text-xl font-bold">{user.fullName}</h2>
              <p className="text-muted-foreground font-mono text-xs mt-1">{user.id}</p>
            </div>
            <Badge variant="outline" className="px-3 py-1 font-semibold">{user.role}</Badge>
          </div>
        </div>

        <div className="p-6 space-y-8">
          {/* Contact Information */}
          <div>
            <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-4 flex items-center gap-2">
              <User className="h-4 w-4" /> {t("admin.users.sheet.contactInfo", "Contact Information")}
            </h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-muted-foreground" />
                <span>{user.email}</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-muted-foreground" />
                <span>{user.mobile}</span>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="h-4 w-4 text-muted-foreground shrink-0 mt-0.5" />
                <span>{user.address}<br/>{user.district}, {user.state}</span>
              </div>
            </div>
          </div>

          <Separator />

          {/* Account Metrics */}
          <div>
            <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-4 flex items-center gap-2">
              <Activity className="h-4 w-4" /> {t("admin.users.sheet.platformActivity", "Platform Activity")}
            </h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-slate-50 dark:bg-slate-900 rounded-lg p-3 border">
                <p className="text-xs text-muted-foreground flex items-center gap-1 mb-1"><Activity className="h-3 w-3" /> {t("admin.users.sheet.news", "News")}</p>
                <p className="text-lg font-bold">{user.activity.totalNewsSubmitted}</p>
              </div>
              <div className="bg-slate-50 dark:bg-slate-900 rounded-lg p-3 border">
                <p className="text-xs text-muted-foreground flex items-center gap-1 mb-1"><IndianRupee className="h-3 w-3" /> {t("admin.users.sheet.earnings", "Earnings")}</p>
                <p className="text-lg font-bold text-emerald-600">₹{user.activity.totalEarnings.toLocaleString()}</p>
              </div>
              <div className="bg-slate-50 dark:bg-slate-900 rounded-lg p-3 border">
                <p className="text-xs text-muted-foreground flex items-center gap-1 mb-1"><Users className="h-3 w-3" /> {t("admin.users.sheet.referrals", "Referrals")}</p>
                <p className="text-lg font-bold text-blue-600">{user.activity.referralCount}</p>
              </div>
              <div className="bg-slate-50 dark:bg-slate-900 rounded-lg p-3 border">
                <p className="text-xs text-muted-foreground flex items-center gap-1 mb-1"><Calendar className="h-3 w-3" /> {t("admin.users.sheet.joined", "Joined")}</p>
                <p className="text-sm font-semibold mt-1">{new Date(user.registrationDate).toLocaleDateString()}</p>
              </div>
            </div>
            <div className="flex items-center gap-2 text-xs text-muted-foreground mt-4">
               <Clock className="h-3 w-3" /> {t("admin.users.sheet.lastLogin", "Last login")}: {new Date(user.lastLogin).toLocaleString()}
            </div>
          </div>

          <Separator />

          {/* Role & Permissions Management */}
          <div>
            <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-4 flex items-center gap-2">
              <ShieldAlert className="h-4 w-4" /> {t("admin.users.sheet.rolePermissions", "Role & Permissions")}
            </h3>
            
            <div className="space-y-4">
              <div className="space-y-2">
                <label className="text-sm font-medium">{t("admin.users.sheet.assignedRole", "Assigned Role")}</label>
                <Select defaultValue={user.role.toLowerCase().replace(' ', '-')}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="super-admin">{t("admin.users.table.roleSuperAdmin", "Super Admin")}</SelectItem>
                    <SelectItem value="admin">{t("admin.users.table.roleAdmin", "Admin")}</SelectItem>
                    <SelectItem value="editor">{t("admin.users.table.roleEditor", "Editor")}</SelectItem>
                    <SelectItem value="reporter">{t("admin.users.table.roleReporter", "Reporter")}</SelectItem>
                    <SelectItem value="viewer">{t("admin.users.table.roleViewer", "Viewer")}</SelectItem>
                  </SelectContent>
                </Select>
                <p className="text-xs text-muted-foreground">{t("admin.users.sheet.roleChangeNotice", "Changing the role will immediately alter the user's access.")}</p>
              </div>

              <div className="bg-slate-50 dark:bg-slate-900 rounded-lg p-4 border mt-4">
                <p className="text-xs font-semibold text-muted-foreground mb-3">{t("admin.users.sheet.currentAccess", "CURRENT ACCESS RIGHTS")}</p>
                <PermissionRow label={t("admin.users.sheet.newsManagement", "News Management")} isGranted={user.permissions.newsManagement} />
                <PermissionRow label={t("admin.users.sheet.reporterManagement", "Reporter Management")} isGranted={user.permissions.reporterManagement} />
                <PermissionRow label={t("admin.users.sheet.earningsManagement", "Earnings Management")} isGranted={user.permissions.earningsManagement} />
                <PermissionRow label={t("admin.users.sheet.adsManagement", "Advertisement Management")} isGranted={user.permissions.adsManagement} />
                <PermissionRow label={t("admin.users.sheet.settingsAccess", "Platform Settings Access")} isGranted={user.permissions.settingsAccess} />
              </div>
            </div>
          </div>
          
          <div className="flex gap-3 pt-4">
            <Button variant="outline" className="flex-1" onClick={() => onOpenChange(false)}>{t("admin.users.sheet.cancel", "Cancel")}</Button>
            <Button className="flex-1 bg-blue-600 hover:bg-blue-700">{t("admin.users.sheet.saveChanges", "Save Changes")}</Button>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  )
}
