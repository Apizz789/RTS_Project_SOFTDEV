import React from 'react'
import {InputGroup,FormControl,Col,Row,Button,Container,Form,Table,Modal} from 'react-bootstrap'
import { Link } from 'react-router-dom';
import { UserContextSTic } from "../Buyticket/UseContextSourceTic";
import { UserContextDTic } from '../Buyticket/UseContextDestTic';
import { UserContextCountTic } from '../Buyticket/UseContextCount';
import { useState , useContext } from "react";
import Dropdown from 'react-bootstrap/Dropdown';

function TrainPayment() {
    function refreshPage(){
        window.scrollTo(0,0);
      }
      const [show, setShow] = useState(false);
      const handleClose = () => setShow(false);

      const [show1, setShow1] = useState(false);
      const handleClose1 = () => setShow1(false);

      const handleShow = () => {
        setShow(true);
      };

      const handleShow1 = () => {
        setShow(false)
        setShow1(true);
      };

      const { clickSTic , setclickSTic } = useContext(UserContextSTic);
      const { clickDTic , setclickDTic } = useContext(UserContextDTic);
      const [ Count , setCount ] = useState(0)
      const {clickCountTic,setclickCountTic} = useContext(UserContextCountTic);

      const DropdownItem =()=>{
        return(
            <div>
                {
                ["Promptpay","โอนผ่านธนาคาร","บัตรเครดิต"].map((item) => (
                <Dropdown.Item key={item} onClick={()=>{setCount(item)}}>
                     {item}
                 </Dropdown.Item>
                ))
                }
            </div>
        )

    }
    
    return (
        <div style={{marginTop:"10px",width:"100%"}}>
            <h1 align = "center">Payment</h1>
            <Row style={{borderRadius:"20px",width:"auto",height:"23px",margin:"1px",backgroundColor:"#0C9EA8",color:"#ffff",fontsize: "20px",fontWeight:"bold"}}>
            </Row>
            <br></br><br></br><br></br><br></br><br></br><br></br>
            <Container>
                <Row>
                    <Col>

                    </Col>
                    

                    <Col  style={{textAlign:"center"}}>
                        <Col style={{borderRadius:"20px",width:"700px",height:"500px",margin:"10px",backgroundColor:"#dbf2f8",textAlign:"center"}}>
                            <br></br><h1><i class="fas fa-newspaper"></i> RTS News</h1><br></br>
                            <h3 align = "left">ชื่อผู้ใช้:________________________________</h3><br></br><br></br>
                            <h3>{clickSTic} ------------------- {clickDTic}</h3><br></br>
                            <h3 align = "left"> ราคา:________________________________บาท</h3>
                            <h3 align = "left"> จำนวน:{clickCountTic} ชิ้น</h3>
                            <h3 align = "left"> วันที่ซื้อ:________________________________</h3>
                            <h3 align = "left" > วันที่หมดอายุ:________________________________</h3>
                            
                            <Link to="/ticket">
                            <Button variant="outline-warning" style={{marginBottom:"5px",width:"100px",whiteSpace: 'pre', margin: '10px'}}>แก้ไข</Button>
                            </Link>

                            <Button onClick={()=>handleShow()} variant="outline-success" style={{marginBottom:"5px",width:"100px",whiteSpace: 'pre', margin: '10px'}}>ยืนยัน</Button>
                        
                            <Modal show={show} onHide={handleClose} centered>
                            <Modal.Header closeButton>เลือกวิธีการชำระเงิน</Modal.Header>
                            <Modal.Body>
                                <h1>รูปแบบการชำระเงิน</h1>
                                <Dropdown style={{width: "100px"}}>
                                    <Dropdown.Toggle variant="success">
                                        {
                                            Count? Count:"รูปแบบการชำระเงิน"
                                        }
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu>
                                        <DropdownItem/>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </Modal.Body>
                            <Modal.Footer>
                                <Button variant="secondary" onClick={handleShow1}>
                                    OK
                                </Button>
                            </Modal.Footer>
                            </Modal>
                            
                            <Modal show={show1} onHide={handleClose1} centered>
                            <Modal.Header closeButton>เลือกวิธีการชำระเงิน</Modal.Header>
                            <Modal.Body>
                                รูปแบบการชำระเงิน
                            </Modal.Body>
                            <Modal.Footer>
                                <Button variant="secondary" onClick={handleClose1}>
                                    OK
                                </Button>
                            </Modal.Footer>
                            </Modal>

                            <Button variant="outline-danger" style={{marginBottom:"5px",width:"100px",whiteSpace: 'pre', margin: '10px'}}>ยกเลิก</Button>
                        </Col>
                    </Col>

                    <Col>

                    </Col>

                </Row>
            </Container>

        </div>
    )
}

export default TrainPayment
