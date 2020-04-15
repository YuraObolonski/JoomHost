/*говорит о том что сначала должен загрузится весь html полностью все теги только после этого должен прогружаться js*/
$(function(){ 

    /* в фигурных скобках пишем параметры. здесь мы обращаемся к классу родителя который прописали в Html в слике пишем некоторые параметры чтобы он нормально работал */
  $('.reviews-slider').slick({
      infinite: true, /* зацикленно чтобы оно постоянно перепрыгивало */
      slidesToShow: 2,
      slidesToScroll: 2,
      arrows: false, /* прев и некст убирает кнопки */
      dots: true, /* чтобы появились точки*/ 
      responsive: [
        {
          breakpoint: 1106,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          }
        },
      ]
  }); 

  $('.btn__menu').on('click', function(){
    $('.menu__list').slideToggle(); 
    // $('.menu__list').toggleClass('show-menu');
  });

});


