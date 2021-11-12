import React from 'react'
import '../Card/Cards.css'
import CardItem from '../Card/CardItem';
function ManualBTS() {
    return (
        <div>
            <div className='cards'>
            <h1>Rail Transport System</h1>
                <div className='cards__container'>
                    <div className='cards__wrapper'>
                        <h4>Bangkok Mass Transit System</h4>
                        <ul className='cards__items'>
                            <CardItem
                            src='images/img-9.jpg'
                            text='ห้ามยืนพิงประตู หรือเสา หรือยืนกีดขวางบริเวณประตูไฟฟ้า'
                            label='BTS'
                            path='#'
                            />
                            <CardItem
                            src='images/img-9.jpg'
                            text='ห้ามยึด หรือจับบริเวณยางที่เป็นรอยต่อ ระหว่างขบวนรถไฟฟ้า เพราะอาจเกิดอันตรายได้'
                            label='BTS'
                            path='#'
                            />
                        </ul>
                        <ul className='cards__items'>
                            <CardItem
                            src='images/img-9.jpg'
                            text='BTS Green Line'
                            label='BTS'
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
