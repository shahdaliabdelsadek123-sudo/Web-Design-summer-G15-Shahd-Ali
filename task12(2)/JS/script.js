var btn = document.getElementById("changeImg");
var img = document.getElementById("myImg");

var change = true;

btn.addEventListener("click", function () {

    if (change == true) {
        img.src = "images/image.png1.jfif";
        change = false;
    } else {
        img.src = "images/image.png.jfif";
        change = true;
    }

});