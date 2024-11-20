const logform = document.querySelector(".logform");
const loguser = document.querySelector(".loguser");
const logpass = document.querySelector(".logpass");

let users = JSON.parse(localStorage.getItem("users")) || [];

logform.addEventListener("submit", function(event) {
    event.preventDefault();

    const username = loguser.value.trim();
    const password = logpass.value;

    // Check if the user exists and the password matches
    const foundUser = users.find(user =>
        (user.username === username || user.email === username) && user.password === password
    );

    if (foundUser) {
        // Mark the user as logged in (you could store this in localStorage as well)
        foundUser.isLogged = true;
        localStorage.setItem("users", JSON.stringify(users));

        // Redirect to the home page
        window.location.replace("home.html");
    } else {
        alert("Invalid username or password. Please try again.");
    }
});
