import '@/styles/globals.css'
import type { AppProps } from 'next/app'

import Script from 'next/script';
const googleTagManagerId = 'GTM-NKHHNVV'

import Head from 'next/head'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
export default function App({ Component, pageProps }: AppProps) {
  return <>
    <Head>
      <title>SITCON 夏令營 2023</title>
      <Script
        id="gtm"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${googleTagManagerId}');
`,
        }}
      />
    </Head>
    <Nav />
    <Component {...pageProps} />
    <Footer />
  </>
}
