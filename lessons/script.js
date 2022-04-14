//  Dropdown
function drop(id) {
    let x = document.getElementById(id);
    x.classList.toggle("w3-show");
}



function GetRes() {
    let w = window.screen.availWidth;
    let h = window.screen.availHeight;
    return [w, h];
}

function ScaleElements() {
    let res = GetRes();
    let VIDEOS = document.getElementsByClassName("rs-ytvid");
    let responsivesize = 0 // mobile S


    if (res[0] >= 375) { // mobile M
        responsivesize = 1;
    }
    if (res[0] >= 425) { // mobile L
        responsivesize = 2;
    }
    if (res[0] >= 768) { // Tablet
        responsivesize = 3;
    }
    if (res[0] >= 1024) { // Laptop
        responsivesize = 4;
    }
    if (res[0] >= 1440) { // Laptop-L
        responsivesize = 5;
    }


    switch (responsivesize) { // Set the size

        case 0:
            for (let i = 0; i < VIDEOS.length; i++) {
                VIDEOS[i].style.width = "200px";
                VIDEOS[i].style.height = "150px";

            }
            break;
        case 1:
            for (let i = 0; i < VIDEOS.length; i++) {
                VIDEOS[i].style.width = "300px";
                VIDEOS[i].style.height = "225px";
            }
            break;
        case 2:
            for (let i = 0; i < VIDEOS.length; i++) {
                VIDEOS[i].style.width = "340px";
                VIDEOS[i].style.height = "255px";
            }
            break;
        case 3:
            for (let i = 0; i < VIDEOS.length; i++) {
                VIDEOS[i].style.width = "700px";
                VIDEOS[i].style.height = "526px";
            }
            break;
        case 5:
            for (let i = 0; i < VIDEOS.length; i++) {
                VIDEOS[i].style.width = "548px";
                VIDEOS[i].style.height = "412px";
            }
            break;
        default:
            for (let i = 0; i < VIDEOS.length; i++) {
                VIDEOS[i].style.width = "548px";
                VIDEOS[i].style.height = "412px";
            }
            break;


    }
    //  medium mobile

}


window.onresize = ScaleElements;
window.onload = ScaleElements;