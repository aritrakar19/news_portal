import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { ShieldCheck, Building2, Smartphone } from "lucide-react"

export function WithdrawalPanel() {
  return (
    <div className="bg-white dark:bg-card border border-border shadow-sm rounded-xl overflow-hidden flex flex-col h-full">
      <div className="p-6 border-b border-border bg-slate-50 dark:bg-slate-900/50 flex justify-between items-center">
        <h3 className="font-heading font-bold text-lg">Withdraw Funds</h3>
        <div className="flex items-center gap-1 text-xs font-medium text-emerald-600 dark:text-emerald-500 bg-emerald-100 dark:bg-emerald-900/30 px-2 py-1 rounded-full">
          <ShieldCheck className="w-3 h-3" />
          <span>Secure</span>
        </div>
      </div>
      
      <div className="p-6 flex-1 flex flex-col">
        <Tabs defaultValue="upi" className="w-full flex-1 flex flex-col">
          <TabsList className="grid w-full grid-cols-2 mb-6">
            <TabsTrigger value="upi" className="flex items-center gap-2">
              <Smartphone className="w-4 h-4" />
              UPI Transfer
            </TabsTrigger>
            <TabsTrigger value="bank" className="flex items-center gap-2">
              <Building2 className="w-4 h-4" />
              Bank Account
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="upi" className="flex-1 flex flex-col space-y-4">
            <div className="space-y-2">
              <Label htmlFor="upi-amount">Withdrawal Amount (₹)</Label>
              <Input id="upi-amount" placeholder="e.g. 5000" type="number" min="500" className="text-lg font-medium h-12" />
              <p className="text-xs text-muted-foreground">Minimum withdrawal is ₹500</p>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="upi-id">UPI ID</Label>
              <Input id="upi-id" placeholder="yourname@okhdfcbank" className="h-11" />
            </div>

            <div className="mt-auto pt-6">
              <Button className="w-full h-12 font-bold text-md bg-emerald-600 hover:bg-emerald-700 text-white shadow-lg shadow-emerald-500/20">
                Confirm Withdrawal
              </Button>
            </div>
          </TabsContent>
          
          <TabsContent value="bank" className="flex-1 flex flex-col space-y-4">
            <div className="space-y-2">
              <Label htmlFor="bank-amount">Withdrawal Amount (₹)</Label>
              <Input id="bank-amount" placeholder="e.g. 5000" type="number" min="500" className="text-lg font-medium h-12" />
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2 col-span-2">
                <Label htmlFor="account-num">Account Number</Label>
                <Input id="account-num" placeholder="00000000000" type="password" />
              </div>
              <div className="space-y-2 col-span-2">
                <Label htmlFor="account-name">Account Holder Name</Label>
                <Input id="account-name" placeholder="As per bank records" />
              </div>
              <div className="space-y-2 col-span-2">
                <Label htmlFor="ifsc">IFSC Code</Label>
                <Input id="ifsc" placeholder="e.g. HDFC0001234" className="uppercase" />
              </div>
            </div>

            <div className="mt-auto pt-6">
              <Button className="w-full h-12 font-bold text-md bg-emerald-600 hover:bg-emerald-700 text-white shadow-lg shadow-emerald-500/20">
                Confirm Bank Transfer
              </Button>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
