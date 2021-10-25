const validation = (values) => {
    let errors={};

    for(const x of values.fname) {
        for(const sp of special){
            if (x == sp){
                
                break
            }
        }
    }

    if(!values.fname){
        errors.fname = "First Name is required"
    }
    else if(!values.fname.match(/^([a-z])+$/i)){
        errors.fname = 'First must be A-Z , a-z'
    }




    if(!values.lname){
        errors.lname = "Last Name is required"
    }
    else if(!values.lname.match(/^([a-z])+$/i)){
        errors.lname = 'First must be A-Z , a-z'
    }


    if(!values.username){
        errors.username = "Username is required"
    }
    else if(values.username.length < 8 || values.username.length > 20){
        errors.username = "Username must length between 8-20 characters"
    }


    if(!values.password){
        errors.password = "Password is required"
    }
    else if(values.password.length < 8 || values.password.length > 32){
        errors.password = "Password must length between 8-32 characters"
    }


    if(values.password != values.repeat_password){
        errors.repeat_password = "Password Not Match!!"
    }


    if(!values.tel){
        errors.tel = "Tel. is required"
    }
    else if(values.tel.length < 10 || values.tel[0] != '0'){
        errors.tel = "Tel Invalid"
    }


    if(!values.DOB){
        errors.DOB = "Date of Birth is required"
    }


    if(!values.email){
        errors.email = "Email is required"
    }

    return errors;
}
export default validation;