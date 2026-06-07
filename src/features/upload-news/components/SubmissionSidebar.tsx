import { CheckCircle2, AlertCircle, FileText, UploadCloud, CheckCircle } from "lucide-react"

export function SubmissionSidebar() {
  return (
    <div className="space-y-6 sticky top-24">
      {/* Workflow Card */}
      <div className="bg-slate-900 text-white rounded-xl p-6 shadow-lg relative overflow-hidden">
        <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 rounded-full blur-3xl" />
        <h3 className="font-heading font-bold text-lg mb-6 relative z-10">Submission Workflow</h3>
        
        <div className="space-y-6 relative z-10">
          <div className="flex gap-4">
            <div className="flex flex-col items-center">
              <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center shrink-0">
                <UploadCloud className="w-4 h-4 text-white" />
              </div>
              <div className="w-0.5 h-10 bg-slate-700 my-1" />
            </div>
            <div className="pt-1">
              <p className="font-semibold text-sm text-white">1. Draft & Submit</p>
              <p className="text-xs text-slate-400 mt-0.5">You upload the story</p>
            </div>
          </div>
          
          <div className="flex gap-4">
            <div className="flex flex-col items-center">
              <div className="w-8 h-8 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center shrink-0">
                <FileText className="w-4 h-4 text-slate-400" />
              </div>
              <div className="w-0.5 h-10 bg-slate-700 my-1" />
            </div>
            <div className="pt-1">
              <p className="font-semibold text-sm text-slate-300">2. Editor Review</p>
              <p className="text-xs text-slate-400 mt-0.5">Quality check (1-2 hrs)</p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="flex flex-col items-center">
              <div className="w-8 h-8 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center shrink-0">
                <CheckCircle className="w-4 h-4 text-slate-400" />
              </div>
            </div>
            <div className="pt-1">
              <p className="font-semibold text-sm text-slate-300">3. Published</p>
              <p className="text-xs text-slate-400 mt-0.5">Live on PUBLIC NEWS 1</p>
            </div>
          </div>
        </div>
      </div>

      {/* Guidelines Card */}
      <div className="bg-white dark:bg-card border border-border shadow-sm rounded-xl p-6">
        <h3 className="font-heading font-bold text-lg mb-4 flex items-center gap-2">
          <AlertCircle className="w-5 h-5 text-accent" />
          Guidelines
        </h3>
        <ul className="space-y-3 text-sm text-muted-foreground">
          <li className="flex items-start gap-2">
            <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" />
            <p><strong>Accuracy is paramount.</strong> Ensure all facts, names, and locations are correctly spelled and verified.</p>
          </li>
          <li className="flex items-start gap-2">
            <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" />
            <p><strong>Images matter.</strong> Upload clear, high-resolution horizontal photos. No watermarks allowed.</p>
          </li>
          <li className="flex items-start gap-2">
            <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" />
            <p><strong>Be concise.</strong> Keep headlines under 120 characters and summaries straight to the point.</p>
          </li>
        </ul>
      </div>

      {/* Quality Checklist */}
      <div className="bg-slate-50 dark:bg-slate-900/50 border border-border shadow-sm rounded-xl p-6">
        <h3 className="font-heading font-bold text-lg mb-4">Quality Checklist</h3>
        <div className="space-y-3">
          <div className="flex items-center gap-3 text-sm text-muted-foreground">
            <CheckCircle2 className="w-5 h-5 text-slate-300 dark:text-slate-600" />
            <span>Catchy headline</span>
          </div>
          <div className="flex items-center gap-3 text-sm text-muted-foreground">
            <CheckCircle2 className="w-5 h-5 text-slate-300 dark:text-slate-600" />
            <span>Detailed description</span>
          </div>
          <div className="flex items-center gap-3 text-sm text-muted-foreground">
            <CheckCircle2 className="w-5 h-5 text-slate-300 dark:text-slate-600" />
            <span>Categorized correctly</span>
          </div>
          <div className="flex items-center gap-3 text-sm text-muted-foreground">
            <CheckCircle2 className="w-5 h-5 text-slate-300 dark:text-slate-600" />
            <span>High-quality cover image</span>
          </div>
        </div>
      </div>

    </div>
  )
}
