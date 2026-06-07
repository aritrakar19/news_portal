import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { CheckCircle2, AlertCircle } from "lucide-react"

export function ProfileCompletionCard() {
  const completionPercentage = 85

  return (
    <Card className="border-border shadow-sm h-full">
      <CardHeader className="pb-2">
        <CardTitle className="text-lg font-heading flex items-center justify-between">
          <span>Reporter Profile</span>
          <Badge className="bg-green-100 text-green-700 hover:bg-green-200 border-none">
            <CheckCircle2 className="w-3 h-3 mr-1" /> Verified
          </Badge>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex items-center gap-4 mb-6">
          <Avatar className="h-16 w-16 border-2 border-primary/20">
            <AvatarImage src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=200&auto=format&fit=crop" />
            <AvatarFallback>AR</AvatarFallback>
          </Avatar>
          <div>
            <h4 className="font-bold text-lg leading-tight">Aritra Sharma</h4>
            <p className="text-sm text-muted-foreground">National Correspondent</p>
            <p className="text-xs text-muted-foreground font-mono mt-1">ID: PN1-2026-8921</p>
          </div>
        </div>

        <div className="space-y-2 mb-6">
          <div className="flex justify-between text-sm font-medium">
            <span>Profile Completion</span>
            <span className="text-primary">{completionPercentage}%</span>
          </div>
          <Progress value={completionPercentage} className="h-2" />
        </div>

        <div className="bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-900/50 rounded-lg p-3 flex gap-3 text-sm">
          <AlertCircle className="h-5 w-5 text-amber-600 dark:text-amber-500 shrink-0" />
          <div>
            <p className="font-semibold text-amber-800 dark:text-amber-400">Add Bank Details</p>
            <p className="text-amber-700/80 dark:text-amber-500/80 mt-0.5">Please add your bank account to enable direct withdrawals.</p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
