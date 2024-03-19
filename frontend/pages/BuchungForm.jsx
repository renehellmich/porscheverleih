import { useContext, useRef } from "react";
import { mainContext } from "../context/MainProvider";

const BuchungForm = () => {

  const { cars, freeCars, setFreeCars, setBuchungen } = useContext(mainContext)

  const startRef = useRef()
  const endRef = useRef()
  const carRef = useRef()

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(carRef);
    const form = e.target;
    const formData = new FormData(form);
    fetch("http://localhost:3000/buchungen", {
      method: "POST",
      body: formData,
    });
  };

  const loadFreeCars = () => {

    try {
      fetch(`http://localhost:3000/fahrzeuge/free/?start=${startRef.current.value}&ende=${endRef.current.value}`)
      .then((res) => res.json())
      .then((data) => console.log(data))
    } catch(err) {
      console.error(err)
    }

  }

  const setSpecificCar = (data) => {
    console.log(data);
    setBuchungen((prevState) => ({
      ...prevState,
      specificCar: data._id
    }))
  }

  const showEvent = (event) => {
    console.log(event.target.value);
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="text" name="AutoNr" placeholder="AutoNr" />
        {/* <input type="date" name="Datum" /> */}
        <input type="date" name="StartDatum" required ref={startRef}/>
        <input type="date" name="EndDatum" required ref={endRef} onChange={() => loadFreeCars()}/>
        <select name="" id="" onChange={showEvent}>
          {
            cars?.map((car, index) => {
              return (
                <option value={car._id} ref={carRef} onChange={() => setSpecificCar(car)}>{car.Modell}</option>
              )
            })
          }
        </select>
        <input type="text" name="Vorname" placeholder="Vorname" />
        <input type="text" name="Nachname" placeholder="Nachname" />
        <input type="text" name="AutoID" id="AutoID" value={carRef._id} />
        <button>Buchen</button>
      </form>
    </>
  );
};

export default BuchungForm;
