import Theme from '../styles/theme';
import Head from 'next/head'

const prefix = '/react-portfolio';

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="shortcut icon" href={prefix+'/favicon.ico'}/>
        <title>My portfolio</title>
      </Head>
      <Theme>
        <Component {...pageProps} />
      </Theme>
    </>
  );
}
 