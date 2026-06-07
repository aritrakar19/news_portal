import type { Reporter } from "../data/mockReporters"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

interface RecentApplicationsProps {
  reporters: Reporter[]
  onViewProfile: (reporter: Reporter) => void
}

export function RecentApplications({ reporters, onViewProfile }: RecentApplicationsProps) {
  const pendingReporters = reporters.filter(r => r.accountStatus === "Pending Approval").slice(0, 5)

  return (
    <Card className="col-span-1 border shadow-sm">
      <CardHeader>
        <CardTitle className="text-xl">Recent Applications</CardTitle>
        <CardDescription>
          New reporters waiting for approval
        </CardDescription>
      </CardHeader>
      <CardContent>
        {pendingReporters.length === 0 ? (
          <div className="text-center py-8 text-muted-foreground">
            No pending applications.
          </div>
        ) : (
          <div className="space-y-6">
            {pendingReporters.map((reporter) => (
              <div key={reporter.id} className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <Avatar className="h-10 w-10">
                    <AvatarImage src={reporter.photo} alt={reporter.name} />
                    <AvatarFallback>{reporter.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-medium">{reporter.name}</div>
                    <div className="text-xs text-muted-foreground">
                      {reporter.district}, {reporter.state}
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Badge variant="outline" className="text-amber-600 border-amber-200 bg-amber-50 dark:bg-amber-900/10">Pending</Badge>
                  <Button variant="ghost" size="sm" onClick={() => onViewProfile(reporter)}>
                    Review
                  </Button>
                </div>
              </div>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  )
}
