import React from 'react';
import './Footer.css';
import { Button } from '../Button/Button';
import { Link } from 'react-router-dom';

function refreshPage(){
  window.scrollTo(0,0);
}

function Footer() {
  return (
    <div className='footer-container'>
      <img src='images/trainloop.gif' style={{width: "100%",height: '80px'}} draggable="false" dragstart="false" class="unselectable"></img>
      <br/>
      <div className='footer-links'>
        <div className='footer-link-wrapper'>
          <div className='footer-link-items'>
            <h2>About Us</h2>
            <Link to='/register' onClick={refreshPage}>Signup</Link>
            <Link to='/map' onClick={refreshPage}>Map</Link>
            <Link to='/manual' onClick={refreshPage}>ข้อปฏิบัติ</Link>
            <Link to='/calculate' onClick={refreshPage}>Calculate</Link>
            <Link to='/services' onClick={refreshPage}>Service</Link>
          </div>
          <div className='footer-link-items'>
            <h2>Contact Us</h2>
            <Link to='/'>Contact</Link>
          </div>
          <div className='footer-link-items'>
            <h2>Social Media</h2>
            {/* <Link to='/'>Instagram</Link> */}
            <a href='https://www.facebook.com/piyaphatboontham/'>Facebook</a>
            {/* <Link to='/'>Youtube</Link>
            <Link to='/'>Twitter</Link> */}
          </div>
        </div>
      </div>
      <section className='social-media'>
        <div className='social-media-wrap'>
          <div className='footer-logo'>
            <Link to='/' className='social-logo'>
              <i className="fas fa-subway"></i>
            </Link>
          </div>
          <small className='website-rights'>RTS © 2021</small>
          <div className='social-icons'>
            <a
              className='social-icon-link facebook'
              href='https://www.facebook.com/piyaphatboontham/'
              target='_blank'
              aria-label='Facebook'
            >
              <i className='fab fa-facebook-f' />
            </a>
            <Link
              className='social-icon-link instagram'
              to='/'
              target='_blank'
              aria-label='Instagram'
            >
              <i className='fab fa-instagram' />
            </Link>
            <Link
              className='social-icon-link youtube'
              to='/'
              target='_blank'
              aria-label='Youtube'
            >
              <i className='fab fa-youtube' />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;