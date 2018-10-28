import React, { Component } from 'react';


import {TopBar} from './TopBar'
import {Register} from './Register'
import {Main} from './main'


class App extends Component {
  render() {
    return (
      <div className="App">
        <TopBar />
        <Main/>
      </div>
    );
  }
}

export default App;
