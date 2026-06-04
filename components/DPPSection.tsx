export default function DPPSection() {
  return (
    <section id="dpp" className="py-24" style={{ background: '#f8fafc' }}>
      <div className="max-w-7xl mx-auto px-6">
        {/* Carbon section */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
          <div>
            <span className="tag tag-magenta mb-4 inline-block" style={{ fontFamily: 'DM Sans, sans-serif' }}>
              Carbon Intelligence
            </span>
            <h2 className="text-4xl font-bold mb-5" style={{ color: '#241538', fontFamily: 'Syne, sans-serif' }}>
              Product Carbon Footprint — Structured for Steel
            </h2>
            <p className="text-base text-gray-500 mb-8 leading-relaxed" style={{ fontFamily: 'DM Sans, sans-serif' }}>
              CBAM and ESPR both require granular, product-level carbon data. Our platform structures your furnace data, energy consumption, and logistics into verified PCF reports mapped to LCA and EPD standards.
            </p>
            <div className="space-y-4">
              {[
                { label: 'Scope 1 Emissions', desc: 'Direct process emissions per heat/batch', icon: '🔥' },
                { label: 'Scope 2 Emissions', desc: 'Electricity consumption and energy sources', icon: '⚡' },
                { label: 'EPD References', desc: 'Environmental Product Declaration mapping', icon: '📋' },
                { label: 'CBAM Reports', desc: 'Structured submissions for EU customs', icon: '🇪🇺' },
              ].map(item => (
                <div key={item.label} className="flex items-start gap-4">
                  <span className="text-xl flex-shrink-0 mt-0.5">{item.icon}</span>
                  <div>
                    <div className="font-semibold text-sm text-gray-800" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                      {item.label}
                    </div>
                    <div className="text-sm text-gray-500" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                      {item.desc}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Carbon visualization card */}
          <div className="rounded-2xl overflow-hidden shadow-xl border border-gray-200">
            <div className="px-6 py-4 text-white"
              style={{ background: 'linear-gradient(135deg, #241538, #6f4698)' }}>
              <div className="text-sm font-semibold mb-0.5" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                Carbon Footprint Report
              </div>
              <div className="text-xs opacity-60" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                Product: Hot Rolled Coil · Batch #HRC-2024-0847
              </div>
            </div>
            <div className="bg-white p-6 space-y-4">
              {[
                { label: 'Raw Material Extraction', val: 0.42, unit: 'kg CO₂e/t', pct: 25 },
                { label: 'Iron & Steel Production', val: 0.89, unit: 'kg CO₂e/t', pct: 52 },
                { label: 'Rolling & Finishing', val: 0.24, unit: 'kg CO₂e/t', pct: 14 },
                { label: 'Logistics & Dispatch', val: 0.15, unit: 'kg CO₂e/t', pct: 9 },
              ].map(row => (
                <div key={row.label}>
                  <div className="flex justify-between items-center mb-1.5">
                    <span className="text-xs text-gray-600" style={{ fontFamily: 'DM Sans, sans-serif' }}>{row.label}</span>
                    <span className="text-xs font-bold text-gray-800" style={{ fontFamily: 'DM Sans, sans-serif' }}>{row.val} {row.unit}</span>
                  </div>
                  <div className="h-2 rounded-full bg-gray-100">
                    <div className="h-2 rounded-full"
                      style={{ width: `${row.pct}%`, background: 'linear-gradient(90deg, #6f4698, #a83f96)' }} />
                  </div>
                </div>
              ))}
              <div className="pt-3 border-t border-gray-100 flex justify-between items-center">
                <span className="text-sm font-bold text-gray-800" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                  Total PCF
                </span>
                <div className="text-right">
                  <span className="text-2xl font-bold" style={{ color: '#6f4698', fontFamily: 'Syne, sans-serif' }}>
                    1.70
                  </span>
                  <span className="text-sm text-gray-500 ml-1" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                    kg CO₂e/t
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-2 p-3 rounded-lg" style={{ background: '#f0fdf4' }}>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <circle cx="8" cy="8" r="7" fill="#22c55e" fillOpacity="0.2" />
                  <path d="M5 8L7 10L11 6" stroke="#22c55e" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span className="text-xs text-green-700 font-medium" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                  Blockchain verified · CBAM ready · EPD mapped
                </span>
              </div>
            </div>
          </div>
        </div>

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
                <span className="text-xs font-bold text-slate-200 tracking-wider uppercase" style={{ fontFamily: 'DM Sans, sans-serif' }}>Steel Rod #SR-6785</span>
              </div>
              
              <div>
                <h4 className="text-3xl font-bold text-white mb-2 tracking-tight drop-shadow-lg" style={{ fontFamily: 'Syne, sans-serif' }}>
                  Steel Digital Twin
                </h4>
                <p className="text-base text-slate-300 max-w-sm drop-shadow-md" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                  One scan connects physical steel rods to their immutable data history and PCF record.
                </p>
              </div>
            </div>
          </div>

          {/* Right text */}
          <div>
            <span className="tag tag-purple mb-4 inline-block" style={{ fontFamily: 'DM Sans, sans-serif' }}>
              Digital Product Passport
            </span>
            <h2 className="text-4xl font-bold mb-5" style={{ color: '#241538', fontFamily: 'Syne, sans-serif' }}>
              One QR Code. Every Data Point.
            </h2>
            <p className="text-base text-gray-500 mb-8 leading-relaxed" style={{ fontFamily: 'DM Sans, sans-serif' }}>
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
                    <div className="font-semibold text-sm text-gray-800 mb-0.5" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                      {item.title}
                    </div>
                    <div className="text-sm text-gray-500" style={{ fontFamily: 'DM Sans, sans-serif' }}>
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
                style={{ background: 'rgba(168, 63, 150, 0.1)', color: '#9b4fa8', fontFamily: 'DM Sans, sans-serif' }}
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
      </div>
    </section>
  )
}
