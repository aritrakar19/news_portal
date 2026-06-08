import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { mockSettingsActivity } from "../data/mockSettings"
import { History, UserCircle2 } from "lucide-react"
import { useTranslation } from "react-i18next"

export function SettingsActivityLog() {
  const { t } = useTranslation()
  return (
    <Card className="border shadow-sm h-full flex flex-col">
      <CardHeader className="pb-4 border-b border-border">
        <div className="flex items-center gap-2">
          <History className="h-5 w-5 text-blue-500" />
          <CardTitle className="text-lg">{t("admin.settings.activity.title", "Configuration Audit Log")}</CardTitle>
        </div>
        <CardDescription>{t("admin.settings.activity.subtitle", "Recent changes to platform settings")}</CardDescription>
      </CardHeader>
      <CardContent className="flex-1 p-0">
        <div className="divide-y divide-border">
          {mockSettingsActivity.map((log) => (
            <div key={log.id} className="p-4 hover:bg-slate-50 dark:hover:bg-slate-900/50 transition-colors">
              <p className="text-sm font-medium mb-1">{log.action}</p>
              <div className="flex items-center justify-between text-xs text-muted-foreground">
                <div className="flex items-center gap-1.5">
                  <UserCircle2 className="h-3.5 w-3.5" />
                  {log.user}
                </div>
                <span>{log.timestamp}</span>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
