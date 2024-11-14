
const questions = document.querySelectorAll(".question")
const texts= document.querySelectorAll(".text");

    questions.forEach(element => {
        element.addEventListener("click", function () {
            texts.forEach(elem => {
                if(elem.style.height == "200px"){
                    elem.style.height = "0px"
                }
                else if(elem.style.height = "0"){
                    elem.style.height = "200px"
                }
                
                
                
            });
            


        })

    });