window.onload = () => {
    //get navigating buttons & add event listeners to navigating buttons 
    document.querySelector(".prev").addEventListener("click", prevFunction, false);


    document.querySelector(".next").addEventListener("click", nextFunction, false);

    //get carousel slides, set variable to first slide of set 
    // let slides = document.querySelectorAll(".main ul li");
    //    initialSlide = slides[0];
    //    console.log(slides.length)
}

//get navigating buttons 
let movingSlide = {
    currentVisibleSlide: 1,
    widthOfSlide: 300,
    numberOfSlides: 3,
}

// let test = document.querySelectorAll(".main ul li");
//     console.log(test.length);
console.log(movingSlide.currentVisibleSlide)
let nextFunction = () => {

    if (movingSlide.currentVisibleSlide < 3) {
      document.querySelector("ul").style.left =  "-" + movingSlide.currentVisibleSlide * movingSlide.widthOfSlide + "px"; 
      movingSlide.currentVisibleSlide++;
      console.log(movingSlide.currentVisibleSlide);
    } 
    else if (movingSlide.currentVisibleSlide >= 3) {
        let nxtBtn = document.querySelector(".next");
            nxtBtn.className = 'noShow';
    }
}

let prevFunction = () => {
    
    document.querySelector("ul").style.left += movingSlide.widthOfSlide + "px"; 
    movingSlide.currentVisibleSlide--;
    console.log(movingSlide.currentVisibleSlide);
}


// - slides that is visible
// - width of the slide
// - how many slides there are

//FINAL QUESTION: How do I move my UL to the left in increments of 300 pixels depending on which slide number I'm on to a maximum allowed by the number of slides I have.

//find way to know which slide of the carousel is in view

//change class based on which slide should be in view and not in view