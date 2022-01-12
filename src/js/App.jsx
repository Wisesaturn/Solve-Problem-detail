import React from 'react';
import '../css/App.scss';
import Content from './Content/Content';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import Modal from './Modal';

function App() {
  return (
    <>
      <div id="App">
        <Header />
        <Content />
        <Footer />
      </div>
      <Modal className="Modal" visible={false}> </Modal>
    </>
  );
}

export default App;
