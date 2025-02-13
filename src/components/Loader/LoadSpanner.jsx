import React from "react";
import { motion } from "framer-motion";
import "./Loader.css"; // Import CSS for styling

const Loader = () => {
  return (
    <div className="loader-container">
      <motion.div
        className="loader"
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
      ></motion.div>
    </div>
  );
};

export default Loader;
