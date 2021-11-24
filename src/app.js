

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



/* let image = document.querySelector('.imagee');
let modal = document.querySelector('.modal');
let imageWrapper = document.querySelector('.modal_wrapper');
let modalImg = document.querySelector('.modal-img');


if (window.matchMedia("(min-width: 991px)").matches) {

  imageWrapper.addEventListener('click', function (e) {
    console.log(e)

    let imageClicked = e.path[0];
    console.log(imageClicked)
    console.log(modal.style.visability)

    if (imageClicked.classList.contains('modal-img')) {
        imageClicked.classList.remove('modal-img');
        modal.style.visibility = "hidden";
        
    }
    else {
        imageClicked.classList.add('modal-img');
        modal.style.visibility = "visible";
        
    }

})
  
} */

