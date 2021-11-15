import React from 'react'
import {InputGroup,FormControl,Col,Row,Button,Container,Form,Table,Accordion,Modal} from 'react-bootstrap'
import Spinner from 'react-bootstrap/Spinner'
import "./TrainInformation.css";

function TrainInformation() {
   
  
    return (
        <div className="Body_Info" style={{marginTop:"10px",width:"100%"}}>            
            <h1 align="center">Information</h1>
            <Row style={{borderRadius:"20px",width:"auto",height:"23px",margin:"1px",backgroundColor:"#0C9EA8",color:"#ffff",fontsize: "20px",fontWeight:"bold"}}>
            </Row>
            <Container>
            
                <Row style={{textAlign:"center"}}>
                    <Col style={{borderRadius:"20px",width:"600px",height:"700px",margin:"10px",backgroundColor:"#fed46e", textAlign:"left"}}>
                    <br></br><h1><i class="fas fa-newspaper"></i> RTS News</h1><br></br>

                    <a className="ahover" href="/home"><i class="fas fa-envelope-open"></i> [BTS]  - ประกาศ !!! ปิดสถานี สายสีเขียวอ่อน E04 อโศก Asok : Update 15/11/2021</a>  <br></br>
                    <a className="ahover" href="/home"><i class="fas fa-envelope-open"></i> [MRT] - ประกาศ !!! ปิดสถานี สายสีน้ำเงิน BL21 เพชรบุรี Phetchaburi : Update 15/11/2021</a>  <br></br>
                    <a className="ahover" href="/home"><i class="fas fa-envelope-open"></i> [ARL] - ประกาศ !!! ปิดสถานี สายเชื่อมท่าอากาศยาน A06 มักกะสัน Makkasan : Update 15/11/2021</a>  <br></br>
                    <a className="ahover" href="/home"><i class="fas fa-envelope-open"></i> [BTS] - ประกาศ !!! แจ้งจับ นายบีทีเอส ข้อหาแสดงละครบนรางรถไฟ  : Update 14/11/2021</a>  <br></br>
                    <a className="ahover" href="/home"><i class="fas fa-envelope-open"></i> [MRT] - ทั่วไป !!! ชี่นชม นายเออาร์แอล หลังคว้ารางวัลนักเดินทางดีเด่น  : Update 14/11/2021</a>  <br></br>
                    <a className="ahover" href="/home"><i class="fas fa-envelope-open"></i> [ARL] - ทั่วไป !!! นายเอ็มอาร์ที ไปกองฉลากไม่ทัน เหตุจากตกขบวนรถ  : Update 12/11/2021</a>  <br></br>
                    . <br></br>
                    .  <br></br>
                    {/* <Button variant="primary" onClick={handleShow}>
                        Launch demo modal
                    </Button>

                    <Modal show={show} onHide={handleClose}>
                        <Modal.Header closeButton>
                        <Modal.Title>Modal heading</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
                        <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Close
                        </Button>
                        <Button variant="primary" onClick={handleClose}>
                            Save Changes
                        </Button>
                        </Modal.Footer>
                    </Modal> */}
                    
                    

                    </Col>
                    <Col style={{borderRadius:"20px",width:"600px",height:"700px",margin:"10px",backgroundColor:"#fad4ae"}}>
                    <br></br><h1><i class="fas fa-info"></i> Infomation</h1><br></br>

                    <marquee  behavior="scroll" direction="up" scrollamount="2" style={{textAlign:"left", border:"2"}}>

                    <i class="fas fa-comment-dots"></i> RTS ขอต้อนรับทุกท่านเข้าสู่ โลกแห่งการไร้พรหมแดน <br></br>
                    ที่จะพาทุกคนสะดวกและง่ายต่อการเดินทาง <br></br>
                    หากมีข้อสงสัย ติดต่อเรราได้ที่ <b>Call center 02-999-9999</b> <br></br>
                    และช่องทางออนไลน์ <b>info@railtransportsystems.com</b><br></br><br></br>

                    <i class="fas fa-comment-dots"></i> เธอห่วงใครก็ไม่เท่าเราห่วงเธอ แต่ RTS ห่วงคุณเสมอ<br></br>
                    เพื่อความปลอดภัยของผู้ใช้งาน กรุณาเก็บรหัสผ่านไว้ อย่าให้ใครเป็นการส่วนตัว ไม่บอกต่อคนอื่น ไม่ว่าจะเจตนาอย่างไร<br></br>
                     <br></br>
                    ด้วยความปรารถนาจาก RTS<br></br><br></br>

                    <i class="fas fa-comment-dots"></i> หน้าร้อนมันหนาว หน้าเรามันฟิน RTS พาคุณไปดื่มด่ำกับ<br></br>
                    โปรโมชั่นที่ร้อนแรงในวินาทีนี้ กับโปรโมชั่น หน้าหนาวสุดฟิน มาฟินกับ RTS <br></br><br></br> 
                    ฟินกับส่วนลดการเดินทาง <b>RTS ลดให้คุณทันที 10%</b><br></br> 
                    เมื่อซื้อตั๋วกับทางเรา <b>วันนี้ถึง 31 ธันวาคม ศกนี้</b><br></br><br></br>

                    <center><img src="images/RTS-LOGO.png" width = '100' height='100'style={{textAlign:"center"}} /><br></br> <big><big><big><b>RTS</b></big></big></big></center> 


                   </marquee>
                   <br></br>
                    </Col>
                    <Col style={{borderRadius:"20px",width:"600px",height:"700px",margin:"10px",backgroundColor:"#ff7b7b",}}>
                    <br></br><h1><i class="fas fa-comments"></i> RTS Q&A</h1><br></br>

                    <Accordion defaultActiveKey="0">
                        <Accordion.Item eventKey="0">
                            <Accordion.Header>ระบบ RTS คืออะไร</Accordion.Header>
                            <Accordion.Body>
                            55555555555555555555
                            </Accordion.Body>
                        </Accordion.Item>

                        <Accordion.Item eventKey="1">
                            <Accordion.Header>รถไฟฟ้าในระบบ RTS มีเส้นทางการให้บริการกี่สาย</Accordion.Header>
                            <Accordion.Body>
                            555555555555555555555
                            </Accordion.Body>
                        </Accordion.Item>

                        <Accordion.Item eventKey="2">
                            <Accordion.Header>ฉันจะทราบได้อย่างไร ว่าฉันจะเดินทางไปยังจุดหมายได้ถูกต้อง</Accordion.Header>
                            <Accordion.Body>
                            555555555555555555555
                            </Accordion.Body>
                        </Accordion.Item>

                        <Accordion.Item eventKey="3">
                            <Accordion.Header>ระบบสมาชิก RTS คืออะไร ทำอะไรได้บ้าง </Accordion.Header>
                            <Accordion.Body>
                            555555555555555555555
                            </Accordion.Body>
                        </Accordion.Item>

                        <Accordion.Item eventKey="4">
                            <Accordion.Header>ฉันจะซื้อตั๋วผ่านระบบ RTS ได้อย่างไร</Accordion.Header>
                            <Accordion.Body>
                            555555555555555555555
                            </Accordion.Body>
                        </Accordion.Item>

                        <Accordion.Item eventKey="5">
                            <Accordion.Header>หากมีข้อสงสัยเกี่ยวกับระบบ ฉันจะติดต่อใคร</Accordion.Header>
                            <Accordion.Body>
                            555555555555555555555
                            </Accordion.Body>
                        </Accordion.Item>

                    </Accordion>
                

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
                        
                        <Col>
                        sdfsdfsdf
                        </Col>
                        
            
                        <Col>
                            <div style={{textAlign:"left"}}>
                            <Spinner animation="grow" variant="dark" size="sm" /> [BTS] - Bangkok Mass Transit System <i class="fas fa-caret-right"></i> สายสีเขียวอ่อน Light Green line<br></br>
                            <Spinner animation="grow" variant="dark" size="sm" /> [BTS] - Bangkok Mass Transit System <i class="fas fa-caret-right"></i> สายสีเขียวเข้ม Dark Green line<br></br>
                            <Spinner animation="grow" variant="dark" size="sm" /> [BTS] - Bangkok Mass Transit System <i class="fas fa-caret-right"></i> สายสีทอง Golden Line<br></br>
                            <Spinner animation="grow" variant="dark" size="sm" /> [BTS] - Bangkok Mass Transit System <i class="fas fa-caret-right"></i> สายสีเหลือง Yellow Line<br></br>
                            <Spinner animation="grow" variant="dark" size="sm" /> [BTS] - Bangkok Mass Transit System <i class="fas fa-caret-right"></i> สายสีชมพู Pink Line<br></br>
                            <Spinner animation="grow" variant="dark" size="sm" /> [MRT] - Mass Rapid Transit <i class="fas fa-caret-right"></i> สายสีน้ำเงิน Blue Line<br></br>
                            <Spinner animation="grow" variant="dark" size="sm" /> [MRT] - Airport Rail Link <i class="fas fa-caret-right"></i> สายสีม่วง Purple Line<br></br>
                            <Spinner animation="grow" variant="dark" size="sm" /> [MRT] - Mass Rapid Transit <i class="fas fa-caret-right"></i> สายสีส้ม Orange Line<br></br>
                            <Spinner animation="grow" variant="dark" size="sm" /> [MRT] - Mass Rapid Transit <i class="fas fa-caret-right"></i> สายสีแดง Red Line<br></br>
                            <Spinner animation="grow" variant="dark" size="sm" /> [ARL] - Airport Rail Link <i class="fas fa-caret-right"></i> แอร์พอร์ตลิงก์ Airport Line<br></br>
                            </div>
                        </Col>

                        <Col>
                        
                          sdfsdfsdf
                        </Col>

                     
                        
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
