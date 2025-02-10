import React, { useState } from "react";
import { FiArrowRight } from "react-icons/fi";
import "./serviceCard.css"; // Include your CSS file
import LogisticsCard from "../../components/cards/LogisticCard";

const services = [
  { title: "Logistics", icon: 'delivery.png', image: "delivery.jpg", description: "We aim to become a major player in the logistics sector by providing a wide range of shipment needs across all transportation networks." },
  { title: "Transportation", icon: 'transport.png', image: "transportation.jpg", description: "Ensuring the efficiency of delivering products from POINT A to POINT B in good condition at all times." },
  { title: "Clearing & Forwarding", icon: 'transport.png', image: "clearing.jpg", description: "Outstanding track records in clearing industrial and domestic equipment, materials, containers, vehicles, and goods in key sectors like mining and fuel companies." },
  { title: "Warehousing", icon: 'warehouse.png', image: "storage.jpg", description: "We provide storage facilities and government permits for pesticides, enabling us to work with NGOs and wholesale suppliers locally and internationally." },
  { title: "Human Resources", icon: 'hr.png', image: "hr-management.png", description: "Helping organizations adjust to labor legislation, including contracts, employment standards, record keeping, disciplinary actions, appraisals, and grievance procedures." },
  { title: "Iron Sheets", icon: 'iron.png', image: "iron-sheets.jpg", description: "Brebs is Alaf’s agent and supplier of ‘mabati’ products, which are well-known in Tanzania." },
  { title: "Business Management", icon: 'business.png', image: "businessman.jpg", description: "Offering HR services, secretarial services, event management, and consultancy." }
];

const ServiceCard = () => {
  const [selectedService, setSelectedService] = useState(null);

  const handleClick = (service) => {
    setSelectedService(service);
  };

  return (
    
    <div className="service">
      <div className="service-container">
        {services.map((service, index) => (
          <div key={index} className="service-card-container">
            <div className="image-container">
              <img src={`/img/${service.image}`} alt={service.title} className="card-image" />
            </div>
            <div className="overlay">
              <div className="service-content">
                <div className="service-icon">
                  <img src={`projects/${service.icon}`} alt={service.title} />
                </div>
                <h3>{service.title}</h3>
                <div className="arrow-icon" onClick={() => handleClick(service)}>
                  <FiArrowRight />
                </div>
              </div>
            </div>
          </div>
        ))}
        <LogisticsCard/>
      </div>

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
  );
};

export default ServiceCard;
