$(document).ready(function(){

  //creo un ciclo che mi inserisca tanti circle quante sono le immagini
  /* var arrImg = $(".contain-img");
  var arrCircle = $(".circle-scroll");
  for(var i =0; i<arrImg.lenght; i++){
    arrCircle.html('<i class="far fa-circle"></i>');
  } */

  //creo i comando che cliccando sulle frecce cambio l'immagine
  var nextImg = $('.a-right i');
  var prevImg = $('.a-left i');

  nextImg.click(function(){
    var circle = $('.circle-scroll i.circle-active');
    var immage = $('img.active');

    circle.removeClass('circle-active');
    immage.removeClass('active');

    if(immage.hasClass('last')){
      $('img.first').addClass('active');
      $('.circle-scroll i.first').addClass('circle-active');
    }else{
      immage.next('img').addClass('active');
      circle.next('.circle-scroll i').addClass('circle-active');
    }
  });

  prevImg.click(function(){
    var circle = $('.circle-scroll i.circle-active');
    var immage = $('img.active');

    circle.removeClass('circle-active');
    immage.removeClass('active');

    if(immage.hasClass('first')){
      $('img.last').addClass('active');
      $('.circle-scroll i.last').addClass('circle-active');
    }else{
      immage.prev('img').addClass('active');
      circle.prev('.circle-scroll i').addClass('circle-active');
    }
  });

})
