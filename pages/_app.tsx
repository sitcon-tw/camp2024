import "@/styles/globals.css";
import type { AppProps } from "next/app";

import Script from "next/script";
const googleTagManagerId = "GTM-NKHHNVV";

import Head from "next/head";
import Nav from "../components/Nav";
import Footer from "../components/Footer";

import React from "react";

export default function App({ Component, pageProps }: AppProps) {
  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    if (window.innerWidth < 1024) {
      setIsMobile(true);
    }
  }, []);

  return (
    <>
      <Head>
        <title>SITCON 夏令營 2024</title>
        <meta name="author" content="SITCON" />
        <meta name="keywords" content="SITCON,SITCON Camp" />
        <meta
          name="description"
          property="og:description"
          content="SITCON 夏令營 2024 將於陽明交通大學光復校區舉辦，以「拉麵加點 source，麵向開源界」為主軸。正如同拉麵的麵條和配料可以隨個人喜好自由搭配組合，在程式設計中也可以讓每個人根據自己的想法和需求，選用不同的程式模組和元件，打造獨一無二的作品。透過兩者結合，傳達開源及資訊的無限可能性，在動手實作的過程中，激發創意靈感，發掘個人興趣所在，進而體會開源的樂趣與價值。"
        />
        <meta
          property="og:title"
          name="twitter:title"
          content="SITCON 夏令營 2024"
        />
        <meta property="og:site_name" content="SITCON" />
        <meta property="og:url" content="https://sitcon.camp/2024/" />
        <meta property="og:type" content="website" />
        {/* <meta property="og:image" name="twitter:image" content="/2024/og.png" /> */}
        <meta property="og:locale" content="zh_TW" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:description"
          content="SITCON 夏令營 2024 將於陽明交通大學光復校區舉辦，以「拉麵加點 source，麵向開源界」為主軸。正如同拉麵的麵條和配料可以隨個人喜好自由搭配組合，在程式設計中也可以讓每個人根據自己的想法和需求，選用不同的程式模組和元件，打造獨一無二的作品。透過兩者結合，傳達開源及資訊的無限可能性，在動手實作的過程中，激發創意靈感，發掘個人興趣所在，進而體會開源的樂趣與價值。"
        />
        <meta name="twitter:site" content="@sitcontw" />
      </Head>
      <div style={{ display: (isMobile ? "none" : "0") }}>
        <Nav />
        <Component {...pageProps} />
        <Footer />
      </div>
      <div style={{ display: (isMobile ? "0" : "none") }}>
        <Component {...pageProps} />
      </div>
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
      <Script
        id="pancake"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
        console.log("%c美味的蓬蓬鬆餅都在這裡！%c https://pancake.tw ", "background-color: #13AA13; color: white; padding: 5px;", "background-color: #f2f2f2; color: white; padding: 5px;");
`,
        }}
      />

      <script
        dangerouslySetInnerHTML={{
          __html: `
          if(!window.location.pathname.includes("mobile") && window.innerWidth <= 1024) {
            window.location.replace("/2024/mobile");
          }
        `
        }}
      />
      <script
        dangerouslySetInnerHTML={{
          __html: `
          if(window.location.pathname.includes("mobile") && window.innerWidth > 1024) {
            window.location.replace("/2024");
          }
        `
        }}
      />
    </>
  );
}
