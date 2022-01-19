import React from 'react';
import { AppProps } from 'next/app';
import { RecoilRoot } from 'recoil';
import '../css/App.scss';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';

function App({ Component, pageProps }: AppProps) {
    return (
        <RecoilRoot>
            <div id="App" className="dark">
                <Header />
                <Component {...pageProps} />
                <Footer />
            </div>
        </RecoilRoot>
    );
}

export default App
