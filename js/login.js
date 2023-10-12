const form=document.querySelector(".login");
form.addEventListener("submit",(e)=>{
    e.preventDefault();
    let email=document.querySelector("#email").value;
    let password=document.querySelector("#password").value;
    const data={
        email,
        password,
    };
    const setPostman={
        method:"POST",
        Headers:{
        "Content-Type":"application/json",
    },
    body:JSON.stringify(data),

    };
    fetch(`https://odd-dog-jumpsuit.cyclic.app/api/v1/login`,setPostman)
})