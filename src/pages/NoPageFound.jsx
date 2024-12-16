import { useNavigate } from "react-router-dom"


function NoPageFound() {

    const navigate = useNavigate()

  return (

    <div>
        <p>NO PAGE FOUND!</p>
        <button onClick={()=> navigate('/')}>REDIRECT TO HOME PAGE</button>

    </div>
  )
}

export default NoPageFound