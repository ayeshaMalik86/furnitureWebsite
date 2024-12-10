/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';
import '../styles/components/Footer.css';

const Footer = () => {
  const [openSection, setOpenSection] = useState(null);

  const toggleSection = (index) => {
    setOpenSection(openSection === index ? null : index);
  };

  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-feature">
          <img src="/assets/icons/delivery-truck.png" alt="Delivery" className='footer-image'/>
          <div className='footer-feature-text'>
            <span> Free Shipping US Order $499</span>
            <a href="#"> More Details</a>
          </div>
        </div>
        <div className="footer-feature">
          <img src="/assets/icons/refresh.png" alt="Refresh" className='footer-image'/>
          <div className='footer-feature-text'>
            <span> 90 Day Free Returns</span>
            <a href="#"> More Details</a>
          </div>
        </div>
        <div className="footer-feature">
          <img src="/assets/icons/calender.png" alt="Calender" className='footer-image'/>
          <div className='footer-feature-text'>
            <span> Lifetime Warranty Guaranteed*</span>
            <a href="#"> Find Out More</a>
          </div>
        </div>
        <div className="footer-feature">
          <img src="/assets/icons/box.png" alt="Box" className='footer-image'/>
          <div className='footer-feature-text'>
            <span> Free In-Store Pickup</span>
            <a href="#"> Learn How</a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        {[
          {
            title: 'Shop by',
            links: ['Clearance Sale', 'New In', 'Beds', 'Sofas', 'Dining', 'Mattresses', 'Soft Furnishings']
          },
          {
            title: 'Information',
            links: ['Lookbook', 'About', 'Blog', 'Blog Details', 'Theme FAQs', 'Shipping & Returns']
          },
          {
            title: 'Customer Service',
            links: ['Search Terms', 'Advanced Search', 'Orders and Returns', 'Contact Us', 'Theme FAQs', 'Consultant', 'Store Locations']
          },
          {
            title: 'Newsletter Sign Up',
            content: (
              <>
                <p>Receive our latest updates about our products & promotions.</p>
                <form className="newsletter-form">
                  <input type="email" placeholder="Enter Your Email" />
                  <button type="submit">Submit</button>
                </form>
              </>
            )
          }
        ].map((section, index) => (
                    <div
            key={index}
            className={`footer-section ${openSection === index ? 'open' : ''} ${section.title === 'Newsletter Sign Up' ? 'news-letter' : ''}`}
          >
            <h4 onClick={() => toggleSection(index)}>
              {section.title}
            </h4>
            {section.links ? (
              <ul>
                {section.links.map((link, idx) => (
                  <li key={idx}><a href="#">{link}</a></li>
                ))}
              </ul>
            ) : (
              <div className='news-letter'>{section.content}</div>
            )}
          </div>
        ))}
      </div>
    </footer>
  );
};

export default Footer;
