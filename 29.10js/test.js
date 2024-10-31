// let yas = prompt("zehmet olmasa yasinizi daxil edin: ");
// if (yas>=0 && yas<125){
//     if (yas>=65){
//         alert("pensiya yasiniz catib.");
//     }
//     else{
//             alert("hele yasiniz pensiya ucun uygun deyil.");
        
//     }
// }

// else{

//     alert("duzgun yas daxil edin")
// }


// 2----------------



// let teref1 = prompt("birinci daxil et: ");
// let teref2 = prompt("ikinci daxil et: ");
// let teref3 = prompt("ucuncu daxil et: ");
// if (teref1==teref2==teref3){
//     alert("beraberterefli");
// }
//     else if(teref1==teref2!=teref3){
//     alert("beraberyanli");
    
// }
// else{
//     alert("muxtelifteref")
// }




// 3---------

// let eded = prompt("ededi daxil et: ");

// if (eded%2==0){
//     alert("eded cutdur")
// }

// else{
//     alert("eded tekdir.")
// }


// 4------

// let ay = +prompt("ay daxil edin: ")
// switch(ay) {
//       case 1:
//         alert("yanvar");
//       break;
//       case 2:
//         alert("fevral");
//       break;
//       case  3:
//         alert("mart");
//       break;
//       case 4:
//         alert("aprel");
//       break;
//       case 5:
//         alert("may");
//       break;
//       case 6:
//         alert("iyun");
//       break;
//       case  7:
//         alert("iyul");
//       break;
//       case 8:
//         alert("avqust");
//       break;
//       case 9:
//         alert("sentyabr");
//       break;
//       case 10:
//         alert("oktyabr");
//       break;
//       case 11:
//         alert("noyabr");
//       break;
//       case 12:
//         alert("dekabr");
//       break;
//     default: alert("duzgun ay daxil edin.")
      
//   }


// 5-------


// let eded = prompt("eded daxil edin: ")

// if (eded>0){


//     if (eded % 3 == 0 && eded % 5 == 0){
//         alert("3-e ve 5-e bolunur.")
//     }
//     else{
//         alert("eyni anda bolunmur")
//     }


// }

// else{
//     alert("duzgun eded daxil edin.")
// }


// 6----


// let eded = prompt("eded daxil edin: ")


// if (eded>0){

//     if (eded%2==0){
    
    
//         alert("2-ye tam bolunur.")
    
    
//     }

//     else{

//         alert(eded%2)
//     }




// }

// else{
//     alert("duzgun eded daxil edin.")
// }


// 7------

// let eded1 = prompt("birinci ededi daxil edin");
// let eded2 = prompt("ikinci ededi daxil edin");

// if (eded1*eded2 > 0){
//     alert("hasili musbetdir.");

// }

// else{
//     alert("hasili menfidir.");


// }

// 8----


// let eded = prompt("eded daxil edin: ")

// if (eded < 100 && eded >1){
//     alert("1-100 arasindadir.")
// }

// else{

//     alert("1-100 arasinda deyil.")
// }

// 9-----

// let eded1 = prompt("birinci ededi daxil edin");
// let eded2 = prompt("ikinci ededi daxil edin");
// let eded3 = prompt("ucuncu ededi daxil edin");


// if (eded1 > eded2 && eded1 >eded2){
//     alert(`en boyuyu ${eded1}`);

   

// }

// else if(eded2 > eded3 && eded2 >eded1){
//     alert(`en boyuyu ${eded2}`);

// }

// else if(eded3 > eded2 && eded3 >eded1){
//     alert(`en boyuyu ${eded3}`);

// }



// else{
//     alert("eynidirler");
// }


// 10-------


// let telebe_bali = prompt("balinizi daxil edin");

// if (telebe_bali<= 100 && telebe_bali>=0){

