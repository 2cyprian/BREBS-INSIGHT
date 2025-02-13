import React, { useRef } from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaBehance, FaEnvelope } from 'react-icons/fa';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './contact.css';
import MapComponent from '../../components/Map';
import PageHeader from '../../pageHeader/PageHeader';

const services = [
  { title: "Logistics", icon: 'delivery.png', image: "delivery.jpg", description: "We aim to become a major player in the logistics sector by providing a wide range of shipment needs across all transportation networks." },
  { title: "Transportation", icon: 'transport.png', image: "transportation.jpg", description: "Ensuring the efficiency of delivering products from POINT A to POINT B in good condition at all times." },
  { title: "Clearing & Forwarding", icon: 'transport.png', image: "clearing.jpg", description: "Outstanding track records in clearing industrial and domestic equipment, materials, containers, vehicles, and goods in key sectors like mining and fuel companies." },
  { title: "Warehousing", icon: 'warehouse.png', image: "storage.jpg", description: "We provide storage facilities and government permits for pesticides, enabling us to work with NGOs and wholesale suppliers locally and internationally." },
  { title: "Human Resources", icon: 'hr.png', image: "hr-management.png", description: "Helping organizations adjust to labor legislation, including contracts, employment standards, record keeping, disciplinary actions, appraisals, and grievance procedures." },
  { title: "Iron Sheets", icon: 'iron.png', image: "iron-sheets.jpg", description: "Brebs is Alaf’s agent and supplier of ‘mabati’ products, which are well-known in Tanzania." },
  { title: "Business Management", icon: 'business.png', image: "businessman.jpg", description: "Offering HR services, secretarial services, event management, and consultancy." }
];

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
      <PageHeader/>
      <div className="info-container">
        <form ref={formRef} className="form-container" onSubmit={sendEmail}>
          <h3>Send us a message</h3>

          <label htmlFor="name">Your Name:</label>
          <input type="text" id="name" name="name" required />

          <label htmlFor="email">Your Email:</label>
          <input type="email" id="email" name="email_from" required />

          <label htmlFor="phone">Your Phone Number:</label>
          <input type="tel" id="phone" name="phone" required />

          <label htmlFor="service">Select a Service:</label>
          <select id="service" name="service" required>
            <option value="">-- Select a Service --</option>
            {services.map((service, index) => (
              <option key={index} value={service.title}>{service.title}</option>
            ))}
          </select>

          <label htmlFor="subject">Subject:</label>
          <input type="text" id="subject" name="subject" required />

          <label htmlFor="message">Your Message:</label>
          <textarea id="message" name="message" rows="5" required></textarea>

          <button type="submit" className='btn'>Submit</button>
        </form>

        <div className="contact-info">
          <div className='info'>
            <h4>Where to Find Us:</h4>
            <p>Tegeta Nyuki, Dar es Salaam, Tanzania</p>
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
