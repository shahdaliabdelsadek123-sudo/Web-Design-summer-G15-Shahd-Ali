var form = document.getElementById("myForm");
var nameInput = document.getElementById("name");
var emailInput = document.getElementById("email");
var divContainer = document.getElementById("divContainer");
form.addEventListener("submit", function (e) {
    e.preventDefault();
    var name = nameInput.value;
    var email = emailInput.value;
    if (name == "" || email == "") {
        alert("please enter your name and email");
        return;
    }

    var userDiv = document.createElement("div");
    userDiv.classList.add("alert", "alert-primary", "mt-3");

    var userName = document.createElement("h3");
    userName.innerText = name;

    var userEmail = document.createElement("h4");
    userEmail.innerText = email;

    userDiv.append(userName);
    userDiv.append(userEmail);

    divContainer.append(userDiv);

    nameInput.value = "";
    emailInput.value = "";
});