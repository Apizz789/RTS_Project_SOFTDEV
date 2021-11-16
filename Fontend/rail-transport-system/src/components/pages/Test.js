import React from 'react'
import {Button} from 'react-bootstrap'
import { Link } from 'react-router-dom'
function Test() {
    return (
        <div style={{marginTop:"55px"}}>
            <Link to={'/calculate'}><Button variant="outline-dark">Calculate</Button></Link>
            <Link to={'/calculation-result'}><Button variant="outline-dark">CalculateResult</Button></Link>
            <Link to={'/contact'}><Button variant="outline-dark">Contact</Button></Link>
            <Link to={'/flip-page'}><Button variant="outline-dark">Flippage</Button></Link>
            <Link to={'/history'}><Button variant="outline-dark">History</Button></Link>
            <Link to={'/home'}><Button variant="outline-dark">Home</Button></Link>
            <Link to={'/information'}><Button variant="outline-dark">Information</Button></Link>
            <Link to={'/manual'}><Button variant="outline-dark">Manual</Button></Link>
            <Link to={'/register'}><Button variant="outline-dark">Register</Button></Link>
            <Link to={'/schedule'}><Button variant="outline-dark">Schedule</Button></Link>
            <Link to={'/SelectStation'}><Button variant="outline-dark">SelectStation</Button></Link>
            <Link to={'/services'}><Button variant="outline-dark">Services</Button></Link>
            <Link to={'/show-ticket'}><Button variant="outline-dark">ShowTicket</Button></Link>
            <Link to={'/ticket'}><Button variant="outline-dark">Ticket</Button></Link>
            <Link to={'/payment'}><Button variant="outline-dark">Pay</Button></Link>
        </div>
    )
}

export default Test
