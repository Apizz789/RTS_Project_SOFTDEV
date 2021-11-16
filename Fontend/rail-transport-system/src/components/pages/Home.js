import React from 'react';
import '../../App.css';
import Cards from '../Card/Cards';
import TrainSection from '../Home/TrainSection';
import TrainSlidebar from '../Slidebar/TrainSlidebar';
import TrainInformation from '../Information/TrainInformation'

function Home(){
    return(
        <>
            <TrainSlidebar/>
            <TrainInformation/>
        </>
    )
}

export default Home;