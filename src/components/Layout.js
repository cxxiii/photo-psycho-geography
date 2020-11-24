import React from 'react'
import { Global, css } from '@emotion/react'
import Helmet from 'react-helmet'
import useSiteMetadata from '../hooks/useSiteMetadata'
import NavHeader from './NavHeader'

const Layout = ({ children }) => {
  const { title, description } = useSiteMetadata()

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

          #wrapper {
            height: 100%;
            min-height: 100%;
            opacity: 1;
            transition: all ease 0.2s;
          }

          a,
          li {
            color: #444444;
          }

          a:hover {
            background: none;
            color: var(--default);
          }

          .no-display {
            display: none;
          }

          .default {
            color: var(--default);
            filter: brightness(100%);
          }
          .bot,
          [class*='botanical']:hover {
            color: var(--bot);
            filter: brightness(125%);
          }
          .fin,
          [class*='finland']:hover {
            color: var(--fin);
            filter: brightness(200%);
          }
          .for,
          [class*='forest']:hover {
            color: var(--for);
            filter: brightness(150%);
          }
          .ire,
          [class*='ireland']:hover {
            color: var(--ire);
            filter: brightness(100%);
          }
          .psy,
          [class*='psycho']:hover {
            color: var(--psy);
            filter: brightness(100%);
          }

          /* HEADER */
          header {
            line-height: 0;
            margin-top: 40px;
          }

          header h1 {
            letter-spacing: 4px;
            font-weight: 100;
            position: sticky;
          }

          h1 {
            font-family: 'Cinzel', serif;
            font-size: 2em;
          }

          .deco {
            font-family: 'Cinzel Decorative';
          }

          #name {
            position: absolute;
            right: 290px;
            left: 0;
            letter-spacing: 0;
          }

          #subheading {
            position: absolute;
            font-size: 20px;
            font-weight: lighter;
            letter-spacing: 0.04em;
            transition: color ease 0.2s;
          }

          /* NAVIGATION MENU */
          nav {
            position: absolute;
            text-decoration: none;
            top: 50px;
            left: 0;
            bottom: 0;
            right: 0;
            line-height: 0;
          }

          nav ul li {
            font-size: 13px;
            font-weight: 700;
            display: inline;
            margin-left: 1em;
          }

          .correct-offset {
            margin-left: -1em;
          }

          nav ul li a {
            text-decoration: none;
          }

          nav ul li a:hover {
            cursor: pointer;
            transition: color 0.2s ease;
          }

          /* IMAGE CONTAINER */
          #image-container {
            display: flex;
            align-items: center;
            justify-content: space-evenly;
          }

          #display-img {
            height: 84vh;
            max-width: 100%;
            margin: 50px;
            pointer-events: none;
          }

          .nav-arrow {
            position: absolute;
            font-family: 'Cinzel', serif;
            font-size: 4em;
            cursor: pointer;
            line-height: 0;
            margin: 75px;
            transition: color ease 0.2s;
          }

          #arrow-right {
            right: 0;
            left: auto;
          }

          #arrow-left {
            left: 0;
            right: auto;
          }

          .nav-btn-active {
            opacity: 1;
          }

          .nav-btn-inactive {
            opacity: 0.33;
            cursor: default;
          }

          aside {
            font-size: 13px;
            font-weight: lighter;
            position: absolute;
            align-self: flex-end;
          }

          aside #img-location {
            font-style: italic;
          }

          /* ABOUT PAGE */
          #about-page {
            display: block;
            padding: 50px;
          }

          #about-img {
            position: static;
            pointer-events: none;
            width: 50%;
          }

          figcaption {
            font-size: xx-small;
          }

          #text-content {
            font-size: 13px;
            text-align: justify;
            width: 50%;
            margin-right: auto;
            margin-left: auto;
          }

          #text-content a {
            color: var(--default);
          }

          #contact {
            position: absolute;
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

          @-moz-keyframes fadeIn {
            0% {
              opacity: 0;
            }
            100% {
              opacity: 1;
            }
          }

          @-webkit-keyframes fadeIn {
            0% {
              opacity: 0;
            }
            100% {
              opacity: 1;
            }
          }

          @-o-keyframes fadeIn {
            0% {
              opacity: 0;
            }
            100% {
              opacity: 1;
            }
          }

          @-ms-keyframes fadeIn {
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

          @-moz-keyframes fadeOut {
            0% {
              opacity: 1;
            }
            100% {
              opacity: 0;
            }
          }

          @-webkit-keyframes fadeOut {
            0% {
              opacity: 1;
            }
            100% {
              opacity: 0;
            }
          }

          @-o-keyframes fadeOut {
            0% {
              opacity: 1;
            }
            100% {
              opacity: 0;
            }
          }

          @-ms-keyframes fadeOut {
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
      <Helmet>
        <html lang="en" />
        <title>{title}</title>
        <meta name="description" content={description} />
      </Helmet>
      {/* <NavHeader /> */}
      <main>{children}</main>
    </>
  )
}

export default Layout
