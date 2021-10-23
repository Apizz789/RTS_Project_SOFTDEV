import React from 'react';
import '../../App.css';
import Cards from '../Card/Cards';
import Footer from '../Footer(Contact)/Footer';
import TrainSection from '../Home/TrainSection';


function Home(){
    return(
        <>
            <TrainSection />
            <Cards />
            <Footer />
        </>
    )
}

export default Home;