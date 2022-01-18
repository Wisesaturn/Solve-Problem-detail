import React from 'react';
import Content from '../../js/Content/Content';
import Header from '../../js/Header/Header';
import Footer from '../../js/Footer/Footer';
import Modal from '../../js/Modal';
import { darkMode_state } from '../../js/state';
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
