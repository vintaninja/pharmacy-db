import React from 'react';
import logo from './logo.svg';
import './App.css';

const displayOrgName = event => alert(event.target.id);
const orgs = [
  {
    org: 'Shopper\'s Drug Mart',
    orgName: "name1"
  },
  {
    org: 'Costco',
    orgName: "name2"
  },
  {
    org: 'Other',
    orgName: "name3"
  }
];

function App() {
  const greeting = "greeting";
  const displayAction = false;
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
