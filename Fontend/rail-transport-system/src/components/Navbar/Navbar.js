import React,{useState,useEffect} from 'react';
import {Link,useHistory} from 'react-router-dom';
import '../Navbar/Navbar.css';
import {useCookies} from 'react-cookie'
import {InputGroup,FormControl,Col,Row,Button,Container,Form,Table} from 'react-bootstrap'



function Navbar() {
    let history = useHistory()
    const [login_state, setLogin_state, removeLogin_state] = useCookies(['login_token'])
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

    const handleLogout = () => {
      removeLogin_state(['login_token'])

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
              </Link>) : (<Link to='/register' className='btn-mobile' onClick={refreshPage}>
                <Button  variant="outline-info" style={{width:"100px",margin:"5px"}}>LOGIN</Button>
              </Link>)}
              
                  
              
        
            </div>
          </nav>
        </div>
    );
}

export default Navbar;
