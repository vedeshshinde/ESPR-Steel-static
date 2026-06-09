export default function Platform() {
  const modules = [
    {
      icon: (
        <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
          <path d="M11 2L13.5 7H19L14.5 10.5L16 17L11 13.5L6 17L7.5 10.5L3 7H8.5L11 2Z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
        </svg>
      ),
      title: 'ESPR Readiness Assessment',
      desc: 'Gap analysis against ESPR requirements, with a structured roadmap to full Digital Product Passport compliance.',
      color: '#6f4698',
    },
    {
      icon: (
        <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
          <circle cx="11" cy="11" r="9" stroke="currentColor" strokeWidth="1.4" />
          <path d="M7 11L10 14L15 8" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
      title: 'Supplier Onboarding',
      desc: 'Structured workflows to collect origin declarations, certifications, and sustainability data from your supply chain.',
      color: '#8d3f98',
    },
    {
      icon: (
        <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
          <path d="M3 8L11 4L19 8M3 8V16L11 20M3 8L11 12M19 8V16L11 20M19 8L11 12M11 12V20" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
        </svg>
      ),
      title: 'Steel Traceability Engine',
      desc: 'Heat-to-dispatch chain of custody mapping — raw material, scrap, plant, batch, and logistics traceability.',
      color: '#7c3aed',
    },
    {
      icon: (
        <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
          <path d="M11 3V7M11 15V19M3 11H7M15 11H19" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
          <circle cx="11" cy="11" r="4" stroke="currentColor" strokeWidth="1.4" />
        </svg>
      ),
      title: 'Carbon Footprint Engine',
      desc: 'Scope 1 & Scope 2 PCF calculations from furnace data, energy, and logistics — mapped to LCA and EPD standards.',
      color: '#dc2626',
    },
    {
      icon: (
        <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
          <path d="M4 4H9V9H4V4ZM13 4H18V9H13V4ZM4 13H9V18H4V13ZM13 13H18V18H13V13Z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
        </svg>
      ),
      title: 'Recycled Content Management',
      desc: 'Verify and document scrap ratios, EAF inputs, and recycled content percentages for each product batch.',
      color: '#059669',
    },
    {
      icon: (
        <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
          <rect x="4" y="3" width="14" height="16" rx="2" stroke="currentColor" strokeWidth="1.4" />
          <path d="M8 8H14M8 11H14M8 14H11" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
          <path d="M14 16L16 18" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
        </svg>
      ),
      title: 'Digital Product Passport Generator',
      desc: 'Issue QR-linked DPPs with full product identity, sustainability, and circularity data for each batch or coil.',
      color: '#6f4698',
    },
    {
      icon: (
        <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
          <path d="M11 2L3 6V12C3 16.4183 6.58172 20 11 20C15.4183 20 19 16.4183 19 12V6L11 2Z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
          <path d="M8 11L10 13L14 9" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
      title: 'Blockchain Verification',
      desc: 'Tamper-evident, cryptographically signed records for every product passport — audit-ready from day one.',
      color: '#8d3f98',
    },
    {
      icon: (
        <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
          <rect x="3" y="3" width="16" height="12" rx="2" stroke="currentColor" strokeWidth="1.4" />
          <path d="M7 19H15M11 15V19" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
          <path d="M6 8H10M12 8H16M6 11H9" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
        </svg>
      ),
      title: 'Compliance Monitoring',
      desc: 'Real-time dashboards for internal compliance teams, auditors, and EU buyers — with gap alerts and evidence tracking.',
      color: '#7c3aed',
    },
    {
      icon: (
        <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
          <path d="M2 12C2 12 5 6 11 6C17 6 20 12 20 12C20 12 17 18 11 18C5 18 2 12 2 12Z" stroke="currentColor" strokeWidth="1.4" />
          <circle cx="11" cy="12" r="3" stroke="currentColor" strokeWidth="1.4" />
        </svg>
      ),
      title: 'CBAM Readiness Module',
      desc: 'Structure and submit Carbon Border Adjustment Mechanism reports with embedded carbon data from your production records.',
      color: '#d97706',
    },
  ]

  return (
    <section id="platform" className="py-12" style={{ background: '#f8fafc' }}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="tag tag-purple mb-4 inline-block" style={{ fontFamily: 'Raleway, sans-serif' }}>
            WHAT WE OFFER
          </span>
          <h2 className="text-4xl font-bold mb-5" style={{ color: '#241538', fontFamily: "'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif" }}>
            A Complete ESPR Compliance Platform for Steel
          </h2>
          <p className="text-lg leading-relaxed" style={{ color: '#4a5568', fontFamily: 'Raleway, sans-serif' }}>
            We advise, consult, and enable a steel-focused Digital Product Passport and compliance data layer — covering every module you need to meet ESPR, CBAM, and buyer requirements.
          </p>
        </div>

        <div id="modules" className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 scroll-mt-24">
          {modules.map((mod, i) => (
            <div
              key={mod.title}
              className="card-hover bg-white rounded-2xl p-6 border border-gray-100 shadow-sm"
            >
              <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-4"
                style={{ background: `${mod.color}12`, color: mod.color }}>
                {mod.icon}
              </div>
              <h3 className="font-bold text-gray-900 mb-2" style={{ fontFamily: "'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif" }}>
                {mod.title}
              </h3>
              <p className="text-sm text-gray-500 leading-relaxed" style={{ fontFamily: 'Raleway, sans-serif' }}>
                {mod.desc}
              </p>
            </div>
          ))}
        </div>

        {/* CTA bar */}
        <div className="mt-16 text-center flex justify-center">
          <div className="relative inline-flex flex-col md:flex-row items-center gap-6 rounded-3xl px-10 py-8 border shadow-xl transition-all duration-300 hover:shadow-2xl"
            style={{ backgroundColor: '#ffffff', borderColor: 'rgba(111,70,152,0.1)' }}>
            {/* Background Glow */}
            <div className="absolute -inset-0.5 rounded-3xl blur opacity-30" style={{ background: 'linear-gradient(135deg, #6f4698, #a83f96)', zIndex: -1 }}></div>

            <div className="text-left max-w-lg">
              <h4 className="text-xl font-bold mb-2" style={{ color: '#241538', fontFamily: "'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif" }}>
                Ready to secure your EU market access?
              </h4>
              <p className="text-sm font-medium text-gray-600" style={{ fontFamily: 'Raleway, sans-serif' }}>
                The end result: your company becomes ready to meet ESPR, CBAM, and Digital Product Passport requirements smoothly and efficiently.
              </p>
            </div>

            <a
              href="#contact"
              className="flex-shrink-0 flex items-center gap-2 text-base font-bold px-8 py-4 rounded-xl text-white transition-all hover:scale-105 shadow-lg"
              style={{ backgroundColor: '#6f4698', fontFamily: 'Raleway, sans-serif' }}>
              Start Your Assessment
              <svg width="18" height="18" viewBox="0 0 16 16" fill="none">
                <path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
