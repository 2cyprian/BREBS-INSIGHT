import React from 'react';
import './statistics.css';

const StatisticsSection = () => {
  const stats = [
    {
      id: 1,
      icon: '/team/projects.png',
      value: '985+',
      label: 'Projects Completed',
    },
    {
      id: 2,
      icon: '/team/happy.png',
      value: '869+',
      label: 'Happy Clients',
    },
    {
      id: 3,
      icon: '/team/awards.png',
      value: '300+',
      label: 'Awards Won',
    },
  ];

  return (
    <section className="statistics-section">
      <div className="container">
        <h2 className="title">Our goals in <span className="highlight">numbers</span></h2>
        <p className="description">
          It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
        </p>

        <div className="stats-cards">
          {stats.map((stat) => (
            <div key={stat.id} className="stat-card">
              <div className="icon-container">
                <img src={stat.icon} alt={stat.label} className="stat-icon" />
                </div>
              <h3 className="stat-value">{stat.value}</h3>
              <p className="stat-label">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatisticsSection;
