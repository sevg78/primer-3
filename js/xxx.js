var modal = document.getElementById("login")
var btn = document.getElementById("btn1")
var clos = document.getElementById("btn2")

btn.onclick = function () {
    modal.style.opacity = 1;
    modal.style.transition = '0.7s opacity';
    modal.style.pointerEvents = 'auto';
}
clos.onclick = function () {
    modal.style.opacity = 0;
    modal.style.transition = '0.7s opacity';
    modal.style.pointerEvents = 'none';
}
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.opacity = 0;
        modal.style.transition = '0.7s opacity';
        modal.style.pointerEvents = 'none';
    }
}


