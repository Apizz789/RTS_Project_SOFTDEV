import { render } from '@testing-library/react'
import React,{useState} from 'react'
import {InputGroup,FormControl,Col,Row,Button,Container,Form,Table} from 'react-bootstrap'

function TrainHistory() {
    const [numberOrder, setNumberOrder] = useState("")
    const history = [
        {"numberOrder":"1","departureStation":"พญาไท","lastStation":"ลาดกระบัง","dueDate":"11:11:11"},
        {"numberOrder":"2","departureStation":"พญาไท","lastStation":"ลาดกระบัง","dueDate":"11:11:11"},
        {"numberOrder":"3","departureStation":"พญาไท","lastStation":"ลาดกระบัง","dueDate":"11:11:11"},
        {"numberOrder":"4","departureStation":"พญาไท","lastStation":"ลาดกระบัง","dueDate":"11:11:11"},
        {"numberOrder":"5","departureStation":"พญาไท","lastStation":"ลาดกระบัง","dueDate":"11:11:11"}
    ]
    const [isSearch, setIsSearch] = useState(false) 
    
    
    function onClickSearch(event) {
        if(numberOrder === ""){
            setIsSearch(false)
            alert("Please select a number")
        }
        else{
            setIsSearch(true)
        }
    }
    const ShowHistory=history.map((item, index)=>{
        return (
            <tbody>
                    <tr>
                    <td>{item.numberOrder}</td>
                    <td>{item.departureStation}</td>
                    <td>{item.lastStation}</td>
                    <td>{item.dueDate}</td>
                    </tr>
                    
                </tbody>
        );
    });
    const ShowSearch=history.filter((item)=>{
        return (
            item.numberOrder===numberOrder
        );
    }).map((item)=>{
        return (
            <tbody>
                    <tr>
                    <td>{item.numberOrder}</td>
                    <td>{item.departureStation}</td>
                    <td>{item.lastStation}</td>
                    <td>{item.dueDate}</td>
                    </tr>
                </tbody>
        );
    });
    
    
    return (
        <div style={{marginTop:"100px"}}>
            <Container>
                <Row >
                    <Col xs="8">
                        <Row>
                            <Col>
                                <Form.Control value={numberOrder} onChange={(event)=>{setNumberOrder(event.target.value)}} type="input" placeholder="หมายเลขคำสั่งซื้อ" />
                            </Col>
                            <Col><Button onClick={onClickSearch}  variant="outline-primary">Search</Button>{' '}</Col>
                       </Row>
                        
                    </Col>
                </Row>
            </Container>
            <div style={{ borderTop: "5px solid #7f7df9 ", marginTop:  100,width:"100vw"}}></div>
            <h2>รายการสั่งซื้อล่าสุด</h2>
           
           <Table striped bordered hover size="sm">
                <thead>
                    <tr>
                    <th>หมายเลขคำสั่งซื้อ</th>
                    <th>สถานีต้นทาง</th>
                    <th>สถานีปลายทาง</th>
                    <th>เวลา</th>
                    </tr>
                </thead>
                {isSearch ? ShowSearch:ShowHistory}
                
            </Table>

        </div>
    )
}

export default TrainHistory
