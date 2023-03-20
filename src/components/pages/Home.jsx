import React from "react";
import { useNavigate } from "react-router-dom";
import "./home.css";

const Home = () => {
  const nav = useNavigate();

  const handleMaterialsList = () => {
    nav("/materials");
  };

  const handleAddMaterialsClick = () => {
    nav("/materials/add");
  };

  return (
    <div className="home-container">
      <div className="hero-section">
        <br />
        <br />
        <h1>Welcome to My Education App</h1>
        <p>Get access to study materials for free</p>
        <button className="cta-button" onClick={handleMaterialsList}>
          Start Learning
        </button>
      </div>
      <div className="featured-section"></div>
      <div className="add-materials-section">
        <h2>Add Your Materials</h2>
        <p>Everyone can contribute to our collection of study materials!</p>
        <button className="cta-button" onClick={handleAddMaterialsClick}>
          Add Materials
        </button>
      </div>
    </div>
  );
};

export default Home;
