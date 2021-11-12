import React, {useState, useReducer } from 'react'
import './TrainRegister.css'
import {Button,Form} from 'react-bootstrap';

function TrainRegister() {
    return (
        <div className="Body_Regis">
                <title>Slide Navbar</title>
            <link rel="stylesheet" type="text/css" href="slide navbar style.css" />
            <link href="https://fonts.googleapis.com/css2?family=Jost:wght@500&display=swap" rel="stylesheet" />
            <div className="Card-Regis" src="images/New_login/552721.jpg">
            <input type="checkbox" id="chk" aria-hidden="true" />
            <div className="signup">
                <form>
                <label htmlFor="chk" aria-hidden="true">Sign up</label>
                <div className="Name-User" id="left">
                    <center><img className="sealImage" alt="Image of Seal" src="images/New_login/552721.jpg" width={70} /></center>
                    <input id="fn" type="text" name="FName" placeholder="First name" required />
                    <input id="ln" type="text" name="LName" placeholder="Last name" required />
                    <input type="checkbox" check if yes />
                    <input type="checkbox" />
                    <Form.Check
                        inline
                        label="Male"
                        name="sex"
                        type="checkbox"
                        
                    />
                    <Form.Check
                        inline
                        label="Female"
                        name="sex"
                        type="checkbox"
                    />
                </div>
                <div className="Info-User" id="right">
                    <input type="text" name="txt" placeholder="User name" required />
                    <input type="email" name="email" placeholder="Email" required />
                    <input type="password" name="pswd" placeholder="Password" required />
                    <input type="re-password" name="repswd" placeholder="RE- Password" required />
                    <input type="Telephone" name="tel" placeholder="Tel" required />
                    <input classname="inputbox" type="date" data-date-inline-picker="true" name="DOB" min="1900-01-01" max="2009-12-31" placeholder="dd-mm-yyyy" required defaultValue="{values.DOB}" onchange="{handleChange}" />
                </div>
                <div id="right">
                    <Button variant="outline-danger">Cancel</Button>{' '}
                    <Button variant="outline-primary">Sign Up</Button>{' '}
                </div>
                </form>
            </div>
            <div className="login">
                <form>
                <label htmlFor="chk" aria-hidden="true">Login</label>
                <input type="email" name="email" placeholder="Email" required />
                <input type="password" name="pswd" placeholder="Password" required />
                <button>Login</button>
                Copy
                </form></div>
            </div>
        </div>
    )
}

export default TrainRegister
