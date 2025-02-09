import React from "react";

const MapComponent = () => {
  return (
    <div className="map-container">
      <iframe
        title="Google Map"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3962.910412744584!2d39.1837334!3d-6.6580249!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x185c57000d904015%3A0x14a4cc8c498d4a80!2sTegeta%20Nyuki%20Bus%20Stop!5e0!3m2!1sen!2stz!4v1738965729677!5m2!1sen!2stz"
        width="100%"
        height="400"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
      ></iframe>
    </div>
  );
};

export default MapComponent;
