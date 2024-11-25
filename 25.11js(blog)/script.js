import { BASE_URL } from "./constants.js";

const container = document.querySelector(".container");

function renderCards(arr){
    container.innerHTML= "";
    arr.forEach((data) => {
        const card = document.createElement("div");
        card.classList.add("card");
        card.innerHTML = `
        <h2>${data.title}</h2>
        <h4>${data.body}</h4>
        <p>Written by ${data.author}</p>
        <div class="buttons">
        <button class="delete" data-id="${data.id}">Delete</button>
        <button class="edit">Edit</button>

        </div>
        
        `

        container.appendChild(card)

    });

    attachDeleteEventListeners();
}

function showData(endpoint){
    axios.get(`${BASE_URL}/${endpoint}`)
    .then((data)=>{
        console.log(data)
        renderCards(data.data)
    })

    .catch((err)=>{
        console.log(err);
    })
}function attachDeleteEventListeners() {
    const deleteBtns = document.querySelectorAll(".delete");

    deleteBtns.forEach((btn) => {
        btn.addEventListener("click", function () {
            const id = this.getAttribute("data-id");
            console.log("Deleting ID:", id);  
            deleting("blogs", id, this);
        });
    });
}

function deleting(endpoint, id, btn) {

    console.log(`Sending DELETE request to: ${BASE_URL}/${endpoint}/${id}`);
    
    axios.delete(`${BASE_URL}/${endpoint}/${id}`)
        .then((response) => {
            if (response.status === 200) {
                console.log(`Deleted blog with ID: ${id}`);
                btn.closest(".card").remove();  
            } else {
                console.log(`Failed to delete blog with ID: ${id}, Status: ${response.status}`);
            }
        })
        .catch((err) => {
            console.error("Error deleting the blog:", err);
        });
}


showData("blogs")