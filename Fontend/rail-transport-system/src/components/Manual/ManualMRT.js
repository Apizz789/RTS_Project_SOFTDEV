import React from 'react'
import '../Card/Cards.css'
import CardManual from './CardManual';
function ManualMRT() {
    return (
        <div>
            <div className='cards'>
            <h1>Rail Transport System</h1>
                <div className='cards__container'>
                    <div className='cards__wrapper'>
                        <h4>Mass Rapid Transit</h4>
                        <ul className='cards__items'>
                            <CardManual
                            src='images/no/MRT/1.jpg'
                            text='ไม่นำวัตถุไวไฟติดตัวเข้าระบบรถไฟฟ้า เช่น พลุ ประทัด ไฟเย็น หรือ ลูกโป่ง'
                            label='ข้อห้าม'
                            path='#'
                            />
                            <CardManual
                            src='images/no/MRT/2.jpg'
                            text='ไม่ขายสินค้า หรือบริการภายในระบบรถไฟฟ้า'
                            label='ข้อห้าม'
                            path='#'
                            />
                        </ul>
                        <ul className='cards__items'>
                            <CardManual
                            src='images/no/MRT/3.jpg'
                            text='ไม่ก่อเหตุเดือดร้อนรำคาญ หรือ ก่อความไม่สะดวกแก่การใช้บริการของผู้โดยสารท่านอื่น'
                            label='ข้อห้าม'
                            path='#'
                            />
                            <CardManual
                            src='images/no/MRT/4.jpg'
                            text='ไม่ทิ้งขยะ หรือเศษกระทงภายในระบบรถไฟฟ้า'
                            label='ข้อห้าม'
                            path='#'
                            />
                        </ul>
                        <ul className='cards__items'>
                            <CardManual
                            src='images/no/MRT/5.jpg'
                            text='ไม่บริโภคอาหาร เครื่องดืม หรือเครื่องดื่่มที่มีแอลกอฮอล์ในระบบรถไฟฟ้า'
                            label='ข้อห้าม'
                            path='#'
                            />
                            <CardManual
                            src='images/MRT-Logo.png'
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

export default ManualMRT
