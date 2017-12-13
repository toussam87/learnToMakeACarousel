window.onload = () => {

    //get navigating buttons & add event listeners to navigating buttons 
    document.querySelector(".prev").addEventListener("click", prevFunction, false);


    document.querySelector(".next").addEventListener("click", nextFunction, false);

    //get carousel slides, set variable to first slide of set 
    // let slides = document.querySelectorAll(".main ul li");
    //    initialSlide = slides[0];
    //    console.log(slides.length)
}


//get carousel 
let carousel = document.querySelector(".main");

//get navigating buttons 

let movingSlide = {
    currentVisibleSlide: 1,
    widthOfSlide: 300,
    numberOfSlides: 3
}

// let test = document.querySelectorAll(".main ul li");
//     console.log(test.length);

let prevFunction = () => {
    // console.log("test");
    // document.querySelector("ul").style.left="-300px";

    let slides = document.querySelectorAll("ul li");
    console.log(slides.length);


    switch (slides) {
        case slides[0]:
          console.log('don\'t move');
          break;
        case slides[1]: 
          console.log('move to left -300');
          document.querySelector("ul").style.left="-300px";    
          break;      
        case slides[2]: 
          console.log('move to left -600px');
          document.querySelector("ul").style.left="-600px";     
          break; 
        default:
          console.log('PREV NOPE');
      }
}

let nextFunction = () => {
    // console.log("next test");

    let slides = document.querySelectorAll("ul li");
    console.log(slides.length);

    switch (slides) {
        case 0 :
        console.log('move to left -300');
        document.querySelector("ul").style.left="-300px";   
          break;
        case [1]: 
          console.log('move to left -600');
          document.querySelector("ul").style.left="-600px";         
          break; 
        case [2]: 
          console.log('don\'t move');  
        default:
          console.log('NEXT NOPE');
      }
}


// - slides that is visible
// - width of the slide
// - how many slides there are

//FINAL QUESTION: How do I move my UL to the left in increments of 300 pixels depending on which slide number I'm on to a maximum allowed by the number of slides I have.

//find way to know which slide of the carousel is in view

//change class based on which slide should be in view and not in view