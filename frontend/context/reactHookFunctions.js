const reactHookFunktions = {
    loadCars: () => {

        const cars = fetch('http://localhost:3000/fahrzeuge/')
            .then((res) => res.json())
            .then((data) => data)

        console.log(cars);

        return cars
    }
}

export default reactHookFunktions