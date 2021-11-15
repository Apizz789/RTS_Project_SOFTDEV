import React from 'react'
import {InputGroup,FormControl,Col,Row,Button,Container,Form,Table} from 'react-bootstrap'
import { Link } from 'react-router-dom';
function TrainPayment() {
    function refreshPage(){
        window.scrollTo(0,0);
      }
    return (
        <div style={{marginTop:"10px",width:"100%"}}>
            <h1 align = "center">Payment</h1>
            <Row style={{borderRadius:"20px",width:"auto",height:"23px",margin:"1px",backgroundColor:"#0C9EA8",color:"#ffff",fontsize: "20px",fontWeight:"bold"}}>
            </Row>
            <br></br><br></br><br></br><br></br><br></br><br></br>
            <Container>
                <Col>
                </Col>
                

                <Col style={{textAlign:"center"}}>
                    <Col style={{borderRadius:"20px",width:"700px",height:"500px",margin:"10px",backgroundColor:"#dbf2f8"}}>
                    <br></br><h1><i class="fas fa-newspaper"></i> RTS News</h1><br></br>
                   <h3 align = "left">ชื่อผู้ใช้:________________________________</h3>
                   <h3>(ต้นทาง) ------------------- (ปลายทาง)</h3>
                   <h3 align = "left">ราคา:________________________________</h3>
                   <h3 align = "left">วันที่ซื้อ:________________________________</h3>
                   <h3 align = "left" >วันที่หมดอายุ:________________________________</h3>
                    
                    <Link to="/ticket">
                    <Button variant="outline-warning" style={{marginBottom:"5px",width:"100px",whiteSpace: 'pre', margin: '10px'}}>แก้ไข</Button>
                    </Link>

                    <Link to="/info">
                    <Button variant="outline-success" style={{marginBottom:"5px",width:"100px",whiteSpace: 'pre', margin: '10px'}}>ยืนยัน</Button>
                    </Link>

                    <Button variant="outline-danger" style={{marginBottom:"5px",width:"100px",whiteSpace: 'pre', margin: '10px'}}>ยกเลิก</Button>
  


                    </Col>
                
                </Col>
                <Col>
                </Col>


            </Container>

        </div>
    )
}

export default TrainPayment
