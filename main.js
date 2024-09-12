const navMenu = document.getElementById("nav-menu")
const navLink = document.querySelectorAll(".nav-link")
const hamburger = document.getElementById("hamburger")

hamburger.addEventListener("click", () => {
    navMenu.classList.toggle("left-[0]")
    hamburger.classList.toggle("ri-close-large-line")
})

navLink.forEach(link => {
    link.addEventListener("click", () => {
        navMenu.classList.toggle("left-[0]")
        hamburger.classList.toggle("ri-close-large-line")
    })
});

// swiper js
const swiper = new Swiper('.swiper', {
    // Optional parameters
    speed:400,
    spaceBetween: 30,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },

    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },

    grabCursor: true,
    breakpoints: {
        640: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 3,
        },
    }

  })


// show scroll up
const scrollUp = () => {
    const scrollUp = document.getElementById('scroll-up')

    // When the scroll is higher than 560 viewport height, add the show-scroll class to the a tag with the scroll-top class
    if(this.scrollY >= 250) {
        scrollUp.classList.remove('-bottom-1/2')
        scrollUp.classList.add('bottom-4')
    }else{
      scrollUp.classList.add('-bottom-1/2')
      scrollUp.classList.remove('bottom-4')
    }
}

window.addEventListener('scroll', scrollUp)

