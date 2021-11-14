 import React from 'react'
 import '../Card/Cards.css'
 import CardManaul from './CardManual';

 function ManualAPL() {
     return (
         <div>
             <div className='cards'>
            <h1>Rail Transport System</h1>
                <div className='cards__container'>
                    <div className='cards__wrapper'>
                        <h4>Airport Rail Link</h4>
                        <ul className='cards__items'>
                            <CardManaul
                            src='images/no/APL/1.jpg'
                            text='ห้ามรับประทานอาหารและเครื่องดื่ม'
                            label='ข้อห้าม'
                            path='#'
                            />
                            <CardManaul
                            src='images/no/APL/2.png'
                            text='ห้ามสูบบุหรี่่'
                            label='ข้อห้าม'
                            path='#'
                            />
                            <CardManaul
                            src='images/no/APL/3.png'
                            text='ห้ามนับจักรยานขึ้นมา'
                            label='ข้อห้าม'
                            path='#'
                            />
                        </ul>
                        <ul className='cards__items'>
                            <CardManaul
                            src='images/no/APL/4.png'
                            text='ห้ามสัตว์เลี้ยง'
                            label='ข้อห้าม'
                            path='#'
                            />
                            <CardManaul
                            src='images/no/APL/5.jpg'
                            text='ห้ามวัตถุไวไฟ'
                            label='ข้อห้าม'
                            path='#'
                            />
                            <CardManaul
                            src='images/no/APL/6.png'
                            text='ห้ามพกพาอาวุธ'
                            label='ข้อห้าม'
                            path='#'
                            />
                        </ul>
                        <ul className='cards__items'>
                            <CardManaul
                            src='images/no/APL/7.jpg'
                            text='ห้ามขายของ'
                            label='ข้อห้าม'
                            path='#'
                            />
                            <CardManaul
                            src='images/no/APL/8.png'
                            text='ห้ามใช้เสียงดัง'
                            label='ข้อห้าม'
                            path='#'
                            />
                            <CardManaul
                            src='images/no/APL/9.jpg'
                            text='ห้ามทิ้งขยะ'
                            label='ข้อห้าม'
                            path='#'
                            />
                        </ul>
                    </div>
                </div>
            </div>
         </div>
     )
 }
 
 export default ManualAPL
 