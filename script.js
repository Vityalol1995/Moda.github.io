document.body.onload = function() {
    setTimeout(function() {
        var preloader = document.getElementById("page-preloader");
        if( !preloader.classList.contains("done") )
            {
                preloader.classList.add("done");
            }
    }, 1000)
}

var cursor = document.getElementById("cursor");
document.addEventListener("mousemove", function(e) {
    var x = e.clientX;
    var y = e.clientY;
    cursor.style.left = x + "px";
    cursor.style.top = y + "px";
})


var scene = document.getElementById('scene');
var parallaxInstance = new Parallax(scene);

var swiper = new Swiper('.swiper-container');


