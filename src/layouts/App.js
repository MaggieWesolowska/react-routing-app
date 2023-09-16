import React, { Component } from 'react';
import '../layouts/App';
import '../styles/App.css';
import Header from './Header';
import Navigation from './Navigation';
import Page from './Page';
import Footer from './Footer';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <header>{<Header />}</header>
        <main>
          <aside>{<Navigation />}</aside>
          <section>{<Page />}</section>
        </main>
        <footer>{<Footer />}</footer>
      </div>
    );
  }
}

export default App;
