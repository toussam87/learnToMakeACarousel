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


let prevFunction = () => {
    alert("test");
}

let nextFunction = () => {
    alert("next test");
    let slides = document.querySelectorAll(".main ul li");
   console.log(slides.length)
}


// Array.prototype.push() adds element to end of array 
// Array.prototype.shift() removes first element in array

//find way to know which slide of the carousel is in view

//change class based on which slide should be in view and not in view