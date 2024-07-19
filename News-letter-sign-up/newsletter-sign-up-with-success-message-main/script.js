const subscribeBtn=document.querySelector('.mail-part button')
const container=document.querySelector('.container')
const thanks=document.querySelector('.thank-you')
const dismiss=document.querySelector('.thank-you button')
const userEmail=document.querySelector('.email-input input')
const spanError=document.querySelector('.error')
const mailId=document.querySelector('.mail-id')

function validateEmail(email) {
    const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    console.log("validate");
    return re.test(String(email).toLowerCase());
}


subscribeBtn.addEventListener('click',()=>{
    if(userEmail.value!='' && validateEmail(userEmail.value)){
        container.setAttribute('id','remove');
    thanks.setAttribute('id','done');
    mailId.innerText=userEmail.value;
    }else{
        spanError.innerText="Enter a valid email-address";
        userEmail.style.color="red";
        document.querySelector('.email-input').style.borderColor="red";
        document.querySelector('.email-input').style.backgroundColor="pink";
        userEmail.style.backgroundColor="pink";
    }})
  
    
dismiss.addEventListener('click',()=>{
        window.location.reload();
        
    })
   





