import React from 'react';
import '../../App.css';
import Cards from '../Card/Cards';
import TrainSection from '../Home/TrainSection';
import TrainSlidebar from '../Slidebar/TrainSlidebar';


function Home(){
    return(
        <>
            <TrainSlidebar />
            <TrainSection />
            
            <Cards />
        </>
    )
}

export default Home;