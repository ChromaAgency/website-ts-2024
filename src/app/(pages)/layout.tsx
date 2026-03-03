import dynamic from 'next/dynamic'
import { ReactNode, Suspense } from 'react'
import Footer from './(public)/(home)/Footer'
import Script from 'next/script'
import Head from 'next/head'
const Navbar = dynamic(() => import('@/components/layout/Navbar'))
const ScrollToTop = dynamic(() => import('@/components/ScrollToTop'))

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Script id="google-tagmanager" strategy="afterInteractive">
       {` <!-- Google Tag Manager -->
<script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-5FH4GHJJ');</script>
}<!-- End Google Tag Manager --> `}
</Script>
      <Suspense fallback={<div />}>
        <Navbar />
      </Suspense>

      <Suspense fallback={<div />}>
        {children}
      </Suspense>

      <Suspense fallback={<div />}>
        <ScrollToTop />
      </Suspense>
      <Footer />
      <Script id="google-tagmanager-noscript" strategy="afterInteractive">
      {`<!-- Google Tag Manager (noscript) -->
<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-5FH4GHJJ"
height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
<!-- End Google Tag Manager (noscript) -->`}
      </Script>
      {/* Google tag (gtag.js) */}
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-NZG45C6999"
        strategy="afterInteractive"
        async
      />
      <Script id="gtag-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-NZG45C6999');
        `}
      </Script>

      <Script
        async
        defer
        src="https://agentes.numeral8.mx/js/widget/xic1logbwtuduptm/float.js"
      />
    </>
  )
}

export default Layout
