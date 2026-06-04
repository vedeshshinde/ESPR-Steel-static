export default function WhatIsESPR() {
  const pillars = [
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M9 12H15M9 8H15M9 16H12M5 3H19C19.5523 3 20 3.44772 20 4V20C20 20.5523 19.5523 21 19 21H5C4.44772 21 4 20.5523 4 20V4C4 3.44772 4.44772 3 5 3Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <circle cx="17" cy="17" r="4" fill="#f0f9ff" stroke="currentColor" strokeWidth="1.5"/>
          <path d="M15.5 17L16.5 18L18.5 16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      title: 'Traceability',
      desc: 'Where it came from, how it was made, and who supplied it — from ore to finished product.',
      color: '#6f4698',
      bg: 'rgba(111,70,152,0.06)',
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21C16.9706 21 21 16.9706 21 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
          <path d="M16 3.5C16 3.5 18.5 5 19.5 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
          <path d="M8 12L11 15L16 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      title: 'Sustainability',
      desc: 'Carbon footprint, recycled content, energy consumption, and environmental impact data.',
      color: '#8d3f98',
      bg: 'rgba(168,63,150,0.06)',
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M12 3L20 7.5V12C20 15.7 16.4 19 12 21C7.6 19 4 15.7 4 12V7.5L12 3Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
          <path d="M9 12L11 14L15 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      title: 'Circularity',
      desc: 'How the product can be reused, recovered, or recycled — with verified data.',
      color: '#6d28d9',
      bg: 'rgba(109,40,217,0.06)',
    },
  ]

  return (
    <section id="what" className="py-24 gradient-mesh">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="tag tag-magenta mb-4 inline-block" style={{ fontFamily: 'DM Sans, sans-serif' }}>
            Regulation Overview
          </span>
          <h2 className="text-4xl font-bold mb-5" style={{ color: '#241538', fontFamily: 'Syne, sans-serif' }}>
            What is ESPR?
          </h2>
          <p className="text-lg leading-relaxed" style={{ color: '#4a5568', fontFamily: 'DM Sans, sans-serif' }}>
            The Ecodesign for Sustainable Products Regulation is the EU's new sustainability rulebook for every product sold in Europe. Think of ESPR like a digital passport requirement — companies must prove how a product is made, what materials were used, and how sustainable it is.
          </p>
        </div>

        {/* Three pillars */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {pillars.map(p => (
            <div key={p.title} className="card-hover rounded-2xl p-8 bg-white shadow-sm border border-gray-100">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
                style={{ background: p.bg, color: p.color }}>
                {p.icon}
              </div>
              <h3 className="text-xl font-bold mb-3" style={{ color: '#241538', fontFamily: 'Syne, sans-serif' }}>
                {p.title}
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: '#6b7280', fontFamily: 'DM Sans, sans-serif' }}>
                {p.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Key callout */}
        <div className="rounded-2xl p-8 md:p-10 text-white text-center"
          style={{ background: 'linear-gradient(135deg, #241538 0%, #6f4698 50%, #1c1230 100%)' }}>
          <p className="text-lg font-semibold tracking-wide uppercase text-sm mb-3"
            style={{ color: 'rgba(255,255,255,0.6)', fontFamily: 'DM Sans, sans-serif', letterSpacing: '0.1em' }}>
            The Core Shift
          </p>
          <p className="text-2xl md:text-3xl font-bold" style={{ fontFamily: 'Syne, sans-serif' }}>
            For steel manufacturers, ESPR means every product must move from being{' '}
            <span style={{ color: '#d3b8f0' }}>document-backed</span> to{' '}
            <span style={{ color: '#d3b8f0' }}>data-backed.</span>
          </p>
        </div>
      </div>
    </section>
  )
}
