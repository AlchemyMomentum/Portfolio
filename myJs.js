//website last modified 
var modify = document.lastModified;
var modifyStyle = document.getElementById("lastModified");
modifyStyle.innerHTML = modify;

//-- Bootstrap Popover ---------------// 
$(function () {
    $('[data-toggle="popover"]').popover()
})

// -- Bootstrap Carousel -----------------//
$('.carousel').carousel({
    interval: 20000
})
