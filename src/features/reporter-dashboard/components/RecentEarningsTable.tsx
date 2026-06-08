import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Download } from "lucide-react"
import { useTranslation } from "react-i18next"

export function RecentEarningsTable() {
  const { t } = useTranslation()

  const PAYOUTS = [
    { id: "TXN-8921", date: t("dashboard.earnings.date1", "01 Jun 2026"), amount: "₹12,450", method: t("dashboard.earnings.bankTransfer", "Bank Transfer"), status: t("dashboard.earnings.completed", "Completed") },
    { id: "TXN-8743", date: t("dashboard.earnings.date2", "15 May 2026"), amount: "₹8,200", method: "UPI", status: t("dashboard.earnings.completed", "Completed") },
    { id: "TXN-8512", date: t("dashboard.earnings.date3", "01 May 2026"), amount: "₹14,100", method: t("dashboard.earnings.bankTransfer", "Bank Transfer"), status: t("dashboard.earnings.completed", "Completed") },
    { id: "TXN-8201", date: t("dashboard.earnings.date4", "15 Apr 2026"), amount: "₹9,500", method: "UPI", status: t("dashboard.earnings.completed", "Completed") },
  ]
  return (
    <div className="bg-white dark:bg-card border border-border shadow-sm rounded-xl overflow-hidden">
      <div className="p-6 border-b border-border flex items-center justify-between">
        <h3 className="font-heading font-bold text-lg">{t("dashboard.earnings.title", "Payout History")}</h3>
        <a href="/reporter/wallet" className="text-sm font-medium text-primary hover:underline">{t("dashboard.earnings.viewWallet", "View Wallet")}</a>
      </div>
      <div className="overflow-x-auto">
        <Table>
          <TableHeader className="bg-slate-50 dark:bg-slate-900/50">
            <TableRow>
              <TableHead>{t("dashboard.earnings.txnId", "Transaction ID")}</TableHead>
              <TableHead>{t("dashboard.earnings.date", "Date")}</TableHead>
              <TableHead>{t("dashboard.earnings.method", "Method")}</TableHead>
              <TableHead>{t("dashboard.earnings.status", "Status")}</TableHead>
              <TableHead className="text-right">{t("dashboard.earnings.amount", "Amount")}</TableHead>
              <TableHead className="text-center w-[80px]">{t("dashboard.earnings.invoice", "Invoice")}</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {PAYOUTS.map((payout) => (
              <TableRow key={payout.id}>
                <TableCell className="font-medium text-muted-foreground">{payout.id}</TableCell>
                <TableCell>{payout.date}</TableCell>
                <TableCell>{payout.method}</TableCell>
                <TableCell>
                  <Badge className="bg-green-100 text-green-700 hover:bg-green-200 border-green-200">
                    {payout.status}
                  </Badge>
                </TableCell>
                <TableCell className="text-right font-bold text-green-600 dark:text-green-500">{payout.amount}</TableCell>
                <TableCell className="text-center">
                  <button className="text-slate-400 hover:text-primary transition-colors">
                    <Download className="h-4 w-4 mx-auto" />
                  </button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  )
}
