import './ContactForm.css';
import Header from '../components/Header';

const ContactForm = () => {
    return (
    <>
    <Header/>
    <div className="contact-container">
      <div className="contact-info">
        <h2>Contact Information</h2>
        <p>Say something to start a live chat!</p>
        <p className="contact-item">
          <i className="fas fa-phone"></i> +1012 3456 789
        </p>
        <p className="contact-item">
          <i className="fas fa-envelope"></i> omnilink@gmail.com
        </p>
        <div className="social-icons">
          <i className="fab fa-facebook-f"></i>
          <i className="fab fa-instagram"></i>
          <i className="fab fa-linkedin-in"></i>
        </div>
      </div>
      <div className="contact-form">
        <h2>Contact Us</h2>
        <p>Want to contact us? Just write us a message!</p>
        <form>
          <div className="form-group">
            <input type="text" name="firstName" placeholder="First Name" required />
            <input type="text" name="lastName" placeholder="Last Name" required />
          </div>
          <div className="form-group">
            <input type="email" name="email" placeholder="Email" required />
            <input type="tel" name="phoneNumber" placeholder="Phone Number" required />
          </div>
          <div className="form-group">
            <textarea name="message" placeholder="Write your message.." required></textarea>
          </div>
          <button type="submit">Send Message</button>
        </form>
      </div>
            </div>
            </>
  );
};

export default ContactForm;
