import React from 'react';
import "./App.css"

const Employee = (props) =>{
return(<div className="employeeStyle">
      <div><label>Employee Name:</label><input type="text" value={props.name} onClick={props.onClickHandler}></input></div>
      <div><label>DOB:</label><input type="text" value={props.dob}></input></div>
      <div><label>Designation:</label><input type="text" value={props.poh}></input></div>
    </div>);
};

export default Employee;