import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

function refreshPage(){
  window.scrollTo(0,0);
}

function Footer() {
  return (
    <div className='footer-container'>
      <br/>
      <div className='footer-links'>
        <div className='footer-link-wrapper'>
          <div className='footer-link-items'>
            <h2>About Us</h2>
            <Link to='/register' onClick={refreshPage}>Signup</Link>
            <Link to='/map' onClick={refreshPage}>Map</Link>
            <Link to='/manual' onClick={refreshPage}>ข้อปฏิบัติ</Link>
            <Link to='/calculate' onClick={refreshPage}>Calculate</Link>
            <Link to='/services' onClick={refreshPage}>Services</Link>
          </div>
          <div className='footer-link-items'>
            <h2>Contact Us</h2>
            <Link to='/contact' onClick={refreshPage}>Contact</Link>
            <a href='https://github.com/Apizz789/Project_SOFTDEV' target='_blank'>Github</a>
          </div>
          <div className='footer-link-items' style={{paddingTop:"25px"}}>
            <img src='images/qr-code.png' style={{width: "80%",height: 'auto'}} draggable="false" dragstart="false" class="unselectable" roundedCircle/>
            {/* <a href='https://www.facebook.com/piyaphatboontham/'>Facebook</a> */}
          </div>
        </div>
      </div>
      <section className='social-media'>
        <div className='social-media-wrap'>
          <div className='footer-logo'>
            <Link to='/home' className='social-logo' target='_blank'>
              <i className="fas fa-subway"></i>
            </Link>
          </div>
          <small className='website-rights'>RTS © 2021</small>
        </div>
      </section>
    </div>
  );
}

export default Footer;