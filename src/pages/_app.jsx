import React from 'react';
import { Global, css } from '@emotion/react';
import Head from 'next/head';

function MyApp({ Component, pageProps }) {
  return (
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

          html {
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
          }

          body {
            color: var(--default);
            background: var(--default-bg);
            font-family: 'EB Garamond', serif;
            font-size: 1em;
            text-align: center;
            display: block;
          }

          h1 {
            font-family: 'Cinzel', serif;
            font-size: 2em;
          }

          /* ANIMATIONS */
          .one {
            animation: fadeIn ease 3s;
          }
          .two {
            animation: fadeIn ease 6s;
          }
          .three {
            animation: fadeIn ease 7.5s;
          }

          @keyframes fadeIn {
            0% {
              opacity: 0;
            }
            100% {
              opacity: 1;
            }
          }

          @keyframes fadeOut {
            0% {
              opacity: 1;
            }
            100% {
              opacity: 0;
            }
          }

          /* Adjustments for lower screen heights and mobile*/
          @media screen and (max-height: 1000px) {
            #image-container img {
              height: 82vh;
            }
          }

          @media screen and (max-height: 900px) {
            #image-container img {
              height: 80vh;
            }
          }

          @media screen and (max-height: 800px) {
            #image-container img {
              height: 78vh;
            }
          }

          @media screen and (max-height: 700px) {
            #image-container img {
              height: 76vh;
            }
          }

          @media screen and (max-height: 600px) {
            #image-container img {
              height: 74vh;
            }
          }

          @media only screen and (max-width: 760px) {
            #name {
              font-size: 18px;
              position: relative;
            }
            #subheading {
              position: relative;
              font-size: 12px;
              font-weight: 400;
            }

            #image-container {
              margin: 40px;
            }
            #image-container img {
              max-width: 100%;
              height: auto;
              position: relative;
              margin-top: 20px;
              margin-left: 40px;
              margin-right: 40px;
            }
            .nav-arrow {
              margin: 10px;
            }
            nav ul li a {
              font-size: 8px;
              font-weight: bold;
              text-decoration: none;
            }
            #about-page {
              padding: 25px;
            }
            #text-content {
              font-size: 13px;
              text-align: justify;
              width: 100%;
              animation: fadeIn ease 2s;
              margin-right: auto;
            }
            #about-img {
              width: 100%;
            }
            nav ul li {
              margin-right: auto;
            }
          }

          @media only screen and (max-width: 760px) and (orientation: landscape) {
            #name {
              font-size: 20px;
              position: relative;
              top: auto;
              right: auto;
              bottom: auto;
              left: auto;
            }
            #subheading {
              position: relative;
              font-size: 14px;
              font-weight: 400;
            }
            nav ul li a {
              font-size: 10px;
            }

            #image-container img {
              height: 250px;
              width: auto;
              margin-top: 20px;
              margin-left: 40px;
              margin-right: 40px;
            }
            #image-container {
              margin: auto;
            }
          }
        `}
      />
      <Head>
        <link rel="icon" href="/favicon-32x32.png" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
