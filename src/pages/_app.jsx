import React from 'react';
import '../styles/globals.css';
import Head from 'next/head';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon-32x32.png" />
        <title>Katja Schmelzer</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
