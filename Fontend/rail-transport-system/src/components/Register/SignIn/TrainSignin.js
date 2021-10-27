import React, { useState } from 'react';
<<<<<<< Updated upstream
import axios from 'axios';
=======
import axios from 'axios'
import validation_signin from "./validation_signin"
>>>>>>> Stashed changes

// import firebase from '../../../firebase';
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

    let user_list = []

    // const [user_data, setUser_data] = useState([{
    //     username: "",
    //     password: "",
    // }]);
    

    const [errors, setErrors] = useState({
        username: "",
        password: "",
    });
    
    const fetchedResult= [];
    let InvUn = false
    let InvPwd = false

    async function makeGetRequest() {

        user_list = []
        const res = await axios.get('https://us-central1-soft-dev-tutorial.cloudfunctions.net/users');
        for (let key in res.data){
            fetchedResult.unshift(
                {
                    // ...res.data[key],
                    username : res.data[key].Username,
                    password : res.data[key].Password,
                    id:key
                }
            )
            user_list.push(res.data[key].Username)
        }
        console.log(fetchedResult)
        let reversed = user_list.reverse();
        console.log(reversed)
        if (Object.values(user_list).includes(values.username))
        {
            InvUn = false
            let key = user_list.indexOf(values.username)
            console.log(fetchedResult[key].password)
            console.log(values.pwd)
            if(fetchedResult[key].password === values.pwd)
            {
                InvPwd = false
                if (Object.keys(errors).length === 0)
                {
                console.log("login")
                }
            }
            else
            {
            InvPwd = true
            if (values.username && values.pwd)
            {
                setErrors({
                    password : "Invalid Username or Password",
                })
            }
            }
            
        }
        else
        {
            InvUn = true
            if (values.username && values.pwd)
            {
                setErrors({
                    password : "Invalid Username or Password",
                })
            }
            
        }
      }

    const handleLogin = (event) => {
        event.preventDefault()
        if(!InvUn && !InvPwd)
        {
            setErrors(validation_signin(values));
        }
            makeGetRequest();
        
    }

    return (
        <form className="Signin_body">
            <div className="login_class" >
                <div className="Title"><h1 align="center">LOGIN</h1></div>

                <div className="input-box" align="center">
                <label htmlFor="username">Username:</label>
                <input 
                    type="text" 
                    id="username" 
                    name="username"
                    maxLength="20" 
                    value={values.username} 
                    onChange={handleChange} 
                />
                {errors.username && <p className="error">{errors.username}</p>}
                <label htmlFor="pwd">Password:</label>
                <input 
                    type="password" 
                    id="pwd" 
                    name="pwd"
                    maxLength="32"
                    value={values.pwd} 
                    onChange={handleChange} 
                />
                {errors.password && <p className="error">{errors.password}</p>}
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