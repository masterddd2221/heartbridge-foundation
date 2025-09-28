// pages/_app.js
import { useState, useEffect } from "react";
import Head from "next/head"; // ✅ import Head
import "../styles/globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Loader from "../components/Loader";

export default function MyApp({ Component, pageProps }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // show loader for ~2s only on first load
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <>
      <Head>
        <title>HeartBridge Foundation</title>
        <link rel="icon" href="images/favicon.ico" /> 
        {/* You can also add high-res versions if you want: */}
        {/* <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" /> */}
        {/* <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" /> */}
      </Head>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}
