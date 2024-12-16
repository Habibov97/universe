import React from 'react'
import { useNavigate } from 'react-router-dom'

function HomeWrapper() {

    const navigate = useNavigate()


  return (

    <div className='wrapper1'>
        <div className='row1'>
            <div className='text1'>
                <article>
                    <div>So, you want to travel to</div>
                    <div>Space</div>
                    <p>Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!</p>
                </article>
            </div>
            <div className='explore'>
                <button onClick={()=> navigate('/destination')}  >EXPLORE</button>
            </div>
        </div>
    </div>

  )
}

export default HomeWrapper