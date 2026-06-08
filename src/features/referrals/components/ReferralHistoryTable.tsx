import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { useTranslation } from "react-i18next"

export function ReferralHistoryTable() {
  const { t } = useTranslation()

  const REFERRALS = [
    { name: "Rahul Verma", date: t("referrals.history.date1", "Jun 06, 2026"), status: t("referrals.history.statusActive", "Active"), commission: "₹200" },
    { name: "Priya Sharma", date: t("referrals.history.date2", "Jun 02, 2026"), status: t("referrals.history.statusActive", "Active"), commission: "₹200" },
    { name: "Amit Kumar", date: t("referrals.history.date3", "May 28, 2026"), status: t("referrals.history.statusPendingVer", "Pending Verification"), commission: "-" },
    { name: "Sneha Patil", date: t("referrals.history.date4", "May 15, 2026"), status: t("referrals.history.statusActive", "Active"), commission: "₹200" },
    { name: "Vikram Singh", date: t("referrals.history.date5", "May 10, 2026"), status: t("referrals.history.statusPendingNews", "Pending First News"), commission: "-" },
  ]

  const getStatusBadge = (status: string) => {
    switch (status) {
      case t("referrals.history.statusActive", "Active"):
        return <Badge className="bg-emerald-100 text-emerald-800 hover:bg-emerald-100 dark:bg-emerald-900/30 dark:text-emerald-400 border-0">{status}</Badge>
      case t("referrals.history.statusPendingVer", "Pending Verification"):
      case t("referrals.history.statusPendingNews", "Pending First News"):
        return <Badge className="bg-amber-100 text-amber-800 hover:bg-amber-100 dark:bg-amber-900/30 dark:text-amber-400 border-0">{status}</Badge>
      default:
        return <Badge variant="outline">{status}</Badge>
    }
  }

  return (
    <div className="bg-white dark:bg-card border border-border shadow-sm rounded-xl overflow-hidden h-full flex flex-col">
      <div className="p-6 border-b border-border bg-slate-50 dark:bg-slate-900/50 flex justify-between items-center">
        <h3 className="font-heading font-bold text-lg">{t("referrals.history.title", "Referred Reporters")}</h3>
        <button className="text-sm font-medium text-primary hover:underline">{t("referrals.history.viewAll", "View All")}</button>
      </div>
      <div className="flex-1 overflow-auto">
        <Table>
          <TableHeader>
            <TableRow className="bg-slate-50/50 dark:bg-slate-900/20 hover:bg-transparent">
              <TableHead>{t("referrals.history.colName", "Reporter Name")}</TableHead>
              <TableHead>{t("referrals.history.colDate", "Join Date")}</TableHead>
              <TableHead>{t("dashboard.earnings.status", "Status")}</TableHead>
              <TableHead className="text-right">{t("referrals.history.colComm", "Commission")}</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {REFERRALS.map((ref, idx) => (
              <TableRow key={idx}>
                <TableCell className="font-medium text-sm">{ref.name}</TableCell>
                <TableCell className="whitespace-nowrap text-sm text-muted-foreground">{ref.date}</TableCell>
                <TableCell>{getStatusBadge(ref.status)}</TableCell>
                <TableCell className={`text-right font-bold ${ref.commission === '-' ? 'text-muted-foreground' : 'text-emerald-600 dark:text-emerald-500'}`}>
                  {ref.commission}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  )
}
