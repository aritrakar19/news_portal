import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { useTranslation } from "react-i18next"

export function RecentNewsTable() {
  const { t } = useTranslation()

  const RECENT_STORIES = [
    { id: "NS-001", title: t("dashboard.news.title1", "Local Election Results Announced"), category: t("dashboard.news.catPolitics", "Politics"), date: t("dashboard.news.date1", "Today, 10:30 AM"), views: "4.2k", earnings: "₹450", status: t("dashboard.news.statusPublished", "Published") },
    { id: "NS-002", title: t("dashboard.news.title2", "City Council Approves New Budget"), category: t("dashboard.news.catPolitics", "Politics"), date: t("dashboard.news.date2", "Yesterday, 04:15 PM"), views: "1.8k", earnings: "₹200", status: t("dashboard.news.statusPublished", "Published") },
    { id: "NS-003", title: t("dashboard.news.title3", "Tech Startup Raises $5M in Seed Round"), category: t("dashboard.news.catBusiness", "Business"), date: t("dashboard.news.date3", "2 days ago"), views: "-", earnings: "-", status: t("dashboard.news.statusPending", "Pending Review") },
    { id: "NS-004", title: t("dashboard.news.title4", "Traffic Diverted on Main Street Due to Construction"), category: t("dashboard.news.catLocal", "Local"), date: t("dashboard.news.date4", "3 days ago"), views: "8.5k", earnings: "₹850", status: t("dashboard.news.statusPublished", "Published") },
    { id: "NS-005", title: t("dashboard.news.title5", "Annual Marathon Sees Record Participation"), category: t("dashboard.news.catSports", "Sports"), date: t("dashboard.news.date5", "4 days ago"), views: "-", earnings: "-", status: t("dashboard.news.statusRejected", "Rejected") },
  ]
  const getStatusBadge = (status: string) => {
    if (status === t("dashboard.news.statusPublished", "Published")) {
      return <Badge className="bg-green-100 text-green-700 hover:bg-green-200 border-green-200">{status}</Badge>
    } else if (status === t("dashboard.news.statusPending", "Pending Review")) {
      return <Badge className="bg-amber-100 text-amber-700 hover:bg-amber-200 border-amber-200">{status}</Badge>
    } else if (status === t("dashboard.news.statusRejected", "Rejected")) {
      return <Badge className="bg-red-100 text-red-700 hover:bg-red-200 border-red-200">{status}</Badge>
    } else {
      return <Badge>{status}</Badge>
    }
  }

  return (
    <div className="bg-white dark:bg-card border border-border shadow-sm rounded-xl overflow-hidden">
      <div className="p-6 border-b border-border flex items-center justify-between">
        <h3 className="font-heading font-bold text-lg">{t("dashboard.news.recentSubmissions", "Recent Submissions")}</h3>
        <a href="/reporter/stories" className="text-sm font-medium text-primary hover:underline">{t("dashboard.news.viewAll", "View All")}</a>
      </div>
      <div className="overflow-x-auto">
        <Table>
          <TableHeader className="bg-slate-50 dark:bg-slate-900/50">
            <TableRow>
              <TableHead>{t("dashboard.news.headline", "Headline")}</TableHead>
              <TableHead>{t("dashboard.news.category", "Category")}</TableHead>
              <TableHead>{t("dashboard.news.dateHeader", "Date")}</TableHead>
              <TableHead>{t("dashboard.news.status", "Status")}</TableHead>
              <TableHead className="text-right">{t("dashboard.news.views", "Views")}</TableHead>
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
