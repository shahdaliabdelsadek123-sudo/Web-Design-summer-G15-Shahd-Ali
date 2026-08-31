var users = [
    {
        name: "Mariam",
        id: 4,
        balance: 10000
    },
    {
        name: "Omar",
        id: 7,
        balance: 6000
    },
    {
        name: "Laila",
        id: 3,
        balance: 8000
    },
        {
            name: "Ali",
            id: 5,
            balance: 50000
        },
        {
            name: "Aya",
            id: 10,
            balance: 22000
        },
];


function addUser() {

    var userName = prompt("Enter user name:");
    var userId = Number(prompt("Enter user ID:"));
    var userBalance = Number(prompt("Enter user balance:"));

    var exist = users.find(function(element) {
        return element.id == userId;
    });

    if (exist) {
        alert("This ID is already taken");
    } else {

        users.push({
            name: userName,
            id: userId,
            balance: userBalance
        });

        alert("New user added successfully");
    }
}

addUser();
console.table(users);


function editUserBalanceById() {

    var userId = Number(prompt("Enter user ID:"));
    var newBalance = Number(prompt("Enter new balance:"));

    var selectedUser = users.find(function(element) {
        return element.id == userId;
    });

    if (selectedUser) {
        selectedUser.balance = newBalance;
        alert("Balance changed successfully");
    } else {
        alert("User does not exist");
    }
}

editUserBalanceById();
console.table(users);


function transferBalance() {

    var fromID = Number(prompt("Enter sender ID:"));
    var toID = Number(prompt("Enter receiver ID:"));
    var balance = Number(prompt("Enter amount to transfer:"));

    var fromUser = users.find(function(element) {
        return element.id == fromID;
    });

    var toUser = users.find(function(element) {
        return element.id == toID;
    });

    if (!fromUser || !toUser) {
        alert("Please check the user ID");
        return;
    }

    if (fromUser.balance < balance) {
        alert("Your balance is not enough");
        return;
    }

    fromUser.balance -= balance;
    toUser.balance += balance;

    alert("The transfer was completed");
}

transferBalance();
console.table(users);


function deleteUserById() {

    var userId = Number(prompt("Enter user ID to delete:"));

    var userIndex = users.findIndex(function(element) {
        return element.id == userId;
    });

    if (userIndex != -1) {
        users.splice(userIndex, 1);
        alert("User removed successfully");
    } else {
        alert("User does not exist");
    }
}

deleteUserById();
console.table(users);