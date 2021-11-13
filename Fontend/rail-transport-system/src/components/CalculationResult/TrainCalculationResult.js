import React from 'react'

function refreshPage(){
	window.scrollTo(0,0);
  }

function TrainCalculationResult() {
    return (
        <div style={{marginTop:"55px"}}>
            <h1 align = "center">CalculationResult ====</h1>
            <h2>สถานีต้นทาง</h2>
            <h3>สถานีปลายทาง</h3>
            <h4>เส้นทางที่คำนวณได้</h4>
        </div>
    )
}

export default TrainCalculationResult
