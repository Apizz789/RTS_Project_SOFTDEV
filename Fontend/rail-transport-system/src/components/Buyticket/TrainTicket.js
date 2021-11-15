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
import { useContext } from "react";
import { Link } from 'react-router-dom';


function TrainTicket() {
    const { clickSTic , setclickSTic } = useContext(UserContextSTic);
    const { clickDTic , setclickDTic } = useContext(UserContextDTic);

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
        <div style={{marginTop:"10px",width:"100%"}}>
            <h1 align = "center">Ticket</h1>
            <Row style={{borderRadius:"20px",width:"auto",height:"23px",margin:"1px",backgroundColor:"#0C9EA8",color:"#ffff",fontsize: "20px",fontWeight:"bold"}}>
            </Row>

            <Container>
                <Col>



                </Col>
                <Row>
                    <Col></Col>
                    <Col style={{borderRadius:"20px",width:"400px",height:"500px",margin:"10px",backgroundColor:"#fed46e"}}>
                    <br></br><h1><i class="fas fa-newspaper"></i> Ticket</h1><br></br>
                        
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

                        <Row style={{textAlign:"center"}}>
                        <input
                        className="inputlogin"
                        type="date"
                        data-date-inline-picker="true"
                        name="DOB"
                        min="1900-01-01"
                        max="2009-12-31"
                        placeholder="dd-mm-yyyy"
                        required
                        // value={values.DOB}
                        // onChange={handleChange}
                        style={{ margin: "10px",borderRadius: "10px"}}/>
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


