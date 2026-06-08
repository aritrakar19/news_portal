import { useState } from "react"
import { Link, useLocation } from "react-router-dom"
import { Menu, Search, User } from "lucide-react"
import { useTranslation } from "react-i18next"
import { Sheet, SheetContent, SheetTrigger, SheetTitle, SheetDescription } from "@/components/ui/sheet"
import { LanguageSwitcher } from "./LanguageSwitcher"

export function Navbar() {
  const { t } = useTranslation()
  const [isOpen, setIsOpen] = useState(false)
  const location = useLocation()

  return (
    <header className="sticky top-0 z-50 w-full glass">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-6">
          <Link to="/" className="flex flex-col items-start gap-0.5">
            <span className="font-heading text-xl font-extrabold tracking-tight text-primary">
              PUBLIC NEWS 1
            </span>
            <span className="text-[0.65rem] font-medium tracking-wider text-muted-foreground uppercase hidden md:inline-block">
              Har Khabar Janata Tak
            </span>
          </Link>
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
            <Link to="/" className="transition-colors hover:text-primary">{t('nav.home')}</Link>
            <Link to="/politics" className="transition-colors hover:text-primary text-muted-foreground">{t('nav.politics')}</Link>
            <Link to="/business" className="transition-colors hover:text-primary text-muted-foreground">{t('nav.business')}</Link>
            <Link to="/tech" className="transition-colors hover:text-primary text-muted-foreground">{t('nav.tech')}</Link>
            <Link to="/reporter/apply" className="transition-colors hover:text-accent text-accent">{t('nav.reporterNetwork')}</Link>
          </nav>
        </div>

        <div className="flex items-center gap-4">
          <button className="text-muted-foreground hover:text-foreground transition-colors">
            <Search className="h-5 w-5" />
          </button>
          <LanguageSwitcher />
          <Link 
            to="/reporter" 
            className="hidden md:flex h-9 items-center justify-center rounded-md bg-slate-900 px-4 text-sm font-medium text-slate-50 shadow transition-colors hover:bg-slate-900/90 dark:bg-slate-50 dark:text-slate-900 dark:hover:bg-slate-50/90"
          >
            {t('nav.submitStory')}
          </Link>
          <Link to="/admin" className="h-9 w-9 flex items-center justify-center rounded-full bg-slate-100 hover:bg-slate-200 transition-colors dark:bg-slate-800 dark:hover:bg-slate-700">
            <User className="h-4 w-4" />
          </Link>
          
          {/* Mobile Navigation Drawer */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <button className="md:hidden text-foreground">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle navigation menu</span>
              </button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
              <SheetDescription className="sr-only">Main navigation for the website</SheetDescription>
              <nav className="flex flex-col gap-4 mt-8">
                <Link to="/" onClick={() => setIsOpen(false)} className={`text-lg font-medium ${location.pathname === '/' ? 'text-primary' : 'text-muted-foreground'} hover:text-primary transition-colors`}>{t('nav.home')}</Link>
                <Link to="/politics" onClick={() => setIsOpen(false)} className={`text-lg font-medium ${location.pathname === '/politics' ? 'text-primary' : 'text-muted-foreground'} hover:text-primary transition-colors`}>{t('nav.politics')}</Link>
                <Link to="/business" onClick={() => setIsOpen(false)} className={`text-lg font-medium ${location.pathname === '/business' ? 'text-primary' : 'text-muted-foreground'} hover:text-primary transition-colors`}>{t('nav.business')}</Link>
                <Link to="/tech" onClick={() => setIsOpen(false)} className={`text-lg font-medium ${location.pathname === '/tech' ? 'text-primary' : 'text-muted-foreground'} hover:text-primary transition-colors`}>{t('nav.tech')}</Link>
                <Link to="/reporter/apply" onClick={() => setIsOpen(false)} className="text-lg font-medium text-accent hover:text-accent/80 transition-colors">{t('nav.reporterNetwork')}</Link>
                <div className="my-4 border-t border-border"></div>
                <Link 
                  to="/reporter" 
                  onClick={() => setIsOpen(false)}
                  className="flex h-10 w-full items-center justify-center rounded-md bg-primary px-4 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90"
                >
                  {t('nav.submitStory')}
                </Link>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}

