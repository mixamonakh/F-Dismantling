window.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.menu'),
    menuItem = document.querySelectorAll('.menu_item'),
    hamburger = document.querySelector('.hamburger'),
    link = document.querySelector('.header__link');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('hamburger_active');
        menu.classList.toggle('menu_active');
        link.classList.toggle('header__link_active');
    });

    menuItem.forEach(item => {
        item.addEventListener('click', () => {
            hamburger.classList.toggle('hamburger_active');
            menu.classList.toggle('menu_active');
            link.classList.toggle('header__link_active');
        })
    })
})

// Тини слайдер

var slider = tns({
    container: '.my-slider',
    items: 4,
    slideBy: 'page',
    autoplay: true,
    nav: false,
    freezable: false,
    autoplayButtonOutput: false,
    controls: false,
    startIndex: 1,
    // autoplayPosition: ,
    responsive: {
      320: {
        items: 1
      },
      700: {
        items: 2,
        autoWidth: true
      },
      992: {
        items: 3,
        autoWidth: true
      },
      1200: {
        items: 4,
        autoWidth: true
      },
      1400: {
        items: 4
      }
    }
  });

  document.querySelector('.prev').onclick = function () {
    slider.goTo('prev');
  };
  document.querySelector('.next').onclick = function () {
    slider.goTo('next');
  };