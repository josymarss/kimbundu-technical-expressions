import React from "react";
import Head from "next/head";
import Script from "next/script";

import "@fortawesome/fontawesome-svg-core/styles.css"; // import Font Awesome CSS
import { config } from "@fortawesome/fontawesome-svg-core";

import { Header } from '../components/header';
import Footer from '../components/footer';

import  '../styles/globals.css';

config.autoAddCss = false;

function MyApp({ Component, pageProps }) {
  return(
    <>
    <Head>
        <meta
          name="descrição"
          description="O melhor e site para aprender línguas nacionais"
        />
        <meta
          name="línguas nacionais"
          description="Kimbundu Kimbundo Quimbundo Kikongo Quicongo Umbundu umbundo ganguelas Nganguela Ngangela Kwanyama quanhama kwanhama kuanhama  Chócue quioco Côkwe Chokwe Ciokwe Kioko Shioko Tchocué"
        />
        <meta
          name="curso cursos"
          description="cursos línguas nacionais Kimbundu Kimbundo Quimbundo Kikongo Quicongo Umbundu umbundo ganguelas Nganguela Ngangela Kwanyama quanhama kwanhama kuanhama  Chócue quioco Côkwe Chokwe Ciokwe Kioko Shioko Tchocué"
        />
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5514991570328030"
          crossOrigin="anonymous"
        />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        ></meta>
    
      </Head>
      <Header />
      <Component {...pageProps} />
      <Footer /> 
    </>
  )
}

export default MyApp;
