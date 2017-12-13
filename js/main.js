window.onload = () => {

    //get navigating buttons & add event listeners to navigating buttons 
    document.querySelectorAll(".prev").forEach((buttonObj) => {
        console.log("foreach registered");
        buttonObj.addEventListener("click", prevFunction, false);
    });


    document.querySelectorAll(".next").forEach((buttonObj) => {
        console.log("foreach registered");
        buttonObj.addEventListener("click", nextFunction, false);
    });

    //get carousel slides, set variable to first slide of set 
    let slides = document.querySelectorAll(".main ul li");
       initialSlide = slides[0];
}


//get carousel 
let carousel = document.querySelector(".main");

//get navigating buttons 

let movingSlide = {
    currentVisibleSlide: 1,
    widthOfSlide: 300,
    numberOfSlides: 3
}

let prevFunction = () => {
    console.log("test");
    document.querySelector("ul").style.left="-300px";
}

let nextFunction = () => {
    console.log("next test");
    document.querySelector("ul").style.right="300px";
}


// - slides that is visible
// - width of the slide
// - how many slides there are

//FINAL QUESTION: How do I move my UL to the left in increments of 300 pixels depending on which slide number I'm on to a maximum allowed by the number of slides I have.

//find way to know which slide of the carousel is in view

//change class based on which slide should be in view and not in view