import Header from "@/components/Header";
import { Html, Main,Head, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Header/>
      <Head/>
      <body className="antialiased">
        <Main />
        <NextScript />
      </body>
      
    </Html>
  );
}
