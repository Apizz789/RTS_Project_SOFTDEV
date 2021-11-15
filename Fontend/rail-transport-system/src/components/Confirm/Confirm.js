import React from 'react';
import {useCookies} from 'react-cookie'
import {useParams} from 'react-router-dom'
import { Link } from "react-router-dom";
let verify = false


function Confirm() {
  const [cookies, setCookie, removeCookie] = useCookies(['token'])
  const {confirmcode} = useParams()
  console.log(confirmcode)
  console.log(cookies['token'])

  
  if (cookies['token'] === confirmcode) {
    console.log("Verified")
    verify = true
    }
    else{
      verify = false
      console.log("Error")
    }
    

  return (
    
    <div className="container">
    <header className="jumbotron">
      <h3>
        <strong>Account confirmed!</strong>
      </h3>
    </header>
    <Link to={"/register"}>
      Please Login
    </Link>
    </div>
    
  );
}

export {verify};
export default Confirm;
