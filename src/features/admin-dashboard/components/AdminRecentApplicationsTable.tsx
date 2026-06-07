import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

const APPLICATIONS = [
  { id: "APP-0891", name: "Suresh Gupta", state: "Maharashtra", district: "Mumbai", date: "2 hours ago" },
  { id: "APP-0892", name: "Anita Desai", state: "Gujarat", district: "Ahmedabad", date: "4 hours ago" },
  { id: "APP-0893", name: "Manoj Tiwari", state: "Uttar Pradesh", district: "Lucknow", date: "5 hours ago" },
  { id: "APP-0894", name: "Kiran Reddy", state: "Telangana", district: "Hyderabad", date: "Yesterday" },
]

export function AdminRecentApplicationsTable() {
  return (
    <div className="bg-white dark:bg-card border border-border shadow-sm rounded-xl overflow-hidden h-full flex flex-col">
      <div className="p-6 border-b border-border bg-slate-50 dark:bg-slate-900/50 flex justify-between items-center">
        <h3 className="font-heading font-bold text-lg">Recent Applications</h3>
        <Badge variant="secondary" className="bg-blue-100 text-blue-800 hover:bg-blue-100 border-0">12 pending</Badge>
      </div>
      <div className="flex-1 overflow-auto">
        <Table>
          <TableHeader>
            <TableRow className="bg-slate-50/50 dark:bg-slate-900/20 hover:bg-transparent">
              <TableHead>Applicant</TableHead>
              <TableHead>Location</TableHead>
              <TableHead>Applied On</TableHead>
              <TableHead className="text-right">Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {APPLICATIONS.map((app) => (
              <TableRow key={app.id}>
                <TableCell>
                  <div className="font-medium text-sm">{app.name}</div>
                  <div className="font-mono text-xs text-muted-foreground mt-0.5">{app.id}</div>
                </TableCell>
                <TableCell>
                  <div className="text-sm">{app.district}</div>
                  <div className="text-xs text-muted-foreground mt-0.5">{app.state}</div>
                </TableCell>
                <TableCell className="text-sm text-muted-foreground">{app.date}</TableCell>
                <TableCell className="text-right space-x-2">
                  <Button size="sm" variant="outline" className="h-8 text-xs border-emerald-200 text-emerald-700 hover:bg-emerald-50 dark:border-emerald-900 dark:text-emerald-400 dark:hover:bg-emerald-900/30">Approve</Button>
                  <Button size="sm" variant="ghost" className="h-8 text-xs text-slate-500 hover:text-slate-900 dark:hover:text-white">View</Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  )
}
