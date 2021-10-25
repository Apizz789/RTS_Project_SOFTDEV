const validation = (values) => {
    let errors={};
    
    if(!values.fname){
        errors.fname = "First Name is required"
    }
    if(!values.lname){
        errors.lname = "Last Name is required"
    }
    if(!values.username){
        errors.username = "Username is required"
    }
    if(!values.password){
        errors.password = "Password is required"
    }
    if(!values.tel){
        errors.username = "Tel. is required"
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