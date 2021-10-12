import React,{useState} from 'react';
import {Link} from 'react-router-dom';


function Navbar() {
    const [click,setClick]= useState(false);
    const handleClick =()=>setClick(!click);
    const closeMobileMenu = ()=>setClick(false);
    return (
        <>
        <nav className="navbar">
            <div className="navbar-container">
                <Link to="/" className="navbar-logo">
                    RTS <i class="fas fa-subway"></i>
                </Link>
                <div className='menu-icon' onClick={handleClick}>
                    <i className={click ? 'fas fa-times':'fas fa-bars'}/>
                </div>
                <ul className={click ? 'nav-menu active':'nav-menu'}>
                    <li className='nav-item'>
                        <Link to='/' className='nav-link' onClick={closeMobileMenu}>
                            Home
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/บริการ' className='nav-link' onClick={closeMobileMenu}>
                            บริการ
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/ติดต่อ' className='nav-link' onClick={closeMobileMenu}>
                            ติดต่อ
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/sign-up' className='nav-link-mobile' onClick={closeMobileMenu}>
                            Sign Up
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
        </>
    )
}

export default Navbar
