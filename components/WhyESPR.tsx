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
      color: '#6f4698',
    },
    {
      num: '03',
      title: 'Buyer Expectations',
      headline: 'Large customers will prefer verified suppliers.',
      body: 'OEMs and infrastructure buyers will expect passport-ready product data as a baseline procurement requirement, creating competitive advantage for prepared manufacturers.',
      color: '#6f4698',
    },
  ]

  const products = [
    { label: 'Flat Steel', sub: 'Coils, sheets, plates' },
    { label: 'Long Steel', sub: 'Bars, rods, rebars' },
    { label: 'Semi-Finished', sub: 'Slabs, billets, blooms' },
    { label: 'Steel Components', sub: 'EU value chain inputs' },
  ]

  return (
    <section id="why" className="pt-8 pb-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* DPP Section */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Photorealistic Steel QR Visual */}
          <div className="rounded-3xl overflow-hidden shadow-[0_30px_60px_-15px_rgba(0,0,0,0.5)] border border-slate-700 bg-black min-h-[460px] flex flex-col relative group">
            
            {/* The Generated Image */}
            <div className="absolute inset-0 w-full h-full">
              <img 
                src="/steel_rod_qr_code.png" 
                alt="Steel Rod with laser-engraved QR Code"
                className="w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-1000 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f2c] via-black/40 to-transparent"></div>
            </div>

            <div className="relative z-10 flex flex-col justify-end w-full h-full p-8 mt-auto min-h-[460px]">
              
              {/* Product Badge */}
              <div className="bg-black/60 backdrop-blur-md border border-slate-600 rounded-full px-4 py-2 mb-4 w-max flex items-center gap-2 shadow-lg self-start">
                <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></div>
                <span className="text-xs font-bold text-slate-200 tracking-wider uppercase" style={{ fontFamily: 'Raleway, sans-serif' }}>Steel Rod #SR-6785</span>
              </div>
              
              <div>
                <h4 className="text-3xl font-bold text-white mb-2 tracking-tight drop-shadow-lg" style={{ fontFamily: "'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif" }}>
                  Steel Digital Twin
                </h4>
                <p className="text-base text-slate-300 max-w-sm drop-shadow-md" style={{ fontFamily: 'Raleway, sans-serif' }}>
                  One scan connects physical steel rods to their immutable data history and PCF record.
                </p>
              </div>
            </div>
          </div>

          {/* Right text */}
          <div>
            <span className="tag tag-purple mb-4 inline-block" style={{ fontFamily: 'Raleway, sans-serif' }}>
              Digital Product Passport
            </span>
            <h2 className="text-4xl font-bold mb-5" style={{ color: '#241538', fontFamily: "'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif" }}>
              One QR Code. Every Data Point.
            </h2>
            <p className="text-base text-gray-500 mb-8 leading-relaxed" style={{ fontFamily: 'Raleway, sans-serif' }}>
              A Digital Product Passport is an identity data carrier for each product — showcasing performance, traceability, recycling guidance, and sustainability data in a single scannable record.
            </p>

            <div className="space-y-5">
              {[
                {
                  title: 'Performance Information',
                  desc: 'Essential data on repairability, durability, carbon footprint, and environmental impact.',
                  color: '#6f4698',
                },
                {
                  title: 'Information for Customers & Users',
                  desc: 'Instructions for product installation, use, maintenance, repair, and end-of-life handling.',
                  color: '#8d3f98',
                },
                {
                  title: 'Recycling and Reuse',
                  desc: 'Guidance on disassembly, reuse, refurbishment, and safe disposal methods.',
                  color: '#7c3aed',
                },
                {
                  title: 'Other Relevant Information',
                  desc: 'Any additional data promoting sustainable use, value retention, and correct end-of-life treatment.',
                  color: '#d97706',
                },
              ].map(item => (
                <div key={item.title} className="flex gap-4">
                  <div className="w-1.5 rounded-full flex-shrink-0 mt-1"
                    style={{ background: item.color, height: 'auto', minHeight: '40px' }} />
                  <div>
                    <div className="font-semibold text-sm text-gray-800 mb-0.5" style={{ fontFamily: 'Raleway, sans-serif' }}>
                      {item.title}
                    </div>
                    <div className="text-sm text-gray-500" style={{ fontFamily: 'Raleway, sans-serif' }}>
                      {item.desc}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-10">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-semibold text-sm transition-all duration-300 hover:scale-[1.02] shadow-[0_10px_20px_-10px_rgba(168,63,150,0.5)] hover:shadow-[0_15px_30px_-10px_rgba(168,63,150,0.6)] border border-[#a83f96]"
                style={{ background: 'rgba(168, 63, 150, 0.1)', color: '#9b4fa8', fontFamily: 'Raleway, sans-serif' }}
              >
                Generate a Sample DPP
                <svg width="18" height="18" viewBox="0 0 16 16" fill="none">
                  <rect x="2" y="1" width="12" height="14" rx="2" stroke="currentColor" strokeWidth="1.2"/>
                  <path d="M5 5H11M5 7.5H11M5 10H8" stroke="currentColor" strokeWidth="1" strokeLinecap="round"/>
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Horizontal Timeline - High Importance */}
        <div className="mt-24 relative rounded-3xl p-8 md:p-10 overflow-hidden shadow-[0_12px_40px_rgba(111,70,152,0.12)] border border-purple-100 transition-all hover:shadow-[0_16px_50px_rgba(111,70,152,0.18)] bg-white">
          {/* Background subtle gradient */}
          <div className="absolute inset-0 opacity-40 pointer-events-none"
            style={{ backgroundColor: 'transparent' }}></div>

          <div className="relative z-10 flex flex-col md:flex-row gap-10 md:items-center">

            {/* Header Area */}
            <div className="md:w-1/3 flex-shrink-0">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-sm"
                  style={{ backgroundColor: '#f5f3ff', border: '1px solid rgba(111,70,152,0.2)' }}>
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
                    <path d="M12 8V12L14.5 14.5M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="#6f4698" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest" style={{ color: '#6f4698', fontFamily: 'Raleway, sans-serif' }}>
                    Action Required Now
                  </p>
                  <h4 className="font-bold text-gray-900 text-3xl leading-tight mt-1" style={{ fontFamily: "'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif" }}>
                    Critical Deadlines
                  </h4>
                </div>
              </div>

            </div>

            {/* Horizontal Timeline Steps */}
            <div className="md:w-2/3 grid grid-cols-1 md:grid-cols-3 gap-6 relative">
              {/* Connecting Line (Desktop) */}
              <div className="hidden md:block absolute top-8 left-[16%] right-[16%] h-0.5 bg-purple-100 z-0"></div>

              {[
                { year: '2025', event: 'CBAM full reporting phase begins', color: '#8d3f98' },
                { year: '2026', event: 'ESPR delegated acts for steel expected', color: '#6f4698' },
                { year: '2027', event: 'DPP requirements enforced for steel', color: '#4c1d95' },
              ].map((d, i) => (
                <div key={d.year} className="relative z-10 flex flex-col items-center text-center group">
                  <div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-4 shadow-md border border-white transition-transform duration-300 group-hover:scale-110 group-hover:-translate-y-1"
                    style={{ background: `rgba(${i === 0 ? '141,63,152' : i === 1 ? '111,70,152' : '76,29,149'}, 0.1)`, backdropFilter: 'blur(10px)' }}>
                    <span className="text-xl font-bold"
                      style={{ color: d.color, fontFamily: "'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif" }}>
                      {d.year}
                    </span>
                  </div>
                  <span className="text-sm font-bold text-gray-800 leading-snug px-2"
                    style={{ fontFamily: 'Raleway, sans-serif' }}>
                    {d.event}
                  </span>
                </div>
              ))}
            </div>

          </div>

          <div className="relative z-10 mt-8 pt-6 border-t border-purple-50">
            <p className="text-sm text-gray-600 leading-relaxed text-center" style={{ fontFamily: 'Raleway, sans-serif' }}>
              The window to prepare your data infrastructure is closing. Non-compliance risks losing access to European buyers.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
