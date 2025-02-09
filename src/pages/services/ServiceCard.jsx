import React, { useState } from "react";
import { FiArrowRight } from "react-icons/fi";
import "./serviceCard.css"; // Import the normal CSS file
import ProjectCard from "./projects/Projects";

const services = [
  { title: "Logistics", image:"delivery.jpg", description: "We aim to become a major player in the logistics sector by providing a wide range of shipment needs across all transportation networks." },
  { title: "Transportation", image: "transportation.jpg", description: "Ensuring the efficiency of delivering products from POINT A to POINT B in good condition at all times." },
  { title: "Clearing & Forwarding", image: "clearing.jpg", description: "Outstanding track records in clearing industrial and domestic equipment, materials, containers, vehicles, and goods in key sectors like mining and fuel companies." },
  { title: "Warehousing", image: "storage.jpg", description: "We provide storage facilities and government permits for pesticides, enabling us to work with NGOs and wholesale suppliers locally and internationally." },
  { title: "Human Resources", image: "hr-management.png", description: "Helping organizations adjust to labor legislation, including contracts, employment standards, record keeping, disciplinary actions, appraisals, and grievance procedures." },
  { title: "Iron Sheets", image: "iron-sheets.jpg", description: "Brebs is Alaf’s agent and supplier of ‘mabati’ products, which are well-known in Tanzania." },
  { title: "Business Management", image: "businessman.jpg", description: "Offering HR services, secretarial services, event management, and consultancy." }
];

const ServiceCard = () => {
  const [selectedService, setSelectedService] = useState(null);

  return (
    <div className="service">
    <div className="service-container">
      {services.map((service, index) => (
        <div key={index} className="service-card">
          <img src={`/img/${service.image}`} alt={service.title} className="service-image" />
          <h3 className="service-title">{service.title}</h3>
          <button className="view-more-btn" onClick={() => setSelectedService(service)}>
            View More <FiArrowRight />
          </button>
        </div>
      ))}

      {selectedService && (
        <div className="modal">
          <div className="modal-content">
            <h3>{selectedService.title}</h3>
            <img src={`/img/${selectedService.image}`} alt={selectedService.title} className="modal-image" />
            <p>{selectedService.description}</p>
            <button className="close-btn" onClick={() => setSelectedService(null)}>Close</button>
          </div>
        </div>
      )}

    </div>
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <h1>My Projects</h1>
      <p>Here are some of the project worked on:</p>
      <ProjectCard /> {/* This will render all project cards */}
    </div>
     
    </div>
  );
};

export default ServiceCard;
