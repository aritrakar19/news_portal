import { Input } from "@/components/ui/input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import { Search, Filter, SlidersHorizontal } from "lucide-react"
import { useTranslation } from "react-i18next"

export function NewsFilters() {
  const { t } = useTranslation()

  return (
    <div className="flex flex-col md:flex-row gap-4 mb-6">
      <div className="relative flex-1">
        <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
        <Input
          placeholder={t("admin.news.filters.searchPlaceholder", "Search headlines, reporter names, or IDs...")}
          className="pl-9 bg-background"
        />
      </div>
      <div className="flex flex-wrap gap-2 md:gap-4">
        <Select defaultValue="all-status">
          <SelectTrigger className="w-[140px] bg-background">
            <SelectValue placeholder={t("admin.news.filters.status", "Status")} />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all-status">{t("admin.news.filters.allStatuses", "All Statuses")}</SelectItem>
            <SelectItem value="pending">{t("admin.news.filters.pending", "Pending Review")}</SelectItem>
            <SelectItem value="under-review">{t("admin.news.filters.underReview", "Under Review")}</SelectItem>
            <SelectItem value="approved">{t("admin.news.filters.approved", "Approved")}</SelectItem>
            <SelectItem value="published">{t("admin.news.filters.published", "Published")}</SelectItem>
            <SelectItem value="rejected">{t("admin.news.filters.rejected", "Rejected")}</SelectItem>
          </SelectContent>
        </Select>

        <Select defaultValue="all-category">
          <SelectTrigger className="w-[140px] bg-background">
            <SelectValue placeholder={t("admin.news.filters.category", "Category")} />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all-category">{t("admin.news.filters.allCategories", "All Categories")}</SelectItem>
            <SelectItem value="politics">{t("admin.news.filters.politics", "Politics")}</SelectItem>
            <SelectItem value="business">{t("admin.news.filters.business", "Business")}</SelectItem>
            <SelectItem value="tech">{t("admin.news.filters.tech", "Tech")}</SelectItem>
            <SelectItem value="breaking">{t("admin.news.filters.breaking", "Breaking")}</SelectItem>
          </SelectContent>
        </Select>

        <Button variant="outline" className="bg-background hidden sm:flex">
          <SlidersHorizontal className="mr-2 h-4 w-4" /> {t("admin.news.filters.dateRange", "Date Range")}
        </Button>

        <Button variant="outline" className="bg-background">
          <Filter className="mr-2 h-4 w-4" /> {t("admin.news.filters.more", "More")}
        </Button>
      </div>
    </div>
  )
}
