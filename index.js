const generateButton = document.getElementById("generateButton");
const copyButton = document.getElementById("copyButton");
const show = document.querySelector(".show");
const passwordInput = document.getElementById("password");





generateButton.onclick = function generatePassword(){
    
    const cantidad = document.getElementById("cantidad").value;
    const character = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*_";
    const pwdLength = cantidad;
    let password = "";

    for(let i = 0; i < pwdLength; i++){
        let generatePwd = Math.floor(Math.random() * character.length)
        password += character.substring(generatePwd, generatePwd + 1);
    }

    passwordInput.value = password;


};


copyButton.onclick = function copyPwd(){

    const passwordValue = passwordInput.value;

    if(passwordValue.trim() === ""){
        alert("NO HAS CREADO UNA CONTRASEÑA , PULSE EL BOTON DE GENERAR E INTANTALO DE NUEVO!!");
    }else{
        navigator.clipboard.writeText(passwordValue).then(function(){

            show.innerHTML = "TU CONTRASEÑA GENERADA ES :<br> " + passwordValue;
            show.classList.add("active");
            setTimeout(() => {
                show.classList.remove("active");
            }, 2000);
            passwordInput.value = "";
        });
    }

}