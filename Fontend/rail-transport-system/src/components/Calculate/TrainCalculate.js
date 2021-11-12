import React from 'react'
import './TrainCalculate.css'
const Cal = ()=>{
    return(
        <div style={{display:"flex", justifyContent: "center"}}>
            <div className = "Bghead">
                <h1 className ="Cal">คำนวณค่าโดยสาร</h1>
            </div>
        </div>
    )
}
const StaSource = ()=>{
    return(
        <div style={{display:"flex",flexDirection:"column"}}>
        <div className = "BgS">
            <h1 className="StaS">สถานีต้นทาง</h1>
        </div>
        <div className = "BgSelect1">
            <h1 className ="Select1">เลือกสถานี</h1>
            <ButSelSta/>
        </div>
        </div>
    )
}

const StaDest = ()=>{
    return(
        <div style={{display:"flex",flexDirection:"column"}}> 
        <div className = "BgS">
            <h1 className="StaS">สถานีปลายทาง</h1>
        </div>
        <div className = "BgSelect1">
            <h1 className ="Select1">เลือกสถานี</h1>
            <ButSelSta/>
        </div>
        </div>
    )
}

const ButSelSta=()=>{
    return(
        <button className = "botton">
        </button>
    )
}

const ButOkCal=()=>{
    return(
        <button className = "bottonok">
            <h1 className ="textok">คำนวณค่าโดยสาร</h1>
        </button>
    )
}

const Navbar=()=>{
    return(
        <div className = "nav">
        </div>
    )
}

function TrainCalculate() {
    return (
        <div style={{marginTop:"55px"}}>
            <Navbar/>
        <Cal/>
        <div style={{display:"flex",width:"100%",justifyContent:"center"}}>
            <hr className = "line"/>
        </div>

        <div style={{display:"flex"}}>
            <div style={{display:"flex",border: "2px solid red",flexGrow:"6",justifyContent:"center",flexDirection:"column",paddingLeft:"8%"}}>
                <StaSource/>
                <StaDest/>
                <ButOkCal/>
            </div>
            <div style={{border: "2px solid black",flexGrow:"9"}}>
                
            </div>
        </div>
            {/*<ShowStationGreen/>*/}
        </div>
    )
}

export default TrainCalculate
