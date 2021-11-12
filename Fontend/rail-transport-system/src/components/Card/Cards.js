import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Rail Transport System</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/img-9.jpg'
              text='BTS MRT AIRPORTLINK'
              label='Rail Transport System'
              path='/schedule'
            />
            <CardItem
              src='images/img-2.jpg'
              text='แผนที่รถไฟฟ้า'
              label='Map'
              path='/map'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/img-3.jpg'
              text='ข้อแนะนำเพื่อความปลอดภัย'
              label='ข้อปฏิบัติ,ข้อห้าม'
              path='/manual'
            />
            <CardItem
              src='images/img-4.jpg'
              text='คำนวณเส้นทาง'
              label='Calculate'
              path='/calculate'
            />
            <CardItem
              src='images/img-8.jpg'
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