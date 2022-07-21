import '../styles/globals.css';
import '../styles/responsive.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import type {AppProps} from 'next/app';
import Head from 'next/head';
import {useRouter} from 'next/router';
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'react-activity/dist/library.css';
import moment from 'moment';
import 'moment/locale/id';

moment.locale('id');

function MyApp({Component, pageProps}: AppProps) {
  const router = useRouter();
  const {place} = router.query;

  const coupleName = place === 'kdr' ? 'Fariz & Rika' : 'Rika & Fariz';
  const imgUrl = 'https://rikafariz-wedding.vercel.app/img/web-thumb.jpg';

  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <title>The Wedding - {coupleName}</title>

        <meta
          name="robots"
          content="index, follow, max-snippet:-1, max-video-preview:-1, max-image-preview:large"
        />
        <meta property="og:type" content="article" />
        <meta property="og:title" content={`The Wedding - ${coupleName}`} />
        <meta
          property="og:description"
          content="We invited you to celebrate our wedding"
        />
        <meta
          property="og:url"
          content="https://rikafariz-wedding.vercel.app"
        />
        <meta name="keywords" content="rikafariz-wedding, ayca-wedding" />
        <meta name="author" content="Muhammad Fariz Rahman" />
        <meta property="og:site_name" content="Wedding Invitation" />
        <meta property="article:section" content="Website Invitation" />
        <meta property="og:image" content={imgUrl} />
        <meta property="og:image:secure_url" content={imgUrl} />
        <meta property="og:image:width" content="400" />
        <meta property="og:image:height" content="400" />
        <meta property="og:image:alt" content={`The Wedding - ${coupleName}`} />
        <meta property="og:image:type" content="image/jpeg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={`The Wedding - ${coupleName}`} />
        <meta
          name="twitter:description"
          content="We invited you to celebrate our wedding"
        />
        <meta name="twitter:image" content={imgUrl} />
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
