
const links = document.getElementById("links");
const menu = document.getElementById("menu");
const list = document.getElementsByTagName("span");
links.onclick = () => {
    menu.classList.toggle("show");
    list[2].style.width = (list[2].style.width == "100%" ? "70%" : "100%");
};