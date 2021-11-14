import React, {useState, useReducer } from 'react'
import ReactCardFlip from 'react-card-flip';
import './TrainRegister.css'
import axios from 'axios'
import validation_register from "./validation_register"
import validation_signin from "./validation_signin"
import {Button,Form} from 'react-bootstrap';
import Alert from 'react-bootstrap/Alert'
import emailjs from 'emailjs-com'
let submit = false
let login = false


function TrainRegister() {

    const [isFlipped, setIsFlipped] = useState(false);
    const handleClick = () => {setIsFlipped(!isFlipped);};

    const [member_satistic_val,setMember_satistic_val] = useState({
        username: "",
        Login_Date: "",
        Logout_Date: "",
    })

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
        status: {
            type: String, 
            enum: ['Pending', 'Active'],
            default: 'Pending'
          },
        confirmationCode: { 
          type: String, 
          unique: true },

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

    const handleSubmits = () => {
        setErrors(validation_register(values));
        submit = true
    }

    if (submit === true &&!errors.username&&!errors.fname&&!errors.lname&&!errors.password&&!errors.repeat_password&&!errors.tel&&!errors.DOB&&!errors.email&&!errors.sex) { 
        console.log("senttt")
        // axios.post('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDwZnikVYpl2Rh8xMOSSIqO0HLXKaoxoOI',{
        //             "email": values.email,
        //             "password": values.password,
        //             "returnSecureToken": true
        //             })
        //              .then(response => {console.log(response)})
        //              .catch(error => {console.log(error)})

        const characters = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
        let token = '';
        for (let i = 0; i < 25; i++) {
            token += characters[Math.floor(Math.random() * characters.length )];
        }

        setValues({
            ...values,
            "confirmationCode" : token,
        });

        axios.post('https://us-central1-soft-dev-tutorial.cloudfunctions.net/users', {
            "Firstname": values.fname,
            "Lastname": values.lname,
            "Username": values.username,
            "Password": values.password,
            "Tel": values.tel,
            "DOB": values.DOB,
            "Email": values.email,
            "Sex": values.sex,
            "confirmationCode" : token,
            "status": values.status

        })
            .then(response => {if (values.status != "Active"){
                console.log("Pending Account. Please Verify Your Email!")
              }console.log(response)})
            .catch(error => { console.log(error) })

        submit = false

    }
    const sendEmail = (event) =>{
        event.preventDefault();
        if(!errors.username&&!errors.fname&&!errors.lname&&!errors.password&&!errors.repeat_password&&!errors.tel&&!errors.DOB&&!errors.email&&!errors.sex){
            console.log(event.target)
            emailjs.sendForm('gmail', 'template_k74q3lt', event.target, 'user_uf4z8ASWRLqiA35joJDJd')
            .then((result) => {
              console.log(result.text);
            }, (error) => {
              console.log(error.text);
            });
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
                    const d = new Date();
                    setMember_satistic_val({
                        "username": values.login_username,
                        "Login_Date": d
                    })
                    login = true
                }

                if (login === true){
                    axios.post('https://us-central1-soft-dev-tutorial.cloudfunctions.net/members_per_day', {
                                        "username": member_satistic_val.username,
                                        "Login_Date":member_satistic_val.Login_Date
                                        })
                                        .then(response => {console.log(response)})
                                        .catch(error => { console.log(error) })
                                console.log("login")
                    login = false
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

    
    const [show, setShow] = useState(false);
    

    return (
        <div className="Body_Regis" style={{marginTop :"50px"}}>
        
        
        <ReactCardFlip isFlipped={isFlipped} flipDirection="vertical "> 

            <div style={{textAlign:"center"}}>
            <h1>Rail Transport System / Login</h1>
            <div className="Card-Regis" src="images/New_login/552721.jpg">
            <Alert show={show} variant="danger">
              <Alert.Heading>Warning</Alert.Heading>
              <p>
                Are you sure to cancel the registration?
              </p>
              <hr />
              <div className="d-flex justify-content-end">
                <Button onClick={() => {setShow(false); setValues({
                                                                    fname: "",
                                                                    lname: "",
                                                                    username: "",
                                                                    password: "",
                                                                    repeat_password: "",
                                                                    tel: "",
                                                                    DOB: "",
                                                                    email: "",
                                                                    sex: "", });}} variant="outline-danger">
                  Yes
                </Button>
                <Button onClick={() => setShow(false)} variant="outline-danger">
                  No
                </Button>
              </div>
            </Alert>
            <div className="signup">
                <form onSubmit={sendEmail}>
                <br></br>
                <br></br>
                <label htmlFor="chk" aria-hidden="true">Sign up</label>
                <div className="Name-User" id="left">
                <br></br>
                <br></br>
                    <center><img className="sealImage" alt="Image of Seal" src="images/LOGO.png" width={70} marginTop ={20}/></center>
                    <input
                        className="inputlogin"  
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
                        className="inputlogin"  
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
                        type="radio" 
                        name="sex" 
                        id="Radios1" 
                        value="Male" 
                        onChange={handleRadio}
                        
                    />
                    <Form.Check
                        inline
                        label="Female"
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
                        className="inputlogin"  
                        type="text" 
                        name="username" 
                        placeholder="User name" 
                        required 
                        value={values.username}
                        onChange={handleChange}
                    />
                    {errors.username && <p className="error">{errors.username}</p>}
    
                    <input
                        className="inputlogin"  
                        type="email" 
                        name="email" 
                        placeholder="Email" 
                        required
                        value={values.email}
                        onChange={handleChange}
                    />
                    {errors.email && <p className="error">{errors.email}</p>}
                
                    <input
                        className="inputlogin"  
                        type="password" 
                        name="password" 
                        placeholder="Password" 
                        required
                        value={values.password}
                        onChange={handleChange}
                    />
                    {errors.password && <p className="error">{errors.password}</p>}

                    <input
                        className="inputlogin"  
                        type="password" 
                        name="repeat_password" 
                        placeholder="RE- Password" 
                        required
                        value={values.repeat_password}
                        onChange={handleChange}
                    />
                    {errors.repeat_password && <p className="error">{errors.repeat_password}</p>}

                    <input
                        className="inputlogin"  
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
                        className="inputlogin" 
                        type="date" 
                        data-date-inline-picker="true" 
                        name="DOB" min="1900-01-01" 
                        max="2009-12-31" 
                        placeholder="dd-mm-yyyy" 
                        required 
                        value={values.DOB} 
                        onChange={handleChange} />
                    {errors.DOB && <p className="error">{errors.DOB}</p>}

                    <input className="inputlogin"
                            name ="confirmcode"
                            defaultValue={values.confirmationCode}
                            type = "hidden"/>

                </div>


                <div id="right">
                <Button className="buttonlogin" type="submit" value="Submit" onClick={handleSubmits}> Sign Up </Button>
                <Button className="buttonlogin" variant="outline-danger"onClick={() => setShow(true)} >Cancel</Button>
                </div>
                </form>
                
            </div>
            </div>
            <br></br>
            <Button
                onClick={handleClick}
                variant="outline-info"
                size="lg"
                style={{ width: "auto", borderRadius: "12px"}} 
              >
            Click to flip
            </Button>
            </div>
            
            <div style={{textAlign:"center"}}>
            <h1>Rail Transport System / Register</h1>
            <div className="Card-Regis" src="images/img-5.jpg" marginTop ={20}>
                <div className="login">
                    <form>
                    <label htmlFor="chk" aria-hidden="true">Login</label>
                    <input

                        className="inputlogin"  
                        type="email" 
                        name="login_username" 
                        placeholder="User Name" 
                        required
                        value={values.login_username}
                        onChange={handleChange} 
                    />
                    {login_errors.login_username && <p className="error">{login_errors.login_username}</p>}

                    <input
                        className="inputlogin"  
                        type="password" 
                        name="login_password" 
                        placeholder="Password" 
                        required
                        value={values.login_password}
                        onChange={handleChange} 
                    />
                    {login_errors.login_password && <p className="error">{login_errors.login_password}</p>}

                    <button onClick={handleLogin} >Login</button>
                    
                    </form>
                </div>
            </div>
            <br></br>
            <Button
                onClick={handleClick}
                variant="outline-success"
                size="lg"
                style={{ width: "auto", borderRadius: "12px"}} 
              >
            
            Click to flip

            </Button>
            </div>
        
        </ReactCardFlip>
        
            
        
        
        
        </div>
        
     



                
               
            



                
    )
}

export default TrainRegister
