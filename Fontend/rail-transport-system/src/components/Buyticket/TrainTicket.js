import React, { useState } from 'react'
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
    const [ Count , setCount ] = useState(0)
    //const { clickDTic , setclickDTic } = useContext(UserContextD);
    const DropdownItem =()=>{
        return(
            <div>
                {
                [1,2,3,4,5,6,7,8,9,10].map((item) => (
                <Dropdown.Item key={item} onClick={()=>{setCount(item)}}>
                     {item}
                 </Dropdown.Item>
                ))
                }
            </div>
        )
    
    }
    return (
        <div style={{marginTop:"55px",width:"100%"}}>
         {/* <Row style={{borderRadius:"20px",width:"auto",height:"23px",margin:"1px",backgroundColor:"#1F3A93",color:"#ffff",fontsize: "20px",fontWeight:"bold"}}>
                <marquee>
                [ RTS Rail Transport System ] : ทาง RTS ขอยินดีต้อนรับทุกท่านที่เข้าใช้บริการ หากท่านมีคำถามสามารถติดต่อเราได้ที่ 02-999-9999 และช่องทางออนไลน์ info@railtransportsystems.com
                </marquee>
            </Row> */}
            <h1 align = "center">Ticket</h1>
            <Row style={{borderRadius:"20px",width:"auto",height:"23px",margin:"1px",backgroundColor:"#0C9EA8",color:"#ffff",fontsize: "20px",fontWeight:"bold"}}>
            </Row>
            
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
                <Row style={{display:"flex", justifyContent:"center" ,alignItems:"center"}}>
                    <h1 style={{width:"200px" }}>จำนวนตั๋ว</h1>
                    <Dropdown style={{width: "150px"}}>
                        <Dropdown.Toggle variant="success">
                            {
                                Count? Count:"จำนวนตั๋ว"
                            }
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            <DropdownItem/>
                        </Dropdown.Menu>
                    </Dropdown>
                   
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
        </div>
    )
}
export default TrainTicket
