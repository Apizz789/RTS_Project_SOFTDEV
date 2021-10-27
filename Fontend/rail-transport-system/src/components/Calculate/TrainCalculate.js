import React, { memo } from 'react'
import Dropdown from 'react-bootstrap/Dropdown'
import DropdownButton from 'react-bootstrap/DropdownButton'
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from 'react-bootstrap/Form'
import { Button } from '../Button/Button';
import { Link } from 'react-router-dom';
import "./TrainCalculate.css"
export default memo(function TrainCalculate() {
    return (
        <div className="calculate_test">
            <Container>
                <div>คำนวณค่าโดยสาร</div>
                <Row>
                    <Col>
                        <Col>
                            <Col class="origin_station">
                                สถานีต้นทาง
                                <Col xs="12">
                                    <Form.Select className="carrier_type">
                                        <option>เลือกผู้ให้บริการ</option>
                                        <option value="BTS">BTS</option>
                                        <option value="MRT">MRT</option>
                                        <option value="Airport Rail Link">Airport Rail Link</option>
                                    </Form.Select>
                                </Col>
                                <Col xs="12">
                                    <Form.Select className="station_type">
                                        <option>เลือกสถานี</option>
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                    </Form.Select>
                                </Col>
                            </Col>
                        </Col>
                        <Col>
                            <Col class="destination_station">
                                สถานีต้นทาง
                                <Col xs="12">
                                    <Form.Select className="carrier_type">
                                        <option>เลือกผู้ให้บริการ</option>
                                        <option value="BTS">BTS</option>
                                        <option value="MRT">MRT</option>
                                        <option value="Airport Rail Link">Airport Rail Link</option>
                                    </Form.Select>
                                </Col>
                                <Col xs="12">
                                    <Form.Select className="station_type">
                                        <option>เลือกสถานี</option>
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                    </Form.Select>
                                </Col>
                            </Col>
                        </Col>
                        <Col xs="12"><Button buttonStyle='btn--outline' buttonSize='btn--large'>คำนวณค่าโดยสาร</Button></Col>
                    </Col>
                    <Col>ตารางรถไฟฟ้า</Col>
                </Row>
            </Container>
        </div>
    )
})
