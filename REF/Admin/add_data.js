const db=firebase.firestore();
const form=document.querySelector('#add_trian');
form.addEventListener('submit',(e)=>{
    e.preventDefault();
    //console.log(form.C.value);
    //console.log(form.line.value);
    db.collection('Ticket').add({
        Date_buy:"25/10/2021",
        Date_exp:"25/12/2021",
        S_Dest:form.line.value,
        S_Source:form.thaistation.value,
        ticket_id:form.engname.value,
        user_customer:form.tran.value,
    });
    alert("เพิ่มข้อมูลแล้ว");
    console.log(form.ticket_id.value);
    // window.setTimeout(turn_to_main,2000);
    // function turn_to_main() {
    //      window.location.assign('test_index.html');
    //  }
    

})

