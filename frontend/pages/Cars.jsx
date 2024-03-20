import React, { useContext } from 'react'
import { mainContext} from '../context/MainProvider'
import Car from '../components/Car'
import { useNavigate } from 'react-router-dom'

const Cars = () => {

    const { cars } = useContext(mainContext)
    const navigate = useNavigate()

    console.log(cars);

  return (
    <>
    <h2>Hier seht ihr alle Autos, die wir im Bestand haben!</h2>
    <button onClick={() => navigate('/autos/neu')} style={{backgroundColor: 'red'}}>Neues Auto</button>
    <section className='carOverview'>
    {
        cars?.map((car, index) => {
            return (
                <div key={index} className='carContainer'>
                    <Car data={car}/>
                </div>
            )
        })
    }
    </section>
    </>
  )
}

export default Cars