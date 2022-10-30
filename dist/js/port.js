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
    allowTouchMove: false,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
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