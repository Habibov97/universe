import {Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import Destination from './pages/Destination'
import Crew from './pages/Crew'
import Technology from './pages/Technology'
import NoPageFound from './pages/NoPageFound'


function Routs() {


  return (
    <div>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/destination' element={<Destination/>}/>
            <Route path='/crew' element={<Crew/>}/>
            <Route path='/technology' element={<Technology/>}/>
            <Route path='/*' element={<NoPageFound/>}/>
        </Routes>

    </div>
  )
}

export default Routs


