function drop(id) {
    let x = document.getElementById(id);
    x.classList.toggle("w3-show");

    /*
    if (x.className.indexOf("w3-show") == -1) {
        x.className += "w3-show";
        console.log(x.className);
        console.log("true");
        return;
    } else {
        //x.classname = x.className.replace("w3-show", "");
        x.classList.remove('w3-show');
        x.className.trimEnd()
        console.log(x.className);
        console.log("false");
        return;
    }
    */

}


$(document).ready(function() {

    alert("Ready!");

    $('.w3-teal').fadeOut();


});