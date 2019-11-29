import React from 'react';
import logo from './rick.png';
import './App.css';
import SearchBar from './components/SearchBar/SearchBar'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="header-wrapper">
          <img src={logo} className="App-logo" alt="logo" />
        {/* <p className="App-text"> IM HEADER RIIIIIICK"</p> */}
        </div>
        
      </header>
      <div className="search-wrapper">
        <SearchBar placeholder="username"/>
      </div>
      <div className="content-wrapper">
        
      </div>

    </div>
  );
}

export default App;
