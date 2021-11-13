 import React from 'react'
 import '../Card/Cards.css'
import CardItem from '../Card/CardItem';

 function ManualAPL() {
     return (
         <div>
             <div className='cards'>
            <h1>Rail Transport System</h1>
                <div className='cards__container'>
                    <div className='cards__wrapper'>
                        <h4>Airport Rail Link</h4>
                        <ul className='cards__items'>
                            <CardItem
                            src='images/img-9.jpg'
                            text='ห้ามรับประทานอาหารและเครื่องดื่ม'
                            label='ข้อห้าม'
                            path='#'
                            />
                            <CardItem
                            src='images/img-9.jpg'
                            text='ห้ามสูบบุหรี่่'
                            label='ข้อห้าม'
                            path='#'
                            />
                            <CardItem
                            src='images/img-9.jpg'
                            text='ห้ามนับจักรยานขึ้นมา'
                            label='ข้อห้าม'
                            path='#'
                            />
                        </ul>
                        <ul className='cards__items'>
                            <CardItem
                            src='images/img-9.jpg'
                            text='ห้ามสัตว์เลี้ยง'
                            label='ข้อห้าม'
                            path='#'
                            />
                            <CardItem
                            src='images/img-9.jpg'
                            text='ห้ามวัตถุไวไฟ'
                            label='ข้อห้าม'
                            path='#'
                            />
                            <CardItem
                            src='images/img-9.jpg'
                            text='ห้ามทุเรียน'
                            label='ข้อห้าม'
                            path='#'
                            />
                            <CardItem
                            src='images/img-9.jpg'
                            text='ห้ามลูกโป่ง'
                            label='ข้อห้าม'
                            path='#'
                            />
                            <CardItem
                            src='images/img-9.jpg'
                            text='ห้ามกระดานโต้คลื่น'
                            label='ข้อห้าม'
                            path='#'
                            />
                        </ul>
                        <ul className='cards__items'>
                        <CardItem
                            src='images/img-9.jpg'
                            text='ห้ามพกพาอาวุธ'
                            label='ข้อห้าม'
                            path='#'
                            />
                            <CardItem
                            src='images/img-9.jpg'
                            text='ห้ามหาบเร่แผงลอย'
                            label='ข้อห้าม'
                            path='#'
                            />
                            <CardItem
                            src='images/img-9.jpg'
                            text='ห้ามใช้เสียงดัง'
                            label='ข้อห้าม'
                            path='#'
                            />
                            <CardItem
                            src='images/img-9.jpg'
                            text='ห้ามทิ้งขยะ'
                            label='ข้อห้าม'
                            path='#'
                            />
                            <CardItem
                            src='images/img-9.jpg'
                            text='ห้ามใช้รถเข็น'
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
 