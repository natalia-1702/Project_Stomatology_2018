$(document).ready(function(){ //пока не будет загружен html документ, не будет выполняться данный скриптjquery

  $('.carousel').slick({
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: false,
    draggable: false,
    pauseOnFocus: false,
    pauseOnHover: false
  });

  var lastScrollTop = 0;
  $(window).scroll(function(){
    var scrollTop = $(this).scrollTop();
    if (scrollTop - lastScrollTop > 50){
      var navHeight = $('.navbar').css('height');
      $('.navbar').animate({top: '-' + navHeight}, 150);
      lastScrollTop = scrollTop;
    } else if (lastScrollTop - scrollTop > 50) {
      $('.navbar').animate({top: '0px'}, 150);
      lastScrollTop = scrollTop;
    }
  });

/*
  $('.key-btn').on('mouseenter', ()=>{
    $('.login-form').show();
  }).on('mouseleave', ()=>{
    $('.login-form').hide();
  });
*/
});
//---------------------//

$(document).ready(function(){
  $('.active_menu').on('mouseenter', ()=>{
    $('.active').slideDown(500);
    $('.active_menu').css({"color": "#00c8db"});
  });

  $('.secondNav').on('mouseleave', ()=>{
    $('.active').slideUp(500);
  });
  $('.active_menu').on('mouseleave', ()=>{
    $('.active_menu').css({"color": "#777", "backgroundColor": "rgb(245, 245, 245)"});
  });


/* _________MODAL WINDOW__________*/

  $('.relative-wrapper').click(function () {
    $('.modal-shadow').show();
    $('.modal-window').show();
  });

  $('.modal-shadow').click(function () {
    $('.modal-shadow').hide();
    $('.modal-window').hide();
  });

  $('.close').click(function () {
    $('.modal-shadow').hide();
    $('.modal-window').hide();
  });

/*  Меняет цвет иконок в футере */
  $('.panel-footer a').on('mouseenter', (event)=>{
    $(event.currentTarget).css('color', 'black');
  }).on('mouseleave', (event)=>{
    $(event.currentTarget).css('color', '#777');
  });


});
