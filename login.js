let button=document.querySelector("button")
let form=document.forms[0]
let input=form.elements[0]
let input2=form.elements[1]
let body=document.querySelector("body")
let p=document.querySelector("p")

p.style.color="red"
p.style.fontWeight="700"

button.addEventListener("click",(e)=>{
    e.preventDefault()
  
    if (input2.value.length<12 ) {
        p.innerHTML="Must contain twelve characters or more ."
        input2.value=""
    }
    else{
        p.innerHTML=""
        input2.value=""
    }
    
})