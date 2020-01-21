import React, {useState, useRef, useEffect} from 'react';
import Users from '../../containers/UserCardContainer';
import './Dropdown.css';

const Dropdown = (props) => {
  const dropdownRef = useRef();
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {console.log("Dropdown rendered")}, [])
  useEffect(() => {console.log("Dropdown: input props changed", props.input)}, [props.input])
  useEffect(() => { document.addEventListener("click", handleClickOutside, false)}, []);

  const handleClickOutside = event => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      console.log('clicked outside');
      setIsVisible(false);
    }
  };

  return (
    <div className="dropdown-component" ref={dropdownRef}>
      {props.input.length === 0 ? null : <Users input={props.input}/>}
    </div>
  )
    
  }

export default Dropdown;