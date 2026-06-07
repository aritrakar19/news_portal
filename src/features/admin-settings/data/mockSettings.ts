export interface SystemConfig {
  general: {
    platformName: string
    tagline: string
    contactEmail: string
    supportNumber: string
    officeAddress: string
    timeZone: string
    language: string
  }
  branding: {
    primaryColor: string
    secondaryColor: string
  }
  reporter: {
    enableRegistration: boolean
    registrationFee: number
    autoApproval: boolean
    manualApproval: boolean
    referralProgram: boolean
    minProfileCompletion: number
  }
  pressId: {
    prefix: string
    expiryDays: number
    qrVerification: boolean
    autoGeneration: boolean
  }
  payments: {
    withdrawalMinimum: number
    processingTimeDays: number
    gateways: {
      razorpay: boolean
      stripe: boolean
      payu: boolean
      manual: boolean
    }
  }
  notifications: {
    email: boolean
    sms: boolean
    push: boolean
    events: {
      registration: boolean
      submission: boolean
      approval: boolean
      withdrawal: boolean
    }
  }
  security: {
    otpVerification: boolean
    twoFactorAuth: boolean
    loginAttemptLimit: number
    sessionTimeoutMinutes: number
  }
  seo: {
    metaTitle: string
    metaDescription: string
    keywords: string
  }
}

export const mockSystemConfig: SystemConfig = {
  general: {
    platformName: "PUBLIC NEWS 1",
    tagline: "The Voice of the Nation",
    contactEmail: "admin@publicnews.com",
    supportNumber: "+91 1800-123-4567",
    officeAddress: "Cyber City, Gurugram, Haryana, India",
    timeZone: "Asia/Kolkata",
    language: "en-US",
  },
  branding: {
    primaryColor: "#dc2626", // red-600
    secondaryColor: "#1e293b", // slate-800
  },
  reporter: {
    enableRegistration: true,
    registrationFee: 0,
    autoApproval: false,
    manualApproval: true,
    referralProgram: true,
    minProfileCompletion: 80,
  },
  pressId: {
    prefix: "PN1-",
    expiryDays: 365,
    qrVerification: true,
    autoGeneration: true,
  },
  payments: {
    withdrawalMinimum: 1000,
    processingTimeDays: 3,
    gateways: {
      razorpay: true,
      stripe: false,
      payu: true,
      manual: true,
    }
  },
  notifications: {
    email: true,
    sms: true,
    push: true,
    events: {
      registration: true,
      submission: true,
      approval: true,
      withdrawal: true,
    }
  },
  security: {
    otpVerification: true,
    twoFactorAuth: false,
    loginAttemptLimit: 5,
    sessionTimeoutMinutes: 120,
  },
  seo: {
    metaTitle: "PUBLIC NEWS 1 - Breaking News, Latest Stories",
    metaDescription: "Stay updated with the latest news, breaking stories, and live reporting from across the country with PUBLIC NEWS 1.",
    keywords: "news, breaking news, india news, public news 1, live tv",
  }
}

export interface ActivityLog {
  id: string
  action: string
  user: string
  timestamp: string
}

export const mockSettingsActivity: ActivityLog[] = [
  { id: "LOG-01", action: "Updated SEO Meta Description", user: "Aritra Chief", timestamp: "10 mins ago" },
  { id: "LOG-02", action: "Enabled Razorpay Gateway", user: "Vikram Tech", timestamp: "2 hours ago" },
  { id: "LOG-03", action: "Changed Primary Brand Color", user: "Aritra Chief", timestamp: "1 day ago" },
  { id: "LOG-04", action: "Disabled Auto-Approval for Reporters", user: "Vikram Tech", timestamp: "2 days ago" },
]

export interface Integration {
  id: string
  name: string
  description: string
  status: "Connected" | "Disconnected"
  icon: string
}

export const mockIntegrations: Integration[] = [
  { id: "INT-1", name: "Google Analytics", description: "Traffic and user behavior tracking", status: "Connected", icon: "Analytics" },
  { id: "INT-2", name: "Google AdSense", description: "Display ads and monetization", status: "Connected", icon: "AdSense" },
  { id: "INT-3", name: "YouTube Live", description: "Live TV stream broadcasting", status: "Connected", icon: "Youtube" },
  { id: "INT-4", name: "Firebase", description: "Push notifications and real-time database", status: "Connected", icon: "Database" },
  { id: "INT-5", name: "WhatsApp API", description: "Automated messaging and alerts", status: "Disconnected", icon: "MessageCircle" },
]
