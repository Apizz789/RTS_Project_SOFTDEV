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
                src='images/table1.png'
                text='BTS Green Line'
                label='BTS'
                url='https://www.bts.co.th/pdf/timetable_Green_1nov21.pdf'
                />
                <CardSchedule
                src='images/table2.png'
                text='BTS Gold Line'
                label='BTS'
                url='https://www.bts.co.th/pdf/timetable_Gold_1nov21.pdf'
                />
            </ul>
            <h4>Mass Rapid Transit</h4>
            <ul className='cards__items'>
                <CardSchedule
                src='images/table3.png'
                text='MRT Blue Line'
                label='Mass Rapid Transit'
                url='https://rail-transport-system.netlify.app/doc/MRTBlueLine.pdf'
                />
                <CardSchedule
                src='images/table4.png'
                text='MRT Purple Line'
                label='Mass Rapid Transit'
                url='https://rail-transport-system.netlify.app/doc/MRTPurple.pdf'
                />
            </ul>
            <h4>S.R.T. Electrified Train Co., Ltd.</h4>
            <ul className='cards__items'>
                <CardSchedule
                src='images/table5.png'
                text='Suvarnabhumi Airport Rail Link'
                label='ARL'
                url='http://www.deesudsud.com/wp-content/uploads/2014/12/apl_time_table.png'
                />
            </ul>
            
            </div>
        </div>
        </div>
    )
}

export default TrainSchedule
