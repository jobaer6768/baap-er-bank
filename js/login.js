document.getElementById('submit-btn').addEventListener('click', function(){
    const inputEmail = document.getElementById('input-email');
    const email = inputEmail.value;
    
    const inputpass = document.getElementById('input-pass');
    const pass = inputpass.value;
    
    if(email==='Ami@hossain.com' && pass==='hossain'){
        console.log('valid user');
    }
    else{
        console.log('invalid user');
    }
});