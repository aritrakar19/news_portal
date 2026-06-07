import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { UploadCloud } from "lucide-react"
import { mockSystemConfig } from "../data/mockSettings"

export function BrandingTab() {
  const { branding } = mockSystemConfig

  const FileUploadZone = ({ label, desc }: { label: string, desc: string }) => (
    <div className="space-y-2">
      <Label>{label}</Label>
      <div className="border-2 border-dashed border-border rounded-lg p-6 flex flex-col items-center justify-center text-center bg-slate-50 dark:bg-slate-900/50 hover:bg-slate-100 dark:hover:bg-slate-900 transition-colors cursor-pointer">
        <div className="p-2 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 mb-2">
          <UploadCloud className="h-5 w-5" />
        </div>
        <p className="text-xs text-muted-foreground">{desc}</p>
      </div>
    </div>
  )

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-6xl">
      <div className="space-y-6 lg:col-span-2">
        <Card className="border shadow-sm">
          <CardHeader>
            <CardTitle>Logos & Icons</CardTitle>
            <CardDescription>Upload brand assets used across the platform.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <FileUploadZone label="Platform Logo (Light Theme)" desc="PNG, SVG up to 2MB. Recommended 250x60px." />
              <FileUploadZone label="Platform Logo (Dark Theme)" desc="PNG, SVG up to 2MB. Recommended 250x60px." />
            </div>
            <FileUploadZone label="Favicon" desc="ICO or PNG up to 1MB. Must be square (32x32px or 64x64px)." />
          </CardContent>
        </Card>

        <Card className="border shadow-sm">
          <CardHeader>
            <CardTitle>Theme Colors</CardTitle>
            <CardDescription>Define the primary and secondary brand colors.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="primaryColor">Primary Color (Hex)</Label>
                <div className="flex gap-2">
                  <div className="h-10 w-10 rounded-md border shadow-inner" style={{ backgroundColor: branding.primaryColor }} />
                  <Input id="primaryColor" defaultValue={branding.primaryColor} className="flex-1 font-mono uppercase" />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="secondaryColor">Secondary Color (Hex)</Label>
                <div className="flex gap-2">
                  <div className="h-10 w-10 rounded-md border shadow-inner" style={{ backgroundColor: branding.secondaryColor }} />
                  <Input id="secondaryColor" defaultValue={branding.secondaryColor} className="flex-1 font-mono uppercase" />
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="lg:col-span-1">
        <Card className="border shadow-sm sticky top-6">
          <CardHeader className="pb-4 border-b">
            <CardTitle className="text-base">Live Preview</CardTitle>
          </CardHeader>
          <CardContent className="p-0">
            <div className="bg-slate-100 dark:bg-slate-800 h-48 flex items-center justify-center p-6 border-b">
               {/* Mockup of a top navbar */}
               <div className="w-full h-12 bg-white dark:bg-slate-900 rounded-md shadow-sm flex items-center px-4 justify-between">
                  <div className="font-heading font-extrabold text-lg tracking-tight" style={{ color: branding.primaryColor }}>
                    PUBLIC NEWS 1
                  </div>
                  <div className="flex gap-2">
                    <div className="h-2 w-8 rounded-full bg-slate-200 dark:bg-slate-700"></div>
                    <div className="h-2 w-8 rounded-full bg-slate-200 dark:bg-slate-700"></div>
                  </div>
               </div>
            </div>
            <div className="p-6">
              <div className="space-y-3">
                <div className="h-4 w-3/4 rounded bg-slate-200 dark:bg-slate-800"></div>
                <div className="h-4 w-1/2 rounded bg-slate-200 dark:bg-slate-800"></div>
                <div className="pt-4">
                  <div className="h-10 w-full rounded-md flex items-center justify-center text-white text-sm font-medium" style={{ backgroundColor: branding.primaryColor }}>
                    Primary Button
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
