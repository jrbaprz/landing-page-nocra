import React from 'react';
import Header from './components/Header/Header';
import Content from './components/Content/Content';
import Footer from './components/Footer/Footer';

const App = () => {
  return (
    <>
      <div className="main">
        <Header />
        <Content />
        <Footer />
      </div>
      </>
    )
};

export default App