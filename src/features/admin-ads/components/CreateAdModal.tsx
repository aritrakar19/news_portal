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

interface CreateAdModalProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function CreateAdModal({ open, onOpenChange }: CreateAdModalProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[600px] overflow-y-auto max-h-[90vh]">
        <DialogHeader>
          <DialogTitle className="text-xl">Create New Advertisement</DialogTitle>
          <DialogDescription>
            Configure a new ad campaign and select its placement across the platform.
          </DialogDescription>
        </DialogHeader>

        <div className="grid gap-6 py-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="campaignName">Campaign Name</Label>
              <Input id="campaignName" placeholder="e.g. Summer Sale 2024" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="advertiserName">Advertiser Name</Label>
              <Input id="advertiserName" placeholder="e.g. MegaMart India" />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label>Advertisement Type</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="banner">Banner Ad</SelectItem>
                  <SelectItem value="video">Video Ad</SelectItem>
                  <SelectItem value="sponsored">Sponsored Post</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label>Placement</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select placement" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="home-hero">Homepage Hero</SelectItem>
                  <SelectItem value="home-sidebar">Homepage Sidebar</SelectItem>
                  <SelectItem value="category">Category Pages</SelectItem>
                  <SelectItem value="details">News Details Page</SelectItem>
                  <SelectItem value="live-tv">Live TV Page</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="startDate">Start Date</Label>
              <Input id="startDate" type="date" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="endDate">End Date</Label>
              <Input id="endDate" type="date" />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="budget">Total Budget (₹)</Label>
            <Input id="budget" type="number" placeholder="Enter amount" />
          </div>

          <div className="space-y-2">
            <Label htmlFor="destUrl">Destination URL</Label>
            <div className="relative">
              <Link className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input id="destUrl" className="pl-9" placeholder="https://example.com/landing-page" />
            </div>
          </div>

          <div className="space-y-2">
            <Label>Creative Assets (Banner / Video)</Label>
            <div className="border-2 border-dashed border-border rounded-lg p-8 flex flex-col items-center justify-center text-center bg-slate-50 dark:bg-slate-900/50 hover:bg-slate-100 dark:hover:bg-slate-900 transition-colors cursor-pointer">
              <div className="p-3 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 mb-4">
                <UploadCloud className="h-6 w-6" />
              </div>
              <p className="text-sm font-medium mb-1">Click to upload or drag and drop</p>
              <p className="text-xs text-muted-foreground">PNG, JPG, GIF up to 5MB, or MP4 up to 50MB</p>
            </div>
          </div>
        </div>

        <DialogFooter>
          <Button variant="outline" onClick={() => onOpenChange(false)}>Cancel</Button>
          <Button className="bg-blue-600 hover:bg-blue-700">Create Campaign</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