//     if (telebe_bali >= 90){
//         alert( "A")
//     }
//     else if(telebe_bali >= 80){
//         alert( "B");
//     }
//     else if(telebe_bali >= 70){
//         alert("C");
//     }
//     else if(telebe_bali >= 60){
//         alert("D");
//     }
//     else if(telebe_bali < 60){
//         alert( "E");
//     }

// }



// else{
//     alert("duzgun bal daxil edin.")
// }

// 11-----


// let yas = prompt("yasinizi daxil edin: ")
// if (yas<=65){
//     if (yas<18){
//         alert("yeniyetmesiz.")
//     }
//     else if(yas>=18 && yas<65){
//         alert("yetkinsiz")
//     }
// }

// else{
//     alert("yasiniz 65-den yuxaridir.")
// }

// 11------

// let saat = prompt("saati daxil edin (mes. 16)");
// if (saat >= 5 && saat <=11){
//     alert("sabahiniz xeyir!");
// }
// else if(saat >= 12 && saat <=17){
//     alert("gunortaniz xeyir!");


// }
// else if(saat >= 18 && saat <=4){
//     alert("axsaminiz xeyir!");


// }

// else{
//     alert("duzgun saat daxil edin.")
// }


// 12----


// let x = +prompt("x daxil edin: ");
// let y = +prompt("y daxil edin: ");

// if (x > 0 && y<0 ){
//     alert(4*x+2*y+4);
// }
// else if (x > 0 && y==0 ){
//     alert(2*x-y+3);
// }
// else if (x < 0 && y>0 ){
//     alert(3*x+4*y+3);
// }
// else{
//     alert("duzgun eded daxil edin.")
// }


// elave1-------------


// let eded1 = +prompt("eded1: ");
// let eded2 = +prompt("eded2: ");
// let eded3 = +prompt("eded3: ");

// sum = eded1+eded2+eded3
// alert(sum/3)


// elave2

// namee = prompt("your name: ");
// surname = prompt("your surname: ");
// full_name= namee + " " +surname;
// alert(full_name)

// elave3

let emekhaqqi = +prompt("emek haqqi: ");
let mebleg = +prompt("istediyiniz mebleg: ");
let muddet = +prompt("istediyiniz muddet(ay): ");
let max_mud = 36;
let max_kredit = emekhaqqi * 10;
let max_ayliq = emekhaqqi * 0.45;

let kredit;
let borc;
let ayliq;
let faiz;
if(muddet<max_mud){
    
    if(muddet>0 && muddet < 12){
        faiz = (mebleg*13)/100;
        
        borc= mebleg + faiz;
        ayliq = borc/muddet;
        if (ayliq > max_ayliq) {
            alert("Size bu shertlerle kredit dushmur.");

        }
        else{

            alert(`${mebleg}azn mebleg size 17%le ${muddet} ay muddetinde ayliq ${ayliq} azn ile verilir.`);

        }

    }
    else if(muddet>=12 && muddet < 24){
        faiz = (mebleg*15)/100;
        
        borc= mebleg + faiz;
        ayliq = borc/muddet;
        if (ayliq > max_ayliq) {
            alert("Size bu shertlerle kredit dushmur.");

        }
        else{

            alert(`${mebleg}azn mebleg size 17%le ${muddet} ay muddetinde ayliq ${ayliq} azn ile verilir.`);

        }

    }
    else if(muddet>=24 && muddet < 36){
        faiz = (mebleg*17)/100;
        
        borc= mebleg + faiz;
        ayliq = borc/muddet;
        if (ayliq > max_ayliq) {
            alert("Size bu shertlerle kredit dushmur.");

        }
        else{

            alert(`${mebleg}azn mebleg size 17%le ${muddet} ay muddetinde ayliq ${ayliq} azn ile verilir.`);

        }

    }

}
else if (mebleg > max_kredit) {
    alert("Size bu shertlerle kredit dushmur.");
}
    
else{
    alert("size bu sertlerle kredit dusmur.")
}
