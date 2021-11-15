import React from "react";
import { Link, useHistory } from "react-router-dom";
import SelectforCal from "./SelectforCal";
import { UserContextS } from "./UseContextSource";
import { UserContextD } from "./UseContextDest";
import { useContext } from "react";
import { Col, Row, Button } from "react-bootstrap";
import "./TrainCalculate.css";

const Cal = () => {
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
       <Row style={{borderRadius:"20px",width:"auto",height:"23px",margin:"1px",backgroundColor:"#1F3A93",color:"#ffff",fontsize: "20px",fontWeight:"bold"}}>
                <marquee>
                [ RTS Rail Transport System ] : ทาง RTS ขอยินดีต้อนรับทุกท่านที่เข้าใช้บริการ หากท่านมีคำถามสามารถติดต่อเราได้ที่ 02-999-9999 และช่องทางออนไลน์ info@railtransportsystems.com
                </marquee>
            </Row>
            <h1 className="Cal">คำนวณค่าโดยสาร</h1>
            <Row style={{borderRadius:"20px",width:"auto",height:"23px",margin:"1px",backgroundColor:"#0C9EA8",color:"#ffff",fontsize: "20px",fontWeight:"bold"}}>
			</Row>
      <div>
            <h1 className="Cal">คำนวณค่าโดยสาร</h1>
      </div>
    </div>
  );
};
const StaSource = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <div className="BgS">
        <h1 className="StaS">สถานีต้นทาง</h1>
      </div>
      <div className="BgSelect1">
        <ButSelSta />
      </div>
    </div>
  );
};

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
  );
};

const ButSelSta = () => {
  return (
    <Link to="/SelectStation">
      <button type="button" className="botton">
        Click Me!
      </button>
    </Link>
  );
};

const ButOkCal = () => {
  return (
    <Link to="/calculation-result">
      <button className="bottonok">
        <h1 className="textok">คำนวณค่าโดยสาร</h1>
      </button>
    </Link>
  );
};

const Navbar = () => {
  return <div className="navbara"></div>;
};

export default function TrainCalculate() {
  const { clickS , setclickS } = useContext(UserContextS);
  const { clickD , setclickD } = useContext(UserContextD);
  const handleSetdefault =()=>{
    setclickS("Please Select Sourrce :")
    setclickD("Please Select Sourrce :")
}
  return (
    <div style={{overflowX:'hidden',width:'100vw'}}>
      <Row>
        <Row>
          <Col style={{ marginTop: "5%" }}>
            <h1
              style={{
                backgroundColor: "Grey",
                marginBottom :"5%",
                borderRadius: "12px",
                width: "400px",
                height: "80px",
                alignContent:"center",
                textAlign:"center",
              }}
            >
              คำนวณค่าโดยสาร
            </h1>
            <h1
              style={{
                backgroundColor: "grey",
                borderRadius: "12px",
                width: "250px",
              }}
            >
              สถานีต้นทาง
            </h1>
            <Link to="/SelectStation">
              <Button
                variant="outline-success"
                size="lg"
                style={{ width: "auto", borderRadius: "12px", margin: "20px" }}
              >
                {clickS}
              </Button>
            </Link>
            <h1
              style={{
                backgroundColor: "grey",
                borderRadius: "12px",
                width: "300px",
              }}
            >
              สถานีปลายทาง
            </h1>
            <Link to="/select-station-dest">
              <Button
                variant="outline-success"
                size="lg"
                style={{ width: "auto", borderRadius: "12px", margin: "20px" }}
              >
                {clickD}
              </Button>
            </Link>
            <br />
            <Link to="/calculation-result">
              <Button
                //onClick={() => handleSetdefault()}
                variant="outline-success"
                size="lg"
                style={{ width: "auto", borderRadius: "12px", margin: "20px" }}
              >
                คำนวณค่าโดยสาร
              </Button>
            </Link>
          </Col>
          <Col>
            <img
              src="images/ตารางรถไฟฟ้า.png"
              style={{ width: "100vh", height: "100vh" ,borderRadius:"60px" }}
            />
          </Col>
        </Row>
      </Row>
    </div>
  );
}
