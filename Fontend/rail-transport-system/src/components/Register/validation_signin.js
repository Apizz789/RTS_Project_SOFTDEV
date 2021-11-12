const validation_signin = (values) => {
    let login_errors={};

    
    if(!values.login_username){
        login_errors.login_username = "Username is required"
    }
    // else if(values.username.length < 8 || values.username.length > 20){
    //     errors.username = "Username length must be between 8-20 characters"
    // }


    if(!values.login_password){
        login_errors.login_password = "Password is required"
    }
    // else if(values.pwd.length < 8 || values.pwd.length > 32){
    //     errors.password = "Password length must be between 8-32 characters"
    // }

    return login_errors;
}
export default validation_signin;