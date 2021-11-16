const db=firebase.firestore();
const table=document.querySelector('#Tb_Show_List')
db.collection('users').get().then((snapshot)=>{
    //console.log(snapshot.docs); //ดึงส่วน Document มาแสดงใน console
    snapshot.forEach(doc => {
        // console.log(doc.data());
        showData(doc);    
    });
}); 

function showData(doc){
    
    //document.getElementById("demo").innerHTML = Company;
    var row=table.insertRow(-1);
    var cell1=row.insertCell(0);
    var cell2=row.insertCell(1);
    var cell3=row.insertCell(2);
    var cell4=row.insertCell(3);
    var cell5=row.insertCell(4);
    var cell6=row.insertCell(5);
    var cell7=row.insertCell(6);
    var cell8=row.insertCell(7);
    var cell9=row.insertCell(8);
    var cell10=row.insertCell(9);
    var cell11=row.insertCell(10);
    var cell12=row.insertCell(11);
    cell1.innerHTML=doc.data().Username;
    cell2.innerHTML=doc.data().Password ;
    cell3.innerHTML=doc.data().Firstname;
    cell4.innerHTML=doc.data().Lastname;
    cell5.innerHTML=doc.data().Sex;
    cell6.innerHTML=doc.data().Tel;
    cell7.innerHTML=doc.data().DOB;
    cell8.innerHTML=doc.data().Email;
    cell9.innerHTML=doc.data().confirmationCode;
    if (doc.data().status != "Active") {
        cell10.innerHTML="Pending";
    }
    else {
        cell10.innerHTML=doc.data().status;
    }
    
    let btn=document.createElement('button');
    let edit=document.createElement('button');
    btn.textContent='ลบข้อมูล';
    btn.setAttribute('class','btn.btn-danger');
    btn.setAttribute('data-id',doc.id);
    edit.textContent='แก้ไขข้อมูล';
    edit.setAttribute('class','btn.btn-green');
    edit.setAttribute('data-id',doc.id);
    cell11.appendChild(btn);
    cell12.appendChild(edit);

    btn.addEventListener('click',(e)=>{
        console.log(e.target.getAttribute('data-id'));
        let id=e.target.getAttribute('data-id');
        db.collection('users').doc(id).delete();
        alert('ลบข้อมูลแล้ว');
    });

    edit.addEventListener('click',(e)=> {
        let id=e.target.getAttribute('data-id');
        console.log(id);    
    })
}