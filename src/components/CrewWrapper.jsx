import { useContext, useEffect, useState } from "react"
import { AppContext } from "../App"
import CrewWords from "./CrewWords";
import CrewImg from "./CrewImg";
import CrewButtons from "./CrewButtons";

function CrewWrapper() {

  const data = useContext(AppContext)
  const {crew} = data
  const [crewMember ,setCrewMember] = useState('Commander')
  const [animate, setAnimate] = useState(false);
  const [animateImg, setAnimateImg] = useState(false);
  const [filteredData, setFilteredData] = useState({})
  const [initialDeactive, setInitialDeactive] = useState(false)

  const rawData = crewMember ?  crew && crew.find((item) => item.role === crewMember) : crewMember;

  useEffect(()=> {
    if(initialDeactive){
      setAnimate(true)
      const timer = setTimeout(()=> setAnimate(false), 3000)
      
      setAnimateImg(true)
      const timerImg = setTimeout(()=> setAnimateImg(false) , 3000)

      const wordTimer = setTimeout(()=> {
        setFilteredData( crewMember ? crew && crew.find((item) => item.role == crewMember) : crewMember)
      }, 1500)

      return ()=> {
        clearTimeout(timer)
        clearTimeout(timerImg)
        clearTimeout(wordTimer)
      }
    }
    else {
      setInitialDeactive(true)
      setFilteredData(crewMember ? crew && crew.find((item)=> item.role == crewMember ): crewMember)
    }

  }, [crewMember])

  console.log(filteredData);
    
  return (
    <div>
        <div className='choose-destination'>
            <span>02</span> Meet Your Crew
        </div>
        <div className="wrapper3">
            <div className="personalInfo">
              <CrewWords animate={animate} filteredData={filteredData ? filteredData: rawData}/>
              <CrewButtons crewData={crew} setCrewMember={setCrewMember}/>
            </div>
              <CrewImg animateImg={animateImg} filteredData={filteredData ? filteredData : rawData}/>
        </div>  
    </div>
  )

  
}

export default CrewWrapper