import React from "react";
import './Footer.css';
import { Link } from 'react-router-dom'; 


function Footer() {
    return (
        <div className='footer-container'>
            <div className="footer-links">
                <div className="footer-link-wrapper">
                    <div className="footer-link-items">
                        <h2>For Clients</h2>
                        <Link to='/sign-up'>How to Hire</Link>
                        <Link to='/'>Talent Scout</Link>
                        <Link to='/'>Talent Marketplace</Link>
                        <Link to='/'>Project Catalog</Link>
                        <Link to='/'>Enterprise</Link>
                        <Link to='/'>Payroll Sevices</Link>
                        <Link to='/'>Direct Contact</Link>
                    </div>
                    <div className="footer-link-items">
                        <h2>For Talent</h2>
                        <Link to='/'>How to Find Work</Link>
                        <Link to='/'>Direct Contact</Link>
                        <Link to='/'>Find Freelancer Jobs Worldwide</Link>
                        <Link to='/'>Find Freelancer Jobs in Vietnam</Link>
                    </div>
                    <div className="footer-link-items">
                        <h2>Resources</h2>
                        <Link to='/'>Help & Support</Link>
                        <Link to='/'>Success Stories</Link>
                        <Link to='/'>Upwork Reviews</Link>
                        <Link to='/'>Blog</Link>
                        <Link to='/'>Community</Link>
                    </div>
                    <div className="footer-link-items">
                        <h2>Company</h2>
                        <Link to='/'>About Us</Link>
                        <Link to='/'>Leadership</Link>
                        <Link to='/'>Investor Relations</Link>
                        <Link to='/'>Contact Us</Link>
                        <Link to='/'>Trust, Safety & Security </Link>
                    </div>
                </div>
            </div>
            <section className='social-media'>
                <div className='social-media-wrap'>
                <div className='social-icons'>
            <Link
              className='social-icon-link facebook'
              to='/'
              target='_blank'
              aria-label='Facebook'
            >
              <i className='fab fa-facebook-f' />
            </Link>
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
            <Link
              className='social-icon-link twitter'
              to='/'
              target='_blank'
              aria-label='Twitter'
            >
              <i className='fab fa-twitter' />
            </Link>
            <Link
              className='social-icon-link twitter'
              to='/'
              target='_blank'
              aria-label='LinkedIn'
            >
              <i className='fab fa-linkedin' />
            </Link>
          </div>
                </div>
            </section>
        </div>

    )
}

export default Footer;