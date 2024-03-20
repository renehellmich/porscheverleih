import React from "react";
import { useNavigate } from "react-router-dom";

const SideBar = () => {

    const navigate = useNavigate()

  return (
    <>
        <div onClick={() => {navigate('/')}} className="asideContainer">Home</div>
        <div onClick={() => {navigate('/buchungen')}} className="asideContainer">Buchungen</div>
        <div onClick={() => {navigate('/autos')}} className="asideContainer">Autos</div>
    </>
  )
};

export default SideBar;
