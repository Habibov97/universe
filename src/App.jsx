import {createContext, useEffect, useState } from 'react'
import './App.css'
import Routs from './routs'
 
export const AppContext = createContext()
function App() {

    const [mydata, setMydata] = useState('')

    useEffect(()=> {
      fetch("https://raw.githubusercontent.com/Carlos-A-P/space-tourism-website-react/main/src/helpers/data.json")
      .then(response => response.json())
      .then(data => setMydata(data))
    }, [])


  return (
    <AppContext.Provider value={mydata}>
      <Routs/>
    </AppContext.Provider>
  )
}

export default App
