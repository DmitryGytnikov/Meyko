'use strict';

$(function () {
  // $('.faq__accordion-item').click(function(e) {

  //   if($('.faq-accordion').hasClass('accordion--one')) {
  //     $('.faq__accordion-item').not($(this)).removeClass('accordion--active');
  //     $('.faq__accordion-text').not($(this).next()).slideUp(300);
  //   }

  //   $(this).toggleClass('accordion--active').next().slideToggle(300);

  // });

  $('.menu-accordion__item').click(function(e) {
    $(this).toggleClass('accordion--active').next().slideToggle(300);
  });

  $('.aside_menu-accordion').click(function(e) {
    $(this).toggleClass('accordion--active').next().slideToggle(300);
  });


  // Выпадающее меню сортировки на search.html
  $('.search__sort-current').click(function(e) {
    $(this).toggleClass('accordion--active').next().slideToggle(300);
  });
  $('.search__sort-option').click(function(e) {
    $(this).closest('.search__sort-list').slideUp(300);

    var text_search = $(this).text();
    //console.log(text_search);
    $('.search__sort-current').text(text_search);
  });


  // jQuery-плагин для установки курсора в определенной позиции pos (для mask):
  $.fn.setCursorPosition = function(pos) {
    if ($(this).get(0).setSelectionRange) {
      $(this).get(0).setSelectionRange(pos, pos);
    } else if ($(this).get(0).createTextRange) {
      var range = $(this).get(0).createTextRange();
      range.collapse(true);
      range.moveEnd('character', pos);
      range.moveStart('character', pos);
      range.select();
    }
  };
  // Решение проблемы с кликом по центру(для mask):
  $('.input-box__tel-input').click(function(){
    $(this).setCursorPosition(3);
    }).mask("+7(999) 999-99-99",{autoclear: false});

});
