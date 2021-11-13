import React from 'react'
import Image from 'react-bootstrap/Image'
import {InputGroup,FormControl,Col,Row,Button,Container,Form,Table} from 'react-bootstrap'


export default function TrainContactus() {
    return (
        <div style={{marginTop:"55px"}}>
<Container>
  <Row style={{textAlign:"center"}}>
    <h1>Contact Us</h1>
    <Col xs={5} md={3}>
    
    </Col>
    <Col class="row justify-content-md-center">
    <Image src="../images/img-2.jpg" roundedCircle />
    <p  align="center" >62011019 Apirak Oulis <br></br> Directer </p> 
    </Col>
    <Col class="row justify-content-md-center">
      <Image src="../images/img-5.jpg" roundedCircle />
      <p   align="center">62011019 Apirak Oulis <br></br> Directer </p> 
    </Col>
    <Col class="row justify-content-md-center">
    <Image src="../images/img-7.jpg" roundedCircle />
    <p align="center" size="20px">62011019 Apirak Oulis <br></br> Directer </p> 
    </Col>
  </Row>
  
  <Row style={{textAlign:"center"}}>
   
    <Col xs={5} md={3}>
    <Image src="../images/img-8.jpg" roundedCircle />
    <p align="center">62011019 Apirak Oulis <br></br> Directer </p> 
    </Col>
    <Col xs={5} md={3}>
      <Image src="../images/img-9.jpg" roundedCircle />
      <p align="center">62011019 Apirak Oulis <br></br> Directer </p> 
    </Col>
    <Col xs={5} md={3}>
    <Image src="../images/img-6.jpg" roundedCircle />
    <p p align="center">62011019 Apirak Oulis <br></br> Directer </p> 
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
			  <h1>Contact Info</h1>
			  <h2><i className="fa fa-phone" aria-hidden="true" /> Phone</h2>
			  <p>02-999-9999</p>
			  <h2><i className="fa fa-envelope" aria-hidden="true" /> Email</h2>
			  <p>info@railtransportsystems.com</p>
			  <h2><i className="fa fa-map-marker" aria-hidden="true" /> Address</h2>
			  <p>Bangkok, Thailand</p>
			  <ul>
				<li><a href="#"><i className="fa fa-facebook" aria-hidden="true" /></a></li>
				<li><a href="#"><i className="fa fa-twitter" aria-hidden="true" /></a></li>
				<li><a href="#"><i className="fa fa-google" aria-hidden="true" /></a></li>
				<li><a href="#"><i className="fa fa-instagram" aria-hidden="true" /></a></li>
			  </ul>
			</div>

			<div className="contact-in" align="center" margin="60px">
			  <h1>Send a Message</h1>
			  <form>
				<input type="text" placeholder="Full Name" className="contact-in-input" />
				<input type="text" placeholder="Email" className="contact-in-input" />
				<input type="text" placeholder="Subject" className="contact-in-input" />
				<textarea placeholder="Message" className="contact-in-textarea" defaultValue={""} />
				<input type="submit" defaultValue="SUBMIT" className="contact-in-btn" />
			  </form>
			</div>
			<div className="contact-in">
			  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d224345.83923192776!2d77.06889754725782!3d28.52758200617607!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd5b347eb62d%3A0x52c2b7494e204dce!2sNew%20Delhi%2C%20Delhi!5e0!3m2!1sen!2sin!4v1601968196548!5m2!1sen!2sin" width="100%" height="250" frameBorder={0} style={{border: 0}} allowFullScreen aria-hidden="false" tabIndex={0} />
			</div>
		  </div>
		</div>
</Container>


        </div>
    )
}


