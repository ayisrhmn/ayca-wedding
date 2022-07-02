import '../styles/globals.css';
import 'bootstrap/dist/css/bootstrap.min.css';
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
      <script
        src="https://unpkg.com/react/umd/react.production.min.js"
        crossOrigin="true"></script>
      <script
        src="https://unpkg.com/react-dom/umd/react-dom.production.min.js"
        crossOrigin="true"></script>
      <script
        src="https://unpkg.com/react-bootstrap@next/dist/react-bootstrap.min.js"
        crossOrigin="true"></script>
      <script>var Alert = ReactBootstrap.Alert;</script>
      <Component {...pageProps} />
      <ToastContainer />
    </>
  );
}

export default MyApp;
