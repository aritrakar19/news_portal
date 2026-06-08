import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Switch } from "@/components/ui/switch"
import { useTranslation } from "react-i18next"

export function RolesPermissionsTab() {
  const { t } = useTranslation()
  const roles = [
    t("admin.settings.roles.superAdmin", "Super Admin"), 
    t("admin.settings.roles.admin", "Admin"), 
    t("admin.settings.roles.editor", "Editor"), 
    t("admin.settings.roles.reporter", "Reporter")
  ]
  
  const permissionMatrix = [
    { module: t("admin.settings.roles.modules.news", "News Management"), sa: true, ad: true, ed: true, rp: false },
    { module: t("admin.settings.roles.modules.reporter", "Reporter Management"), sa: true, ad: true, ed: false, rp: false },
    { module: t("admin.settings.roles.modules.earnings", "Earnings Access"), sa: true, ad: true, ed: false, rp: false },
    { module: t("admin.settings.roles.modules.ads", "Advertisement Access"), sa: true, ad: true, ed: false, rp: false },
    { module: t("admin.settings.roles.modules.settings", "Settings Access"), sa: true, ad: false, ed: false, rp: false },
  ]

  return (
    <div className="space-y-6 max-w-5xl">
      <Card className="border shadow-sm">
        <CardHeader>
          <CardTitle>{t("admin.settings.roles.title", "Role-Based Access Control (RBAC)")}</CardTitle>
          <CardDescription>{t("admin.settings.roles.subtitle", "Define which modules each user role is permitted to access within the Admin Panel.")}</CardDescription>
        </CardHeader>
        <CardContent className="p-0">
          <div className="overflow-x-auto">
            <Table>
              <TableHeader className="bg-slate-50 dark:bg-slate-900/50">
                <TableRow>
                  <TableHead className="w-[250px]">{t("admin.settings.roles.modulePermission", "Module / Permission")}</TableHead>
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
        <strong>{t("admin.settings.roles.noteLabel", "Note:")}</strong> {t("admin.settings.roles.noteText", "Super Admin permissions cannot be modified. Reporter permissions are locked to public/dashboard facing routes only and cannot access Admin modules.")}
      </div>
    </div>
  )
}
