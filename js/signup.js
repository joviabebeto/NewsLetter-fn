let form=document.querySelector(".signups");

form.addEventListener("submit",(e)=>{
    e.preventDefault();
    let firstName=document.querySelector("#firstName").value;
    let lastName=document.querySelector("#lastName").value;
    let email=document.querySelector("#email").value;
    let password=document.querySelector("#password").value;
    let confirmPassword=document.querySelector("#confirmPassword").value;
    const data={
        firstName,
        lastName,
        email,
        password,
        confirmPassword,
    };
    const setPostman={
        method:"POST",
        headers:{
            "Content-Type":"application/json",
        },
        body:JSON.stringify(data),

    };
    fetch(`https://odd-dog-jumpsuit.cyclic.app/api/v1/user`,setPostman)
    .then((response)=>{
        return response.json();
    })
.then((data)=>{
    alert(data.message);
})
.catch((err)=>{
    alert(err);
});
});