import { render } from '@testing-library/react'
import React,{useState} from 'react'
import {InputGroup,FormControl,Col,Row,Button,Container,Form,Table} from 'react-bootstrap'

function TrainHistory() {
    const [numberOrder, setNumberOrder] = useState("")
    const [number, setNumber] = useState("")
    const history = [
        {"numberOrder":"1","departureStation":"พญาไท","lastStation":"ลาดกระบัง","dueDate":"11:11:11"},
        {"numberOrder":"2","departureStation":"พญาไท","lastStation":"ลาดกระบัง","dueDate":"11:11:11"},
        {"numberOrder":"3","departureStation":"พญาไท","lastStation":"ลาดกระบัง","dueDate":"11:11:11"},
        {"numberOrder":"4","departureStation":"พญาไท","lastStation":"ลาดกระบัง","dueDate":"11:11:11"},
        {"numberOrder":"5","departureStation":"พญาไท","lastStation":"ลาดกระบัง","dueDate":"11:11:11"},
        {"numberOrder":"6","departureStation":"พญาไท","lastStation":"ลาดกระบัง","dueDate":"11:11:11"},
        {"numberOrder":"7","departureStation":"พญาไท","lastStation":"ลาดกระบัง","dueDate":"11:11:11"},
        {"numberOrder":"8","departureStation":"พญาไท","lastStation":"ลาดกระบัง","dueDate":"11:11:11"},
        {"numberOrder":"9","departureStation":"พญาไท","lastStation":"ลาดกระบัง","dueDate":"11:11:11"},
        {"numberOrder":"10","departureStation":"พญาไท","lastStation":"ลาดกระบัง","dueDate":"11:11:11"},
        {"numberOrder":"11","departureStation":"พญาไท","lastStation":"ลาดกระบัง","dueDate":"11:11:11"},
        {"numberOrder":"12","departureStation":"พญาไท","lastStation":"ลาดกระบัง","dueDate":"11:11:11"},
        {"numberOrder":"13","departureStation":"พญาไท","lastStation":"ลาดกระบัง","dueDate":"11:11:11"}
    ]
    const [isSearch, setIsSearch] = useState(false)
    const [showAll, setShowAll] = useState(true)


    
    function onClickSearch(event) {
        if(numberOrder === ""){
            setIsSearch(false)
            alert("กรุณากรอกหมายเลขคำสั่งซื้อ")
            setShowAll(true)
        }
        else{
            setIsSearch(true)
            setShowAll(false)
            setNumber(numberOrder)
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
            item.numberOrder===number
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
        <div style={{marginTop:"px",width:"100%"}}>
            <h1>Rail Transport System</h1>
            <br/>
            <Container>
                <div  style={{display:"flex",justifyContent:"space-between",width:"45%",margin:"auto"}}>
                            <Form.Control style={{ borderRadius:"10px",marginRight:"10px"}} value={numberOrder}   onChange={(event)=>{setNumberOrder(event.target.value)}} type="input" placeholder="หมายเลขคำสั่งซื้อ" />
                            <Button style={{ borderRadius:"10px"}} onClick={onClickSearch}  variant="outline-primary" >Search</Button>
                </div>
            </Container>
            <br/>
            <Row style={{borderRadius:"20px",width:"auto",height:"23px",margin:"1px",backgroundColor:"#0C9EA8",color:"#ffff",fontsize: "20px",fontWeight:"bold"}}></Row>
            <br/>
            <h2 align="center">รายการสั่งซื้อล่าสุด</h2>
            
                <div style={{ width: "100vh",textAlign: "center",backgroundColor:"#F7F3EE",borderRadius:"10px",marginLeft:"25%",borderStyle: "solid",borderWidth: "20px",borderColor:"#8FB1EB"}}>
                <Table >
                    <thead>
                        <tr>
                            <th style={{ width: "150px"}}>หมายเลขคำสั่งซื้อ</th>
                            <th>สถานีต้นทาง</th>
                            <th>สถานีปลายทาง</th>
                            <th>เวลา</th>
                        </tr>
                    </thead>

                    {showAll ? ShowHistory:null}
                    {isSearch ? ShowSearch:null}
                    
                    
                </Table>
                </div>
            
            
           
        </div>
    )
}

export default TrainHistory
