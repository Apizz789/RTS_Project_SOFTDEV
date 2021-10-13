import React from 'react';
import '../../App.css';
import { Button } from '../Button/Button';
import '../Home/TrainSection.css'
function TrainSection(){
    return(
        <div className='train-container'>
         <video src="/videos/video-2.mp4" autoPlay loop muted />
         <h1>Welcome to Skytrain In Bangkok</h1>
         <h2>กรุงเทพ ชีวิตดีๆที่ลงตัว</h2>
         <div className="train-btns">
             <Button className='btns' buttonStyle='btn--outline'
             buttonSize='btn--large'>
                 BUY TICKET
                 <i class="fas fa-ticket-alt"></i>
             </Button>
         </div>
        </div>
    )
}

export default TrainSection