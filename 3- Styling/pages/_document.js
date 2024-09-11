import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { Html, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Header/>
      <body className="antialiased">
        <Main />
        <NextScript />
      </body>
      <Footer/>
    </Html>
  );
}
