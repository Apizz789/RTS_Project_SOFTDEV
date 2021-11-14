import React from 'react';
import {Tab,Tabs, Button,ToggleButton,Row,Col,Container, Form} from 'react-bootstrap';
import '../../App.css';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import StationBlue, { UserContext } from "./StationBlue";
import { useContext } from 'react';

function getValue(station){
  return(
    console.log(station)
  )
}


const SelectforCal =()=>{
  const {setclick} = useContext(UserContext)
  return (
      <div style={{marginTop:"55px",width:"100%"}} >
          <h1 align="center">เลือกสถานี</h1>
            <Tabs defaultActiveKey="Btsgreen" className="mb-3" >
                <Tab eventKey="Btsgreen" title="BTS สายสีเขียวอ่อน" >
                <div style={{textAlign:"center"}}>
                  {["A01","A02","A03","A04"].map((item,index)=><Button key={index} variant="outline-primary" onClick={()=>setclick(item)}>{item}</Button>)}
                  </div>
                </Tab>
                
                <Tab eventKey="Btsdarkgreen" title="BTS สายสีเขียวเข้ม">
                <div style={{textAlign:"center"}}>
                 {["B01","B02","B03","B04","B05","B06","B07","B08","B09","B10","B11","B12","B13","B14"].map((item,index)=><Button key={index} variant="outline-primary" onClick={()=>setclick(item)}>{item}</Button>)}
                  </div>
                </Tab>
                
                <Tab eventKey="Btsgold" title="BTS สายสีทอง">
                <div style={{textAlign:"center"}}>
                  <Button variant="outline-primary">A1</Button>{' '}
                  <Button variant="outline-primary">A2</Button>{' '}
                  <Button variant="outline-primary">A3</Button>{' '}
                  <Button variant="outline-primary">A4</Button>{' '}

                  </div>
                </Tab>
                <Tab eventKey="Btsyellow" title="BTS สายสีเหลือง">
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

                  <Button variant="outline-primary">A21</Button>{' '}
                  <Button variant="outline-primary">A22</Button>{' '}
                  <Button variant="outline-primary">A23</Button>{' '}
                  <Button variant="outline-primary">A24</Button>{' '}
                  <Button variant="outline-primary">A25</Button>{' '}
                
                  </div>
                </Tab>
                <Tab eventKey="Btspink" title="BTS สายสีชมพู">
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

                  <Button variant="outline-primary">A21</Button>{' '}
                  <Button variant="outline-primary">A22</Button>{' '}
                  <Button variant="outline-primary">A23</Button>{' '}
                  <Button variant="outline-primary">A24</Button>{' '}
                  <Button variant="outline-primary">A25</Button>{' '}
                  <Button variant="outline-primary">A26</Button>{' '}
                  <Button variant="outline-primary">A27</Button>{' '}
                  <Button variant="outline-primary">A28</Button>{' '}
                  <Button variant="outline-primary">A29</Button>{' '}
                  <Button variant="outline-primary">A30</Button>{' '}
                  
                  </div>
                </Tab>
                <Tab eventKey="Mrtblue" title="MRT สายสีน้ำเงิน">
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

                  <Button variant="outline-primary">A21</Button>{' '}
                  <Button variant="outline-primary">A22</Button>{' '}
                  <Button variant="outline-primary">A23</Button>{' '}
                  <Button variant="outline-primary">A24</Button>{' '}
                  <Button variant="outline-primary">A25</Button>{' '}
                  <Button variant="outline-primary">A26</Button>{' '}
                  <Button variant="outline-primary">A27</Button>{' '}
                  <Button variant="outline-primary">A28</Button>{' '}
                  <Button variant="outline-primary">A29</Button>{' '}
                  <Button variant="outline-primary">A30</Button>{' '}

                  <Button variant="outline-primary">A31</Button>{' '}
                  <Button variant="outline-primary">A32</Button>{' '}
                  <Button variant="outline-primary">A33</Button>{' '}
                  <Button variant="outline-primary">A34</Button>{' '}
                  <Button variant="outline-primary">A35</Button>{' '}
                  <Button variant="outline-primary">A36</Button>{' '}
                  <Button variant="outline-primary">A37</Button>{' '}
                  <Button variant="outline-primary">A38</Button>{' '}
                  <Button variant="outline-primary">A39</Button>{' '}
                  
                  </div>
                </Tab>
                <Tab eventKey="MrtOrange" title="MRT สายสีม่วง">
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

                  <Button variant="outline-primary">A21</Button>{' '}
                  <Button variant="outline-primary">A22</Button>{' '}
                  <Button variant="outline-primary">A23</Button>{' '}
                  <Button variant="outline-primary">A24</Button>{' '}
                  <Button variant="outline-primary">A25</Button>{' '}
                  <Button variant="outline-primary">A26</Button>{' '}
                  <Button variant="outline-primary">A27</Button>{' '}
                  <Button variant="outline-primary">A28</Button>{' '}
                  <Button variant="outline-primary">A29</Button>{' '}
                  <Button variant="outline-primary">A30</Button>{' '}

                  <Button variant="outline-primary">A31</Button>{' '}
                  <Button variant="outline-primary">A32</Button>{' '}
                  <Button variant="outline-primary">A33</Button>{' '}
                  
                  </div>
                </Tab>
                <Tab eventKey="MrtOrange" title="MRT สายสีส้ม">
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

                  <Button variant="outline-primary">A21</Button>{' '}
                  <Button variant="outline-primary">A22</Button>{' '}
                  <Button variant="outline-primary">A23</Button>{' '}
                  <Button variant="outline-primary">A24</Button>{' '}
                  <Button variant="outline-primary">A25</Button>{' '}
                  <Button variant="outline-primary">A26</Button>{' '}
                  <Button variant="outline-primary">A27</Button>{' '}
                  <Button variant="outline-primary">A28</Button>{' '}
                  <Button variant="outline-primary">A29</Button>{' '}
                  
                  </div>
                </Tab>
                <Tab eventKey="MrtRed" title="MRT สายสีแดง">
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
                  
                  </div>
                </Tab>
                <Tab eventKey="apl" title="Airport Rail Link">
                <div style={{textAlign:"center"}}>
                  <Button variant="outline-primary">A01</Button>{' '}
                  <Button variant="outline-primary">A02</Button>{' '}
                  <Button variant="outline-primary">A03</Button>{' '}
                  <Button variant="outline-primary">A04</Button>{' '}
                  <Button variant="outline-primary">A05</Button>{' '}
                  <Button variant="outline-primary">A06</Button>{' '}
                  <Button variant="outline-primary">A07</Button>{' '}
                  <Button variant="outline-primary">A08</Button>{' '}

                  </div>
                </Tab>
            </Tabs>

      </div>
  )
}

export default SelectforCal
