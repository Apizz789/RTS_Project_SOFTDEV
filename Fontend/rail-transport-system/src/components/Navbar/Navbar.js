import React,{useState,useEffect} from 'react';
import {Link,useHistory} from 'react-router-dom';
import '../Navbar/Navbar.css';
import {useCookies} from 'react-cookie'
import {InputGroup,FormControl,Col,Row,Button,Container,Form,Table} from 'react-bootstrap'
import axios from "axios";

console.log("Kuy Pleum")

function Navbar() {

  const [logout,setLogout] = useState(false);

  const [login_time, setLogin_time, removeLogin_time] = useCookies([
    "login_time_tkn",
  ]);

  const [member_satistic_val, setMember_satistic_val] = useState({
    username: "",
    Login_Date: "",
    Logout_Date: "",
  });

    let history = useHistory()
    const [login_state, setLogin_state, removeLogin_state] = useCookies(['login_token'])
    const [username_cookie, setUsername_cookie, removeUsername_cookie] = useCookies([
      'username_tkn',
    ]);
    const [cookies, setCookie, removeCookie] = useCookies(['token']);

    const [click,setClick]= useState(false);
    const [button,setButton]=useState(true);

    const handleClick =()=>setClick(!click);
    const closeMobileMenu = ()=>setClick(false);

    function refreshPage(){
      window.scrollTo(0,0)
    }

    const showButton=()=>{
        if(window.innerWidth<=960){
            setButton(false);
        }else{
            setButton(true);
        }
    };
    const d = new Date();
    const handleLogout = () => {
      setMember_satistic_val({
        ...member_satistic_val,
        Logout_Date: d
      });
      setLogout(true)
  }
    if (logout === true){
      axios
              .post(
                "https://us-central1-soft-dev-tutorial.cloudfunctions.net/members_per_day",
                {
                  username: username_cookie['username_tkn'],
                  Login_Date: login_time['login_time_tkn'],
                  Logout_Date:d
                }
              )
              .then((response) => {
                console.log(response);
              })
              .catch((error) => {
                console.log(error);
              });
            console.log("logout");

      removeLogin_state(['login_token'])
      removeUsername_cookie(['username_tkn'])
      removeCookie(['username_tkn'])

      setLogout(false)

    }

    useEffect(()=>{
      showButton()
    },[])

    window.addEventListener('resize',showButton);

    return (
        <div style={{display:"block",position: "fixed",width:"100vw",zIndex:"10"}}>
          <nav className='navbar'>
            <div className='navbar-container' >
              <Link to='/home' className='navbar-logo' onClick={closeMobileMenu} onClick={refreshPage} > 
                <i className="fas fa-subway"></i>
                RTS
              </Link>
              <div className='menu-icon' onClick={handleClick}>
                <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
              </div>
              <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                <li className='navbar-item'>
                  <Link to='/home' className='nav-links' onClick={closeMobileMenu} onClick={refreshPage}>
                    Home
                  </Link>
                </li>
                <li className='navbar-item'>
                  <Link
                    to='/services'
                    className='nav-links'
                    onClick={closeMobileMenu}
                    onClick={refreshPage}
                  >
                    Services
                  </Link>
                </li>
                {login_state['login_token'] ?(<li className='navbar-item'>
                  <Link
                    to='/ticket'
                    className='nav-links'
                    onClick={closeMobileMenu}
                    onClick={refreshPage}
                  >
                    Ticket
                  </Link>
                </li>) :
                (<li className='navbar-item'>
                  <Link
                    to='/calculate'
                    className='nav-links'
                    onClick={closeMobileMenu}
                    onClick={refreshPage}
                  >
                    Calculate
                  </Link>
                </li>)}
                <li className='navbar-item'>
                  <Link
                    to='/contact'
                    className='nav-links'
                    onClick={closeMobileMenu}
                    onClick={refreshPage}
                  >
                    Contact
                  </Link>
                </li>
              </ul>
              
              {login_state['login_token'] ?(<Link to='/home' className='btn-mobile' onClick={refreshPage}>
                <Button  variant="outline-danger" style={{width:"100px",margin:"5px"}} onClick= {handleLogout}>LOGOUT</Button>
              </Link> ) : (<Link to='/register' className='btn-mobile' onClick={refreshPage}>
                <Button  variant="outline-info" style={{width:"100px",margin:"5px"}}>LOGIN</Button>
              </Link>)}

              {login_state['login_token'] ?(<p className="uname">Hi..{username_cookie['username_tkn']}</p>) :(<p className="uname"></p>) }
              
              
              
                  
              
        
            </div>
          </nav>
        </div>
    );
}

export default Navbar;
