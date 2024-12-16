

function TechnologyWords({data, animate}) {

  const  {name, description} = data || {}
  

  return (
    <>
        <div className={`allDetails ${animate ? 'animate': ''}`}>
            <div className='info-about-personal'>
                <div className='technology-ide'>The Terminology...</div>
                <div className='tecnology-title'>{name}</div>
                <p className='description-tech'>{description}</p>
            </div>
            
        </div>
        </>
  )

  
}

export default TechnologyWords