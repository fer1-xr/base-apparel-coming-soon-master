//variables
const input = document.getElementById("input");
const btn = document.getElementById("btn");
const RegEmail = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
const msg = document.querySelector('.msg')
const error = document.querySelector('.error')
const msgError = document.querySelector(".big-error")
const form = document.getElementById("form")
//Functions
btn.addEventListener('click', function(event){
    event.preventDefault()
    const input_text = input.value;
    if(input_text .match(RegEmail)){
        input.style.border=`3px solid hsl(139, 74%, 74%)`;
        msg.classList.remove("msg")
        error.classList.add("error")
        msgError.classList.add("big-error")
        form.reset()
    }
    else{
        input.style.border=`3px solid hsl(0, 100%, 52%)`;
        error.classList.remove("error")
        msg.classList.add("msg")
        msgError.classList.remove("big-error")
    }
})
