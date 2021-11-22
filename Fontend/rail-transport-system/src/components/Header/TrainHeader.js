import React from 'react'
import {Row} from 'react-bootstrap'


function refreshPage(){
    window.scrollTo(0,0)
  }
function TrainHeader() {
    
    return (
        <div style={{marginTop:"60px"}}>
            <Row style={{borderRadius:"20px",width:"auto",height:"23px",margin:"5px",backgroundColor:"#1F3A93",color:"#ffff",fontsize: "20px",fontWeight:"bold"}}>
                <marquee>
                [ RTS Rail Transport System ] : ทาง RTS ขอยินดีต้อนรับทุกท่านที่เข้าใช้บริการ หากท่านมีคำถามสามารถติดต่อเราได้ที่ 02-999-9999 และช่องทางออนไลน์ info@railtransportsystems.com
                </marquee>
            </Row>
        </div>
    )
}

export default TrainHeader
