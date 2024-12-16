import React from 'react'

function CrewWords({filteredData = {}, animate}) {

    const {name, bio, role} = filteredData || {}

  return (    

        <>
            <div className={`allDetails ${animate ? 'animate': ''}`}>
                <div className='info-about-personal'>
                    <div className='role'>{role}</div>
                    <div className='title-personal'>{name}</div>
                    <p className='description'>{bio}</p>
                </div>
                
            </div>
        </>
  )


}

export default CrewWords