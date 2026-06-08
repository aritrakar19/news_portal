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

export function EarningsHistoryTable() {
  const { t } = useTranslation()

  const TRANSACTIONS = [
    { id: "TXN-001", date: t("earnings.txn.date1", "Jun 06, 2026"), description: t("earnings.txn.desc1", "Video Ad Revenue (City Council Meeting)"), amount: "+₹1,250", status: t("earnings.status.credited", "Credited"), type: "credit" },
    { id: "TXN-002", date: t("earnings.txn.date2", "Jun 05, 2026"), description: t("earnings.txn.desc2", "Withdrawal to HDFC Bank ****1234"), amount: "-₹10,000", status: t("dashboard.earnings.completed", "Completed"), type: "debit" },
    { id: "TXN-003", date: t("earnings.txn.date3", "Jun 03, 2026"), description: t("earnings.txn.desc3", "Article Performance Bonus (Local Election)"), amount: "+₹850", status: t("earnings.status.credited", "Credited"), type: "credit" },
    { id: "TXN-004", date: t("earnings.txn.date4", "Jun 01, 2026"), description: t("earnings.txn.desc4", "Referral Bonus (A. Sharma)"), amount: "+₹500", status: t("earnings.status.pending", "Pending"), type: "pending" },
    { id: "TXN-005", date: t("earnings.txn.date5", "May 28, 2026"), description: t("earnings.txn.desc5", "News Revenue (Traffic Diversion Update)"), amount: "+₹450", status: t("earnings.status.credited", "Credited"), type: "credit" },
  ]

  const getStatusBadge = (status: string) => {
    switch (status) {
      case t("earnings.status.credited", "Credited"):
      case t("dashboard.earnings.completed", "Completed"):
        return <Badge className="bg-emerald-100 text-emerald-800 hover:bg-emerald-100 dark:bg-emerald-900/30 dark:text-emerald-400 border-0">{status}</Badge>
      case t("earnings.status.pending", "Pending"):
        return <Badge className="bg-amber-100 text-amber-800 hover:bg-amber-100 dark:bg-amber-900/30 dark:text-amber-400 border-0">{status}</Badge>
      default:
        return <Badge variant="outline">{status}</Badge>
    }
  }

  return (
    <div className="bg-white dark:bg-card border border-border shadow-sm rounded-xl overflow-hidden">
      <div className="p-6 border-b border-border flex justify-between items-center bg-slate-50 dark:bg-slate-900/50">
        <h3 className="font-heading font-bold text-lg">{t("earnings.history.title", "Recent Transactions")}</h3>
        <button className="text-sm font-medium text-primary hover:underline">{t("earnings.history.viewAll", "View All")}</button>
      </div>
      <Table>
        <TableHeader>
          <TableRow className="bg-slate-50/50 dark:bg-slate-900/20 hover:bg-transparent">
            <TableHead className="w-[120px]">{t("dashboard.earnings.txnId", "Transaction ID")}</TableHead>
            <TableHead>{t("dashboard.earnings.date", "Date")}</TableHead>
            <TableHead>{t("earnings.history.desc", "Description")}</TableHead>
            <TableHead>{t("dashboard.earnings.status", "Status")}</TableHead>
            <TableHead className="text-right">{t("dashboard.earnings.amount", "Amount")}</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {TRANSACTIONS.map((txn) => (
            <TableRow key={txn.id}>
              <TableCell className="font-mono text-xs text-muted-foreground">{txn.id}</TableCell>
              <TableCell className="whitespace-nowrap text-sm">{txn.date}</TableCell>
              <TableCell className="font-medium text-sm">{txn.description}</TableCell>
              <TableCell>{getStatusBadge(txn.status)}</TableCell>
              <TableCell className={`text-right font-bold ${txn.type === 'debit' ? 'text-slate-900 dark:text-slate-100' : txn.type === 'pending' ? 'text-amber-600 dark:text-amber-500' : 'text-emerald-600 dark:text-emerald-500'}`}>
                {txn.amount}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}
