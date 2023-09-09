import { Box, ChakraProvider } from '@chakra-ui/react'

import type { AppProps } from 'next/app'
import { Toaster } from 'react-hot-toast'

import { RecoilRoot } from 'recoil'
import { SessionProvider } from 'next-auth/react'
import Layout from '@/layout/Layout'
import Head from 'next/head'
import { theme } from '@/chakra/theme'

export default function App({ Component, pageProps:{...pageProps} }: AppProps) {
  return (
    <RecoilRoot>
       
        
          <ChakraProvider theme={theme}>
            <Box bg="gray.900" minH="100vh">
            <Toaster></Toaster>
            <Layout>
            <Head>
                  <title>QRS 2024 - 17th Quantum Reactive Scattering Workshop</title>
                  <meta name="viewport" content="initial-scale=1, width=device-width" />
                  <meta name="description" content="Chemical Physics" />
                    <meta property="og:title" content="QRS 2024" />
                    <meta property="og:description" content="QRS 2024" />
                    {/*<meta property="og:image" content={ogImageUrl} />*/}
                    <meta property="og:url" content="https://qrs.chemicalphysics.org" />
              </Head>
              <Component {...pageProps} />
            </Layout>
            </Box>
          </ChakraProvider>
          
      </RecoilRoot>
  )
}
