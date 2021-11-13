import React from 'react'

function refreshPage(){
	window.scrollTo(0,0);
  }

function TrainCalculationResult() {
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

            <div className="result">
            <h2 align="center">สถานีต้นทาง : ______________________________</h2>
            <h3 align="center">สถานีปลายทาง : ______________________________</h3>
            <h4 align="center">เส้นทางที่คำนวณได้ : ______________________________</h4>
            <h4 align="center">เวลาที่คำนวณได้ : ______________________________</h4>
            <h5 align="center">ราคาที่คำนวณได้ : ______________________________</h5>
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
