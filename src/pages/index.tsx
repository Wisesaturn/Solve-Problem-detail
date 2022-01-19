import React from 'react';
import Content from '../components/Content/Content';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import Modal from '../components/Modal';
import { darkMode_state } from '../components/state';
import { useRecoilValue } from 'recoil';

const IndexPage = () => {
    const check = useRecoilValue(darkMode_state);

    return (
        <>
            <div id="App" className={`${check ? 'dark' : 'light'}`}>
                <Header />
                <Content />
                <Footer />
            </div>
            <Modal className="Modal" visible={false}> </Modal>
        </>
    );
};
export default IndexPage;