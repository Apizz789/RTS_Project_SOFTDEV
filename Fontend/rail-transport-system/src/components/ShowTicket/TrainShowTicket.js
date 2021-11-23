import React from 'react'
import CardItemTicket from './CardItemTicket'
import {InputGroup,FormControl,Col,Row,Button,Container,Form,Table,Accordion,Modal,Spinner} from 'react-bootstrap'
import '../Card/Cards.css'
import axios from 'axios'
import { useCookies } from "react-cookie";

import { UserContextDate } from "../Buyticket/UseContextDate";
import { UserContextSTic } from "../Buyticket/UseContextSourceTic";
import { UserContextDTic } from "../Buyticket/UseContextDestTic";

let user_list = []
let id_list = []
let S_list = [] 
let D_list = []
let Tid_list = []
let DB_list = []
let Dexp_list = []
let key_list = []
let cur_user = "rapeepatpe"

async function makeGetRequest() {
    
    const fetchedResult = [];
    user_list = []
    const res = await axios.get('https://us-central1-soft-dev-tutorial.cloudfunctions.net/Ticket');
    for (let key in res.data) {
    fetchedResult.unshift(
        {
            // ...res.data[key],
            username: res.data[key].user_customer,
            SourceS: res.data[key].S_Source,
            DestS: res.data[key].S_Dest,
            TID: res.data[key].ticket_id,
            Date_Buy: res.data[key].Date_buy,
            Dexp: res.data[key].Date_exp,
            id : key
        }
    )
    id_list.push(res.data[key].id)
    user_list.push(res.data[key].user_customer)
    S_list.push(res.data[key].S_Source)
    D_list.push(res.data[key].S_Dest)
    Tid_list.push(res.data[key].ticket_id)
    DB_list.push(res.data[key].Date_buy)
    Dexp_list.push(res.data[key].Date_exp)
    }

    key_list = []
    for(let i in user_list){
        if(user_list[i] === cur_user)
        {
            key_list.push(i)
        }
    }
    console.log(fetchedResult)
    console.log(user_list)
    console.log(key_list)
}
function refreshPage(){
    window.scrollTo(0,0)
  }
function myticket(){
    <Col  style={{marginTop:"30%",borderRadius:"20px",width:"1000px",height:"auto",margin:"10px",backgroundColor:"#fed46e"}}>
                    <p> จำนวนตั๋วของฉัน : 5</p><br/>
                        <p> เลขคำสั่งซื้อ :{" " + Tid_list[key_list[0]]} </p><br/>
                        <p> ชื่อผู้ใช้ : {" " + user_list[key_list[0]]} </p><br/>
                        <p> สถานีต้นทาง :{" "+ S_list[key_list[0]]} </p><br/>
                        <p> สถานีปลายทาง :{" "+ D_list[key_list[0]]} </p><br/>
                        <p> วันที่ซื้อ :{" "+ Dexp_list[key_list[0]]}</p>
    </Col>
}
makeGetRequest()

function TrainShowTicket() {
    const [username_cookie, setUsername_cookie, removeUsername_cookie] =
    useCookies(["username_tkn"]);
    cur_user = username_cookie["username_tkn"]
    refreshPage();


    return (

        
        <div className='cards__container'>


            <h1>My Ticket</h1>
            <Row style={{borderRadius:"20px",width:"1520px",height:"23px",margin:"1px",backgroundColor:"#2F2F35",color:"#ffff",fontsize: "20px",fontWeight:"bold"}}>
          </Row><br/>


            <Container>
                <Row>
                    <Col  style={{marginTop:"30%",borderRadius:"20px",width:"1200px",height:"auto",margin:"10px",backgroundColor:"#fed46e"}}>
                        <br/><center><h4>RTS Ticket</h4></center><hr/>
                        <p> จำนวนตั๋วของฉัน : 5</p><br/>
                        <p> เลขคำสั่งซื้อ :{" " + Tid_list[key_list[0]]} </p>
                        <p> ชื่อผู้ใช้ : {" " + user_list[key_list[0]]} </p><br/>
                        <p> สถานีต้นทาง :{" "+ S_list[key_list[0]]} </p>
                        <p> สถานีปลายทาง :{" "+ D_list[key_list[0]]} </p><br/>
                        <p> วันที่ซื้อ :{" "+ DB_list[key_list[0]]} </p>
                        <p> วันที่หมดอายุ :{" "+ Dexp_list[key_list[0]]} </p>

                    </Col>

                    <Col  style={{marginTop:"30%",borderRadius:"20px",width:"1200px",height:"auto",margin:"10px",backgroundColor:"#fefe10"}}>
                        <br/><center><h4>RTS Ticket</h4></center><hr/>
                        <p> จำนวนตั๋วของฉัน : 5</p><br/>
                        <p> เลขคำสั่งซื้อ :{" " + Tid_list[key_list[1]]} </p>
                        <p> ชื่อผู้ใช้ : {" " + user_list[key_list[1]]} </p><br/>
                        <p> สถานีต้นทาง :{" "+ S_list[key_list[1]]} </p>
                        <p> สถานีปลายทาง :{" "+ D_list[key_list[1]]} </p><br/>
                        <p> วันที่ซื้อ :{" "+ DB_list[key_list[1]]} </p>
                        <p> วันที่หมดอายุ :{" "+ Dexp_list[key_list[1]]} </p>

                    </Col>

                    <Col  style={{marginTop:"30%",borderRadius:"20px",width:"1200px",height:"auto",margin:"10px",backgroundColor:"#fecc20"}}>
                        <br/><center><h4>RTS Ticket</h4></center><hr/>
                        <p> จำนวนตั๋วของฉัน : 5</p><br/>
                        <p> เลขคำสั่งซื้อ :{" " + Tid_list[key_list[2]]} </p>
                        <p> ชื่อผู้ใช้ : {" " + user_list[key_list[2]]} </p><br/>
                        <p> สถานีต้นทาง :{" "+ S_list[key_list[2]]} </p>
                        <p> สถานีปลายทาง :{" "+ D_list[key_list[2]]} </p><br/>
                        <p> วันที่ซื้อ :{" "+ DB_list[key_list[2]]} </p>
                        <p> วันที่หมดอายุ :{" "+ Dexp_list[key_list[2]]} </p>

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
        </div>
    )
}

export default TrainShowTicket
