const validation = (values) => {
    let errors={};



    values.fname = values.fname.replace(/\s+/g, '');
    if(!values.fname){
        errors.fname = "First Name is required"
    }
    else if(!values.fname.match(/^([A-Z]|[a-z]|[ๅภถุึคตจขชไำพะัีรนยบลฃฟหกดเ้่าสวงผปแอิืทมใฝูฎฑธํ๊ณญฐฅฤฆฏโฌ็๋ษศซฉฮฺ์ฒฬฦ]|[ ])+$/i)){
        errors.fname = 'First Name must contains only A-Z , a-z'
    }

    values.lname = values.lname.replace(/\s+/g, '');
    if(!values.lname){
        errors.lname = "Last Name is required"
    }
    else if(!values.lname.match(/^([A-Z]|[a-z]|[ๅภถุึคตจขชไำพะัีรนยบลฃฟหกดเ้่าสวงผปแอิืทมใฝูฎฑธํ๊ณญฐฅฤฆฏโฌ็๋ษศซฉฮฺ์ฒฬฦ]|[ ])+$/i)){
        errors.lname = 'Last Name must contains only A-Z , a-z'
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
    // else if(!values.password.match(/^(?=.[a-z])(?=.[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/))
    // {
    //     errors.password = "Password must contains A-z, a-z and 0-9 mix together"
    // } 


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
    else if(!/\S+@\S+\.\S+/.test(values.email)){
        errors.email = "Email is invalid"
    }

    return errors;
}
export default validation;