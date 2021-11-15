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
                <img src="../images/RTS=LOGO2.png" style={{height:'20vh',objectFit:'contain'}} /> 
                  <h3 >Bangkok Mass Transit System</h3>
                  <p >Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
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
                <img src="../images/BTS-Logo.png" style={{height:'20vh',objectFit:'contain'}} /> 
                  <h3 >Bangkok Mass Transit System</h3>
                  <p >Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
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
                <img src="../images/MRT-Logo.png" style={{height:'20vh',objectFit:'contain'}}/>  
                  <h3 >Mass Rapid Transit</h3>
                  <p >Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
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
                <img src="../images/ARL-Logo.png" style={{height:'20vh',objectFit:'contain'}}/> 
                  <h3 >S.R.T. Electrified Train Co., Ltd.</h3>
                  <p >Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                </Carousel.Caption>
              </Carousel.Item>



            </Carousel>
        </div>
    
    
    )
}

export default TrainSlidebar
