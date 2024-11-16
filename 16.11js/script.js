const num = document.querySelector(".num");
const start = document.querySelector(".start");
const from = document.querySelector(".num");
const change = document.querySelector("h2")

let counter = null;

start.addEventListener("click", function(){
    let count = +from.value;
    console.log(count);
    this.setAttribute("disabled", true);
    counter = setInterval(()=>{
        count--
        change.textContent = count
        if(count===0){
            clearInterval(counter)

        }
    }, 100)
    


})