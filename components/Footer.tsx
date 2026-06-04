export default function Footer() {
  return (
    <footer style={{ background: '#170b24' }}>
      {/* CTA band */}
      <div style={{ background: 'linear-gradient(135deg, #241538, #6f4698)' }}>
        <div className="max-w-7xl mx-auto px-6 py-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4"
            style={{ fontFamily: 'Syne, sans-serif' }}>
            Compliant. Traceable. Passport-Ready.
          </h2>
          <p className="text-blue-200 mb-3 text-lg" style={{ fontFamily: 'DM Sans, sans-serif' }}>
            Enable steel products to meet ESPR and Digital Product Passport requirements with verified product-level data.
          </p>
          <p className="text-sm mb-8" style={{ color: 'rgba(255,255,255,0.5)', fontFamily: 'DM Sans, sans-serif' }}>
            Blockchain backed Product traceability · Carbon visibility · Recycled content proof · DPP readiness
          </p>
          <div className="inline-flex items-center gap-4 px-8 py-4 rounded-2xl text-sm font-semibold"
            style={{ background: 'rgba(168,63,150,0.2)', border: '1px solid rgba(168,63,150,0.3)', color: '#d3b8f0', fontFamily: 'DM Sans, sans-serif' }}>
            Preparing companies for EU market access, green steel credibility, and audit-ready compliance.
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-4 gap-10 mb-10">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-8 h-8 rounded-lg flex items-center justify-center"
                style={{ background: 'linear-gradient(135deg, #6f4698, #a83f96)' }}>
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                  <path d="M3 14L9 4L15 14H3Z" fill="white" fillOpacity="0.9" />
                  <path d="M6 14L9 9L12 14H6Z" fill="white" fillOpacity="0.5" />
                </svg>
              </div>
              <span className="font-bold text-white" style={{ fontFamily: 'Syne, sans-serif' }}>
                Emertech Innovations
              </span>
            </div>
            <p className="text-sm mb-4 leading-relaxed" style={{ color: 'rgba(255,255,255,0.5)', fontFamily: 'DM Sans, sans-serif' }}>
              Building the operating system for Steel ESPR, CBAM, Carbon Accounting, Traceability, and Digital Product Passports.
            </p>
            <div className="space-y-2">
              {[
                { label: 'info@emertech.io', icon: '✉️' },
                { label: '+91-7798781421', icon: '📞' },
                { label: 'emertech.io', icon: '🌐' },
              ].map(c => (
                <div key={c.label} className="flex items-center gap-2 text-xs"
                  style={{ color: 'rgba(255,255,255,0.5)', fontFamily: 'DM Sans, sans-serif' }}>
                  <span>{c.icon}</span>
                  <span>{c.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Platform */}
          <div>
            <h4 className="text-sm font-bold text-white mb-4" style={{ fontFamily: 'Syne, sans-serif' }}>
              Platform
            </h4>
            <ul className="space-y-2">
              {[
                'ESPR Readiness Assessment',
                'Steel Traceability Engine',
                'Carbon Footprint Engine',
                'DPP Generator',
                'CBAM Module',
                'Blockchain Verification',
              ].map(item => (
                <li key={item}>
                  <a href="#platform" className="text-sm transition-colors hover:text-white"
                    style={{ color: 'rgba(255,255,255,0.45)', fontFamily: 'DM Sans, sans-serif' }}>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Solutions */}
          <div>
            <h4 className="text-sm font-bold text-white mb-4" style={{ fontFamily: 'Syne, sans-serif' }}>
              Solutions
            </h4>
            <ul className="space-y-2">
              {[
                ['Battery Passport Platform', 'https://battery-passport.emertech.io'],
                ['EUDR Compliance Platform', 'https://eudr.emertech.io'],
                ['ESPR Steel Platform', '#'],
                ['Emertech.io', 'https://emertech.io'],
              ].map(([label, href]) => (
                <li key={label}>
                  <a href={href} className="text-sm transition-colors hover:text-white"
                    style={{ color: 'rgba(255,255,255,0.45)', fontFamily: 'DM Sans, sans-serif' }}>
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4"
          style={{ borderTop: '1px solid rgba(255,255,255,0.08)' }}>
          <p className="text-xs" style={{ color: 'rgba(255,255,255,0.3)', fontFamily: 'DM Sans, sans-serif' }}>
            © 2024 Emertech Innovations. All rights reserved. Proprietary & Confidential.
          </p>
          <div className="flex items-center gap-3">
            {['ESPR Ready', 'CBAM Module', 'DPP Generator', 'Blockchain Verified'].map(tag => (
              <span key={tag} className="text-xs px-2.5 py-1 rounded-full"
                style={{
                  background: 'rgba(168,63,150,0.1)',
                  color: 'rgba(168,63,150,0.7)',
                  border: '1px solid rgba(168,63,150,0.15)',
                  fontFamily: 'DM Sans, sans-serif',
                }}>
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
