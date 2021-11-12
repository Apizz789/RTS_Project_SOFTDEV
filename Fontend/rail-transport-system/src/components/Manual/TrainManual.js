import React from 'react'
import {Tab,Tabs} from 'react-bootstrap'
import ManualAPL from './ManualAPL'
import ManualBTS from './ManualBTS'
import ManualMRT from './ManualMRT'

function TrainManual() {
    return (
        <div style={{marginTop:"55px",width:"100%"}}>
            <Tabs defaultActiveKey="profile" className="mb-3">
                <Tab eventKey="home" title="Home">
                    <ManualBTS/>
                </Tab>
                <Tab eventKey="profile" title="Profile">
                    <ManualMRT/>
                </Tab>
                <Tab eventKey="contact" title="Contact">
                    <ManualAPL/>
                </Tab>
            </Tabs>
        </div>
    )
}

export default TrainManual
