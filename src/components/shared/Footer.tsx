import { Link } from "react-router-dom"
import { useTranslation } from "react-i18next"

export function Footer() {
  const { t } = useTranslation()
  return (
    <footer className="bg-slate-900 text-slate-300 py-12 md:py-16">
      <div className="container grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="space-y-4">
          <Link to="/" className="flex flex-col items-start gap-0.5">
            <span className="font-heading text-2xl font-extrabold tracking-tight text-white">
              {t('footer.title')}
            </span>
            <span className="text-xs font-medium tracking-wider text-slate-400 uppercase">
              {t('footer.subtitle')}
            </span>
          </Link>
          <p className="text-sm text-slate-400 leading-relaxed max-w-xs">
            {t('footer.description')}
          </p>
        </div>
        
        <div className="space-y-4">
          <h3 className="font-heading font-semibold text-white">{t('footer.categories')}</h3>
          <ul className="space-y-2 text-sm">
            <li><Link to="/politics" className="hover:text-primary transition-colors">{t('nav.politics')}</Link></li>
            <li><Link to="/business" className="hover:text-primary transition-colors">{t('nav.business')}</Link></li>
            <li><Link to="/tech" className="hover:text-primary transition-colors">{t('nav.tech')}</Link></li>
            <li><Link to="/sports" className="hover:text-primary transition-colors">{t('footer.sports')}</Link></li>
          </ul>
        </div>

        <div className="space-y-4">
          <h3 className="font-heading font-semibold text-white">{t('footer.network')}</h3>
          <ul className="space-y-2 text-sm">
            <li><Link to="/reporter/apply" className="hover:text-primary transition-colors">{t('footer.joinReporter')}</Link></li>
            <li><Link to="/press-id" className="hover:text-primary transition-colors">{t('footer.verifyPressId')}</Link></li>
            <li><Link to="/reporter" className="hover:text-primary transition-colors">{t('footer.reporterLogin')}</Link></li>
            <li><Link to="/guidelines" className="hover:text-primary transition-colors">{t('footer.guidelines')}</Link></li>
          </ul>
        </div>

        <div className="space-y-4">
          <h3 className="font-heading font-semibold text-white">{t('footer.legal')}</h3>
          <ul className="space-y-2 text-sm">
            <li><Link to="/about" className="hover:text-primary transition-colors">{t('footer.aboutUs')}</Link></li>
            <li><Link to="/contact" className="hover:text-primary transition-colors">{t('footer.contact')}</Link></li>
            <li><Link to="/privacy" className="hover:text-primary transition-colors">{t('footer.privacyPolicy')}</Link></li>
            <li><Link to="/terms" className="hover:text-primary transition-colors">{t('footer.termsOfService')}</Link></li>
          </ul>
        </div>
      </div>
      
      <div className="container mt-12 pt-8 border-t border-slate-800 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500">
        <p>{t('footer.rights', { year: new Date().getFullYear() })}</p>
        <div className="flex items-center gap-4">
          <span>{t('footer.registeredMedia')}</span>
        </div>
      </div>
    </footer>
  )
}
