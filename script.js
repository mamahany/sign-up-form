const passInput = document.querySelector("#password");
const confirmPassInput = document.querySelector("#confirm-password");
const passDiv = document.querySelector("#password-div");

passInput.addEventListener("input", ()=>{
    if(passInput.value !== confirmPassInput.value){
        passDiv.style.setProperty('--after-content', "'Passwords do not match!'");
        passInput.setAttribute("style", "border: 1px solid red;");
        confirmPassInput.setAttribute("style", "border: 1px solid red;");
    }else{
        passDiv.style.setProperty('--after-content', "''");
        passInput.removeAttribute("style", "border: 1px solid red;")
        confirmPassInput.removeAttribute("style", "border: 1px solid red;")
    }
    
})
confirmPassInput.addEventListener("input", ()=>{
    if(passInput.value !== confirmPassInput.value){
        passDiv.style.setProperty('--after-content', "'Passwords do not match!'");
        passInput.setAttribute("style", "border: 1px solid red;");
        confirmPassInput.setAttribute("style", "border: 1px solid red;");
    }else{
        passDiv.style.setProperty('--after-content', "''");
        passInput.removeAttribute("style", "border: 1px solid red;")
        confirmPassInput.removeAttribute("style", "border: 1px solid red;")
    }
    
})