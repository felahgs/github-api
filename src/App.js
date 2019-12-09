import React from 'react';
import './App.css';
import SearchBar from './components/SearchBar/SearchBar';

function App() {
  return (
    <div className="App">
      <header className="App-header">

      </header>
      <div className="content-wrapper">
        <div className="search-wrapper">
          <SearchBar placeholder="username"/>
        </div>
        <div className="user-profile-wrapper">
        </div>
      </div>

    </div>
  );
}

export default App;
