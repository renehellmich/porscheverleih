import React from "react";
import { useNavigate } from "react-router-dom";

const LandingPage = () => {

    const navigate = useNavigate()

  return (
    <>
        <button onClick={() => navigate('/autos/neu')}>Neues Auto</button>
    </>
  );
};

export default LandingPage;
