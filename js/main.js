let prevBtn = document.querySelector(".prev"),
    nxtBtn = document.querySelector(".next");


window.onload = () => {
    //get navigating buttons & add event listeners to navigating buttons 
    document.querySelector(".prev").addEventListener("click", movingSlide.prevFunction, false);

    document.querySelector(".next").addEventListener("click", movingSlide.nextFunction, false);

    movingSlide.moveThrough();
}

let bgColor = ["#52FF33", "#9933FF", "#FEFE30", "#30EEFE"];
let bgImage = ['url(https://baconmockup.com/300/300/)', 'url(http://purrfectpals.org/wp-content/uploads/2014/03/DSC_85581-e1404783195381-300x300.jpg)', 'url(http://images.meredith.com/content/dam/bhg/Images/2013/2/4/295212_3839391670148_668524905_n.jpg.rendition.largest.ss.jpg)'];

let movingSlide = {
    currentVisibleSlide: 1,
    widthOfSlide: 300,
    numberOfSlides: document.querySelectorAll("ul li").length,
    moveThrough: () => { 
        document.querySelectorAll("ul li").forEach((slide, slideIndex ) => { 
            console.log(slideIndex);
            console.log(slide);
            slide.style.backgroundImage = bgImage[slideIndex%bgImage.length]; 
        })
    },
    nextFunction: () => {
        
        if (movingSlide.currentVisibleSlide <  movingSlide.numberOfSlides) {

            document.querySelector("ul").style.left =  "-" + movingSlide.currentVisibleSlide * movingSlide.widthOfSlide + "px"; 
            movingSlide.currentVisibleSlide++;
            console.log(movingSlide.currentVisibleSlide);
    
            if (movingSlide.currentVisibleSlide > 1 ){
               prevBtn.classList.remove("noShow");
            }
            
            if (movingSlide.currentVisibleSlide >= movingSlide.numberOfSlides) {
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