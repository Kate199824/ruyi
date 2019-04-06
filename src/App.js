import React, { Component } from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';
import routeList from './router/routeList';
import Header from './components/Header';
import Footer from './components/Footer';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <BrowserRouter>
          <Switch>{routeList}</Switch>
        </BrowserRouter>
        <Footer />
      </div>
    );
  }
}

export default App;
