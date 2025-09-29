// pages/_document.js
import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* Favicon */}
        <link rel="icon" href="images/favicon.ico" />
        <link rel="apple-touch-icon" href="images/favicon.png" />
        <meta name="theme-color" content="#ffffff" />

        {/* ✅ SEO basics */}
        <title>HeartBridge Foundation</title>
        <meta
          name="description"
          content="HeartBridge Foundation - Bringing hope, healing, and support to patients and families."
        />
        <meta name="keywords" content="HeartBridge, Foundation, Charity, Patients, Healthcare, Support" />
        <meta name="author" content="HeartBridge Foundation" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
