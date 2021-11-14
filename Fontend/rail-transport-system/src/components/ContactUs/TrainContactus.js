import React from 'react'
import Image from 'react-bootstrap/Image'
import {InputGroup,FormControl,Col,Row,Button,Container,Form,Table} from 'react-bootstrap'

function refreshPage(){
	window.scrollTo(0,0);
  }
  

export default function TrainContactus() {
    return (
        <div style={{marginTop:"55px"}}>
		<br></br><h1>Contact Us</h1><br></br>
<Container>
  <Row style={{textAlign:"center"}}>
   
    <Col xs={5} md={3}>
    
    </Col>
    <Col class="row justify-content-md-center">
    <Image src="../images/Minor.jpg" roundedCircle style={{width:"auto"}}/>
    <p  align="center" >62010175	CHAWAKORN LAOKAEW <br></br> BACKEND </p> 
    </Col>
    <Col class="row justify-content-md-center">
      <Image src="../images/Tum.jpg" roundedCircle style={{width:"auto"}} />
      <p   align="center">62010142 CHATDANAI SINGTO <br></br> DATABASE </p> 
    </Col>
    <Col class="row justify-content-md-center">
    <Image src="../images/Dink.jpg" roundedCircle style={{width:"auto"}}/>
    <p align="center" size="20px">62010558 PIYAPHAT BOONTHAM <br></br> FONTEND </p> 
    </Col>
  </Row>
  
  <Row style={{textAlign:"center"}}>
   
    <Col xs={5} md={3}>
    <Image src="../images/P.jpg" roundedCircle style={{width:"auto"}}/>
    <p align="center">62010765 RAPEEPAT PENGTEE <br></br> BACKEND </p> 
    </Col>
    <Col xs={5} md={3}>
      <Image src="../images/Aim.jpg" roundedCircle style={{width:"auto"}}/>
      <p align="center">62010775 RINRAPHAT SUWATTHANAKORN <br></br> FONTEND </p> 
    </Col>
    <Col xs={5} md={3}>
    <Image src="../images/pluem.jpg" roundedCircle style={{width:"auto"}}/>
    <p p align="center">62011019 APIRAK OULIS <br></br> FONTEND </p> 
    </Col>
  </Row>

</Container>

<Container>
<div class="bodycontact">
		  <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
		  <meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1, user-scalable=no" />
		  <title>CSS Responsive Contact Form With Google Map</title>
		  <link href="css/style.css" rel="stylesheet" type="text/css" />
		  <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" crossOrigin="anonymous" />
		  <div className="contact-wrap">

			<div className="contact-in" align="center">
			<Container>
			<Row style={{textAlign:"center"}}>
			<h1>Contact Info</h1>
			<Col>
			
			<h2><i className="fa fa-phone" aria-hidden="true" /> Phone</h2>
			  <p>02-999-9999</p>
			</Col>
			<Col>
			<h2><i className="fa fa-envelope" aria-hidden="true" /> Email</h2>
			  <p>info@railtransportsystems.com</p>
			</Col>
			<Col>
			<h2><i className="fa fa-map-marker" aria-hidden="true" /> Address</h2>
			  <p>Bangkok, Thailand</p>
			</Col>
			  
			  
			  
			</Row>
			</Container>
			</div>

			<div className="contact-in" align="center" margin="60px">
			  <h1>Send a Message</h1>
			  <Container>
				<Row style={{textAlign:"center"}}>
					<Col>
					<Row style={{backgroundColor:"red"}}>
					<input type="text" placeholder="Full Name" className="contact-in-input" />
					</Row>

					<Row>
					<input type="text" placeholder="Email" className="contact-in-input" />
					</Row>

					<Row>
					<input type="text" placeholder="Subject" className="contact-in-input" />
					</Row>

					</Col>
					
					<Col>
					<textarea placeholder="Message" className="contact-in-textarea" defaultValue={""} />
					<input type="submit" defaultValue="SUBMIT" className="contact-in-btn" />
					</Col>



				</Row>

			  <form>
				
				
				
				
				
			  </form>
			  </Container>
			</div>
			<div className="contact-in">
			  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7751.731092026345!2d100.775403!3d13.72658900000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x50ff92d38918ed0d!2zMTPCsDQzJzM1LjUiTiAxMDDCsDQ2JzMxLjIiRQ!5e0!3m2!1sen!2sth!4v1636875622225!5m2!1sen!2sth" width="100%" height="250" frameBorder={0} style={{border: 0}} allowFullScreen aria-hidden="false" tabIndex={0} />
			</div>
		  </div>
		</div>
</Container>


        </div>
    )
}


