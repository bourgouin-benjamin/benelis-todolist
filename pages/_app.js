import Head from 'next/head';

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Le Pense-Bête de Beneli</title>
      </Head>
      <Component {...pageProps} />  
    </>
  );
}
