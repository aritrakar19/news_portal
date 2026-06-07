import { motion } from "framer-motion"
import type { Variants } from "framer-motion"
import { Separator } from "@/components/ui/separator"

// Import all sections
import { NewsTicker } from "./components/NewsTicker"
import { HeroGrid } from "./components/HeroGrid"
import { FeaturedStory } from "./components/FeaturedStory"
import { NewsGrid } from "./components/NewsGrid"
import type { NewsStory } from "./components/NewsGrid"
import { StateWiseNews } from "./components/StateWiseNews"
import { CategorySection } from "./components/CategorySection"
import { LiveTvPreview } from "./components/LiveTvPreview"
import { CallToActionGroup } from "./components/CallToActionGroup"
import { AdvertisementBanner } from "./components/AdvertisementBanner"
import { NewsletterSection } from "./components/NewsletterSection"

// Dummy Data for the reusable NewsGrid components
const TOP_HEADLINES: NewsStory[] = [
  { id: 101, title: "Supreme Court Delivers Landmark Verdict on Digital Privacy", summary: "The ruling limits how tech companies can collect and monetize user data without explicit consent.", category: "Law", time: "1 hr ago", image: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?q=80&w=800&auto=format&fit=crop" },
  { id: 102, title: "Tech Stocks Surge as Inflation Data Comes in Lower Than Expected", summary: "Markets rallied aggressively on Thursday as new consumer price index numbers showed cooling inflation.", category: "Finance", time: "2 hrs ago", image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=800&auto=format&fit=crop" },
  { id: 103, title: "New Space Telescope Captures Stunning Images of Distant Galaxies", summary: "Astronomers call the newly released infrared images 'revolutionary' for our understanding of the early universe.", category: "Science", time: "4 hrs ago", image: "https://images.unsplash.com/photo-1462331940025-496dfbfc7564?q=80&w=800&auto=format&fit=crop" },
  { id: 104, title: "Major Healthcare Reform Bill Passes Senate After Marathon Session", summary: "The comprehensive package aims to cap prescription drug costs and expand coverage for millions.", category: "Politics", time: "5 hrs ago", image: "https://images.unsplash.com/photo-1555861496-faa66bfcb974?q=80&w=800&auto=format&fit=crop" },
]

const TRENDING_NEWS: NewsStory[] = [
  { id: 201, title: "Viral Sensation: The Local Bakery That Won International Awards", summary: "How a small family-owned shop beat out Parisian patisseries to claim the top spot.", category: "Lifestyle", time: "Trending Now", image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=800&auto=format&fit=crop" },
  { id: 202, title: "Electric Vehicle Sales Double in the First Quarter of 2026", summary: "Subsidies and improved charging infrastructure drive unprecedented adoption rates.", category: "Automotive", time: "Trending Now", image: "https://images.unsplash.com/photo-1593941707882-a5bba14938cb?q=80&w=800&auto=format&fit=crop" },
  { id: 203, title: "Championship Underdog Stuns Defending Title Holders", summary: "In the biggest upset of the decade, the amateur team secured a 2-1 victory in the final minutes.", category: "Sports", time: "Trending Now", image: "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?q=80&w=800&auto=format&fit=crop" },
  { id: 204, title: "Breakthrough Battery Technology Promises 1000-Mile Range", summary: "Researchers have developed a solid-state battery that could revolutionize the EV industry.", category: "Tech", time: "Trending Now", image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=800&auto=format&fit=crop" },
]

// Animation variant for smooth scroll-reveal
const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
}

export function HomePage() {
  return (
    <div className="w-full flex flex-col">
      {/* 1. Breaking News Ticker */}
      <NewsTicker />
      
      {/* 2. Hero Section (No scroll animation, should load immediately) */}
      <HeroGrid />
      
      {/* 3. Top Headlines Grid */}
      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeInUp}>
        <NewsGrid title="Top Headlines" stories={TOP_HEADLINES} />
      </motion.div>
      
      {/* 4. Advertisement space */}
      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeInUp}>
        <AdvertisementBanner />
      </motion.div>
      
      {/* 5. Featured/Exclusive Story */}
      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeInUp}>
        <FeaturedStory />
      </motion.div>
      
      {/* 6. State Wise News Tabs */}
      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeInUp}>
        <StateWiseNews />
      </motion.div>
      
      {/* 7. Trending News Grid */}
      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeInUp}>
        <NewsGrid title="Trending Now" stories={TRENDING_NEWS} />
      </motion.div>
      
      <Separator className="my-8" />
      
      {/* 8. Live TV Preview */}
      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeInUp}>
        <LiveTvPreview />
      </motion.div>
      
      {/* 9. Categories */}
      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeInUp}>
        <CategorySection />
      </motion.div>
      
      {/* 10. Call to Actions (Reporter & Press ID) */}
      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeInUp}>
        <CallToActionGroup />
      </motion.div>
      
      {/* 11. Newsletter */}
      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeInUp}>
        <NewsletterSection />
      </motion.div>
      
    </div>
  )
}
