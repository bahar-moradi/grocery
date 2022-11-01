/*let searchForm = document.querySelector('.input-group');
document.querySelector('#search-btn').onclick = () => {
    searchForm.classList.toggle('active');
}*/
const searchForm = document.querySelector("#search-btn")
searchForm.addEventListener("click",show_search);
function show_search() {
   document.querySelector(".input-group").classList.toggle("active");
   document.querySelector(".shopping-cart").classList.remove("active");
   document.querySelector(".login-form").classList.remove("active");
   document.querySelector(".navbar").classList.remove("active");
   navbarForm.classList.remove("fa-times");
   return false;
}

const cart = document.querySelector("#cart-btn")
cart.addEventListener("click",show_cart);
function show_cart() {
   document.querySelector(".shopping-cart").classList.toggle("active");
   document.querySelector(".input-group").classList.remove("active");
   document.querySelector(".login-form").classList.remove("active");
   document.querySelector(".navbar").classList.remove("active");
   navbarForm.classList.remove("fa-times");
   
}

const loginForm = document.querySelector("#login-btn")
loginForm.addEventListener("click",show_login);
function show_login() {
   document.querySelector(".login-form").classList.toggle("active");
   document.querySelector(".input-group").classList.remove("active");
   document.querySelector(".shopping-cart").classList.remove("active");
   document.querySelector(".navbar").classList.remove("active");
   navbarForm.classList.remove("fa-times");
   

}


const comentForm =document.querySelector("#coment")
 comentForm.addEventListener("click",show_form) ;
  function show_form(){
    document.querySelector(".coment-form").classList.toggle("active");
}

const removeForm = document.querySelector("#close")
removeForm.addEventListener("click" , remove_form);
function remove_form(){
  document.querySelector(".coment-form").classList.remove("active"); 
}


const navbarForm = document.querySelector("#menu-btn")
navbarForm.addEventListener("click",show_menu);
  function show_menu() {
   navbarForm.classList.toggle("fa-times");
   document.querySelector(".navbar").classList.toggle("active");
   document.querySelector(".input-group").classList.remove("active");
   document.querySelector(".shopping-cart").classList.remove("active");
   document.querySelector(".login-form").classList.remove("active");
  }   
   



window.addEventListener("scroll",scrolFunction);
function scrolFunction(){

     navbarForm.classList.remove("fa-times");
     document.querySelector(".navbar").classList.remove("active");
     document.querySelector(".input-group").classList.remove("active");
     document.querySelector(".shopping-cart").classList.remove("active");
     document.querySelector(".login-form").classList.remove("active");
        
        


    }






var swiper = new Swiper(".product-slider ", {
   loop:true,
   slidesPerView: 1,
   spaceBetween: 10,
   pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  
   breakpoints: {
     0: {
       slidesPerView: 1,
       spaceBetween: 20,
       
      
     },
     768: {
       slidesPerView: 2,
       spaceBetween: 30,
       
     },
     1024: {
       slidesPerView:3 ,
       spaceBetween: 40,
       
     },
    
   },
 });


 var swiper = new Swiper(".riview-slider", {
  loop:true,
  spaceBetween: 20, 
  autoplay: {
    delay: 7500,
    disableOnInteraction: false,
  },
  centeredSlides: true,
  breakpoints: {
    0: {
      slidesPerView: 1,
      
      
     
    },
    768: {
      slidesPerView: 2,
     
      
    },
    1024: {
      slidesPerView:3 ,
      
      
    },
   
  },
});


function loader(){
  document.querySelector(".loader-container").classList.add("fade-out");
}
/*function fadeOut(){
  setInterval(loader, 5000);
}*/
function fadeOut(){
  setTimeout(loader , 5000 );
}

window.onload = fadeOut