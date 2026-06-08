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

export function TransactionLedger() {
  const { t } = useTranslation()

  const LEDGER_DATA = [
    { id: "WDL-8429", date: t("wallet.ledger.date1", "Jun 05, 2026"), type: t("wallet.ledger.typeWithdrawal", "Withdrawal"), method: t("wallet.ledger.methodBank", "Bank Transfer"), amount: "-₹10,000", status: t("dashboard.earnings.completed", "Completed") },
    { id: "WDL-8110", date: t("wallet.ledger.date2", "May 20, 2026"), type: t("wallet.ledger.typeWithdrawal", "Withdrawal"), method: t("wallet.ledger.methodUpi", "UPI"), amount: "-₹5,000", status: t("dashboard.earnings.completed", "Completed") },
    { id: "WDL-7592", date: t("wallet.ledger.date3", "May 05, 2026"), type: t("wallet.ledger.typeWithdrawal", "Withdrawal"), method: t("wallet.ledger.methodBank", "Bank Transfer"), amount: "-₹8,550", status: t("dashboard.earnings.completed", "Completed") },
    { id: "WDL-7104", date: t("wallet.ledger.date4", "Apr 20, 2026"), type: t("wallet.ledger.typeWithdrawal", "Withdrawal"), method: t("wallet.ledger.methodUpi", "UPI"), amount: "-₹3,000", status: t("wallet.ledger.statusFailed", "Failed") },
    { id: "WDL-6888", date: t("wallet.ledger.date5", "Apr 05, 2026"), type: t("wallet.ledger.typeWithdrawal", "Withdrawal"), method: t("wallet.ledger.methodBank", "Bank Transfer"), amount: "-₹5,000", status: t("dashboard.earnings.completed", "Completed") },
  ]

  const getStatusBadge = (status: string) => {
    switch (status) {
      case t("dashboard.earnings.completed", "Completed"):
        return <Badge className="bg-emerald-100 text-emerald-800 hover:bg-emerald-100 dark:bg-emerald-900/30 dark:text-emerald-400 border-0">{status}</Badge>
      case t("wallet.ledger.statusFailed", "Failed"):
        return <Badge className="bg-red-100 text-red-800 hover:bg-red-100 dark:bg-red-900/30 dark:text-red-400 border-0">{status}</Badge>
      default:
        return <Badge variant="outline">{status}</Badge>
    }
  }

  return (
    <div className="bg-white dark:bg-card border border-border shadow-sm rounded-xl overflow-hidden">
      <div className="p-6 border-b border-border bg-slate-50 dark:bg-slate-900/50">
        <h3 className="font-heading font-bold text-lg">{t("wallet.ledger.title", "Recent Withdrawals")}</h3>
      </div>
      <Table>
        <TableHeader>
          <TableRow className="bg-slate-50/50 dark:bg-slate-900/20 hover:bg-transparent">
            <TableHead className="w-[120px]">{t("wallet.ledger.transferId", "Transfer ID")}</TableHead>
            <TableHead>{t("dashboard.earnings.date", "Date")}</TableHead>
            <TableHead>{t("wallet.ledger.method", "Method")}</TableHead>
            <TableHead>{t("dashboard.earnings.status", "Status")}</TableHead>
            <TableHead className="text-right">{t("dashboard.earnings.amount", "Amount")}</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {LEDGER_DATA.map((txn) => (
            <TableRow key={txn.id}>
              <TableCell className="font-mono text-xs text-muted-foreground">{txn.id}</TableCell>
              <TableCell className="whitespace-nowrap text-sm">{txn.date}</TableCell>
              <TableCell className="font-medium text-sm">{txn.method}</TableCell>
              <TableCell>{getStatusBadge(txn.status)}</TableCell>
              <TableCell className={`text-right font-bold text-slate-900 dark:text-slate-100`}>
                {txn.amount}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}
