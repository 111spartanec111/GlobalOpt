


// Modal

// $('[data-modal=consultation]').on('click', function(){
//   $('.overlay, #thanks').fadeIn('slow');
// });

// Вызов модалки по клику на кнопки на 1 экране
$('[data-modal=consultation]').on('click', function(){
  $('.overlay, #consultation').fadeIn('slow');
});
// Крестик
$(' .modal__close').on('click', function() {
  $('.overlay, #thanks, #consultation').fadeOut('slow');
});



// Меню
const hamburger = document.querySelector('.hamburger'),
      menu = document.querySelector('.menu'),
      close = document.querySelector('.menu__close');
      overlay = document.querySelector('.menu__overlay')
     

      hamburger.addEventListener('click',()=> {
        menu.classList.add('active');
      });

      close.addEventListener('click',()=> {
        menu.classList.remove('active');
      });

      overlay.addEventListener('click',()=> {
        menu.classList.remove('active');
      });
      


// Заполнение полосок от заданного значения
const counters = document.querySelectorAll('.skills__ratings-counter'),
      lines = document.querySelectorAll('.skills__ratings-line span');

counters.forEach((item, i) => {
  lines[i].style.width = item.innerHTML;
});

// Валидация форм
function validateForms(form){
    $(form).validate({
      rules: {
        name: {
          required: true,
          minlength: 2
        },
        phone: "required",
        textarea: {
          required: true,
          minlength: 5
        },
        email: {
          required: true,
          email: true
        },
        checkbox: "required",
      },
      messages: {
        name:  {
          required: "Введите своё имя",
          minlength: jQuery.validator.format("Введите минимум {0} символа")
        },
        phone: "Введите ваш номер телефона",
        email: {
          required: "Пожалуйста, введите почту",
          email: "Неправильно введена почта!"
        },

        textarea: {
          required: "Пожалуйста, введите текст",
          minlength: jQuery.validator.format("Введите минимум {0} символов")
        },
        checkbox: "Поставь галочку",
      }
    
    });
  };
  
  validateForms('#consultation-form');
  validateForms('#consultation form');


// Кнопка активна , если checkbox нажат!

  // $('#check').click(function(){
  //   if ($(this).is(':checked')){
  //     $('#submit_1').removeAttr('disabled');
  //   } else {
  //     $('#submit_1').attr('disabled', 'disabled'); 
  //   }
  // });
  
  
  // Маска
  $('input[name=phone]').mask("+7 (999) 999-99-99");
  
  
  
  //  Mailer PHP
  $('form').submit(function(e) {
    e.preventDefault();
  
    if(!$(this).valid()){
      return;
    }
  
    $.ajax({
      type: "POST",
      url: "mailer/smart.php",
      data: $(this).serialize()
    }).done(function(){
      $('#consultation').fadeOut();
      $('.overlay, #thanks').fadeIn('slow');
      
      $('form').trigger('reset');
    });
    return false;
  });
  
  //  Page UP
  
  $(window).scroll(function (){
    if ($(this).scrollTop () > 1500) {
      $('.pageup').fadeIn();
    } else {   
      $('.pageup').fadeOut();
    }
  });
  
  //  Scroll
  
  $("a[href^='#']").click(function(){
    const _href = $(this).attr("href");
    $("html, body").animate({scrollTop: $(_href).offset().top+"px"});
    return false;
  });
  
  new WOW().init();