// for (let i = 0; i < 100; i++) {
//     if (i%2==0){
//         console.log(i)
//     }
    
// }

// let count = 0;

// for (let i = 0; i < 100; i++) {
//     if (i%2!=0){
//         count++
//     }

// console.log(count);
    
// }

// let cem = 0

// for (let i = 0; i < 100; i++) {
//     if (i%5==0){
//         cem+= i
//     }
    
// }

// console.log(cem);

// 1---------

let array =[12,14,35,56,68,93]


// let sum = 0;

// for (let i = 0; i < array.length; i++) {
//     sum+= array[i]
    
// }

// console.log(sum);


// 2-------

// for (let i = 1; i < array.length; i=i+2) {
// console.log(array[i]);

    
// }

// 3------


// for (let i = 0; i < array.length; i=i+2) {
//     console.log(array[i]);
    
        
//     }
    

// 4---

// let largest = array[0];

// for (let i = 0; i < array.length; i++) {

//     if(array[i]>largest){
//         largest = array[i]
//     }
    
    
// }

// console.log(largest);
// 5-------

// let largest = array[0];
// let lowest = array[0]

// for (let i = 0; i < array.length; i++) {

//     if(array[i]>largest){
//         largest = array[i]
//     }
    
    
    
// }

// for (let i = 0; i < array.length; i++) {

//     if(array[i]<lowest){
//         lowest = array[i]
//     }
    
    
    
// }

// console.log(largest-lowest);


// 6------

// let eded = +prompt("eded yazin: ");

// for (let i = 0; i < array.length; i++) {
//     if (eded == array[i]){

//         alert(`${array[i]} arrayde var`);
//     }
    
// }

// 7-----
// const employees = [
//     { name: "Jamil", salary: 50000, department: "IT" },
//     { name: "Jale", salary: 60000, department: "HR" },
//     { name: "Bayram", salary: 55000, department: "IT" },
//     { name: "Sahil", salary: 75000, department: "HR" },
//     { name: "Maryam", salary: 65000, department: "IT" },
//     { name: "Elnara", salary: 80000, department: "HR" },
//     { name: "Davud", salary: 70000, department: "IT" },
//   ];


// for (let i = 0; i < employees.length; i++) {
//     if(employees[i].salary >6000){
//         console.log(employees[i].name);
//     }
    
// }

// let eded = +prompt("eded daxil edin: ")
// let faktorial = 1;
// for (let i = 1; i < eded+1; i++) {
//     faktorial *=i
    
// }
// alert(faktorial);


// let str = "lorem ipsum dolor".toLowerCase;
// let count = 0;
// for (let i = 0; i < str.length; i++) {
//     if (str[i]== "l"){
//         count++
//     }
    
// }
// console.log(count);

// const countries = ["azerbaijan", "norway", "albania", "germany", "america"];

// for (let i = 0; i < countries.length; i++) {
//     if(countries[i][0]== "a"){
//         console.log(countries[i]);
//     }
    
// }


// for (let i = 0; i < countries.length; i++) {
//     if(countries[i][0]== "a" && countries[i][countries[i].length-1]== "a"){
//         console.log(countries[i]);
//     }
    
// }

// let eded = +prompt("eded yazin");
// for (let i = 2; i < eded; i++) {
//     if(eded % i == 0){
//         break
        
//     }
//     else{
        
//         alert("sadedir");
//     }
    
// }

const scores = [70, 85, 92, 100, 86]
// let eded = prompt("eded yazin: ");
// for (let i = 0; i < eded.length; i++) {
//     if(eded[0])
    
// }

// sum = 0;

// for (let i = 0; i < scores.length; i++) {
//     sum+= scores[i]
    
    
// }

// console.log(scores.length);

max = 0;

for (let i = 0; i < scores.length; i++) {
    if(scores[i]>scores[i-1]){
        max = scores[i]
    }
    
    
}

console.log(max);