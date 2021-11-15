import React from 'react'
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
import Dropdown from 'react-bootstrap/Dropdown';
import { UserContextSTic } from "./UseContextSourceTic";
import { useContext } from "react";
import { Link } from 'react-router-dom';

function TrainTicket() {
    const { clickSTic , setclickSTic } = useContext(UserContextSTic);
    //const { clickDTic , setclickDTic } = useContext(UserContextD);
    return (
        <div style={{marginTop:"55px",width:"100%"}}>
            <Row>
            <h1 align = "center">Ticket</h1>
            <Row className="text-center">
                <Col>
                    <Link to="/select-sorce-ticket">
                    <Button
                        //onClick={() => handleSetdefault()}
                        variant="outline-success"
                        size="lg"
                        style={{ width: "auto", borderRadius: "12px", margin: "20px" }}
                    >
                       {clickSTic}
                    </Button>
                    </Link>
                    <Button
                        //onClick={() => handleSetdefault()}
                        variant="outline-success"
                        size="lg"
                        style={{ width: "auto", borderRadius: "12px", margin: "20px" }}
                    >
                        สถานีปลายทาง
                    </Button>
                </Col>
                <Row className="text-center">
                    <Col>
                    <Dropdown>
                        <Dropdown.Toggle variant="success">
                            จำนวนตั๋ว
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                        <Dropdown.Item href="#">
                            1
                        </Dropdown.Item>
                        <Dropdown.Item href="#">
                            2
                        </Dropdown.Item>
                        <Dropdown.Item href="#">
                            3
                        </Dropdown.Item>
                        <Dropdown.Item href="#">
                            4
                        </Dropdown.Item>
                        <Dropdown.Item href="#">
                            5
                        </Dropdown.Item>
                        <Dropdown.Item href="#">
                            6
                        </Dropdown.Item>
                        <Dropdown.Item href="#">
                            7
                        </Dropdown.Item>
                        <Dropdown.Item href="#">
                            8
                        </Dropdown.Item>
                        <Dropdown.Item href="#">
                            9
                        </Dropdown.Item>
                        <Dropdown.Item href="#">
                            10
                        </Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                    </Col>
                </Row>
                <Row className="text-center">
                    <Col>
                    <Button
                        //onClick={() => handleSetdefault()}
                        variant="outline-success"
                        size="lg"
                        style={{ width: "auto", borderRadius: "12px", margin: "20px" }}
                    >
                        ซื้อตั๋ว
                    </Button>
                    </Col>
                </Row>

            </Row>
            </Row>
        </div>
    )
}
export default TrainTicket
