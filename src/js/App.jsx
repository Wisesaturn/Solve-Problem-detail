import React from 'react';
import '../css/App.scss';
import Content from './Content';
import Header from './Header';
import Footer from './Footer';
import Modal from './Modal';

function App() {
  return (
    <>
      <div id="App">
        <Header />
        <Content />
        <Footer />
      </div>
      <Modal className="Modal" visible={true}> </Modal>
    </>
  );
}

export default App;
