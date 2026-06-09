import { useState } from 'react'

export default function Contact() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    company: '',
    industry: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.MouseEvent) => {
    e.preventDefault()
    if (form.name && form.email) {
      setSubmitted(true)
    }
  }

  return (
    <section id="contact" className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left */}
          <div>
            <span className="tag tag-magenta mb-4 inline-block" style={{ fontFamily: 'Raleway, sans-serif' }}>
              Get in Touch
            </span>
            <h2 className="text-4xl font-bold mb-5" style={{ color: '#241538', fontFamily: "'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif" }}>
              Ready to Assess Your ESPR Readiness?
            </h2>
            <p className="text-base text-gray-500 mb-8 leading-relaxed" style={{ fontFamily: 'Raleway, sans-serif' }}>
              Book a readiness assessment call with our ESPR compliance experts. We'll map your current data infrastructure against DPP and CBAM requirements and give you a clear roadmap.
            </p>

            {/* What to expect */}
            <div className="space-y-4 mb-10">
              {[
                { step: '01', title: 'Readiness Assessment', desc: 'We map your current data against ESPR and CBAM requirements.' },
                { step: '02', title: 'Gap Identification', desc: 'Clear list of what\'s missing and what systems need connecting.' },
                { step: '03', title: 'Implementation Roadmap', desc: 'A phased plan to achieve DPP readiness and CBAM compliance.' },
              ].map(item => (
                <div key={item.step} className="flex gap-4">
                  <span className="text-sm font-bold w-8 flex-shrink-0 mt-0.5"
                    style={{ color: '#8d3f98', fontFamily: "'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif" }}>
                    {item.step}
                  </span>
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

            {/* Contact info */}
            <div className="space-y-3">
              {[
                { icon: '✉️', label: 'Email', val: 'info@emertech.io' },
                { icon: '📞', label: 'Phone', val: '+91-7798781421' },
                { icon: '🌐', label: 'Website', val: 'emertech.io' },
              ].map(c => (
                <div key={c.label} className="flex items-center gap-3 text-sm"
                  style={{ fontFamily: 'Raleway, sans-serif' }}>
                  <span className="text-base">{c.icon}</span>
                  <span className="text-gray-500">{c.label}:</span>
                  <span className="font-semibold text-gray-800">{c.val}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Form */}
          <div className="rounded-2xl p-8 border border-gray-100 shadow-sm bg-white">
            {!submitted ? (
              <>
                <h3 className="text-xl font-bold mb-6" style={{ color: '#241538', fontFamily: "'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif" }}>
                  Request an ESPR Consultation
                </h3>
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-gray-600 mb-1.5"
                        style={{ fontFamily: 'Raleway, sans-serif' }}>
                        Full Name *
                      </label>
                      <input
                        type="text"
                        value={form.name}
                        onChange={e => setForm({ ...form, name: e.target.value })}
                        placeholder="Your name"
                        className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-blue-400 transition-colors"
                        style={{ fontFamily: 'Raleway, sans-serif' }}
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-gray-600 mb-1.5"
                        style={{ fontFamily: 'Raleway, sans-serif' }}>
                        Email *
                      </label>
                      <input
                        type="email"
                        value={form.email}
                        onChange={e => setForm({ ...form, email: e.target.value })}
                        placeholder="you@company.com"
                        className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-blue-400 transition-colors"
                        style={{ fontFamily: 'Raleway, sans-serif' }}
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-gray-600 mb-1.5"
                      style={{ fontFamily: 'Raleway, sans-serif' }}>
                      Company Name
                    </label>
                    <input
                      type="text"
                      value={form.company}
                      onChange={e => setForm({ ...form, company: e.target.value })}
                      placeholder="Your company"
                      className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-blue-400 transition-colors"
                      style={{ fontFamily: 'Raleway, sans-serif' }}
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-gray-600 mb-1.5"
                      style={{ fontFamily: 'Raleway, sans-serif' }}>
                      Product Type
                    </label>
                    <select
                      value={form.industry}
                      onChange={e => setForm({ ...form, industry: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-blue-400 transition-colors bg-white"
                      style={{ fontFamily: 'Raleway, sans-serif' }}
                    >
                      <option value="">Select product type</option>
                      <option value="flat">Flat Steel (Coils, Sheets, Plates)</option>
                      <option value="long">Long Steel (Bars, Rods, Rebars)</option>
                      <option value="semi">Semi-Finished Steel (Slabs, Billets)</option>
                      <option value="components">Steel Components (EU value chains)</option>
                      <option value="other">Other / Multiple</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-gray-600 mb-1.5"
                      style={{ fontFamily: 'Raleway, sans-serif' }}>
                      What compliance challenge are you facing?
                    </label>
                    <textarea
                      value={form.message}
                      onChange={e => setForm({ ...form, message: e.target.value })}
                      placeholder="Briefly describe your ESPR / CBAM readiness needs..."
                      rows={3}
                      className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-blue-400 transition-colors resize-none"
                      style={{ fontFamily: 'Raleway, sans-serif' }}
                    />
                  </div>

                  <button
                    onClick={handleSubmit}
                    className="w-full py-3 rounded-xl font-semibold text-sm text-white transition-all hover:opacity-90 hover:scale-[1.01]"
                    style={{
                      backgroundColor: '#6f4698',
                      fontFamily: 'Raleway, sans-serif',
                    }}
                  >
                    Request ESPR Consultation
                  </button>

                  <p className="text-center text-xs text-gray-400" style={{ fontFamily: 'Raleway, sans-serif' }}>
                    By submitting, you agree to be contacted regarding your inquiry.
                  </p>
                </div>
              </>
            ) : (
              <div className="text-center py-12">
                <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-5"
                  style={{ background: '#f0fdf4' }}>
                  <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                    <path d="M5 14L11 20L23 8" stroke="#22c55e" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2" style={{ fontFamily: "'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif" }}>
                  Thank you, {form.name}!
                </h3>
                <p className="text-sm text-gray-500" style={{ fontFamily: 'Raleway, sans-serif' }}>
                  Our ESPR compliance team will be in touch within 24 hours to schedule your readiness assessment.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
