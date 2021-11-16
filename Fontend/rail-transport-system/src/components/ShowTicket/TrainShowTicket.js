import React from 'react'
import CardItemTicket from './CardItemTicket'
import {InputGroup,FormControl,Col,Row,Button,Container,Form,Table,Accordion,Modal,Spinner} from 'react-bootstrap'
import '../Card/Cards.css'
function TrainShowTicket() {
    return (

        
        <div className='cards__container'>
            <h1>My Ticket</h1>
            <Row style={{borderRadius:"20px",width:"auto",height:"23px",margin:"1px",backgroundColor:"#2F2F35",color:"#ffff",fontsize: "20px",fontWeight:"bold"}}>
          </Row>


            <Container>
                <Row>
                    <Col  style={{marginTop:"30%",borderRadius:"20px",width:"1000px",height:"350px",margin:"10px",backgroundColor:"#fed46e"}}>
                        <p> จำนวนตั๋วของฉัน :__________</p><br/>
                        <p> เลขคำสั่งซื้อ :____________ </p><br/>
                        <p> ชื่อผู้ใช้ : _______________ </p><br/>
                        <p> สถานีต้นทาง :____________ </p><br/>
                        <p> สถานีปลายทาง :_____________ </p><br/>
                        <p> วันที่ซื้อ :_________________ </p>
                    </Col>

                    <Col style={{marginTop:"0%",borderRadius:"20px",width:"1000px",height:"350px",margin:"10px",backgroundColor:"#fad4ae"}}>
                        <p> จำนวนตั๋วของฉัน :__________</p><br/>
                        <p> เลขคำสั่งซื้อ :____________ </p><br/>
                        <p> ชื่อผู้ใช้ : _______________ </p><br/>
                        <p> สถานีต้นทาง :____________ </p><br/>
                        <p> สถานีปลายทาง :_____________ </p><br/>
                        <p> วันที่ซื้อ :_________________ </p>
                    </Col>

                    <Col style={{marginTop:"30%",borderRadius:"20px",width:"1000px",height:"350px",margin:"10px",backgroundColor:"#fed46e"}}>
                        <p> จำนวนตั๋วของฉัน :__________</p><br/>
                        <p> เลขคำสั่งซื้อ :____________ </p><br/>
                        <p> ชื่อผู้ใช้ : _______________ </p><br/>
                        <p> สถานีต้นทาง :____________ </p><br/>
                        <p> สถานีปลายทาง :_____________ </p><br/>
                        <p> วันที่ซื้อ :_________________ </p>
                    </Col>

                    <Col style={{marginTop:"0%",borderRadius:"20px",width:"1000px",height:"350px",margin:"10px",backgroundColor:"#fad4ae"}}>
                        <p> จำนวนตั๋วของฉัน :__________</p><br/>
                        <p> เลขคำสั่งซื้อ :____________ </p><br/>
                        <p> ชื่อผู้ใช้ : _______________ </p><br/>
                        <p> สถานีต้นทาง :____________ </p><br/>
                        <p> สถานีปลายทาง :_____________ </p><br/>
                        <p> วันที่ซื้อ :_________________ </p>
                    </Col>
             
                </Row>

            
           

            </Container>
            


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
                text= "Ticket"
                label='Rail Transport System'
                path='/schedule'
               
                />
                <CardItemTicket
                src='images/mapfull2564.jpg'
                text='HISTORY'
                label='Map'
                path='/map'
                />
            </ul>
            
            </div>
        </div>
    )
}

export default TrainShowTicket
