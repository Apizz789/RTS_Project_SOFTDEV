import React from 'react'
import {InputGroup,FormControl,Col,Row,Button,Container} from 'react-bootstrap'

function TrainHistory() {
    return (
        <>
            <Container>
                <Row >
                    <Col xs="5">
                        <InputGroup className="Search">
                            <InputGroup.Text id="order"><i class="fas fa-search"></i></InputGroup.Text>
                            <FormControl
                                placeholder="No.order"
                                aria-label="order"
                                aria-describedby="basic-addon1"
                            />
                            <Button variant="outline-secondary">Secondary</Button>{' '}
                        </InputGroup>
                    </Col>
                </Row>
            </Container>
            <div style={{ borderTop: "5px solid #7f7df9 ", marginTop:  100,width:"100vw"}}></div>
            <h2>รายการสั่งซื้อล่าสุด</h2>

        </>
    )
}

export default TrainHistory
