function openCloseHero(selectedHero){

    console.log(selectedHero)
    document.getElementById(selectedHero).classList.toggle("show");
}

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("Map_Slides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}

/*
window.onclick= function(event){
    if(!event.target.matches('.drop')){

        var dropdowns= document.getElementsByClassName("hero_con");
        var i;
        for(i=0; i<dropdowns.length; i++){
            var openDropdown
        }
    }
}

*/