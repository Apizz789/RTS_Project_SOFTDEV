const db=firebase.firestore();
const form=document.querySelector('#login_form');
form.addEventListener('submit',(e)=>{
    e.preventDefault();
    db.collection('user').get().then((snapshot)=>{
        snapshot.forEach(doc => {
            if((form.user.value == doc.data().username) && (form.pass.value == doc.data().password)) {
                console.log(doc.data().username);
                console.log(doc.data().password);
                window.location.assign("../test_index.html");
            }
        });
    });
    
    
})