import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"

const REFERRALS = [
  { name: "Rahul Verma", date: "Jun 06, 2026", status: "Active", commission: "₹200" },
  { name: "Priya Sharma", date: "Jun 02, 2026", status: "Active", commission: "₹200" },
  { name: "Amit Kumar", date: "May 28, 2026", status: "Pending Verification", commission: "-" },
  { name: "Sneha Patil", date: "May 15, 2026", status: "Active", commission: "₹200" },
  { name: "Vikram Singh", date: "May 10, 2026", status: "Pending First News", commission: "-" },
]

export function ReferralHistoryTable() {
  const getStatusBadge = (status: string) => {
    switch (status) {
      case "Active":
        return <Badge className="bg-emerald-100 text-emerald-800 hover:bg-emerald-100 dark:bg-emerald-900/30 dark:text-emerald-400 border-0">{status}</Badge>
      case "Pending Verification":
      case "Pending First News":
        return <Badge className="bg-amber-100 text-amber-800 hover:bg-amber-100 dark:bg-amber-900/30 dark:text-amber-400 border-0">{status}</Badge>
      default:
        return <Badge variant="outline">{status}</Badge>
    }
  }

  return (
    <div className="bg-white dark:bg-card border border-border shadow-sm rounded-xl overflow-hidden h-full flex flex-col">
      <div className="p-6 border-b border-border bg-slate-50 dark:bg-slate-900/50 flex justify-between items-center">
        <h3 className="font-heading font-bold text-lg">Referred Reporters</h3>
        <button className="text-sm font-medium text-primary hover:underline">View All</button>
      </div>
      <div className="flex-1 overflow-auto">
        <Table>
          <TableHeader>
            <TableRow className="bg-slate-50/50 dark:bg-slate-900/20 hover:bg-transparent">
              <TableHead>Reporter Name</TableHead>
              <TableHead>Join Date</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="text-right">Commission</TableHead>
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
