import React from 'react'
import './CardsManual.css'
import CardManual from './CardManual';
import '../Card/Cards.css';
function ManualBTS() {
    return (
        <div>
            <div className='cards'>
            <h1>Rail Transport System</h1>
                <div className='cards__container'>
                    <div className='cards__wrapper'>
                        <h4>Bangkok Mass Transit System</h4>
                        <ul className='cards__items'>
                            <CardManual
                            src='images/no/BTS/1.png'
                            text='ห้ามยืนพิงประตู หรือเสา หรือยืนกีดขวางบริเวณประตูไฟฟ้า'
                            label='ข้อห้าม'
                            path='#'
                            />
                            <CardManual
                            src='images/no/BTS/2.png'
                            text='ห้ามส่งเสียงดัง หรือแสดงพฤติกรรมที่ก่อความรำคาญ'
                            label='ข้อห้าม'
                            path='#'
                            />
                        </ul>
                        <ul className='cards__items'>
                            <CardManual
                            src='images/no/BTS/3.png'
                            text='ห้ามวางมือบริเวณประตูไฟฟ้า'
                            label='ข้อห้าม'
                            path='#'
                            />
                            <CardManual
                            src='images/no/BTS/4.png'
                            text='ห้ามวางสัมภาระกีดขวางทางเดินในขบวน'
                            label='ข้อห้าม'
                            path='#'
                            />
                        </ul>
                        <ul className='cards__items'>
                            <CardManual
                            src='images/no/BTS/5.png'
                            text='ห้ามรับประทานอาหารและเครื่องดื่มในขบวนรถไฟฟ้าบีทีเอสและทิ้งขยะในรถไฟฟ้า'
                            label='ข้อห้าม'
                            path='#'
                            />
                            <CardManual
                            src='images/BTS-Logo.png'
                            text='Manaul Train'
                            label='Raill Transport System'
                            path='#'
                            />
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ManualBTS
