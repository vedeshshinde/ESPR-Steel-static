export default function Hero() {
  return (
    <section
      className="relative min-h-screen flex items-center overflow-hidden pt-16"
      style={{
        background: 'linear-gradient(160deg, #170b24 0%, #241538 35%, #6f4698 65%, #1c1230 100%)',
      }}
    >
      {/* Background pattern */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Grid lines */}
        <svg className="absolute inset-0 w-full h-full opacity-10" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke="white" strokeWidth="0.5"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>

        {/* Glowing orbs */}
        <div className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full opacity-20"
          style={{ background: 'radial-gradient(circle, #a83f96 0%, transparent 70%)' }} />
        <div className="absolute bottom-1/4 left-1/4 w-80 h-80 rounded-full opacity-15"
          style={{ background: 'radial-gradient(circle, #8d7cc3 0%, transparent 70%)' }} />

        {/* Diagonal accent */}
        <div className="absolute right-0 top-0 w-1/2 h-full opacity-5"
          style={{ background: 'linear-gradient(45deg, transparent 40%, rgba(168,63,150,0.8) 100%)' }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-24 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left content */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <span className="tag text-xs font-semibold tracking-widest uppercase px-4 py-2 rounded-full"
                style={{ background: 'rgba(168,63,150,0.15)', color: '#d3b8f0', border: '1px solid rgba(168,63,150,0.3)', fontFamily: 'DM Sans, sans-serif' }}>
                EU ESPR Compliance Platform
              </span>
            </div>

            <h1 className="text-5xl lg:text-6xl font-bold text-white leading-[1.1] mb-6"
              style={{ fontFamily: 'Syne, sans-serif' }}>
              ESPR & CBAM<br />
              <span style={{ color: '#d3b8f0' }}>Compliance</span> for<br />
              Steel Manufacturers
            </h1>

            <p className="text-lg text-blue-100 mb-8 leading-relaxed max-w-lg"
              style={{ fontFamily: 'DM Sans, sans-serif', opacity: 0.85 }}>
              Generate Digital Product Passports, calculate carbon footprints, verify recycled content, and maintain access to European markets — from one platform.
            </p>

            {/* Trust badges */}
            <div className="flex flex-wrap gap-3 mb-10">
              {[
                'ESPR Ready',
                'CBAM Module',
                'DPP Generator',
                'Blockchain Verified',
              ].map(badge => (
                <span key={badge} className="flex items-center gap-1.5 text-sm px-3 py-1.5 rounded-full"
                  style={{ background: 'rgba(255,255,255,0.08)', color: 'rgba(255,255,255,0.85)', border: '1px solid rgba(255,255,255,0.12)', fontFamily: 'DM Sans, sans-serif' }}>
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <circle cx="6" cy="6" r="5.5" stroke="#a83f96" strokeWidth="1"/>
                    <path d="M3.5 6L5.5 8L8.5 4" stroke="#a83f96" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  {badge}
                </span>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-lg font-semibold text-sm transition-all duration-200 hover:scale-105"
                style={{ background: 'linear-gradient(135deg, #a83f96, #9b4fa8)', color: 'white', fontFamily: 'DM Sans, sans-serif' }}
              >
                Book a Demo
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
              <a
                href="#what"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-lg font-semibold text-sm transition-all duration-200 hover:bg-white/10"
                style={{ color: 'white', border: '1px solid rgba(255,255,255,0.25)', fontFamily: 'DM Sans, sans-serif' }}
              >
                Assess Readiness
              </a>
            </div>
          </div>

          {/* Right: Dashboard preview card */}
          <div className="hidden lg:block">
            <div className="relative">
              {/* Main card */}
              <div className="rounded-2xl overflow-hidden shadow-2xl"
                style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.12)', backdropFilter: 'blur(20px)' }}>
                {/* Card header */}
                <div className="px-6 py-4 flex items-center gap-3"
                  style={{ borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-400 opacity-60"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-400 opacity-60"></div>
                    <div className="w-3 h-3 rounded-full bg-green-400 opacity-60"></div>
                  </div>
                  <span className="text-xs text-blue-200 ml-2" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                    ESPR Compliance Dashboard
                  </span>
                </div>

                {/* Card body */}
                <div className="p-6 space-y-4">
                  {/* Stats row */}
                  <div className="grid grid-cols-3 gap-3">
                    {[
                      { label: 'DPPs Issued', value: '2,847', change: '+12%', color: '#a83f96' },
                      { label: 'Carbon Score', value: '1.7 t', change: 'CO₂e/t', color: '#8d7cc3' },
                      { label: 'Compliance', value: '94%', change: 'EU Ready', color: '#22c55e' },
                    ].map(stat => (
                      <div key={stat.label} className="rounded-xl p-4"
                        style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.08)' }}>
                        <div className="text-xl font-bold text-white" style={{ fontFamily: 'Syne, sans-serif' }}>
                          {stat.value}
                        </div>
                        <div className="text-xs mt-1" style={{ color: 'rgba(255,255,255,0.5)', fontFamily: 'DM Sans, sans-serif' }}>
                          {stat.label}
                        </div>
                        <div className="text-xs mt-1 font-semibold" style={{ color: stat.color }}>
                          {stat.change}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Product passport preview */}
                  <div className="rounded-xl p-4"
                    style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }}>
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-8 h-8 rounded-lg flex items-center justify-center"
                        style={{ background: 'rgba(168,63,150,0.2)' }}>
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                          <rect x="2" y="1" width="12" height="14" rx="2" stroke="#a83f96" strokeWidth="1.2"/>
                          <path d="M5 5H11M5 7.5H11M5 10H8" stroke="#a83f96" strokeWidth="1" strokeLinecap="round"/>
                        </svg>
                      </div>
                      <div>
                        <div className="text-sm font-semibold text-white" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                          Steel Coil — Batch #SC-2847
                        </div>
                        <div className="text-xs" style={{ color: 'rgba(255,255,255,0.45)' }}>Digital Product Passport</div>
                      </div>
                      <div className="ml-auto">
                        <span className="text-xs px-2.5 py-1 rounded-full font-semibold"
                          style={{ background: 'rgba(168,63,150,0.15)', color: '#d3b8f0' }}>
                          EU Ready
                        </span>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-2">
                      {[
                        { key: 'Grade', val: 'S355J2' },
                        { key: 'Route', val: 'EAF' },
                        { key: 'Carbon', val: '1.7 kg CO₂e' },
                        { key: 'Recycled', val: '68%' },
                      ].map(item => (
                        <div key={item.key} className="flex justify-between items-center text-xs py-1.5 px-3 rounded-lg"
                          style={{ background: 'rgba(255,255,255,0.04)' }}>
                          <span style={{ color: 'rgba(255,255,255,0.45)', fontFamily: 'DM Sans, sans-serif' }}>{item.key}</span>
                          <span className="font-semibold" style={{ color: 'rgba(255,255,255,0.9)', fontFamily: 'DM Sans, sans-serif' }}>{item.val}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Progress bars */}
                  <div className="space-y-2.5">
                    {[
                      { label: 'Traceability Data', pct: 92 },
                      { label: 'Carbon Documentation', pct: 78 },
                      { label: 'DPP Completeness', pct: 85 },
                    ].map(bar => (
                      <div key={bar.label}>
                        <div className="flex justify-between mb-1">
                          <span className="text-xs" style={{ color: 'rgba(255,255,255,0.5)', fontFamily: 'DM Sans, sans-serif' }}>{bar.label}</span>
                          <span className="text-xs font-semibold" style={{ color: 'rgba(255,255,255,0.8)', fontFamily: 'DM Sans, sans-serif' }}>{bar.pct}%</span>
                        </div>
                        <div className="h-1.5 rounded-full" style={{ background: 'rgba(255,255,255,0.08)' }}>
                          <div className="h-1.5 rounded-full" style={{
                            width: `${bar.pct}%`,
                            background: 'linear-gradient(90deg, #6f4698, #a83f96)',
                          }} />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Floating badge */}
              <div className="absolute -bottom-4 -left-6 rounded-xl px-4 py-3 shadow-xl"
                style={{ background: 'white', border: '1px solid #e5e7eb' }}>
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg flex items-center justify-center"
                    style={{ background: '#f0fdf4' }}>
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path d="M8 1L10.5 5.5H15L11.5 8.5L13 13L8 10L3 13L4.5 8.5L1 5.5H5.5L8 1Z"
                        fill="#22c55e" fillOpacity="0.8"/>
                    </svg>
                  </div>
                  <div>
                    <div className="text-xs font-bold text-gray-800" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                      Audit Ready
                    </div>
                    <div className="text-xs text-gray-500" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                      Blockchain verified
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom stats */}
        <div className="mt-20 pt-10" style={{ borderTop: '1px solid rgba(255,255,255,0.08)' }}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { val: '9', label: 'Compliance Modules', sub: 'End-to-end coverage' },
              { val: '6', label: 'Data Categories', sub: 'Steel DPP requirements' },
              { val: '100%', label: 'Blockchain Backed', sub: 'Tamper-evident records' },
              { val: '2027', label: 'ESPR Deadline', sub: 'Start preparing now' },
            ].map(stat => (
              <div key={stat.label}>
                <div className="text-3xl font-bold text-white mb-1" style={{ fontFamily: 'Syne, sans-serif', color: '#d3b8f0' }}>
                  {stat.val}
                </div>
                <div className="text-sm font-semibold text-white mb-0.5" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                  {stat.label}
                </div>
                <div className="text-xs" style={{ color: 'rgba(255,255,255,0.45)', fontFamily: 'DM Sans, sans-serif' }}>
                  {stat.sub}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
