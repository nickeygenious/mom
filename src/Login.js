import React from 'react';

const Login = (props)=>{
{
    return (<div className="container">
            <label>Username:</label><input type= "text" value={props.username} onChange={props.userNameHandeler}></input><br></br><br></br>
            <label>Password:</label><input type= "text" value={props.username} onChange={props.passwordHandler}></input><br></br>
        <button>Submit</button>
    </div>)}
};

export default Login;