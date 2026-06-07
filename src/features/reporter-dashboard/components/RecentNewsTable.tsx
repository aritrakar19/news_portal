import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"

const RECENT_STORIES = [
  { id: "NS-001", title: "Local Election Results Announced", category: "Politics", date: "Today, 10:30 AM", views: "4.2k", earnings: "₹450", status: "Published" },
  { id: "NS-002", title: "City Council Approves New Budget", category: "Politics", date: "Yesterday, 04:15 PM", views: "1.8k", earnings: "₹200", status: "Published" },
  { id: "NS-003", title: "Tech Startup Raises $5M in Seed Round", category: "Business", date: "2 days ago", views: "-", earnings: "-", status: "Pending Review" },
  { id: "NS-004", title: "Traffic Diverted on Main Street Due to Construction", category: "Local", date: "3 days ago", views: "8.5k", earnings: "₹850", status: "Published" },
  { id: "NS-005", title: "Annual Marathon Sees Record Participation", category: "Sports", date: "4 days ago", views: "-", earnings: "-", status: "Rejected" },
]

export function RecentNewsTable() {
  const getStatusBadge = (status: string) => {
    switch (status) {
      case "Published":
        return <Badge className="bg-green-100 text-green-700 hover:bg-green-200 border-green-200">Published</Badge>
      case "Pending Review":
        return <Badge className="bg-amber-100 text-amber-700 hover:bg-amber-200 border-amber-200">Pending Review</Badge>
      case "Rejected":
        return <Badge className="bg-red-100 text-red-700 hover:bg-red-200 border-red-200">Rejected</Badge>
      default:
        return <Badge>{status}</Badge>
    }
  }

  return (
    <div className="bg-white dark:bg-card border border-border shadow-sm rounded-xl overflow-hidden">
      <div className="p-6 border-b border-border flex items-center justify-between">
        <h3 className="font-heading font-bold text-lg">Recent Submissions</h3>
        <a href="/reporter/stories" className="text-sm font-medium text-primary hover:underline">View All</a>
      </div>
      <div className="overflow-x-auto">
        <Table>
          <TableHeader className="bg-slate-50 dark:bg-slate-900/50">
            <TableRow>
              <TableHead>Headline</TableHead>
              <TableHead>Category</TableHead>
              <TableHead>Date</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="text-right">Views</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {RECENT_STORIES.map((story) => (
              <TableRow key={story.id}>
                <TableCell className="font-semibold">{story.title}</TableCell>
                <TableCell><Badge variant="outline" className="text-xs font-normal">{story.category}</Badge></TableCell>
                <TableCell className="text-muted-foreground text-sm">{story.date}</TableCell>
                <TableCell>{getStatusBadge(story.status)}</TableCell>
                <TableCell className="text-right font-medium">{story.views}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  )
}
