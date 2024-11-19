const regform = document.querySelector(".regform");
const regemail = document.querySelector(".regemail");
const regpass = document.querySelector(".regpass");
const reguser = document.querySelector(".reguser");
const users = localStorage.getItem("users", users) || [];
    

regform.addEventListener("submit", function(event){
    event.preventDefault();

    const user = {
        id: Date.now(),
        username: reguser.value.trim(),
        email: regemail.value.trim(),
        password: regpass.value,
        isLogged: false
    }
    users.push(user)
    localStorage.setItem("users", users);
    window.location.replace("login.html");
    regform.reset();

})