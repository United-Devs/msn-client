import type { AppProps } from 'next/app'
import Head from 'next/head'

import { ChakraProvider } from '@chakra-ui/react'
import { Inter } from '@next/font/google'
import { ChatProvider } from 'contexts/chatContext'
import theme from 'styles/theme'

const inter = Inter({ subsets: ['latin'] })

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>MSN Client</title>
        <link rel="shortcut icon" href="/img/icon-512.png" />
        <link rel="apple-touch-icon" href="/img/icon-512.png" />
        <meta name="description" content="A client of MSN project" />
      </Head>

      <ChatProvider>
        <ChakraProvider resetCSS theme={theme}>
          <main className={inter.className}>
            <Component {...pageProps} />
          </main>
        </ChakraProvider>
      </ChatProvider>
    </>
  )
}

export default App
