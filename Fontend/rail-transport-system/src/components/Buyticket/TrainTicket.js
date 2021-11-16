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
import { useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import "./TrainTicket.css";

function TrainTicket() {
  const { clickSTic, setclickSTic } = useContext(UserContextSTic);
  const { clickDTic, setclickDTic } = useContext(UserContextDTic);
  const history = useHistory();
  const { clickCountTic, setclickCountTic } = useContext(UserContextCountTic);

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

  return (
    <div style={{ marginTop: "10px" }}>
      {/* <h1 align="center">Ticket</h1>
      <Row
        style={{
          borderRadius: "20px",
          width: "auto",
          height: "23px",
          margin: "1px",
          backgroundColor: "#2F2F35",
          color: "#ffff",
          fontsize: "20px",
          fontWeight: "bold",
        }}
      ></Row> */}
      <Container>
        <Col></Col>
        <Row>
          <Col></Col>
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
              <i class="fas fa-ticket-alt"></i> Ticket
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
            
            <div
              style={{
                marginLeft: "20%" ,
                display: "flex",
              }}
            >
            <h3 style={{marginInline:"10px" }}>จำนวนตั๋ว</h3>
              <div>
                <Dropdown style={{position: "absolute"}}>
                  <Dropdown.Toggle variant="success">
                    {clickCountTic ? clickCountTic : "จำนวนตั๋ว"}
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <DropdownItem />
                  </Dropdown.Menu>
                </Dropdown>
              </div>
            </div>
            <br/>
            <Row style={{ textAlign: "center" }}>
              <input
                // className="inputlogin"
                type="date"
                data-date-inline-picker="true"
                name="DOB"
                min="2021-11-17"
                // max="2021-11-30"
                placeholder="dd-mm-yyyy"
                style={{borderRadius: "10px", width: "200px",margin: "auto"}}
                required

                // value={values.DOB}
                // onChange={handleChange}
              />

              <span>
                <Button
                  onClick={() => {
                    if (
                      clickSTic == "สถานีต้นทาง" ||
                      clickDTic == "สถานีปลายทาง" || clickSTic == clickDTic
                    )
                      handleShow();
                    else {
                      history.push("/payment");
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
              ไม่สามารถสั่งซื้อตั๋วได้ กรุณาเลือกข้อมูลให้ครบถ้วน
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                ตกลง
              </Button>
            </Modal.Footer>
            </Modal>
          </Col>
          <Col></Col>
        </Row>
      </Container>
    </div>
  );
}
export default TrainTicket;
