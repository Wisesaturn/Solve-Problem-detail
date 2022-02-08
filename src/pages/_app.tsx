import 'prismjs/themes/prism-okaidia.css'
import '../../public/App.scss'
import { AppProps } from 'next/app'
import Footer from '../components/Footer/Footer'
import Head from 'next/head'
import Header from '../components/Header/Header'
import NextNProgress from 'nextjs-progressbar'
import Provider from '../components/provider'
import React from 'react'
import { RecoilRoot } from 'recoil'

function App({ Component, pageProps }: AppProps) {

    return (
        <RecoilRoot>
            <Provider>
                <Head>
                    <title>재한쓰의 공부용 블로그 😊</title>
                    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                </Head>
                <NextNProgress
                    color="#8ac4ae"
                    startPosition={0.2}
                    stopDelayMs={300}
                    height={3}
                    showOnShallow={true} />
                <Header />
                <Component {...pageProps} />
                <Footer />
            </Provider>
        </RecoilRoot>
    )
}

// NextNProgress : Loading Bar (Progress)
export default App
