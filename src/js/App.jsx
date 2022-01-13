import React from 'react';
import '../css/App.scss';
import Content from './Content/Content';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import Modal from './Modal';
import { darkMode_state } from './state';
import { useRecoilValue } from 'recoil';

function App() {
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
}

export default App;
