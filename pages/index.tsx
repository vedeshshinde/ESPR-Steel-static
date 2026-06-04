import Head from 'next/head'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import WhatIsESPR from '../components/WhatIsESPR'
import WhyESPR from '../components/WhyESPR'
import Platform from '../components/Platform'
import Workflow from '../components/Workflow'
import DPPSection from '../components/DPPSection'
import FAQ from '../components/FAQ'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <>
      <Head>
        <title>ESPR Steel Compliance Platform | Emertech</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Navbar />
      <main>
        <Hero />
        <WhatIsESPR />
        <WhyESPR />
        <Platform />
        <Workflow />
        <DPPSection />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
