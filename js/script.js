const navbar = document.querySelector(".navbar"); /*navbar div e ulaşma*/
 
/* navbar animasyonu start*/
let section = document.querySelectorAll('section'); /*tüm sectionları seçme*/
let menu = document.querySelectorAll('header .navbar a'); /*header butonları*/
window.onscroll = () => {
    section.forEach(i => {
      let top = window.scrollY;
      let offset = i.offsetTop - 150;
      let height = i.offsetHeight;
      let id = i.getAttribute('id');
      if (top >= offset && top < offset + height) {
        menu.forEach(link => {
          link.classList.remove('active');
          document.querySelector('header nav a[href*=' + id + ']')
            .classList.add('active');
        });
      }
    });
  };
/*navbar animasyonu end*/

/*reveal animation*/
function reveal() {
    var reveals = document.querySelectorAll(".reveal");
    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 150;
        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("active");
        } else {
            reveals[i].classList.remove("active");
        }
    }
}
/*animation call*/

window.addEventListener("scroll", reveal);

/*!popup image start*/
document.querySelectorAll('.gallery .wrapper img').forEach(image =>{
    image.onclick = () =>{
        document.querySelector('.popup-image').style.display = 'block';
        document.querySelector('.popup-image img').src = image.getAttribute('src');
    }
});

document.querySelector('.popup-image span').onclick = () =>{
    document.querySelector('.popup-image').style.display = 'none';
}
/*!popup image end*/

/*! buttons */

const menuBtn = document.querySelector("#menu-btn"); /*menu ikonuna ulasma*/

menuBtn.addEventListener("click", function(){ /*ikona tıklayınca*/
navbar.classList.toggle("active"); /*cart acilmasi ve kapanması*/
    document.addEventListener("click", function(e){
        if(!e.composedPath().includes(menuBtn) && !e.composedPath().includes(navbar)){ /*ikon ve cart harici bir yere tıklandığında*/
        navbar.classList.remove("active"); /*cart kapanması*/
        }
    });
});