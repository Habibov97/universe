
function TechnologyImg({data, animateImg}) {

  const {images} = data || {}
  
  console.log(images);
  

  return (
    <>
      <div className={`technology-img ${animateImg ? 'actives' : ''} `}>
        {images ? <img src={images.portrait} alt="" /> : ''}
      </div>
    </>
  )

  
}

export default TechnologyImg