import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { mockSystemConfig } from "../data/mockSettings"
import { useTranslation } from "react-i18next"

export function GeneralSettingsTab() {
  const { t } = useTranslation()
  const { general } = mockSystemConfig

  return (
    <div className="space-y-6 max-w-4xl">
      <Card className="border shadow-sm">
        <CardHeader>
          <CardTitle>{t("admin.settings.general.platformDetails", "Platform Details")}</CardTitle>
          <CardDescription>{t("admin.settings.general.platformDetailsDesc", "Core information about your news platform.")}</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="platformName">{t("admin.settings.general.platformName", "Platform Name")}</Label>
              <Input id="platformName" defaultValue={general.platformName} />
            </div>
            <div className="space-y-2">
              <Label htmlFor="tagline">{t("admin.settings.general.tagline", "Tagline")}</Label>
              <Input id="tagline" defaultValue={general.tagline} />
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="border shadow-sm">
        <CardHeader>
          <CardTitle>{t("admin.settings.general.contactInfo", "Contact Information")}</CardTitle>
          <CardDescription>{t("admin.settings.general.contactInfoDesc", "Public-facing contact details for support and inquiries.")}</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="contactEmail">{t("admin.settings.general.supportEmail", "Support Email")}</Label>
              <Input id="contactEmail" type="email" defaultValue={general.contactEmail} />
            </div>
            <div className="space-y-2">
              <Label htmlFor="supportNumber">{t("admin.settings.general.supportPhone", "Support Phone Number")}</Label>
              <Input id="supportNumber" defaultValue={general.supportNumber} />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="officeAddress">{t("admin.settings.general.headquarters", "Headquarters Address")}</Label>
            <Input id="officeAddress" defaultValue={general.officeAddress} />
          </div>
        </CardContent>
      </Card>

      <Card className="border shadow-sm">
        <CardHeader>
          <CardTitle>{t("admin.settings.general.localization", "Localization")}</CardTitle>
          <CardDescription>{t("admin.settings.general.localizationDesc", "Configure regional settings for the admin panel.")}</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label>{t("admin.settings.general.timeZone", "Time Zone")}</Label>
              <Select defaultValue={general.timeZone}>
                <SelectTrigger>
                  <SelectValue placeholder={t("admin.settings.general.selectTimezone", "Select timezone")} />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Asia/Kolkata">Asia/Kolkata (IST)</SelectItem>
                  <SelectItem value="UTC">UTC</SelectItem>
                  <SelectItem value="America/New_York">America/New_York (EST)</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label>{t("admin.settings.general.defaultLanguage", "Default Language")}</Label>
              <Select defaultValue={general.language}>
                <SelectTrigger>
                  <SelectValue placeholder={t("admin.settings.general.selectLanguage", "Select language")} />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="en-US">English (US)</SelectItem>
                  <SelectItem value="en-IN">English (India)</SelectItem>
                  <SelectItem value="hi-IN">Hindi</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
