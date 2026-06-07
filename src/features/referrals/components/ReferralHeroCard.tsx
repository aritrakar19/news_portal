import { useState } from "react"
import { Copy, Check, Share2 } from "lucide-react"
import { Button } from "@/components/ui/button"

export function ReferralHeroCard() {
  const [copiedCode, setCopiedCode] = useState(false)
  const [copiedLink, setCopiedLink] = useState(false)
  
  const REFERRAL_CODE = "PN1-MH-0842"
  const REFERRAL_LINK = "https://publicnews1.in/join/PN1-MH-0842"

  const handleCopy = (text: string, type: 'code' | 'link') => {
    navigator.clipboard.writeText(text)
    if (type === 'code') {
      setCopiedCode(true)
      setTimeout(() => setCopiedCode(false), 2000)
    } else {
      setCopiedLink(true)
      setTimeout(() => setCopiedLink(false), 2000)
    }
  }

  return (
    <div className="bg-gradient-to-r from-blue-900 to-indigo-900 text-white rounded-2xl p-8 relative overflow-hidden shadow-xl">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500 opacity-20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/4 pointer-events-none"></div>
      
      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        <div>
          <span className="inline-block py-1 px-3 rounded-full bg-blue-500/30 text-blue-200 text-xs font-bold mb-4 border border-blue-400/30">
            Reporter Growth Network
          </span>
          <h2 className="text-3xl sm:text-4xl font-heading font-extrabold mb-4 leading-tight">
            Invite reporters.<br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">Earn lifetime commission.</span>
          </h2>
          <p className="text-blue-100/80 mb-6 max-w-md">
            Get ₹200 for every reporter who joins using your code, plus earn 5% of their generated revenue for life.
          </p>
        </div>

        <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20">
          <div className="space-y-4">
            <div>
              <p className="text-xs text-blue-200 uppercase tracking-wider mb-2 font-semibold">Your Referral Code</p>
              <div className="flex gap-2">
                <div className="bg-black/40 border border-white/10 rounded-lg px-4 py-3 flex-1 font-mono text-xl font-bold tracking-widest text-emerald-400 text-center">
                  {REFERRAL_CODE}
                </div>
                <Button 
                  onClick={() => handleCopy(REFERRAL_CODE, 'code')}
                  variant="outline" 
                  className="h-auto px-4 bg-white/10 hover:bg-white/20 border-white/20 text-white"
                >
                  {copiedCode ? <Check className="w-5 h-5 text-emerald-400" /> : <Copy className="w-5 h-5" />}
                </Button>
              </div>
            </div>

            <div>
              <p className="text-xs text-blue-200 uppercase tracking-wider mb-2 font-semibold mt-6">Your Invite Link</p>
              <div className="flex gap-2">
                <div className="bg-black/40 border border-white/10 rounded-lg px-4 py-3 flex-1 font-mono text-sm text-slate-300 truncate">
                  {REFERRAL_LINK}
                </div>
                <Button 
                  onClick={() => handleCopy(REFERRAL_LINK, 'link')}
                  className="h-auto px-4 bg-emerald-500 hover:bg-emerald-600 text-white border-0"
                >
                  {copiedLink ? <Check className="w-5 h-5" /> : <Share2 className="w-5 h-5" />}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
