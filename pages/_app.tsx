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
      <meta name="author" content="SITCON" />
      <meta name="keywords" content="SITCON,SITCON Camp" />
      <meta name="description" property="og:description" content="SITCON 夏令營 2023 將於陽明交通大學光復校區舉辦，以「開源文明，源力擴張」為主軸，帶領各位一同進入開源宇宙。傳承歷屆夏令營的概念，今年的夏令營將會有從基礎 Python 程式語言到做出自己的聊天機器人的實作課程，介紹各資訊領域議題的廣度課程，並透過社群闖關讓學員更加了解各個社群的理念與文化。開源宇宙也將更進一步把故事和營隊整合，配合豐富的課程、座談會及社群闖關，絕對能讓學員擁有截然不同的營隊體驗。" />
      <meta property="og:title" name="twitter:title" content="SITCON 夏令營 2023" />
      <meta property="og:site_name" content="SITCON" />
      <meta property="og:url" content="https://sitcon.camp/2023/" />
      <meta property="og:type" content="website" />
      <meta property="og:image" name="twitter:image" content="/2023/og.png" />
      <meta property="og:locale" content="zh_TW" />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:description" content="SITCON 夏令營 2023 將於陽明交通大學光復校區舉辦，以「開源文明，源力擴張」為主軸，帶領各位一同進入開源宇宙。傳承歷屆夏令營的概念，今年的夏令營將會有從基礎 Python 程式語言到做出自己的聊天機器人的實作課程，介紹各資訊領域議題的廣度課程，並透過社群闖關讓學員更加了解各個社群的理念與文化。開源宇宙也將更進一步把故事和營隊整合，配合豐富的課程、座談會及社群闖關，絕對能讓學員擁有截然不同的營隊體驗。" />
      <meta name="twitter:site" content="@sitcontw" />
    </Head>
    <Nav />
    <Component {...pageProps} />
    <Footer />
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
  </>
}
