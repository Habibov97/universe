import React from 'react';

// Explicitly import technology images
import LaunchVehiclePortrait from '/public/assets/technology/image-launch-vehicle-portrait.jpg';
import SpaceCapsulePortrait from '/public/assets/technology/image-space-capsule-portrait.jpg';
import SpaceportPortrait from '/public/assets/technology/image-spaceport-portrait.jpg';


// Mapping technology names to images
const technologyImages = {
  'Launch vehicle': LaunchVehiclePortrait,
  'Space capsule': SpaceCapsulePortrait,
  'Spaceport': SpaceportPortrait,
};

function TechnologyImg({ filteredData, animateImg }) {
  if (!filteredData || !filteredData.name) return null; // Guard clause for invalid data

  const imgSrc = technologyImages[filteredData.name];

  return (
    <div className={`technology-img ${animateImg ? 'actives' : ''}`}>
      {imgSrc ? (
        <img src={imgSrc} alt={filteredData.name} />
      ) : (
        <p>Image not available</p>
      )}
    </div>
  );
}

export default TechnologyImg;
