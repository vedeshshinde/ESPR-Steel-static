import { useState } from 'react'

const faqs = [
  {
    q: 'What is ESPR and does it apply to my steel products?',
    a: 'The Ecodesign for Sustainable Products Regulation (ESPR) is an EU regulation that establishes sustainability requirements for products sold in the EU. The EU has prioritised iron and steel under its ESPR working plan, meaning steel manufacturers and exporters are expected to face ecodesign requirements and Digital Product Passport obligations. If you sell flat steel, long steel, semi-finished steel, or steel components into EU value chains, ESPR will apply to you.',
  },
  {
    q: 'What is a Digital Product Passport (DPP) for steel?',
    a: 'A DPP is a data record linked to each product via a QR code. For steel, it contains product identity (grade, batch, heat number), material composition, carbon footprint, recycled content, production route, and circularity data. The DPP makes this information accessible to EU buyers, customs, and auditors in a standardised, verifiable format.',
  },
  {
    q: 'How does CBAM relate to ESPR for steel?',
    a: 'CBAM (Carbon Border Adjustment Mechanism) and ESPR are separate but complementary regulations. CBAM requires steel exporters to report embedded carbon emissions when selling to the EU, with financial penalties for high-carbon products. ESPR requires Digital Product Passports and sustainability data. Our platform structures your data to meet both requirements simultaneously from a single data layer.',
  },
  {
    q: 'What systems does Emertech connect to?',
    a: 'Our platform connects to ERP systems (SAP, Oracle, etc.), MES (Manufacturing Execution Systems), LIMS (Laboratory Information Management Systems), QMS (Quality Management Systems), EPD databases, and sustainability reporting tools. We also support manual data entry and bulk upload for companies without structured digital systems.',
  },
  {
    q: 'How is blockchain verification used?',
    a: 'Each Digital Product Passport is cryptographically anchored on blockchain, creating a tamper-evident audit trail. Once a product record is verified and signed, it cannot be altered without detection. This provides EU buyers, customs officials, and third-party auditors with confidence in the authenticity of your compliance data.',
  },
  {
    q: 'What is the timeline to get ESPR ready?',
    a: "ESPR delegated acts for steel are expected to be finalised around 2026–2027, with DPP requirements anticipated to follow. However, companies that begin structuring their data now will have a significant advantage — both in terms of compliance readiness and in meeting early buyer demands for verified sustainability data. We recommend starting your readiness assessment immediately.",
  },
  {
    q: 'Can Emertech help with just part of the compliance journey?',
    a: 'Yes. We offer modular engagement — from an initial ESPR Readiness Assessment (to identify gaps) through to full DPP generation and CBAM reporting. You can start with a readiness assessment and then implement the modules that are most urgent for your business.',
  },
]

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <section id="faq" className="py-24" style={{ background: '#f8fafc' }}>
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-14">
          <span className="tag tag-purple mb-4 inline-block" style={{ fontFamily: 'DM Sans, sans-serif' }}>
            FAQ
          </span>
          <h2 className="text-4xl font-bold" style={{ color: '#241538', fontFamily: 'Syne, sans-serif' }}>
            Frequently Asked Questions
          </h2>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="rounded-2xl overflow-hidden border transition-all duration-200"
              style={{
                background: 'white',
                borderColor: open === i ? 'rgba(111,70,152,0.2)' : '#e5e7eb',
                boxShadow: open === i ? '0 4px 20px rgba(111,70,152,0.08)' : 'none',
              }}
            >
              <button
                className="w-full text-left px-7 py-5 flex items-start gap-4 focus:outline-none"
                onClick={() => setOpen(open === i ? null : i)}
              >
                <span
                  className="flex-shrink-0 mt-0.5 w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold transition-colors"
                  style={{
                    background: open === i ? 'rgba(111,70,152,0.1)' : '#f3f4f6',
                    color: open === i ? '#6f4698' : '#9ca3af',
                    fontFamily: 'Syne, sans-serif',
                  }}
                >
                  {open === i ? '−' : '+'}
                </span>
                <span
                  className="font-semibold text-gray-800 flex-1"
                  style={{ fontFamily: 'DM Sans, sans-serif' }}
                >
                  {faq.q}
                </span>
              </button>
              {open === i && (
                <div className="px-7 pb-6 pl-[4.75rem]">
                  <p className="text-sm text-gray-500 leading-relaxed" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                    {faq.a}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
