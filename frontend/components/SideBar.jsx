import React from "react";
import { useNavigate } from "react-router-dom";

const SideBar = () => {

    const navigate = useNavigate()

  return (
    <>
        <div onClick={() => {navigate('/')}}>Home</div>
        <div onClick={() => {navigate('/buchungen')}}>Buchungen</div>
        <div onClick={() => {navigate('/autos')}}>Autos</div>
    </>
  )
};

export default SideBar;
