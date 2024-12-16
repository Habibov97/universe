import React, { useState } from 'react'

function PlanetDescription({destinations, setPlanet}) {

  const [activeStatus, setActiveStatus] = useState(null)


  const handleClickButton = (planetName, ind) =>{
    setPlanet(planetName)
    setActiveStatus(ind)
    console.log(ind);
    
  }

  return (
    <div>
        <div className='planet-names'>
          {
            destinations && destinations.map((item, i)=>{
              return <button className={activeStatus === i ? 'active' : ''} onClick={()=> handleClickButton(item.name, i)} key={i}>{item.name}</button>
            })
          }
        </div>

    </div>
  )

}

export default PlanetDescription

