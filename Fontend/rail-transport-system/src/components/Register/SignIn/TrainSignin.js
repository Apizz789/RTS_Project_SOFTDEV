import React, { useState } from 'react'
import axios from 'axios'

// import firebase from '../../../firebase'

import PropTypes from 'prop-types'
import '../SignIn/TrainSignin.css';



function TrainSignin() {
    return (
        <form>
            <div className="login_class" >
                <div className="Title"><h1 align="center">LOGIN</h1></div>

                <div className="input-box" align="center">
                <label for="username">Username:</label>
                <input type="text" id="username" name="username" />
                <label for="pwd">Password:</label>
                <input type="password" id="pwd" name="pwd" />
                </div>
                
                <div className="button" align="center">
                <input type="submit" value="LOGIN"/>
                <input type="reset" value="REGISTER" />
                </div>

            </div>
        </form>
    )
}

export default TrainSignin;