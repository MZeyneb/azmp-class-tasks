// let array = [12, 23, 43, 54, 65, 67, 89, 90, 100];
// let result = [];
// for (let i = 0; i < array.length; i++) {
//     if(array[i] % 2 == 0){
//         result.push(array[i]);
//     }

// }
// let max = Math.max(...result)
// console.log(max);

// 2

// for (let i = 0; i < array.length; i++) {
//     if(i % 2 != 0){
//         result.push(array[i]);
//     }

// }
// max_tek_i = Math.max(...result)

// console.log(max_tek_i);

// 3

// kicik= Math.min(...array);
// boyuk = Math.max(...array);
// hasil = kicik * boyuk;
// cem = kicik + boyuk;
// console.log(hasil, cem);

// 4

// let eded = 362;

// reqem1 = Math.floor(eded /100);
// reqem2 = Math.floor((eded % 100) / 10);
// reqem3= eded % 10;

// cem = reqem1 + reqem2 + reqem3;
// console.log(cem);

// 5

// kicik= Math.min(...array);
// boyuk = Math.max(...array);
// for (let i = 0; i < array.length; i++) {
//     if(array[i] == boyuk){
//         array[i] = kicik;
//     }
//     else if(array[i] == kicik){
//         array[i] = boyuk;

//     }

// }

// console.log(array);

// 6
// let tekrar;
// for (let i = 0; i < array.length; i++) {
//     for (let j = i + 1; j < array.length; j++) {
//         if(array[i] == array[j]){
//             tekrar = array[i];

//         }

//     }

// }

// console.log(tekrar);

// 7

// kicik= Math.min(...array);
// boyuk = Math.max(...array);

// hasil = kicik * boyuk;
// ededi_orta = (boyuk + kicik) / 2;
// console.log(hasil, ededi_orta);

// 7-2

// let people = [
//     { name: "Aysel", age: 25 },
//     { name: "Rəşad", age: 30 },
//     { name: "Leyla", age: 18 },
//     { name: "Kamal", age: 40 }
// ];

// let yas_cem = 0;

// for (let i = 0; i < people.length; i++) {
//     yas_cem += people[i].age;

// }
// console.log(yas_cem/people.length);

// 8

// let people = [
//   { name: "Aysel", age: 25, city: "Bakı" },
//   { name: "Rəşad", age: 30, city: "Gəncə" },
//   { name: "Leyla", age: 18, city: "Bakı" },
//   { name: "Kamal", age: 40, city: "Sumqayıt" },
// ];

// for (let i = 0; i < people.length; i++) {
//   if (people[i].city == "Bakı" && people[i].age>20 ) {
//     console.log(people[i].name);
//   }
// }

// 10


// let array1 = [1, 3, 5, 7];
// let array2 = [2, 3, 6, 7, 8];

// for (let i = 0; i < array1.length; i++) {
//     for (let j = 0; j < array2.length; j++) {
//         if (array1[i] == array2[j]){
//             console.log(array1[i]);
//         }
        
//     }

    
// }

// 11

// let array =[-10,12,-23,40,60,73,-6,-20];
// let count_menfi = 0;
// let count_musbet = 0;
// for (let i = 0; i < array.length; i++) {
//     if(Math.sign(array[i]) == 1){
//         count_musbet++
//     }
//     else if(Math.sign(array[i]) == -1){
//         count_menfi++
//     }
// }

// console.log(count_menfi, count_musbet);

// 12


// let array =[-10,12,-23,40,60,73,-6,-20];
// let menfi_hasil = 1;
// let musbet_hasil = 1;
// for (let i = 0; i < array.length; i++) {
//     if(Math.sign(array[i]) == 1){
//         musbet_hasil *= array[i]
//     }
//     else if(Math.sign(array[i]) == -1){
//         menfi_hasil *= array[i]

//     }
// }

// console.log(menfi_hasil, musbet_hasil);
// 13

// let array =[11,12,14,56];
// let reverse = [];

// for (let i = array.length - 1; i >= 0; i--) {
//     reverse.push(array[i])
// }
// console.log(reverse);


// 14



