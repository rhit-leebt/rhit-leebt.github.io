var rhit = rhit || {};


rhit.main = function () {
    console.log("Ready");

    var pageName = document.querySelector("#pageName");

    var i = 0;

    var upColor = setInterval(function() {
        pageName.style.color = rhit.getColorString(i);
        i+=2;
        if (i >= 255*6) {
            i = 0;
        }
    }, 10);
    
    //rhit.updateColor(pageName, i);
};

rhit.updateColor = function(element, i) {
    pageName.style.color = rhit.getColorString(i);
    console.log(pageName.style.color, i);
    i++;
    if (i > 255*6) {
        i = 0;
    }
}

rhit.getColorString = function (i) {
    if (i / 255 < 1) { // r -> y
        return "rgb(255," + i%255 + ", 0)"
    } else if (i / 255 < 2) { // y -> g
        return "rgb("+ (255-i%255) + ", 255, 0)"
    } else if (i / 255 < 3) { // g -> c
        return "rgb(0, 255, " + i%255 + ")"
    } else if (i / 255 < 4) { // c -> b
        return "rgb(0, "+ (255-i%255) + ", 255)"
    } else if (i / 255 < 5) { // b -> m
        return "rgb(" + i%255 + ", 0, 255)"
    } else { // m -> r
        return "rgb(255, 0, " + (255-i%255) + ")"
    } //(255-i%255)
}

rhit.main();
