import React from 'react';
import { HashRouter as Router, Link, BrowserRouter } from 'react-router-dom';
import Main from './components/Main';
import './App.css';
function App() {
  return (
    <Router>
      <ul className="nav">
        <li>
          <Link to="/">home</Link>
        </li>
        <li>
          <Link to="/about">about</Link>
        </li>
      </ul>
      <Main />
    </Router>
  );
}

export default App;
