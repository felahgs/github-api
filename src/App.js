import React from 'react';
// import logo from './rick.png';
import './App.css';
import SearchBar from './components/SearchBar/SearchBar';
// import Users from './containers/SearchUsers';
// import Dropdown from './components/Dropdown/Dropdown';
// import Autocomplete from './components/Autocomplete/Autocomplete'


function App() {
  return (
    <div className="App">
      <header className="App-header">

      </header>
      <div className="content-wrapper">
        <div className="search-wrapper">
          <SearchBar placeholder="username"/>
        </div>
        <div className="user-wrapper">
        </div>
      </div>

    </div>
  );
}

export default App;
