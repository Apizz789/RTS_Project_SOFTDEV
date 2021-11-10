const db=firebase.firestore();
const table=document.querySelector('#Tb_Show_List')
db.collection('Connection').where('ID_station1','>','A').where('ID_station1','<','D').get().then((snapshot)=>{
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
    cell1.innerHTML=doc.data().ID_station1;
    db.collection('Station').where('ID','==',doc.data().ID_station1).get().then((snapshot) => {
        snapshot.forEach(doc => {
            // console.log(doc.data());
            cell2.innerHTML=doc.data().Thai_Name; 
        });
    })
    
    cell3.innerHTML=doc.data().ID_station2;
    db.collection('Station').where('ID','==',doc.data().ID_station2).get().then((snapshot) => {
        snapshot.forEach(doc => {
            // console.log(doc.data());
            cell4.innerHTML=doc.data().Thai_Name; 
        });
    }) 
    cell5.innerHTML=doc.data().cost + " บาท";
    cell6.innerHTML=doc.data().Time + " นาที";
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
        
    })
}