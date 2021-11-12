import React, {useState, useReducer } from 'react'
import './TrainRegister.css'
import axios from 'axios'
import validation_register from "./validation_register"
import {Button,Form} from 'react-bootstrap';

function TrainRegister() {
    const [values, setValues] = useState({
        fname: "",
        lname: "",
        username: "",
        password: "",
        repeat_password: "",
        tel: "",
        DOB: "",
        email: "",
        sex: "",
    });
    const [errors, setErrors] = useState({
        fname: "",
        lname: "",
        username: "",
        password: "",
        repeat_password: "",
        tel: "",
        DOB: "",
        email: "",
        sex: "",
    });


    const initialState = {
        change: false,
        click: true,
    };

    const reducer = (state, action) => ({ ...state, ...action });
    const [state, setState] = useReducer(reducer, initialState);

    const handleChange = (event) => {
        setValues({
            ...values,
            [event.target.name]: event.target.value,
        });
    }
    const handleSubmit = (event) => {
        event.preventDefault()
        // setErrors(validation_signup(values));

        

        if (Object.keys(errors).length === 0) {
            
            axios.post('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDwZnikVYpl2Rh8xMOSSIqO0HLXKaoxoOI',{
                        "email": values.email,
                        "password": values.password,
                        "returnSecureToken": true
                        })
                         .then(response => {console.log(response)})
                         .catch(error => {console.log(error)})

            axios.post('https://us-central1-soft-dev-tutorial.cloudfunctions.net/users', {
                "Firstname": values.fname,
                "Lastname": values.lname,
                "Username": values.username,
                "Password": values.password,
                "Tel": values.tel,
                "DOB": values.DOB,
                "Email": values.email,
                "Sex": values.sex,
            })
                .then(response => { console.log(response) })
                .catch(error => { console.log(error) })
        }
    }
    return (
        <div className="Body_Regis" style={{marginTop:"55px"}}>
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

                    <input 
                        type="text" 
                        name="username" 
                        placeholder="User name" 
                        required 
                        value={values.username}
                        onChange={handleChange}
                    />

                    <input 
                        type="email" 
                        name="email" 
                        placeholder="Email" 
                        required
                        value={values.email}
                        onChange={handleChange}
                    />

                    <input 
                        type="password" 
                        name="password" 
                        placeholder="Password" 
                        required
                        value={values.password}
                        onChange={handleChange}
                    />

                    <input 
                        type="re-password" 
                        name="repeat_password" 
                        placeholder="RE- Password" 
                        required
                        value={values.repeat_password}
                        onChange={handleChange}
                    />

                    <input 
                        type="Telephone" 
                        name="tel" 
                        placeholder="Tel" 
                        required
                        value={values.tel}
                        onChange={handleChange}
                    />

                    <input 
                        classname="inputbox" 
                        type="date" 
                        data-date-inline-picker="true" 
                        name="DOB" min="1900-01-01" 
                        max="2009-12-31" 
                        placeholder="dd-mm-yyyy" 
                        required 
                        value={values.DOB} 
                        onchange={handleChange} />
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
