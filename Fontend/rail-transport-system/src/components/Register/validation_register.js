
import axios from 'axios'

let user_list = []

async function makeGetRequest() {

    const fetchedResult = [];
    user_list = []
    const res = await axios.get('https://us-central1-soft-dev-tutorial.cloudfunctions.net/users');
    for (let key in res.data) {
    fetchedResult.unshift(
        {
            // ...res.data[key],
            username: res.data[key].Username,
            password: res.data[key].Password,
            id: key
        }
    )
    user_list.push(res.data[key].Username)
    }
    // let reversed = user_list.reverse();
}

makeGetRequest()

const validation_register = (values) => {
    let errors={};
    
    console.log(user_list)
    values.fname = values.fname.replace(/\s+/g, '');
    if(!values.fname){
        errors.fname = <small><small><h6>"First Name is required"</h6></small></small>
    }
    else if(!values.fname.match(/^([A-Z]|[a-z]|[ ])+$/i)){
        errors.fname = <small><small><h6>'Required A-Z , a-z'</h6></small></small>
    }

    values.lname = values.lname.replace(/\s+/g, '');
    if(!values.lname){
        errors.lname = <small><small><h6>"Last Name is required"</h6></small></small>
    }
    else if(!values.lname.match(/^([A-Z]|[a-z]|[ ])+$/i)){
        errors.lname = <small><small><h6>'Required A-Z , a-z'</h6></small></small>
    }

    if(!values.username){
        errors.username = <small><small><h6>"Username is required"</h6></small></small>
    }
    else if(values.username.length < 8 || values.username.length > 20){
        errors.username = <small><small><p>"Required 8-32 characters"</p></small></small>
    }
    
    else if (Object.values(user_list).includes(values.username)){
        errors.username = <small><small><h6>"This Username is already taken."</h6></small></small>
    }
    if(!values.username.match(/^([A-Z]|[a-z]|[0-9])/i)){
        errors.username = <small><small><h6>"Last Name must contains only A-Z , a-z"</h6></small></small>
    }


    if(!values.password){
        errors.password = <small><small><h6>"Password is required"</h6></small></small>
    }
    else if(values.password.length < 8 || values.password.length > 32){
        errors.password = <small><small><h6>"Required 8-32 characters"</h6></small></small>
    }
    else if(!values.password.match("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})"))
    {
        errors.password = <small><small><h6>"Required Strong Pattern"</h6></small></small>
    } 

    if(!values.repeat_password){
        errors.repeat_password = <small><small><h6>"RE-Password is required"</h6></small></small>
    }
    else if(values.password != values.repeat_password){
        errors.repeat_password = <small><small><h6>"Password Not Match!!"</h6></small></small>
    }


    if(!values.tel){
        errors.tel = <small><small><h6>"Tel. is required"</h6></small></small>
    }
    else if(values.tel.length < 10 || values.tel[0] != '0'){
        errors.tel = <small><small><h6>"Tel Invalid"</h6></small></small>
    }


    if(!values.DOB){
        errors.DOB = <small><small><h6>"Date of Birth is required"</h6></small></small>
    }


    if(!values.email){
        errors.email = <small><small><h6>"Email is required"</h6></small></small>
    }
    else if(!/\S+@\S+\.\S+/.test(values.email)){
        errors.email = <small><small><h6>"Email is invalid"</h6></small></small>
    }

    if(!values.sex){
        errors.sex = <small><small><h6>"Please Select Your Gender"</h6></small></small>
    }


    return errors;
}
export default validation_register;