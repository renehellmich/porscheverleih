import React, { useContext } from "react";
import { mainContext } from "../context/MainProvider";

const LandingPage = () => {

  const { cars, buchungen } = useContext(mainContext)

  return (
    <>
      <section>
        <div className="startContainer"
          style={{
            width: '64px',
            height: '64px',
            background: '#7bff2'
          }}
        >
          Anzahl Buchungen: {buchungen.data.length}
        </div>
        <div className="startContainer"
          style={{
            width: '64px',
            height: '64px',
            background: '#7bff2'
          }}
        >
          { }
        </div>
        <div className="startContainer"
          style={{
            width: '64px',
            height: '64px',
            backgroundColor: '#7bff2'
          }}
        >
          Anzahl Autos: {cars.length}
        </div>
      </section>
    </>
  );
};

export default LandingPage;
