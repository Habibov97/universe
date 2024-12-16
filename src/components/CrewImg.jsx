import React from 'react';

function CrewImg({ filteredData = {}, animateImg }) {
    const { images } = filteredData || {};

    return (
        <div>
            <div className={`crew-img ${animateImg ? 'actives' : ''}`}>
                {images ? <img src={images.png} alt='CrewMembers' /> : ''}
            </div>
        </div>
    );
}

export default CrewImg;