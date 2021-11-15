import React from 'react'
import Spinner from 'react-bootstrap/Spinner'
import { UserContextS } from "../Calculate/UseContextSource";
import { UserContextD } from "../Calculate/UseContextDest";
import { useContext } from "react";
import {Button,Row} from 'react-bootstrap'
import { Link } from 'react-router-dom';

import { graph, dijkstra } from './distance_cal.js';

function refreshPage(){
	window.scrollTo(0,0);
  }

function TrainCalculationResult() {
    const { clickS , setclickS } = useContext(UserContextS);
    const { clickD , setclickD } = useContext(UserContextD);
    let src = clickS.split(" ")[0];
    let dest = clickD.split(" ")[0];

    const handleSetdefault =()=>{
      setclickS("Please Select Source")
      setclickD("Please Select Dest")
  }
    return (
        <div style={{marginTop:"55px"}}>  
            <Row style={{borderRadius:"20px",width:"auto",height:"23px",margin:"1px",backgroundColor:"#1F3A93",color:"#ffff",fontsize: "20px",fontWeight:"bold"}}>
                <marquee>
                [ RTS Rail Transport System ] : ทาง RTS ขอยินดีต้อนรับทุกท่านที่เข้าใช้บริการ หากท่านมีคำถามสามารถติดต่อเราได้ที่ 02-999-9999 และช่องทางออนไลน์ info@railtransportsystems.com
                </marquee>
            </Row>
            <h1 align = "center">CalculationResult ====</h1>
            <Row style={{borderRadius:"20px",width:"auto",height:"23px",margin:"1px",backgroundColor:"#0C9EA8",color:"#ffff",fontsize: "20px",fontWeight:"bold"}}>
            
            </Row>
            
            <br></br>
            <br></br>
            <br></br>
            <div className="result" style={{textAlign:"center"}}>
            <h2 align="center">สถานีต้นทาง   : {clickS}</h2>
            <h2 align="center">สถานีปลายทาง : {clickD}</h2>
            <h4 align="center">เส้นทางที่คำนวณได้ : {dijkstra(graph, src, dest)}</h4>
            <h4 align="center">เวลาที่คำนวณได้ : ______________________________</h4>
            <h5 align="center">ราคาที่คำนวณได้ : ______________________________</h5>
            {/* <h6 align="center">อะไร : {clickS.split(" ")[0]}</h6> */}
            {/* <h6 align="center">อะไร : {dijkstra(graph, src, dest)}</h6> */}
           
            <Link to="/home">
            <br></br>
              <Button
                onClick={() => handleSetdefault()}
                variant="outline-success"
                size="lg"
                style={{ width: "auto", borderRadius: "12px"}}
              >
                เสร็จสิ้นการทำงาน
              </Button>
            </Link>
            <br></br>
            <br></br>
            <Spinner animation="grow" variant="info" />
            <Spinner animation="grow" variant="info" />
            <Spinner animation="grow" variant="info" />
            </div>
            
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
        </div>
    )
}

export default TrainCalculationResult
