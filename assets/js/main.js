
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

//Modals

// var modal = document.getElementById("myModal");
// var btn = document.getElementById("myBtn");
// var span = document.getElementsByClassName("close")[0];

// btn.onclick = function() {
//   modal.style.display = "block";
//   displayCart();
// }

// span.onclick = function() {
//   modal.style.display = "none";
// }

// window.onclick = function(event) {
//   if (event.target == modal) {
//     modal.style.display = "none";
//   }
// }

// let modal = document.getElementsByClassName("modal");
// let modal_btn = document.getElementsByClassName("modal-btn");
// let current_modal = null;

// function open_modal(id) {
//   for(let i=0; i<modal.length; i++) {
//     if(modal[i].getAttribute('id') == id) {
//       current_modal = modal[i];
//       current_modal.style.display = "block";
//       break;
//     }
//   }
// }

// window.onclick = function(event) {
//   if(event.target = current_modal || event.target.getAttribute('class')== "close") {
//     current_modal.style.display = "none";
//   }
// }


// var modals = document.getElementsByClassName("modal");
//    var modalOpenBtn = document.getElementsByClassName("modalOpenBtn");
//    var currentModal = null;

//    console.log("ll",modals.length)
//    function openModal(id) {
//      for (i = 0; i < modals.length; i++) {

//        if (modals[i].getAttribute('id') == id) {
//          currentModal = modals[i];
//          currentModal.style.display = "block";
//          break;
//        }
//      }
//    }


//    window.onclick = function(event) {
//      if (event.target == currentModal || event.target.getAttribute('class') == 'modalClose') {
//        currentModal.style.display = "none";
//      }
//    }


var modals = document.getElementsByClassName("modal");
var modal_btn = document.getElementsByClassName("modal_btn");
var current_modal = null;

function open_modal(id) {
  for (i = 0; i < modals.length; i++) {

    if (modals[i].getAttribute('id') == id) {
      current_modal = modals[i];
      current_modal.style.display = "block";
      break;
    }
  }
}

window.onclick = function(event) {
  if (event.target == current_modal || event.target.getAttribute('class') == 'modal-close') {
    current_modal.style.display = "none";
  }
}