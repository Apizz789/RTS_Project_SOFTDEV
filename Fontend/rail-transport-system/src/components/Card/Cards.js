import React from 'react';
import './Cards.css';
import CardItem from './CardItem';
import Cardfix from './Cardfix';
import {
  Tab,
  Tabs,
  Button,
  ToggleButton,
  Row,
  Col,
  Container,
  Form,
  Modal,
} from "react-bootstrap";
import CardManaul from '../Manual/CardManual';

function Cards() {
  return (
    <div className='cards'>
      <h1>Rail Transport System</h1>
      <Row style={{borderRadius:"20px",width:"auto",height:"23px",margin:"1px",backgroundColor:"#2F2F35",color:"#ffff",fontsize: "20px",fontWeight:"bold"}}/>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/Card/1.png'
              text='BTS MRT AIRPORTLINK'
              label='Rail Transport System'
              path='/schedule'
            />
            <CardItem
              src='images/mapfull2564.jpg'
              text='แผนที่รถไฟฟ้า'
              label='Map'
              path='/map'
            />
          </ul>
          <ul className='cards__items'>
            <Cardfix
              src='images/Card/2.png'
              text='ข้อแนะนำเพื่อความปลอดภัย'
              label='ข้อปฏิบัติ,ข้อห้าม'
              path='/manual'
            />
            <Cardfix
              src='images/Card/3.png'
              text='คำนวณเส้นทาง'
              label='Calculate'
              path='/calculate'
            />
            <CardManaul
              src='images/LOGO.png'
              text='จัดทำขึ้นเพื่ออำนวยความสะดวกให้แก่ชีวิตคนภายในกรุงเทพมหานคร'
              label='Rail Transport'
              path='#'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;