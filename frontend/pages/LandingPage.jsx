import React, { useContext } from "react";
import { mainContext } from "../context/MainProvider";

const LandingPage = () => {

  const { cars, buchungen } = useContext(mainContext)

  return (
    <>
      <section className="landingContainer">
        <div className="startContainer">
          Anzahl Buchungen: {buchungen.data.length}
        </div>
        <div className="startContainer">
          { }
        </div>
        <div className="startContainer">
          Anzahl Autos: {cars.length}
        </div>
      </section>
    </>
  );
};

export default LandingPage;
