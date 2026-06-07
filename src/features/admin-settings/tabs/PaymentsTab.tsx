import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Button } from "@/components/ui/button"
import { mockSystemConfig } from "../data/mockSettings"

export function PaymentsTab() {
  const { payments } = mockSystemConfig

  return (
    <div className="space-y-6 max-w-4xl">
      <Card className="border shadow-sm">
        <CardHeader>
          <CardTitle>Withdrawal Constraints</CardTitle>
          <CardDescription>Rules governing when and how reporters can withdraw earnings.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="withdrawalMinimum">Minimum Withdrawal Amount (₹)</Label>
              <Input id="withdrawalMinimum" type="number" defaultValue={payments.withdrawalMinimum} />
            </div>
            <div className="space-y-2">
              <Label htmlFor="processingTimeDays">Processing Time (Days)</Label>
              <Input id="processingTimeDays" type="number" defaultValue={payments.processingTimeDays} />
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="border shadow-sm">
        <CardHeader>
          <CardTitle>Payment Gateways</CardTitle>
          <CardDescription>Enable or disable third-party payment processors for incoming and outgoing funds.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label className="text-base flex items-center gap-2">
                Razorpay
                <span className="text-xs font-normal px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400">Primary</span>
              </Label>
              <p className="text-sm text-muted-foreground">UPI, Cards, and Netbanking support for Indian users.</p>
            </div>
            <div className="flex items-center gap-4">
              <Button variant="outline" size="sm">Configure API</Button>
              <Switch defaultChecked={payments.gateways.razorpay} />
            </div>
          </div>
          
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label className="text-base">PayU</Label>
              <p className="text-sm text-muted-foreground">Alternative domestic payment gateway.</p>
            </div>
            <div className="flex items-center gap-4">
              <Button variant="outline" size="sm">Configure API</Button>
              <Switch defaultChecked={payments.gateways.payu} />
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label className="text-base">Stripe</Label>
              <p className="text-sm text-muted-foreground">International card processing gateway.</p>
            </div>
            <div className="flex items-center gap-4">
              <Button variant="outline" size="sm">Configure API</Button>
              <Switch defaultChecked={payments.gateways.stripe} />
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label className="text-base">Manual Bank Transfer / NEFT</Label>
              <p className="text-sm text-muted-foreground">Allow users to request manual payouts directly to their bank accounts.</p>
            </div>
            <Switch defaultChecked={payments.gateways.manual} />
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
