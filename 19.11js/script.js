const namee = document.querySelector(".name");
const score = document.querySelector(".score");
const submit = document.querySelector(".submit");
const form = document.querySelector("form")
const calc = document.querySelector(".calc")



let array = [];
// localStorage.getItem("students", JSON.stringify(array)); 

function adding(){
    const nameval = namee.value
    const scoreval = +score.value
    let obj = {
        "id": Date.now(),
        "name:": nameval,
        "score": scoreval
    }

    array.push(obj)
    localStorage.setItem("students", JSON.stringify(array));
    namee.value = "";
    score.value = "";

    
    
}

function average(arr){
    const scoreval = +score.value
    let sum = 0
    let av =0
    arr.forEach(student => {
        sum+=student.score
        
    });

    av = sum / array.length
    console.log(av);

}

form.addEventListener("submit", function(event){
    event.preventDefault(); 
    adding()
});

calc.addEventListener("click", function(){
    average(array)
    console.log();
})

