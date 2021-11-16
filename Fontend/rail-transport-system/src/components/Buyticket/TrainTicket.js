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
import { UserContextDTic } from './UseContextDestTic';
import { UserContextCountTic } from './UseContextCount';
import { useContext } from "react";
import { Link } from 'react-router-dom';
import "./TrainTicket.css";


function TrainTicket() {
    const { clickSTic , setclickSTic } = useContext(UserContextSTic);
    const { clickDTic , setclickDTic } = useContext(UserContextDTic);

    const {clickCountTic,setclickCountTic} = useContext(UserContextCountTic);

    //const { clickDTic , setclickDTic } = useContext(UserContextD);
    const DropdownItem =()=>{
        return(
            <div>
                {
                [1,2,3,4,5,6,7,8,9,10].map((item) => (
                <Dropdown.Item key={item} onClick={()=>{setclickCountTic(item)}}>
                     {item}
                 </Dropdown.Item>
                ))
                }
            </div>
        )
    
    }
    return (
        <div style={{marginTop:"10px"}}>
            <h1 align = "center">Ticket</h1>
            <Row style={{borderRadius:"20px",width:"auto",height:"23px",margin:"1px",backgroundColor:"#0C9EA8",color:"#ffff",fontsize: "20px",fontWeight:"bold"}}>
            </Row>

            <Container>
                <Col>



                </Col>
                <Row>
                    <Col></Col>
                    <Col style={{borderRadius:"20px",width:"500px",height:"500px",margin:"10px",backgroundColor:"#fed46e"}}>
                    <br></br><h1><i class="fas fa-ticket-alt"></i> Ticket</h1><hr/>
                        
                    <Row style={{textAlign:"center"}}>
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
                    <Link to="/select-dest-ticket">
                    <Button
                        //onClick={() => handleSetdefault()}
                        variant="outline-success"
                        size="lg"
                        style={{ width: "auto", borderRadius: "12px", margin: "20px" }}
                    >
                        {clickDTic}
                    </Button>

                    </Link>


                    </Row>

                    <Row style={{textAlign:"center"}}>
                        <h1 style={{width:"200px" }}>จำนวนตั๋ว</h1>
                        <Dropdown style={{width: "100px"}}>
                            <Dropdown.Toggle variant="success">
                                {
                                    clickCountTic? clickCountTic:"จำนวนตั๋ว"
                                }
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                                <DropdownItem/>
                            </Dropdown.Menu>
                        </Dropdown>
                        

                        </Row>

                        <Row style={{textAlign:"center"}}>
                        <input
                        // className="inputlogin"
                        type="date"
                        data-date-inline-picker="true"
                        name="DOB"
                        min="2021-11-17"
                        // max="2021-11-30"
                        placeholder="dd-mm-yyyy"
                        
                        // style={{borderRadius: "10px", width: "20",fontSize=  "20"}}
                        required

                        // value={values.DOB}
                        // onChange={handleChange}
                        />
                    <Link to="/payment">
                    <Button
                        //onClick={() => handleSetdefault()}
                        variant="outline-success"
                        size="lg"
                        style={{ width: "auto", borderRadius: "12px", margin: "20px" }}
                    >
                        ซื้อตั๋ว
                    </Button>
                    </Link>

                        </Row>


                    </Col>
                    <Col></Col>
            
                </Row>
            </Container>
        </div>
    )
}
export default TrainTicket


