// prompt 

let person = prompt("please enter your name")
let text ;
    if (person == null || person == ""){
    text = "user cancelled the prompt.";
    }else {
    text = person + "," + " welcome to Sneakers. What type of shoe are you looking for?";
    }
alert (text)


// navigation bar
const menu = document.querySelector('#menu-icon');
const navbar = document.querySelector('.navbar');


menu.onclick = () => {
    menu.classList.toggle("bx-x");
    navbar.classList.toggle('open')
}


// swiper

 var swiper = new Swiper(".mySwiper", {
      slidesPerView: 1,
      spaceBetween: 30,
      loop: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });





