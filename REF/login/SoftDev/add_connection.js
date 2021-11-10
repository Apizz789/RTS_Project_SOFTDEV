const db=firebase.firestore();
const form=document.querySelector('#add_trian');
form.addEventListener('submit',(e)=>{
    e.preventDefault();
    //console.log(form.C.value);
    //console.log(form.line.value);
    db.collection('Connection').add({
        ID_station1:form.ID1.value,
        ID_station2:form.ID2.value,
        cost:form.price.value,
        Time:form.time.value,
    });
    alert("เพิ่มข้อมูลแล้ว");
    console.log(form.ID1.value);
    // window.setTimeout(turn_to_main,2000);
    // function turn_to_main() {
    //      window.location.assign('test_index.html');
    //  }
    

})

