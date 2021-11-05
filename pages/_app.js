import '../styles/globals.css'
import '../styles/scss/index.scss'
import Head from 'next/head'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link
          rel="stylesheet"
          href="/css/bootstrap-4.6.0.min.css"
        />
        <link rel="stylesheet" href="/css/animate.min.css"></link>
        <link
          rel="stylesheet"
          type="text/css"
          href="/css/slick.min.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="/css/slick-theme.min.css"
        />
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
