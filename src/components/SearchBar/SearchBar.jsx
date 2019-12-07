import React, {useState, useEffect} from 'react';
import './SearchBar.css';


// Component created with arrow function making use of hooks
const SearchBar = (props) => {

    const [input, setInput] = useState('');

    useEffect(() => {console.log("input state is", input)}, [input])

    // onChange will be attribuited to the input element so the refered target will be that contained in the input
    const onChange = (e) => {
        setInput(e.currentTarget.value)
    }

    let sugestionList = (
        <ul>
            <li>item 1</li>
            <li>item 2</li>
        </ul>
    )

    

    return(
        <div className="search-bar">
            <input type="text" placeholder={props.placeholder} onChange={onChange}/>
            {sugestionList}
        </div>
        
    )
}

export default SearchBar;