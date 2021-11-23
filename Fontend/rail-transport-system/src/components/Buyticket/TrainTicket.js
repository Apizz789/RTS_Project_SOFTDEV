import React, { useState } from "react";
import {
  Tab,
  Tabs,
  Button,
  ToggleButton,
  Row,
  Col,
  Container,
  Form,
  Modal,
} from "react-bootstrap";
import Dropdown from "react-bootstrap/Dropdown";
import { UserContextSTic } from "./UseContextSourceTic";
import { UserContextDTic } from "./UseContextDestTic";
import { UserContextCountTic } from "./UseContextCount";
import { UserContextDate } from "./UseContextDate";
import { useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import "./TrainTicket.css";


// console.log(exp_d.getFullYear().toString() + "-" + (exp_d.getMonth()+1).toString() + "-" + exp_d.getDate().toString())

function TrainTicket() {
  const { clickSTic, setclickSTic } = useContext(UserContextSTic);
  const { clickDTic, setclickDTic } = useContext(UserContextDTic);
  const history = useHistory();
  const { clickCountTic, setclickCountTic } = useContext(UserContextCountTic);
  const { Dates, setDates } = useContext(UserContextDate);
  const [values, setValues] = useState({DOB: ""});

  //const { clickDTic , setclickDTic } = useContext(UserContextD);
  const DropdownItem = () => {
    return (
      <div>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item) => (
          <Dropdown.Item
            key={item}
            onClick={() => {
              setclickCountTic(item);
            }}
          >
            {item}
          </Dropdown.Item>
        ))}
      </div>
    );
  };

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  const handleChange = (event) => {
    setValues({
        ...values,
        [event.target.name]: event.target.value,
    });
    setDates({
        ...values,
        [event.target.name]: event.target.value,
    });
  
}
  const d = new Date();

  

  return (
    <div >
      <center><h1>Ticket</h1></center>
      <Row style={{borderRadius:"20px",width:"auto",height:"23px",margin:"1px",backgroundColor:"#2F2F35",color:"#ffff",fontsize: "20px",fontWeight:"bold"}}/>
      <Container>
        <Col></Col>
        <Row>
          <Col
          style={{
            borderRadius: "20px",
            width: "250px",
            height: "500px",
            margin: "10px",
            backgroundColor: "#b2aa21",
          }}>
            <Row>
              <br/><br/><br/><br/><br/><br/><br/>
            </Row>
            <Row style={{ textAlign: "center" }} >

            <Link to="/show-ticket">
              
              <Button
                variant="outline-success"
                size="lg"
                style={{
                  width: "auto",
                  borderRadius: "12px",
                  margin: "20px",
                }}
              >
                <br></br>
            
            <h1>
              <i class="fas fa-ticket-alt"></i> My Ticket
            </h1>
            <hr />

              </Button>
            </Link>
            </Row> 
            <Row>
            <br/><br/><br/><br/><br/>
            </Row>       

          </Col>
          <Col
            style={{
              borderRadius: "20px",
              width: "500px",
              height: "500px",
              margin: "10px",
              backgroundColor: "#F1B674",
            }}
          >
            <br></br>
            <h1>
              <i class="fas fa-ticket-alt"></i> Buy Ticket
            </h1>
            <hr />
            <Row style={{ textAlign: "center" }}>
              
              <Link to="/select-sorce-ticket">
              
                <Button
                  //onClick={() => handleSetdefault()}
                  variant="outline-success"
                  size="lg"
                  style={{
                    width: "auto",
                    borderRadius: "12px",
                    margin: "20px",
                  }}
                >
                  {clickSTic}
                </Button>
              </Link>
              <h4><i class="fas fa-arrow-down"></i></h4>
              <Link to="/select-dest-ticket">
                <Button
                  //onClick={() => handleSetdefault()}
                  variant="outline-success"
                  size="lg"
                  style={{
                    width: "auto",
                    borderRadius: "12px",
                    margin: "20px",
                  }}
                >
                  {clickDTic}
                </Button>
              </Link>
            </Row>
            
            
            <Row style={{ textAlign: "center" }}>
     
              <Col style={{ textAlign: "right" }}>
                <h3 >จำนวนตั๋ว</h3>
              </Col>
              
            <Col style={{ textAlign: "left"}}>
             <Dropdown style={{position: "absolute", width: "300px"}}>
                  <Dropdown.Toggle variant="success">
                  {clickCountTic ? clickCountTic : "จำนวนตั๋ว"}
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <DropdownItem />
                  </Dropdown.Menu>
                </Dropdown>
              </Col>

             
                
                
            </Row>

            <br/>
            <Row style={{ textAlign: "center" }}>
              <input
                // className="inputlogin"
                type="date"
                data-date-inline-picker="true"
                name="DOB"
                min={d.getFullYear().toString() + "-" + (d.getMonth()+1).toString() + "-" + d.getDate().toString()}
                // max="2021-11-30"
                placeholder="dd-mm-yyyy"
                style={{borderRadius: "10px", width: "200px",margin: "auto"}}
                required
                value={values.DOB}
                // Date = {values.DOB}
                // setDate = {values.DOB}
                onChange={handleChange} 
              />

              <span>
                <Button
                  onClick={() => {
                    if (
                      clickSTic == "สถานีต้นทาง" ||
                      clickDTic == "สถานีปลายทาง" || clickSTic == clickDTic || clickCountTic == 0 
                    )
                      handleShow();
                    else {
                      history.push("/payment");
                      setDates(values.DOB)
                    }
                  }}
                  variant="outline-success"
                  size="lg"
                  style={{
                    width: "auto",
                    borderRadius: "12px",
                    margin: "20px",
                  }}
                >
                  ซื้อตั๋ว
                </Button>
              </span>
            </Row>
            <Modal show={show} onHide={handleClose} centered>
            <Modal.Header closeButton>
              <Modal.Title>warning</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              ไม่สามารถสั่งซื้อตั๋วได้ กรุณาเลือกข้อมูลให้ครบถ้วนและถูกต้อง
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                ตกลง
              </Button>
            </Modal.Footer>
            </Modal>
          </Col>
          
        </Row>
      </Container>
    </div>
  );
}
export default TrainTicket;
