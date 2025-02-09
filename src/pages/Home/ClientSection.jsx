import React from 'react';
import './client.css';
import Testimonial from '../../components/cards/Testimonial';

const ClientsSection = () => {
  const clientLogos = [
    { id: 1, src: '/img/AF_Members_Icon_Taffa-2.png', alt: 'Alfa Logo' },
    { id: 2, src: '/img/plasco-logo-white.png', alt: 'Plasco Logo' },
    { id: 3, src: '/img/Artboard-1.png', alt: 'Blackberry Logo' },
    { id: 4, src: '/img/TELEX.png', alt: 'Latex Logo' },
    { id: 5, src: '/img/PWANI.png', alt: 'Pwani Logo' },
    { id: 6, src: '/img/TRADE.png', alt: 'Trade Logo' }
  ];

  return (
    <section className="clients-section">
      <div className="container">
        <h3 className="subtitle">Our Clients</h3>
        <h1 className="title">
          Trusted by Leading Businesses
        </h1>

        <div className="client-logos">
          {clientLogos.map((logo) => (
            <div key={logo.id} className="logo-container">
              <img src={logo.src} alt={logo.alt} />
            </div>
          ))}
        </div>

        <div className="testimonial">
          <h2>What Our Clients Say</h2>
          <Testimonial />
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;
