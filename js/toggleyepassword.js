const togglepassword=document.querySelector("#togglepassworg");
const password=document.querySelector("#password")

togglepassword.addEventListener("click",function(e){
    const type=
    password.getAttribute("type")==="password" ?"text":"password";
    password.setAttribute("type",type);
    this.classlist.toggle("fas fa-eye");
});