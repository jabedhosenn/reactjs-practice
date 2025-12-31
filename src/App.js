import './App.css';
import Home from './pages/Home';
import About from './pages/About';
import React from 'react';
import Contact from './pages/Contact';
import Fragment from './pages/Fragment';
import Clipboard from './pages/Clipboard';
import Focus from './pages/Focus';
import Keyboard from './pages/Keyboard';

function App() {
  return (
    // <div className="App">
    //   <h1>Welcome to My React App</h1>
    //   <p>This is a simple React application.</p>
    //   <p>Enjoy exploring the features!</p>
    //   <Home />
    //   <About />
    //   <Contact />
    //   <Fragment />
    // </div>
    <React.Fragment>
      <div className="App">
        <h1>Welcome to My React App</h1>
        <p>This is a simple React application.</p>
        <p>Enjoy exploring the features!</p>
        <Home />
        <About />
        <Contact name="Jabed Hosen JH" />
        <Fragment />
        <Clipboard />
        <Focus />
        <Keyboard />
      </div>
    </React.Fragment>
  );
}

export default App;
