

/* HAMBURGER MENU */
let btnHamburger = document.querySelector("#btnHamburger");
let header = document.querySelector('.header');
let fadeElems = document.querySelectorAll('.has-fade');
let body = document.querySelector('body');

btnHamburger.addEventListener('click', function () {
    if (header.classList.contains('open')) { // close hamburger 
        header.classList.remove('open');
        body.classList.remove('noscroll');
        fadeElems.forEach(function (element) {
            element.classList.remove('fade-in');
            element.classList.add('fade-out');
        })

    } else { //open hamburger menu
        body.classList.add('noscroll');
        header.classList.add('open');
        fadeElems.forEach(function (element) {
            element.classList.remove('fade-out');
            element.classList.add('fade-in');
        })
    }
})

/* MODAL IMAGE GALLERY */

let modal = document.querySelector('.modal');
let closeModal = document.querySelector('.close');
let gallery = document.querySelector('.gallery');


gallery.addEventListener('click', function (e) {
    if (e.target.classList.contains('myImg')) {
        e.target.classList.add('zoomed');
        modal.style.display = 'block';
        closeModal.addEventListener('click', function () {
            modal.style.display = 'none';
            e.target.classList.remove('zoomed');
        })
    }

})



/* BACK TO TOP  */

//Get the button:
mybutton = document.getElementById("myBtn");
// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};
function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
