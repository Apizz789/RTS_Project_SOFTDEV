import React from 'react';
import { Link } from 'react-router-dom';
import '../../App.css';
import { Button } from '../Button/Button';
import '../Home/TrainSection.css'
function TrainSection(){
    return(
        <div className='train-container'>
         {/* <video src="/videos/video-2.mp4" autoPlay loop muted /> */}
         <h1>Welcome to Skytrain In Bangkok</h1>
         <h2>กรุงเทพ ชีวิตดี ๆ ที่ลงตัว</h2>
            <div className="train-btns">
                <Link to='/ticket'>
                    <Button className='btns' 
                        buttonStyle='btn--outline'
                        buttonSize='btn--large'
                    >
                        GET TICKET  <i className="fas fa-ticket-alt" />
                    </Button>
                </Link>
            </div>
        </div>
    )
}

export default TrainSection;