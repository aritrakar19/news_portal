import { Shield, Lock, Fingerprint } from "lucide-react"

export function SecurityFeatures() {
  return (
    <div className="bg-slate-900 dark:bg-card border border-slate-800 text-white shadow-sm rounded-xl overflow-hidden relative">
      <div className="absolute top-0 right-0 w-40 h-40 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
      
      <div className="p-6 border-b border-slate-800 bg-slate-950/50 relative z-10">
        <h3 className="font-heading font-bold text-lg flex items-center gap-2">
          <Shield className="w-5 h-5 text-blue-400" />
          Security Features
        </h3>
      </div>
      
      <div className="p-6 space-y-6 relative z-10">
        <div className="flex gap-4">
          <div className="w-10 h-10 rounded-lg bg-blue-500/20 flex items-center justify-center shrink-0">
            <Lock className="w-5 h-5 text-blue-400" />
          </div>
          <div>
            <h4 className="font-semibold text-sm mb-1 text-slate-100">Cryptographic Signature</h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              This card is protected by a 256-bit cryptographic signature to prevent tampering or unauthorized duplication.
            </p>
          </div>
        </div>

        <div className="flex gap-4">
          <div className="w-10 h-10 rounded-lg bg-purple-500/20 flex items-center justify-center shrink-0">
            <Fingerprint className="w-5 h-5 text-purple-400" />
          </div>
          <div>
            <h4 className="font-semibold text-sm mb-1 text-slate-100">Unique Reporter ID</h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              The assigned ID (PN1-MH-0842) is globally unique and tied permanently to your verified biometric data on file.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
