const navbar = document.querySelector("nav")
const menuButton = document.getElementById("toggle")

menuButton.addEventListener("click",() => {
    navbar.classList.toggle("open")
} )