import React from 'react';
import { Global, css } from '@emotion/react';
import Head from 'next/head';

const MyApp: React.FunctionComponent<any> = ({ Component, pageProps }) => (
  <>
    <Global
      styles={css`
        @import url('https://fonts.googleapis.com/css2?family=Cinzel&family=Cinzel+Decorative&family=EB+Garamond&display=swap');

        :root {
          --default: whitesmoke;
          --default-bg: rgb(0, 0, 0);
          --bot: #006400;
          --fin: #002f6c;
          --for: #663300;
          --ire: #40c575;
          --psy: #fd209a;
        }

        * {
          margin: 0;
          padding: 0;
        }

        *,
        *::before,
        *::after {
          box-sizing: inherit;
        }

        html {
          box-sizing: border-box;
          font-size: 62.5%; /* 1rem = 10px, 10px/16px = 62.5% */
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }

        body {
          font-family: 'EB Garamond', serif;
          font-weight: 400;
          line-height: 1.6;
          color: var(--default);
          background-color: var(--default-bg);
          min-height: 100vh;
          text-align: center;
        }

        h1 {
          font-family: 'Cinzel', serif;
          font-size: 3.5rem;
        }
      `}
    />
    <Head>
      <link rel="icon" href="/favicon-32x32.png" />
    </Head>
    <Component {...pageProps} />
  </>
);

export default MyApp;
