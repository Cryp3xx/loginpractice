const database = [
    "pepik.ahoj1",
    "jana.pizza2",
    "karel.kočka3",
    "eva.12345"
];

function loginuser() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    const loginData = username + "." + password;

    for (let i = 0; i < database.length; i++) {
        if (loginData === database[i]) {
            console.log("Login successful.");
            window.location.href = "loginsuccess.html";
            return;
        }
    }

    console.log("Login Failed.");
    window.location.href = "loginfailed.html";
}