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

  // Выпадающие пункты в боковом меню
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

  // Кнопка "В ИЗБРАННОЕ" на card.html
  $('.info__favorites').click(function(e) {
    $(this).toggleClass('info__favorites--active');
  });

  // Кнопка "В ИЗБРАННОЕ" на карточке товара на main.html, card.html, catalog.html
  $('.product-card_fav').click(function(e) {
    $(this).toggleClass('product-card_fav--active');
  });

  // Кнопка "В ИЗБРАННОЕ" на слйдере презентации на card.html
  $('.big-item__fav').click(function(e) {
    $('.big-item__fav').toggleClass('big-item__fav--active');
  });

  // Табы ("Характеристики") на card.html
  $('.tab-1').click(function(e) {
    e.preventDefault();
    $($(this).closest('.card__tab').find('li').find('.tab-1')).removeClass('tab--active-1');
    // $($(this).closest('.tabs-wrapper-1').find('li').find('a')).removeClass('tab--active-1');
    $($(this).closest('.card__tab').find('.merchandise__content-wr').find('ul')).removeClass('tabs-content--active-1');

    $(this).addClass('tab--active-1');
    $($(this).attr('href')).addClass('tabs-content--active-1');
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


// Большой слайдер презентации на card.html
  $('.presentation__slider-big').slick({
    dots: false,
    fade: true,
    arrows: false,
    asNavFor: ".presentation__slider-small",

    responsive: [{
      breakpoint: 651,
      settings: {
        dots: true
      }
    }]
  });


// Маленький слайдер презентации на card.html
  $('.presentation__slider-small').slick({
    dots: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    asNavFor: ".presentation__slider-big",
    // centerMode: true,
  });

});
