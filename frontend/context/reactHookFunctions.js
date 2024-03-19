const reactHookFunktions = {

    loadCars: () => {
        fetch('http://localhost:3000/fahrzeuge/')
            .then((res) => res.json())
            .then((data) => console.log(data))
    }
}

export default reactHookFunktions