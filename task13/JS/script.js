var users = [
    {
        name: "Shahd",
        email: "shahd@gmail"
    },
    {
        name: "Ali",
        email: "ali@gmail"
    }
];

localStorage.setItem("users", JSON.stringify(users));

console.log(JSON.stringify(users));

let data = JSON.parse(localStorage.getItem("users"));

var containar = document.getElementById("containar");

data.forEach(function(user) {

    var div = document.createElement("div");

    div.innerHTML = `
        <h2>${user.name}</h2>
        <p>${user.email}</p>
    `;

    console.log(div);

    containar.appendChild(div);
});