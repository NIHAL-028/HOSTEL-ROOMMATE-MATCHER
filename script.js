// DARK MODE

const darkBtn = document.getElementById("darkModeBtn");

darkBtn.addEventListener("click", () => {

    document.body.classList.toggle("dark-mode");

});


// OPEN LOGIN MODAL

function openLoginModal(){

    document.getElementById("loginModal").style.display = "block";

}


// CLOSE LOGIN MODAL

function closeLoginModal(){

    document.getElementById("loginModal").style.display = "none";

}


// LOGIN USER

function loginUser(e){

    e.preventDefault();

    localStorage.setItem("isLoggedIn","true");

    window.location.href = "preferences.html";

}