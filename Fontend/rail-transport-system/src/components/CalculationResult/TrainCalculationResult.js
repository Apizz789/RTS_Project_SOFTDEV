import React from 'react'
import Spinner from 'react-bootstrap/Spinner'
import { UserContextS } from "../Calculate/UseContextSource";
import { UserContextD } from "../Calculate/UseContextDest";
import { useContext } from "react";
import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom';

function refreshPage(){
	window.scrollTo(0,0);
  }

function TrainCalculationResult() {
    const { clickS , setclickS } = useContext(UserContextS);
    const { clickD , setclickD } = useContext(UserContextD);

    const handleSetdefault =()=>{
      setclickS("Please Select Source")
      setclickD("Please Select Dest")
  }
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
           
            <Link to="/home">
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
