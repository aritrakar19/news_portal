import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Switch } from "@/components/ui/switch"

export function RolesPermissionsTab() {
  const roles = ["Super Admin", "Admin", "Editor", "Reporter"]
  
  const permissionMatrix = [
    { module: "News Management", sa: true, ad: true, ed: true, rp: false },
    { module: "Reporter Management", sa: true, ad: true, ed: false, rp: false },
    { module: "Earnings Access", sa: true, ad: true, ed: false, rp: false },
    { module: "Advertisement Access", sa: true, ad: true, ed: false, rp: false },
    { module: "Settings Access", sa: true, ad: false, ed: false, rp: false },
  ]

  return (
    <div className="space-y-6 max-w-5xl">
      <Card className="border shadow-sm">
        <CardHeader>
          <CardTitle>Role-Based Access Control (RBAC)</CardTitle>
          <CardDescription>Define which modules each user role is permitted to access within the Admin Panel.</CardDescription>
        </CardHeader>
        <CardContent className="p-0">
          <div className="overflow-x-auto">
            <Table>
              <TableHeader className="bg-slate-50 dark:bg-slate-900/50">
                <TableRow>
                  <TableHead className="w-[250px]">Module / Permission</TableHead>
                  {roles.map(role => (
                    <TableHead key={role} className="text-center">{role}</TableHead>
                  ))}
                </TableRow>
              </TableHeader>
              <TableBody>
                {permissionMatrix.map((row, idx) => (
                  <TableRow key={idx}>
                    <TableCell className="font-medium">{row.module}</TableCell>
                    <TableCell className="text-center">
                      <Switch defaultChecked={row.sa} disabled />
                    </TableCell>
                    <TableCell className="text-center">
                      <Switch defaultChecked={row.ad} />
                    </TableCell>
                    <TableCell className="text-center">
                      <Switch defaultChecked={row.ed} />
                    </TableCell>
                    <TableCell className="text-center">
                      <Switch defaultChecked={row.rp} disabled />
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>

      <div className="bg-blue-50 dark:bg-blue-950/30 p-4 rounded-lg border border-blue-100 dark:border-blue-900 text-sm text-blue-800 dark:text-blue-300">
        <strong>Note:</strong> Super Admin permissions cannot be modified. Reporter permissions are locked to public/dashboard facing routes only and cannot access Admin modules.
      </div>
    </div>
  )
}
