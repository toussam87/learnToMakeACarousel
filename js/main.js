window.onload = () => {
    document.querySelectorAll(".nav div").forEach(function(element) {
        element.addEventListener("click", movingSlide.selectSlide)
    })
}

function addAnimiation(element) {
    element.classList.add("animation")
}

let movingSlide = {
    currentVisibleSlide: 1,
    widthOfSlide: 500,
    currentPosition: 1,
    numberOfSlides: document.querySelectorAll(".main .carousel ul div"),
    selectSlide: () => {
        var navSlideValue = event.target.dataset.value;

        for(i = 0; i < movingSlide.numberOfSlides.length; i++) {
            if(navSlideValue === movingSlide.numberOfSlides[i].dataset.value) {
                var test = document.querySelector("ul");
                test.style.transform = "translateX(-" + movingSlide.widthOfSlide + "px)";

                // movingSlide.currentPosition++;
                // console.log(movingSlide.currentPosition);
                movingSlide.currentPosition = test.style.transform;
                console.log(test.style.transform);
                // addAnimiation(test);
                test.addEventListener('animationEvent', function(event) { this.classList = ''}, false);
            }
            movingSlide.currentVisibleSlide = navSlideValue;
        }
    }
}