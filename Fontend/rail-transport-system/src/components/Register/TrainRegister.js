import React, { useState, useReducer ,useEffect} from "react";
import ReactCardFlip from "react-card-flip";
import "./TrainRegister.css";
import axios from "axios";
import validation_register from "./validation_register";
import validation_signin from "./validation_signin";
import { Button, Form, Row, Col,Container } from "react-bootstrap";
import Alert from "react-bootstrap/Alert";
import emailjs from "emailjs-com";
import { useCookies } from "react-cookie";
import { Link } from "react-router-dom";
let submit = false;

function TrainRegister() {
  const [login_state, setLogin_state, removeLogin_state] = useCookies([
    "login_token",
  ]);
  const [username_cookie, setUsername_cookie, removeUsername_cookie] = useCookies([
    "username_tkn",
  ]);

  const [login_time, setLogin_time, removeLogin_time] = useCookies([
    "login_time_tkn",
  ]);


  useEffect(() => {
    if(login_state["login_token"]==1){
      setLogin_state(["login_token"], 2);
      window.location.reload()
    }
  }, [login_state["login_token"]]);
  const [verify, setVerify] = useState(false);
  const [isFlipped, setIsFlipped] = useState(false);
  const handleClick = () => {
    setIsFlipped(!isFlipped);
      setShow(false);
      setValues({
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
      setGender('');

    
  };
  const [cookies, setCookie, removeCookie] = useCookies(["token"]);

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
      enum: ["Pending", "Active"],
      default: "Pending",
    },
    confirmationCode: {
      type: String,
      unique: true,
    },

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
  };
  const handleRadio = (event) => {
    // if (event.target.checked) {
    //   setValues({
    //     ...values,
    //     sex: event.target.value,
    //   });
    // }
    setGender(event.target.value)
    setValues({
          ...values,
          sex: event.target.value,
        });
  };

  const handleSubmits = () => {
    setErrors(validation_register(values));
    submit = true;
  };

  const [gender, setGender] = React.useState();

  if (
    submit === true &&
    !errors.username &&
    !errors.fname &&
    !errors.lname &&
    !errors.password &&
    !errors.repeat_password &&
    !errors.tel &&
    !errors.DOB &&
    !errors.email &&
    !errors.sex
  ) {
    console.log("senttt");
    // axios.post('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDwZnikVYpl2Rh8xMOSSIqO0HLXKaoxoOI',{
    //             "email": values.email,
    //             "password": values.password,
    //             "returnSecureToken": true
    //             })
    //              .then(response => {console.log(response)})
    //              .catch(error => {console.log(error)})

    const characters =
      "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let token = "";
    for (let i = 0; i < 25; i++) {
      token += characters[Math.floor(Math.random() * characters.length)];
    }

    setValues({
      ...values,
      confirmationCode: token,
    });

    axios
      .post("https://us-central1-soft-dev-tutorial.cloudfunctions.net/users", {
        Firstname: values.fname,
        Lastname: values.lname,
        Username: values.username,
        Password: values.password,
        Tel: values.tel,
        DOB: values.DOB,
        Email: values.email,
        Sex: values.sex,
        confirmationCode: token,
        status: values.status,
      })
      .then((response) => {
        if (values.status != "Active") {
          console.log("Pending Account. Please Verify Your Email!");
        }
        console.log(response);
        setCookie("token", token);
      })
      .catch((error) => {
        console.log(error);
      });

    submit = false;
  }

  function setVerified(verify) {
    setVerify(verify);
  }


  // console.log(verify['verify'])
  // if (verify['verify']===true){
  //   console.log("change to Active")
  //   values.status ="Active"
  // }
  const sendEmail = (event) => {
    event.preventDefault();
    if (
      !errors.username &&
      !errors.fname &&
      !errors.lname &&
      !errors.password &&
      !errors.repeat_password &&
      !errors.tel &&
      !errors.DOB &&
      !errors.email &&
      !errors.sex
    ) {
      console.log(event.target);
      emailjs
        .sendForm(
          "gmail",
          "template_k74q3lt",
          event.target,
          "user_uf4z8ASWRLqiA35joJDJd"
        )
        .then(
          (result) => {
            console.log(result.text);
          },
          (error) => {
            console.log(error.text);
          }
        );
    }
  };

  // ********************** - LOG IN - ************************

  const [login_errors, setlogin_Errors] = useState({
    login_username: "",
    login_password: "",
    status: "",
  });
  let user_list = [];

  // const [user_data, setUser_data] = useState([{
  //     username: "",
  //     password: "",
  // }]);

  const fetchedResult = [];
  let InvUn = false;
  let InvPwd = false;
  async function makeGetRequest() {
    user_list = [];
    const res = await axios.get(
      "https://us-central1-soft-dev-tutorial.cloudfunctions.net/users"
    );
    for (let key in res.data) {
      fetchedResult.unshift({
        // ...res.data[key],
        username: res.data[key].Username,
        password: res.data[key].Password,
        status: res.data[key].status,
        id: key,
      });
      user_list.push(res.data[key].Username);
    }
    console.log(fetchedResult);
    let reversed = user_list.reverse();
    console.log(reversed);
    if (Object.values(user_list).includes(values.login_username)) {
      InvUn = false;
      let key = user_list.indexOf(values.login_username);
      console.log(fetchedResult[key].status);
      console.log(values.login_password);
      if (fetchedResult[key].password === values.login_password) {
        console.log("Password Match");
        InvPwd = false;
        if (fetchedResult[key].status === "Active") {
          if (!login_errors.login_username && !login_errors.login_password) {
            
            const d = new Date();

            console.log("login");
            setLogin_state(["login_token"], 1);
            setUsername_cookie(["username_tkn"],values.login_username)
            setLogin_time(["login_time_tkn"],d)
          }

          
        } else {
          if (values.login_username && values.login_password) {
            setlogin_Errors({
              login_password: "Please Verify your Account Before Login",
            });
          }
        }
      } else {
        InvPwd = true;
        if (values.login_username && values.login_password) {
          setlogin_Errors({
            login_password: "Invalid Username or Password",
          });
        }
      }
    } else {
      InvUn = true;
      if (values.login_username && values.login_password) {
        setlogin_Errors({
          login_password: "Invalid Username or Password",
        });
      }
    }
  }

  const handleLogin = (event) => {
    event.preventDefault();
    if (!InvUn && !InvPwd) {
      setlogin_Errors(validation_signin(values));
    }
    makeGetRequest();
  };

  const [show, setShow] = useState(false);


  return (
    <div className="Body_Regis" style={{ marginTop: "50px" }}>
      <Alert show={show} variant="danger">
        <Alert.Heading>Warning</Alert.Heading>
        <p>Are you sure to cancel the registration?</p>
        <hr />
        <div className="d-flex justify-content-end">
          <Button
            onClick={() => {
              setShow(false);
              setValues({
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
            }}
            variant="outline-danger"
          >
            Yes
          </Button>
          <Button onClick={() => setShow(false)} variant="outline-danger">
            No
          </Button>
        </div>
      </Alert>
      <ReactCardFlip isFlipped={isFlipped} flipDirection="vertical " >
      <form onSubmit={sendEmail}>
        <div  className="Card-Regis" align="center" >
          <Container>
            <Row>
            
              <Col>
              1
              </Col>
              
              <Col style={{borderRadius:"20px",width:"600px",height:"500px",margin:"10px",backgroundColor:"#a6e3e9",}}>
              2
              <Row style={{height:"65px",backgroundColor: "#F9F9F8"}}>
              <Col>
                <input
                          className="inputlogin"
                          id="fn"
                          type="text"
                          name="fname"
                          placeholder="First name"
                          required
                          value={values.fname}
                          onChange={handleChange}
                          style={{borderRadius: "10px",height:"40px",width:"200px"}}
                        />
                        {errors.fname && <p className="error">{errors.fname}</p>}
                </Col>

              <Col>
                <input
                          className="inputlogin"
                          id="ln"
                          type="text"
                          name="lname"
                          placeholder="Last name"
                          required
                          value={values.lname}
                          onChange={handleChange}
                          style={{borderRadius: "10px",height:"40px",width:"200px"}}
                        />
                        {errors.lname && <p className="error">{errors.lname}</p>}
              </Col>
              

              </Row>

              <Row>b
                
              </Row>

              <Row style={{height:"40px",backgroundColor: "#F9F9F8"}}>c
                <Col>
                <Form.Check
                        inline
                        label="Male"
                        type="radio"
                        name="sex"
                        id="Radios1"
                        value="Male"
                        checked={gender === 'Male'}
                        onChange={handleRadio}
                        
                      />
                     
                </Col>
                <Col>
                <Form.Check
                        inline
                        label="Female"
                        type="radio"
                        name="sex"
                        id="Radios2"
                        value="Female"
                        checked={gender === 'Female'}
                        onChange={handleRadio}
                        
                        
                      />
                </Col>
                {errors.sex && <p className="error">{errors.sex}</p>}
              </Row>

            

              <Row style={{height:"65px",backgroundColor: "#F9F9F8"}}>e
                <Col>
                <input
                        className="inputlogin"
                        type="text"
                        name="username"
                        placeholder="User name"
                        required
                        value={values.username}
                        onChange={handleChange}
                        style={{borderRadius: "10px",height:"40px",width:"200px"}}
                      />
                      {errors.username && (
                        <p className="error">{errors.username}</p>
                      )}
                </Col>
                <Col>
                  <input
                          className="inputlogin"
                          type="email"
                          name="email"
                          placeholder="Email"
                          required
                          value={values.email}
                          onChange={handleChange}
                          style={{borderRadius: "10px",height:"40px",width:"200px"}}
                        />
                        {errors.email && <p className="error">{errors.email}</p>}
                </Col>


              </Row>
              <Row>f

              </Row>
              
              <Row style={{height:"65px",backgroundColor: "#F9F9F8"}}>g
                <Col>
                <input
                            className="inputlogin"
                            type="password"
                            name="password"
                            placeholder="Password"
                            required
                            value={values.password}
                            onChange={handleChange}
                            style={{borderRadius: "10px",height:"40px",width:"200px"}}
                          />
                          {errors.password && (
                            <p className="error">{errors.password}</p>
                          )}
                </Col>
                  <Col>
                    <input
                            className="inputlogin"
                            type="password"
                            name="repeat_password"
                            placeholder="RE- Password"
                            required
                            value={values.repeat_password}
                            onChange={handleChange}
                            style={{borderRadius: "10px",height:"40px",width:"200px"}}
                          />
                          {errors.repeat_password && (
                            <p className="error">{errors.repeat_password}</p>
                          )}
                  </Col>
              </Row>

              
              <Row>h
              </Row>
              
              <Row style={{height:"65px",backgroundColor: "#F9F9F8"}}>i
                  
                  <Col>
                    <input
                          className="inputlogin"
                          type="Telephone"
                          name="tel"
                          placeholder="Tel"
                          maxlength="10"
                          required
                          value={values.tel}
                          onChange={handleChange}
                          style={{borderRadius: "10px",height:"40px",width:"200px"}}
                        />
                        {errors.tel && <p className="error">{errors.tel}</p>}
                  </Col>

                  <Col>
                    <input
                          className="inputlogin"
                          type="date"
                          data-date-inline-picker="true"
                          name="DOB"
                          min="1900-01-01"
                          max="2009-12-31"
                          placeholder="dd-mm-yyyy"
                          required
                          value={values.DOB}
                          onChange={handleChange}
                          style={{borderRadius: "10px",height:"40px",width:"200px"}}
                        />
                        {errors.DOB && <p className="error">{errors.DOB}</p>}
                  </Col>
              </Row>

              <Row>j
                <input
                          className="inputlogin"
                          name="confirmcode"
                          defaultValue={values.confirmationCode}
                          type="hidden"
                          style={{  borderRadius: "10px" }}
                        />
              </Row>
              <br />               
              <Row style={{height:"65px",backgroundColor: "#F9F9F8"}}>k
                      <Col>
                        <Button
                          className="buttonlogin"
                          type="submit"
                          value="Submit"
                          onClick={handleSubmits}
                          style={{  width: "200px",borderRadius: "10px" }}
                        > Sign Up
                        </Button>
                      </Col>

                      <Col>
                        <Button
                          className="buttonlogin"
                          variant="outline-danger"
                          onClick={() => setShow(true)}
                          style={{  width: "200px",borderRadius: "10px" }}
                        >
                          Cancel
                        </Button>

                      </Col>
                      
              </Row>
              <br /> 
              <Row style={{ textAlign:"center" }}>       
                <Col>
                <Button
                        onClick={handleClick}
                        variant="outline-info"
                        size="lg"
                        style={{ width: "auto", borderRadius: "12px",textAlign:"center" }}
                        type = "reset"  
                      >
                        Login is here
                      </Button>       
                </Col>
                            
              </Row>
            

              </Col>
            </Row>
          </Container>
        </div>
        </form>
       

        <div style={{ textAlign: "center" }}>
          <h1 style={{color: "#F9F9F8"}}>Rail Transport System / Login</h1>
          <div className="Card-Regis" src="images/img-5.jpg" marginTop={20}>
            <Row style={{ height: "100vh" }}>
              <Col>
                <h1 style={{ marginTop: "50%" }}>Rail Transport System</h1>
                <img
                  className="sealImage"
                  alt="Image of Seal"
                  src="images/LOGO.png"
                  style={{ width: "70" }}
                />
              </Col>
              <Col>
                <div
                  className="login"
                  style={{ marginTop: "50%", textAlign: "center" }}
                >
                  <form>
                    <h2 htmlFor="chk" aria-hidden="true">
                      Login
                    </h2>
                    <br />
                    <input
                      className="inputlogin"
                      type="email"
                      name="login_username"
                      placeholder="User Name"
                      required
                      value={values.login_username}
                      onChange={handleChange}
                      
                      style={{ margin: "10px", borderRadius: "10px", width:"500px" }}
                    />
                    {login_errors.login_username && (
                      <p className="error">{login_errors.login_username}</p>
                    )}
                    <br />

                    <input
                      className="inputlogin"
                      type="password"
                      name="login_password"
                      placeholder="Password"
                      required
                      value={values.login_password}
                      onChange={handleChange}
                      style={{ margin: "10px", borderRadius: "10px", width:"500px" }}
                    />
                    {login_errors.login_password && (
                      <p className="error">{login_errors.login_password}</p>
                    )}
                    
                    <Button
                      onClick={handleLogin}
                      size="lg"
                      style={{ margin: "10px", borderRadius: "10px",width:"200px",height:"50px" }}
                    >
                      Login
                    </Button>
                    <Button
                    onClick={handleClick}
                    variant="outline-success"
                    size="lg"
                    style={{ margin: "10px", borderRadius: "10px",width:"200px",height:"50px" }}
                  >
                    Back to Register
                  </Button>
                  </form>
                </div>
              </Col>
            </Row>
          </div>
          <br></br>
          
        </div>
      </ReactCardFlip>
    </div>
  );
}

export default TrainRegister;
