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
    autoplayTimeout: 10000,
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

  // Галерея

  var swiper = new Swiper(".mySwiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    initialSlide: 1,
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true,
    },
    pagination: {
      el: ".swiper-pagination",
    },
  });

// Отзывы

var swiper = new Swiper(".mySwiperCom", {
  slidesPerView: 2,
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    992: {
      slidesPerView: 2,
    }
  },
});

// Отзывы Видео

var swiper = new Swiper(".mySwiperVideo", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

// Футер - клиенты

  var swiper = new Swiper(".mySwiperFoot", {
    effect: "flip",
    grabCursor: true,
    pagination: {
      el: ".swiper-pagination",
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  // Портфолио

  var swiper = new Swiper(".mySwiperPort", {
    spaceBetween: 30,
    effect: "fade",
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

// Маска, валидация, мейлер

$(".modall__close").on("click", function() {
  $(".overlay_form, #thanks").fadeOut("slow")
});

$('input[name=phone]').mask("+7 (999) 999-99-99");

$("form").each(function () {
  $(this).validate({
    rules: {
      phone: "required",
      check: "required"
    },
    messages: {
      name: 'Введите ваше имя',
      email: 'Введите вашу почту',
      phone: 'Введите ваш номер телефона'
    },
    submitHandler: function (form) {
      $.ajax({
        type: "POST",
        url: $(form).attr('action'),
        data: $(form).serialize()
      }).done(function () {
        $(form).find("input").val(""), 
        // $('#modalHeader, #modalPhone').fadeOut(),
        $(".overlay_form, #thanks").fadeIn("slow"), 
        $("form").trigger("reset")
      });
      return false;
    }
  });
});