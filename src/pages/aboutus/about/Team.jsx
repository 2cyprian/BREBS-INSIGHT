import React from 'react';
import './team.css';

const TeamSection = () => {
  const teamMembers = [
    {
      id: 1,
      name: 'John Doe',
      position: 'Software Engineer',
      image: '/team/profile.png',
    },
    {
      id: 2,
      name: 'Mark Smith',
      position: 'UI/UX Designer',
      image: '/team/profile.png',
    },
    {
      id: 3,
      name: 'Jane Doe',
      position: 'Project Manager',
      image: '/team/profile.png',
    },
  ];

  return (
    <section className="team-section">
      <div className="container">
        <h3 className="subtitle">BREBSINSIGHT EXPERT TEAM</h3>
        <h1 className="title">Helping the Company Surpass Its Goals</h1>

        <div className="team-cards">
          {teamMembers.map((member) => (
            <div key={member.id} className="team-card">
              <img src={member.image} alt={member.name} className="team-image" />
              <h2 className="team-name">{member.name}</h2>
              <p className="team-position">{member.position}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;