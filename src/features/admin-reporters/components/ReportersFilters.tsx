import { Input } from "@/components/ui/input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import { Search, Filter, Download } from "lucide-react"
import { useTranslation } from "react-i18next"

export function ReportersFilters() {
  const { t } = useTranslation()

  return (
    <div className="flex flex-col md:flex-row gap-4 mb-6">
      <div className="relative flex-1">
        <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
        <Input
          placeholder={t("admin.reporters.filters.searchPlaceholder", "Search by name, ID, mobile, or Aadhaar...")}
          className="pl-9 bg-background"
        />
      </div>
      <div className="flex flex-wrap gap-2 md:gap-4">
        <Select defaultValue="all">
          <SelectTrigger className="w-[140px] bg-background">
            <SelectValue placeholder={t("admin.reporters.filters.status", "Status")} />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">{t("admin.reporters.filters.allStatuses", "All Statuses")}</SelectItem>
            <SelectItem value="active">{t("admin.reporters.filters.active", "Active")}</SelectItem>
            <SelectItem value="pending">{t("admin.reporters.filters.pending", "Pending")}</SelectItem>
            <SelectItem value="suspended">{t("admin.reporters.filters.suspended", "Suspended")}</SelectItem>
            <SelectItem value="expired">{t("admin.reporters.filters.expired", "Expired")}</SelectItem>
          </SelectContent>
        </Select>

        <Select defaultValue="all">
          <SelectTrigger className="w-[140px] bg-background">
            <SelectValue placeholder={t("admin.reporters.filters.state", "State")} />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">{t("admin.reporters.filters.allStates", "All States")}</SelectItem>
            <SelectItem value="maharashtra">Maharashtra</SelectItem>
            <SelectItem value="gujarat">Gujarat</SelectItem>
            <SelectItem value="up">Uttar Pradesh</SelectItem>
            <SelectItem value="kerala">Kerala</SelectItem>
          </SelectContent>
        </Select>

        <Button variant="outline" className="bg-background">
          <Filter className="mr-2 h-4 w-4" /> {t("admin.reporters.filters.moreFilters", "More Filters")}
        </Button>
        <Button variant="outline" className="bg-background">
          <Download className="mr-2 h-4 w-4" /> {t("admin.reporters.filters.exportCsv", "Export CSV")}
        </Button>
      </div>
    </div>
  )
}
