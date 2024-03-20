import { useContext, useRef } from "react";
import { mainContext } from "../context/MainProvider";

const BuchungForm = () => {

  const { cars, freeCars, setFreeCars, setBuchungen, buchungen } = useContext(mainContext)

  const startRef = useRef()
  const endRef = useRef()
  const carRef = useRef()

  const handleSubmit = async (e) => {
    e.preventDefault();

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
      .then((data) => {
        console.log(data, cars)
        if (data.length != 0) {
        const freeCarArray = cars.filter((element) => {
          return data.some((f) => {
            return f.Modell != element._id
          })
        })
        setFreeCars(freeCarArray) } else { setFreeCars(cars)}
      })
    } catch(err) {
      console.error(err)
    }

  }

  const setSpecificCar = (event) => {

    setBuchungen((prevState) => ({
      ...prevState,
      specificCar: event.target.value
    }))
  }

  const showEvent = (event) => {
    console.log(event.target.value);
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        {/* <input type="text" name="AutoNr" placeholder="AutoNr" /> */}
        {/* <input type="date" name="Datum" /> */}
        <input type="date" name="StartDatum" required ref={startRef}/>
        <input type="date" name="EndDatum" required ref={endRef} onChange={() => loadFreeCars()}/>
        <select name="Modell" id="Modell" onChange={setSpecificCar}>
          <option value="">Bitte Fahrzeug auswählen</option>
          {
            freeCars?.map((car, index) => {
              return (
                <option value={car._id} ref={carRef} >{car.Modell}</option>
              )
            })
          }
        </select>
        <input type="text" name="Vorname" placeholder="Vorname" />
        <input type="text" name="Nachname" placeholder="Nachname" />
        <button>Buchen</button>
      </form>
    </>
  );
};

export default BuchungForm;
