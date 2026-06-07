import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"

const TRANSACTIONS = [
  { id: "TXN-001", date: "Jun 06, 2026", description: "Video Ad Revenue (City Council Meeting)", amount: "+₹1,250", status: "Credited", type: "credit" },
  { id: "TXN-002", date: "Jun 05, 2026", description: "Withdrawal to HDFC Bank ****1234", amount: "-₹10,000", status: "Completed", type: "debit" },
  { id: "TXN-003", date: "Jun 03, 2026", description: "Article Performance Bonus (Local Election)", amount: "+₹850", status: "Credited", type: "credit" },
  { id: "TXN-004", date: "Jun 01, 2026", description: "Referral Bonus (A. Sharma)", amount: "+₹500", status: "Pending", type: "pending" },
  { id: "TXN-005", date: "May 28, 2026", description: "News Revenue (Traffic Diversion Update)", amount: "+₹450", status: "Credited", type: "credit" },
]

export function EarningsHistoryTable() {
  const getStatusBadge = (status: string) => {
    switch (status) {
      case "Credited":
      case "Completed":
        return <Badge className="bg-emerald-100 text-emerald-800 hover:bg-emerald-100 dark:bg-emerald-900/30 dark:text-emerald-400 border-0">{status}</Badge>
      case "Pending":
        return <Badge className="bg-amber-100 text-amber-800 hover:bg-amber-100 dark:bg-amber-900/30 dark:text-amber-400 border-0">{status}</Badge>
      default:
        return <Badge variant="outline">{status}</Badge>
    }
  }

  return (
    <div className="bg-white dark:bg-card border border-border shadow-sm rounded-xl overflow-hidden">
      <div className="p-6 border-b border-border flex justify-between items-center bg-slate-50 dark:bg-slate-900/50">
        <h3 className="font-heading font-bold text-lg">Recent Transactions</h3>
        <button className="text-sm font-medium text-primary hover:underline">View All</button>
      </div>
      <Table>
        <TableHeader>
          <TableRow className="bg-slate-50/50 dark:bg-slate-900/20 hover:bg-transparent">
            <TableHead className="w-[120px]">Transaction ID</TableHead>
            <TableHead>Date</TableHead>
            <TableHead>Description</TableHead>
            <TableHead>Status</TableHead>
            <TableHead className="text-right">Amount</TableHead>
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
