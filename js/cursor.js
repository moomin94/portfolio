
let btn;
let imgWrap;
let contWrapList;
let cursorItem;
let circle;
let x = 0, y = 0;
let mx = 0, my = 0;

document.addEventListener("DOMContentLoaded", function () {
    btn = document.querySelectorAll('.btn');
    imgWrap = document.querySelectorAll('.img-wrap');
    contWrapList = document.querySelectorAll('.cont-wrap > ul > li');
    cursorItem = document.querySelector(".cursorItem");
    circle = cursorItem.querySelector(".circle");

    imgWrap.forEach(function (item) {
        item.addEventListener("mouseover", function (e) {
            circle.style.transform = "scale(.3)";
        });
        item.addEventListener("mouseout", function (e) {
            circle.style.transform = "scale(1)";
        });
    });

    contWrapList.forEach(function (item) {
        item.addEventListener("mouseover", function (e) {
            circle.style.transform = "scale(.6)";
        });
        item.addEventListener("mouseout", function (e) {
            circle.style.transform = "scale(1)";
        });
    });

    btn.forEach(function (item) {
        item.addEventListener("mouseover", function (e) {
            circle.style.transform = "scale(.3)";
        });
        item.addEventListener("mouseout", function (e) {
            circle.style.transform = "scale(1)";
        });
    });

    window.addEventListener("mousemove", function (e) {
        x = e.clientX;
        y = e.clientY;
    });

    loop();
});

function loop() {
    mx += (x - mx) * .09;
    my += (y - my) * .09;
    cursorItem.style.transform = "translate(" + mx + "px, " + my + "px )";

    requestAnimationFrame(loop);
}
