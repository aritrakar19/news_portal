import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"

const LEDGER_DATA = [
  { id: "WDL-8429", date: "Jun 05, 2026", type: "Withdrawal", method: "Bank Transfer", amount: "-₹10,000", status: "Completed" },
  { id: "WDL-8110", date: "May 20, 2026", type: "Withdrawal", method: "UPI", amount: "-₹5,000", status: "Completed" },
  { id: "WDL-7592", date: "May 05, 2026", type: "Withdrawal", method: "Bank Transfer", amount: "-₹8,550", status: "Completed" },
  { id: "WDL-7104", date: "Apr 20, 2026", type: "Withdrawal", method: "UPI", amount: "-₹3,000", status: "Failed" },
  { id: "WDL-6888", date: "Apr 05, 2026", type: "Withdrawal", method: "Bank Transfer", amount: "-₹5,000", status: "Completed" },
]

export function TransactionLedger() {
  const getStatusBadge = (status: string) => {
    switch (status) {
      case "Completed":
        return <Badge className="bg-emerald-100 text-emerald-800 hover:bg-emerald-100 dark:bg-emerald-900/30 dark:text-emerald-400 border-0">{status}</Badge>
      case "Failed":
        return <Badge className="bg-red-100 text-red-800 hover:bg-red-100 dark:bg-red-900/30 dark:text-red-400 border-0">{status}</Badge>
      default:
        return <Badge variant="outline">{status}</Badge>
    }
  }

  return (
    <div className="bg-white dark:bg-card border border-border shadow-sm rounded-xl overflow-hidden">
      <div className="p-6 border-b border-border bg-slate-50 dark:bg-slate-900/50">
        <h3 className="font-heading font-bold text-lg">Recent Withdrawals</h3>
      </div>
      <Table>
        <TableHeader>
          <TableRow className="bg-slate-50/50 dark:bg-slate-900/20 hover:bg-transparent">
            <TableHead className="w-[120px]">Transfer ID</TableHead>
            <TableHead>Date</TableHead>
            <TableHead>Method</TableHead>
            <TableHead>Status</TableHead>
            <TableHead className="text-right">Amount</TableHead>
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
