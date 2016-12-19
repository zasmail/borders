import React, { Component } from 'react';
import './App.css';
import Search from './components/InstantSearch/Search';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
var injectTapEventPlugin = require("react-tap-event-plugin");
injectTapEventPlugin();

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <Search />
      </MuiThemeProvider>

    );
  }
}

export default App;
