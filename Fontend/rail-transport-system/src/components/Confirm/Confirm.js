import React,{createContext,useState} from 'react';
import {useCookies} from 'react-cookie'
import {useParams} from 'react-router-dom'
import { Link } from "react-router-dom";
import axios from 'axios'

let code_list = []
let id_list = []
let confirm_temp
let userid

async function makeGetRequest() {

    const fetchedResult = [];
    code_list = []
    id_list = []
    const res = await axios.get('https://us-central1-soft-dev-tutorial.cloudfunctions.net/users');
    console.log(res.data)
    for (let key in res.data) {
    fetchedResult.unshift(
        {
            // ...res.data[key],
            username: res.data[key].Username,
            confirmcode: res.data[key].confirmationcode,
            id: key
        }
    )
    code_list.push(res.data[key].confirmationCode)
    id_list.push(res.data[key].id)
    }
    console.log(code_list)
    console.log(id_list)

    // let reversed = user_list.reverse();
    
    let key = code_list.indexOf(confirm_temp) 
    let userid = id_list[key]
    console.log(userid)
    async function componentDidMount() {
      console.log(userid)
      // PUT request using axios with async/await
      const article = { status: 'Active' };
      const response = await axios.put('https://us-central1-soft-dev-tutorial.cloudfunctions.net/users/'+userid, article);
      
    }
    componentDidMount()
}


makeGetRequest()


function Confirm() {

  const [cookies, setCookie, removeCookie] = useCookies(['token'])
  const {confirmcode} = useParams()
  confirm_temp = confirmcode
  console.log(confirmcode)
  console.log(cookies['token'])
  // const [verify, setVerify, removeVerify] = useCookies(['verify'])

  if (cookies['token'] === confirmcode) {
    console.log("Verified")
    }
    else{
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


// export {Confirm,verifys}
export default Confirm;
