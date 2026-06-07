import { Link } from "react-router-dom"

export function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 py-12 md:py-16">
      <div className="container grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="space-y-4">
          <Link to="/" className="flex flex-col items-start gap-0.5">
            <span className="font-heading text-2xl font-extrabold tracking-tight text-white">
              PUBLIC NEWS 1
            </span>
            <span className="text-xs font-medium tracking-wider text-slate-400 uppercase">
              Har Khabar Janata Tak
            </span>
          </Link>
          <p className="text-sm text-slate-400 leading-relaxed max-w-xs">
            A premium digital news network empowering local reporters and bringing verified news to the public.
          </p>
        </div>
        
        <div className="space-y-4">
          <h3 className="font-heading font-semibold text-white">Categories</h3>
          <ul className="space-y-2 text-sm">
            <li><Link to="/politics" className="hover:text-primary transition-colors">Politics</Link></li>
            <li><Link to="/business" className="hover:text-primary transition-colors">Business</Link></li>
            <li><Link to="/tech" className="hover:text-primary transition-colors">Tech</Link></li>
            <li><Link to="/sports" className="hover:text-primary transition-colors">Sports</Link></li>
          </ul>
        </div>

        <div className="space-y-4">
          <h3 className="font-heading font-semibold text-white">Network</h3>
          <ul className="space-y-2 text-sm">
            <li><Link to="/reporter/apply" className="hover:text-primary transition-colors">Join as Reporter</Link></li>
            <li><Link to="/press-id" className="hover:text-primary transition-colors">Verify Press ID</Link></li>
            <li><Link to="/reporter" className="hover:text-primary transition-colors">Reporter Login</Link></li>
            <li><Link to="/guidelines" className="hover:text-primary transition-colors">Editorial Guidelines</Link></li>
          </ul>
        </div>

        <div className="space-y-4">
          <h3 className="font-heading font-semibold text-white">Legal</h3>
          <ul className="space-y-2 text-sm">
            <li><Link to="/about" className="hover:text-primary transition-colors">About Us</Link></li>
            <li><Link to="/contact" className="hover:text-primary transition-colors">Contact</Link></li>
            <li><Link to="/privacy" className="hover:text-primary transition-colors">Privacy Policy</Link></li>
            <li><Link to="/terms" className="hover:text-primary transition-colors">Terms of Service</Link></li>
          </ul>
        </div>
      </div>
      
      <div className="container mt-12 pt-8 border-t border-slate-800 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500">
        <p>© {new Date().getFullYear()} PUBLIC NEWS 1. All rights reserved.</p>
        <div className="flex items-center gap-4">
          <span>Registered Digital Media</span>
        </div>
      </div>
    </footer>
  )
}
