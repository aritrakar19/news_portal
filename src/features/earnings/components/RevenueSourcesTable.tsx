import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { useTranslation } from "react-i18next"

export function RevenueSourcesTable() {
  const { t } = useTranslation()

  const REVENUE_BREAKDOWN = [
    { source: t("earnings.breakdown.video", "Video Reports"), views: "142k", articles: 12, revenue: "₹12,800", percentage: "28%" },
    { source: t("earnings.breakdown.local", "Local News Articles"), views: "380k", articles: 45, revenue: "₹24,200", percentage: "53%" },
    { breaking: true, source: t("earnings.breakdown.breaking", "Breaking News Coverage"), views: "85k", articles: 3, revenue: "₹4,200", percentage: "9%" },
    { source: t("earnings.breakdown.referral", "Referral Program"), views: "-", articles: "-", revenue: "₹4,000", percentage: "10%" },
  ]

  return (
    <div className="bg-white dark:bg-card border border-border shadow-sm rounded-xl overflow-hidden">
      <div className="p-6 border-b border-border bg-slate-50 dark:bg-slate-900/50">
        <h3 className="font-heading font-bold text-lg">{t("earnings.breakdown.title", "Revenue by Source")}</h3>
      </div>
      <Table>
        <TableHeader>
          <TableRow className="bg-slate-50/50 dark:bg-slate-900/20 hover:bg-transparent">
            <TableHead>{t("earnings.breakdown.colSource", "Source Type")}</TableHead>
            <TableHead className="text-right">{t("earnings.breakdown.colViews", "Total Views")}</TableHead>
            <TableHead className="text-right">{t("earnings.breakdown.colItems", "Items Published")}</TableHead>
            <TableHead className="text-right">{t("earnings.breakdown.colRev", "Revenue")}</TableHead>
            <TableHead className="text-right">{t("earnings.breakdown.colPercent", "% of Total")}</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {REVENUE_BREAKDOWN.map((item, idx) => (
            <TableRow key={idx}>
              <TableCell className="font-medium text-sm">
                {item.source}
                {item.breaking && <span className="ml-2 inline-flex items-center px-2 py-0.5 rounded text-[10px] font-bold bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400 uppercase tracking-wider">{t("earnings.breakdown.highCpm", "High CPM")}</span>}
              </TableCell>
              <TableCell className="text-right text-muted-foreground">{item.views}</TableCell>
              <TableCell className="text-right text-muted-foreground">{item.articles}</TableCell>
              <TableCell className="text-right font-bold text-slate-900 dark:text-slate-100">{item.revenue}</TableCell>
              <TableCell className="text-right text-muted-foreground">{item.percentage}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}
