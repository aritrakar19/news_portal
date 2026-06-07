import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { mockIntegrations } from "../data/mockSettings"
import { BarChart3, Presentation, MonitorPlay, Database, MessageCircle } from "lucide-react"

export function IntegrationsTab() {
  const getIcon = (name: string) => {
    switch (name) {
      case "Analytics": return <BarChart3 className="h-6 w-6 text-orange-500" />
      case "AdSense": return <Presentation className="h-6 w-6 text-blue-500" />
      case "Youtube": return <MonitorPlay className="h-6 w-6 text-red-500" />
      case "Database": return <Database className="h-6 w-6 text-amber-500" />
      case "MessageCircle": return <MessageCircle className="h-6 w-6 text-emerald-500" />
      default: return <Database className="h-6 w-6 text-slate-500" />
    }
  }

  return (
    <div className="space-y-6 max-w-5xl">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-lg font-heading font-bold">Connected Services</h3>
          <p className="text-sm text-muted-foreground">Manage third-party API connections and external services.</p>
        </div>
        <Button>Add Integration</Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {mockIntegrations.map((integration) => (
          <Card key={integration.id} className="border shadow-sm flex flex-col h-full">
            <CardHeader className="pb-4 flex flex-row items-start justify-between space-y-0">
              <div className="p-2 bg-slate-100 dark:bg-slate-800 rounded-lg">
                {getIcon(integration.icon)}
              </div>
              {integration.status === "Connected" ? (
                <Badge className="bg-emerald-100 text-emerald-800 hover:bg-emerald-100 dark:bg-emerald-900/30 dark:text-emerald-400 border-0">Connected</Badge>
              ) : (
                <Badge variant="outline" className="text-slate-500">Disconnected</Badge>
              )}
            </CardHeader>
            <CardContent className="flex-1 flex flex-col justify-between">
              <div>
                <CardTitle className="text-base mb-1">{integration.name}</CardTitle>
                <CardDescription className="text-xs">{integration.description}</CardDescription>
              </div>
              <div className="mt-6">
                {integration.status === "Connected" ? (
                  <Button variant="outline" className="w-full text-rose-600 hover:text-rose-700 hover:bg-rose-50 dark:hover:bg-rose-950/50">Disconnect</Button>
                ) : (
                  <Button variant="default" className="w-full">Configure</Button>
                )}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
