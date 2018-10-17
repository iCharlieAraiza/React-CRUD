import React, { Component } from 'react';
import './App.css';
import Layout from './components/Layouts/Layout'

class App extends Component {


  render() {
    return (
      <div className="App">

        <header className="text-center my-4">
          <h1>First App</h1>
        </header>

        <main>              
              <Layout></Layout>
        </main>

      </div>
    );
  }
}

export default App;
