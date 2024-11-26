import { BASE_URL } from "./constants.js";

const add = document.querySelector(".add");

const tbody = document.querySelector("tbody");
const modal = document.querySelector(".modal");
const modalBox = document.querySelector(".modalBox");
const x = document.querySelector("span")
const submit = document.querySelector(".sbmt")
const name = document.querySelector(".name")
const price = document.querySelector(".price")
const des = document.querySelector(".des")
const stock = document.querySelector(".stock")
const endpoints = {
    products : "products",
    users : "users",
    categories : "categories"

}


function drawTable(arr){
    tbody.innerHTML = "";
    arr.forEach(item => {

        const tr = document.createElement("tr");
        tr.innerHTML = `
        <td>${item.id}</td>
        <td>${item.name}</td>
        <td>${item.price}</td>
        <td>${item.description}</td>
        <td>${item.stock}</td>
        <td>
        <button class="edit">Edit</button>
        <button class="delete">Delete</button>
        
        
        </td>
        
        
        
        
        `
        tbody.appendChild(tr)

        
    });

}


function addProducts(endpoint){
    axios.get(`${BASE_URL}/${endpoint}`)
    .then((product)=>{
        console.log(product);
        drawTable(product.data)
    })
    .catch((error)=>{
        console.log(error);
    })

} 
addProducts("products")

add.addEventListener("click", function(){
    modal.style.display= "flex"

})

x.addEventListener("click", function(){
    modal.style.display= "none"

})

submit.addEventListener("click", function(){

    axios.post(`${BASE_URL}/${endpoints.products}`, {
        name : name.value.trim(),
        description : des.value.trim(),
        price : price.value.trim(),

    })

})


