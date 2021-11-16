import React, { useState, useReducer } from 'react'; 
import axios from 'axios'
import validation_signup from "./validation_signup"

// import firebase from '../../../firebase';
// const db = firebase.firestore();

import PropTypes from 'prop-types';
import '../SignUp/TrainSignup.css';


function TrainSignup() {
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
        setErrors(validation_signup(values));

        

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

    // const Checkbox = ({ FemaleCheck, MaleCheck, title = "", checked = false }) => (

    //     <input
    //       onChange2={e => {
    //         if (FemaleCheck !== undefined) FemaleCheck(e.target.checked);
    //       }}
    //       onChange={e => {
    //         if (MaleCheck !== undefined) MaleCheck(e.target.checked);
    //       }}
    //       type="checkbox"
    //       checked={checked}
    //     />
    // );

    if (state.click){
        values.sex = "Male"
    }

    if (state.change){
        values.sex = "Female"
    }

    const Checkbox = ({ fnClick, fnChange, title = "", checked = false }) => (
        <label>
            <input
                onClick={e => {
                    if (fnClick !== undefined) fnClick(e.target.checked);
                }}
                onChange={e => {
                    if (fnChange !== undefined) fnChange(e.target.checked);
                }}
                type="checkbox"
                checked={checked}
            />
            {title}
        </label>
    );


    return (
        <form className="Signup_body">
            <div className="register_class" >
                <div className="Title"><h1 align="center">REGISTRATION</h1></div>

                <div className="input-box" align="center">
                    <span className="details">
                        <h2>First Name</h2></span>
                    <input
                        className="inputbox"
                        type="text"
                        name="fname"
                        maxLength="30"
                        placeholder="Input your First Name"
                        required
                        value={values.fname}
                        onChange={handleChange}

                    />
                    {errors.fname && <p className="error">{errors.fname}</p>}
                </div>

                <div className="input-box" align="center">
                    <span className="details">
                        <h2>Last Name</h2></span>
                    <input
                        className="inputbox"
                        type="text"
                        name="lname"
                        maxLength="30"
                        placeholder="Input your Last Name"
                        required
                        value={values.lname}
                        onChange={handleChange} />
                    {errors.lname && <p className="error">{errors.lname}</p>}
                </div>

                <div className="input-box" align="center">
                    <span className="details">
                        <h2>Username</h2></span>
                    <input
                        className="inputbox"
                        type="text"
                        name="username"
                        maxLength="20"
                        placeholder="Input your User"
                        required
                        value={values.username}
                        onChange={handleChange}
                    />
                    {errors.username && <p className="error">{errors.username}</p>}
                </div>

                <div className="input-box" align="center">
                    <span className="details">
                        <h2>Password</h2></span>
                    <input
                        className="inputbox"
                        type="text"
                        name="password"
                        placeholder="Input your Password"
                        maxLength="32"
                        required
                        value={values.password}
                        onChange={handleChange}
                    />
                    {errors.password && <p className="error">{errors.password}</p>}
                </div>

                <div className="input-box" align="center">
                    <span className="details">
                        <h2>Repeat Password</h2></span>
                    <input
                        className="inputbox"
                        type="text"
                        name="repeat_password"
                        placeholder="Repeat Password"
                        maxLength="32"
                        required
                        value={values.repeat_password}
                        onChange={handleChange}
                    />
                    {errors.repeat_password && <p className="error">{errors.repeat_password}</p>}
                </div>

                <div className="input-box" align="center">
                    <span className="details">
                        <h2>Telephone</h2></span>
                    <input
                        className="inputbox"
                        type="text"
                        name="tel"
                        maxLength="10"
                        placeholder="Input your Telephone"
                        required
                        value={values.tel}
                        onChange={handleChange}
                    />
                    {errors.tel && <p className="error">{errors.tel}</p>}
                </div>

                <div className="input-box" align="center">
                    <span className="details"><h2>DOB</h2></span>
                    <input
                        className="inputbox"
                        type="date"
                        data-date-inline-picker="true"
                        name="DOB" min="1900-01-01"
                        max="2009-12-31"
                        placeholder="dd-mm-yyyy"
                        required
                        value={values.DOB}
                        onChange={handleChange}
                    />
                    {errors.DOB && <p className="error">{errors.DOB}</p>}
                </div>

                <div className="input-box" align="center">
                    <span className="details"><h2>Email</h2></span>
                    <input
                        className="inputbox"
                        type="text"
                        name="email"
                        placeholder="Input your Email"
                        required
                        value={values.email}
                        onChange={handleChange}
                    />
                    {errors.email && <p className="error">{errors.email}</p>}
                </div>

                <div class="container">
                    <div class="row">
                        <div class="col-sm-3">
                            <div class="checkbox">
                                <input type="checkbox" id="checkbox1" checked={state.click} onChange={()=>{}}/>
                                <label for="checkbox1"></label>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="" align="center">

                    <Checkbox class="checkbox1"
                        title="Male"
                        fnClick={v => setState({ click: v })}
                        checked={state.click}
                    />
                    <br />
                    <Checkbox class="checkbox2"
                        title="Female"
                        fnChange={v => setState({ change: v })}
                        checked={state.change}
                    />
                    {
                    state.click? null : state.change = false 
                     }
                    {
                      state.change? null : state.click = false
                    }
                    {/* <label className="container">Male
                    <Checkbox
                    name = "Male"
                    value = {values.sex}
                    MaleCheck={v => setState({ male: v})}
                    checked={state.male}
                    />
                        <span className="checkmark"></span>
                    </label>
                    <label className="container">Female
                    <Checkbox
                    name = "Female"
                    value = {values.sex}
                    FemaleCheck={v => setState({ female: v})}
                    checked={state.female}
                    />
                        <span className="checkmark"></span>
                    </label> */}
                </div>


                <div className="button" align="center">
                    <input type="submit" value="Register" onClick={handleSubmit} />
                    <input type="reset" value="Clear" />
                    <a href="../Register/SignIn/TrainSignin"><button>Go To Login</button></a>
                </div>

                <h2>Starting Date</h2>
                <section>
                    <fieldset>
                        <legend>TrainSignup.js</legend>
                        <div className="field moveindate">
                            <label>Date</label>
                            <input className="datepicker" name="date" type="text" autofocuss="10" />
                        </div>
                    </fieldset>
                </section>

            </div>
        </form>

    )

}


export default TrainSignup;
