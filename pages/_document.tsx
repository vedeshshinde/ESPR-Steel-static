import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Raleway:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <meta name="description" content="ESPR & CBAM Compliance Platform for Steel Manufacturers. Generate Digital Product Passports, calculate carbon footprints, verify recycled content, and maintain EU market access." />
        <meta property="og:title" content="ESPR Steel Compliance Platform | Emertech" />
        <meta property="og:description" content="Blockchain-backed Digital Product Passports, Carbon Footprint Engine, and CBAM readiness for steel manufacturers." />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
