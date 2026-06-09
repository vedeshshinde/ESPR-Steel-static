import { useState, useEffect } from 'react'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const links = [
    { label: 'Overview', href: '#what' },
    { label: 'Platform', href: '#platform' },
    { label: 'Modules', href: '#modules' },
    { label: 'Process', href: '#process' },
    { label: 'FAQ', href: '#faq' },
  ]

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100' : 'bg-transparent'
        }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: 'linear-gradient(135deg, #6f4698, #a83f96)' }}>
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
              <path d="M3 14L9 4L15 14H3Z" fill="white" fillOpacity="0.9" />
              <path d="M6 14L9 9L12 14H6Z" fill="white" fillOpacity="0.5" />
            </svg>
          </div>
          <div>
            <span className="font-bold text-sm leading-tight block" style={{ fontFamily: "'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif", color: '#241538' }}>
              Emertech
            </span>
            <span className="text-xs leading-tight block" style={{ color: '#6b7b8d', fontFamily: 'Raleway, sans-serif' }}>
              ESPR Steel Platform
            </span>
          </div>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {links.map(link => (
            <a
              key={link.href}
              href={link.href}
              className="nav-link text-sm font-medium"
              style={{ color: scrolled ? '#374151' : '#241538', fontFamily: 'Raleway, sans-serif' }}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="#contact"
            className="text-sm font-semibold px-5 py-2 rounded-lg transition-all duration-200"
            style={{ color: '#6f4698', fontFamily: 'Raleway, sans-serif' }}
          >
            Assess Readiness
          </a>
          <a
            href="#contact"
            className="text-sm font-semibold px-5 py-2 rounded-lg text-white transition-all duration-200 hover:opacity-90"
            style={{ backgroundColor: '#6f4698', fontFamily: 'Raleway, sans-serif' }}
          >
            Book a Demo
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <div className="w-5 space-y-1.5">
            <span className={`block h-0.5 bg-gray-700 transition-all ${mobileOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
            <span className={`block h-0.5 bg-gray-700 transition-all ${mobileOpen ? 'opacity-0' : ''}`}></span>
            <span className={`block h-0.5 bg-gray-700 transition-all ${mobileOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
          </div>
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 px-6 py-4 space-y-3">
          {links.map(link => (
            <a
              key={link.href}
              href={link.href}
              className="block text-sm font-medium text-gray-700 py-2"
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="block text-center text-sm font-semibold px-5 py-2.5 rounded-lg text-white mt-4"
            style={{ backgroundColor: '#6f4698' }}
            onClick={() => setMobileOpen(false)}
          >
            Book a Demo
          </a>
        </div>
      )}
    </header>
  )
}
