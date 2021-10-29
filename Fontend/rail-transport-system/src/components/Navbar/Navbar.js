import React,{useState,useEffect} from 'react';
import {Link} from 'react-router-dom';
import '../Navbar/Navbar.css';
// import { Button } from '../Button/Button';
import {Button} from 'react-bootstrap';

function Navbar() {
    const [click,setClick]= useState(false);
    const [button,setButton]=useState(true);

    const handleClick =()=>setClick(!click);
    const closeMobileMenu = ()=>setClick(false);

    const showButton=()=>{
        if(window.innerWidth<=960){
            setButton(false);
        }else{
            setButton(true);
        }
    };

    useEffect(()=>{
      showButton()
    },[])

    window.addEventListener('resize',showButton);

    return (
        <div style={{display:"block",position: "fixed",width:"100vw",zIndex:"9999"}}>
          <nav className='navbar'>
            <div className='navbar-container'>
              <Link to='/' className='navbar-logo' onClick={closeMobileMenu}> 
                <i className="fas fa-subway"></i>RTS
              </Link>
              <div className='menu-icon' onClick={handleClick}>
                <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
              </div>
              <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                <li className='nav-item'>
                  <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                    Home
                  </Link>
                </li>
                <li className='nav-item'>
                  <Link
                    to='/services'
                    className='nav-links'
                    onClick={closeMobileMenu}
                  >
                    Services
                  </Link>
                </li>
                <li className='nav-item'>
                  <Link
                    to='/history'
                    className='nav-links'
                    onClick={closeMobileMenu}
                  >
                    Ticket
                  </Link>
                </li>
                <li className='nav-item'>
                  <Link
                    to='/contact'
                    className='nav-links'
                    onClick={closeMobileMenu}
                  >
                    Contact
                  </Link>
                </li>

                <li>
                  <Link
                    to='/sign-up'
                    className='nav-links-mobile'
                    onClick={closeMobileMenu}
                  >
                    Sign Up
                  </Link>
                </li>

                <li>
                  <Link
                    to='/sign-in'
                    className='nav-links-mobile'
                    onClick={closeMobileMenu}
                  >
                    Sign In
                  </Link>
                </li>

              </ul>

              <Link to='/sign-up' className='btn-mobile'>
                <Button variant="outline-light">SIGN UP</Button>
              </Link>

              <Link to='/sign-in' className='btn-mobile'>
                <Button variant="outline-light">SIGN IN</Button>
              </Link>

            </div>
          </nav>
        </div>
    );
}

export default Navbar;
