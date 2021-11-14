import React,{useState} from 'react'
import ReactCardFlip from 'react-card-flip';

function Flip() {
    const [isFlipped, setIsFlipped] = useState(false);
    const handleClick = () => {setIsFlipped(!isFlipped);};
    return (
        <div style={{marginTop:"55px"}}>
            <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
                <div
                    style={{
                    backgroundColor: "green",
                    height: 100,
                    color: "#fff",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center"
                    }}
                >
                    How do you define the meaning of success?
                    <button onClick={handleClick}>Click to flip</button>
                </div>

                <div
                    style={{
                    backgroundColor: "red",
                    height: 100,
                    color: "#fff",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center"
                    }}
                >
                    Create video tutorials on YouTube
                    <button onClick={handleClick}>Click to flip</button>
                </div>
            </ReactCardFlip>
        </div>
    )
}
export default Flip
