const countries = document.querySelector(".countries"),
  countriesSlider = document.querySelector(".main__slider--countries"),
  main = document.querySelector(".main");

countries.addEventListener("click", function() {
  countriesSlider.style.visibility = "visible";
  sportsSlider.style.visibility = "hidden";
  this.classList.add("active");
  sports.classList.remove("active");
});

$(".main__slider").slick({
  autoplay:true,
  centerMode: true,
  infinite: false,
  slidesToShow: 3,
  slidesToScroll: 1,
  arrows: false,
  initialSlide: 2,
  responsive: [
    {
      breakpoint: 1000,
      settings: {
        slidesToShow: 1,
        fade: true
      }
    }
  ]
});