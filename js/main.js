let prevBtn = document.querySelector(".prev"),
    nxtBtn = document.querySelector(".next");


window.onload = () => {
    //get navigating buttons & add event listeners to navigating buttons 
    document.querySelector(".prev").addEventListener("click", movingSlide.prevFunction, false);

    document.querySelector(".next").addEventListener("click", movingSlide.nextFunction, false);
}

let movingSlide = {
    currentVisibleSlide: 1,
    widthOfSlide: 300,
    numberOfSlides: document.querySelectorAll("ul li"),
    nextFunction: () => {
        console.log( movingSlide.numberOfSlides.length );

        if (movingSlide.currentVisibleSlide <  movingSlide.numberOfSlides.length) {
          document.querySelector("ul").style.left =  "-" + movingSlide.currentVisibleSlide * movingSlide.widthOfSlide + "px"; 
          movingSlide.currentVisibleSlide++;
          console.log(movingSlide.currentVisibleSlide);
    
            if (movingSlide.currentVisibleSlide > 1 ){
               prevBtn.classList.remove("noShow");
            }
            
            if (movingSlide.currentVisibleSlide >= movingSlide.numberOfSlides.length) {
                nxtBtn.className += " noShow";
            }
    
        } 
    },
    prevFunction: () => {
        if (movingSlide.currentVisibleSlide > 1 ) {
            movingSlide.currentVisibleSlide--;
    
            console.log(movingSlide.currentVisibleSlide);
            let test = document.querySelector("ul").style.left;
                test = parseInt(test, 0);
            document.querySelector("ul").style.left = test + movingSlide.widthOfSlide + "px";  
        } 
    
        if (movingSlide.currentVisibleSlide > 1 ){
            nxtBtn.classList.remove("noShow");
            console.log(movingSlide.currentVisibleSlide);
         }
    
         if (movingSlide.currentVisibleSlide === 1 ){
            prevBtn.className += " noShow";
         }
    }
}