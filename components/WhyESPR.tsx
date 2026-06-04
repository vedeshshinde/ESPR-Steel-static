export default function WhyESPR() {
  const reasons = [
    {
      num: '01',
      title: 'EU Market Access',
      headline: 'Steel exports will depend on verified product data, not just product quality.',
      body: 'ESPR will make sustainability data part of EU market access, buyer approvals, and supply contracts. Companies without compliant digital records risk losing European customers.',
      color: '#6f4698',
    },
    {
      num: '02',
      title: 'Structured Digital Proof',
      headline: 'EU-ready steel will need structured digital proof.',
      body: 'Traceability, carbon footprint, recycled content, and circularity data must be structured and verifiable — not buried in spreadsheets and PDFs.',
      color: '#8d3f98',
    },
    {
      num: '03',
      title: 'Buyer Expectations',
      headline: 'Large customers will prefer verified suppliers.',
      body: 'OEMs and infrastructure buyers will expect passport-ready product data as a baseline procurement requirement, creating competitive advantage for prepared manufacturers.',
      color: '#7c3aed',
    },
  ]

  const products = [
    { label: 'Flat Steel', sub: 'Coils, sheets, plates' },
    { label: 'Long Steel', sub: 'Bars, rods, rebars' },
    { label: 'Semi-Finished', sub: 'Slabs, billets, blooms' },
    { label: 'Steel Components', sub: 'EU value chain inputs' },
  ]

  return (
    <section id="why" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left */}
          <div>
            <span className="tag tag-purple mb-4 inline-block" style={{ fontFamily: 'DM Sans, sans-serif' }}>
              Why It Matters
            </span>
            <h2 className="text-4xl font-bold mb-6" style={{ color: '#241538', fontFamily: 'Syne, sans-serif' }}>
              Why ESPR Matters for<br />Steel Exporters
            </h2>
            <p className="text-base leading-relaxed mb-10" style={{ color: '#6b7280', fontFamily: 'DM Sans, sans-serif' }}>
              Verified product data makes ESPR compliance a gateway to EU markets and green steel positioning. The regulation is not just a compliance hurdle — it's a competitive dividing line.
            </p>

            <div className="space-y-6">
              {reasons.map(r => (
                <div key={r.num} className="flex gap-5">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold text-white"
                    style={{ background: r.color, fontFamily: 'Syne, sans-serif' }}>
                    {r.num}
                  </div>
                  <div>
                    <span className="text-xs font-semibold tracking-wider uppercase mb-1 block"
                      style={{ color: r.color, fontFamily: 'DM Sans, sans-serif' }}>
                      {r.title}
                    </span>
                    <h4 className="font-bold text-gray-900 mb-1.5" style={{ fontFamily: 'Syne, sans-serif' }}>
                      {r.headline}
                    </h4>
                    <p className="text-sm text-gray-500 leading-relaxed" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                      {r.body}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Products covered + DPP info */}
          <div className="space-y-6">
            {/* Products */}
            <div className="rounded-2xl p-8 border border-gray-100 bg-white shadow-sm">
              <h3 className="text-xl font-bold mb-2" style={{ color: '#241538', fontFamily: 'Syne, sans-serif' }}>
                Which Products Are Covered?
              </h3>
              <p className="text-sm text-gray-500 mb-6" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                The EU has prioritised iron and steel under the ESPR working plan.
              </p>
              <div className="grid grid-cols-2 gap-3">
                {products.map(p => (
                  <div key={p.label} className="rounded-xl p-4 border border-gray-100 hover:border-blue-200 transition-colors">
                    <div className="font-bold text-base text-gray-800" style={{ fontFamily: 'Syne, sans-serif' }}>
                      {p.label}
                    </div>
                    <div className="text-xs text-gray-400 mt-1" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                      {p.sub}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* CBAM callout */}
            <div className="rounded-2xl p-6 text-white"
              style={{ background: 'linear-gradient(135deg, #8d3f98, #7a3182)' }}>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: 'rgba(255,255,255,0.15)' }}>
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M10 2L12.5 7H18L13.5 10.5L15 16L10 12.5L5 16L6.5 10.5L2 7H7.5L10 2Z"
                      fill="white" fillOpacity="0.9" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold mb-1.5" style={{ fontFamily: 'Syne, sans-serif' }}>
                    CBAM Also Applies
                  </h4>
                  <p className="text-sm leading-relaxed" style={{ opacity: 0.85, fontFamily: 'DM Sans, sans-serif' }}>
                    The Carbon Border Adjustment Mechanism (CBAM) requires steel exporters to report and pay for embedded carbon emissions when selling to the EU. Our platform handles both ESPR and CBAM from a single data layer.
                  </p>
                </div>
              </div>
            </div>



            {/* CTA */}
            <div className="mt-8 pt-4">
              <a
                href="#contact"
                className="w-full flex items-center justify-center gap-2 px-7 py-4 rounded-xl font-semibold text-sm transition-all duration-200 hover:opacity-90 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
                style={{ background: 'linear-gradient(135deg, #241538, #6f4698)', color: 'white', fontFamily: 'DM Sans, sans-serif' }}
              >
                Prepare Your Compliance Roadmap
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Horizontal Timeline - High Importance */}
        <div className="mt-24 relative rounded-3xl p-8 md:p-10 overflow-hidden shadow-[0_12px_40px_rgb(239,68,68,0.12)] border border-red-100 transition-all hover:shadow-[0_16px_50px_rgb(239,68,68,0.18)] bg-white">
          {/* Background subtle gradient */}
          <div className="absolute inset-0 opacity-40 pointer-events-none"
            style={{ background: 'radial-gradient(circle at right top, rgba(239,68,68,0.12), transparent 60%)' }}></div>
          
          <div className="relative z-10 flex flex-col md:flex-row gap-10 md:items-center">
            
            {/* Header Area */}
            <div className="md:w-1/3 flex-shrink-0">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-sm"
                  style={{ background: 'linear-gradient(135deg, #fff5f5, #fee2e2)', border: '1px solid rgba(239,68,68,0.2)' }}>
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
                    <path d="M12 8V12L14.5 14.5M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="#ef4444" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div>
                  <p className="text-xs font-bold text-red-500 uppercase tracking-widest" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                    Action Required Now
                  </p>
                  <h4 className="font-bold text-gray-900 text-3xl leading-tight mt-1" style={{ fontFamily: 'Syne, sans-serif' }}>
                    Critical Deadlines
                  </h4>
                </div>
              </div>
              <p className="text-sm text-gray-600 leading-relaxed" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                The window to prepare your data infrastructure is closing. Non-compliance risks losing access to European buyers.
              </p>
            </div>

            {/* Horizontal Timeline Steps */}
            <div className="md:w-2/3 grid grid-cols-1 md:grid-cols-3 gap-6 relative">
              {/* Connecting Line (Desktop) */}
              <div className="hidden md:block absolute top-8 left-[16%] right-[16%] h-0.5 bg-red-100 z-0"></div>
              
              {[
                { year: '2025', event: 'CBAM full reporting phase begins', color: '#ea580c' },
                { year: '2026', event: 'ESPR delegated acts for steel expected', color: '#dc2626' },
                { year: '2027', event: 'DPP requirements enforced for steel', color: '#991b1b' },
              ].map((d, i) => (
                <div key={d.year} className="relative z-10 flex flex-col items-center text-center group">
                  <div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-4 shadow-md border border-white transition-transform duration-300 group-hover:scale-110 group-hover:-translate-y-1"
                    style={{ background: `rgba(${i === 0 ? '234,88,12' : i === 1 ? '220,38,38' : '153,27,27'}, 0.1)`, backdropFilter: 'blur(10px)' }}>
                    <span className="text-xl font-bold"
                      style={{ color: d.color, fontFamily: 'Syne, sans-serif' }}>
                      {d.year}
                    </span>
                  </div>
                  <span className="text-sm font-bold text-gray-800 leading-snug px-2"
                    style={{ fontFamily: 'DM Sans, sans-serif' }}>
                    {d.event}
                  </span>
                </div>
              ))}
            </div>
            
          </div>
        </div>
      </div>
    </section>
  )
}
