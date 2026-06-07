import { Outlet, Link } from "react-router-dom"
import { Sidebar } from "@/components/shared/Sidebar"
import { Bell, Menu, ShieldCheck } from "lucide-react"

export function AdminLayout() {
  return (
    <div className="flex min-h-screen bg-slate-100 dark:bg-slate-950">
      <Sidebar isAdmin={true} />
      
      <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
        <header className="sticky top-0 z-30 flex h-16 items-center gap-4 border-b border-border bg-card/90 px-4 sm:px-6 backdrop-blur-lg shadow-sm">
          <button className="md:hidden text-muted-foreground hover:text-foreground">
            <Menu className="h-5 w-5" />
          </button>
          
          <div className="flex-1 flex items-center gap-2">
            <ShieldCheck className="h-5 w-5 text-primary hidden md:block" />
            <span className="font-medium text-sm text-muted-foreground hidden md:block">
              Admin Control Center
            </span>
            <Link to="/" className="md:hidden font-heading font-bold text-primary">
              PN1 Admin
            </Link>
          </div>
          
          <div className="flex items-center gap-4">
            <button className="relative text-muted-foreground hover:text-foreground">
              <Bell className="h-5 w-5" />
            </button>
            <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center cursor-pointer border border-primary/20">
              <span className="text-xs font-bold text-primary">AD</span>
            </div>
          </div>
        </header>
        
        <main className="flex-1 overflow-y-auto p-4 sm:p-6 lg:p-8">
          <div className="mx-auto max-w-6xl animate-fade-in">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  )
}
