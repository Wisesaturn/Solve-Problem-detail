import React from 'react';
import { AppProps } from 'next/app';
import { RecoilRoot } from 'recoil';
import '../css/App.scss';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import Provider from './main/Provider';

function App({ Component, pageProps }: AppProps) {
    return (
        <RecoilRoot>
            <Provider>
                <Header />
                <Component {...pageProps} />
                <Footer />
            </Provider>
        </RecoilRoot>
    );
}

export default App
