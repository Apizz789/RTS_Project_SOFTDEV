const validation_signin = (values) => {
    let errors={};

    
    if(!values.username){
        errors.username = "Username is required"
    }
    // else if(values.username.length < 8 || values.username.length > 20){
    //     errors.username = "Username length must be between 8-20 characters"
    // }


    if(!values.pwd){
        errors.password = "Password is required"
    }
    // else if(values.pwd.length < 8 || values.pwd.length > 32){
    //     errors.password = "Password length must be between 8-32 characters"
    // }

    return errors;
}
export default validation_signin;