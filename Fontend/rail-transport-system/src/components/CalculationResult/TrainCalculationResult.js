import React from 'react'
import Spinner from 'react-bootstrap/Spinner'
import { UserContextS } from "../Calculate/UseContextSource";
import { UserContextD } from "../Calculate/UseContextDest";
import { useContext } from "react";
import Button from 'react-bootstrap/Button'
function refreshPage(){
	window.scrollTo(0,0);
  }

function TrainCalculationResult() {
    const { clickS , setclickS } = useContext(UserContextS);
    const { clickD , setclickD } = useContext(UserContextD);
    return (
        <div style={{marginTop:"55px"}}>
            <br></br>
            <br></br>
            <h1 align = "center">CalculationResult ====</h1>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>

            <div className="result" style={{textAlign:"center"}}>
            <h2 align="center">สถานีต้นทาง   : {clickS}</h2>
            <h2 align="center">สถานีปลายทาง : {clickD}</h2>
            <h4 align="center">เส้นทางที่คำนวณได้ : ______________________________</h4>
            <h4 align="center">เวลาที่คำนวณได้ : ______________________________</h4>
            <h5 align="center">ราคาที่คำนวณได้ : ______________________________</h5>
            <Button variant="info">เสร็จสิ้นการทำงาน</Button>{' '} 
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
