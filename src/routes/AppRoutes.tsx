import { createBrowserRouter } from "react-router-dom"
import { PublicLayout } from "@/layouts/PublicLayout"
import { ReporterLayout } from "@/layouts/ReporterLayout"

import { HomePage } from "@/features/home/HomePage"
import { PoliticsPage } from "@/features/politics/PoliticsPage"
import { BusinessPage } from "@/features/business/BusinessPage"
import { TechPage } from "@/features/tech/TechPage"
import { ReporterRegistrationPage } from "@/features/reporter-registration/ReporterRegistrationPage"
import { ReporterDashboard } from "@/features/reporter-dashboard/ReporterDashboard"
import { UploadNewsPage } from "@/features/upload-news/UploadNewsPage"
import { MyNewsPage } from "@/features/my-news/MyNewsPage"
import { ReporterProfilePage } from "@/features/reporter-profile/ReporterProfilePage"
import { PressIdPage } from "@/features/press-id/PressIdPage"
import { EarningsPage } from "@/features/earnings/EarningsPage"
import { WalletPage } from "@/features/wallet/WalletPage"
import { ReferralsPage } from "@/features/referrals/ReferralsPage"
import { AdminDashboardLayout } from "@/layouts/AdminDashboardLayout"
import { AdminDashboard } from "@/features/admin-dashboard/AdminDashboard"
import { ReportersManagementPage } from "@/features/admin-reporters/ReportersManagementPage"
import { AdminNewsPage } from "@/features/admin-news/AdminNewsPage"
import { AdminFinancePage } from "@/features/admin-finance/AdminFinancePage"
import { AdminAdsPage } from "@/features/admin-ads/AdminAdsPage"
import { AdminUsersPage } from "@/features/admin-users/AdminUsersPage"
import { AdminSettingsPage } from "@/features/admin-settings/AdminSettingsPage"

// Temporary placeholder components for routes
const Placeholder = ({ title }: { title: string }) => (
  <div className="flex flex-col items-center justify-center min-h-[50vh] text-center px-4">
    <h1 className="text-3xl font-heading font-bold text-slate-900 dark:text-white mb-4">{title}</h1>
    <p className="text-muted-foreground max-w-md">This section is currently under development.</p>
  </div>
)

export const router = createBrowserRouter([
  {
    path: "/",
    element: <PublicLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "reporter/apply", element: <ReporterRegistrationPage /> },
      { path: "politics", element: <PoliticsPage /> },
      { path: "business", element: <BusinessPage /> },
      { path: "tech", element: <TechPage /> },
      { path: "*", element: <Placeholder title="Page Not Found" /> },
    ],
  },
  {
    path: "/reporter",
    element: <ReporterLayout />,
    children: [
      { index: true, element: <ReporterDashboard /> },
      { path: "upload", element: <UploadNewsPage /> },
      { path: "stories", element: <MyNewsPage /> },
      { path: "earnings", element: <EarningsPage /> },
      { path: "wallet", element: <WalletPage /> },
      { path: "referrals", element: <ReferralsPage /> },
      { path: "press-id", element: <PressIdPage /> },
      { path: "settings", element: <ReporterProfilePage /> },
    ],
  },
  {
    path: "/admin",
    element: <AdminDashboardLayout />,
    children: [
      { index: true, element: <AdminDashboard /> },
      { path: "reporters", element: <ReportersManagementPage /> },
      { path: "news", element: <AdminNewsPage /> },
      { path: "earnings", element: <AdminFinancePage /> },
      { path: "wallet-requests", element: <AdminFinancePage /> },
      { path: "ads", element: <AdminAdsPage /> },
      { path: "users", element: <AdminUsersPage /> },
      { path: "settings", element: <AdminSettingsPage /> },
    ],
  },
])
