import React from 'react'
import {InputGroup,FormControl,Col,Row,Button,Container,Form,Table} from 'react-bootstrap'
import Spinner from 'react-bootstrap/Spinner'
import "./TrainInformation.css";

function TrainInformation() {
    return (
        <div className="Body_Info" style={{marginTop:"55px",width:"100%"}}>

            <br></br>
            <h1 align="center">Information</h1>
            <Row style={{borderRadius:"20px",width:"auto",height:"20px",margin:"10px",backgroundColor:"#06a547"}}>
                <marquee>
                สวัสดีการเคหะ สวัสดีการเคหะ สวัสดีการเคหะ สวัสดีการเคหะ สวัสดีการเคหะ
                </marquee>

                </Row>
            <Container>
            
                <Row style={{textAlign:"center"}}>
                    <Col style={{borderRadius:"20px",width:"600px",height:"500px",margin:"10px",backgroundColor:"#fed46e"}}>
                    <br></br><h1><i class="fas fa-newspaper"></i> RTS News</h1><br></br>
                    </Col>
                    <Col style={{borderRadius:"20px",width:"600px",height:"500px",margin:"10px",backgroundColor:"#fad4ae"}}>
                    <br></br><h1><i class="fas fa-info"></i> Infomation</h1><br></br>

                    <marquee  behavior="scroll" direction="up" scrollamount="2" style={{textAlign:"center", border:"2"}}>
                    สวัสดีการเคหะ สวัสดีการเคหะ สวัสดีการเคหะ สวัสดีการเคหะ<br></br>
                    สวัสดีการเคหะ สวัสดีการเคหะ สวัสดีการเคหะ สวัสดีการเคหะ<br></br>
                    สวัสดีการเคหะ สวัสดีการเคหะ สวัสดีการเคหะ สวัสดีการเคหะ<br></br>
                    สวัสดีการเคหะ สวัสดีการเคหะ สวัสดีการเคหะ สวัสดีการเคหะ<br></br>
                    สวัสดีการเคหะ สวัสดีการเคหะ สวัสดีการเคหะ สวัสดีการเคหะ<br></br>
                    สวัสดีการเคหะ สวัสดีการเคหะ สวัสดีการเคหะ สวัสดีการเคหะ
                   </marquee>
                   <br></br>
                    </Col>
                    <Col style={{borderRadius:"20px",width:"600px",height:"500px",margin:"10px",backgroundColor:"#ff7b7b",}}>
                    <br></br><h1><i class="fas fa-comments"></i> RTS Q&A</h1><br></br>
                    
                    <h7> รถไฟฟ้าบีทีเอส เปิดให้บริการ เปิด - ปิด เวลาใด </h7>
                    <h7> รถไฟฟ้าบีทีเอสมีเส้นทางการให้บริการกี่สาย </h7>
                    <h7> เมื่อทำสิ่งของตกลงในรางรถไฟฟ้า ผู้โดยสารควรทำอย่างไร </h7>
                    <h7> สามารถนำสัตว์เลี้ยงเข้ารถไฟฟ้าได้ไหม </h7>
                    <h7> รถไฟบีทีเอสมีลิฟต์ให้บริการที่สถานีใดบ้าง </h7>
                    <h7> ศูนย์ข้อมูลนักท่องเที่ยวให้บริการเกี่ยวกับอะไรบ้าง </h7>

                    </Col>
                </Row>

                <Row>
                    <Col style={{borderRadius:"20px",width:"600px",height:"500px",margin:"10px",backgroundColor:"#a6e3e9",}}>
                    <br></br><h1><i class="fas fa-map-marked-alt"></i> RTS MAP</h1><br></br>
                    <div style={{textAlign:"center"}}>
                    <img src="images/mapfull2564.jpg" width = '600' height='350' /> 
                    </div>
                    </Col>

                    <Col style={{borderRadius:"20px",margin:"10px",backgroundColor:"#95e3bb",}}>
                    <br></br><h1><i class="fas fa-subway"></i> ALL TRAIN</h1><br></br>
                    <div style={{textAlign:"center"}}>
                    <Spinner animation="grow" variant="dark" size="sm" />___________________________________<br></br>
                    <Spinner animation="grow" variant="dark" size="sm" />___________________________________<br></br>
                    <Spinner animation="grow" variant="dark" size="sm" />___________________________________<br></br>
                    <Spinner animation="grow" variant="dark" size="sm" />___________________________________<br></br>
                    <Spinner animation="grow" variant="dark" size="sm" />___________________________________<br></br>
                    <Spinner animation="grow" variant="dark" size="sm" />___________________________________<br></br>
                    <Spinner animation="grow" variant="dark" size="sm" />___________________________________<br></br>
                    <Spinner animation="grow" variant="dark" size="sm" />___________________________________<br></br>
                    <Spinner animation="grow" variant="dark" size="sm" />___________________________________<br></br>
                    <Spinner animation="grow" variant="dark" size="sm" />___________________________________<br></br>
                    <Spinner animation="grow" variant="dark" size="sm" />___________________________________<br></br>
                    <Spinner animation="grow" variant="dark" size="sm" />___________________________________
                   
                    </div>
                    
                    </Col>

                </Row>
                
                <Row>
                    <Col style={{borderRadius:"20px",margin:"10px",backgroundColor:"#dcceed",width:"600px",height:"600px"}}>
                        <br></br><h1><i class="fas fa-address-card"></i> RTS MEMBERSHIPS</h1><br></br>
                    </Col>


                </Row>
            </Container>
           
           
           
           <div> 
            
           </div>
      

            
            <br></br>
        </div>
    )
}

export default TrainInformation
