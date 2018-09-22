import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import CustomNavbar from './components/Navbar/Navbar'
import TextFiller from './components/TextFiller'
import Home from './components/Home'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import About from './components/About'
// import Calculator from './components/Navbar/Calculator'
import MarkdownPreviewer from './components/projects/MarkdownPreviewer'
import Projects from './components/Projects'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="bg">
          <CustomNavbar />
          <Route exact path="/" component={Home} />
          <Route path="/About" component={About} />
          <Route path="/Projects" component={Projects} />
          <p className="contact">
           <br />Vance Sereda © {new Date().getFullYear()}<br />Built with React and Reactstrap</p>
        </div>

      </Router>
    );
  }
}

export default App;
