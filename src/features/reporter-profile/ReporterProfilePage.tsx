import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { motion } from "framer-motion"
import { 
  User, Mail, Phone, MapPin, Briefcase, 
  ShieldCheck, Shield, Lock, FileText, CheckCircle2, 
  AlertCircle, Upload, Eye, RefreshCw
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Separator } from "@/components/ui/separator"
import { toast } from "sonner"
import { useTranslation } from "react-i18next"

// Form Schemas
const personalInfoSchema = z.object({
  fullName: z.string().min(2, "Full name must be at least 2 characters"),
  fatherName: z.string().min(2, "Father's name must be at least 2 characters"),
  dob: z.string().min(1, "Date of birth is required"),
  mobile: z.string().min(10, "Mobile number must be at least 10 digits"),
  email: z.string().email("Invalid email address"),
  address: z.string().min(5, "Address must be at least 5 characters"),
  state: z.string().min(1, "State is required"),
  district: z.string().min(1, "District is required"),
})

const professionalInfoSchema = z.object({
  qualification: z.string().min(1, "Highest qualification is required"),
  experience: z.string().min(1, "Years of experience is required"),
  preferredCategories: z.string().min(1, "Select at least one preferred category"),
  coverageArea: z.string().min(1, "Coverage area is required"),
})

const securitySchema = z.object({
  currentPassword: z.string().min(8, "Password must be at least 8 characters"),
  newPassword: z.string().min(8, "New password must be at least 8 characters"),
  confirmPassword: z.string().min(8, "Please confirm your password"),
}).refine((data) => data.newPassword === data.confirmPassword, {
  message: "Passwords don't match",
  path: ["confirmPassword"],
})

// Dummy Data
const REPORTER_DATA = {
  id: "PN-2023-4892",
  designation: "Senior Field Reporter",
  status: "Active",
  approvalStatus: "Verified",
  pressIdStatus: "Issued",
  membershipValidity: "Oct 24, 2024",
  completionPercentage: 85,
  avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=250&auto=format&fit=crop",
  personal: {
    fullName: "Aritra Das",
    fatherName: "S. K. Das",
    dob: "1990-05-15",
    mobile: "+91 9876543210",
    email: "aritra.das@example.com",
    address: "123, Reporter Enclave, Block A",
    state: "West Bengal",
    district: "Kolkata",
  },
  professional: {
    qualification: "Masters in Journalism",
    experience: "5-10 years",
    preferredCategories: "Politics, Technology, Business",
    coverageArea: "Kolkata Metropolitan Area",
  }
}

