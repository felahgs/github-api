import React, {useState} from 'react';
import Dropdown from '../Dropdown/Dropdown';
import './SearchBar.css';


// Component created with arrow function making use of hooks
const SearchBar = (props) => {

    const [input, setInput] = useState('');
    // const [dropdownComponent, updateDropdown] = useState(<Dropdown input={input}/>)


    // onChange will be attribuited to the input element so the refered target will be that contained in the input
    const onChange = (e) => {
        setInput(e.currentTarget.value)
        // console.log("=(")
    }

    return(
        <div className="search-bar">
            <input type="text" placeholder={props.placeholder} onChange={onChange}/>
            <Dropdown input={input}/>
        </div>     
    );
}

export default SearchBar;