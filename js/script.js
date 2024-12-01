
window.onscroll = () => {
    var header1 = document.getElementById("header");
    if (window.scrollY > 75) {
        header1.classList.add("sticky");
    }
    else{
        header1.classList.remove("sticky");
    }
}


//==================== OVERLAY AND SEARCH-BAR BORDER JAVASCRIPT  START====================//


var overlay = document.getElementById("overlay");
var body = document.getElementById("body");

// SHOW OVERLAY

function outline() {
    var srch_container = document.getElementById("search-bar-container");
    var header = document.getElementById("header");

    overlay.classList.add("overlay");
    body.classList.add("overflow");
    srch_container.classList.add("active");
    header.style.zIndex = "1111";
}

// HIDE OVERLAY 

function hide() {
    var srch_container = document.getElementById("search-bar-container");
    var header = document.getElementById("header");

    overlay.classList.remove("overlay");
    body.classList.remove("overflow");
    srch_container.classList.remove("active");
    header.style.zIndex = "11";
}


//==================== OVERLAY AND SEARCH-BAR BORDER JAVASCRIPT  OVER ====================//





//============== GET SEARCH VALUE ==============


function srch() {
    var search = document.getElementById("search").value.toUpperCase();
    var main = document.getElementById("main");
    console.log(search);

    if (search == "SHIRT") {
        window.location.href = "#section3";
    }
    if (search == "SHOW") {
        main.style.display = "block";
    }

}


//================================== SLIDE BUTTON  ( SECTION 2 ) ==================================

// HOVER TO SHOW THE BUTTONS

// var right_slide_btn1 = document.getElementById("right-slide-btn1");
// var left_slide_btn1 = document.getElementById("left-slide-btn1");

// function showbtn() {
//     right_slide_btn1.style.display = "block";
//     left_slide_btn1.style.display = "block";
// }

// function hidebtn() {
//     right_slide_btn1.style.display = "none";
//     left_slide_btn1.style.display = "none";
// }


// SLIDE BUTTON 1

var hide_left_button = document.getElementById("left-slide-btn1");
var hide_right_button = document.getElementById("right-slide-btn1");



function sliderihgt() {
    var content = document.getElementById("content");
    // content.scrollBy(1000, 0);
    content.scrollLeft += 1248;


    if (content.scrollLeft >= (content.scrollWidth - content.clientWidth)) {
        hide_right_button.style.display = "none";
        hide_left_button.style.display = "block";
    }

}

function slideleft() {
    var content = document.getElementById("content");
    // content.scrollBy(-1000, 0);
    content.scrollLeft -= 1248;


    if (content.scrollLeft === 0) {
        hide_left_button.style.display = "none";
        hide_right_button.style.display = "block";
    }
}


// SLIDE BUTTON 2


function sliderihgt2() {
    var content2 = document.getElementById("content2");
    content2.scrollBy(1000, 0);
 
}

function slideleft2() {
    var content2 = document.getElementById("content2");
    content2.scrollBy(-1000, 0);
}



//================================== FOOTER LANGUAGE BUTTON  ==================================

var language_box = document.getElementById("language-box");

function showlanguage() {
    language_box.style.display = "block";
}

function hidelanguage() {
    language_box.style.display = "none";
}

