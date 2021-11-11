import React from 'react'
import "../Card/Cards.css"
import CardSchedule from "./CardSchedule";
function TrainSchedule() {
    const baseUrl = window.location.origin
    return (
        <div className='cards'>
        <h1>Rail Transport System</h1>
        <div className='cards__container'>
            <div className='cards__wrapper'>
            <h4>Bangkok Mass Transit System</h4>
            <ul className='cards__items'>
                <CardSchedule
                src='images/img-9.jpg'
                text='BTS Green Line'
                label='BTS'
                url='https://www.bts.co.th/pdf/timetable_Green_1nov21.pdf'
                />
                <CardSchedule
                src='images/img-2.jpg'
                text='BTS Gold Line'
                label='BTS'
                url='https://www.bts.co.th/pdf/timetable_Gold_1nov21.pdf'
                />
            </ul>
            <h4>Mass Rapid Transit</h4>
            <ul className='cards__items'>
                <CardSchedule
                src='images/img-3.jpg'
                text='MRT Blue Line'
                label='Mass Rapid Transit'
                url={`${baseUrl}/static/media/MRT%20Blue%20Line.5ec9ea5d.pdf`}
                />
                <CardSchedule
                src='images/img-4.jpg'
                text='MRT Purple Line'
                label='Mass Rapid Transit'
                url={`${baseUrl}/static/media/MRTPurple.814d5f77.pdf`}
                />
            </ul>
            <h4>S.R.T. Electrified Train Co., Ltd.</h4>
            <ul className='cards__items'>
                <CardSchedule
                src='images/img-8.jpg'
                text='Suvarnabhumi Airport Rail Link'
                label='ARL'
                path='/contact'
                />
            </ul>
            
            </div>
        </div>
        </div>
    )
}

export default TrainSchedule
