let menuIcon = document.getElementById("menu-icon")
let menuList = document.getElementById("nav-list")
let menuLink = document.getElementsByClassName("nav-link")

menuIcon.addEventListener("click", showmenu)

for (let index = 0; index < menuLink.length; index++) {//Como usar addEventListener para getElementsbyClass
    menuLink[index].addEventListener("click", hidemenu) 
}

function showmenu() {
    menuList.classList.toggle("nav-list--show")
    menuIcon.classList.toggle("menu-icon-img--show")
}

function hidemenu() {
    menuList.classList.toggle("nav-list--show")
    menuIcon.classList.toggle("menu-icon-img--show")
}