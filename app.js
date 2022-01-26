const links = document.querySelectorAll('.link');
const sections = document.querySelectorAll('section');

let activeLink=0;
links.forEach((link,i) =>{
    link.addEventListener('click',() =>{
        if(activeLink !=i){
            links[activeLink].classList.remove('active');
            link.classList.add('active');
            sections[activeLink].classList.remove('active');

            setTimeout(() => {
                activeLink = i;
                sections[i].classList.add('active');
            },100);


        }
    })
})

debugger;
function play() {
    var audio = document.getElementById("audio");
    audio.play();
    audio.volume = 0.1;
  }

//form submit
// const name_form=document.getElementById('name');
// const email=document.getElementById('email');
// const message=document.getElementById('message');

// name_form.addEventListener('blur', valName);
// email.addEventListener('blur', valEmail);
// phone.addEventListener('blur', valPhone);

// function valName() {
//     const re = /^[a-zA-Z]{2,20}$/;
//     if(!re.test(name_form.value)) {
//         name_form.classList.add('is-invalid');
//     } else {
//         name_form.classList.remove('is-invalid');
//     }
//   }

// debugger;
// document.querySelector("myform").addEventListener("btnSubmit", handleSubmit);

// const handleSubmit = (e) => {
//   e.preventDefault()
//   let myForm = document.getElementById('myform');
//   let formData = new FormData(myForm)
//   fetch('/', {
//     method: 'POST',
//     headers: { "Content-Type": "application/x-www-form-urlencoded" },
//     body: new URLSearchParams(formData).toString()
//   }).then(() => console.log('Form successfully submitted')).catch((error) =>
//     alert(error))
//


