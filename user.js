var signUp = document.getElementById('pg_switch')
var form = document.getElementById('form')
var formRight = document.getElementById('form_right')

signUp.addEventListener("click" ,()=>{
    console.log('in')
    form.classList.add('grid')
    if (formRight.hasAttribute('style', 'display:none')) {
        formRight.setAttribute('style', 'display:block')
        console.log('out')
    }else{
        return
    }
})

