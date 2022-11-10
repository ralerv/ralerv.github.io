let menuIcon = document.getElementById ("menu-icon")
let menuList = document.getElementById ("nav-list")

menuIcon.addEventListener ("click", showmenu)

function showmenu() {
    menuList.classList.toggle("nav-list--show")
}