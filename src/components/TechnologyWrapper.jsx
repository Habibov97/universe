import { useContext, useEffect, useState } from "react"
import TechnologyButtons from "./TechnologyButtons"
import TechnologyImg from "./TechnologyImg"
import TechnologyWords from "./TechnologyWords"
import { AppContext } from "../App"


function TechnologyWrapper() {
    const data =  useContext(AppContext)
    const [filteredData, setFilteredData] = useState({})
    const [tecnologyTitle, setTechnologyTitle] = useState('Launch vehicle')
    const [animate, setAnimate] = useState(false)
    const [animateImg, setAnimateImg] = useState(false)
    const [initialDeactive, setInitialDeactive] = useState(false)

    const { technology } = data

    const rawData = tecnologyTitle ? technology && technology.find((item)=> item.name === tecnologyTitle) : tecnologyTitle;

    
    useEffect(()=> {
        if(initialDeactive){
            setAnimate(true)
            const timer = setTimeout(()=> setAnimate(false) , 3000)
    
            setAnimateImg(true)
            const timerImg = setTimeout(()=> setAnimate(false), 3000)
    
            const wordAnimate = setTimeout(()=> 
                setFilteredData(tecnologyTitle ? technology && technology.find((item)=> item.name === tecnologyTitle) : tecnologyTitle ), 1500)
                
            return ()=> {

                clearTimeout(timer)
                clearTimeout(timerImg)
                clearTimeout(wordAnimate)
            }
        }
        else {
            setInitialDeactive(true)
            setFilteredData(tecnologyTitle ? technology && technology.find((item)=> item.name === tecnologyTitle) : tecnologyTitle )
        }

    }, [tecnologyTitle])
    

  return (
    <div>
        <div className='choose-destination'>
            <span>04</span> Space Launch 101
        </div>
        <div className="wrapper4">
            <div className="technologyInfo">
                <TechnologyWords animate={animate}  data={filteredData ? filteredData : rawData}/>
                <TechnologyButtons technology={technology} setTechnologyTitle={setTechnologyTitle}/>
            </div>
            <TechnologyImg filteredData={filteredData} animateImg={animateImg} />
        </div>
    </div>
  )


}

export default TechnologyWrapper