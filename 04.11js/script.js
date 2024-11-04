// function word_index(sentence, word) {
//     console.log(sentence.indexOf(word));
    
// }

// word_index("hello millet Salam", "millet")


// 2

// function longest(sentence) {
//     let sozler = sentence.split(" ");
//     max_soz = sozler[0].length;
//     for (let i = 0; i < sozler.length; i++) {
//         if (sozler[i].length>max_soz){
//             max_soz = sozler[i].length
//         }
        
//     }
//     console.log(max_soz);
    
// }

// longest("hello dostlar necesiz")

// 3

// function anagram(word1, word2) {
//     let flag = false

//     if (word1.length == word2.length){

//         for (let i = 0; i < word1.length; i++) {
//             if (word2.includes(word1[i])){
//                 flag = true;    ``
//             }
//             else{
//                 flag = false
//             }
            
//         }
//         if (flag == false){
//             console.log("anaqram deyil");
//         }
//         else{
//             console.log("anaqramdir");
//         }
        

//     }
//     else{
//         console.log("anaqram deyil");
//     }
// }
// anagram("listen", "silentt")