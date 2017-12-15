window.onload = () => {
    //get navigating buttons & add event listeners to navigating buttons 
    document.querySelector(".prev").addEventListener("click", prevFunction, false);

    document.querySelector(".next").addEventListener("click", nextFunction, false);
}

//get navigating buttons 
let movingSlide = {
    currentVisibleSlide: 1,
    widthOfSlide: 300,
    numberOfSlides: 3,
}
    
console.log(movingSlide.currentVisibleSlide)
let nextFunction = () => {

    if (movingSlide.currentVisibleSlide < movingSlide.numberOfSlides) {
      document.querySelector("ul").style.left =  "-" + movingSlide.currentVisibleSlide * movingSlide.widthOfSlide + "px"; 
      movingSlide.currentVisibleSlide++;
      console.log(movingSlide.currentVisibleSlide);

        if (movingSlide.currentVisibleSlide > 1 ){
           let prevBtn = document.querySelector(".prev");
           prevBtn.classList.remove("noShow");
        }
        
        if (movingSlide.currentVisibleSlide >= 3) {
            let nxtBtn = document.querySelector(".next");
            nxtBtn.className += " noShow";
        }

    } 
}

let prevFunction = () => {
    if (movingSlide.currentVisibleSlide > 1 ) {
        movingSlide.currentVisibleSlide--;

        console.log(movingSlide.currentVisibleSlide);
        let test = document.querySelector("ul").style.left;
            test = parseInt(test, 0);
        document.querySelector("ul").style.left = test + movingSlide.widthOfSlide + "px";  
    } 

    if (movingSlide.currentVisibleSlide > 1 ){
        let nextBtn = document.querySelector(".next");
        nextBtn.classList.remove("noShow");
        console.log(movingSlide.currentVisibleSlide);
     }

     if (movingSlide.currentVisibleSlide === 1 ){
        let prevBtn = document.querySelector(".prev");
        prevBtn.className += " noShow";
     }
}
