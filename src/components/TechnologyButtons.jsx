import { useState } from "react"

function TechnologyButtons({technology, setTechnologyTitle}) {
    
    const [activeStatus, setActiveStatus ] = useState(null)
    const handleChange = (name, ind)=> {
        setTechnologyTitle(name)
        setActiveStatus(ind)
    }


  return (

    <div className="btns-technology">
        {technology && technology.map((item, i) => {
            return <button className={activeStatus == i ? 'active' : ''} onClick={()=> handleChange(item.name, i)} key={i}>{i+1}</button>
        })}
    </div>
  )


}

export default TechnologyButtons