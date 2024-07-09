import { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebase";
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import facebookIcon from "../assets/facebook-logo.png";
import instagramIcon from "../assets/instagram-logo.png";
import linkedinIcon from "../assets/linkedin-logo.png";
import phoneIcon from "../assets/phone-call.png";
import emailIcon from "../assets/email.png";
import "./Feedbacks.css";
import Header from "../components/Header";

const Feedbacks = () => {
  const [name, setName] = useState("");
  const [enterpriseName, setEnterpriseName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      await addDoc(collection(db, "feedbacks"), {
        name,
        enterpriseName,
        email,
        phoneNumber,
        message,
        timestamp: new Date(),
      });
      alert("Message sent! We will get back to you soon.");
      setName("");
      setEnterpriseName("");
      setEmail("");
      setPhoneNumber("");
      setMessage("");
    } catch (error) {
      console.error("Error adding document: ", error);
      alert("Oops! There was a problem, please try again.");
    }
  };

  return (
    <>
      <Header />
      <div className="feedbacks-section">
        <h1>Are you facing a certain issue?</h1>
        <p className="subheading">
          You can share your thoughts with us about a certain issue or inconvenience you are facing,<br /> and we will try to provide you with a solution.
        </p>
        <div className="feedbacks-container">
          <form className="feedbacks-form" onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-group">
                <label>Name</label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>
              <div className="form-group">
                <label>Enterprise Name</label>
                <input
                  type="text"
                  value={enterpriseName}
                  onChange={(e) => setEnterpriseName(e.target.value)}
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
                <PhoneInput
                  country={'us'}
                  value={phoneNumber}
                  onChange={(phone) => setPhoneNumber(phone)}
                  inputStyle={{
                      width: '100%',
                    marginLeft: '2.5rem 0',
                    padding: '0.5rem',
                    height: '2.5rem',
                    border: '1px solid #ccc',
                    fontSize: '1rem',
                    backgroundColor: 'transparent',
                    color: '#1d2d60',
                    borderBottom: '1px solid #29337a',
                    borderRadius: '0',
                  }}
                  buttonStyle={{
                    backgroundColor: 'transparent',
                    borderBottom: '1px solid #29337a',
                    borderTop: 'none',
                    borderLeft: 'none',
                    borderRight: 'none',
                    borderRadius: '0',
                  }}
                  dropdownStyle={{
                    backgroundColor: 'white',
                  }}
                  required
                />
              </div>
            </div>
            <div className="form-group">
              <label>Tell us about the issue you are facing</label>
              <textarea
                placeholder="Write your message.."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
              ></textarea>
            </div>
            <button type="submit">Send Feedback</button>
          </form>
          <div className="feedbacks-info">
            <h2>Contact Information</h2>
            <p>We would love to hear from you!</p>
            <div className="info-item">
              <img src={phoneIcon} alt="Phone" />
              <span>+216 54 131 778</span>
            </div>
            <div className="info-item">
              <img src={emailIcon} alt="Email" />
              <span>omnilink@gmail.com</span>
            </div>
            <div className="social-media">
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={facebookIcon}
                  alt="Facebook"
                  className="social-icon"
                />
              </a>
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={instagramIcon}
                  alt="Instagram"
                  className="social-icon"
                />
              </a>
              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={linkedinIcon}
                  alt="LinkedIn"
                  className="social-icon"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Feedbacks;
