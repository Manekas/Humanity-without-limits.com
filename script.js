const loginform = document.getElementById('loginform');
const signupform = document.getElementById('signupform');
const showsignup = document.getElementById('showsignupbtn');
const showlogin = document.getElementById('showloginbtn');


//event listener to switch to signup form when the sign up button is clicked
showsignup.addEventListener('click', ()=>{
    loginform.classList.add('hidden');
    signupform.classList.remove('hidden');
})

//event listener to switch to login form when the sign in button is clicked
showlogin.addEventListener('click', ()=>{
    loginform.classList.remove('hidden');
    signupform.classList.add('hidden');
})