import React, {useState} from 'react'
import axios from 'axios'
import PropTypes from 'prop-types'
import '../SignUp/TrainSignup.css';
function TrainSignup() {
    const [postID, setPostId] = useState(null);
    const [Firstname,setFirstname] =useState(null);
    const [Lastname,setLastname] =useState(null);
    const [Username,setUsername] =useState(null);
    const [Password,setPassword] =useState(null);
    const [Tel,setTel] =useState(null);
    const [DOB,setDOB] =useState(null);
    const [submit,setSubmit] =useState(false);
    const data = { Firstname, Lastname, Username, Password, Tel, DOB};
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
    }
    
    return (
        <body className="all">
            <div class="register_class">
                <div class="Title"><h1 align="center">REGISTRATION</h1></div>

                <div class="input-box" align="center">
                    <span class="details">
                        <h2>First Name</h2></span>
                    <input type="text" name="fname" placeholder="Input your First Name" required onChange={getData}></input>
                </div>

                <div class="input-box" align="center">
                    <span class="details">
                        <h2>Last Name</h2></span>
                    <input type="text" name="lname" placeholder="Input your Last Name" required onChange={getData}></input>
                </div>

                <div class="input-box" align="center">
                    <span class="details">
                        <h2>User</h2></span>
                    <input type="text" name="username" placeholder="Input your User" required onChange={getData}></input>
                </div>

                <div class="input-box" align="center">
                    <span class="details">
                        <h2>Password</h2></span>
                    <input type="text" name="password" placeholder="Input your Password" required onChange={getData}></input>
                </div>

                <div class="input-box" align="center">
                    <span class="details">
                        <h2>Repeat Password</h2></span>
                    <input type="text" name="password" placeholder="Repeat Password" required onChange={getData}></input>
                </div>

                <div class="input-box" align="center">
                    <span class="details">
                        <h2>Telephone</h2></span>
                    <input class="inputbox" type="text" name="tel" maxlength="10" placeholder="Input your Telephone" required onChange={getData}></input>
                </div>

                <div class="input-box" align="center">
                    <span class="details"><h2>DOB</h2></span>
                    <input type="text" name = "DOB" placeholder="Input your DOB" required onChange={getData}></input>
                </div>

                <div class="input-box" align="center">
                    <label class="container">Male
                        <input type="checkbox" checked="checked"></input>
                        <span class="checkmark"></span>
                    </label>
                    <label class="container">Female
                        <input type="checkbox" checked="checked"></input>
                        <span class="checkmark"></span>
                    </label>
                </div>

        
                <div class="button" align="center">
                    {
                        submit?  
                        // console.log(data)
                        
                        axios.post('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDwZnikVYpl2Rh8xMOSSIqO0HLXKaoxoOI',{
                            "email": "asdfgyhj@gmail.com",
                            "password": "1234567",
                            "returnSecureToken": true
                          })
                         .then(response => {console.log(response)})
                         .catch(error => {console.log(error)})
                        :null
                    }
                    <input type="submit" value="Register" onClick={()=>setSubmit(true)}></input>
                    <input type="submit" value="Cancel"></input>
                </div>

                <h2>Starting Date</h2>
                <section>
                    <fieldset>
                        <legend>TrainSignup.js</legend>
                        <div class="field moveindate">
                            <label>Date</label>
                            <input class="datepicker" name="date" type="text" autofocuss></input>
                        </div>
                    </fieldset>
                </section>


            </div>
        </body>

    )

}

export default TrainSignup;
