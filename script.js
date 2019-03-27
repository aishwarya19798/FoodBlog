var toggler = document.getElementById("navbar_toggler");
var navbar = document.getElementById("nav");
var close = document.getElementById("close");

toggler.addEventListener('click',function(){
    navbar.classList.toggle("hide");
})

close.addEventListener('click',function(){
    navbar.classList.toggle("hide");
})