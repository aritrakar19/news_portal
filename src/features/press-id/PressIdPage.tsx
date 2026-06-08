import { motion } from "framer-motion"
import { PressCard } from "./components/PressCard"
import { VerificationPanel } from "./components/VerificationPanel"
import { SecurityFeatures } from "./components/SecurityFeatures"
import { ActionButtons } from "./components/ActionButtons"
import "./components/flip-utilities.css"
import { useTranslation } from "react-i18next"

export function PressIdPage() {
  const { t } = useTranslation()

  return (
    <div className="pb-12">
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-8"
      >
        <h1 className="text-3xl font-heading font-extrabold text-slate-900 dark:text-white">{t("press.title", "Digital Press Identity")}</h1>
        <p className="text-muted-foreground mt-2 max-w-2xl">
          {t("press.subtitle", "Your official PUBLIC NEWS 1 reporter identification. This digital card serves as your authorized press credential for reporting on the field.")}
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
        {/* Left Column: Interactive Card */}
        <motion.div 
          className="lg:col-span-6 xl:col-span-5 flex flex-col items-center justify-center"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <div className="w-full mb-6 relative">
            <PressCard />
          </div>
          <p className="text-sm text-muted-foreground text-center animate-pulse">
            {t("press.flipHint", "Click the card to flip")}
          </p>
        </motion.div>

        {/* Right Column: Details & Actions */}
        <motion.div 
          className="lg:col-span-6 xl:col-span-7 space-y-6"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <VerificationPanel />
          <SecurityFeatures />
          <div className="pt-2">
            <ActionButtons />
          </div>
        </motion.div>
      </div>
    </div>
  )
}
