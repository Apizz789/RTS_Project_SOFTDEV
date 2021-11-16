import React from 'react';
import TrainSlidebar from '../Slidebar/TrainSlidebar';
import TrainInformation from '../Information/TrainInformation'
import '../../App.css'
function Home(){
    return(
        <>
            <TrainSlidebar/>
            <TrainInformation/>
        </>
    )
}

export default Home;