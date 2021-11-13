import React from 'react'
import './TrainCalculate.css'
import { Link, useHistory } from 'react-router-dom'
import SelectforCal from "./SelectforCal"
import { UserContext } from './StationBlue'
import { useContext } from 'react';

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
            <div>
                <Navbar />
                <Cal />
                <div style={{ display: "flex", width: "100%", justifyContent: "center" }}>
                    <hr className="line" />
                </div>

                <div style={{ display: "flex" }}>
                    <div style={{ display: "flex", border: "2px solid red", flexGrow: "6", justifyContent: "center", flexDirection: "column", paddingLeft: "8%" }}>
                        <StaSource />
                        <StaDest />
                        <ButOkCal />
                    </div>
                    <div style={{ border: "2px solid black", flexGrow: "9" }}>

                    </div>
                </div>
            
            </div>
            )
}
