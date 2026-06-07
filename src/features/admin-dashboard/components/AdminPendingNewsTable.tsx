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

const PENDING_NEWS = [
  { id: "NW-1042", headline: "Traffic severely impacted on Main Road due to construction", reporter: "Rahul Verma", category: "City News", time: "2 hours ago" },
  { id: "NW-1043", headline: "Local school wins national debate championship", reporter: "Priya Sharma", category: "Education", time: "3 hours ago" },
  { id: "NW-1044", headline: "Tech startup opens new office in tech park", reporter: "Amit Kumar", category: "Business", time: "5 hours ago" },
  { id: "NW-1045", headline: "Mayor announces new public park initiative", reporter: "Sneha Patil", category: "Politics", time: "6 hours ago" },
]

export function AdminPendingNewsTable() {
  return (
    <div className="bg-white dark:bg-card border border-border shadow-sm rounded-xl overflow-hidden flex flex-col h-full">
      <div className="p-6 border-b border-border bg-slate-50 dark:bg-slate-900/50 flex justify-between items-center">
        <h3 className="font-heading font-bold text-lg">Pending News Reviews</h3>
        <Badge variant="secondary" className="bg-amber-100 text-amber-800 hover:bg-amber-100 border-0">45 in queue</Badge>
      </div>
      <div className="flex-1 overflow-auto">
        <Table>
          <TableHeader>
            <TableRow className="bg-slate-50/50 dark:bg-slate-900/20 hover:bg-transparent">
              <TableHead className="w-[100px]">ID</TableHead>
              <TableHead>Headline</TableHead>
              <TableHead>Reporter</TableHead>
              <TableHead>Category</TableHead>
              <TableHead className="text-right">Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {PENDING_NEWS.map((news) => (
              <TableRow key={news.id}>
                <TableCell className="font-mono text-xs text-muted-foreground">{news.id}</TableCell>
                <TableCell className="font-medium text-sm max-w-[200px] truncate">{news.headline}</TableCell>
                <TableCell className="text-sm text-muted-foreground">{news.reporter}</TableCell>
                <TableCell>
                  <Badge variant="outline" className="text-xs font-normal">{news.category}</Badge>
                </TableCell>
                <TableCell className="text-right">
                  <Button size="sm" variant="default" className="bg-blue-600 hover:bg-blue-700 text-white h-8 text-xs">Review</Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  )
}
