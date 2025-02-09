import React from "react";
import ServiceCard from "./ServiceCard";
import warehousingImage from "/img/storage.jpg";
import hrImage from "/img/hr-management.png";
import logisticsImage from "/img/delivery.jpg";
import "./service.css";

const Services = () => {
  const services = [
    {
      image: warehousingImage,
      title: "Warehousing Solutions",
      description:
        "Secure storage facilities with government-permitted pesticide storage for NGOs and wholesale suppliers.",
      link: "/warehousing",
    },
    {
      image: hrImage,
      title: "Human Resource Services",
      description:
        "Customized solutions for your specific ocean freight requirement are at the heart of our services.",
      link: "/hr-services",
    },
    {
      image: logisticsImage,
      title: "Logistics & Transportation",
      description:
        "Our non-asset based Land network provides you with flexibility, improved service and accelerated delivery.",
      link: "/logistics",
    },
  ];

  return (
    <section className="services-section">
      <h2 className="services-header">OUR SERVICES</h2>
      <div className="services-container">
        {services.map((service, index) => (
          <ServiceCard key={index} {...service} />
        ))}
      </div>
      <div className="view-services">
        <span>Our list of services does not end here. We’ll adapt to your particular needs.
<a className="read-more" href="/services">View All Services <span> ➝ </span>
</a></span>
      </div>
    </section>
  );
};

export default Services;
