import React from 'react';
import logo from './rick.png';
import './App.css';
import SearchBar from './components/SearchBar/SearchBar';
import Users from './containers/SearchUsers';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="header-wrapper">
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
        {/* <p className="App-text"> PAGE HEADER"</p> */}
        </div>
        
      </header>
      <div className="search-wrapper">
        <SearchBar placeholder="username"/>
      </div>
      <div className="content-wrapper">
        <Users/>
      </div>

    </div>
  );
}

export default App;
