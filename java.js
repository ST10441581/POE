const form =document.getElementById('form');
const firstname=document.getElementById('firstname');
const Surname=document.getElementById('Surname');
const password=document.getElementById('password');
const Email=document.getElementById('Email');
const Phone=document.getElementById('Phone');

form.addEventListener('submit', e =>{

    e.preventDefault();

    validateInput();

});

const setError =(element,message) =>{
    const inputControl=element.parentElement;
    const errorDisplay= inputControl.querySelector('.error');

    errorDisplay.innerText=message;
    inputControl.classList.add('error');
}

const setSucess =element =>{
    const inputControl=element.parentElement;
    const errorDisplay= inputControl.querySelector('.error');

    errorDisplay.innerText='';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
};

const isValidEmail =Email =>{
    const re =/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(Email).toLowerCase());
}

const validateInput=()=>{

    const firstnamevalue=firstname.value.trim();
    const Surnamevalue=Surname.value.trim();
    const passwordvalue=password.value.trim();
    const Emailvalue=Email.value.trim();
    const Phonevalue=Phone.value.trim();

    if (firstnamevalue === ''){
        setError(firstname,'firstname is required');
    }else{
        setSucess(firstname);

    }

    if(Emailvalue === ''){
        setError(Email,'Email is required');
    }else if(!isValidEmail(Emailvalue)) {
        setError(Email,'provide a valid email address')
    }else{
        setSucess(Email);
    }

    if(passwordvalue === ''){
        setError(password,'password required');
    }else if(passwordvalue.length < 5) {
        setError(password, 'passowrd must be at least 5 characters.')
    }else{
        setSucess(password);
    }

    

};