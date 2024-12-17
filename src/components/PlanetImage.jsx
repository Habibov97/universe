
// function PlanetImage({ filteredData = [], animateImg }) {
//   return (
//       <>
//           {filteredData?.map((item, i) => (
//               <div key={i}>
//                   <div className={`planet-img ${animateImg ? 'actives' : ''}`}>
//                       <img src={item.images.png} alt={item.name} />
//                   </div>
//               </div>
//           ))}
//       </>
//   );
// }

// export default PlanetImage;


import EuropaImg from '/public/assets/destination/image-europa.png';
import MarsImg from '/public/assets/destination/image-mars.png';
import MoonImg from '/public/assets/destination/image-moon.png';
import TitanImg from '/public/assets/destination/image-titan.png';


const planetImages = {
    Europa: EuropaImg,
    Mars: MarsImg,
    Moon: MoonImg,
    Titan: TitanImg,
};

function PlanetImage({ filteredData = [], animateImg }) {
    return (
        <>
            {filteredData?.map((item, i) => (
                <div key={i}>
                    <div className={`planet-img ${animateImg ? 'actives' : ''}`}>
                        <img src={planetImages[item.name]} alt={item.name} />
                    </div>
                </div>
            ))}
        </>
    );
}

export default PlanetImage;
