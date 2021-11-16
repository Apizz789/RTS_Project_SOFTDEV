import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import './TrainSlidebar.css';


function refreshPage(){
	window.scrollTo(0,0);
  }
  
  
function TrainSlidebar() {
    return (
        <div className='train-slidebar' style={{margin:"5px"}}>
            <Carousel  interval={6000}>
            <Carousel.Item >
                <img
                  className="d-block w-100"
                  src="../images/BN0.png?text=First slide&bg=373940"
                  alt="First slide"
                  style={{height:'50vh', width:'100vw',backgroundColor:'grey',objectFit:'cover',borderRadius:"20px"}}
                />
                <Carousel.Caption>
                <img src="../images/RTS=LOGO2.png" style={{height:'25vh',objectFit:'contain'}} /><br/><br/> <hr/>
                  <h3 >Rail Transport System</h3>
                  <p >WEB Application for everyone who want to travel, just enjoy with us.</p>
                </Carousel.Caption>
              </Carousel.Item>


              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="../images/BN2.png?text=First slide&bg=373940"
                  alt="First slide"
                  style={{height:'50vh', width:'100vw',backgroundColor:'grey',objectFit:'cover',borderRadius:"20px"}}
                />
                <Carousel.Caption>
                <img src="../images/BTS-Logo.png" style={{height:'25vh',objectFit:'contain'}} /> <br/><br/> <hr/>
                  <h3 >Bangkok Mass Transit System</h3>
                  <p >The Bangkok Mass Transit System, commonly known as the BTS or the Skytrain.</p>
                </Carousel.Caption>
              </Carousel.Item>


              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="../images/BN3.png?text=Second slide&bg=282c34"
                  alt="Second slide"
                  style={{height:'50vh', width:'100vw',backgroundColor:'grey',objectFit:'cover',borderRadius:"20px"}}
                />

                <Carousel.Caption>
                <img src="../images/MRT-Logo.png" style={{height:'25vh',objectFit:'contain'}}/>  <br/><br/> <hr/>
                  <h3 >Mass Rapid Transit</h3>
                  <p >The Metropolitan Rapid Transit or MRT is a mass rapid transit system serving the Bangkok Metropolitan Region in Thailand.</p>
                </Carousel.Caption>
              </Carousel.Item>


              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="../images/BN1.png?text=Third slide&bg=20232a"
                  alt="Third slide"
                  style={{height:'50vh', width:'100vw',backgroundColor:'grey',objectFit:'cover',borderRadius:"20px"}}
                />

                <Carousel.Caption>
                <img src="../images/ARL-Logo.png" style={{height:'25vh',objectFit:'contain'}}/> <br/><br/> <hr/>
                  <h3 >S.R.T. Electrified Train Co., Ltd.</h3>
                  <p >The Airport Rail Link (ARL) is an express and commuter rail line in Bangkok, Thailand.</p>
                </Carousel.Caption>
              </Carousel.Item>



            </Carousel>
        </div>
    
    
    )
}

export default TrainSlidebar
