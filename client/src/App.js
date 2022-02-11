import React, { Component } from 'react';
import './App.css';

import Home from './components/Register';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";


class App extends Component {
  render() {
    return (
      <>
      <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
      </>
    )
  }
}

export default App;


