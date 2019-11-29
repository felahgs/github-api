import React from 'react';
import './SearchBar.css';


const searchBar = (props) => {
    return(
        <div className="search-bar">
            <input type="text" placeholder={props.placeholder}/>
        </div>
        
    )
}

export default searchBar;