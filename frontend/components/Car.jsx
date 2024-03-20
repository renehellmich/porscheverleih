import React from 'react'

const Car = ({ data }) => {

    console.log(data);
  return (
    <>
        <p>Modell: {data.Modell}</p>
        <p>Leistung in PS: {data.Leistung}</p>
        <div>
          <p>Farbe: </p>
          <p style={{backgroundColor: `${data.Farbe}`, width: '64px', height: '64px'}}></p>
        </div>
        <p>Preis: {data.Preis}€</p>
        <p>Baujahr: {data.Baujahr}</p>
    </>
  )
}

export default Car