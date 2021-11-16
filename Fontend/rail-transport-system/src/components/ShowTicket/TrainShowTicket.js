import React from 'react'
import CardItemTicket from './CardItemTicket'
import '../Card/Cards.css'
function TrainShowTicket() {
    return (
        
        <div className='cards__container'>
            <h1>Show Ticket</h1>
            <div className='cards__wrapper'>
            
                <ul className='cards__items'>
                <CardItemTicket
                src='images/Card/1.png'
                text='BTS MRT AIRPORTLINK'
                label='Rail Transport System'
                path='/schedule'
                />
                <CardItemTicket
                src='images/mapfull2564.jpg'
                text='แผนที่รถไฟฟ้า'
                label='Map'
                path='/map'
                />
            </ul>
            <ul className='cards__items'>
                <CardItemTicket
                src='images/Card/1.png'
                text='BTS MRT AIRPORTLINK'
                label='Rail Transport System'
                path='/schedule'
                />
                <CardItemTicket
                src='images/mapfull2564.jpg'
                text='แผนที่รถไฟฟ้า'
                label='Map'
                path='/map'
                />
            </ul>
            </div>
        </div>
    )
}

export default TrainShowTicket
