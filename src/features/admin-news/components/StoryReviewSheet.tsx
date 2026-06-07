import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet"
import type { NewsStory } from "../data/mockNews"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { CheckCircle2, XCircle, AlertTriangle, FileText, Zap, Edit, MessageSquare, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Textarea } from "@/components/ui/textarea"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

interface StoryReviewSheetProps {
  story: NewsStory | null
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function StoryReviewSheet({ story, open, onOpenChange }: StoryReviewSheetProps) {
  if (!story) return null

  const getFactCheckIcon = (status: string) => {
    switch (status) {
      case "Verified": return <CheckCircle2 className="h-5 w-5 text-emerald-500" />
      case "Needs Verification": return <AlertTriangle className="h-5 w-5 text-amber-500" />
      case "Flagged": return <XCircle className="h-5 w-5 text-rose-500" />
      default: return null
    }
  }

  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent className="w-full sm:max-w-2xl overflow-y-auto">
        <SheetHeader className="text-left mb-6">
          <div className="flex items-center justify-between">
            <SheetTitle>Editorial Review</SheetTitle>
            <Badge variant="outline" className="font-mono">{story.id}</Badge>
          </div>
        </SheetHeader>

        <div className="space-y-8">
          {/* Headline & Meta */}
          <div>
            <div className="flex items-center gap-2 mb-2">
              <Badge variant="secondary">{story.category}</Badge>
              {story.priority === "Breaking News" && (
                <Badge variant="destructive" className="animate-pulse"><Zap className="mr-1 h-3 w-3" /> Breaking</Badge>
              )}
            </div>
            <h1 className="text-2xl font-bold font-heading mb-4">{story.headline}</h1>
            
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Avatar className="h-6 w-6">
                  <AvatarImage src={story.reporter.avatar} alt={story.reporter.name} />
                  <AvatarFallback>{story.reporter.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <span className="font-medium text-foreground">{story.reporter.name}</span>
              </div>
              <span>•</span>
              <span>{story.district}, {story.state}</span>
              <span>•</span>
              <span>{new Date(story.submissionDate).toLocaleString()}</span>
            </div>
          </div>

          {/* Media */}
          <div className="rounded-xl overflow-hidden border">
            <img src={story.thumbnail} alt="Story Thumbnail" className="h-full w-full h-[300px] object-cover" width={800} height={400} onError={(e) => { e.currentTarget.src = 'https://images.unsplash.com/photo-1585829365295-ab7cd400c167?q=80&w=800&auto=format&fit=crop'; e.currentTarget.onerror = null; }} />
          </div>

          {/* Content */}
          <div className="prose dark:prose-invert max-w-none text-sm md:text-base leading-relaxed">
            <p>{story.content}</p>
          </div>

          <Separator />

          {/* Editorial Controls */}
          <div className="bg-slate-50 dark:bg-slate-900/50 rounded-xl p-6 border space-y-6">
            <h3 className="font-semibold flex items-center gap-2"><Edit className="h-4 w-4" /> Editorial Review</h3>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-sm font-medium text-muted-foreground">Fact Check Status</label>
                <div className="flex items-center gap-2">
                  {getFactCheckIcon(story.factCheckStatus)}
                  <Select defaultValue={story.factCheckStatus.toLowerCase().replace(' ', '-')}>
                    <SelectTrigger className="bg-background">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="verified">Verified</SelectItem>
                      <SelectItem value="needs-verification">Needs Verification</SelectItem>
                      <SelectItem value="flagged">Flagged</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-muted-foreground">Priority Level</label>
                <Select defaultValue={story.priority.toLowerCase().replace(' ', '-')}>
                  <SelectTrigger className="bg-background">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="normal">Normal</SelectItem>
                    <SelectItem value="important">Important</SelectItem>
                    <SelectItem value="breaking-news">Breaking News</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-muted-foreground">Internal Notes / Comments</label>
              <Textarea 
                placeholder="Leave notes for other editors or the reporter..." 
                defaultValue={story.editorialNotes}
                className="bg-background min-h-[100px]"
              />
            </div>
          </div>

          {/* Workflow Visualization */}
          <div>
             <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-4">Approval Pipeline</h3>
             <div className="flex items-center justify-between text-sm">
                <div className="flex flex-col items-center gap-2">
                  <div className="h-8 w-8 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center"><CheckCircle2 className="h-4 w-4" /></div>
                  <span className="text-xs font-medium">Submitted</span>
                </div>
                <div className="h-[2px] flex-1 bg-emerald-100 mx-2"></div>
                
                <div className="flex flex-col items-center gap-2">
                  <div className={`h-8 w-8 rounded-full flex items-center justify-center ${story.status !== "Pending Review" ? 'bg-emerald-100 text-emerald-600' : 'bg-blue-100 text-blue-600'}`}>
                    {story.status !== "Pending Review" ? <CheckCircle2 className="h-4 w-4" /> : <div className="h-3 w-3 rounded-full bg-blue-600 animate-pulse" />}
                  </div>
                  <span className="text-xs font-medium">Reviewed</span>
                </div>
                <div className={`h-[2px] flex-1 mx-2 ${story.status === "Approved" || story.status === "Published" ? 'bg-emerald-100' : 'bg-slate-100 dark:bg-slate-800'}`}></div>
                
                <div className="flex flex-col items-center gap-2">
                   <div className={`h-8 w-8 rounded-full flex items-center justify-center ${story.status === "Approved" || story.status === "Published" ? 'bg-emerald-100 text-emerald-600' : 'bg-slate-100 dark:bg-slate-800 text-muted-foreground'}`}>
                    {story.status === "Approved" || story.status === "Published" ? <CheckCircle2 className="h-4 w-4" /> : <FileText className="h-4 w-4" />}
                  </div>
                  <span className="text-xs font-medium">Approved</span>
                </div>
                <div className={`h-[2px] flex-1 mx-2 ${story.status === "Published" ? 'bg-emerald-100' : 'bg-slate-100 dark:bg-slate-800'}`}></div>

                <div className="flex flex-col items-center gap-2">
                  <div className={`h-8 w-8 rounded-full flex items-center justify-center ${story.status === "Published" ? 'bg-emerald-100 text-emerald-600' : 'bg-slate-100 dark:bg-slate-800 text-muted-foreground'}`}>
                    {story.status === "Published" ? <CheckCircle2 className="h-4 w-4" /> : <Send className="h-4 w-4" />}
                  </div>
                  <span className="text-xs font-medium">Published</span>
                </div>
             </div>
          </div>

          <Separator />

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-3 pb-8">
            <Button className="flex-1 bg-emerald-600 hover:bg-emerald-700">Approve</Button>
            <Button variant="outline" className="flex-1 border-amber-500 text-amber-600 hover:bg-amber-50 dark:hover:bg-amber-950">
              <MessageSquare className="mr-2 h-4 w-4" /> Request Changes
            </Button>
            <Button variant="destructive" className="flex-1">Reject</Button>
            {story.status === "Approved" && (
               <Button className="w-full bg-blue-600 hover:bg-blue-700 mt-2">
                 <Send className="mr-2 h-4 w-4" /> Publish to Platform
               </Button>
            )}
            {story.priority !== "Breaking News" && (
              <Button variant="outline" className="w-full mt-2 text-rose-500 border-rose-200 hover:bg-rose-50 dark:border-rose-900 dark:hover:bg-rose-950">
                <Zap className="mr-2 h-4 w-4" /> Elevate to Breaking News
              </Button>
            )}
          </div>

        </div>
      </SheetContent>
    </Sheet>
  )
}
