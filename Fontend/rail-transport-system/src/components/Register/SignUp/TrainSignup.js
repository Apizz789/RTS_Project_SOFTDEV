import React from 'react'
import '../SignUp/TrainSignup.css';
function TrainSignup() {
    return (
        <body>
            <div class="register_class">
                <div class="Title"><h1 align="center">REGISTRATION</h1></div>

                <div class="input-box" align="center">
                    <span class="details">
                        <h2>First Name</h2></span>
                    <input type="text" name="fname" placeholder="Input your First Name" required></input>
                </div>

                <div class="input-box" align="center">
                    <span class="details">
                        <h2>Last Name</h2></span>
                    <input type="text" name="lname" placeholder="Input your Last Name" required></input>
                </div>

                <div class="input-box" align="center">
                    <span class="details">
                        <h2>User</h2></span>
                    <input type="text" name="username" placeholder="Input your User" required></input>
                </div>

                <div class="input-box" align="center">
                    <span class="details">
                        <h2>Password</h2></span>
                    <input type="text" name="password" placeholder="Input your Password" required></input>
                </div>

                <div class="input-box" align="center">
                    <span class="details">
                        <h2>Repeat Password</h2></span>
                    <input type="text" name="password" placeholder="Repeat Password" required></input>
                </div>

                <div class="input-box" align="center">
                    <span class="details">
                        <h2>Telephone</h2></span>
                    <input class="inputbox" type="text" name="tel" maxlength="10" placeholder="Input your Telephone" required></input>
                </div>

                <div class="input-box" align="center">
                    <span class="details"><h2>DOB</h2></span>
                    <input type="text" placeholder="Input your DOB" required></input>
                </div>

                <div class="input-box" align="center">
                    <span class="details"><h2>Email</h2></span>
                    <input type="text" placeholder="Input your DOB" required></input>
                </div>


                <div class="input-box" align="center">
                    <label class="container">Male
                        <input type="checkbox" checked="checked"></input>
                        <span class="checkmark"></span>
                    </label>
                    <label class="container">Female
                        <input type="checkbox" checked="checked"></input>
                        <span class="checkmark"></span>
                    </label>
                </div>

        
                <div class="button" align="center">
                    <input type="submit" value="Register"></input>
                    <input type="submit" value="Cancel"></input>
                </div>

                <h2>Starting Date</h2>
                <section>
                    <fieldset>
                        <legend>TrainSignup.js</legend>
                        <div class="field moveindate">
                            <label>Date</label>
                            <input class="datepicker" name="date" type="text" autofocuss></input>
                        </div>
                    </fieldset>
                </section>


            </div>
        </body>

    )
}

export default TrainSignup;
