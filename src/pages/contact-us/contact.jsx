import React, { useRef } from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaBehance, FaEnvelope } from 'react-icons/fa';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './contact.css';
import MapComponent from '../../components/Map';

const ContactUs = () => {
  const formRef = useRef(null);

  const sendEmail = async (e) => {
    e.preventDefault();
    
    try {
      const result = await emailjs.sendForm(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_PUBLIC_KEY
      );
      
      console.log('Email sent:', result.text);
      toast.success('Thanks for reaching out! We are happy to have you.');
      formRef.current.reset();
    } catch (error) {
      console.error('Error sending email:', error);
      toast.error('Failed to send your message. Please try again later.');
    }
  };

  return (
    <section className="contact-container">
      <div className="info-container">
        <form ref={formRef} className="form-container" onSubmit={sendEmail}>
          <h3>Send us a message</h3>
          <label htmlFor="name">Your Name:</label>
          <input type="text" id="name" name="name" required />

          <label htmlFor="email">Your Email:</label>
          <input type="email" id="email" name="email_from" required />

          <label htmlFor="subject">Subject:</label>
          <input type="text" id="subject" name="subject" required />

          <label htmlFor="message">Your Message:</label>
          <textarea id="message" name="message" rows="5" required></textarea>

          <button type="submit" className='btn'>Submit</button>
        </form>

        <div className="contact-info">
          <div className='info'>
            <h4>Where to Find Us:</h4>
            <p>Mwenge, Dar es Salaam, Tanzania</p>
          </div>
          <div className="info">
            <h4>Email Us At:</h4>
            <p>info@brebsinsight.co.tz</p>
          </div>
          <div className="info">
            <h4>Call Us At:</h4>
            <p>Phone: +255 688 371 375</p>
          </div>
          <div className="navbar-socials">
            <a href="#facebook"><FaFacebookF /></a>
            <a href="#twitter"><FaTwitter /></a>
            <a href="#instagram"><FaInstagram /></a>
            <a href="#behance"><FaBehance /></a>
            <a href="#email"><FaEnvelope /></a>
          </div>
        </div>
      </div>
      <div className='map-container'>
        <MapComponent/>
      </div>
      <ToastContainer position="top-right" autoClose={3000} />
    </section>
  );
};

export default ContactUs;
