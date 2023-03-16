const Password=document.getElementById("password");
const button =document.querySelector("button");
button.addEventListener("click", () =>{
   if(Password.type !== "password")
    {
    button.innerText = "Password Hidden";   
    Password.setAttribute("type", "password"); 
    button.innerText = "Password";   
    }else if (Password.type === "password") {
    button.innerText = "Password Hidden"; 
    Password.setAttribute("type", "text"); 
    button.innerText = "Show Password"; 
}
    
   
});

