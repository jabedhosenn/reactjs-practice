import './App.css';
import Home from './pages/Home';
import About from './pages/About';
import React from 'react';
import Contact from './pages/Contact';

function App() {
  return (
    <div className="App">
      <h1>Welcome to My React App</h1>
      <p>This is a simple React application.</p>
      <p>Enjoy exploring the features!</p>
      <Home />
      <About />
      <Contact />
      <Contact name="Jabed Hosen JH" />
      <Contact name="Jabed Hosen" />
      <Contact name="Jabed" />
      <Contact />
    </div>
  );
}

export default App;
