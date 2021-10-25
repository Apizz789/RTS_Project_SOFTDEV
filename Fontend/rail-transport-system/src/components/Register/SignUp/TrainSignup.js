import React, { useState } from 'react'
import axios from 'axios'
import validation from "./validation"
// import firebase from '../Project_SOFTDEV/Fontend/rail-transport-system/src/firebase.js'
import PropTypes from 'prop-types'
import '../SignUp/TrainSignup.css';
// const db = firebase.firestore();
function TrainSignup() {
    const [values, setValues] = useState({
        fname: "",
        lname: "",
        username: "",
        password: "",
        tel: "",
        DOB: "",
        email: ""
    });
    const [errors, setErrors] = useState({});

    const handleChange = (event) => {
        setValues({
            ...values,
            [event.target.name]: event.target.value,
        });
    }
    const handleSubmit = (event) => {
        event.preventDefault()
        setErrors(validation(values));

        // axios.post('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDwZnikVYpl2Rh8xMOSSIqO0HLXKaoxoOI',{
        //                 "email": Email,
        //                 "password": Password,
        //                 "returnSecureToken": true
        //                 })
        //                  .then(response => {console.log(response)})
        //                  .catch(error => {console.log(error)})

        // axios.post('https://us-central1-soft-dev-tutorial.cloudfunctions.net/users',{
        //     "Firstname": Firstname,
        //     "Lastname": Lastname,
        //     "Username": Username,
        //     "Password": Password,
        //     "Tel": Tel,
        //     "DOB": DOB,
        //     "Email": Email
        //   })
        //    .then(response => {console.log(response)})
        //    .catch(error => {console.log(error)}) 
    }





    return (
        
        <div className="register_class" >
            <div className="Title"><h1 align="center">REGISTRATION</h1></div>

            <div className="input-box" align="center">
                <span className="details">
                    <h2>First Name</h2></span>
                <input className="inputbox" type="text" name="fname" placeholder="Input your First Name" required onChange={handleChange}></input>
                {errors.fname && <p className="error">{errors.fname}</p>}
            </div>

            <div className="input-box" align="center">
                <span className="details">
                    <h2>Last Name</h2></span>
                <input className="inputbox" type="text" name="lname" placeholder="Input your Last Name" required onChange={handleChange}></input>
                {errors.lname && <p className="error">{errors.lname}</p>}
            </div>

            <div className="input-box" align="center">
                <span className="details">
                    <h2>User</h2></span>
                <input className="inputbox" type="text" name="username" placeholder="Input your User" required onChange={handleChange}></input>
                {errors.password && <p className="error">{errors.password}</p>}
            </div>

            <div className="input-box" align="center">
                <span className="details">
                    <h2>Password</h2></span>
                <input className="inputbox" type="text" name="password" placeholder="Input your Password" required onChange={handleChange}></input>
            </div>

            <div className="input-box" align="center">
                <span className="details">
                    <h2>Repeat Password</h2></span>
                <input className="inputbox" type="text" name="password" placeholder="Repeat Password" required onChange={handleChange}></input>
            </div>

            <div className="input-box" align="center">
                <span className="details">
                    <h2>Telephone</h2></span>
                <input className="inputbox" type="text" name="tel" maxLength="10" placeholder="Input your Telephone" required onChange={handleChange}></input>
            </div>

            <div className="input-box" align="center">
                <span className="details"><h2>DOB</h2></span>
                <input className="inputbox" type="date" data-date-inline-picker="true" name="DOB" placeholder="Input your DOB" required onChange={handleChange}/>
                
            </div>

            <div className="input-box" align="center">
                <span className="details"><h2>Email</h2></span>
                <input className="inputbox" type="text" name="email" placeholder="Input your Email" required onChange={handleChange}></input>
            </div>


            <div className="input-box" align="center">
                <label className="container">Male
                    <input type="checkbox" checked="checked" onChange={() => { }}></input>
                    <span className="checkmark"></span>
                </label>
                <label className="container">Female
                    <input type="checkbox" checked="checked" onChange={() => { }}></input>
                    <span className="checkmark"></span>
                </label>
            </div>


            <div className="button" align="center">
                <input type="submit" value="Register" onClick={handleSubmit}></input>
                <input type="submit" value="Cancel"></input>
            </div>

            <h2>Starting Date</h2>
            <section>
                <fieldset>
                    <legend>TrainSignup.js</legend>
                    <div className="field moveindate">
                        <label>Date</label>
                        <input className="datepicker" name="date" type="text" autofocuss="10"></input>
                    </div>
                </fieldset>
            </section>


        </div>


    )

}

export default TrainSignup;
