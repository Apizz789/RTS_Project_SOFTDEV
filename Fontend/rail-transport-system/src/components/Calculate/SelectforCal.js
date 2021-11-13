import React from 'react'
import {Tab,Tabs, Button,ToggleButton,Row,Col,Container} from 'react-bootstrap'

import { BrowserRouter, Switch, Route } from "react-router-dom";
import StationBlue from "./StationBlue"

const SelectforCal =()=>{
  return (
      <div style={{marginTop:"55px",width:"100%"}}>
          <h1 align="center">เลือกสถานี</h1>
            <Tabs defaultActiveKey="Bts" className="mb-3">
                <Tab eventKey="Btsgreen" title="BTSสายสีเขียวอ่อน">
                  <div style={{textAlign:"center"}}>
                  <Button variant="outline-primary">A01</Button>{' '}
                  <Button variant="outline-primary">A02</Button>{' '}
                  <Button variant="outline-primary">A03</Button>{' '}
                  <Button variant="outline-primary">A04</Button>{' '}
                  <Button variant="outline-primary">A05</Button>{' '}

                  <Button variant="outline-primary">A06</Button>{' '}
                  <Button variant="outline-primary">A07</Button>{' '}
                  <Button variant="outline-primary">A08</Button>{' '}
                  <Button variant="outline-primary">A09</Button>{' '}
                  <Button variant="outline-primary">A10</Button>{' '}

                  <Button variant="outline-primary">A11</Button>{' '}
                  <Button variant="outline-primary">A12</Button>{' '}
                  <Button variant="outline-primary">A13</Button>{' '}
                  <Button variant="outline-primary">A14</Button>{' '}
                  <Button variant="outline-primary">A15</Button>{' '}

                  <Button variant="outline-primary">A16</Button>{' '}
                  <Button variant="outline-primary">A17</Button>{' '}
                  <Button variant="outline-primary">A18</Button>{' '}
                  <Button variant="outline-primary">A19</Button>{' '}
                  <Button variant="outline-primary">A20</Button>{' '}

                  
                  </div>
               
                
                </Tab>
                <Tab eventKey="Btsdarkgreen" title="BTSสายสีเขียวเข้ม">
                    <p>สายสีเขียวเข้ม</p>
                </Tab>
                <Tab eventKey="Btsgold" title="BTSสายสีทอง">
                    <p>สายสีทอง</p>
                </Tab>
                <Tab eventKey="Btsyellow" title="BTSสายสีเหลือง">
                    <p>สายสีเหลือง</p>
                </Tab>
                <Tab eventKey="Btspink" title="BTSสายสีชมพู">
                    <p>สายสีชมพู</p>
                </Tab>
                <Tab eventKey="Mrtblue" title="MRTสายสีน้ำเงิน">
                    <p>สายสีน้ำเงิน</p>
                </Tab>
                <Tab eventKey="MrtOrange" title="MRTสายสีส้ม">
                    <p>สายสีส้ม</p>
                </Tab>
                <Tab eventKey="MrtRed" title="MRTสายสีแดง">
                    <p>สายสีแดง</p>
                </Tab>
                <Tab eventKey="apl" title="Airport Rail Link">
                    <p>Airport Link</p>
                </Tab>
            </Tabs>
      </div>
  )
}

export default SelectforCal
