let toggleBtn = document.getElementById("toggle-btn")
let sideBar = document.getElementById("side-bar")
let bodyElement = document.getElementById("body-element")
toggleBtn.addEventListener("click", function(){
    event.stopPropagation();
    sideBar.classList.toggle("show");


})
bodyElement.addEventListener("click",function(){
    sideBar.classList.remove("show");

})
