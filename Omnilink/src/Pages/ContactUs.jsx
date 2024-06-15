import { useState } from "react";
import emailjs from "@emailjs/browser";
import facebookIcon from '../assets/facebook-logo.png';
import instagramIcon from '../assets/instagram-logo.png';
import linkedinIcon from '../assets/linkedin-logo.png';
import phoneIcon from '../assets/phone-call.png';
import emailIcon from '../assets/email.png';
import './ContactUs.css';

const ContactUs = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    const templateParams = {
      from_name: `${firstName} ${lastName}`,
      to_name: "Omnilink",
      message: message,
      reply_to: email,
    };

    emailjs
      .send(
        "service_dxqbld8",
        "template_tsn0pxb",
        templateParams,
        "T84RLIt6A7nKn1rVy"
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          alert("Message sent! We will get back to you soon.");
        },
        (error) => {
          console.log("FAILED...", error);
          alert("Oops! There was a problem, please try again.");
        }
      );

    setFirstName("");
    setLastName("");
    setEmail("");
    setPhoneNumber("");
    setMessage("");
  };

  return (
    <div className="contact-us-section">
      <h1>Contact Us</h1>
      <p className="subheading">Want to contact us? Just write us a message!</p>
      <div className="contact-container">
        <div className="contact-info">
          <h2>Contact Information</h2>
          <p>Say something to start a live chat!</p>
          <div className="info-item">
            <img src={phoneIcon} alt="Phone" />
            <span>+1012 3456 789</span>
          </div>
          <div className="info-item">
            <img src={emailIcon} alt="Email" />
            <span>omnilink@gmail.com</span>
          </div>
          <div className="social-media">
            <img src={facebookIcon} alt="Facebook" className="social-icon" />
            <img src={instagramIcon} alt="Instagram" className="social-icon" />
            <img src={linkedinIcon} alt="LinkedIn" className="social-icon" />
          </div>
        </div>
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-row">
            <div className="form-group">
              <label>First Name</label>
              <input 
                type="text" 
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                required 
              />
            </div>
            <div className="form-group">
              <label>Last Name</label>
              <input 
                type="text" 
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                required 
              />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group">
              <label>Email</label>
              <input 
                type="email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required 
              />
            </div>
            <div className="form-group">
              <label>Phone Number</label>
              <input 
                type="text" 
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                required 
              />
            </div>
          </div>
          <div className="form-group">
            <label>Message</label>
            <textarea 
              placeholder="Write your message.." 
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            ></textarea>
          </div>
          <button type="submit">Send Message</button>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
