import React from 'react'
import { useNavigate } from 'react-router-dom'
import { FaBars, FaX } from "react-icons/fa6";
import Logo from '/src/assetler/img/logo.png';

function Navbar() {

  const navigate = useNavigate()

  return (
    <div className="navbar">
          <div onClick={()=> navigate('/')} className="logo">
            <img  src={Logo} alt="Logo" />
          </div>
          <div className="nav-right">
            <div>
              <hr />
            </div>
            <div>
              <ul className="nav-items">
                <li onClick={()=> navigate('/')}><b>00</b> HOME</li>
                <li onClick={()=> navigate('/destination')}><b>01</b> DESTINATION</li>
                <li onClick={()=> navigate('/crew')}><b>02</b> CREW</li>
                <li onClick={()=> navigate('/technology')}><b>03</b> TECHNOLOGY</li>
              </ul>
            </div>
          </div>
          
          <a id='bars' className='bars' onClick={()=> document.getElementById('ham-menu').style.right ='300px'}  ><FaBars /> </a>
          <div id='hamburger' className='hamburger'>
              <div id='ham-menu' className='ham-menu'>
                <a className='close' onClick={()=> document.getElementById('ham-menu').style.right = '0'}> 
                  <FaX />
                </a>
                <ul >
                  <li onClick={()=> navigate('/')}><b>00</b> HOME</li>
                  <li onClick={()=> navigate('/destination')}><b>01</b> DESTINATION</li>
                  <li onClick={()=> navigate('/crew')}><b>02</b> CREW</li>
                  <li onClick={()=> navigate('/technology')}><b>03</b> TECHNOLOGY</li>
                </ul>

              </div>
          </div>
    </div>


  )
}

export default Navbar