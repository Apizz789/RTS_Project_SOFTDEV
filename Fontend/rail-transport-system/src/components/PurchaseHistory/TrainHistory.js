import { render } from '@testing-library/react'
import React,{useState,useEffect} from 'react'
import {InputGroup,FormControl,Col,Row,Button,Container,Form,Table} from 'react-bootstrap'
import { useCookies } from "react-cookie";
import axios from "axios";

// let ticket_list = [];
//     let user_list = [];
//     let Src_list = [];
//     let Dst_list = [];
//     let Date_buy_list = [];
//     let Date_exp_list = [];
//     const fetchedResult = [];
// let cookie ;
// const history = [
//     {user_customer : 'dsfpieqwjiorjqwo' , ticket_id : '5165468489' , Source_Station :'N24' , Destination_Station : 'E01'}
// ]
// async function makeGetRequest() {
//     ticket_list = [];
//     const res = await axios.get(
//       "https://us-central1-soft-dev-tutorial.cloudfunctions.net/Ticket"
//     );
//     for (let key in res.data) {
//       fetchedResult.unshift({
//         // ...res.data[key],
//         Date_buy :res.data[key].Date_buy,
//         Date_exp :res.data[key].Date_exp,
//         ticket_id: res.data[key].ticket_id,
//         user_map: res.data[key].user_customer,
//         Src: res.data[key].S_Source,
//         Dst: res.data[key].S_Dest,
//       });
//       ticket_list.push(res.data[key].ticket_id);
//       user_list.push(res.data[key].user_customer);
//       Src_list.push(res.data[key].Src);
//       Dst_list.push(res.data[key].Dst);
//       Date_buy_list.push(res.data[key].Date_buy);
//       Date_exp_list.push(res.data[key].Date_exp);
      
//     }
//     console.log(fetchedResult)
//     for(let i in user_list){
//         if(user_list[i] == cookie){
            
//             console.log(user_list[i])
//             console.log(ticket_list[i])
//             history.push({
//                 ticket_id:   ticket_list[i],
//                 user_customer: user_list[i],
//                 Source_Station : Src_list[i],
//                 Destination_Station : Dst_list[i]
//             });
//         }
        
//     }
//     console.log(history)
//     // let key = user_list.indexOf(username_cookie['username_tkn']);
//     // console.log(fetchedResult[key].ticket_id)
//     // console.log(key)
//     // if (fetchedResult[key]. === values.login_password) {

//     // }
// }
// makeGetRequest();


function TrainHistory() {
    const [username_cookie, setUsername_cookie, removeUsername_cookie] = useCookies([
        "username_tkn",
      ]);
    // cookie = username_cookie["username_tkn"];  
    const [numberOrder, setNumberOrder] = useState("")
    const [number, setNumber] = useState("")
    const [history, setHistory] = useState([])
    const [isSearch, setIsSearch] = useState(false)
    const [showAll, setShowAll] = useState(true)

    useEffect(() => {
        axios.get(
            "https://us-central1-soft-dev-tutorial.cloudfunctions.net/Ticket"
          ).then((response) => {
        console.log(response.data)
        const myHistory = response.data.filter((item)=>{
            return item.user_customer===username_cookie["username_tkn"]
        })
        setHistory(myHistory)
        });
        
    }, [])
    function onClickSearch(event) {
        if(numberOrder === ""){
            //console.log(username_cookie['username_tkn'])
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
                    <td>{item.ticket_id}</td>
                    <td>{item.S_Dest}</td>
                    <td>{item.S_Source}</td>
                    <td>{item.Date_buy}</td>
                    <td>{item.Date_exp}</td>
                    </tr>
                    
                </tbody>
        );
    });
    const ShowSearch=history.filter((item)=>{
        return (
            item.ticket_id===numberOrder
        );
    }).map((item)=>{
        return (
            <tbody>
                    <tr>
                    <td>{item.ticket_id}</td>
                    <td>{item.S_Dest}</td>
                    <td>{item.S_Source}</td>
                    <td>{item.Date_buy}</td>
                    <td>{item.Date_exp}</td>
                    </tr>
                </tbody>
        );
    });
    
    
    return (
        <div style={{marginTop:"10px",width:"100%"}}>
            <h1>Rail Transport System</h1>
            <Row style={{borderRadius:"20px",width:"auto",height:"23px",margin:"1px",backgroundColor:"#2F2F35",color:"#ffff",fontsize: "20px",fontWeight:"bold"}}></Row>
            
            <br/>
            <Container>
                <div  style={{display:"flex",justifyContent:"space-between",width:"45%",margin:"auto"}}>
                            <Form.Control style={{ borderRadius:"10px",marginRight:"10px"}} value={numberOrder}   onChange={(event)=>{setNumberOrder(event.target.value)}} type="input" placeholder="หมายเลขคำสั่งซื้อ" />
                            <Button style={{ borderRadius:"10px"}} onClick={onClickSearch}  variant="outline-primary" >Search</Button>
                </div>
            
            <br/>
            <br/>
            <h2 align="center">รายการสั่งซื้อล่าสุด</h2>
            
                <div style={{ width: "100vh",textAlign: "center",backgroundColor:"#F9F9F8",borderRadius:"10px",borderStyle: "solid",borderWidth: "10px",borderColor:"#7E7D81"}}>
               <Table >
                    <thead>
                        <tr>
                            <th style={{ width: "150px"}}>หมายเลขคำสั่งซื้อ</th>
                            <th>สถานีต้นทาง</th>
                            <th>สถานีปลายทาง</th>
                            <th>วันที่ซื้อ</th>
                            <th>วันที่หมดอายุ</th>
                            <th style={{ width: "150px"}}>บาร์โค้ด</th>
                        </tr>
                    </thead>

                    {showAll ? ShowHistory:null}
                    {isSearch ? ShowSearch:null}
                    
                    
                </Table>
                </div>
                </Container>
            
           
        </div>
    )
}

export default TrainHistory
