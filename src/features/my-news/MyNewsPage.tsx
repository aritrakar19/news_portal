import { useState } from "react"
import { Link } from "react-router-dom"
import { motion } from "framer-motion"
import { 
  FileText, 
  CheckCircle2, 
  Clock, 
  XCircle, 
  FileEdit,
  TrendingUp,
  Eye,
  BarChart3,
  Search,
  Filter,
  Edit,
  Copy,
  Trash2,
  Plus
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { useTranslation } from "react-i18next"

// Dummy Data
// Note: NEWS_DATA moved inside component

export function MyNewsPage() {
  const { t } = useTranslation()
  const [searchTerm, setSearchTerm] = useState("")

  const STATS = [
    { title: t("mynews.stats.total", "Total News"), value: "24", icon: FileText, color: "text-blue-500", bg: "bg-blue-500/10" },
    { title: t("mynews.stats.published", "Published"), value: "15", icon: CheckCircle2, color: "text-emerald-500", bg: "bg-emerald-500/10" },
    { title: t("mynews.stats.pending", "Pending"), value: "4", icon: Clock, color: "text-amber-500", bg: "bg-amber-500/10" },
    { title: t("mynews.stats.rejected", "Rejected"), value: "2", icon: XCircle, color: "text-red-500", bg: "bg-red-500/10" },
    { title: t("mynews.stats.drafts", "Drafts"), value: "3", icon: FileEdit, color: "text-slate-500", bg: "bg-slate-500/10" },
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case t("dashboard.news.statusPublished", "Published"): return "bg-emerald-100 text-emerald-700 dark:bg-emerald-500/20 dark:text-emerald-400 border-emerald-200"
      case t("dashboard.news.statusPending", "Pending Review"): return "bg-amber-100 text-amber-700 dark:bg-amber-500/20 dark:text-amber-400 border-amber-200"
      case t("dashboard.news.statusRejected", "Rejected"): return "bg-red-100 text-red-700 dark:bg-red-500/20 dark:text-red-400 border-red-200"
      case t("mynews.status.draft", "Draft"): return "bg-slate-100 text-slate-700 dark:bg-slate-500/20 dark:text-slate-400 border-slate-200"
      default: return "bg-slate-100 text-slate-700"
    }
  }

  const NEWS_DATA = [
    {
      id: "1",
      thumbnail: "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?auto=format&fit=crop&q=80&w=150&h=150",
      headline: t("mynews.data.headline1", "Global Markets Rally Amid Tech Sector Growth and Innovation"),
      category: t("dashboard.news.catBusiness", "Business"),
      views: "124K",
      status: t("dashboard.news.statusPublished", "Published"),
      date: "2023-10-24",
    },
    {
      id: "2",
      thumbnail: "https://images.unsplash.com/photo-1517430816045-df4b7de11d1d?auto=format&fit=crop&q=80&w=150&h=150",
      headline: t("mynews.data.headline2", "New AI Regulations Proposed by Tech Giants in Landmark Summit"),
      category: t("mynews.catTech", "Technology"),
      views: "89K",
      status: t("dashboard.news.statusPublished", "Published"),
      date: "2023-10-22",
    },
    {
      id: "3",
      thumbnail: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?auto=format&fit=crop&q=80&w=150&h=150",
      headline: t("dashboard.news.title2", "City Council Approves Funding for Downtown Revitalization"),
      category: t("mynews.catLocalNews", "Local News"),
      views: "0",
      status: t("dashboard.news.statusPending", "Pending Review"),
      date: "2023-10-26",
    },
    {
      id: "4",
      thumbnail: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=150&h=150",
      headline: t("mynews.data.headline4", "Breakthrough in Renewable Energy Storage Solutions"),
      category: t("mynews.catScience", "Science"),
      views: "0",
      status: t("mynews.status.draft", "Draft"),
      date: "2023-10-27",
    },
    {
      id: "5",
      thumbnail: "https://images.unsplash.com/photo-1498307833015-e7b400441eb8?auto=format&fit=crop&q=80&w=150&h=150",
      headline: t("mynews.data.headline5", "Opinion: Why Remote Work is the Future of Global Economy"),
      category: t("mynews.catOpinion", "Opinion"),
      views: "0",
      status: t("dashboard.news.statusRejected", "Rejected"),
      date: "2023-10-18",
    },
    {
      id: "6",
      thumbnail: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&q=80&w=150&h=150",
      headline: t("mynews.data.headline6", "Local Sports Team Reaches Finals After 10-Year Drought"),
      category: t("dashboard.news.catSports", "Sports"),
      views: "45K",
      status: t("dashboard.news.statusPublished", "Published"),
      date: "2023-10-20",
    },
    {
      id: "7",
      thumbnail: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&q=80&w=150&h=150",
      headline: t("mynews.data.headline7", "Major Medical Breakthrough Could Help Millions"),
      category: t("mynews.catHealth", "Health"),
      views: "0",
      status: t("dashboard.news.statusPending", "Pending Review"),
      date: "2023-10-25",
    },
  ]

  return (
    <div className="space-y-6 pb-10">
      {/* Header Section */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-3xl font-heading font-bold text-slate-900 dark:text-white">{t("mynews.title", "My News")}</h1>
          <p className="text-muted-foreground mt-1">{t("mynews.subtitle", "Manage and track the performance of your submitted stories.")}</p>
        </div>
        <Button asChild className="gap-2 shrink-0">
          <Link to="/reporter/upload">
            <Plus className="h-4 w-4" />
            {t("mynews.submitNew", "Submit New Story")}
          </Link>
        </Button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {STATS.map((stat, i) => (
          <motion.div
            key={stat.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
          >
            <Card className="border-none shadow-sm bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm hover:shadow-md transition-all">
              <CardContent className="p-5 flex items-center gap-4">
                <div className={`p-3 rounded-2xl ${stat.bg} ${stat.color}`}>
                  <stat.icon className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm font-medium text-muted-foreground">{stat.title}</p>
                  <p className="text-2xl font-bold font-heading">{stat.value}</p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          {/* Filters & Table Card */}
          <Card className="border-none shadow-sm overflow-hidden bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm">
            <CardHeader className="p-5 border-b border-border/50 space-y-0 pb-5">
              <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
                <CardTitle className="text-lg font-heading flex items-center gap-2">
                  <FileText className="h-5 w-5 text-primary" />
                  {t("mynews.allStories", "All Stories")}
                </CardTitle>
                
                {/* Filters */}
                <div className="flex w-full sm:w-auto items-center gap-2">
                  <div className="relative flex-1 sm:w-64">
                    <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                    <Input
                      placeholder={t("mynews.searchPlaceholder", "Search headline...")}
                      className="pl-9 bg-slate-100/50 dark:bg-slate-800/50 border-transparent focus-visible:bg-transparent"
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                    />
                  </div>
                  <Select defaultValue="all">
                    <SelectTrigger className="w-[130px] bg-slate-100/50 dark:bg-slate-800/50 border-transparent">
                      <div className="flex items-center gap-2">
                        <Filter className="h-3 w-3" />
                        <SelectValue placeholder={t("mynews.statusFilter", "Status")} />
                      </div>
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">{t("mynews.filterAll", "All Status")}</SelectItem>
                      <SelectItem value="published">{t("mynews.stats.published", "Published")}</SelectItem>
                      <SelectItem value="pending">{t("mynews.stats.pending", "Pending")}</SelectItem>
                      <SelectItem value="rejected">{t("mynews.stats.rejected", "Rejected")}</SelectItem>
                      <SelectItem value="draft">{t("mynews.stats.drafts", "Drafts")}</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </CardHeader>
            <CardContent className="p-0">
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow className="bg-slate-50/50 dark:bg-slate-800/20 hover:bg-transparent border-border/50">
                      <TableHead className="w-[80px]">{t("mynews.table.media", "Media")}</TableHead>
                      <TableHead className="min-w-[300px]">{t("dashboard.news.headline", "Headline")}</TableHead>
                      <TableHead>{t("dashboard.news.category", "Category")}</TableHead>
                      <TableHead>{t("dashboard.news.views", "Views")}</TableHead>
                      <TableHead>{t("dashboard.news.status", "Status")}</TableHead>
                      <TableHead>{t("dashboard.news.dateHeader", "Date")}</TableHead>
                      <TableHead className="text-right">{t("mynews.table.actions", "Actions")}</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {NEWS_DATA.map((news) => (
                      <TableRow key={news.id} className="border-border/50 hover:bg-slate-50/50 dark:hover:bg-slate-800/50 transition-colors">
                        <TableCell>
                          <div className="h-12 w-16 rounded-md overflow-hidden bg-slate-100 dark:bg-slate-800 border border-border">
                            <img src={news.thumbnail} alt="" className="h-full w-full object-cover" width={800} height={400} onError={(e) => { e.currentTarget.src = 'https://images.unsplash.com/photo-1585829365295-ab7cd400c167?q=80&w=800&auto=format&fit=crop'; e.currentTarget.onerror = null; }} />
                          </div>
                        </TableCell>
                        <TableCell>
                          <p className="font-medium text-sm leading-tight text-slate-900 dark:text-slate-100 line-clamp-2">
                            {news.headline}
                          </p>
                        </TableCell>
                        <TableCell>
                          <span className="text-xs font-medium px-2 py-1 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 rounded-md whitespace-nowrap">
                            {news.category}
                          </span>
                        </TableCell>
                        <TableCell>
                          <div className="flex items-center gap-1.5 text-sm text-slate-600 dark:text-slate-400">
                            <Eye className="h-3.5 w-3.5" />
                            {news.views}
                          </div>
                        </TableCell>
                        <TableCell>
                          <Badge variant="outline" className={`font-medium ${getStatusColor(news.status)}`}>
                            {news.status}
                          </Badge>
                        </TableCell>
                        <TableCell className="text-sm text-muted-foreground whitespace-nowrap">
                          {news.date}
                        </TableCell>
                        <TableCell className="text-right">
                          <div className="flex items-center justify-end gap-1">
                            <Button variant="ghost" size="icon" className="h-8 w-8 text-slate-500 hover:text-primary">
                              <Eye className="h-4 w-4" />
                            </Button>
                            <Button variant="ghost" size="icon" className="h-8 w-8 text-slate-500 hover:text-blue-500">
                              <Edit className="h-4 w-4" />
                            </Button>
                            <Button variant="ghost" size="icon" className="h-8 w-8 text-slate-500 hover:text-amber-500">
                              <Copy className="h-4 w-4" />
                            </Button>
                            <Button variant="ghost" size="icon" className="h-8 w-8 text-slate-500 hover:text-red-500">
                              <Trash2 className="h-4 w-4" />
                            </Button>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
              
              {/* Pagination */}
              <div className="p-4 border-t border-border/50 flex items-center justify-between text-sm text-muted-foreground">
                <div>{t("mynews.showingEntries", "Showing 1 to 7 of 24 entries")}</div>
                <div className="flex items-center gap-1">
                  <Button variant="outline" size="sm" disabled>{t("mynews.pagination.prev", "Previous")}</Button>
                  <Button variant="outline" size="sm" className="bg-primary text-primary-foreground">1</Button>
                  <Button variant="outline" size="sm">2</Button>
                  <Button variant="outline" size="sm">3</Button>
                  <Button variant="outline" size="sm">{t("mynews.pagination.next", "Next")}</Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Right Sidebar - Recent Performance */}
        <div className="space-y-6">
          <Card className="border-none shadow-sm bg-gradient-to-br from-primary/5 to-primary/10 dark:from-primary/10 dark:to-primary/5 backdrop-blur-sm">
            <CardHeader className="pb-3">
              <CardTitle className="text-lg font-heading flex items-center gap-2">
                <TrendingUp className="h-5 w-5 text-primary" />
                {t("mynews.performance.title", "Performance Overview")}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="bg-white/60 dark:bg-slate-900/60 p-4 rounded-xl border border-border/50">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-muted-foreground">{t("mynews.performance.totalViews", "Total Monthly Views")}</span>
                  <BarChart3 className="h-4 w-4 text-blue-500" />
                </div>
                <div className="text-2xl font-bold font-heading">258.4K</div>
                <div className="text-xs text-emerald-500 flex items-center gap-1 mt-1">
                  <TrendingUp className="h-3 w-3" />
                  {t("mynews.performance.growth", "+12.5% from last month")}
                </div>
              </div>

              <div className="bg-white/60 dark:bg-slate-900/60 p-4 rounded-xl border border-border/50">
                <div className="text-sm font-medium text-muted-foreground mb-3">{t("mynews.performance.trending", "Trending Story")}</div>
                <div className="flex gap-3">
                  <img src={NEWS_DATA[0].thumbnail} alt="" className="h-full w-full h-12 w-12 rounded-lg object-cover" width={800} height={400} onError={(e) => { e.currentTarget.src = 'https://images.unsplash.com/photo-1585829365295-ab7cd400c167?q=80&w=800&auto=format&fit=crop'; e.currentTarget.onerror = null; }} />
                  <div>
                    <p className="font-medium text-sm leading-tight line-clamp-2">
                      {NEWS_DATA[0].headline}
                    </p>
                    <div className="flex items-center gap-1 text-xs text-muted-foreground mt-1">
                      <Eye className="h-3 w-3" /> {t("mynews.viewsFormat", "{{views}} views", { views: "124K" })}
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white/60 dark:bg-slate-900/60 p-4 rounded-xl border border-border/50">
                <div className="text-sm font-medium text-muted-foreground mb-3">{t("mynews.performance.mostEngaged", "Most Engaged Story")}</div>
                <div className="flex gap-3">
                  <img src={NEWS_DATA[1].thumbnail} alt="" className="h-full w-full h-12 w-12 rounded-lg object-cover" width={800} height={400} onError={(e) => { e.currentTarget.src = 'https://images.unsplash.com/photo-1585829365295-ab7cd400c167?q=80&w=800&auto=format&fit=crop'; e.currentTarget.onerror = null; }} />
                  <div>
                    <p className="font-medium text-sm leading-tight line-clamp-2">
                      {NEWS_DATA[1].headline}
                    </p>
                    <div className="flex items-center gap-1 text-xs text-muted-foreground mt-1">
                      <Eye className="h-3 w-3" /> {t("mynews.viewsFormat", "{{views}} views", { views: "89K" })}
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
