import React from 'react'
import {Tab,Tabs} from 'react-bootstrap'
import ManualAPL from './ManualAPL'
import ManualBTS from './ManualBTS'
import ManualMRT from './ManualMRT'

function TrainManual() {
    return (
        <div style={{marginTop:"55px",width:"100%"}}>
            <Tabs defaultActiveKey="bts" className="mb-3">
                <Tab eventKey="bts" title="BTS">
                    <ManualBTS/>
                </Tab>
                <Tab eventKey="mrt" title="MRT">
                    <ManualMRT/>
                </Tab>
                <Tab eventKey="apl" title="Airport Rail Link">
                    <ManualAPL/>
                </Tab>
                <Tab eventKey="manaual" title="Manaul Train" disabled></Tab>
            </Tabs>
        </div>
    )
}

export default TrainManual
