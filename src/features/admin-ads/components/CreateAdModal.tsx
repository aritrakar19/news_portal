import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { UploadCloud, Link } from "lucide-react"
import { useTranslation } from "react-i18next"

interface CreateAdModalProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function CreateAdModal({ open, onOpenChange }: CreateAdModalProps) {
  const { t } = useTranslation()

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[600px] overflow-y-auto max-h-[90vh]">
        <DialogHeader>
          <DialogTitle className="text-xl">{t("admin.ads.modal.title", "Create New Advertisement")}</DialogTitle>
          <DialogDescription>
            {t("admin.ads.modal.subtitle", "Configure a new ad campaign and select its placement across the platform.")}
          </DialogDescription>
        </DialogHeader>

        <div className="grid gap-6 py-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="campaignName">{t("admin.ads.modal.campaignName", "Campaign Name")}</Label>
              <Input id="campaignName" placeholder={t("admin.ads.modal.campaignNamePlaceholder", "e.g. Summer Sale 2024")} />
            </div>
            <div className="space-y-2">
              <Label htmlFor="advertiserName">{t("admin.ads.modal.advertiserName", "Advertiser Name")}</Label>
              <Input id="advertiserName" placeholder={t("admin.ads.modal.advertiserNamePlaceholder", "e.g. MegaMart India")} />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label>{t("admin.ads.modal.adType", "Advertisement Type")}</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder={t("admin.ads.modal.selectType", "Select type")} />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="banner">{t("admin.ads.modal.bannerAd", "Banner Ad")}</SelectItem>
                  <SelectItem value="video">{t("admin.ads.modal.videoAd", "Video Ad")}</SelectItem>
                  <SelectItem value="sponsored">{t("admin.ads.modal.sponsoredPost", "Sponsored Post")}</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label>{t("admin.ads.modal.placement", "Placement")}</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder={t("admin.ads.modal.selectPlacement", "Select placement")} />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="home-hero">{t("admin.ads.modal.homeHero", "Homepage Hero")}</SelectItem>
                  <SelectItem value="home-sidebar">{t("admin.ads.modal.homeSidebar", "Homepage Sidebar")}</SelectItem>
                  <SelectItem value="category">{t("admin.ads.modal.categoryPages", "Category Pages")}</SelectItem>
                  <SelectItem value="details">{t("admin.ads.modal.newsDetails", "News Details Page")}</SelectItem>
                  <SelectItem value="live-tv">{t("admin.ads.modal.liveTv", "Live TV Page")}</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="startDate">{t("admin.ads.modal.startDate", "Start Date")}</Label>
              <Input id="startDate" type="date" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="endDate">{t("admin.ads.modal.endDate", "End Date")}</Label>
              <Input id="endDate" type="date" />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="budget">{t("admin.ads.modal.totalBudget", "Total Budget (₹)")}</Label>
            <Input id="budget" type="number" placeholder={t("admin.ads.modal.enterAmount", "Enter amount")} />
          </div>

          <div className="space-y-2">
            <Label htmlFor="destUrl">{t("admin.ads.modal.destUrl", "Destination URL")}</Label>
            <div className="relative">
              <Link className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input id="destUrl" className="pl-9" placeholder="https://example.com/landing-page" />
            </div>
          </div>

          <div className="space-y-2">
            <Label>{t("admin.ads.modal.creativeAssets", "Creative Assets (Banner / Video)")}</Label>
            <div className="border-2 border-dashed border-border rounded-lg p-8 flex flex-col items-center justify-center text-center bg-slate-50 dark:bg-slate-900/50 hover:bg-slate-100 dark:hover:bg-slate-900 transition-colors cursor-pointer">
              <div className="p-3 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 mb-4">
                <UploadCloud className="h-6 w-6" />
              </div>
              <p className="text-sm font-medium mb-1">{t("admin.ads.modal.uploadTitle", "Click to upload or drag and drop")}</p>
              <p className="text-xs text-muted-foreground">{t("admin.ads.modal.uploadSubtitle", "PNG, JPG, GIF up to 5MB, or MP4 up to 50MB")}</p>
            </div>
          </div>
        </div>

        <DialogFooter>
          <Button variant="outline" onClick={() => onOpenChange(false)}>{t("admin.ads.modal.cancel", "Cancel")}</Button>
          <Button className="bg-blue-600 hover:bg-blue-700">{t("admin.ads.modal.createCampaign", "Create Campaign")}</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
