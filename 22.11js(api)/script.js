import { BASE_URL } from "./constants.js";
const tBody = document.querySelector("tbody")

function getData(endpoint){
    fetch(`${BASE_URL}/${endpoint}`)
    .then((response)=> {
        return response.json()
    })
    .then((data)=> {
        console.log(data);
        drawTable(data)
    })
    .catch((err)=> {
        console.log(err);
    })

}
getData("customers")
function getDataId(endpoint, id){
    fetch(`${BASE_URL}/${endpoint}/${id}`)
    .then((response)=>{
        return response.json()
    })
    .then((data)=>{
        console.log(data);
    })
    .then((err)=>{
        console.log(err);
    })

}

// function deleteId(endpoint, id){
//     fetch (`${BASE_URL}/${endpoint}/${id}`, {
//         method: "DELETE",

//     })

//     .then((res)=>{
//         console.log(res);
//     })
//     .then((err)=>{
//         console.log(err);
//     });
// }

// deleteId("customers", "BLAUS")



function drawTable(arr) {
    tBody.innerHTML = "";
    arr.forEach((item) => {
      tBody.innerHTML += `
          <tr>
              <td>${item.id}</td>
              <td>${item.companyName}</td>
              <td>${item.contactTitle}</td>
              <td>${item.address?.phone}</td>
              <td>${item.address?.street}</td>
              <td>${item.address?.city}, ${item.address?.country}</td>
              <td class="d-flex gap-2">
                  <button class="delete btn btn-outline-danger" data-id=${item.id}>delete</button>
                  <button class="edit btn btn-outline-success">edit</button>
                  <a class="btn btn-outline-primary d-flex align-items-center" href="details.html?id=${item.id}">details</a>
              </td>
          </tr>
      `;
    });
  
}