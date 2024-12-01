
//================================      NAV-BAR  JAVASCRIPT  START      ================================//

// var overlay = document.getElementById("overlay");
// var body = document.getElementById("body");

// var nav_bar = document.getElementById("nav-bar");


// //////////////////////  SHOW NAV-BAR AND OVERLAY 

// var All = document.getElementById("all");

// All.addEventListener("click", () => {

//     // innner_nav.style.display = "block";
//     innner_nav.style.transform = "translateX(500px)";
//     nav_bar.style.transform = "translateX(0px)";
//     overlay.classList.add("overlay");
//     body.classList.add("overflow");
// });

// ////////////////////// HIDE NAV-BAR AND OVERLAY

// var hide_nav = document.getElementById("hide-nav");
// var innner_nav = document.getElementById("inner-nav-content");
// // console.log(innner_nav);

// hide_nav.addEventListener("click", () => {

//     nav_bar.style.transform = "translateX(-500px)";
//     nav_content.style.transform = "translateX(0px)";
//     // innner_nav.style.display = "none";
//     innner_nav.style.transform = "translateX(500px)";

//     overlay.classList.remove("overlay");
//     body.classList.remove("overflow");
// });



// //================================      NAV-BAR  JAVASCRIPT  OVER      ================================//





// //=========================    INNER CONTENT NAV-BAR  JAVASCRIPT  START     =========================//




// //*************** ECO AND ALEXA JAVASCRIPT START ***************** 


// var nav_content = document.getElementById("nav-content");
// var ecoshow = document.getElementById("eco");
// // console.log(eco);

// var eco = document.getElementById("echo&alexa");
// eco.addEventListener("click", () => {
//     nav_content.style.transform = "translateX(-500px)";
//     innner_nav.style.transform = "translateX(0px)";
//     ecoshow.style.transform = "translateX(0px)";

// });


//*************** ECO AND ALEXA JAVASCRIPT OVER *****************




//=========================    INNER CONTENT NAV-BAR  JAVASCRIPT  OVER     =========================//

// NOTE :-

// 1. Click on All Button to show nav bar
// 2 click on Eco & Alexa to show eco section , also show it's parent div( inner-nav-content ) and hide nav-content
// 3 click on close button to hide inner-nav-content and show nav-content
//
// 
var overlay = document.getElementById("overlay");
var body = document.getElementById("body");
var nav_bar = document.getElementById("nav-bar");


//////////////////////  SHOW NAV-BAR AND OVERLAY 

var All = document.getElementById("all");

All.addEventListener("click", () => {

    nav_bar.style.transform = "translateX(0px)";

    overlay.classList.add("overlay");
    body.classList.add("overflow");

});

////////////////////// HIDE NAV-BAR AND OVERLAY

var hide_nav = document.getElementById("hide-nav");


hide_nav.addEventListener("click", () => {

    overlay.classList.remove("overlay");
    body.classList.remove("overflow");

    var nav_content = document.getElementById("nav-content");
    var innner_nav = document.getElementById("inner-nav-content");

    nav_bar.style.transform = "translateX(-500px)";
    nav_content.style.transform = "translateX(0px)";
    innner_nav.style.transform = "translateX(500px)";


    var other_nav = document.querySelectorAll("#inner-nav-content div");

    other_nav.forEach(div => {
        div.style.display = "none";
    })

});



//================================      NAV-BAR  JAVASCRIPT  OVER      ================================//



//=========================    INNER CONTENT NAV-BAR  JAVASCRIPT  START     =========================//




//*************** ECO AND ALEXA JAVASCRIPT START ***************** 




var nav_content = document.querySelectorAll('#nav-content a');

nav_content.forEach(a => {
    a.addEventListener("click", function () {
        var bvalue = a.getAttribute('data-value');

        var nav_content = document.getElementById("nav-content");
        var innner_nav = document.getElementById("inner-nav-content");
        var ecoshow = document.getElementById("eco");

        if (bvalue === "echo&alexa") {
            nav_content.style.transform = "translateX(-500px)";
            ecoshow.style.display = "block";
            innner_nav.style.transform = "translateX(0px)";
        }

        var firetv = document.getElementById("fire");

        if (bvalue === "FireTV") {
            nav_content.style.transform = "translateX(-500px)";
            firetv.style.display = "block";
            innner_nav.style.transform = "translateX(0px)";
        }

    });
});


// if(bvalue=="echo&alexa"){
//     alert("Congratulations");
// }


//*************** ECO AND ALEXA JAVASCRIPT OVER *****************
 

// main manu btn 

var main_manu_btn = document.getElementById("Main-Manu");

main_manu_btn.addEventListener("click", function (e) {

    var nav_content = document.getElementById("nav-content");
    var innner_nav = document.getElementById("inner-nav-content");

    nav_content.style.transform = "translateX(0px)";
    innner_nav.style.transform = "translateX(500px)";


    var other_nav = document.querySelectorAll("#inner-nav-content div");

    other_nav.forEach(div => {
        div.style.display = "none";
    })

});