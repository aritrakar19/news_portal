import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { MoreHorizontal, CheckCircle, XCircle, Clock, CheckCircle2 } from "lucide-react"
import { mockWithdrawalRequests } from "../data/mockFinance"

export function WithdrawalRequestsTable() {
  const getStatusBadge = (status: string) => {
    switch (status) {
      case "Pending": return <Badge className="bg-amber-100 text-amber-800 hover:bg-amber-100 dark:bg-amber-900/30 dark:text-amber-400">Pending</Badge>
      case "Processing": return <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-100 dark:bg-blue-900/30 dark:text-blue-400">Processing</Badge>
      case "Completed": return <Badge className="bg-emerald-100 text-emerald-800 hover:bg-emerald-100 dark:bg-emerald-900/30 dark:text-emerald-400">Completed</Badge>
      case "Rejected": return <Badge className="bg-rose-100 text-rose-800 hover:bg-rose-100 dark:bg-rose-900/30 dark:text-rose-400">Rejected</Badge>
      default: return <Badge variant="secondary">{status}</Badge>
    }
  }

  return (
    <div className="bg-white dark:bg-card border border-border shadow-sm rounded-xl overflow-hidden">
      <div className="p-6 border-b border-border flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h3 className="text-lg font-heading font-bold">Withdrawal Requests</h3>
          <p className="text-sm text-muted-foreground mt-1">Review and process reporter payout requests.</p>
        </div>
      </div>
      <Table>
        <TableHeader className="bg-slate-50 dark:bg-slate-900/50">
          <TableRow>
            <TableHead>Reporter</TableHead>
            <TableHead>Request Date</TableHead>
            <TableHead>Method</TableHead>
            <TableHead className="text-right">Amount</TableHead>
            <TableHead>Status</TableHead>
            <TableHead className="text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {mockWithdrawalRequests.map((req) => (
            <TableRow key={req.id} className="hover:bg-muted/50">
              <TableCell>
                <div className="flex items-center gap-3">
                  <Avatar className="h-8 w-8">
                    <AvatarImage src={req.avatar} alt={req.reporterName} />
                    <AvatarFallback>{req.reporterName.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-medium text-sm">{req.reporterName}</div>
                    <div className="text-xs text-muted-foreground font-mono">{req.reporterId}</div>
                  </div>
                </div>
              </TableCell>
              <TableCell className="text-sm">
                {new Date(req.requestDate).toLocaleDateString()}
                <div className="text-xs text-muted-foreground">{new Date(req.requestDate).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</div>
              </TableCell>
              <TableCell className="text-sm text-muted-foreground">
                {req.method}
              </TableCell>
              <TableCell className="text-right font-medium">₹{req.amount.toLocaleString()}</TableCell>
              <TableCell>
                {getStatusBadge(req.status)}
              </TableCell>
              <TableCell className="text-right">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" className="h-8 w-8 p-0">
                      <span className="sr-only">Open menu</span>
                      <MoreHorizontal className="h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end" className="w-[180px]">
                    <DropdownMenuLabel>Process Request</DropdownMenuLabel>
                    
                    {req.status === "Pending" && (
                      <>
                        <DropdownMenuItem className="text-blue-600 dark:text-blue-400">
                          <Clock className="mr-2 h-4 w-4" /> Mark Processing
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem className="text-emerald-600 dark:text-emerald-400">
                          <CheckCircle className="mr-2 h-4 w-4" /> Approve
                        </DropdownMenuItem>
                        <DropdownMenuItem className="text-rose-600 dark:text-rose-400">
                          <XCircle className="mr-2 h-4 w-4" /> Reject
                        </DropdownMenuItem>
                      </>
                    )}
                    
                    {req.status === "Processing" && (
                      <DropdownMenuItem className="text-emerald-600 dark:text-emerald-400">
                        <CheckCircle2 className="mr-2 h-4 w-4" /> Mark Completed
                      </DropdownMenuItem>
                    )}

                    {(req.status === "Completed" || req.status === "Rejected") && (
                      <DropdownMenuItem disabled>
                         <CheckCircle2 className="mr-2 h-4 w-4" /> No actions available
                      </DropdownMenuItem>
                    )}
                  </DropdownMenuContent>
                </DropdownMenu>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}
