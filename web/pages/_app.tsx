import '../styles/globals.css';
import '../styles/responsive.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import type {AppProps} from 'next/app';
import Head from 'next/head';
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import moment from 'moment';
import 'moment/locale/id';

moment.locale('id');

function MyApp({Component, pageProps}: AppProps) {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <title>The Wedding - Rika & Fariz</title>
        <meta property="og:title" content="The Wedding - Rika & Fariz" />
      </Head>
      <Component {...pageProps} />
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
      <ToastContainer />
    </>
  );
}

export default MyApp;
