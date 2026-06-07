export type NewsStatus = "Pending Review" | "Under Review" | "Approved" | "Rejected" | "Published"
export type FactCheckStatus = "Verified" | "Needs Verification" | "Flagged"
export type PriorityLevel = "Normal" | "Important" | "Breaking News"

export interface NewsStory {
  id: string
  headline: string
  content: string
  thumbnail: string
  reporter: {
    name: string
    id: string
    avatar: string
  }
  category: string
  state: string
  district: string
  submissionDate: string
  views: number
  status: NewsStatus
  factCheckStatus: FactCheckStatus
  priority: PriorityLevel
  uploadedPhotos: string[]
  uploadedVideos: string[]
  editorialNotes: string
}

export const mockNews: NewsStory[] = [
  {
    id: "NWS-2024-001",
    headline: "Massive Infrastructure Project Announced for Mumbai Metropolitan Region",
    content: "The state government today announced a massive 50,000 crore infrastructure development plan aimed at decongesting the Mumbai Metropolitan Region. The project includes new metro lines, coastal roads, and affordable housing initiatives. Chief Minister stated this will create over 1 lakh jobs in the next five years.",
    thumbnail: "https://images.unsplash.com/photo-1548345680-f5475ea90f12?w=800&q=80",
    reporter: {
      name: "Aarav Sharma",
      id: "REP-9821-432",
      avatar: "https://i.pravatar.cc/150?u=aarav"
    },
    category: "Politics",
    state: "Maharashtra",
    district: "Mumbai",
    submissionDate: "2024-05-12T10:30:00Z",
    views: 45020,
    status: "Published",
    factCheckStatus: "Verified",
    priority: "Important",
    uploadedPhotos: ["https://images.unsplash.com/photo-1548345680-f5475ea90f12?w=800&q=80"],
    uploadedVideos: [],
    editorialNotes: "Approved by Senior Editor. Verified government press release."
  },
  {
    id: "NWS-2024-002",
    headline: "Local Farmers Protest Water Shortage in Marathwada",
    content: "Hundreds of farmers gathered at the district collectorate demanding immediate release of water for agriculture. Due to delayed monsoons, crops are failing across 50 villages.",
    thumbnail: "https://images.unsplash.com/photo-1595841696677-6489ff3f8cd1?w=800&q=80",
    reporter: {
      name: "Anjali Desai",
      id: "REP-7890-345",
      avatar: "https://i.pravatar.cc/150?u=anjali"
    },
    category: "Agriculture",
    state: "Maharashtra",
    district: "Pune",
    submissionDate: new Date().toISOString(),
    views: 0,
    status: "Pending Review",
    factCheckStatus: "Needs Verification",
    priority: "Normal",
    uploadedPhotos: [
      "https://images.unsplash.com/photo-1595841696677-6489ff3f8cd1?w=800&q=80",
      "https://images.unsplash.com/photo-1592982537447-6f23f1146313?w=800&q=80"
    ],
    uploadedVideos: ["https://example.com/video1.mp4"],
    editorialNotes: ""
  },
  {
    id: "NWS-2024-003",
    headline: "Tech Startups Boom in Tier 2 Cities: Lucknow Leads the Pack",
    content: "A recent survey shows a 300% increase in tech startup registrations in Lucknow over the past year. Government incentives and cheaper real estate are driving entrepreneurs away from traditional hubs like Bengaluru.",
    thumbnail: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&q=80",
    reporter: {
      name: "Rahul Verma",
      id: "REP-1290-567",
      avatar: "https://i.pravatar.cc/150?u=rahul"
    },
    category: "Business",
    state: "Uttar Pradesh",
    district: "Lucknow",
    submissionDate: "2024-05-11T14:15:00Z",
    views: 1205,
    status: "Under Review",
    factCheckStatus: "Verified",
    priority: "Normal",
    uploadedPhotos: ["https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&q=80"],
    uploadedVideos: [],
    editorialNotes: "Check survey source link before publishing."
  },
  {
    id: "NWS-2024-004",
    headline: "Major Fire Breakout at Chemical Factory Industrial Area",
    content: "A massive fire broke out at a chemical processing unit late last night. Five fire tenders are currently at the spot. No casualties reported so far, but local residents have been asked to evacuate due to toxic fumes.",
    thumbnail: "https://images.unsplash.com/photo-1599557457497-15d97f2624df?w=800&q=80",
    reporter: {
      name: "Vikram Singh",
      id: "REP-3456-789",
      avatar: "https://i.pravatar.cc/150?u=vikram"
    },
    category: "Breaking",
    state: "Rajasthan",
    district: "Jaipur",
    submissionDate: new Date().toISOString(),
    views: 0,
    status: "Pending Review",
    factCheckStatus: "Needs Verification",
    priority: "Breaking News",
    uploadedPhotos: ["https://images.unsplash.com/photo-1599557457497-15d97f2624df?w=800&q=80"],
    uploadedVideos: ["https://example.com/fire-footage.mp4"],
    editorialNotes: "Needs immediate review for push notification."
  },
  {
    id: "NWS-2024-005",
    headline: "Fake University Operating in Kerala Busted by Local Police",
    content: "Police raided a facility claiming to be an international university and offering fake degrees for 5 Lakh rupees. Three individuals were arrested, and hundreds of fake certificates were seized.",
    thumbnail: "https://images.unsplash.com/photo-1581342678665-685b3eb52fb3?w=800&q=80",
    reporter: {
      name: "Karthik Nair",
      id: "REP-2345-678",
      avatar: "https://i.pravatar.cc/150?u=karthik"
    },
    category: "Crime",
    state: "Kerala",
    district: "Thiruvananthapuram",
    submissionDate: "2024-05-10T09:45:00Z",
    views: 0,
    status: "Rejected",
    factCheckStatus: "Flagged",
    priority: "Important",
    uploadedPhotos: ["https://images.unsplash.com/photo-1581342678665-685b3eb52fb3?w=800&q=80"],
    uploadedVideos: [],
    editorialNotes: "Story rejected due to lack of official police FIR copy. Needs more proof."
  }
]
