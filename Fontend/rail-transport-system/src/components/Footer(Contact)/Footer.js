import React from 'react';
import './Footer.css';
import { Button } from '../Button/Button';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer-container'>
      <div class='footer-links'>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>About Us</h2>
            <Link to='/sign-up'>Signup</Link>
            <Link to='/'>Map</Link>
            <Link to='/'>ข้อปฏิบัติ</Link>
            <Link to='/'>Calculate</Link>
            <Link to='/'>Terms of Service</Link>
          </div>
          <div class='footer-link-items'>
            <h2>Contact Us</h2>
            <Link to='/'>Contact</Link>
          </div>
          <div class='footer-link-items'>
            <h2>Social Media</h2>
            {/* <Link to='/'>Instagram</Link> */}
            <a href='https://www.facebook.com/piyaphatboontham/'>Facebook</a>
            {/* <Link to='/'>Youtube</Link>
            <Link to='/'>Twitter</Link> */}
          </div>
        </div>
      </div>
      <section class='social-media'>
        <div class='social-media-wrap'>
          <div class='footer-logo'>
            <Link to='/' className='social-logo'>
              RTS
              <i class="fas fa-subway"></i>
            </Link>
          </div>
          <small class='website-rights'>RTS © 2021</small>
          <div class='social-icons'>
            <a
              class='social-icon-link facebook'
              href='https://www.facebook.com/piyaphatboontham/'
              target='_blank'
              aria-label='Facebook'
            >
              <i class='fab fa-facebook-f' />
            </a>
            <Link
              class='social-icon-link instagram'
              to='/'
              target='_blank'
              aria-label='Instagram'
            >
              <i class='fab fa-instagram' />
            </Link>
            <Link
              class='social-icon-link youtube'
              to='/'
              target='_blank'
              aria-label='Youtube'
            >
              <i class='fab fa-youtube' />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;