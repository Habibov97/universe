import React, { useState, useContext, useEffect } from 'react';
import PlanetDescription from './PlanetDescription';
import { AppContext } from "../App";
import PlanetImage from './PlanetImage';
import PlanetWords from './PlanetWords';

function DestinationWrapper() {
    const data = useContext(AppContext);
    const { destinations } = data;
    const [planet, setPlanet] = useState('Moon');
    const [animate, setAnimate] = useState(false);
    const [animateImg, setAnimateImg] = useState(false);
    const [filteredData, setFilteredData] = useState([]);
    const [initialLoad, setInitialLoad] = useState(false); 

    const rawData = planet ? destinations && destinations.filter(item => item.name === planet) : planet;

    useEffect(() => {
        if (initialLoad) {
            setAnimate(true);
            const timer = setTimeout(() => setAnimate(false), 3000);

            setAnimateImg(true);
            const timerr = setTimeout(() => setAnimateImg(false), 3000);

            const wordTimer = setTimeout(() => {
                setFilteredData(planet ? destinations && destinations.filter(item => item.name === planet) : planet);
            }, 1500);

            return () => {
                clearTimeout(timer);
                clearTimeout(timerr);
                clearTimeout(wordTimer);
            };
        } else {
            setInitialLoad(true);
            setFilteredData(planet ? destinations && destinations.filter(item => item.name === planet) : planet);
        }
    }, [planet]);

    return (
        <div>
            <div className='choose-destination'>
                <span>01</span> Pick your destination
            </div>
            <div className='wrapper2'>
                <PlanetImage animateImg={animateImg} filteredData={filteredData?.length > 0 ? filteredData : rawData} />
                <div className='desc'>
                    <PlanetDescription destinations={destinations} setPlanet={setPlanet} />
                    <PlanetWords animate={animate} filteredData={filteredData?.length > 0 ? filteredData : rawData} />
                </div>
            </div>
        </div>
    );
}

export default DestinationWrapper;