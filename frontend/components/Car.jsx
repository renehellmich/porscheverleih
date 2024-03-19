import React from 'react'

const Car = ({ data }) => {

    console.log(data);
  return (
    <>
        <p>{data.Modell}</p>
        <p>{data.Leistung}</p>
        <p>{data.SerienNr}</p>
        <p style={{backgroundColor: `${data.Farbe}`, width: '64px', height: '64px'}}></p>
        <p>{data.Preis}€</p>
        <p>{data.Baujahr}</p>
    </>
  )
}

export default Car