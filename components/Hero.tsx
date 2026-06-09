export default function Hero() {
  return (
    <section
      className="relative min-h-screen flex items-center overflow-hidden pt-8"
      style={{ backgroundColor: '#f5f3ff' }}
    >
      {/* Background pattern */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Grid lines */}
        <svg className="absolute inset-0 w-full h-full opacity-[0.06]" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke="#6f4698" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>

        {/* Glowing orbs */}
        <div className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full opacity-20"
          style={{ background: 'radial-gradient(circle, #c084fc 0%, transparent 70%)' }} />
        <div className="absolute bottom-1/4 left-1/4 w-80 h-80 rounded-full opacity-10"
          style={{ background: 'radial-gradient(circle, #a78bfa 0%, transparent 70%)' }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-24 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left content */}
          <div>


            <h1 className="text-5xl lg:text-6xl font-bold leading-[1.1] mb-6"
              style={{ color: '#241538', fontFamily: "'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif" }}>
              ESPR & CBAM<br />
              <span style={{ color: '#6f4698' }}>Compliance</span> for<br />
              Steel Manufacturers
            </h1>

            <p className="text-lg mb-8 leading-relaxed max-w-lg"
              style={{ color: '#4b5563', fontFamily: 'Raleway, sans-serif' }}>
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
                  style={{ background: 'rgba(111,70,152,0.08)', color: '#6f4698', border: '1px solid rgba(111,70,152,0.18)', fontFamily: 'Raleway, sans-serif' }}>
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <circle cx="6" cy="6" r="5.5" stroke="#a83f96" strokeWidth="1" />
                    <path d="M3.5 6L5.5 8L8.5 4" stroke="#a83f96" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
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
                style={{ backgroundColor: '#a83f96', color: 'white', fontFamily: 'Raleway, sans-serif' }}
              >
                Book a Demo
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
              <a
                href="#what"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-lg font-semibold text-sm transition-all duration-200 hover:bg-purple-50"
                style={{ color: '#6f4698', border: '1px solid rgba(111,70,152,0.3)', fontFamily: 'Raleway, sans-serif' }}
              >
                Assess Readiness
              </a>
            </div>
          </div>

          {/* Right: Dashboard preview card */}
          <div className="hidden lg:block">
            <div className="relative">
              {/* Main card */}
              <div className="rounded-2xl overflow-hidden shadow-2xl bg-white"
                style={{ border: '1px solid #e5e7eb' }}>
                {/* Card header */}
                <div className="px-6 py-4 flex items-center gap-3"
                  style={{ borderBottom: '1px solid #f3f4f6' }}>
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-400 opacity-60"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-400 opacity-60"></div>
                    <div className="w-3 h-3 rounded-full bg-green-400 opacity-60"></div>
                  </div>
                  <span className="text-xs text-gray-500 ml-2" style={{ fontFamily: 'Raleway, sans-serif' }}>
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
                        style={{ background: '#f5f3ff', border: '1px solid rgba(111,70,152,0.15)' }}>
                        <div className="text-xl font-bold text-gray-900" style={{ fontFamily: 'Raleway, sans-serif' }}>
                          {stat.value}
                        </div>
                        <div className="text-xs mt-1 text-gray-500" style={{ fontFamily: 'Raleway, sans-serif' }}>
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
                    style={{ background: '#f5f3ff', border: '1px solid rgba(111,70,152,0.15)' }}>
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-8 h-8 rounded-lg flex items-center justify-center"
                        style={{ background: 'rgba(168,63,150,0.2)' }}>
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                          <rect x="2" y="1" width="12" height="14" rx="2" stroke="#a83f96" strokeWidth="1.2" />
                          <path d="M5 5H11M5 7.5H11M5 10H8" stroke="#a83f96" strokeWidth="1" strokeLinecap="round" />
                        </svg>
                      </div>
                      <div>
                        <div className="text-sm font-semibold text-gray-900" style={{ fontFamily: 'Raleway, sans-serif' }}>
                          Steel Coil — Batch #SC-2847
                        </div>
                        <div className="text-xs text-gray-500">Digital Product Passport</div>
                      </div>
                      <div className="ml-auto">
                        <span className="text-xs px-2.5 py-1 rounded-full font-semibold"
                          style={{ background: 'rgba(168,63,150,0.15)', color: '#a83f96' }}>
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
                        <div key={item.key} className="flex justify-between items-center text-xs py-1.5 px-3 rounded-lg bg-white border border-slate-100">
                          <span className="text-gray-500" style={{ fontFamily: 'Raleway, sans-serif' }}>{item.key}</span>
                          <span className="font-semibold text-gray-900" style={{ fontFamily: 'Raleway, sans-serif' }}>{item.val}</span>
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
                          <span className="text-xs text-gray-500" style={{ fontFamily: 'Raleway, sans-serif' }}>{bar.label}</span>
                          <span className="text-xs font-semibold text-gray-700" style={{ fontFamily: 'Raleway, sans-serif' }}>{bar.pct}%</span>
                        </div>
                        <div className="h-1.5 rounded-full bg-gray-100">
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
              <div className="absolute -bottom-6 -left-20 xl:-left-24 rounded-2xl p-4 shadow-2xl bg-white z-10"
                style={{ border: '1px solid #e5e7eb' }}>
                <div className="flex flex-col items-center gap-2.5">
                  <div className="w-24 h-24 bg-white p-1 rounded-xl border border-gray-100 flex items-center justify-center relative">
                    {/* Corner markers for scan effect */}
                    <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-purple-500 rounded-tl-sm"></div>
                    <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-purple-500 rounded-tr-sm"></div>
                    <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-purple-500 rounded-bl-sm"></div>
                    <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-purple-500 rounded-br-sm"></div>

                    {/* Actual QR SVG */}
                    <img src="/qr-code.svg" alt="Digital Product Passport QR" className="w-full h-full object-contain mix-blend-multiply opacity-90 p-1" />
                  </div>
                  <div className="text-[10px] font-bold text-gray-500 uppercase tracking-wider" style={{ fontFamily: 'Raleway, sans-serif' }}>
                    Scan Passport
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom stats */}
        <div className="mt-20 pt-10" style={{ borderTop: '1px solid rgba(111,70,152,0.15)' }}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { val: '90+', label: 'Mandatory Data Points Covered', sub: 'End-to-end coverage' },
              { val: '6', label: 'Data Categories', sub: 'Steel DPP requirements' },
              { val: '100%', label: 'Blockchain Backed', sub: 'Tamper-evident records' },
              { val: '2027', label: 'ESPR Deadline', sub: 'Start preparing now' },
            ].map(stat => (
              <div key={stat.label}>
                <div className="text-3xl font-bold mb-1" style={{ fontFamily: 'Raleway, sans-serif', color: '#6f4698' }}>
                  {stat.val}
                </div>
                <div className="text-sm font-semibold mb-0.5" style={{ color: '#241538', fontFamily: 'Raleway, sans-serif' }}>
                  {stat.label}
                </div>
                <div className="text-xs" style={{ color: '#9ca3af', fontFamily: 'Raleway, sans-serif' }}>
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
