/* Abre e fecha e menu mobile */
const nav = document.querySelector('#header nav')
const toggle = document.querySelectorAll('nav .toggle')

for (const menu of toggle) {
  menu.addEventListener('click', function () {
    nav.classList.toggle('show')
  })
}

/* Quando clicar em um item do menu, esconder todo o menu mobile */
const links = document.querySelectorAll('nav ul li a')

for (const link of links) {
  link.addEventListener('click', function () {
    nav.classList.remove('show')
  })
}

/*mudar o header quando da pagina quando der scroll */
function changeHeightWhenScroll() {
  const header = document.querySelector('#header')
  const navHeight = header.offsetHeight

  if (window.scrollY >= navHeight) {
    // scroll maior que altura do header
    header.classList.add('scroll')
  } else {
    // menor que altura do header
    header.classList.remove('scroll')
  }
}

/* Tattoos e Testimonials slide swiper */
var swiper = new Swiper('.mySwiper', {
  slidesPerView: 1,
  pagination: {
    el: '.swiper-pagination',
    type: 'progressbar',

  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    767: {
      slidesPerView: 2,
    }
  }
})

/* Scroll Reveal mostrar elementos quando der scroll na página */
const scrollReveal = ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 800,
  reset: true
})

scrollReveal.reveal(
  `#home .image, #home .text,
  #about .image, #about .text,
  #services .text, #services .card,
  #tattoos .image, #tattoos .title,
  #testimonials header, #testimonials .testimonials,
  #contact .text, #contact .links,
  #payment .title, #payment .pay
  `,

  { interval: 100 }
)

/* Botão voltar para o top*/
function backToTop() {
  const backTopButton = document.querySelector('.back-top')

  if (window.scrollY >= 550) {
    backTopButton.classList.add('show')
  } else {
    backTopButton.classList.remove('show')
  }
}

/* When Scroll (functions) */
window.addEventListener('scroll', function () {
  changeHeightWhenScroll()
  backToTop()
})
