import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Download } from "lucide-react"

const PAYOUTS = [
  { id: "TXN-8921", date: "01 Jun 2026", amount: "₹12,450", method: "Bank Transfer", status: "Completed" },
  { id: "TXN-8743", date: "15 May 2026", amount: "₹8,200", method: "UPI", status: "Completed" },
  { id: "TXN-8512", date: "01 May 2026", amount: "₹14,100", method: "Bank Transfer", status: "Completed" },
  { id: "TXN-8201", date: "15 Apr 2026", amount: "₹9,500", method: "UPI", status: "Completed" },
]

export function RecentEarningsTable() {
  return (
    <div className="bg-white dark:bg-card border border-border shadow-sm rounded-xl overflow-hidden">
      <div className="p-6 border-b border-border flex items-center justify-between">
        <h3 className="font-heading font-bold text-lg">Payout History</h3>
        <a href="/reporter/wallet" className="text-sm font-medium text-primary hover:underline">View Wallet</a>
      </div>
      <div className="overflow-x-auto">
        <Table>
          <TableHeader className="bg-slate-50 dark:bg-slate-900/50">
            <TableRow>
              <TableHead>Transaction ID</TableHead>
              <TableHead>Date</TableHead>
              <TableHead>Method</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="text-right">Amount</TableHead>
              <TableHead className="text-center w-[80px]">Invoice</TableHead>
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
