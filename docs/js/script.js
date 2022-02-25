'use strict';

$(function () {

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
    $('.search__sort-current').removeClass('accordion--active');
    $(this).closest('.search__sort-list').slideUp(300);

    var text_search = $(this).text();
    //console.log(text_search);
    $('.search__sort-current').text(text_search);
  });


  // Выпадающее меню сортировки на catalog-card.html
  $('.filters__sort-current').click(function(e) {
    e.preventDefault();
    $(this).toggleClass('accordion--active').next().slideToggle(300);

    $('.filters__price-current').removeClass('accordion--active');
    $('.filters__price-list').slideUp(300);

    $('.filters__availability-current').removeClass('accordion--active');
    $('.filters__availability-list').slideUp(300);

    $('.filters__color-current').removeClass('accordion--active');
    $('.filters__color-list').slideUp(300);

    $('.filters__collection-current').removeClass('accordion--active');
    $('.filters__collection-list').slideUp(300);
  });
  $('.filters__sort-option').click(function(e) {
    e.preventDefault();
    $('.filters__sort-current').removeClass('accordion--active');
    $(this).closest('.filters__sort-list').slideUp(300);

    var text_search = $(this).text();
    //console.log(text_search);
    $('.filters__sort-current').text(text_search);
  });


  // Фильтр на catalog-card.html
  $('.filters__button').click(function(e) {
    e.preventDefault();
    $(this).toggleClass('filters__button--active');
    $('.filters__button').not($(this)).removeClass('filters__button--active');
  });


  // Выпадающее меню "ЦЕНА" на catalog-card.html
  $('.filters__price-current').click(function(e) {
    e.preventDefault();
    $(this).toggleClass('accordion--active').next().slideToggle(300);

    $('.filters__availability-current').removeClass('accordion--active');
    $('.filters__availability-list').slideUp(300);

    $('.filters__color-current').removeClass('accordion--active');
    $('.filters__color-list').slideUp(300);

    $('.filters__collection-current').removeClass('accordion--active');
    $('.filters__collection-list').slideUp(300);

    $('.filters__sort-current').removeClass('accordion--active');
    $('.filters__sort-list').slideUp(300);
  });
  $('.filters__price-option').click(function(e) {
    e.preventDefault();
    $('.filters__price-current').removeClass('accordion--active');
    $(this).closest('.filters__price-list').slideUp(300);

    var text_search = $(this).text();
    //console.log(text_search);
    $('.filters__price-current').text(text_search);
  });


  // Выпадающее меню "НАЛИЧИЕ" на catalog-card.html
  $('.filters__availability-current').click(function(e) {
    e.preventDefault();

    $('.filters__price-current').removeClass('accordion--active');
    $('.filters__price-list').slideUp(300);

    $('.filters__color-current').removeClass('accordion--active');
    $('.filters__color-list').slideUp(300);

    $('.filters__collection-current').removeClass('accordion--active');
    $('.filters__collection-list').slideUp(300);

    $('.filters__sort-current').removeClass('accordion--active');
    $('.filters__sort-list').slideUp(300);

    $(this).toggleClass('accordion--active').next().slideToggle(300);
  });
  $('.filters__availability-option').click(function(e) {
    e.preventDefault();
    $('.filters__availability-current').removeClass('accordion--active');
    $(this).closest('.filters__availability-list').slideUp(300);

    var text_search = $(this).text();
    //console.log(text_search);
    $('.filters__availability-current').text(text_search);
  });


  // Выпадающее меню "ЦВЕТ" на catalog-card.html
  $('.filters__color-current').click(function(e) {
    e.preventDefault();

    $('.filters__price-current').removeClass('accordion--active');
    $('.filters__price-list').slideUp(300);

    $('.filters__availability-current').removeClass('accordion--active');
    $('.filters__availability-list').slideUp(300);

    $('.filters__collection-current').removeClass('accordion--active');
    $('.filters__collection-list').slideUp(300);

    $('.filters__sort-current').removeClass('accordion--active');
    $('.filters__sort-list').slideUp(300);

    $(this).toggleClass('accordion--active').next().slideToggle(300);
  });
  $('.filters__color-option').click(function(e) {
    e.preventDefault();
    $('.filters__color-current').removeClass('accordion--active');
    $(this).closest('.filters__color-list').slideUp(300);

    var text_search = $(this).text();
    //console.log(text_search);
    $('.filters__color-current').text(text_search);
  });


  // Выпадающее меню "КОЛЛЕКЦИЯ" на catalog-card.html
  $('.filters__collection-current').click(function(e) {
    e.preventDefault();

    $('.filters__price-current').removeClass('accordion--active');
    $('.filters__price-list').slideUp(300);

    $('.filters__availability-current').removeClass('accordion--active');
    $('.filters__availability-list').slideUp(300);

    $('.filters__color-current').removeClass('accordion--active');
    $('.filters__color-list').slideUp(300);

    $('.filters__sort-current').removeClass('accordion--active');
    $('.filters__sort-list').slideUp(300);

    $(this).toggleClass('accordion--active').next().slideToggle(300);
  });
  $('.filters__collection-option').click(function(e) {
    e.preventDefault();
    $('.filters__collection-current').removeClass('accordion--active');
    $(this).closest('.filters__collection-list').slideUp(300);

    var text_search = $(this).text();
    //console.log(text_search);
    $('.filters__collection-current').text(text_search);
  });


  // Кнопка "В ИЗБРАННОЕ" на card.html
  $('.info__favorites').click(function(e) {
    $(this).toggleClass('info__favorites--active');
    $('.big-item__fav').toggleClass('big-item__fav--active');
  });

  // Кнопка "В ИЗБРАННОЕ" на слайдере презентации на card.html
  $('.big-item__fav').click(function(e) {
    $('.big-item__fav').toggleClass('big-item__fav--active');
    $('.info__favorites').toggleClass('info__favorites--active');
  });

  // Кнопка "В ИЗБРАННОЕ" на карточке товара на main.html, card.html, catalog.html
  $('.product-card_fav').click(function(e) {
    $(this).toggleClass('product-card_fav--active');
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
    centerMode: true,
    centerPadding: '25px',
    focusOnSelect: true
  });

});
