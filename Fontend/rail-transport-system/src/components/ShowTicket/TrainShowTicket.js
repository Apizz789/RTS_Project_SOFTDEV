import React from 'react'
import CardItemTicket from './CardItemTicket'
import {InputGroup,FormControl,Col,Row,Button,Container,Form,Table,Accordion,Modal,Spinner} from 'react-bootstrap'
import '../Card/Cards.css'

import { UserContextDate } from "../Buyticket/UseContextDate";
import { UserContextSTic } from "../Buyticket/UseContextSourceTic";
import { UserContextDTic } from "../Buyticket/UseContextDestTic";

function TrainShowTicket() {
    return (
        
        <div className='cards__container'>
            <h1>Show Ticket</h1>
            <Row
            style={{
                borderRadius: "20px",
                width: "auto",
                height: "23px",
                margin: "1px",
                backgroundColor: "#2F2F35",
                color: "#ffff",
                fontsize: "20px",
                fontWeight: "bold",
            }}>
            </Row>
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
