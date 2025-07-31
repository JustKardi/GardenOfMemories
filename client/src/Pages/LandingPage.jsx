// LandingPage.jsx
import React from "react";
import Navbar from "../Components/Navbar"; // correct relative path
import FlowerLoad from "../Components/FlowerLoad";
import './LandingPageStyles.css';

function LandingPage() {
  return (
    <>
      <Navbar />
        <FlowerLoad />
    </>
  );
}

export default LandingPage;