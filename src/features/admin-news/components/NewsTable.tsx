import type { NewsStory } from "../data/mockNews"
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
import { MoreHorizontal, Eye, Edit, CheckCircle, XCircle, FileWarning, Send } from "lucide-react"
import { useTranslation } from "react-i18next"

interface NewsTableProps {
  news: NewsStory[]
  onViewStory: (story: NewsStory) => void
}

export function NewsTable({ news, onViewStory }: NewsTableProps) {
  const { t } = useTranslation()

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "Published": return <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-100 dark:bg-blue-900/30 dark:text-blue-400">Published</Badge>
      case "Approved": return <Badge className="bg-emerald-100 text-emerald-800 hover:bg-emerald-100 dark:bg-emerald-900/30 dark:text-emerald-400">Approved</Badge>
      case "Pending Review": return <Badge className="bg-amber-100 text-amber-800 hover:bg-amber-100 dark:bg-amber-900/30 dark:text-amber-400">Pending Review</Badge>
      case "Under Review": return <Badge className="bg-purple-100 text-purple-800 hover:bg-purple-100 dark:bg-purple-900/30 dark:text-purple-400">Under Review</Badge>
      case "Rejected": return <Badge className="bg-rose-100 text-rose-800 hover:bg-rose-100 dark:bg-rose-900/30 dark:text-rose-400">Rejected</Badge>
      default: return <Badge variant="secondary">{status}</Badge>
    }
  }

  const getPriorityIndicator = (priority: string) => {
    if (priority === "Breaking News") return <span className="flex h-2 w-2 rounded-full bg-rose-500 animate-pulse" title="Breaking News" />
    if (priority === "Important") return <span className="flex h-2 w-2 rounded-full bg-amber-500" title="Important" />
    return <span className="flex h-2 w-2 rounded-full bg-transparent" />
  }

  return (
    <div className="rounded-md border bg-card">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[10px]"></TableHead>
            <TableHead>{t("admin.news.table.story", "Story")}</TableHead>
            <TableHead>{t("admin.news.table.reporter", "Reporter")}</TableHead>
            <TableHead>{t("admin.news.table.category", "Category")}</TableHead>
            <TableHead>{t("admin.news.table.location", "Location")}</TableHead>
            <TableHead>{t("admin.news.table.date", "Date")}</TableHead>
            <TableHead>{t("admin.news.table.status", "Status")}</TableHead>
            <TableHead className="text-right">{t("admin.news.table.actions", "Actions")}</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {news.length === 0 ? (
            <TableRow>
              <TableCell colSpan={8} className="text-center h-24 text-muted-foreground">
                {t("admin.news.table.noStories", "No stories found.")}
              </TableCell>
            </TableRow>
          ) : (
            news.map((story) => (
              <TableRow key={story.id} className="hover:bg-muted/50 cursor-pointer" onClick={() => onViewStory(story)}>
                <TableCell className="pr-0">
                  {getPriorityIndicator(story.priority)}
                </TableCell>
                <TableCell className="max-w-[300px]">
                  <div className="flex items-center gap-3">
                    <img src={story.thumbnail} alt="thumb" className="h-full w-full h-10 w-16 object-cover rounded shadow-sm border" width={800} height={400} onError={(e) => { e.currentTarget.src = 'https://images.unsplash.com/photo-1585829365295-ab7cd400c167?q=80&w=800&auto=format&fit=crop'; e.currentTarget.onerror = null; }} />
                    <div>
                      <div className="font-medium text-foreground truncate">{story.headline}</div>
                      <div className="text-xs text-muted-foreground font-mono">{story.id}</div>
                    </div>
                  </div>
                </TableCell>
                <TableCell>
                  <div className="flex items-center gap-2">
                    <Avatar className="h-6 w-6">
                      <AvatarImage src={story.reporter.avatar} alt={story.reporter.name} />
                      <AvatarFallback>{story.reporter.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <div className="text-sm">{story.reporter.name}</div>
                  </div>
                </TableCell>
                <TableCell>
                  <Badge variant="outline">{story.category}</Badge>
                </TableCell>
                <TableCell>
                  <div className="text-sm">{story.district}</div>
                  <div className="text-xs text-muted-foreground">{story.state}</div>
                </TableCell>
                <TableCell>
                  <div className="text-sm">{new Date(story.submissionDate).toLocaleDateString()}</div>
                </TableCell>
                <TableCell>
                  {getStatusBadge(story.status)}
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
                      <DropdownMenuLabel>{t("admin.news.table.actions", "Actions")}</DropdownMenuLabel>
                      <DropdownMenuItem onClick={() => onViewStory(story)}>
                        <Eye className="mr-2 h-4 w-4" /> {t("admin.news.table.viewDetails", "View Details")}
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <Edit className="mr-2 h-4 w-4" /> {t("admin.news.table.editContent", "Edit Content")}
                      </DropdownMenuItem>
                      <DropdownMenuSeparator />
                      {story.status !== "Approved" && story.status !== "Published" && (
                        <DropdownMenuItem className="text-emerald-600 dark:text-emerald-400">
                          <CheckCircle className="mr-2 h-4 w-4" /> {t("admin.news.table.approve", "Approve")}
                        </DropdownMenuItem>
                      )}
                      {story.status === "Approved" && (
                        <DropdownMenuItem className="text-blue-600 dark:text-blue-400">
                          <Send className="mr-2 h-4 w-4" /> {t("admin.news.table.publishNow", "Publish Now")}
                        </DropdownMenuItem>
                      )}
                      {story.status !== "Rejected" && (
                        <DropdownMenuItem className="text-rose-600 dark:text-rose-400">
                          <XCircle className="mr-2 h-4 w-4" /> {t("admin.news.table.reject", "Reject")}
                        </DropdownMenuItem>
                      )}
                      <DropdownMenuItem className="text-amber-600 dark:text-amber-400">
                        <FileWarning className="mr-2 h-4 w-4" /> {t("admin.news.table.requestChanges", "Request Changes")}
                      </DropdownMenuItem>
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
