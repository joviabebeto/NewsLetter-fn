const categoryTable = document.querySelector(".category");
fetch("https://odd-dog-jumpsuit.cyclic.app/api/v1/category")
  .then((res) => {
    return res.json();
  })
  .then((data) => {
    data.data.map((category, index) => {
      categoryTable.innerHTML += `
        <tr>
        <td>${index + 1}</td>
        <td>${category.categoryName}</td>
        </tr>
       ` ;
    });
  });