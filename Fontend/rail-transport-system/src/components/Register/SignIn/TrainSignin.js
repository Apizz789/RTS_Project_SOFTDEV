import React, { useState } from 'react'
import axios from 'axios'

// import firebase from '../../../firebase'
import '../SignIn/TrainSignin.css';



function TrainSignin() {
    const [values, setValues] = useState({
        username: "",
        pwd: "",
    });

    const handleChange = (event) => {
        setValues({
            ...values,
            [event.target.name]: event.target.value,
        });
    }

    const [user_data, setUser_data] = useState({
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
    

    async function makeGetRequest() {

        const res = await axios.get('https://us-central1-soft-dev-tutorial.cloudfunctions.net/users');
        const data = res.data;
        console.log(data);

        
      }

    const handleLogin = (event) => {
        event.preventDefault()
        makeGetRequest();




        
    }

    return (
        <form>
            <div className="login_class" >
                <div className="Title"><h1 align="center">LOGIN</h1></div>

                <div className="input-box" align="center">
                <label htmlFor="username">Username:</label>
                <input 
                    type="text" 
                    id="username" 
                    name="username" 
                    value={values.username} 
                    onChange={handleChange} 
                />
                <label htmlFor="pwd">Password:</label>
                <input 
                    type="password" 
                    id="pwd" 
                    name="pwd"
                    value={values.pwd} 
                    onChange={handleChange} 
                />
                </div>
                
                <div className="button" align="center">
                <input 
                    type="submit" 
                    value="LOGIN"
                    onClick={handleLogin}
                />
                <input type="reset" value="REGISTER" />
                </div>

            </div>
        </form>
    )
}

export default TrainSignin;