export function ReporterProfilePage() {
  const { t } = useTranslation()
  const [activeTab, setActiveTab] = useState("personal")
  const [isSaving, setIsSaving] = useState(false)

  // Forms
  const personalForm = useForm<z.infer<typeof personalInfoSchema>>({
    resolver: zodResolver(personalInfoSchema),
    defaultValues: REPORTER_DATA.personal,
  })

  const professionalForm = useForm<z.infer<typeof professionalInfoSchema>>({
    resolver: zodResolver(professionalInfoSchema),
    defaultValues: REPORTER_DATA.professional,
  })

  const securityForm = useForm<z.infer<typeof securitySchema>>({
    resolver: zodResolver(securitySchema),
    defaultValues: {
      currentPassword: "",
      newPassword: "",
      confirmPassword: "",
    },
  })

  const onPersonalSubmit = () => {
    setIsSaving(true)
    setTimeout(() => {
      setIsSaving(false)
      toast.success("Personal information updated successfully!")
    }, 1000)
  }

  const onProfessionalSubmit = () => {
    setIsSaving(true)
    setTimeout(() => {
      setIsSaving(false)
      toast.success("Professional information updated successfully!")
    }, 1000)
  }

  const onSecuritySubmit = () => {
    setIsSaving(true)
    setTimeout(() => {
      setIsSaving(false)
      securityForm.reset()
      toast.success("Security settings updated successfully!")
    }, 1000)
  }

  return (
    <div className="space-y-6 pb-10">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-heading font-bold text-slate-900 dark:text-white">{t("profile.title", "Reporter Profile")}</h1>
        <p className="text-muted-foreground">{t("profile.subtitle", "Manage your personal information, credentials, and settings.")}</p>
      </div>

      <div className="grid lg:grid-cols-12 gap-6">
        {/* Left Column - Overview Cards */}
        <div className="lg:col-span-4 space-y-6">
          {/* Profile Header */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }}>
            <Card className="border-none shadow-sm bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm overflow-hidden">
              <div className="h-24 bg-gradient-to-r from-primary/80 to-primary/40"></div>
              <CardContent className="px-6 pb-6 pt-0 relative flex flex-col items-center text-center">
                <Avatar className="h-24 w-24 border-4 border-white dark:border-slate-950 -mt-12 shadow-sm">
                  <AvatarImage src={REPORTER_DATA.avatar} alt={REPORTER_DATA.personal.fullName} />
                  <AvatarFallback className="text-2xl font-bold">{REPORTER_DATA.personal.fullName.substring(0, 2).toUpperCase()}</AvatarFallback>
                </Avatar>
                
                <div className="mt-4 space-y-1">
                  <div className="flex items-center justify-center gap-2">
                    <h2 className="text-xl font-bold font-heading">{REPORTER_DATA.personal.fullName}</h2>
                    <Badge className="bg-blue-500/10 text-blue-600 hover:bg-blue-500/20 border-none px-1.5 py-0 flex items-center gap-1 text-[10px]">
                      <CheckCircle2 className="h-3 w-3" /> {t("profile.verified", "Verified")}
                    </Badge>
                  </div>
                  <p className="text-primary font-medium text-sm">{REPORTER_DATA.designation}</p>
                  <p className="text-muted-foreground text-sm flex items-center justify-center gap-1.5">
                    <MapPin className="h-3.5 w-3.5" />
                    {REPORTER_DATA.personal.district}, {REPORTER_DATA.personal.state}
                  </p>
                </div>
                
                <div className="mt-6 w-full pt-6 border-t border-border/50 grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-xs text-muted-foreground mb-1">{t("profile.reporterId", "Reporter ID")}</p>
                    <p className="font-mono text-sm font-semibold">{REPORTER_DATA.id}</p>
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground mb-1">{t("profile.joined", "Joined")}</p>
                    <p className="text-sm font-medium">Jan 2023</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Profile Completion */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3, delay: 0.1 }}>
            <Card className="border-none shadow-sm bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm">
              <CardHeader className="pb-4">
                <CardTitle className="text-base flex items-center justify-between">
                  {t("profile.completion", "Profile Completion")}
                  <span className="text-primary font-bold">{REPORTER_DATA.completionPercentage}%</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <Progress value={REPORTER_DATA.completionPercentage} className="h-2 bg-primary/20" />
                
                <div className="bg-amber-50 dark:bg-amber-500/10 border border-amber-200 dark:border-amber-500/20 rounded-lg p-3 flex items-start gap-3">
                  <AlertCircle className="h-5 w-5 text-amber-500 shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm font-medium text-amber-800 dark:text-amber-400">{t("profile.missingInfo", "Missing Information")}</p>
                    <p className="text-xs text-amber-700/80 dark:text-amber-400/80 mt-1">
                      {t("profile.missingInfoDesc", "Please upload your secondary ID proof to complete your profile to 100%.")}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Account Status */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3, delay: 0.2 }}>
            <Card className="border-none shadow-sm bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm">
              <CardHeader className="pb-4">
                <CardTitle className="text-base flex items-center gap-2">
                  <ShieldCheck className="h-5 w-5 text-primary" />
                  {t("profile.accountStatus", "Account Status")}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">{t("profile.reporterStatus", "Reporter Status")}</span>
                  <Badge variant="outline" className="bg-emerald-50 text-emerald-700 border-emerald-200">{REPORTER_DATA.status}</Badge>
                </div>
                <Separator className="bg-border/50" />
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">{t("profile.approvalStatus", "Approval Status")}</span>
                  <Badge variant="outline" className="bg-emerald-50 text-emerald-700 border-emerald-200">{REPORTER_DATA.approvalStatus}</Badge>
                </div>
                <Separator className="bg-border/50" />
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">{t("profile.pressId", "Press ID")}</span>
                  <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">{REPORTER_DATA.pressIdStatus}</Badge>
                </div>
                <Separator className="bg-border/50" />
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">{t("profile.validUntil", "Valid Until")}</span>
                  <span className="text-sm font-medium text-slate-700 dark:text-slate-300">{REPORTER_DATA.membershipValidity}</span>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Right Column - Forms & Tabs */}
        <div className="lg:col-span-8">
          <Card className="border-none shadow-sm bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm min-h-[600px]">
            <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
              <div className="px-6 pt-6 border-b border-border/50">
                <TabsList className="bg-transparent h-auto p-0 flex flex-wrap gap-6 border-b-0 w-full justify-start">
                  <TabsTrigger 
                    value="personal" 
                    className="data-[state=active]:bg-transparent data-[state=active]:shadow-none data-[state=active]:border-b-2 data-[state=active]:border-primary rounded-none px-0 pb-3 pt-0 text-muted-foreground data-[state=active]:text-foreground"
                  >
                    <User className="h-4 w-4 mr-2" />
                    {t("profile.tabs.personal", "Personal Info")}
                  </TabsTrigger>
                  <TabsTrigger 
                    value="professional"
                    className="data-[state=active]:bg-transparent data-[state=active]:shadow-none data-[state=active]:border-b-2 data-[state=active]:border-primary rounded-none px-0 pb-3 pt-0 text-muted-foreground data-[state=active]:text-foreground"
                  >
                    <Briefcase className="h-4 w-4 mr-2" />
                    {t("profile.tabs.professional", "Professional")}
                  </TabsTrigger>
                  <TabsTrigger 
                    value="documents"
                    className="data-[state=active]:bg-transparent data-[state=active]:shadow-none data-[state=active]:border-b-2 data-[state=active]:border-primary rounded-none px-0 pb-3 pt-0 text-muted-foreground data-[state=active]:text-foreground"
                  >
                    <FileText className="h-4 w-4 mr-2" />
                    {t("profile.tabs.documents", "Documents")}
                  </TabsTrigger>
                  <TabsTrigger 
                    value="security"
                    className="data-[state=active]:bg-transparent data-[state=active]:shadow-none data-[state=active]:border-b-2 data-[state=active]:border-primary rounded-none px-0 pb-3 pt-0 text-muted-foreground data-[state=active]:text-foreground"
                  >
                    <Shield className="h-4 w-4 mr-2" />
                    {t("profile.tabs.security", "Security")}
                  </TabsTrigger>
                </TabsList>
              </div>

              {/* Personal Information Tab */}
              <TabsContent value="personal" className="p-0 m-0 outline-none">
                <Form {...personalForm}>
                  <form onSubmit={personalForm.handleSubmit(onPersonalSubmit)}>
                    <CardContent className="p-6 space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <FormField
                          control={personalForm.control}
                          name="fullName"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>{t("profile.form.fullName", "Full Name")}</FormLabel>
                              <FormControl>
                                <Input placeholder="John Doe" {...field} className="bg-slate-50 dark:bg-slate-800/50" />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={personalForm.control}
                          name="fatherName"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>{t("profile.form.fatherName", "Father's Name")}</FormLabel>
                              <FormControl>
                                <Input placeholder="Robert Doe" {...field} className="bg-slate-50 dark:bg-slate-800/50" />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={personalForm.control}
                          name="dob"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>{t("profile.form.dob", "Date of Birth")}</FormLabel>
                              <FormControl>
                                <Input type="date" {...field} className="bg-slate-50 dark:bg-slate-800/50" />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={personalForm.control}
                          name="mobile"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>{t("profile.form.mobile", "Mobile Number")}</FormLabel>
                              <FormControl>
                                <div className="relative">
                                  <Phone className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
                                  <Input placeholder="+91 9876543210" {...field} className="pl-9 bg-slate-50 dark:bg-slate-800/50" />
                                </div>
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={personalForm.control}
                          name="email"
                          render={({ field }) => (
                            <FormItem className="md:col-span-2">
                              <FormLabel>{t("profile.form.email", "Email Address")}</FormLabel>
                              <FormControl>
                                <div className="relative">
                                  <Mail className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
                                  <Input type="email" placeholder="john@example.com" {...field} className="pl-9 bg-slate-50 dark:bg-slate-800/50" />
                                </div>
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={personalForm.control}
                          name="address"
                          render={({ field }) => (
                            <FormItem className="md:col-span-2">
                              <FormLabel>{t("profile.form.address", "Full Address")}</FormLabel>
                              <FormControl>
                                <Textarea placeholder="123, Main Street, Area" {...field} className="bg-slate-50 dark:bg-slate-800/50 resize-none h-20" />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={personalForm.control}
                          name="state"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>{t("profile.form.state", "State")}</FormLabel>
                              <Select onValueChange={field.onChange} defaultValue={field.value}>
                                <FormControl>
                                  <SelectTrigger className="bg-slate-50 dark:bg-slate-800/50">
                                    <SelectValue placeholder="Select State" />
                                  </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                  <SelectItem value="West Bengal">West Bengal</SelectItem>
                                  <SelectItem value="Maharashtra">Maharashtra</SelectItem>
                                  <SelectItem value="Delhi">Delhi</SelectItem>
                                  <SelectItem value="Karnataka">Karnataka</SelectItem>
                                </SelectContent>
                              </Select>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={personalForm.control}
                          name="district"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>{t("profile.form.district", "District")}</FormLabel>
                              <Select onValueChange={field.onChange} defaultValue={field.value}>
                                <FormControl>
                                  <SelectTrigger className="bg-slate-50 dark:bg-slate-800/50">
                                    <SelectValue placeholder="Select District" />
                                  </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                  <SelectItem value="Kolkata">Kolkata</SelectItem>
                                  <SelectItem value="Howrah">Howrah</SelectItem>
                                  <SelectItem value="Hooghly">Hooghly</SelectItem>
                                  <SelectItem value="Darjeeling">Darjeeling</SelectItem>
                                </SelectContent>
                              </Select>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                    </CardContent>
                    <CardFooter className="px-6 py-4 border-t border-border/50 bg-slate-50/50 dark:bg-slate-900/50 flex justify-end">
                      <Button type="submit" disabled={isSaving} className="min-w-[140px]">
                        {isSaving ? (
                          <div className="flex items-center gap-2">
                            <RefreshCw className="h-4 w-4 animate-spin" /> {t("profile.buttons.saving", "Saving...")}
                          </div>
                        ) : t("profile.buttons.save", "Save Changes")}
                      </Button>
                    </CardFooter>
                  </form>
                </Form>
              </TabsContent>

              {/* Professional Information Tab */}
              <TabsContent value="professional" className="p-0 m-0 outline-none">
                <Form {...professionalForm}>
                  <form onSubmit={professionalForm.handleSubmit(onProfessionalSubmit)}>
                    <CardContent className="p-6 space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <FormField
                          control={professionalForm.control}
                          name="qualification"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>{t("profile.form.qualification", "Highest Qualification")}</FormLabel>
                              <FormControl>
                                <Input placeholder="e.g. Masters in Journalism" {...field} className="bg-slate-50 dark:bg-slate-800/50" />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={professionalForm.control}
                          name="experience"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>{t("profile.form.experience", "Years of Experience")}</FormLabel>
                              <Select onValueChange={field.onChange} defaultValue={field.value}>
                                <FormControl>
                                  <SelectTrigger className="bg-slate-50 dark:bg-slate-800/50">
                                    <SelectValue placeholder="Select Experience" />
                                  </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                  <SelectItem value="0-2 years">0-2 years (Fresher)</SelectItem>
                                  <SelectItem value="2-5 years">2-5 years (Junior)</SelectItem>
                                  <SelectItem value="5-10 years">5-10 years (Senior)</SelectItem>
                                  <SelectItem value="10+ years">10+ years (Veteran)</SelectItem>
                                </SelectContent>
                              </Select>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={professionalForm.control}
                          name="preferredCategories"
                          render={({ field }) => (
                            <FormItem className="md:col-span-2">
                              <FormLabel>{t("profile.form.prefCategories", "Preferred News Categories")}</FormLabel>
                              <FormControl>
                                <Input placeholder="e.g. Politics, Tech, Sports" {...field} className="bg-slate-50 dark:bg-slate-800/50" />
                              </FormControl>
                              <FormDescription>{t("profile.form.prefDesc", "Comma separated list of categories you excel in.")}</FormDescription>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={professionalForm.control}
                          name="coverageArea"
                          render={({ field }) => (
                            <FormItem className="md:col-span-2">
                              <FormLabel>{t("profile.form.coverageArea", "Primary Coverage Area")}</FormLabel>
                              <FormControl>
                                <Input placeholder="e.g. Kolkata Metropolitan Area" {...field} className="bg-slate-50 dark:bg-slate-800/50" />
                              </FormControl>
                              <FormDescription>{t("profile.form.coverageDesc", "The main geographical area you cover for reporting.")}</FormDescription>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                    </CardContent>
                    <CardFooter className="px-6 py-4 border-t border-border/50 bg-slate-50/50 dark:bg-slate-900/50 flex justify-end">
                      <Button type="submit" disabled={isSaving} className="min-w-[140px]">
                        {isSaving ? (
                          <div className="flex items-center gap-2">
                            <RefreshCw className="h-4 w-4 animate-spin" /> {t("profile.buttons.saving", "Saving...")}
                          </div>
                        ) : t("profile.buttons.save", "Save Changes")}
                      </Button>
                    </CardFooter>
                  </form>
                </Form>
              </TabsContent>

              {/* Documents Tab */}
              <TabsContent value="documents" className="p-0 m-0 outline-none">
                <div className="p-6 space-y-6">
                  <div className="bg-blue-50 dark:bg-blue-500/10 border border-blue-200 dark:border-blue-500/20 rounded-lg p-4 flex gap-3">
                    <ShieldCheck className="h-5 w-5 text-blue-600 mt-0.5" />
                    <div>
                      <h4 className="font-medium text-blue-900 dark:text-blue-300">{t("profile.docs.verifyTitle", "Document Verification")}</h4>
                      <p className="text-sm text-blue-700/80 dark:text-blue-300/80 mt-1">
                        {t("profile.docs.verifyDesc", "Keep your documents up to date. Verified documents are required to maintain your active reporter status and press credentials.")}
                      </p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    {/* Document 1 */}
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between p-4 border border-border/50 rounded-xl bg-slate-50/50 dark:bg-slate-800/30 gap-4">
                      <div className="flex items-start gap-4">
                        <div className="h-12 w-12 rounded-lg bg-primary/10 text-primary flex items-center justify-center shrink-0">
                          <FileText className="h-6 w-6" />
                        </div>
                        <div>
                          <h5 className="font-medium">Aadhaar Card</h5>
                          <p className="text-xs text-muted-foreground mt-0.5">Uploaded on Oct 10, 2023 • PDF • 1.2 MB</p>
                          <Badge className="mt-2 bg-emerald-100 text-emerald-700 hover:bg-emerald-100 border-none px-2 py-0">{t("profile.verified", "Verified")}</Badge>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <Button variant="outline" size="sm" className="gap-2"><Eye className="h-4 w-4" /> {t("profile.docs.view", "View")}</Button>
                        <Button variant="outline" size="sm" className="gap-2"><RefreshCw className="h-4 w-4" /> {t("profile.docs.replace", "Replace")}</Button>
                      </div>
                    </div>

                    {/* Document 2 */}
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between p-4 border border-border/50 rounded-xl bg-slate-50/50 dark:bg-slate-800/30 gap-4">
                      <div className="flex items-start gap-4">
                        <div className="h-12 w-12 rounded-lg bg-primary/10 text-primary flex items-center justify-center shrink-0">
                          <FileText className="h-6 w-6" />
                        </div>
                        <div>
                          <h5 className="font-medium">{t("profile.docs.secondaryId", "Secondary ID Proof")}</h5>
                          <p className="text-xs text-amber-600 dark:text-amber-400 mt-0.5">{t("profile.docs.reqComplete", "Required for complete verification")}</p>
                          <Badge variant="outline" className="mt-2 bg-amber-50 text-amber-700 border-amber-200">{t("profile.docs.pending", "Pending Upload")}</Badge>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <Button size="sm" className="gap-2"><Upload className="h-4 w-4" /> {t("profile.docs.upload", "Upload")}</Button>
                      </div>
                    </div>

                    {/* Document 3 */}
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between p-4 border border-border/50 rounded-xl bg-slate-50/50 dark:bg-slate-800/30 gap-4">
                      <div className="flex items-start gap-4">
                        <div className="h-12 w-12 rounded-lg bg-primary/10 text-primary flex items-center justify-center shrink-0">
                          <User className="h-6 w-6" />
                        </div>
                        <div>
                          <h5 className="font-medium">{t("profile.docs.photo", "Profile Photo")}</h5>
                          <p className="text-xs text-muted-foreground mt-0.5">Uploaded on Oct 10, 2023 • JPG • 800 KB</p>
                          <Badge className="mt-2 bg-emerald-100 text-emerald-700 hover:bg-emerald-100 border-none px-2 py-0">{t("profile.verified", "Verified")}</Badge>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <Button variant="outline" size="sm" className="gap-2"><RefreshCw className="h-4 w-4" /> {t("profile.docs.replace", "Replace")}</Button>
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>

              {/* Security Tab */}
              <TabsContent value="security" className="p-0 m-0 outline-none">
                <Form {...securityForm}>
                  <form onSubmit={securityForm.handleSubmit(onSecuritySubmit)}>
                    <CardContent className="p-6 space-y-8">
                      {/* Security Status */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="p-4 border border-border/50 rounded-xl flex items-center justify-between bg-slate-50/50 dark:bg-slate-800/30">
                          <div className="flex items-center gap-3">
                            <div className="p-2 bg-emerald-100 dark:bg-emerald-500/20 text-emerald-600 rounded-lg">
                              <Phone className="h-4 w-4" />
                            </div>
                            <div>
                              <p className="text-sm font-medium">{t("profile.security.mobileVerify", "Mobile Verification")}</p>
                              <p className="text-xs text-muted-foreground">Ends in 3210</p>
                            </div>
                          </div>
                          <Badge className="bg-emerald-100 text-emerald-700 hover:bg-emerald-100 border-none px-2 py-0">{t("profile.verified", "Verified")}</Badge>
                        </div>

                        <div className="p-4 border border-border/50 rounded-xl flex items-center justify-between bg-slate-50/50 dark:bg-slate-800/30">
                          <div className="flex items-center gap-3">
                            <div className="p-2 bg-emerald-100 dark:bg-emerald-500/20 text-emerald-600 rounded-lg">
                              <Mail className="h-4 w-4" />
                            </div>
                            <div>
                              <p className="text-sm font-medium">{t("profile.security.emailVerify", "Email Verification")}</p>
                              <p className="text-xs text-muted-foreground">ari***@example.com</p>
                            </div>
                          </div>
                          <Badge className="bg-emerald-100 text-emerald-700 hover:bg-emerald-100 border-none px-2 py-0">{t("profile.verified", "Verified")}</Badge>
                        </div>
                      </div>

                      <Separator className="bg-border/50" />

                      {/* Password Change */}
                      <div className="space-y-4 max-w-md">
                        <div>
                          <h3 className="text-lg font-heading font-medium">{t("profile.security.changePass", "Change Password")}</h3>
                          <p className="text-sm text-muted-foreground mt-1">{t("profile.security.passDesc", "Ensure your account is using a long, random password to stay secure.")}</p>
                        </div>
                        
                        <div className="space-y-4 pt-2">
                          <FormField
                            control={securityForm.control}
                            name="currentPassword"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>{t("profile.security.currPass", "Current Password")}</FormLabel>
                                <FormControl>
                                  <div className="relative">
                                    <Lock className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
                                    <Input type="password" placeholder="••••••••" {...field} className="pl-9 bg-slate-50 dark:bg-slate-800/50" />
                                  </div>
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                          <FormField
                            control={securityForm.control}
                            name="newPassword"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>{t("profile.security.newPass", "New Password")}</FormLabel>
                                <FormControl>
                                  <div className="relative">
                                    <Lock className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
                                    <Input type="password" placeholder="••••••••" {...field} className="pl-9 bg-slate-50 dark:bg-slate-800/50" />
                                  </div>
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                          <FormField
                            control={securityForm.control}
                            name="confirmPassword"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>{t("profile.security.confirmPass", "Confirm New Password")}</FormLabel>
                                <FormControl>
                                  <div className="relative">
                                    <Lock className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
                                    <Input type="password" placeholder="••••••••" {...field} className="pl-9 bg-slate-50 dark:bg-slate-800/50" />
                                  </div>
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter className="px-6 py-4 border-t border-border/50 bg-slate-50/50 dark:bg-slate-900/50 flex justify-end">
                      <Button type="submit" disabled={isSaving} className="min-w-[140px]">
                        {isSaving ? (
                          <div className="flex items-center gap-2">
                            <RefreshCw className="h-4 w-4 animate-spin" /> {t("profile.buttons.updating", "Updating...")}
                          </div>
                        ) : t("profile.buttons.updatePass", "Update Password")}
                      </Button>
                    </CardFooter>
                  </form>
                </Form>
              </TabsContent>
            </Tabs>
          </Card>
        </div>
      </div>
    </div>
  )
}
