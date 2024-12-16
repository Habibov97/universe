import { useState } from "react"


function CrewButtons({setCrewMember, crewData}) {

  const [activeStatus, setActiveStatus ] = useState(null)

  const handleChange = (role, i)=> {
    setCrewMember(role)
    setActiveStatus(i)
  }
  

  return (
    <div className="btns-crew">
        {
          crewData && crewData.map((item, i) => {
            return  <button className={activeStatus == i ? 'active' : ''}   onClick={() => handleChange(item.role, i)}  key={i}></button>
          })
        }

    </div>
  )

  
}

export default CrewButtons