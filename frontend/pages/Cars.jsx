import React, { useContext } from 'react'
import { mainContext} from '../context/MainProvider'
import Car from '../components/Car'

const Cars = () => {

    const { cars } = useContext(mainContext)

    console.log(cars);

  return (
    <>
    <h2>Hi</h2>
    {
        cars?.map((car, index) => {
            return (
                <div key={index}>
                    <Car data={car}/>
                </div>
            )
        })
    }
    </>
  )
}

export default Cars