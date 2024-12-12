import React from "react";
import "../styles/pages/ContactUs.css"

const ContactUs = () => {
  return (
    <div className="contact-us">
      <div className="contact-header" style={{
        backgroundImage: "url('/assets/images/contact-us-bg.jpg')",
      }}>
        <h1>CONTACT US</h1>
        <p>HOME / <span>CONTACT US</span></p>
      </div>
      <div className="contact-content">
        <div className="contact-text">
        <div className="contact-details">
          <h2>Contact Details</h2>
          <div className="contact-icons">
          <img src="/assets/icons/location.png" alt="Location"/> 
          <p> 28 Green Tower, Street Name, New York City, USA</p>
          </div>
          <div className="contact-icons">
          <img src="/assets/icons/phone.png" alt="Location"/>
          <p> +92 035 18872937 <br/>+92 036 28392730</p>
          </div>
          <div className="contact-icons">
          <img src="/assets/icons/mail.png" alt="Location"/>
          <p>company-email@gmail.com <br/>your-email@gmail.com</p>
          </div>
        </div>
        <div className="contact-form">
          <h2>Send Message</h2>
          <form>
            <input type="text" placeholder="Your name here..." />
            <input type="email" placeholder="Your email here..." />
            <textarea placeholder="Your comment here..."></textarea>
            <button type="submit">Submit Message</button>
          </form>
        </div>
        </div>
        <div className="contact-map">
          <iframe
            title="Google Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2689.50331312374!2d-122.3351673!3d47.608013!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5490102bb121bcfd%3A0x1e2e8c0eb0d30f2d!2sSeattle!5e0!3m2!1sen!2sus!4v1234567890"
            allowFullScreen
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;