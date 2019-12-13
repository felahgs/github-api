import React, {useEffect} from 'react';
import Users from '../../containers/UserCardContainer';
import './Dropdown.css';

const Dropdown = (props) => {

useEffect(() => {console.log("Dropdown rendered")}, [])
useEffect(() => {console.log("Dropdown: input props changed", props.input)}, [props.input])

return (
  <div className="dropdown-component">
    {props.input.length === 0 ? null : <Users input={props.input}/>}
  </div>
)
  
}

export default Dropdown;