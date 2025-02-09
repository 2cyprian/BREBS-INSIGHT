import React from 'react';
import './project.css';

const ProjectCard = () => {
  // Array of projects within the component
  const projects = [
    {
      title: 'Warehouse Inventory Management & Logistics',
      description: 'Streamlined goods retrieval system using automated tracking for efficient warehouse-to-transport operations.',
      image: '/projects/car-warehouse.jpeg'
    },
    {
      title: 'Corporate Office Expansion & Operational Hub Development',
      description: 'State-of-the-art headquarters featuring smart workspace design and integrated logistics management systems.',
      image: '/projects/office.jpeg'
    },
    {
      title: 'End-to-End Customer Goods Distribution Network',
      description: 'Reliable last-mile delivery solutions with real-time GPS tracking and temperature-controlled transport options.',
      image: '/projects/ts-derivary.jpeg'
    },
    {
      title: 'Oversized Cargo & Heavy Machinery Transportation Solutions',
      description: 'Specialized handling of industrial equipment using reinforced carriers and advanced route planning technology.',
      image: '/projects/ts-gen.jpeg'
    },
    {
      title: 'Specialized Construction Material Delivery (PVC & Iron Sheets)',
      description: 'Climate-protected transport of building materials with anti-corrosion packaging and load optimization systems.',
      image: '/projects/ts-pvc.jpeg'
    },
    {
      title: 'Nationwide Freight Transport & Supply Chain Coordination',
      description: 'Full-service logistics network featuring multi-modal transportation and automated dispatch coordination.',
      image: '/projects/ts-transport.jpeg'
    }
];
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', justifyContent: 'center' }}>
      {projects.map((project, index) => (
        <div key={index} className="project-card">
          <div className="project-card-inner">
            <div className="project-image">
              <img src={project.image} alt={project.title} />
            </div>
            <div className="project-info">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProjectCard;
