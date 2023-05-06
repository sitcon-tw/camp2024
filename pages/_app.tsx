import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import Nav from '../components/Nav'

import Footer from '../components/Footer'
export default function App({ Component, pageProps }: AppProps) {
  return <>
    <Head>
      <title>SITCON 夏令營 2023</title>
    </Head>
    <Nav />
    <Component {...pageProps} />
    <Footer />
  </>
}
