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
import { MoreHorizontal, Eye, Edit, PauseCircle, PlayCircle, Trash2 } from "lucide-react"
import { mockCampaigns } from "../data/mockAds"
import { useTranslation } from "react-i18next"

export function CampaignsTable() {
  const { t } = useTranslation()

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "Active": return <Badge className="bg-emerald-100 text-emerald-800 hover:bg-emerald-100 dark:bg-emerald-900/30 dark:text-emerald-400">{t("admin.ads.table.statusActive", "Active")}</Badge>
      case "Scheduled": return <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-100 dark:bg-blue-900/30 dark:text-blue-400">{t("admin.ads.table.statusScheduled", "Scheduled")}</Badge>
      case "Paused": return <Badge className="bg-amber-100 text-amber-800 hover:bg-amber-100 dark:bg-amber-900/30 dark:text-amber-400">{t("admin.ads.table.statusPaused", "Paused")}</Badge>
      case "Expired": return <Badge className="bg-slate-100 text-slate-800 hover:bg-slate-100 dark:bg-slate-800 dark:text-slate-400">{t("admin.ads.table.statusExpired", "Expired")}</Badge>
      case "Draft": return <Badge variant="outline">{t("admin.ads.table.statusDraft", "Draft")}</Badge>
      default: return <Badge variant="secondary">{status}</Badge>
    }
  }

  return (
    <div className="bg-white dark:bg-card border border-border shadow-sm rounded-xl overflow-hidden">
      <div className="p-6 border-b border-border flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <h3 className="text-lg font-heading font-bold">{t("admin.ads.table.allCampaigns", "All Campaigns")}</h3>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm">{t("admin.ads.table.filter", "Filter")}</Button>
          <Button variant="outline" size="sm">{t("admin.ads.table.export", "Export")}</Button>
        </div>
      </div>
      <Table>
        <TableHeader className="bg-slate-50 dark:bg-slate-900/50">
          <TableRow>
            <TableHead>{t("admin.ads.table.campaignName", "Campaign Name")}</TableHead>
            <TableHead>{t("admin.ads.table.typePlacement", "Type & Placement")}</TableHead>
            <TableHead>{t("admin.ads.table.timeline", "Timeline")}</TableHead>
            <TableHead className="text-right">{t("admin.ads.table.budget", "Budget")}</TableHead>
            <TableHead className="text-right">{t("admin.ads.table.performance", "Performance")}</TableHead>
            <TableHead>{t("admin.ads.table.status", "Status")}</TableHead>
            <TableHead className="text-right">{t("admin.ads.table.actions", "Actions")}</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {mockCampaigns.map((campaign) => (
            <TableRow key={campaign.id} className="hover:bg-muted/50">
              <TableCell>
                <div className="font-medium text-sm">{campaign.name}</div>
                <div className="text-xs text-muted-foreground">{campaign.advertiser}</div>
                <div className="text-xs text-muted-foreground font-mono mt-0.5">{campaign.id}</div>
              </TableCell>
              <TableCell>
                <div className="text-sm">{campaign.type}</div>
                <Badge variant="secondary" className="mt-1 font-normal text-xs">{campaign.placement}</Badge>
              </TableCell>
              <TableCell>
                <div className="text-sm">{new Date(campaign.startDate).toLocaleDateString()}</div>
                <div className="text-xs text-muted-foreground">{t("admin.ads.table.to", "to")} {new Date(campaign.endDate).toLocaleDateString()}</div>
              </TableCell>
              <TableCell className="text-right font-medium">₹{campaign.budget.toLocaleString()}</TableCell>
              <TableCell className="text-right">
                <div className="text-sm">{campaign.impressions.toLocaleString()} {t("admin.ads.table.views", "views")}</div>
                <div className="text-xs text-muted-foreground">{campaign.clicks.toLocaleString()} {t("admin.ads.table.clicks", "clicks")}</div>
              </TableCell>
              <TableCell>
                {getStatusBadge(campaign.status)}
              </TableCell>
              <TableCell className="text-right">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" className="h-8 w-8 p-0">
                      <span className="sr-only">Open menu</span>
                      <MoreHorizontal className="h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end" className="w-[160px]">
                    <DropdownMenuLabel>{t("admin.ads.table.actionsLabel", "Actions")}</DropdownMenuLabel>
                    <DropdownMenuItem>
                      <Eye className="mr-2 h-4 w-4" /> {t("admin.ads.table.viewDetails", "View Details")}
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <Edit className="mr-2 h-4 w-4" /> {t("admin.ads.table.editCampaign", "Edit Campaign")}
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    {campaign.status === "Active" && (
                      <DropdownMenuItem className="text-amber-600 dark:text-amber-400">
                        <PauseCircle className="mr-2 h-4 w-4" /> {t("admin.ads.table.pauseCampaign", "Pause Campaign")}
                      </DropdownMenuItem>
                    )}
                    {(campaign.status === "Paused" || campaign.status === "Scheduled") && (
                      <DropdownMenuItem className="text-emerald-600 dark:text-emerald-400">
                        <PlayCircle className="mr-2 h-4 w-4" /> {t("admin.ads.table.resumeCampaign", "Resume Campaign")}
                      </DropdownMenuItem>
                    )}
                    <DropdownMenuSeparator />
                    <DropdownMenuItem className="text-rose-600 dark:text-rose-400">
                      <Trash2 className="mr-2 h-4 w-4" /> {t("admin.ads.table.delete", "Delete")}
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}
