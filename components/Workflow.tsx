'use client'
import { useState } from 'react'

export default function Workflow() {
  const [active, setActive] = useState(0)

  const steps = [
    {
      num: '01',
      title: 'Data Capture',
      desc: 'Connect ERP, MES, LIMS, and QMS systems to pull production, material, and energy data automatically.',
      detail: 'Our connectors integrate with SAP, Dynamics, Aveva, and custom APIs — no manual data entry required.',
      badge: 'ERP · MES · LIMS',
      icon: (
        <svg width="24" height="24" viewBox="0 0 20 20" fill="none">
          <path d="M4 4H8V8H4V4ZM12 4H16V8H12V4ZM4 12H8V16H4V12ZM12 12H16V16H12V12Z"
            stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
        </svg>
      ),
    },
    {
      num: '02',
      title: 'Supplier Onboarding',
      desc: 'Collect origin declarations, scrap sourcing, and sustainability certificates from your supply base.',
      detail: 'Suppliers get a self-service portal to upload certificates, declarations, and traceability documents.',
      badge: 'Supplier Portals',
      icon: (
        <svg width="24" height="24" viewBox="0 0 20 20" fill="none">
          <circle cx="8" cy="7" r="3" stroke="currentColor" strokeWidth="1.4" />
          <path d="M2 17C2 14.2386 4.68629 12 8 12" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
          <path d="M13 13L15 15L18 12" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
          <circle cx="15" cy="14" r="4" stroke="currentColor" strokeWidth="1.4" />
        </svg>
      ),
    },
    {
      num: '03',
      title: 'Carbon Calculation',
      desc: 'Structure PCF data — Scope 1, Scope 2, process emissions — per heat, batch, or product.',
      detail: 'Calculations follow GHG Protocol, ISO 14064, and are mapped to LCA/EPD reporting standards for CBAM submissions.',
      badge: 'PCF · LCA · EPD',
      icon: (
        <svg width="24" height="24" viewBox="0 0 20 20" fill="none">
          <circle cx="10" cy="10" r="8" stroke="currentColor" strokeWidth="1.4" />
          <path d="M10 6V10L13 12" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
        </svg>
      ),
    },
    {
      num: '04',
      title: 'Passport Generation',
      desc: 'Issue a QR-linked Digital Product Passport with all required DPP data fields populated.',
      detail: 'Each passport is structured to the EU ESPR DPP schema — ready for upload to the EU DPP Registry.',
      badge: 'QR · DPP Format',
      icon: (
        <svg width="24" height="24" viewBox="0 0 20 20" fill="none">
          <rect x="3" y="2" width="14" height="16" rx="2" stroke="currentColor" strokeWidth="1.4" />
          <path d="M7 7H13M7 10H13M7 13H10" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
        </svg>
      ),
    },
    {
      num: '05',
      title: 'Blockchain Anchoring',
      desc: 'Cryptographically sign and anchor each DPP on blockchain for tamper-evident audit trails.',
      detail: 'We use a permissioned blockchain layer so data is verifiable by EU auditors without exposing proprietary information.',
      badge: 'Immutable Record',
      icon: (
        <svg width="24" height="24" viewBox="0 0 20 20" fill="none">
          <path d="M10 2L4 5.5V10C4 13.7 6.8 17 10 18C13.2 17 16 13.7 16 10V5.5L10 2Z"
            stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
          <path d="M7 10L9.5 12.5L13.5 7.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
    },
    {
      num: '06',
      title: 'Buyer Verification',
      desc: 'EU buyers, auditors, and customs officials verify product data via QR scan — in real time.',
      detail: 'A single QR scan pulls live passport data — no account needed for buyers. Customs officials get structured export for CBAM.',
      badge: 'Real-Time · EU Ready',
      icon: (
        <svg width="24" height="24" viewBox="0 0 20 20" fill="none">
          <circle cx="9" cy="9" r="6" stroke="currentColor" strokeWidth="1.4" />
          <path d="M13.5 13.5L17 17" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
          <path d="M6.5 9L8.5 11L11.5 7" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
    },
  ]

  const current = steps[active]

  return (
    <section id="process" className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-14">
          <span className="tag tag-magenta mb-4 inline-block" style={{ fontFamily: 'Raleway, sans-serif' }}>
            How It Works
          </span>
          <h2 className="text-4xl font-bold mb-5" style={{ color: '#241538', fontFamily: "'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif" }}>
            From Raw Data to EU-Verified Passport
          </h2>
          <p className="text-lg text-gray-500" style={{ fontFamily: 'Raleway, sans-serif' }}>
            A practical workflow that connects your existing systems and turns production data into auditable Digital Product Passports.
          </p>
        </div>

        {/* Stepper tabs */}
        <div className="relative mb-4">
          {/* Connecting line */}
          <div className="absolute top-6 left-0 right-0 h-px hidden md:block" style={{ background: '#e9d5ff' }} />
          <div className="grid grid-cols-3 md:grid-cols-6 gap-2 relative z-10">
            {steps.map((step, i) => (
              <button
                key={step.num}
                onClick={() => setActive(i)}
                className="flex flex-col items-center gap-2 group transition-all duration-200"
              >
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center font-bold text-sm transition-all duration-200 border-2"
                  style={{
                    background: active === i ? '#6f4698' : 'white',
                    borderColor: active === i ? '#6f4698' : '#e9d5ff',
                    color: active === i ? 'white' : '#6f4698',
                    boxShadow: active === i ? '0 0 0 4px rgba(111,70,152,0.15)' : 'none',
                    fontFamily: "'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif",
                  }}
                >
                  {active > i ? (
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path d="M3.5 8L6.5 11L12.5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  ) : step.num}
                </div>
                <span
                  className="text-xs font-semibold text-center leading-tight transition-colors"
                  style={{
                    color: active === i ? '#6f4698' : '#9ca3af',
                    fontFamily: 'Raleway, sans-serif',
                  }}
                >
                  {step.title}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Detail panel */}
        <div
          className="rounded-2xl border p-8 mb-12 transition-all duration-300"
          style={{ background: '#f9f5ff', borderColor: 'rgba(111,70,152,0.2)' }}
          key={active}
        >
          <div className="flex flex-col md:flex-row gap-8 items-start">
            {/* Icon + badge */}
            <div className="flex-shrink-0 flex flex-col items-start gap-3">
              <div
                className="w-16 h-16 rounded-2xl flex items-center justify-center"
                style={{ backgroundColor: '#6f4698', color: 'white' }}
              >
                {current.icon}
              </div>
              <span
                className="text-xs px-3 py-1 rounded-full font-semibold"
                style={{ background: 'rgba(111,70,152,0.12)', color: '#6f4698', fontFamily: 'Raleway, sans-serif' }}
              >
                {current.badge}
              </span>
            </div>

            {/* Content */}
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-xs font-bold tracking-widest uppercase" style={{ color: '#a883c9', fontFamily: 'Raleway, sans-serif' }}>
                  Step {current.num}
                </span>
              </div>
              <h3 className="text-2xl font-bold mb-2" style={{ color: '#241538', fontFamily: "'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif" }}>
                {current.title}
              </h3>
              <p className="text-base text-gray-600 mb-3 leading-relaxed" style={{ fontFamily: 'Raleway, sans-serif' }}>
                {current.desc}
              </p>
              <p className="text-sm text-gray-400 leading-relaxed" style={{ fontFamily: 'Raleway, sans-serif' }}>
                {current.detail}
              </p>
            </div>

            {/* Nav arrows */}
            <div className="flex gap-2 flex-shrink-0 self-center">
              <button
                onClick={() => setActive(Math.max(0, active - 1))}
                disabled={active === 0}
                className="w-9 h-9 rounded-full border flex items-center justify-center transition-all duration-200 disabled:opacity-30"
                style={{ borderColor: '#d8b4fe', color: '#6f4698' }}
              >
                <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                  <path d="M10 4L6 8L10 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
              <button
                onClick={() => setActive(Math.min(steps.length - 1, active + 1))}
                disabled={active === steps.length - 1}
                className="w-9 h-9 rounded-full border flex items-center justify-center transition-all duration-200 disabled:opacity-30"
                style={{ borderColor: '#d8b4fe', color: '#6f4698' }}
              >
                <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                  <path d="M6 4L10 8L6 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Data model table */}
        <div className="rounded-2xl overflow-hidden border border-gray-200">
          <div className="px-8 py-6" style={{ backgroundColor: '#f5f3ff', borderBottom: '1px solid rgba(111,70,152,0.15)' }}>
            <h3 className="text-xl font-bold" style={{ color: '#241538', fontFamily: "'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif" }}>
              What Information Must Steel Companies Collect?
            </h3>
            <p className="text-sm mt-1" style={{ color: '#6b7280', fontFamily: 'Raleway, sans-serif' }}>
              Steel DPP readiness begins with structured product, process, and sustainability data.
            </p>
          </div>
          <div className="divide-y divide-gray-100">
            {[
              { area: 'Product Identity', data: 'Steel grade, batch/heat number, product type, plant, production date' },
              { area: 'Material Composition', data: 'Chemical composition, alloying elements, scrap input, recycled content' },
              { area: 'Production Route', data: 'BF-BOF / EAF / DRI route, process stages, energy source' },
              { area: 'Carbon Footprint', data: 'Emissions from raw material to dispatch, LCA / EPD references' },
              { area: 'Supply Chain Traceability', data: 'Supplier declarations, raw material source, chain of custody' },
              { area: 'Circularity Data', data: 'Recyclability, reuse potential, end-of-life recovery route' },
            ].map((row) => (
              <div key={row.area}
                className="flex items-center gap-6 px-8 py-4 hover:bg-purple-50 transition-colors">
                <div className="w-44 flex-shrink-0">
                  <span className="text-sm font-semibold text-gray-800" style={{ fontFamily: 'Raleway, sans-serif' }}>
                    {row.area}
                  </span>
                </div>
                <div className="flex-1">
                  <span className="text-sm text-gray-500" style={{ fontFamily: 'Raleway, sans-serif' }}>
                    {row.data}
                  </span>
                </div>
                <div className="flex-shrink-0">
                  <span className="text-xs px-2.5 py-1 rounded-full font-semibold"
                    style={{ background: 'rgba(168,63,150,0.1)', color: '#8d3f98', fontFamily: 'Raleway, sans-serif' }}>
                    Required
                  </span>
                </div>
              </div>
            ))}
          </div>
          <div className="px-8 py-4 text-sm text-gray-500 italic"
            style={{ background: '#f8fafc', fontFamily: 'Raleway, sans-serif' }}>
            The challenge is not creating more documents — it is connecting existing data into one verified product record.
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12 flex justify-center">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-bold text-sm transition-all duration-300 hover:scale-[1.02] shadow-[0_10px_20px_-10px_rgba(111,70,152,0.5)] hover:shadow-[0_15px_30px_-10px_rgba(111,70,152,0.6)]"
            style={{ backgroundColor: '#6f4698', color: 'white', fontFamily: 'Raleway, sans-serif' }}
          >
            Start Connecting Your Data
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}
