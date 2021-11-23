import React, { useState, useReducer } from "react";
import Image from "react-bootstrap/Image";
import axios from "axios";
import {
  InputGroup,
  FormControl,
  Col,
  Row,
  Button,
  Container,
  Form,
  Table,
} from "react-bootstrap";
let submit = false;
function refreshPage() {
  window.scrollTo(0, 0);
}

export default function TrainContactus() {
  const [values, setValues] = useState({
    email: "",
    name: "",
    subject: "",
    comment: "",
  });

  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmits = () => {
    // console.log('handleSubmit')
    submit = true;
    console.log(submit);
    if (submit === true) {
      // console.log("senttt")
      // console.log(values.email)
      // console.log(values.name)
      // console.log(values.subject)
      // console.log(values.comment)
      axios.post(
        "https://us-central1-soft-dev-tutorial.cloudfunctions.net/Reply",
        {
          Email: values.email,
          Name: values.name,
          Subject: values.subject,
          Comment: values.comment,
        }
      );
    }
  };

  return (
    <div style={{ marginTop: "10px", width: "100%" }}>
      
      <h1 align="center">Contact Us</h1>
      <Row style={{borderRadius:"20px",width:"auto",height:"23px",margin:"1px",backgroundColor:"#2F2F35",color:"#ffff",fontsize: "20px",fontWeight:"bold"}}/>
      <br/><br/>
      <Container>
        <Row style={{ textAlign: "center" }}>
          <Col>
            <Image
              src="../images/Minor.jpg"
              roundedCircle
              style={{ width: "300px" }}
            />
            <br></br>
            <br></br>
            <b>
              <p align="center">
                62010175 CHAWAKORN LAOKAEW <br></br> BACKEND{" "}
              </p>
            </b>
          </Col>
          <Col>
            <Image
              src="../images/Tum.jpg"
              roundedCircle
              style={{ width: "300px" }}
            />
            <br></br>
            <br></br>
            <b>
              <p align="center">
                62010142 CHATDANAI SINGTO <br></br> DATABASE{" "}
              </p>
            </b>
          </Col>
          <Col>
            <Image
              src="../images/Dink.jpg"
              roundedCircle
              style={{ width: "300px" }}
            />
            <br></br>
            <br></br>
            <b>
              <p align="center" size="20px">
                62010558 PIYAPHAT BOONTHAM <br></br> FRONTEND{" "}
              </p>{" "}
            </b>
          </Col>
        </Row>
        <br></br>
        <br></br>
        <Row style={{ textAlign: "center" }}>
          <Col>
            <Image
              src="../images/P.jpg"
              roundedCircle
              style={{ width: "300px" }}
            />
            <br></br>
            <br></br>
            <b>
              <p align="center">
                62010765 RAPEEPAT PENGTEE <br></br> BACKEND{" "}
              </p>
            </b>
          </Col>
          <Col>
            <Image
              src="../images/Aim.jpg"
              roundedCircle
              style={{ width: "300px" }}
            />
            <br></br>
            <br></br>
            <b>
              <p align="center">
                62010775 RINRAPHAT SUWATTHANAKORN <br></br> FRONTEND{" "}
              </p>{" "}
            </b>
          </Col>
          <Col>
            <Image
              src="../images/pluem.jpg"
              roundedCircle
              style={{ width: "300px" }}
            />
            <br></br>
            <br></br>
            <b>
              <p align="center">
                62011019 APIRAK OULIS <br></br> FRONTEND{" "}
              </p>
            </b>
          </Col>
        </Row>
      </Container>

      <Container>
        <div class="bodycontact">
          <div className="contact-wrap">
            <div className="contact-in" align="center">
              <Container
                style={{ backgroundColor: "#85D4BE", borderRadius: "10px" }}
              >
                <Row style={{ textAlign: "center" }}>
                  <h1>Contact Info</h1>
                  <Col>
                    <h2>
                      <i className="fa fa-phone" aria-hidden="true" /> Phone
                    </h2>
                    <p>02-999-9999</p>
                  </Col>
                  <Col>
                    <h2>
                      <i className="fa fa-envelope" aria-hidden="true" /> Email
                    </h2>
                    <p>info@railtransportsystems.com</p>
                  </Col>
                  <Col>
                    <h2>
                      <i className="fa fa-map-marker" aria-hidden="true" />{" "}
                      Address
                    </h2>
                    <p>Bangkok, Thailand</p>
                  </Col>
                </Row>
              </Container>
            </div>
            <br />
            <div className="contact-in" align="center" margin="60px">
              <Container
                style={{ backgroundColor: "#AEE6CB", borderRadius: "10px" }}
              >
                {/* <Row style={{ textAlign: "center" }}>
                  <h1
                    style={{ backgroundColor: "#96DFD8", borderRadius: "10px" }}
                  >
                    Send a Message
                  </h1>
                  <Col>
                    <input
                      type="text"
                      value={values.name}
                      name="name"
                      required
                      placeholder="Full Name"
                      className="contact-in-input"
                      onChange={handleChange}
                      style={{
                        borderRadius: "10px",
                        width: "250px",
                        margin: "10px",
                      }}
                    />
                    <br />

                    <input
                      type="text"
                      value={values.email}
                      name="email"
                      placeholder="Email"
                      className="contact-in-input"
                      onChange={handleChange}
                      style={{
                        borderRadius: "10px",
                        width: "250px",
                        margin: "10px",
                      }}
                    />
                    <br />

                    <input
                      type="text"
                      value={values.subject}
                      name="subject"
                      placeholder="Subject"
                      className="contact-in-input"
                      onChange={handleChange}
                      style={{
                        borderRadius: "10px",
                        width: "250px",
                        margin: "10px",
                      }}
                    />
                    <br />
                  </Col>

                  <Col>
                    <textarea
                      placeholder="Message"
                      value={values.comment}
                      name="comment"
                      className="contact-in-textarea"
                      defaultValue={""}
                      onChange={handleChange}
                      style={{
                        borderRadius: "10px",
                        width: "300px",
                        height: "125px",
                        margin: "10px",
                      }}
                    />
                    <br />
                    <Button
                      variant="outline-success"
                      type="submit"
                      onClick={handleSubmits}
					  
                    >
                      Success
                    </Button>{" "}
                  </Col>
                </Row> */}

                <form></form>
              </Container>
            </div>
			<br/>
            <div className="contact-in" style={{ borderRadius: "10px" }}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7751.731092026345!2d100.775403!3d13.72658900000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x50ff92d38918ed0d!2zMTPCsDQzJzM1LjUiTiAxMDDCsDQ2JzMxLjIiRQ!5e0!3m2!1sen!2sth!4v1636875622225!5m2!1sen!2sth"
                width="100%"
                height="250"
                frameBorder={0}
                style={{ border: 0 }}
                allowFullScreen
                aria-hidden="false"
                tabIndex={0}
              />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
