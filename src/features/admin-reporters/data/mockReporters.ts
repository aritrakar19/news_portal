

export type ReporterStatus = "Active" | "Pending Approval" | "Suspended" | "Expired"

export interface Reporter {
  id: string
  name: string
  photo: string
  state: string
  district: string
  mobile: string
  registrationDate: string
  pressIdStatus: "Valid" | "Expired" | "Pending"
  accountStatus: ReporterStatus
  aadhaar: string
  qualification: string
  address: string
  earningsSummary: string
  newsSubmissionCount: number
  aadhaarVerified: boolean
  mobileVerified: boolean
  emailVerified: boolean
}

export const mockReporters: Reporter[] = [
  {
    id: "REP-9821-432",
    name: "Aarav Sharma",
    photo: "https://i.pravatar.cc/150?u=aarav",
    state: "Maharashtra",
    district: "Mumbai Suburban",
    mobile: "+91 98765 43210",
    registrationDate: "2023-11-12",
    pressIdStatus: "Valid",
    accountStatus: "Active",
    aadhaar: "XXXX-XXXX-1234",
    qualification: "B.A. Journalism",
    address: "Andheri West, Mumbai, Maharashtra 400053",
    earningsSummary: "₹45,200",
    newsSubmissionCount: 142,
    aadhaarVerified: true,
    mobileVerified: true,
    emailVerified: true,
  },
  {
    id: "REP-4512-890",
    name: "Priya Patel",
    photo: "https://i.pravatar.cc/150?u=priya",
    state: "Gujarat",
    district: "Ahmedabad",
    mobile: "+91 87654 32109",
    registrationDate: "2024-01-05",
    pressIdStatus: "Pending",
    accountStatus: "Pending Approval",
    aadhaar: "XXXX-XXXX-5678",
    qualification: "M.A. Mass Communication",
    address: "Navrangpura, Ahmedabad, Gujarat 380009",
    earningsSummary: "₹0",
    newsSubmissionCount: 0,
    aadhaarVerified: true,
    mobileVerified: true,
    emailVerified: false,
  },
  {
    id: "REP-1290-567",
    name: "Rahul Verma",
    photo: "https://i.pravatar.cc/150?u=rahul",
    state: "Uttar Pradesh",
    district: "Lucknow",
    mobile: "+91 76543 21098",
    registrationDate: "2022-08-22",
    pressIdStatus: "Expired",
    accountStatus: "Expired",
    aadhaar: "XXXX-XXXX-9012",
    qualification: "Diploma in Journalism",
    address: "Gomti Nagar, Lucknow, UP 226010",
    earningsSummary: "₹1,24,500",
    newsSubmissionCount: 412,
    aadhaarVerified: true,
    mobileVerified: true,
    emailVerified: true,
  },
  {
    id: "REP-5678-123",
    name: "Sneha Reddy",
    photo: "https://i.pravatar.cc/150?u=sneha",
    state: "Telangana",
    district: "Hyderabad",
    mobile: "+91 65432 10987",
    registrationDate: "2023-04-18",
    pressIdStatus: "Valid",
    accountStatus: "Suspended",
    aadhaar: "XXXX-XXXX-3456",
    qualification: "B.Sc. Media Science",
    address: "Banjara Hills, Hyderabad, Telangana 500034",
    earningsSummary: "₹32,100",
    newsSubmissionCount: 89,
    aadhaarVerified: true,
    mobileVerified: true,
    emailVerified: true,
  },
  {
    id: "REP-3456-789",
    name: "Vikram Singh",
    photo: "https://i.pravatar.cc/150?u=vikram",
    state: "Rajasthan",
    district: "Jaipur",
    mobile: "+91 91234 56780",
    registrationDate: "2024-02-28",
    pressIdStatus: "Pending",
    accountStatus: "Pending Approval",
    aadhaar: "XXXX-XXXX-7890",
    qualification: "High School (12th Pass)",
    address: "Malviya Nagar, Jaipur, Rajasthan 302017",
    earningsSummary: "₹0",
    newsSubmissionCount: 2,
    aadhaarVerified: false,
    mobileVerified: true,
    emailVerified: false,
  },
  {
    id: "REP-7890-345",
    name: "Anjali Desai",
    photo: "https://i.pravatar.cc/150?u=anjali",
    state: "Maharashtra",
    district: "Pune",
    mobile: "+91 82345 67891",
    registrationDate: "2023-09-15",
    pressIdStatus: "Valid",
    accountStatus: "Active",
    aadhaar: "XXXX-XXXX-2345",
    qualification: "B.A. English Lit",
    address: "Kothrud, Pune, Maharashtra 411038",
    earningsSummary: "₹85,000",
    newsSubmissionCount: 275,
    aadhaarVerified: true,
    mobileVerified: true,
    emailVerified: true,
  },
  {
    id: "REP-2345-678",
    name: "Karthik Nair",
    photo: "https://i.pravatar.cc/150?u=karthik",
    state: "Kerala",
    district: "Thiruvananthapuram",
    mobile: "+91 73456 89012",
    registrationDate: "2023-01-10",
    pressIdStatus: "Valid",
    accountStatus: "Active",
    aadhaar: "XXXX-XXXX-6789",
    qualification: "PG Diploma in Digital Media",
    address: "Vazhuthacaud, Thiruvananthapuram, Kerala 695014",
    earningsSummary: "₹1,12,000",
    newsSubmissionCount: 320,
    aadhaarVerified: true,
    mobileVerified: true,
    emailVerified: true,
  }
]
