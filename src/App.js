import React, { Component } from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';
import routeList from './router/routeList';
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollToTopOnMount from './components/ScrollToTopOnMount';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Header />
          <ScrollToTopOnMount />
          <Switch>{routeList}</Switch>
          <Footer />
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
