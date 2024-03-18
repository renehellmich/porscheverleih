import React from 'react'

const NewCar = () => {

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);

        console.log(formData);
        fetch("http://localhost:3000/fahrzeuge/", {
            method: "POST",
            body: formData,
        });
    };


    return (
        <>
            <form onSubmit={handleSubmit}>
                <input type="text" name="Modell" placeholder="Modell" />
                <input type="Number" name="Leistung" placeholder='Leistung' />
                <input type="color" name="Farbe" />
                <input type="string" name="SerienNr" placeholder='Serien-Nr.' />
                <input type="Number" name="Baujahr" placeholder="Baujahr" />
                <input type="Number" name="Preis" placeholder="Preis" />
                <button>Buchen</button>
            </form>
        </>
    )
}

export default NewCar