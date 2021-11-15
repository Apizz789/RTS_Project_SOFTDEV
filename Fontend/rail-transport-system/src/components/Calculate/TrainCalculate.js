import React from 'react'
import { Link, useHistory } from 'react-router-dom'
import SelectforCal from "./SelectforCal"
import { UserContext } from './StationBlue'
import { useContext } from 'react';
import {Col,Row,Button} from 'react-bootstrap';

const Cal = () => {
    return (
        <div style={{ display: "flex", justifyContent: "center" }}>
            <div >
                <h1 className="Cal">คำนวณค่าโดยสาร</h1>
            </div>
        </div>
            )
}
const StaSource = () => {
    const {click} = useContext(UserContext)
    return (
            <div style={{ display: "flex", flexDirection: "column" }}>
                <div className="BgS">
                    <h1 className="StaS">สถานีต้นทาง</h1>
                </div>
                <div className="BgSelect1">
                    
                    {click}
                    <ButSelSta />
                </div>
            </div>
            )
}

const StaDest = () => {
    return (
            <div style={{ display: "flex", flexDirection: "column" }}>
                <div className="BgS">
                    <h1 className="StaS">สถานีปลายทาง</h1>
                </div>
                <div className="BgSelect1">
                    <h1 className="Select1">เลือกสถานี</h1>
                    <ButSelSta />
                </div>
            </div>
            )
}

const ButSelSta = () => {
    return (
        <Link to="/SelectStation">
     <button type="button" className="botton">
          Click Me!
     </button>
        </Link>
            
            )
}

const ButOkCal = () => {
    return (
        <Link to="/calculation-result">
        <button className="bottonok">
                <h1 className="textok">คำนวณค่าโดยสาร</h1>
            </button>
        </Link>
            
            )
}

const Navbar = () => {
    return (
            <div className="navbara">
            </div>
            )
}


            export default function TrainCalculate() {

    return (
            <div style={{marginTop:"55px" }}>
                <Row>
                
                    <Row >
                    <Col style={{marginTop:"15%" }}>
                        
                        <h1 style={{backgroundColor:"grey",borderRadius:"12px",width:"250px" }}>สถานีต้นทาง</h1>
                            <Link to="/SelectStation"><Button variant="outline-success" size="lg" style={{width:"auto",borderRadius:"12px",margin:"20px"}}>เลือกสถานี</Button></Link>
                        <h1 style={{backgroundColor:"grey",borderRadius:"12px",width:"300px" }}>สถานีปลายทาง</h1>
                            <Link to="/SelectStation"><Button variant="outline-success" size="lg" style={{width:"auto",borderRadius:"12px",margin:"20px"}}>เลือกสถานี</Button></Link>
                            <br/>
                            <Link to="/calculation-result"><Button variant="outline-success" size="lg" style={{width:"auto",borderRadius:"12px",margin:"20px"}}>คำนวณค่าโดยสาร</Button></Link>
                    </Col>
                    <Col><img src="images/ตารางรถไฟฟ้า.png" style={{width:"100vh",height:"100vh"}}/></Col>   
                    </Row>
                    
                </Row>
                
            </div>
            )
}