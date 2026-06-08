import { useState } from "react"
import { Outlet, Link } from "react-router-dom"
import { Sidebar } from "@/components/shared/Sidebar"
import { Bell, Menu, Search, CheckCircle2 } from "lucide-react"
import { useTranslation } from "react-i18next"
import { LanguageSwitcher } from "@/components/shared/LanguageSwitcher"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Sheet, SheetContent, SheetTrigger, SheetTitle, SheetDescription } from "@/components/ui/sheet"

export function ReporterLayout() {
  const [isOpen, setIsOpen] = useState(false)
  const { t } = useTranslation()

  return (
    <div className="flex min-h-screen bg-slate-50/50 dark:bg-slate-900/50">
      <Sidebar isAdmin={false} />
      
      <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
        <header className="sticky top-0 z-30 flex h-16 items-center gap-4 border-b border-border bg-card/80 px-4 sm:px-6 backdrop-blur-md shadow-sm">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <button className="md:hidden text-muted-foreground hover:text-foreground">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle Sidebar</span>
              </button>
            </SheetTrigger>
            <SheetContent side="left" className="p-0 w-64">
              <SheetTitle className="sr-only">Mobile Navigation</SheetTitle>
              <SheetDescription className="sr-only">Reporter Hub Navigation</SheetDescription>
              <Sidebar isAdmin={false} className="flex border-none h-full" />
            </SheetContent>
          </Sheet>
          
          <div className="flex-1 flex items-center gap-4">
            <Link to="/" className="md:hidden font-heading font-bold text-primary mr-4">
              {t("reporter.title")}
            </Link>
            <div className="hidden sm:flex items-center relative w-full max-w-sm">
              <Search className="h-4 w-4 absolute left-3 text-muted-foreground" />
              <Input type="search" placeholder={t("reporter.searchPlaceholder")} className="w-full pl-9 bg-slate-100/50 dark:bg-slate-800/50 border-none focus-visible:ring-1" />
            </div>
          </div>
          
          <div className="flex items-center gap-3 sm:gap-4">
            <LanguageSwitcher />
            <button className="relative text-muted-foreground hover:text-foreground transition-colors hidden sm:block">
              <Search className="h-5 w-5 md:hidden" />
            </button>
            <button className="relative text-muted-foreground hover:text-foreground transition-colors">
              <Bell className="h-5 w-5" />
              <span className="absolute top-0 right-0 h-2 w-2 rounded-full bg-destructive border-2 border-card"></span>
            </button>
            <div className="h-6 border-r border-border mx-1 hidden sm:block"></div>
            <div className="flex items-center gap-3">
              <div className="hidden sm:flex flex-col items-end">
                <span className="text-sm font-bold leading-none">Aritra</span>
                <Badge className="bg-green-100 text-green-700 hover:bg-green-200 border-none px-1.5 py-0 mt-1 flex items-center gap-1 text-[10px] h-4">
                  <CheckCircle2 className="h-2.5 w-2.5" /> {t("reporter.verified")}
                </Badge>
              </div>
              <Avatar className="h-9 w-9 border border-border cursor-pointer hover:ring-2 ring-primary/20 transition-all">
                <AvatarImage src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=100&auto=format&fit=crop" />
                <AvatarFallback>AR</AvatarFallback>
              </Avatar>
            </div>
          </div>
        </header>
        
        <main className="flex-1 overflow-y-auto p-4 sm:p-6 lg:p-8">
          <div className="mx-auto max-w-5xl animate-fade-in">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  )
}
