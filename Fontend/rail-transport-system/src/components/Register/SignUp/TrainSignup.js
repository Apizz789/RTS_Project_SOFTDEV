import React from 'react'

function TrainSignup() {
    return (
        <div>
            <h1 align="center">REGISTRATION</h1>
            
          
            <div class="input-box">
                <span class = "details">
                <h2>First Name</h2></span>
                <input type = "text" placeholder = "Input your First Name" required></input>
            </div>

            <div class="input-box">
                <span class = "details">
                <h2>Last Name</h2></span>
                <input type = "text" placeholder = "Input your Last Name" required></input>
            </div>

            <div class="input-box">
                <span class = "details">
                <h2>User</h2></span>
                <input type = "text" placeholder = "Input your User" required></input>
            </div>

            <div class="input-box">
                <span class = "details">
                <h2>Password</h2></span>
                <input type = "text" placeholder = "Input your Password" required></input>
            </div>

            <div class="input-box">
                <span class = "details">
                <h2>Telephone</h2></span>
                <input type = "text" placeholder = "Input your Telephone" required></input>
            </div>

            <div class="input-box">
                <span class = "details">
                <h2>DOB</h2></span>
                <input type = "text" placeholder = "Input your DOB" required></input>
            </div>

            <div class="input-box">
                <label class="container">Male
                <input type="checkbox" checked="checked"></input>
                <span class="checkmark"></span>
                </label>
            </div>
            
            <div class="input-box">
                <label class="container">Female
                <input type="checkbox" checked="checked"></input>
                <span class="checkmark"></span>
                </label>
            </div>
           

            <div class = "button">
                <input type= "submit" value = "Register"></input>
            </div>
            
            
            
        </div>
    )
}

export default TrainSignup;
