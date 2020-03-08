import React, { Component } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Home';
import Signatures from './components/SignatureDishes';
import Menu from './components/Menu';
import Gallery from './components/Gallery';
import Location from './components/Location';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Home />
        <Menu />
        <Gallery />
        <Location />
        <Footer />
      </div>
    );
  }
}

export default App;