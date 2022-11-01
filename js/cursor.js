
let btn;
let cursorItem;
let circle;
let x = 0, y = 0;
let mx = 0, my = 0;

window.onload = function(){
    btn = document.querySelectorAll('.btn');
    cursorItem = document.querySelector(".cursorItem");
    circle = cursorItem.querySelector(".circle");

    btn.forEach(function(item){
        item.addEventListener("mouseover", function(e){
            circle.style.transform = "scale(.3)";
        });
        item.addEventListener("mouseout", function(e){
            circle.style.transform = "scale(1)";
        });
    });

    window.addEventListener("mousemove", function(e){
        x = e.clientX;
        y = e.clientY;
    });
    
    loop();
}

function loop(){
    mx += (x - mx ) * .09;
    my += (y - my ) * .09; 
    cursorItem.style.transform = "translate("+ mx +"px, "+ my + "px )";

    requestAnimationFrame(loop);
}