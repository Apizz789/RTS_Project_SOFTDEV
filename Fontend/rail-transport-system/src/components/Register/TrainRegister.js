import React, {useState, useReducer } from 'react'
import './TrainRegister.css'
import axios from 'axios'
import validation_register from "./validation_register"
import validation_signin from "./validation_signin"
import {Button,Form} from 'react-bootstrap';
import Alert from 'react-bootstrap/Alert'



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
        login_username: "",
        login_password: "",
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


    // const initialState = {
    //     change: false,
    //     click: true,
    // };

    const reducer = (state, action) => ({ ...state, ...action });
    // const [state, setState] = useReducer(reducer, initialState);

    const handleChange = (event) => {
        setValues({
            ...values,
            [event.target.name]: event.target.value,
        });
    }
    const handleRadio = (event) => {
        if (event.target.checked){
            setValues({
                ...values,
                "sex" : event.target.value,
            });
        }
    }
    const handleSubmit = (event) => {
        event.preventDefault()
        setErrors(validation_register(values));
        console.log(errors)
        if (!errors.username&&!errors.fname&&!errors.lname&&!errors.password&&!errors.repeat_password&&!errors.tel&&!errors.DOB&&!errors.email&&!errors.sex) {
            
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

    // ********************** - LOG IN - ************************

    const [login_errors, setlogin_Errors] = useState({
        login_username: "",
        login_password: "",
    });
    let user_list = []

    // const [user_data, setUser_data] = useState([{
    //     username: "",
    //     password: "",
    // }]);


    const fetchedResult = [];
    let InvUn = false
    let InvPwd = false

    async function makeGetRequest() {

        user_list = []
        const res = await axios.get('https://us-central1-soft-dev-tutorial.cloudfunctions.net/users');
        for (let key in res.data) {
            fetchedResult.unshift(
                {
                    // ...res.data[key],
                    username: res.data[key].Username,
                    password: res.data[key].Password,
                    id: key
                }
            )
            user_list.push(res.data[key].Username)
        }
        console.log(fetchedResult)
        let reversed = user_list.reverse();
        console.log(reversed)
        if (Object.values(user_list).includes(values.login_username)) {
            InvUn = false
            let key = user_list.indexOf(values.login_username)
            console.log(fetchedResult[key].password)
            console.log(values.login_password)
            if (fetchedResult[key].password === values.login_password) {
                console.log("Password Match")
                InvPwd = false
                if (!login_errors.login_username && !login_errors.login_password) {
                    console.log("login")
                }
            }
            else {
                InvPwd = true
                if (values.login_username && values.login_password) {
                    setlogin_Errors({
                        login_password: "Invalid Username or Password",
                    })
                }
            }

        }
        else {
            InvUn = true
            if (values.login_username && values.login_password) {
                setlogin_Errors({
                    login_password: "Invalid Username or Password",
                })
            }

        }
    }

    const handleLogin = (event) => {
        event.preventDefault()
        if (!InvUn && !InvPwd) {
            setlogin_Errors(validation_signin(values)

            
            );
        }
        makeGetRequest();

    }

    function AlertDismissible() {
        const [show, setShow] = useState(true);
      
        return (
          <>
            <Alert show={show} variant="success">
              <Alert.Heading>How's it going?!</Alert.Heading>
              <p>
                Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget
                lacinia odio sem nec elit. Cras mattis consectetur purus sit amet
                fermentum.
              </p>
              <hr />
              <div className="d-flex justify-content-end">
                <Button onClick={() => setShow(false)} variant="outline-success">
                  Close me y'all!
                </Button>
              </div>
            </Alert>
      
            {!show && <Button onClick={() => setShow(true)}>Show Alert</Button>}
          </>
        );
      }


    return (
        <div className="Body_Regis" style={{marginTop :"50px"}}>
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
                    <input 
                        id="fn" 
                        type="text" 
                        name="fname" 
                        placeholder="First name" 
                        required
                        value={values.fname}
                        onChange={handleChange} 
                    />
                    {errors.fname && <p className="error">{errors.fname}</p>}
                    <input 
                        id="ln" 
                        type="text" 
                        name="lname" 
                        placeholder="Last name" 
                        required
                        value={values.lname}
                        onChange={handleChange} 
                    />
                    {errors.lname && <p className="error">{errors.lname}</p>}
                    {/* <input type="checkbox" check = {true} />
                    <input type="checkbox" /> */}
                    <Form.Check
                        inline
                        label="Male"
                        className="form-check-input" 
                        type="radio" 
                        name="sex" 
                        id="Radios1" 
                        value="Male" 
                        onChange={handleRadio}
                        
                    />
                    <Form.Check
                        inline
                        label="Female"
                        className="form-check-input" 
                        type="radio" 
                        name="sex" 
                        id="Radios2" 
                        value="Female"
                        onChange={handleRadio}
                    />
                    {errors.sex && <p className="error">{errors.sex}</p>}
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
                    {errors.username && <p className="error">{errors.username}</p>}

                    <input 
                        type="email" 
                        name="email" 
                        placeholder="Email" 
                        required
                        value={values.email}
                        onChange={handleChange}
                    />
                    {errors.email && <p className="error">{errors.email}</p>}

                    <input 
                        type="password" 
                        name="password" 
                        placeholder="Password" 
                        required
                        value={values.password}
                        onChange={handleChange}
                    />
                    {errors.password && <p className="error">{errors.password}</p>}

                    <input 
                        type="re-password" 
                        name="repeat_password" 
                        placeholder="RE- Password" 
                        required
                        value={values.repeat_password}
                        onChange={handleChange}
                    />
                    {errors.repeat_password && <p className="error">{errors.repeat_password}</p>}

                    <input 
                        type="Telephone" 
                        name="tel" 
                        placeholder="Tel" 
                        maxlength="10"
                        required
                        value={values.tel}
                        onChange={handleChange}
                    />
                    {errors.tel && <p className="error">{errors.tel}</p>}

                    <input 
                        className="inputbox" 
                        type="date" 
                        data-date-inline-picker="true" 
                        name="DOB" min="1900-01-01" 
                        max="2009-12-31" 
                        placeholder="dd-mm-yyyy" 
                        required 
                        value={values.DOB} 
                        onChange={handleChange} />
                    {errors.DOB && <p className="error">{errors.DOB}</p>}
                </div>
                <div id="right">
                    <Button variant="outline-danger">Cancel</Button>{' '}
                    <Button variant="outline-primary" onClick={handleSubmit}>Sign Up</Button>{' '}
                </div>
                </form>
            </div>
            <div className="login">
                <form>
                <label htmlFor="chk" aria-hidden="true">Login</label>
                <input 
                    type="email" 
                    name="login_username" 
                    placeholder="User Name" 
                    required
                    value={values.login_username}
                    onChange={handleChange} 
                />
                {login_errors.login_username && <p className="error">{login_errors.login_username}</p>}

                <input 
                    type="password" 
                    name="login_password" 
                    placeholder="Password" 
                    required
                    value={values.login_password}
                    onChange={handleChange} 
                />
                {login_errors.login_password && <p className="error">{login_errors.login_password}</p>}

                <button onClick={handleLogin} >Login</button>
                Copy
                </form></div>
            </div>
        </div>
    )
}

export default TrainRegister
