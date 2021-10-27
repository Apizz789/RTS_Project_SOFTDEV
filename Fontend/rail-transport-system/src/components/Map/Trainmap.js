import React, { memo } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link } from 'react-router-dom';
import './Trainmap.css'
export default memo(function Trainmap() {
  return (
    <Container align="center">
      <Row>
        <Col>แผนที่สถานีรถไฟฟ้า</Col>
        <Col>BTS,MRT and AIRPORTLINK</Col>
      </Row>
      <Row>
        <Col><img src='images/mapfull2564.jpg' style={{width: 600,height: 'auto'}}></img></Col>
        <Col>
          <Col>
              <Col>
                    <img src='images/BTS.jpg' style={{width: 280,height: 'auto'}}></img>
              </Col>
              <Col>
                    <img src='images/MRT.jpg'style={{width: 280,height: 'auto'}}></img>
              </Col>
              <Col>
                    <img src='images/airlink.jpg' style={{width: 280,height: 'auto'}}></img>
              </Col>
          </Col>
          <Col>วิธีดูหมายเลขสถานี</Col>
          <Row>
            <Row>
              <Col>
                <Row>
                  <Col xs="12" >
                    <Row>
                      <Col xs="2"><i className="fas fa-check-square"></i></Col>
                      <Col  style={{textAlign:"left"}}>ตัวอักษรภาษาอังกฤษแสดงชื่อของสายรถไฟ</Col>
                      <div style={{ borderTop: "5px solid #7f7df9 ", marginLeft: 15 ,width: 225}}></div>
                    </Row>
                  </Col>
                  <Col xs="12" >
                    <Row>
                      <Col xs="2"><i className="fas fa-check-square"></i></Col>
                      <Col  style={{textAlign:"left"}}>หมายเลขสถานีจะแสดงตามสายของรถไฟในแผนที่เส้นทางรถไฟใต้ดิน</Col>
                      <div style={{ borderTop: "5px solid #7f7df9 ", marginLeft: 15 ,width: 225}}></div>
                    </Row>
                  </Col>
                  <Col xs="12" >
                    <Row>
                      <Col xs="2"><i className="fas fa-check-square"></i></Col>
                      <Col  style={{textAlign:"left"}}>หมายเลขสถานีจะล้อมรอบด้วยวงกลมสีซึ่งแสดงถึงสีของสายรถไฟนั้น</Col>
                    </Row>
                  </Col>
                </Row>
              </Col>
              <Col xs="7">
                  <Row>
                      <Col><img src='images/btsgreen.png' style={{width: 150,height: 'auto'}}></img></Col>
                      <Col><img src='images/mrtblue.png' style={{width: 150,height: 'auto'}}></img></Col>
                  </Row>
                  <Row>
                      <Col><img src='images/btsgreenlight.png' style={{width: 150,height: 'auto'}}></img></Col>
                      <Col><img src='images/mrtpurple.png' style={{width: 150,height: 'auto'}}></img></Col>
                  </Row>
                  <Row>
                      <Col><img src='images/btsgold.png' style={{width: 150,height: 'auto'}}></img></Col>
                  </Row>
              </Col>
            </Row>
          </Row>
        </Col>
      </Row>
      <Link to='/calculate'><i class="far fa-arrow-alt-circle-down"></i>คำนวณระยะทางค่าโดยสาร<i class="far fa-arrow-alt-circle-down"></i></Link>
    </Container>
  );
});
