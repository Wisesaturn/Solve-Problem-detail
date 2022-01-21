import React from 'react';
import { AppProps } from 'next/app';
import { RecoilRoot } from 'recoil';
import '../css/App.scss';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import Provider from './main/Provider';
import Head from 'next/head';

function App({ Component, pageProps }: AppProps) {
    return (
        <RecoilRoot>
            <Head>
                <title>재한쓰의 공부용 블로그 😊</title>
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            </Head>
            <Provider>
                <Header />
                <Component {...pageProps} />
                <Footer />
            </Provider>
        </RecoilRoot>
    );
}

export default App
