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
import { mockReporterEarnings } from "../data/mockFinance"
import { useTranslation } from "react-i18next"
import { MoreHorizontal, Eye, Settings2, PauseCircle, PlayCircle } from "lucide-react"

export function ReporterEarningsTable() {
  const { t } = useTranslation()

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "Active": return <Badge className="bg-emerald-100 text-emerald-800 hover:bg-emerald-100 dark:bg-emerald-900/30 dark:text-emerald-400">{t("admin.finance.table.statusActive", "Active")}</Badge>
      case "Hold": return <Badge className="bg-amber-100 text-amber-800 hover:bg-amber-100 dark:bg-amber-900/30 dark:text-amber-400">{t("admin.finance.table.statusHold", "On Hold")}</Badge>
      case "Suspended": return <Badge className="bg-rose-100 text-rose-800 hover:bg-rose-100 dark:bg-rose-900/30 dark:text-rose-400">{t("admin.finance.table.statusSuspended", "Suspended")}</Badge>
      default: return <Badge variant="secondary">{status}</Badge>
    }
  }

  return (
    <div className="bg-white dark:bg-card border border-border shadow-sm rounded-xl overflow-hidden">
      <div className="p-6 border-b border-border flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <h3 className="text-lg font-heading font-bold">{t("admin.finance.table.earningsTitle", "Reporter Earnings")}</h3>
        <Button variant="outline" size="sm">{t("admin.finance.table.exportData", "Export Data")}</Button>
      </div>
      <Table>
        <TableHeader className="bg-slate-50 dark:bg-slate-900/50">
          <TableRow>
            <TableHead>{t("admin.finance.table.reporter", "Reporter")}</TableHead>
            <TableHead className="text-right">{t("admin.finance.table.totalEarnings", "Total Earnings")}</TableHead>
            <TableHead className="text-right">{t("admin.finance.table.withdrawn", "Withdrawn")}</TableHead>
            <TableHead className="text-right text-emerald-600 dark:text-emerald-400">{t("admin.finance.table.available", "Available")}</TableHead>
            <TableHead>{t("admin.finance.table.status", "Status")}</TableHead>
            <TableHead className="text-right">{t("admin.finance.table.actions", "Actions")}</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {mockReporterEarnings.map((reporter) => (
            <TableRow key={reporter.id} className="hover:bg-muted/50">
              <TableCell>
                <div className="flex items-center gap-3">
                  <Avatar className="h-8 w-8">
                    <AvatarImage src={reporter.avatar} alt={reporter.name} />
                    <AvatarFallback>{reporter.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-medium text-sm">{reporter.name}</div>
                    <div className="text-xs text-muted-foreground font-mono">{reporter.id}</div>
                  </div>
                </div>
              </TableCell>
              <TableCell className="text-right font-medium">₹{reporter.totalEarnings.toLocaleString()}</TableCell>
              <TableCell className="text-right text-muted-foreground">₹{reporter.withdrawnAmount.toLocaleString()}</TableCell>
              <TableCell className="text-right font-bold text-emerald-600 dark:text-emerald-400">₹{reporter.availableBalance.toLocaleString()}</TableCell>
              <TableCell>
                {getStatusBadge(reporter.status)}
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
                    <DropdownMenuLabel>{t("admin.finance.table.actionsLabel", "Actions")}</DropdownMenuLabel>
                    <DropdownMenuItem>
                      <Eye className="mr-2 h-4 w-4" /> {t("admin.finance.table.viewDetails", "View Details")}
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <Settings2 className="mr-2 h-4 w-4" /> {t("admin.finance.table.adjustEarnings", "Adjust Earnings")}
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    {reporter.status !== "Hold" ? (
                      <DropdownMenuItem className="text-amber-600 dark:text-amber-400">
                        <PauseCircle className="mr-2 h-4 w-4" /> {t("admin.finance.table.holdPayment", "Hold Payment")}
                      </DropdownMenuItem>
                    ) : (
                      <DropdownMenuItem className="text-emerald-600 dark:text-emerald-400">
                        <PlayCircle className="mr-2 h-4 w-4" /> {t("admin.finance.table.releasePayment", "Release Payment")}
                      </DropdownMenuItem>
                    )}
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
