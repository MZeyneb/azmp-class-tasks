const logform = document.querySelector(".logform");
const loguser = document.querySelector(".loguser");
const logpass = document.querySelector(".logpass");

const users = localStorage.getItem("users", users) || [];

    logform.addEventListener("submit", function(event){
        event.preventDefault();
        let pass = logpass.value;
        let userlog = loguser.value.trim();
        const foundUser = users.find(
            (user) =>
              user.password === password &&
              (user.userName === userNameOrEmail)
          );
    })
