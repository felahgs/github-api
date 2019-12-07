import React, {useEffect} from 'react';
import Users from '../../containers/SearchUsers';

const Dropdown = (props) => {

useEffect(() => {console.log("Dropdown rendered")}, [])
useEffect(() => {console.log("Dropdown: imput props changed", props.input)}, [props.input])
// useEffect(() => {updateDropdown(<Dropdown input={props.input}/>)}, [props.input])

// const [dropdownComponent, updateDropdown] = useState(<Dropdown input={props.input}/>)


return (
  <div className="dropdown-component">
    {props.input.length === 0 ? null : <Users input={props.input}/>}
  </div>
)
  
}

export default Dropdown;