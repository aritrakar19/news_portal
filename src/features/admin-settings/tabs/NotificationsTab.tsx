import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Switch } from "@/components/ui/switch"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { mockSystemConfig } from "../data/mockSettings"
import { Bell, Mail, Smartphone } from "lucide-react"
import { useTranslation } from "react-i18next"

export function NotificationsTab() {
  const { t } = useTranslation()
  const { notifications } = mockSystemConfig

  return (
    <div className="space-y-6 max-w-4xl">
      <Card className="border shadow-sm">
        <CardHeader>
          <CardTitle>{t("admin.settings.notifications.globalChannels", "Global Channels")}</CardTitle>
          <CardDescription>{t("admin.settings.notifications.globalChannelsDesc", "Enable or disable communication channels platform-wide.")}</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="flex items-center justify-between">
            <div className="space-y-0.5 flex items-center gap-3">
              <div className="p-2 rounded-full bg-slate-100 dark:bg-slate-800">
                <Mail className="h-4 w-4 text-slate-600 dark:text-slate-400" />
              </div>
              <div>
                <p className="text-base font-medium leading-none">{t("admin.settings.notifications.email", "Email Notifications")}</p>
                <p className="text-sm text-muted-foreground mt-1">{t("admin.settings.notifications.emailDesc", "Send transactional and promotional emails.")}</p>
              </div>
            </div>
            <Switch defaultChecked={notifications.email} />
          </div>
          
          <div className="flex items-center justify-between">
            <div className="space-y-0.5 flex items-center gap-3">
              <div className="p-2 rounded-full bg-slate-100 dark:bg-slate-800">
                <Smartphone className="h-4 w-4 text-slate-600 dark:text-slate-400" />
              </div>
              <div>
                <p className="text-base font-medium leading-none">{t("admin.settings.notifications.sms", "SMS Notifications")}</p>
                <p className="text-sm text-muted-foreground mt-1">{t("admin.settings.notifications.smsDesc", "Send critical OTPs and transaction alerts via SMS.")}</p>
              </div>
            </div>
            <Switch defaultChecked={notifications.sms} />
          </div>

          <div className="flex items-center justify-between">
            <div className="space-y-0.5 flex items-center gap-3">
              <div className="p-2 rounded-full bg-slate-100 dark:bg-slate-800">
                <Bell className="h-4 w-4 text-slate-600 dark:text-slate-400" />
              </div>
              <div>
                <p className="text-base font-medium leading-none">{t("admin.settings.notifications.push", "Push Notifications")}</p>
                <p className="text-sm text-muted-foreground mt-1">{t("admin.settings.notifications.pushDesc", "Browser and mobile app push notifications.")}</p>
              </div>
            </div>
            <Switch defaultChecked={notifications.push} />
          </div>
        </CardContent>
      </Card>

      <Card className="border shadow-sm">
        <CardHeader>
          <CardTitle>{t("admin.settings.notifications.eventTriggers", "Event Triggers")}</CardTitle>
          <CardDescription>{t("admin.settings.notifications.eventTriggersDesc", "Configure which events trigger automated notifications to users and admins.")}</CardDescription>
        </CardHeader>
        <CardContent className="p-0">
          <Table>
            <TableHeader className="bg-slate-50 dark:bg-slate-900/50">
              <TableRow>
                <TableHead>{t("admin.settings.notifications.systemEvent", "System Event")}</TableHead>
                <TableHead className="text-center">{t("admin.settings.notifications.emailShort", "Email")}</TableHead>
                <TableHead className="text-center">{t("admin.settings.notifications.smsShort", "SMS")}</TableHead>
                <TableHead className="text-center">{t("admin.settings.notifications.pushShort", "Push")}</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="font-medium">{t("admin.settings.notifications.events.registration", "User Registration / Onboarding")}</TableCell>
                <TableCell className="text-center"><Switch defaultChecked={notifications.events.registration} /></TableCell>
                <TableCell className="text-center"><Switch defaultChecked={true} /></TableCell>
                <TableCell className="text-center"><Switch defaultChecked={false} /></TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">{t("admin.settings.notifications.events.submission", "News Story Submission (Pending Review)")}</TableCell>
                <TableCell className="text-center"><Switch defaultChecked={notifications.events.submission} /></TableCell>
                <TableCell className="text-center"><Switch defaultChecked={false} /></TableCell>
                <TableCell className="text-center"><Switch defaultChecked={true} /></TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">{t("admin.settings.notifications.events.approval", "News Story Approved & Published")}</TableCell>
                <TableCell className="text-center"><Switch defaultChecked={notifications.events.approval} /></TableCell>
                <TableCell className="text-center"><Switch defaultChecked={false} /></TableCell>
                <TableCell className="text-center"><Switch defaultChecked={true} /></TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">{t("admin.settings.notifications.events.withdrawal", "Withdrawal Request Processed")}</TableCell>
                <TableCell className="text-center"><Switch defaultChecked={notifications.events.withdrawal} /></TableCell>
                <TableCell className="text-center"><Switch defaultChecked={true} /></TableCell>
                <TableCell className="text-center"><Switch defaultChecked={true} /></TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )
}
