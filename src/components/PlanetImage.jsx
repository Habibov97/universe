
function PlanetImage({ filteredData = [], animateImg }) {
  return (
      <>
          {filteredData?.map((item, i) => (
              <div key={i}>
                  <div className={`planet-img ${animateImg ? 'actives' : ''}`}>
                      <img src={item.images.png} alt={item.name} />
                  </div>
              </div>
          ))}
      </>
  );
}

export default PlanetImage;