import React, { memo } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import './Trainmap.css'
export default memo(function Trainmap() {
  return (
    <Container align="center">
      <Row>
        <Col>แผนที่สถานีรถไฟฟ้า</Col>
        <Col>BTS,MRT and AIRPORTLINK</Col>
      </Row>
      <Row>
        <Col>รูปแผนที่</Col>
        <Col>
          <Col>
              <Col>
                    <img src='images/BTS.jpg'></img>
              </Col>
              <Col>
                    <img src='images/MRT.jpg'></img>
              </Col>
              <Col>
                    <img src='images/airlink.jpg'></img>
              </Col>
          </Col>
          <Col>วิธีดูหมายเลขสถานี</Col>
          <Row>
            <Row>
              <Col>
                <Row>
                  <Col xs="12" >
                    <i class="fas fa-check-square"></i>
                    ตัวอักษรภาษาอังกฤษแสดงชื่อของสายรถไฟ
                  </Col>
                  <Col xs="12">
                    <i class="fas fa-check-square"></i>
                    หมายเลขสถานีจะแสดงตามสายของรถไฟในแผนที่เส้นทางรถไฟใต้ดิน
                  </Col>
                  <Col xs="12">
                    <i class="fas fa-check-square"></i>
                    หมายเลขสถานีจะล้อมรอบด้วยวงกลมสีซึ่งแสดงถึงสีของสายรถไฟนั้น
                  </Col>
                </Row>
              </Col>
              <Col>
                  <Row>
                      <Col>BTS(สีลม)</Col>
                      <Col>MRT(สายสีน้ำเงิน)</Col>
                  </Row>
                  <Row>
                      <Col>BTS(สายสีเขียวอ่อน)</Col>
                      <Col>MRT(สีม่วง)</Col>
                  </Row>
                  <Row>
                      <Col>BTS(สายสีทอง)</Col>
                      <Col>ART</Col>
                  </Row>
              </Col>
            </Row>
          </Row>
        </Col>
      </Row>
    </Container>
  );
});
