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

            <h1 align = "center">CalculationResult ====</h1>
            
            
            <br></br>
            <br></br>
            <br></br>
            <div className="result" style={{textAlign:"center"}}>
            <h2 align="center">สถานีต้นทาง   : {clickS}</h2>
            <h2 align="center">สถานีปลายทาง : {clickD}</h2>
            <h4 align="center" style={{whiteSpace: 'pre'}}>เส้นทางที่คำนวณได้ : {dijkstra(graph, src, dest)[0]}</h4>
            <h4 align="center">เวลาที่คำนวณได้ : {dijkstra(graph, src, dest)[2]} นาที</h4>
            <h5 align="center">ราคาที่คำนวณได้ : {dijkstra(graph, src, dest)[1]} บาท</h5>
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
