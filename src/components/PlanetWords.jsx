import React from 'react';

function PlanetWords({ filteredData, animate }) {
    return (
        <>
            {filteredData?.map((item, i) => (
                <div className={`allDetails ${animate ? 'animate' : ''}`} key={i}>
                    <div className='info-about-planet'>
                        <div className='title'>{item.name}</div>
                        <p className='description'>{item.description}</p>
                    </div>
                    <div className='distance'>
                        <div className='c1'>
                            <div className='avg'>Avg. distance</div>
                            <div className='avg-num'>{item.distance}</div>
                        </div>
                        <div className='c2'>
                            <div className='travel-time'>Est. travel time</div>
                            <div className='travel-time-num'>{item.travel}</div>
                        </div>
                    </div>
                </div>
            ))}
        </>
    );
}

export default PlanetWords;