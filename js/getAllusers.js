const token = window.localStorage.getItem("token");
const table = document.querySelector(".tableusers")
const api =`https://odd-dog-jumpsuit.cyclic.app/api/v1/user`;

fetch(api,{

    headers:{
        "auth-token": token,
    },
})
.then((response)=>{
    return response.json()
}).then((data)=>{
    data.data.map((user, index) => {
             table.innerHTML += `
                <tr>
                <td>${index + 1}</td>
            <td>${user.firstName}</td>
                <td>${user.lastName}</td>
             <td>${user.email}</td>
            <td>${user.role}</td>
                </tr>
         `;
            });   });
   
