import React from 'react';
import { darkMode_state } from '../../components/state';
import { useRecoilValue } from 'recoil';
import Content from '../../components/Content/Content';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import Modal from '../../components/Modal';

const Layout = () => {
    const check: boolean = useRecoilValue(darkMode_state);

    return (
        <>
            <div id="App" className={`${check ? 'dark' : 'light'}`}>
                <Header />
                <Content />
                <Footer />
            </div>
            <Modal className="Modal" visible={false} /> 
        </>  
    );
}

export default Layout;