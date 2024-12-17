// import React from 'react';

// function CrewImg({ filteredData = {}, animateImg }) {
//     const { images } = filteredData || {};

//     return (
//         <div>
//             <div className={`crew-img ${animateImg ? 'actives' : ''}`}>
//                 {images ? <img src={images.png} alt='CrewMembers' /> : ''}
//             </div>
//         </div>
//     );
// }

// export default CrewImg;


import React from 'react';

// Explicitly import crew images
import AnoushehImg from '/public/assets/crew/image-anousheh-ansari.png';
import DouglasImg from '/public/assets/crew/image-douglas-hurley.png';
import MarkImg from '/public/assets/crew/image-mark-shuttleworth.png';
import VictorImg from '/public/assets/crew/image-victor-glover.png';

// Mapping role names to images
const crewImages = {
  'Anousheh Ansari': AnoushehImg,
  'Douglas Hurley': DouglasImg,
  'Mark Shuttleworth': MarkImg,
  'Victor Glover': VictorImg,
};

function CrewImg({ filteredData = {}, animateImg }) {
  const { name } = filteredData || {}; // Name determines the image source
  const imgSrc = name ? crewImages[name] : null;

  return (
    <div>
      <div className={`crew-img ${animateImg ? 'actives' : ''}`}>
        {imgSrc ? <img src={imgSrc} alt={name} /> : <p>No image available</p>}
      </div>
    </div>
  );
}

export default CrewImg;
