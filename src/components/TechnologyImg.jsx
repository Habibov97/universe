
// function TechnologyImg({data, animateImg}) {

//   const {images} = data || {}
  
//   console.log(images);
  

//   return (
//     <>
//       <div className={`technology-img ${animateImg ? 'actives' : ''} `}>
//         {images ? <img src={images.portrait} alt="" /> : ''}
//       </div>
//     </>
//   )T

  
// }

// export default TechnologyImg


import React from 'react';

// Explicitly import technology images
import LaunchVehiclePortrait from '/public/assets/technology/image-launch-vehicle-portrait.jpg';
import SpaceCapsulePortrait from '/public/assets/technology/image-space-capsule-portrait.jpg';
import SpaceportPortrait from '/public/assets/technology/image-spaceport-portrait.jpg';
import LaunchVehicleLandscape from '/public/assets/technology/image-launch-vehicle-landscape.jpg';
import SpaceCapsuleLandscape from '/public/assets/technology/image-space-capsule-landscape.jpg';
import SpaceportLandscape from '/public/assets/technology/image-spaceport-landscape.jpg';

// Mapping technology names to images
const technologyImages = {
  'Launch Vehicle': LaunchVehiclePortrait,
  'Space Capsule': SpaceCapsulePortrait,
  'Spaceport': SpaceportPortrait,
};

function TechnologyImg({ filteredData = [], animateImg }) {

  return (

    <>
      {filteredData?.map((item, i) => (
        <div key={i}>
          <div className={`technology-img ${animateImg ? 'actives' : ''}`}>
            <img src={technologyImages[item.name]} alt={item.name} />
          </div>
        </div>
      ))}
    </>
  );
}

export default TechnologyImg;
