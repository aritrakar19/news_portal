import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { mockSystemConfig } from "../data/mockSettings"

export function GeneralSettingsTab() {
  const { general } = mockSystemConfig

  return (
    <div className="space-y-6 max-w-4xl">
      <Card className="border shadow-sm">
        <CardHeader>
          <CardTitle>Platform Details</CardTitle>
          <CardDescription>Core information about your news platform.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="platformName">Platform Name</Label>
              <Input id="platformName" defaultValue={general.platformName} />
            </div>
            <div className="space-y-2">
              <Label htmlFor="tagline">Tagline</Label>
              <Input id="tagline" defaultValue={general.tagline} />
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="border shadow-sm">
        <CardHeader>
          <CardTitle>Contact Information</CardTitle>
          <CardDescription>Public-facing contact details for support and inquiries.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="contactEmail">Support Email</Label>
              <Input id="contactEmail" type="email" defaultValue={general.contactEmail} />
            </div>
            <div className="space-y-2">
              <Label htmlFor="supportNumber">Support Phone Number</Label>
              <Input id="supportNumber" defaultValue={general.supportNumber} />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="officeAddress">Headquarters Address</Label>
            <Input id="officeAddress" defaultValue={general.officeAddress} />
          </div>
        </CardContent>
      </Card>

      <Card className="border shadow-sm">
        <CardHeader>
          <CardTitle>Localization</CardTitle>
          <CardDescription>Configure regional settings for the admin panel.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label>Time Zone</Label>
              <Select defaultValue={general.timeZone}>
                <SelectTrigger>
                  <SelectValue placeholder="Select timezone" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Asia/Kolkata">Asia/Kolkata (IST)</SelectItem>
                  <SelectItem value="UTC">UTC</SelectItem>
                  <SelectItem value="America/New_York">America/New_York (EST)</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label>Default Language</Label>
              <Select defaultValue={general.language}>
                <SelectTrigger>
                  <SelectValue placeholder="Select language" />
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
