import 'prismjs/themes/prism-okaidia.css'
import '../../public/App.scss'
import { AppProps } from 'next/app'
import Footer from '../components/Footer/Footer'
import Head from 'next/head'
import Header from '../components/Header/Header'
import Provider from './provider'
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
                <Header />
                <Component {...pageProps} />
                <Footer />
            </Provider>
        </RecoilRoot>
    )
}

export default App
