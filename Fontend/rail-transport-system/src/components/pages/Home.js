import React from 'react';
import TrainSlidebar from '../Slidebar/TrainSlidebar';
import TrainInformation from '../Information/TrainInformation'
import '../../App.css'


function refreshPage(){
    window.scrollTo(0,0)
  }
function Home(){
    refreshPage()
    return(
        <>
            <TrainSlidebar/>
            <TrainInformation/>
        </>
    )
}

export default Home;