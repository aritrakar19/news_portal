import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet"
import type { Reporter } from "../data/mockReporters"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { CheckCircle2, XCircle, FileText, Download, Mail, Phone, MapPin, IndianRupee, FileVideo } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { useTranslation } from "react-i18next"

interface ReporterDetailsSheetProps {
  reporter: Reporter | null
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function ReporterDetailsSheet({ reporter, open, onOpenChange }: ReporterDetailsSheetProps) {
  const { t } = useTranslation()

  if (!reporter) return null

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Active": return "bg-emerald-100 text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-400"
      case "Pending Approval": return "bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-400"
      case "Suspended": return "bg-rose-100 text-rose-800 dark:bg-rose-900/30 dark:text-rose-400"
      case "Expired": return "bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-400"
      case "Valid": return "bg-emerald-100 text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-400"
      case "Pending": return "bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-400"
      default: return "bg-slate-100 text-slate-800 dark:bg-slate-800 dark:text-slate-400"
    }
  }

  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent className="w-full sm:max-w-xl overflow-y-auto">
        <SheetHeader className="text-left mb-6">
          <div className="flex items-center justify-between">
            <SheetTitle>{t("admin.reporters.sheet.title", "Reporter Details")}</SheetTitle>
            <Badge variant="outline" className="font-mono">{reporter.id}</Badge>
          </div>
          <SheetDescription>
            {t("admin.reporters.sheet.description", "Full profile, verification status, and activity overview.")}
          </SheetDescription>
        </SheetHeader>

        <div className="space-y-8">
          {/* Header Info */}
          <div className="flex items-start gap-4">
            <Avatar className="h-20 w-20 border-2 border-slate-100 dark:border-slate-800">
              <AvatarImage src={reporter.photo} alt={reporter.name} />
              <AvatarFallback>{reporter.name.charAt(0)}</AvatarFallback>
            </Avatar>
            <div className="flex-1">
              <h2 className="text-2xl font-bold">{reporter.name}</h2>
              <div className="flex flex-wrap gap-2 mt-2">
                <Badge variant="secondary" className={getStatusColor(reporter.accountStatus)}>
                  {t("admin.reporters.sheet.account", "Account")}: {reporter.accountStatus}
                </Badge>
                <Badge variant="secondary" className={getStatusColor(reporter.pressIdStatus)}>
                  {t("admin.reporters.sheet.pressId", "Press ID")}: {reporter.pressIdStatus}
                </Badge>
              </div>
            </div>
          </div>

          <Separator />

          {/* Contact & Location */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-3">
              <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">{t("admin.reporters.sheet.contact", "Contact Details")}</h3>
              <div className="flex items-center gap-2 text-sm">
                <Phone className="h-4 w-4 text-muted-foreground" />
                <span>{reporter.mobile}</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Mail className="h-4 w-4 text-muted-foreground" />
                <span>{reporter.name.toLowerCase().replace(' ', '.')}@example.com</span>
              </div>
            </div>
            <div className="space-y-3">
              <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">{t("admin.reporters.sheet.location", "Location")}</h3>
              <div className="flex items-start gap-2 text-sm">
                <MapPin className="h-4 w-4 text-muted-foreground mt-0.5 shrink-0" />
                <span>{reporter.address}</span>
              </div>
              <div className="text-sm text-muted-foreground ml-6">
                {reporter.district}, {reporter.state}
              </div>
            </div>
          </div>

          <Separator />

          {/* Verification Status */}
          <div>
            <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-4">{t("admin.reporters.sheet.verification", "Verification Status")}</h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center gap-2">
                {reporter.aadhaarVerified ? (
                  <CheckCircle2 className="h-5 w-5 text-emerald-500" />
                ) : (
                  <XCircle className="h-5 w-5 text-rose-500" />
                )}
                <div>
                  <div className="text-sm font-medium">{t("admin.reporters.sheet.aadhaar", "Aadhaar")}</div>
                  <div className="text-xs text-muted-foreground font-mono">{reporter.aadhaar}</div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                {reporter.mobileVerified ? (
                  <CheckCircle2 className="h-5 w-5 text-emerald-500" />
                ) : (
                  <XCircle className="h-5 w-5 text-rose-500" />
                )}
                <div>
                  <div className="text-sm font-medium">{t("admin.reporters.sheet.mobile", "Mobile Number")}</div>
                  <div className="text-xs text-muted-foreground">{t("admin.reporters.sheet.otpVerified", "OTP Verified")}</div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                {reporter.emailVerified ? (
                  <CheckCircle2 className="h-5 w-5 text-emerald-500" />
                ) : (
                  <XCircle className="h-5 w-5 text-rose-500" />
                )}
                <div>
                  <div className="text-sm font-medium">{t("admin.reporters.sheet.email", "Email Address")}</div>
                  <div className="text-xs text-muted-foreground">{t("admin.reporters.sheet.linkVerified", "Link Verified")}</div>
                </div>
              </div>
            </div>
          </div>

          <Separator />

          {/* Performance & Docs */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-3">
              <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">{t("admin.reporters.sheet.performance", "Performance")}</h3>
              <div className="flex items-center gap-2 text-sm">
                <FileVideo className="h-4 w-4 text-muted-foreground" />
                <span><strong className="text-foreground">{reporter.newsSubmissionCount}</strong> {t("admin.reporters.sheet.newsSubmissions", "News Submissions")}</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <IndianRupee className="h-4 w-4 text-muted-foreground" />
                <span><strong className="text-foreground">{reporter.earningsSummary}</strong> {t("admin.reporters.sheet.totalEarnings", "Total Earnings")}</span>
              </div>
            </div>
            <div className="space-y-3">
              <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">{t("admin.reporters.sheet.documents", "Documents")}</h3>
              <div className="text-sm space-y-2">
                <div className="flex items-center justify-between p-2 rounded-md border bg-slate-50 dark:bg-slate-900/50">
                  <div className="flex items-center gap-2">
                    <FileText className="h-4 w-4 text-blue-500" />
                    <span>{t("admin.reporters.sheet.aadhaarCard", "Aadhaar Card")}</span>
                  </div>
                  <Button variant="ghost" size="icon" className="h-6 w-6">
                    <Download className="h-3 w-3" />
                  </Button>
                </div>
                <div className="flex items-center justify-between p-2 rounded-md border bg-slate-50 dark:bg-slate-900/50">
                  <div className="flex items-center gap-2">
                    <FileText className="h-4 w-4 text-blue-500" />
                    <span>{t("admin.reporters.sheet.qualCert", "Qualification Cert")}</span>
                  </div>
                  <Button variant="ghost" size="icon" className="h-6 w-6">
                    <Download className="h-3 w-3" />
                  </Button>
                </div>
              </div>
            </div>
          </div>

          <Separator />

          {/* Actions */}
          <div className="flex flex-wrap gap-3">
            {reporter.accountStatus === "Pending Approval" && (
              <>
                <Button className="flex-1 bg-emerald-600 hover:bg-emerald-700">{t("admin.reporters.sheet.approveApp", "Approve Application")}</Button>
                <Button variant="destructive" className="flex-1">{t("admin.reporters.sheet.reject", "Reject")}</Button>
              </>
            )}
            {reporter.accountStatus === "Active" && (
              <>
                <Button variant="outline" className="flex-1">{t("admin.reporters.sheet.suspendAcct", "Suspend Account")}</Button>
                <Button className="flex-1"><Download className="mr-2 h-4 w-4" /> {t("admin.reporters.sheet.dlPressIdBtn", "Download Press ID")}</Button>
              </>
            )}
            {reporter.accountStatus === "Suspended" && (
              <Button className="flex-1">{t("admin.reporters.sheet.reactivateAcct", "Reactivate Account")}</Button>
            )}
            {reporter.accountStatus === "Expired" && (
              <Button className="flex-1">{t("admin.reporters.sheet.sendRenewal", "Send Renewal Notice")}</Button>
            )}
          </div>
        </div>
      </SheetContent>
    </Sheet>
  )
}
