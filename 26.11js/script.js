import { BASE_URL } from "./constants.js";

const products = document.querySelector(".products")
const search = document.querySelector(".search")

function drawCards(arr){

    products.innerHTML= "";
    arr.forEach(product => {
        const card = document.createElement("div");
        card.classList.add("card");
        card.innerHTML = `
        <div class="image">
        <img src="${product.image}">
        
        </div>
        <h2>${product.name}</h2>
        <p>${product.description}</p>
        <p>Price: ${product.price}</p>
        `
        products.appendChild(card)
        
    });
}

let arr = [];

function addProducts(endpoint){
    axios.get(`${BASE_URL}/${endpoint}`)
    .then((product)=>{
        console.log(product);
        arr = product.data;
        drawCards(product.data)
    })
    .catch((error)=>{
        console.log(error);
    })

}



addProducts("products")

search.addEventListener("keyup", function(){
    const filtered = arr.filter((item) =>
        item.name.toLowerCase().includes(search.value.toLowerCase())
    );
    drawCards(filtered)
})