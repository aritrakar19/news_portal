import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { UploadCloud, Search } from "lucide-react"
import { mockSystemConfig } from "../data/mockSettings"

export function SeoTab() {
  const { seo } = mockSystemConfig

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-6xl">
      <div className="space-y-6">
        <Card className="border shadow-sm">
          <CardHeader>
            <CardTitle>Global SEO Metadata</CardTitle>
            <CardDescription>Default meta tags used across the platform when specific page data is missing.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="metaTitle">Default Meta Title</Label>
              <Input id="metaTitle" defaultValue={seo.metaTitle} />
              <p className="text-xs text-muted-foreground text-right">51 / 60 characters recommended</p>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="metaDesc">Default Meta Description</Label>
              <Textarea id="metaDesc" defaultValue={seo.metaDescription} className="resize-none h-24" />
              <p className="text-xs text-muted-foreground text-right">132 / 160 characters recommended</p>
            </div>

            <div className="space-y-2">
              <Label htmlFor="keywords">Global Keywords</Label>
              <Input id="keywords" defaultValue={seo.keywords} />
              <p className="text-xs text-muted-foreground">Comma separated list of core platform keywords.</p>
            </div>
          </CardContent>
        </Card>

        <Card className="border shadow-sm">
          <CardHeader>
            <CardTitle>Social Sharing (Open Graph)</CardTitle>
            <CardDescription>Default image shown when links are shared on WhatsApp, Facebook, or Twitter.</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="border-2 border-dashed border-border rounded-lg p-6 flex flex-col items-center justify-center text-center bg-slate-50 dark:bg-slate-900/50 hover:bg-slate-100 dark:hover:bg-slate-900 transition-colors cursor-pointer">
              <div className="p-2 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 mb-2">
                <UploadCloud className="h-5 w-5" />
              </div>
              <p className="text-sm font-medium mb-1">Upload Default OG Image</p>
              <p className="text-xs text-muted-foreground">1200 x 630 pixels recommended (JPG or PNG).</p>
            </div>
          </CardContent>
        </Card>
      </div>

      <div>
        <Card className="border shadow-sm sticky top-6">
          <CardHeader className="pb-4 border-b">
            <CardTitle className="text-base flex items-center gap-2">
              <Search className="h-4 w-4 text-slate-500" />
              Search Engine Preview
            </CardTitle>
          </CardHeader>
          <CardContent className="p-6">
            <div className="bg-white dark:bg-slate-950 p-4 rounded-lg shadow-sm border border-slate-200 dark:border-slate-800">
              <div className="flex gap-3 mb-2">
                <div className="h-7 w-7 rounded-full bg-slate-200 dark:bg-slate-800 flex items-center justify-center text-xs font-bold font-heading">PN1</div>
                <div>
                  <div className="text-sm text-slate-800 dark:text-slate-200">Public News 1</div>
                  <div className="text-xs text-slate-500">https://www.publicnews1.com</div>
                </div>
              </div>
              <h3 className="text-[20px] font-medium text-blue-600 dark:text-blue-400 hover:underline cursor-pointer leading-tight mb-1">
                {seo.metaTitle}
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-400 leading-snug">
                {seo.metaDescription}
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
