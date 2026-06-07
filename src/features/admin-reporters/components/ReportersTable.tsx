import type { Reporter } from "../data/mockReporters"
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
import { MoreHorizontal, Eye, CheckCircle, XCircle, Download, Ban } from "lucide-react"

interface ReportersTableProps {
  reporters: Reporter[]
  onViewProfile: (reporter: Reporter) => void
}

export function ReportersTable({ reporters, onViewProfile }: ReportersTableProps) {
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
    <div className="rounded-md border bg-card">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Profile</TableHead>
            <TableHead>Reporter Info</TableHead>
            <TableHead>Location</TableHead>
            <TableHead>Registration</TableHead>
            <TableHead>Press ID</TableHead>
            <TableHead>Status</TableHead>
            <TableHead className="text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {reporters.length === 0 ? (
            <TableRow>
              <TableCell colSpan={7} className="text-center h-24 text-muted-foreground">
                No reporters found.
              </TableCell>
            </TableRow>
          ) : (
            reporters.map((reporter) => (
              <TableRow key={reporter.id} className="hover:bg-muted/50 cursor-pointer" onClick={() => onViewProfile(reporter)}>
                <TableCell>
                  <Avatar>
                    <AvatarImage src={reporter.photo} alt={reporter.name} />
                    <AvatarFallback>{reporter.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                </TableCell>
                <TableCell>
                  <div className="font-medium text-foreground">{reporter.name}</div>
                  <div className="text-xs text-muted-foreground font-mono">{reporter.id}</div>
                  <div className="text-xs text-muted-foreground">{reporter.mobile}</div>
                </TableCell>
                <TableCell>
                  <div className="text-sm">{reporter.district}</div>
                  <div className="text-xs text-muted-foreground">{reporter.state}</div>
                </TableCell>
                <TableCell>
                  <div className="text-sm">{new Date(reporter.registrationDate).toLocaleDateString()}</div>
                </TableCell>
                <TableCell>
                  <Badge variant="secondary" className={getStatusColor(reporter.pressIdStatus)}>
                    {reporter.pressIdStatus}
                  </Badge>
                </TableCell>
                <TableCell>
                  <Badge variant="secondary" className={getStatusColor(reporter.accountStatus)}>
                    {reporter.accountStatus}
                  </Badge>
                </TableCell>
                <TableCell className="text-right" onClick={(e) => e.stopPropagation()}>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" className="h-8 w-8 p-0">
                        <span className="sr-only">Open menu</span>
                        <MoreHorizontal className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end" className="w-[160px]">
                      <DropdownMenuLabel>Actions</DropdownMenuLabel>
                      <DropdownMenuItem onClick={() => onViewProfile(reporter)}>
                        <Eye className="mr-2 h-4 w-4" /> View Profile
                      </DropdownMenuItem>
                      <DropdownMenuSeparator />
                      {reporter.accountStatus === "Pending Approval" && (
                        <>
                          <DropdownMenuItem className="text-emerald-600 dark:text-emerald-400">
                            <CheckCircle className="mr-2 h-4 w-4" /> Approve
                          </DropdownMenuItem>
                          <DropdownMenuItem className="text-rose-600 dark:text-rose-400">
                            <XCircle className="mr-2 h-4 w-4" /> Reject
                          </DropdownMenuItem>
                        </>
                      )}
                      {reporter.accountStatus === "Active" && (
                        <>
                          <DropdownMenuItem>
                            <Download className="mr-2 h-4 w-4" /> DL Press ID
                          </DropdownMenuItem>
                          <DropdownMenuItem className="text-rose-600 dark:text-rose-400">
                            <Ban className="mr-2 h-4 w-4" /> Suspend
                          </DropdownMenuItem>
                        </>
                      )}
                      {reporter.accountStatus === "Suspended" && (
                        <DropdownMenuItem className="text-emerald-600 dark:text-emerald-400">
                          <CheckCircle className="mr-2 h-4 w-4" /> Reactivate
                        </DropdownMenuItem>
                      )}
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
            ))
          )}
        </TableBody>
      </Table>
    </div>
  )
}
