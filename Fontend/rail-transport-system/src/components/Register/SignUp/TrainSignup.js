import React, {useState} from 'react'
import axios from 'axios'
// import firebase from '../src/utils/firebase.js'
import PropTypes from 'prop-types'
import '../SignUp/TrainSignup.css';
// const db = firebase.firestore();
function TrainSignup() {
    // const [postID, setPostId] = useState(null);
    const [Firstname,setFirstname] =useState(null);
    const [Lastname,setLastname] =useState(null);
    const [Username,setUsername] =useState(null);
    const [Password,setPassword] =useState(null);
    const [Tel,setTel] =useState(null);
    const [DOB,setDOB] =useState(null);
    const [Email,setEmail] =useState(null);
    const [submit,setSubmit] =useState(false);
    const data = { Firstname, Lastname, Username, Password, Tel, DOB, Email};
    function getData(val)
    {
        setSubmit(false)
        if (val.target.name === "fname") {
            setFirstname(val.target.value)
        }
        else if (val.target.name === "lname") {
            setLastname(val.target.value)
        }
        else if (val.target.name === "username") {
            setUsername(val.target.value)
        }
        else if (val.target.name === "password") {
            setPassword(val.target.value)
        }
        else if (val.target.name === "tel") {
            setTel(val.target.value)
        }
        else if (val.target.name === "DOB") {
            setDOB(val.target.value)
        }
        else if (val.target.name === "email") {
            setEmail(val.target.value)
        }
    }

    if (submit === true) {
        axios.post('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDwZnikVYpl2Rh8xMOSSIqO0HLXKaoxoOI',{
                        "email": Email,
                        "password": Password,
                        "returnSecureToken": true
                        })
                         .then(response => {console.log(response)})
                         .catch(error => {console.log(error)})   

        // db.collection('user').add({
        //     Firstname: Firstname,
        // });           
    }

    return (
        
            <div className="register_class" >
                <div className="Title"><h1 align="center">REGISTRATION</h1></div>

                <div className="input-box" align="center">
                    <span className="details">
                        <h2>First Name</h2></span>
                    <input className="inputbox" type="text" name="fname" placeholder="Input your First Name" required onChange={getData}></input>
                </div>

                <div className="input-box" align="center">
                    <span className="details">
                        <h2>Last Name</h2></span>
                    <input className="inputbox" type="text" name="lname" placeholder="Input your Last Name" required onChange={getData}></input>
                </div>

                <div className="input-box" align="center">
                    <span className="details">
                        <h2>User</h2></span>
                    <input className="inputbox" type="text" name="username" placeholder="Input your User" required onChange={getData}></input>
                </div>

                <div className="input-box" align="center">
                    <span className="details">
                        <h2>Password</h2></span>
                    <input className="inputbox" type="text" name="password" placeholder="Input your Password" required onChange={getData}></input>
                </div>

                <div className="input-box" align="center">
                    <span className="details">
                        <h2>Repeat Password</h2></span>
                    <input className="inputbox" type="text" name="password" placeholder="Repeat Password" required onChange={getData}></input>
                </div>

                <div className="input-box" align="center">
                    <span className="details">
                        <h2>Telephone</h2></span>
                    <input className="inputbox" type="text" name="tel" maxLength="10" placeholder="Input your Telephone" required onChange={getData}></input>
                </div>

                <div className="input-box" align="center">
                    <span className="details"><h2>DOB</h2></span>
                    <input className="inputbox" type="text" name = "DOB" placeholder="Input your DOB" required onChange={getData}></input>
                </div>

                <div className="input-box" align="center">
                    <span className="details"><h2>Email</h2></span>
                    <input className="inputbox" type="text" name = "email" placeholder="Input your Email" required onChange={getData}></input>
                </div>


                <div className="input-box" align="center">
                    <label className="container">Male
                        <input type="checkbox" checked="checked" onChange={()=>{}}></input>
                        <span className="checkmark"></span>
                    </label>
                    <label className="container">Female
                        <input type="checkbox" checked="checked" onChange={()=>{}}></input>
                        <span className="checkmark"></span>
                    </label>
                </div>

        
                <div className="button" align="center">
                    <input type="submit" value="Register" onClick={()=>setSubmit(true)}></input>
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
