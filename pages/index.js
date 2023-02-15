
import Head from "next/head";
import Banner from "../components/banner";
import Cta from "../components/cta";
import Feature from "../components/feature";
import Ourservices from "../components/ourservices";


export default function Home() {
  return (
    <>
      <Head>
        <title>Vitroscript</title>
        <meta
          name="description"
          content="Vitroscript is a writing service company based in Cameroon"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <>
        <Banner />
        <Feature />
        <Ourservices/>
        <Cta />
      </>
    </>
  );
}
