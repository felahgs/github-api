import React from 'react';
import logo from './rick.png';
import './App.css';
import SearchBar from './components/SearchBar/SearchBar';
import Users from './containers/SearchUsers';
import Dropdown from './components/Dropdown/Dropdown';
import Autocomplete from './components/Autocomplete/Autocomplete'


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
        {/* <SearchBar placeholder="username"/> */}
        <Autocomplete
          placeholder="username"
          suggestions={[
            "Alligator",
            "Bask",
            "Crocodilian",
            "Death Roll",
            "Eggs",
            "Jaws",
            "Reptile",
            "Solitary",
            "Tail",
            "Wetlands"
          ]}
        />
      </div>
      <div className="content-wrapper">
          {/* <Dropdown/> */}
          <div className="users-cards">
            {/* <Users/> */}
          </div>
      </div>

    </div>
  );
}

export default App;
