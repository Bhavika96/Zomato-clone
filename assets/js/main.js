
// Home Page Slider

let slide_index = 1;
show_slides(slide_index);

function slide_next_prev(n) {
  show_slides(slide_index += n)
}

function currentSlide(n) {
  show_slides(slide_index = n);
}

function show_slides(n) {
  let slides = document.getElementsByClassName("slide")
  if(n>slides.length) {
    slide_index = 1;
  }
  if(n<1) {
    slide_index = slides.length
  }
  for(let i=0; i<slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slide_index-1].style.display = "block";

}