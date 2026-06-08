import { Button } from "@/components/ui/button"
import { Download, Printer, Share2 } from "lucide-react"
import { useTranslation } from "react-i18next"

export function ActionButtons() {
  const { t } = useTranslation()

  return (
    <div className="flex flex-col gap-3">
      <Button className="w-full h-12 font-bold text-md flex items-center justify-center gap-2 shadow-lg">
        <Download className="w-5 h-5" />
        {t("press.actions.download", "Download PDF")}
      </Button>
      <div className="grid grid-cols-2 gap-3">
        <Button variant="outline" className="w-full h-11 flex items-center justify-center gap-2 bg-white dark:bg-slate-900 border-border hover:bg-slate-50 dark:hover:bg-slate-800">
          <Printer className="w-4 h-4" />
          {t("press.actions.print", "Print ID")}
        </Button>
        <Button variant="outline" className="w-full h-11 flex items-center justify-center gap-2 bg-white dark:bg-slate-900 border-border hover:bg-slate-50 dark:hover:bg-slate-800">
          <Share2 className="w-4 h-4" />
          {t("press.actions.share", "Share Link")}
        </Button>
      </div>
    </div>
  )
}
