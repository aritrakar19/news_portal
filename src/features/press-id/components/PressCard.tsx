import { useState } from "react"
import { motion } from "framer-motion"
import { QrCode, ShieldCheck, Repeat, Phone } from "lucide-react"
import { useTranslation } from "react-i18next"

export function PressCard() {
  const { t } = useTranslation()
  const [isFlipped, setIsFlipped] = useState(false)

  return (
    <div className="relative w-full max-w-[340px] h-[520px] mx-auto perspective-1000 group">
      
      {/* Flip Button (visible on hover or focus, or we can just make the card clickable) */}
      <button 
        onClick={() => setIsFlipped(!isFlipped)}
        className="absolute -top-12 right-0 flex items-center gap-2 text-sm font-medium text-slate-500 hover:text-slate-900 dark:hover:text-white transition-colors"
      >
        <Repeat className="w-4 h-4" />
        {t("press.card.flipCard", "Flip Card")}
      </button>

      <motion.div
        className="w-full h-full relative preserve-3d cursor-pointer"
        onClick={() => setIsFlipped(!isFlipped)}
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6, type: "spring", stiffness: 260, damping: 20 }}
        style={{ transformStyle: "preserve-3d" }}
      >
        
        {/* FRONT OF CARD */}
        <div className="absolute inset-0 backface-hidden w-full h-full rounded-2xl overflow-hidden shadow-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 flex flex-col">
          {/* Top Banner */}
          <div className="h-28 bg-gradient-to-r from-primary to-primary/80 relative flex flex-col items-center justify-center pt-2">
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 mix-blend-overlay"></div>
            <h2 className="text-white font-heading font-black tracking-wider text-xl uppercase">{t("press.card.orgName", "Public News 1")}</h2>
            <p className="text-primary-foreground/80 text-[10px] font-semibold tracking-[0.2em] uppercase mt-1">{t("press.card.subtitle", "Press Identity Card")}</p>
            <div className="absolute bottom-0 left-0 w-full h-2 bg-yellow-400"></div>
          </div>

          {/* Photo & Badge */}
          <div className="relative flex justify-center -mt-12 mb-2">
            <div className="w-28 h-28 rounded-xl border-4 border-white dark:border-slate-950 overflow-hidden bg-slate-200 shadow-md relative z-10">
              <img 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80" 
                alt="Reporter" 
                className="w-full h-full object-cover"
              width={800} height={400} onError={(e) => { e.currentTarget.src = 'https://images.unsplash.com/photo-1585829365295-ab7cd400c167?q=80&w=800&auto=format&fit=crop'; e.currentTarget.onerror = null; }} />
            </div>
            {/* Hologram mock */}
            <div className="absolute top-12 -right-2 w-8 h-8 rounded-full bg-gradient-to-tr from-amber-200 via-amber-400 to-amber-600 border border-amber-300 opacity-90 shadow-sm flex items-center justify-center z-20">
              <ShieldCheck className="w-4 h-4 text-amber-900" />
            </div>
          </div>

          {/* Details */}
          <div className="px-6 pb-6 flex-1 flex flex-col text-center">
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white uppercase font-heading tracking-wide">Rahul Sharma</h3>
            <p className="text-primary font-bold text-sm tracking-widest uppercase mt-1">{t("press.card.role", "Senior Reporter")}</p>
            
            <div className="mt-4 grid grid-cols-2 gap-x-2 gap-y-3 text-left bg-slate-50 dark:bg-slate-900/50 p-3 rounded-lg border border-slate-100 dark:border-slate-800/50">
              <div>
                <p className="text-[9px] text-slate-500 uppercase font-bold tracking-wider">{t("press.card.idNumber", "ID Number")}</p>
                <p className="font-mono text-xs font-bold text-slate-800 dark:text-slate-200">PN1-MH-0842</p>
              </div>
              <div>
                <p className="text-[9px] text-slate-500 uppercase font-bold tracking-wider">{t("press.card.bloodGroup", "Blood Group")}</p>
                <p className="text-xs font-bold text-red-600 dark:text-red-500">O+ Positive</p>
              </div>
              <div>
                <p className="text-[9px] text-slate-500 uppercase font-bold tracking-wider">{t("press.card.state", "State")}</p>
                <p className="text-xs font-semibold text-slate-800 dark:text-slate-200 truncate">Maharashtra</p>
              </div>
              <div>
                <p className="text-[9px] text-slate-500 uppercase font-bold tracking-wider">{t("press.card.district", "District")}</p>
                <p className="text-xs font-semibold text-slate-800 dark:text-slate-200 truncate">Mumbai</p>
              </div>
            </div>

            <div className="mt-auto flex items-end justify-between pt-4">
              <div className="text-left">
                <p className="text-[9px] text-slate-500 uppercase font-bold tracking-wider">{t("press.card.validTill", "Valid Till")}</p>
                <p className="text-sm font-bold text-slate-900 dark:text-white">Dec 31, 2027</p>
              </div>
              <div className="w-14 h-14 bg-white p-1 rounded-md shadow-sm border border-slate-200">
                <QrCode className="w-full h-full text-slate-900" />
              </div>
            </div>
          </div>
        </div>

        {/* BACK OF CARD */}
        <div 
          className="absolute inset-0 backface-hidden w-full h-full rounded-2xl overflow-hidden shadow-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900 flex flex-col"
          style={{ transform: "rotateY(180deg)" }}
        >
          {/* Magnetic Stripe Mock */}
          <div className="w-full h-12 bg-slate-800 dark:bg-slate-950 mt-6 opacity-90"></div>

          <div className="p-6 flex-1 flex flex-col text-sm">
            <h4 className="font-bold text-slate-900 dark:text-white mb-2 uppercase text-xs tracking-wider">{t("press.card.tcTitle", "Terms & Conditions")}</h4>
            <ul className="text-[10px] text-slate-600 dark:text-slate-400 space-y-1.5 list-disc pl-3 text-justify">
              <li>{t("press.card.tc1", "This card is the property of PUBLIC NEWS 1.")}</li>
              <li>{t("press.card.tc2", "It must be surrendered upon termination of service or upon demand by the issuing authority.")}</li>
              <li>{t("press.card.tc3", "Loss of this card must be reported immediately to the head office.")}</li>
              <li>{t("press.card.tc4", "This card authorizes the bearer to gather news and information on behalf of the organization.")}</li>
            </ul>

            <div className="mt-6 bg-white dark:bg-slate-950 p-3 rounded border border-slate-200 dark:border-slate-800">
              <div className="flex items-center gap-2 mb-1">
                <Phone className="w-3 h-3 text-primary" />
                <p className="text-[10px] uppercase font-bold tracking-wider text-slate-500">{t("press.card.emergency", "Emergency Contact")}</p>
              </div>
              <p className="text-xs font-bold">+91 1800-123-4567</p>
            </div>

            <div className="mt-auto pt-4 text-center">
              <div className="w-32 h-8 border-b-2 border-slate-300 dark:border-slate-700 mx-auto mb-1 flex items-end justify-center">
                <span className="font-signature text-xl text-slate-800 dark:text-slate-300 opacity-80">{t("press.card.authorised", "Authorised")}</span>
              </div>
              <p className="text-[9px] uppercase font-bold text-slate-500 tracking-widest">{t("press.card.issuer", "Issuing Authority")}</p>
            </div>

            <div className="mt-4 pt-3 border-t border-slate-200 dark:border-slate-800 text-center">
              <p className="text-[8px] text-slate-400">{t("press.card.verifyAt", "Verify at: verify.publicnews1.in/PN1-MH-0842")}</p>
              {/* Fake Barcode */}
              <div className="w-full h-6 mt-2 flex items-center justify-center opacity-50 dark:opacity-30">
                <div className="w-48 h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiPjxyZWN0IHdpZHRoPSIzIiBoZWlnaHQ9IjEwMCUiIHg9IjAiIGZpbGw9IiMwMDAiLz48cmVjdCB3aWR0aD0iMSIgaGVpZ2h0PSIxMDAlIiB4PSI1IiBmaWxsPSIjMDAwIi8+PHJlY3Qgd2lkdGg9IjIiIGhlaWdodD0iMTAwJSIgeD0iOCIgZmlsbD0iIzAwMCIvPjxyZWN0IHdpZHRoPSI0IiBoZWlnaHQ9IjEwMCUiIHg9IjEzIiBmaWxsPSIjMDAwIi8+PHJlY3Qgd2lkdGg9IjEiIGhlaWdodD0iMTAwJSIgeD0iMTkiIGZpbGw9IiMwMDAiLz48cmVjdCB3aWR0aD0iMiIgaGVpZ2h0PSIxMDAlIiB4PSIyMiIgZmlsbD0iIzAwMCIvPjxyZWN0IHdpZHRoPSIzIiBoZWlnaHQ9IjEwMCUiIHg9IjI2IiBmaWxsPSIjMDAwIi8+PHJlY3Qgd2lkdGg9IjEiIGhlaWdodD0iMTAwJSIgeD0iMzEiIGZpbGw9IiMwMDAiLz48cmVjdCB3aWR0aD0iMiIgaGVpZ2h0PSIxMDAlIiB4PSIzNCIgZmlsbD0iIzAwMCIvPjxyZWN0IHdpZHRoPSIyIiBoZWlnaHQ9IjEwMCUiIHg9IjM4IiBmaWxsPSIjMDAwIi8+PHJlY3Qgd2lkdGg9IjQiIGhlaWdodD0iMTAwJSIgeD0iNDIiIGZpbGw9IiMwMDAiLz48cmVjdCB3aWR0aD0iMSIgaGVpZ2h0PSIxMDAlIiB4PSI0OCIgZmlsbD0iIzAwMCIvPjxyZWN0IHdpZHRoPSIyIiBoZWlnaHQ9IjEwMCUiIHg9IjUxIiBmaWxsPSIjMDAwIi8+PHJlY3Qgd2lkdGg9IjMiIGhlaWdodD0iMTAwJSIgeD0iNTUiIGZpbGw9IiMwMDAiLz48cmVjdCB3aWR0aD0iMSIgaGVpZ2h0PSIxMDAlIiB4PSI2MCIgZmlsbD0iIzAwMCIvPjxyZWN0IHdpZHRoPSIyIiBoZWlnaHQ9IjEwMCUiIHg9IjYzIiBmaWxsPSIjMDAwIi8+PC9zdmc+')] bg-repeat-x"></div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}
