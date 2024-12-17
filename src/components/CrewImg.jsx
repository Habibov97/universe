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

function CrewImg({ filteredData = [], animateImg }) {


  return (
    <>
      {filteredData?.map((item, i) => (
        <div key={i}>
          <div className={`crew-img ${animateImg ? 'actives' : ''}`}>
            <img src={crewImages[item.name]} alt={item.name} />
          </div>
        </div>
      ))}
    </>
  );
}

export default CrewImg;
