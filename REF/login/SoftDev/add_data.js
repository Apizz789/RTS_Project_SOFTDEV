const db=firebase.firestore();
const form=document.querySelector('#add_trian');
form.addEventListener('submit',(e)=>{
    e.preventDefault();
    //console.log(form.C.value);
    //console.log(form.line.value);
    db.collection('Station').add({
        ID:form.id.value,
        Company:form.C.value,
        Line:form.line.value,
        Thai_Name:form.thaistation.value,
        Eng_Name:form.engname.value,
        Tran_ID:form.tran.value,
    });
    alert("เพิ่มข้อมูลแล้ว");
    console.log(form.id.value);
    // window.setTimeout(turn_to_main,2000);
    // function turn_to_main() {
    //      window.location.assign('test_index.html');
    //  }
    

})

