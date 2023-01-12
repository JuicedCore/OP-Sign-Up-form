let buddon = document.querySelector("#create-account").addEventListener("click",passchecker);
function passchecker(){
    let pass = document.querySelector("#password").value;
    let confpas = document.querySelector("#confpass").value;
    if (pass == confpas){
        document.querySelector(".pass").style.display = "none";
    }
    else{
        document.querySelector(".pass").style.display = "block";
    }
}