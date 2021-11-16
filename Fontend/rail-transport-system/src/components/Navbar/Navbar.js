import React, { useState, useEffect, useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import "../Navbar/Navbar.css";
import { useCookies } from "react-cookie";
import {
  InputGroup,
  FormControl,
  Col,
  Row,
  Button,
  Container,
  Form,
  Table,
  Modal,
} from "react-bootstrap";
import axios from "axios";
import { UserContextS } from "../Calculate/UseContextSource";
import { UserContextD } from "../Calculate/UseContextDest";
import { UserContextSTic } from "../Buyticket/UseContextSourceTic";
import { UserContextDTic } from "../Buyticket/UseContextDestTic";
import { UserContextDS } from "../Buyticket/UseContextDestTS";
import { UserContextSS } from "../Buyticket/UseContextSourceTS";
import { UserContextTT } from "../Buyticket/UseContextTime";



function Navbar() {

  const [logout, setLogout] = useState(false);

  const [login_time, setLogin_time, removeLogin_time] = useCookies([
    "login_time_tkn",
  ]);

  let history = useHistory();
  const [login_state, setLogin_state, removeLogin_state] = useCookies([
    "login_token",
  ]);
  const [username_cookie, setUsername_cookie, removeUsername_cookie] =
    useCookies(["username_tkn"]);
  const [cookies, setCookie, removeCookie] = useCookies(["token"]);

  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  function refreshPage() {
    window.scrollTo(0, 0);
  }

  const { dest_station, setDest_station } = useContext(UserContextDS);
  const { source_station, setSource_station } = useContext(UserContextSS);
  const {time_travel, setTime_travel} = useContext(UserContextTT);

  const { clickS, setclickS } = useContext(UserContextS);
  const { clickD, setclickD } = useContext(UserContextD);

  const handleSetdefault = () => {
    setclickS("Please Select Source");
    setclickD("Please Select Dest");
  };

  const { clickSTic, setclickSTic } = useContext(UserContextSTic);
  const { clickDTic, setclickDTic } = useContext(UserContextDTic);

  const handleSetdefaultTicket = () => {
    setclickSTic("สถานีต้นทาง");
    setclickDTic("สถานีปลายทาง");
  };

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };
  const d = new Date();
  
  const handleLogout = () => {
    setLogout(true);
    setShow1(false)
  };

  const [show1, setShow1] = useState(false);
  const handleClose1 = () => setShow1(false);
  const handleShow1 = () => setShow1(true);

  if (logout === true) {
    console.log(source_station);
    console.log(dest_station);
    console.log(time_travel);
    axios
      .post(
        "https://us-central1-soft-dev-tutorial.cloudfunctions.net/members_per_day",
        {
          username: username_cookie["username_tkn"],
          Login_Date: login_time["login_time_tkn"],
          Logout_Date: d,
          Source_Station: source_station,
          Dest_Station: dest_station,
          Travel_Time: time_travel,
        }
      )
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
    console.log("logout");

    removeLogin_state(["login_token"]);
    removeUsername_cookie(["username_tkn"]);
    removeCookie(["username_tkn"]);
    removeLogin_time(["login_time_tkn"]);

    setLogout(false);
  }

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener("resize", showButton);

  return (
    <div
      style={{
        display: "block",
        position: "fixed",
        width: "100vw",
        zIndex: "10",
      }}
    >
      <nav className="navbar">
        <div className="navbar-container">
          <Link
            to="/home"
            className="navbar-logo"
            onClick={closeMobileMenu}
            onClick={refreshPage}
          >
            <i className="fas fa-subway"></i>
            RTS
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="navbar-item">
              <Link
                to="/home"
                className="nav-links"
                onClick={closeMobileMenu}
                onClick={refreshPage}
              >
                Home
              </Link>
            </li>
            <li className="navbar-item">
              <Link
                to="/services"
                className="nav-links"
                onClick={closeMobileMenu}
                onClick={refreshPage}
              >
                Services
              </Link>
            </li>
            {login_state["login_token"] ? (
              <li className="navbar-item">
                <Link
                  to="/ticket"
                  className="nav-links"
                  onClick={closeMobileMenu}
                  onClick={refreshPage}
                  onClick={handleSetdefaultTicket}
                >
                  Ticket
                </Link>
              </li>
            ) : (
              <li className="navbar-item">
                <Link
                  to="/calculate"
                  className="nav-links"
                  onClick={closeMobileMenu}
                  onClick={refreshPage}
                  onClick={handleSetdefault}
                >
                  Calculate
                </Link>
              </li>
            )}

            <li className="navbar-item">
              <Link
                to="/contact"
                className="nav-links"
                onClick={closeMobileMenu}
                onClick={refreshPage}
                onClick={handleSetdefault}
              >
                Contact
              </Link>
            </li>
            {login_state["login_token"] ? (
              <li className="navbar-item">
                <Link
                  to="/history"
                  className="nav-links"
                  onClick={closeMobileMenu}
                  onClick={refreshPage}
                >
                  History
                </Link>
              </li>
            ) : (
              <p className="uname"></p>
            )}
          </ul>

          {login_state["login_token"] ? (
            <Link to="/home" className="btn-mobile" onClick={refreshPage}>
              <Button
                variant="outline-danger"
                style={{ width: "100px", margin: "5px" }}
                onClick={handleShow1}
              >
                LOGOUT
              </Button>
            </Link>
          ) : (
            <Link to="/register" className="btn-mobile" onClick={refreshPage}>
              <Button
                variant="outline-info"
                style={{ width: "100px", margin: "5px" }}
              >
                LOGIN
              </Button>
            </Link>
          )}

          <Modal show={show1} onHide={handleClose1} centered>
            <Modal.Header closeButton>
              <i class="fas fa-subway"></i>
              <p>. </p>
              <b>LOGOUT</b>
            </Modal.Header>
            <Modal.Body>
              <center>
                <b>
                  <h1>Confirm LogOut</h1>
                </b>
              </center>
              <hr></hr>
              <center>
                <img
                  src="images/RTS-Logo.png"
                  width="100"
                  height="auto"
                  style={{ textAlign: "center", margin: "20px" }}
                ></img>
              </center>
              <center>
                <h3>Are you sure to LogOut?</h3>
              </center>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleLogout}>
                CONFIRM
              </Button>
              <Button variant="secondary" onClick={handleClose1}>
                CLOSE
              </Button>
            </Modal.Footer>
          </Modal>

          {login_state["login_token"] ? (
            <p className="uname">Hi..{username_cookie["username_tkn"]}</p>
          ) : (
            <p className="uname"></p>
          )}
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
