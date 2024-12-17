
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

function TechnologyImg({ data, animateImg }) {
  const { name } = data || {}; // Name determines the image source
  const imgSrc = name ? technologyImages[name] : null;

  return (
    <div>
      <div className={`technology-img ${animateImg ? 'actives' : ''}`}>
        {imgSrc ? <img src={imgSrc} alt={name} /> : <p>No image available</p>}
      </div>
    </div>
  );
}

export default TechnologyImg;
