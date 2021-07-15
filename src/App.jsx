import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Content from './components/Content/Content';
import Footer from './components/Footer/Footer';

function App(props) {
  return (
    <div className="App">
      <Header state={props.state.headerInfo}/>
      <Navbar />
      <Content state={props.state.contentInfo}/>
      <Footer />
    </div>
  );
}

export default App;
