// import '../styles/globals.css';
// import '../styles/main.css';
import type {AppProps} from 'next/app';
import Head from 'next/head';
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function MyApp({Component, pageProps}: AppProps) {
  return (
    <>
      <Head>
        <title>Rika & Fariz - Wedding Invitation</title>
        <meta property="og:title" content="Rika & Fariz Wedding Invitation" />

        {/* AOS Animation */}
        <link
          href="https://unpkg.com/aos@2.3.1/dist/aos.css"
          rel="stylesheet"
        />
      </Head>
      <Component {...pageProps} />
      <ToastContainer />
    </>
  );
}

export default MyApp;
