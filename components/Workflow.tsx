export default function Workflow() {
  const steps = [
    {
      num: '1',
      title: 'Data Capture',
      desc: 'Connect ERP, MES, LIMS, and QMS systems to pull production, material, and energy data.',
      icon: (
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
          <path d="M4 4H8V8H4V4ZM12 4H16V8H12V4ZM4 12H8V16H4V12ZM12 12H16V16H12V12Z"
            stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round" />
        </svg>
      ),
    },
    {
      num: '2',
      title: 'Supplier Onboarding',
      desc: 'Collect origin declarations, scrap sourcing, and sustainability certificates from your supply base.',
      icon: (
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
          <circle cx="8" cy="7" r="3" stroke="currentColor" strokeWidth="1.3" />
          <path d="M2 17C2 14.2386 4.68629 12 8 12" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
          <path d="M13 13L15 15L18 12" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
          <circle cx="15" cy="14" r="4" stroke="currentColor" strokeWidth="1.3" />
        </svg>
      ),
    },
    {
      num: '3',
      title: 'Carbon Calculation',
      desc: 'Structure PCF data — Scope 1, Scope 2, process emissions — per heat, batch, or product.',
      icon: (
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
          <circle cx="10" cy="10" r="8" stroke="currentColor" strokeWidth="1.3" />
          <path d="M10 6V10L13 12" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
        </svg>
      ),
    },
    {
      num: '4',
      title: 'Passport Generation',
      desc: 'Issue a QR-linked Digital Product Passport with all required DPP data fields populated.',
      icon: (
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
          <rect x="3" y="2" width="14" height="16" rx="2" stroke="currentColor" strokeWidth="1.3" />
          <path d="M7 7H13M7 10H13M7 13H10" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
        </svg>
      ),
    },
    {
      num: '5',
      title: 'Blockchain Anchoring',
      desc: 'Cryptographically sign and anchor each DPP on blockchain for tamper-evident audit trails.',
      icon: (
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
          <path d="M10 2L4 5.5V10C4 13.7 6.8 17 10 18C13.2 17 16 13.7 16 10V5.5L10 2Z"
            stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round" />
          <path d="M7 10L9.5 12.5L13.5 7.5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
    },
    {
      num: '6',
      title: 'Buyer Verification',
      desc: 'EU buyers, auditors, and customs officials verify product data via QR scan — in real time.',
      icon: (
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
          <circle cx="9" cy="9" r="6" stroke="currentColor" strokeWidth="1.3" />
          <path d="M13.5 13.5L17 17" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
          <path d="M6.5 9L8.5 11L11.5 7" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
    },
  ]

  return (
    <section id="process" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="tag tag-magenta mb-4 inline-block" style={{ fontFamily: 'DM Sans, sans-serif' }}>
            How It Works
          </span>
          <h2 className="text-4xl font-bold mb-5" style={{ color: '#241538', fontFamily: 'Syne, sans-serif' }}>
            From Raw Data to EU-Verified Passport
          </h2>
          <p className="text-lg text-gray-500" style={{ fontFamily: 'DM Sans, sans-serif' }}>
            A practical workflow that connects your existing systems and turns production data into auditable Digital Product Passports.
          </p>
        </div>

        {/* Steps grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {steps.map((step, i) => (
            <div key={step.num}
              className="relative rounded-2xl p-6 border border-gray-100 hover:border-blue-200 transition-all hover:shadow-md"
              style={{ background: '#fafbff' }}>
              {/* Step number */}
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold text-white"
                  style={{ background: 'linear-gradient(135deg, #6f4698, #a83f96)', fontFamily: 'Syne, sans-serif' }}>
                  {step.num}
                </div>
                <div className="flex-1 h-px bg-gradient-to-r from-blue-200 to-transparent"></div>
                <div className="text-gray-400" style={{ color: '#6f4698' }}>
                  {step.icon}
                </div>
              </div>
              <h3 className="font-bold text-gray-900 mb-2" style={{ fontFamily: 'Syne, sans-serif' }}>
                {step.title}
              </h3>
              <p className="text-sm text-gray-500 leading-relaxed" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                {step.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Data model table */}
        <div className="rounded-2xl overflow-hidden border border-gray-200">
          <div className="px-8 py-6" style={{ background: 'linear-gradient(135deg, #241538, #6f4698)' }}>
            <h3 className="text-xl font-bold text-white" style={{ fontFamily: 'Syne, sans-serif' }}>
              What Information Must Steel Companies Collect?
            </h3>
            <p className="text-sm mt-1" style={{ color: 'rgba(255,255,255,0.6)', fontFamily: 'DM Sans, sans-serif' }}>
              Steel DPP readiness begins with structured product, process, and sustainability data.
            </p>
          </div>
          <div className="divide-y divide-gray-100">
            {[
              {
                area: 'Product Identity',
                data: 'Steel grade, batch/heat number, product type, plant, production date',
                icon: '🏷️',
              },
              {
                area: 'Material Composition',
                data: 'Chemical composition, alloying elements, scrap input, recycled content',
                icon: '🔬',
              },
              {
                area: 'Production Route',
                data: 'BF-BOF / EAF / DRI route, process stages, energy source',
                icon: '🏭',
              },
              {
                area: 'Carbon Footprint',
                data: 'Emissions from raw material to dispatch, LCA / EPD references',
                icon: '🌍',
              },
              {
                area: 'Supply Chain Traceability',
                data: 'Supplier declarations, raw material source, chain of custody',
                icon: '🔗',
              },
              {
                area: 'Circularity Data',
                data: 'Recyclability, reuse potential, end-of-life recovery route',
                icon: '♻️',
              },
            ].map((row, i) => (
              <div key={row.area}
                className="flex items-center gap-6 px-8 py-4 hover:bg-blue-50 transition-colors">
                <span className="text-xl w-8 flex-shrink-0">{row.icon}</span>
                <div className="w-44 flex-shrink-0">
                  <span className="text-sm font-semibold text-gray-800" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                    {row.area}
                  </span>
                </div>
                <div className="flex-1">
                  <span className="text-sm text-gray-500" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                    {row.data}
                  </span>
                </div>
                <div className="flex-shrink-0">
                  <span className="text-xs px-2.5 py-1 rounded-full font-semibold"
                    style={{ background: 'rgba(168,63,150,0.1)', color: '#8d3f98', fontFamily: 'DM Sans, sans-serif' }}>
                    Required
                  </span>
                </div>
              </div>
            ))}
          </div>
          <div className="px-8 py-4 text-sm text-gray-500 italic"
            style={{ background: '#f8fafc', fontFamily: 'DM Sans, sans-serif' }}>
            The challenge is not creating more documents — it is connecting existing data into one verified product record.
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12 flex justify-center">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-bold text-sm transition-all duration-300 hover:scale-[1.02] shadow-[0_10px_20px_-10px_rgba(111,70,152,0.5)] hover:shadow-[0_15px_30px_-10px_rgba(111,70,152,0.6)]"
            style={{ background: 'linear-gradient(135deg, #6f4698, #241538)', color: 'white', fontFamily: 'DM Sans, sans-serif' }}
          >
            Start Connecting Your Data
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}
