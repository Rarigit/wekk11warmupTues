function handleButtonClick(event){
    Cookies.set(`cupcake_consumed`, `true`);
}

function login(){
    Cookies.set(`username`, `bestUser`);
}

function logout(){
    Cookies.remove(`username`);
}


function switchUser(){
    //Check current cookie
    let currentUser = Cookies.get(`username`);
    //If the current username is bestUser, write the cookie with secondBestUser
    if (currentUser == `bestUser`){
        Cookies.set(`username`, `secondBestUser`);
    } else{
        Cookies.set(`username`, `bestUser`);
    }
    //Otherwise, write the cooie withBestuser
}


//Page loads, this starts running

let username = Cookies.get(`username`);

document.getElementById(`loginButton`).addEventListener(`click`, login);
document.getElementById(`logoutButton`).addEventListener(`click`, logout);

if (username != undefined){
    document.getElementById(`userGreeting`).innerText = `Hello, ${username}`;
}

document.getElementById(`cupcakeButton`).addEventListener(`click`, handleButtonClick);
document.getElementById(`switchUser`).addEventListener(`click`, switchUser);