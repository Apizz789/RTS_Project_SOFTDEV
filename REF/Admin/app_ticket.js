const db=firebase.firestore();
const table=document.querySelector('#Tb_Show_List')
db.collection('Ticket').get().then((snapshot)=>{
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
    cell1.innerHTML=doc.data().ticket_id;
    cell2.innerHTML=doc.data().user_customer; 
    cell3.innerHTML=doc.data().S_Source;
    cell4.innerHTML=doc.data().S_Dest; 
    cell5.innerHTML=doc.data().Date_buy;
    cell6.innerHTML=doc.data().Date_exp;
    let btn=document.createElement('button');
    let edit=document.createElement('button');
    btn.textContent='ลบข้อมูล';
    btn.setAttribute('class','btn.btn-danger');
    btn.setAttribute('data-id',doc.id);
    edit.textContent='แก้ไขข้อมูล';
    edit.setAttribute('class','btn.btn-green');
    edit.setAttribute('data-id',doc.id);
    cell7.appendChild(btn);
    cell8.appendChild(edit);

    btn.addEventListener('click',(e)=>{
        console.log(e.target.getAttribute('data-id'));
        let id=e.target.getAttribute('data-id');
        db.collection('Connection').doc(id).delete();
        alert('ลบข้อมูลแล้ว');
    });

    edit.addEventListener('click',(e)=> {
        let id=e.target.getAttribute('data-id');
        console.log(id);    
    })
}