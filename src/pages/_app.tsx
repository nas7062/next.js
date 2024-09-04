import Global_Layout from "@/components/Global_Layout";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
export default function App({ Component, pageProps }: AppProps) {

  return(
    <Global_Layout>
      <Component {...pageProps}/>
    </Global_Layout>
  );

}
