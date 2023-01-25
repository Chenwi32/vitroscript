import { Container } from '@chakra-ui/react'
import Head from 'next/head'
import Banner from './components/banner'


export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Vitroscript is a writing service company based in Cameroon" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Container>
        <Banner/>
      </Container>

    </>
  )
}
