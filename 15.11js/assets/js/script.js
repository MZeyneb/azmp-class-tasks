
import products from "./data.js"
// console.log(products);

const tbody = document.querySelector("tbody");
function drawtable(array) {
    // tbody.innerHTML = "";
    array.forEach(product => {
        const tr = document.createElement("tr");
        tr.innerHTML = `
        <td>${product.id}</td>
        <td><img src = "${product.image}" width = "100"></td>
        <td>${product.title}</td>
        <td>${product.price}</td>
        <td>${product.category}</td>
        <td>${product.rating.rate}</td>
        <td><i class="fa-solid fa-trash"></i></td>
        `
        tbody.appendChild(tr)


    });
}

drawtable(products)

const searchh = document.querySelector(".search");
searchh.addEventListener("input", function (event) {
    const filtered = products.filter((product) =>
        product.title.toLowerCase().includes(event.target.value.trim())

    );
    drawtable(filtered)
});
