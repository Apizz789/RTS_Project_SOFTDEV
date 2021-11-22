import React from "react";
import {
  InputGroup,
  FormControl,
  Col,
  Row,
  Button,
  Container,
  Form,
  Table,
  Modal,
  FloatingLabel,
} from "react-bootstrap";
import { Link, Redirect } from "react-router-dom";
import { UserContextSTic } from "../Buyticket/UseContextSourceTic";
import { UserContextDTic } from "../Buyticket/UseContextDestTic";
import { UserContextCountTic } from "../Buyticket/UseContextCount";
import { UserContextDate } from "../Buyticket/UseContextDate";
import { useState, useContext, useMemo } from "react";
import { useCookies } from "react-cookie";
import Dropdown from "react-bootstrap/Dropdown";
import axios from "axios";

// import { graph, dijkstra } from './distance_cal.js';
import { graph, dijkstra } from "../CalculationResult/distance_cal.js";
let ticket_id  = Math.floor(Math.random() * 100000000)

function TrainPayment() {

  const [username_cookie, setUsername_cookie, removeUsername_cookie] =
  useCookies(["username_tkn"]);

  const [picture, setPicture] = useState("");

  const [promtpay_preview, setPromtpay_preview] = useState("images/testpromptpay.jpg");

  const [bank_preview, setBank_preview] = useState("images/KBANK_LOGO.png");

  const { clickSTic, setclickSTic } = useContext(UserContextSTic);
  const { clickDTic, setclickDTic } = useContext(UserContextDTic);

  const Ans = useMemo(() => {
    if (clickSTic == "สถานีต้นทาง" || clickDTic == "สถานีปลายทาง") {
      return;
    } else {
      return dijkstra(graph, clickSTic.split(" ")[0], clickDTic.split(" ")[0]);
    }
  }, [clickSTic, clickDTic]);

  const [Count, setCount] = useState(0);
  const { clickCountTic, setclickCountTic } = useContext(UserContextCountTic);
  const { Date, setDate } = useContext(UserContextDate);

  function handlePromtpay(event) {
    if (event.target.files[0]) {
      setPicture(event.target.files[0]);
      setPromtpay_preview(URL.createObjectURL(event.target.files[0]));
    }
  }

  function handleBank(event) {
    if (event.target.files[0]) {
      setPicture(event.target.files[0]);
      setBank_preview(URL.createObjectURL(event.target.files[0]));
    }
  }

  function refreshPage() {
    window.scrollTo(0, 0);
  }
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);

  const handleClose1 = () => {
    setCount("รูปแบบการชำระเงิน");
    setPromtpay_preview("");
    setBank_preview("images/KBANK_LOGO.png");
    setPicture("");


    axios
      .post("https://us-central1-soft-dev-tutorial.cloudfunctions.net/Ticket", {
        Date_Buy: Date,
        Date_exp: Date+15,
        S_Source: clickSTic,
        S_Dest: clickDTic,
        ticket_id: ticket_id,
        user_customer: username_cookie["username_tkn"]
      })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      })
    

  };

  const handleClose2 = () => {
    setCount("รูปแบบการชำระเงิน");
    setBank_preview("images/KBANK_LOGO.png");
    setPromtpay_preview("images/testpromptpay.jpg");
    setPicture("");
  };

  const handleShow = () => {
    setShow(true);
  };



  const DropdownItem = () => {
    return (
      <div>
        {["Promptpay", "โอนผ่านธนาคาร", "บัตรเครดิต"].map((item) => (
          <Dropdown.Item
            key={item}
            onClick={() => {
              setCount(item);
              handleClose();
            }}
          >
            {item}
          </Dropdown.Item>
        ))}
      </div>
    );
  };

  if (Ans)
    return (
      <div style={{ marginTop: "10px", width: "100%" }}>
        <h1 align="center">Payment</h1>
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
        ></Row>
        <br></br>
        <br></br>
        <br></br>
        <Container style={{ marginLeft:"14%" }}>
          <Row>
           

            <Col style={{ textAlign: "center" }}>
              <Col
               style={{
            backgroundColor: "#93A9A3",
            borderRadius: "12px",
            width: "70vw",
            textAlign: "center",
            borderStyle: "solid",
            borderColor: "#7E7D81",
            margin: "auto",
          }}
              >
                <h1 style={{color:"#F9F9F8"}}>
                  <i class="fas fa-check-double" ></i> Confirm Order
                </h1>
                <hr />
                <br></br>
                <Col
                  style={{
                    backgroundColor: "#A4C0BF",
                    borderRadius: "12px",
                    width: "40vw",
                    margin: "auto",
                    color: "#F9F9F8",
                    borderStyle: "solid",
                    borderColor: "#7E7D81",
                    borderWidth: "5px",
                    margin: "auto",
                  }}
                >
                  <br></br>
                  <h4 align="center">
                    หมายเลขคำสั่งซื้อ : {ticket_id}
                  </h4>
                  <h4 align="center">ชื่อผู้ใช้ : {" " +username_cookie["username_tkn"]}</h4>
                 
                </Col>
                <br></br>
                <br></br>
                <h5
                  style={{
                    whiteSpace: "pre",
                    backgroundColor: "#F9F9F8",
                    borderRadius: "12px",
                    width: "40vw",
                    textAlign: "center",
                    marginLeft: "20px",
                    borderStyle: "solid",
                    borderColor: "#7E7D81",
                    borderWidth: "5px",
                    margin: "auto",
                  }}
                >
                   <h4 align="center">เส้นทางโดยสาร : </h4>{clickSTic} <br></br> <i class="fas fa-arrow-down"></i>
                  <br></br> {clickDTic}
                </h5>
                <br></br> <br />
                <Col
                  style={{
                    backgroundColor: "#A4C0BF",
                    borderRadius: "12px",
                    width: "40vw",
                    margin: "auto",
                    color: "#F9F9F8",
                    borderStyle: "solid",
                    borderColor: "#7E7D81",
                    borderWidth: "5px",
                    margin: "auto",
                  }}
                >
                  <h4 align="center">
                    ระยะเวลาที่ใช้โดยประมาณ : {Ans?.[2]} นาที
                  </h4>
                  <h4 align="center"> ราคา : {Ans?.[1]} บาท</h4>
                  <h4 align="center"> จำนวน : {clickCountTic} ชิ้น</h4>
                  <h4 align="center">
                    {" "}
                    ราคารวม : {Ans?.[1] * clickCountTic} บาท
                  </h4>
                </Col>
                <br></br>
                <br></br>
                <Col
                  style={{
                    backgroundColor: "#A4C0BF",
                    borderRadius: "12px",
                    width: "40vw",
                    margin: "auto",
                    color: "#F9F9F8",
                    borderStyle: "solid",
                    borderColor: "#7E7D81",
                    borderWidth: "5px",
                    margin: "auto",
                  }}
                >
                  <h4 align="center">
                    วันที่ซื้อ : {Date}
                  </h4>
                  <h4 align="center">
                    วันที่หมดอายุ : เหลือเวลา อีก 15 วัน
                  </h4>
                </Col>
                <Link to="/ticket">
                  <Button
                    variant="outline-warning"
                    style={{
                      marginBottom: "5px",
                      width: "100px",
                      whiteSpace: "pre",
                      margin: "10px",
                    }}
                  >
                    แก้ไข
                  </Button>
                </Link>
                <Button
                  onClick={() => handleShow()}
                  variant="outline-success"
                  style={{
                    marginBottom: "5px",
                    width: "100px",
                    whiteSpace: "pre",
                    margin: "10px",
                  }}
                >
                  ยืนยัน
                </Button>
                <Modal show={show} onHide={handleClose} centered>
                  <Modal.Header closeButton>เลือกวิธีการชำระเงิน</Modal.Header>
                  <Modal.Body style={{ margin: "auto" }}>
                    <h1>รูปแบบการชำระเงิน</h1>
                    <Dropdown
                      style={{
                        width: "100px",
                        textAlign: "center",
                        marginLeft: "25%",
                      }}
                    >
                      <Dropdown.Toggle
                        variant="success"
                        style={{ textAlign: "center" }}
                      >
                        {Count ? Count : "รูปแบบการชำระเงิน"}
                      </Dropdown.Toggle>
                      <Dropdown.Menu>
                        <DropdownItem />
                      </Dropdown.Menu>
                    </Dropdown>
                  </Modal.Body>
                  <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                      OK
                    </Button>
                  </Modal.Footer>
                </Modal>
                {/* ------------------------------------- PromptPay ------------------------------------------------------------------ */}
                <Modal
                  show={Count == "Promptpay" ? true : false}
                  onHide={handleClose2}
                  centered
                >
                  <Modal.Header closeButton>
                    รูปแบบการชำระเงิน : PromptPay{" "}
                  </Modal.Header>
                  <Modal.Body>
                    <center>
                      <img
                        src={promtpay_preview}
                        width="300"
                        height="auto"
                        style={{
                          textAlign: "center",
                          margin: "20px",
                          borderRadius: "30px",
                        }}
                      ></img>
                    </center>
                    <Form.Group
                      controlId="formFileMultiple"
                      className="mb-3"
                      onSubmit={handleClose1}
                    >
                      <Form.Label>Upload You Slip Payment</Form.Label>
                      <Form.Control
                        type="file"
                        multiple
                        name="picture"
                        onChange={handlePromtpay}
                      />
                    </Form.Group>
                  </Modal.Body>
                  <Modal.Footer>
                    <Link to="/show-ticket">
                    <Button
                      variant="secondary"
                      onClick={handleClose1}
                      type="submit"
                    >
                      OK
                    </Button>
                    </Link>
                  </Modal.Footer>
                </Modal>
                {/* ------------------------------------- โอนผ่านธนาคาร ------------------------------------------------------------------ */}
                <Modal
                  show={Count == "โอนผ่านธนาคาร" ? true : false}
                  onHide={handleClose2}
                  centered
                  style={{ width: "500", height: "auto", borderRadius: "30px" }}
                >
                  <Modal.Header closeButton>
                    รูปแบบการชำระเงิน : โอนผ่านธนาคาร
                  </Modal.Header>
                  <Modal.Body>
                    <Container>
                      <Col>
                        <Row style={{ textAlign: "center" }}>
                          <Col>
                            <h4>
                              <b>โอนผ่านธนาคาร</b>
                            </h4>
                            <center>
                              <img
                                src={bank_preview}
                                width="100"
                                height="auto"
                                style={{
                                  textAlign: "center",
                                  margin: "20px",
                                  borderRadius: "30px",
                                }}
                              ></img>
                            </center>
                            <h7 align="left" width="auto">
                              {" "}
                              ธนาคารกสิกรไทย{" "}
                            </h7>
                            <br></br>
                            <h7 align="left">
                              {" "}
                              ชื่อบัญชี : นายอภิรักษ์ อุลิศ{" "}
                            </h7>
                            <br></br>
                            <h7 align="left"> เลขที่บัญชี :040-325-288-3</h7>
                            <br></br>
                            <h7 align="left"> สาขาบัญชี : เดอะมอลล์บางกะปิ </h7>
                            <br></br>
                            <br></br>

                            <Form.Group
                              controlId="formFileMultiple"
                              className="mb-3"
                            >
                              <Form.Label>Upload You Slip Payment</Form.Label>
                              <Form.Control
                                type="file"
                                multiple
                                onChange={handleBank}
                              />
                            </Form.Group>
                          </Col>
                        </Row>
                        <Row>
                          <Button variant="outline-warning">แก้ไข</Button>
                          <Button variant="outline-info">ต่อไป</Button>
                          <Button variant="outline-danger">ยกเลิก</Button>
                        </Row>
                        <Row>3 test</Row>
                      </Col>
                    </Container>
                  </Modal.Body>
                  <Modal.Footer>
                  <Link to="/show-ticket">
                    <Button
                      variant="secondary"
                      onClick={handleClose1}
                      type="submit"
                    >
                      OK
                    </Button>
                    </Link>
                  </Modal.Footer>
                </Modal>
                {/* ------------------------------------- บัตรเครดิต ------------------------------------------------------------------ */}
                <Modal
                  show={Count == "บัตรเครดิต" ? true : false}
                  onHide={handleClose2}
                  centered
                  style={{ width: "500", height: "auto", borderRadius: "30px" }}
                >
                  <Modal.Header closeButton>
                    รูปแบบการชำระเงิน : บัตรเครดิต
                  </Modal.Header>
                  <Modal.Body>
                    <Container>
                      <Col>
                        <Row style={{ textAlign: "center" }}>
                          <Col>
                            <h4>
                              <b>บัตรเครดิต</b>
                            </h4>

                            <div
                              width="500"
                              height="300"
                              style={{
                                textAlign: "center",
                                margin: "20px",
                                borderRadius: "30px",
                                backgroundColor: "#0C9EA8",
                              }}
                            >
                              <p>...........................</p>
                            </div>

                            <FloatingLabel
                              controlId="floatingInput"
                              label="หมายเลขบัตร"
                              className="mb-3"
                            >
                              <Form.Control
                                type="email"
                                placeholder="name@example.com"
                              />
                            </FloatingLabel>
                            <FloatingLabel
                              controlId="floatingPassword"
                              label="CVC"
                            >
                              <Form.Control
                                type="password"
                                placeholder="Password"
                              />
                            </FloatingLabel>
                            <FloatingLabel
                              controlId="floatingPassword"
                              label="EXP"
                            >
                              <Form.Control
                                type="password"
                                placeholder="Password"
                              />
                            </FloatingLabel>

                            <FloatingLabel
                              controlId="floatingPassword"
                              label="Fname"
                            >
                              <Form.Control
                                type="password"
                                placeholder="Password"
                              />
                            </FloatingLabel>
                            <FloatingLabel
                              controlId="floatingPassword"
                              label="Lname"
                            >
                              <Form.Control
                                type="password"
                                placeholder="Password"
                              />
                            </FloatingLabel>
                            <br></br>
                          </Col>
                        </Row>
                      </Col>
                    </Container>
                  </Modal.Body>
                  <Modal.Footer>
                  <Link to="/show-ticket">
                    <Button
                      variant="secondary"
                      onClick={handleClose1}
                      type="submit"
                    >
                      OK
                    </Button>
                    </Link>
                  </Modal.Footer>
                </Modal>
                <Button
                  variant="outline-danger"
                  style={{
                    marginBottom: "5px",
                    width: "100px",
                    whiteSpace: "pre",
                    margin: "10px",
                  }}
                >
                  ยกเลิก
                </Button>
              </Col>
            </Col>

            <Col></Col>
          </Row>
        </Container>
      </div>
    );
  else {
    return <Redirect to="/ticket" />;
  }
}

export default TrainPayment;
