import { motion } from "framer-motion"
import { NewsForm } from "./components/NewsForm"
import { SubmissionSidebar } from "./components/SubmissionSidebar"
import { useTranslation } from "react-i18next"

export function UploadNewsPage() {
  const { t } = useTranslation()

  return (
    <div className="pb-12">
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-8"
      >
        <h1 className="text-3xl font-heading font-extrabold text-slate-900 dark:text-white">{t("upload.title", "Submit News Story")}</h1>
        <p className="text-muted-foreground mt-2 max-w-2xl">
          {t("upload.subtitle", "Contribute to PUBLIC NEWS 1 by uploading your verified story. Please ensure all facts are accurate and images are clear. Submissions go through an editorial review before publishing.")}
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        <motion.div 
          className="lg:col-span-8"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <NewsForm />
        </motion.div>

        <motion.div 
          className="lg:col-span-4"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <SubmissionSidebar />
        </motion.div>
      </div>
    </div>
  )
}
