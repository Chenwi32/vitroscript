import { Container } from '@chakra-ui/react'
import Head from 'next/head'
import Banner from './components/banner'
import Feature from './components/feature'


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

      <Container p={0} maxW={'unset'} backgroundColor='brand.500'>
        <Banner />
        <Feature />
      </ Container>
    </>
  );
}
