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
    var immage = $('.contain-img img.active');

    circle.removeClass('circle-active');
    immage.removeClass('active');
    
    if(immage.next('.contain-img img').length === 0){
      $('.contain-img img').first().addClass('active');
      $('.circle-scroll i').first().addClass('circle-active');
    }else{
      immage.next('.contain-img img').addClass('active');
      circle.next('.circle-scroll i').addClass('circle-active');
    }
  });

  prevImg.click(function(){
    var circle = $('.circle-scroll i.circle-active');
    var immage = $('.contain-img img.active');

    circle.removeClass('circle-active');
    immage.removeClass('active');

    if(immage.prev('.contain-img img').length === 0){
      $('.contain-img img').last().addClass('active');
      $('.circle-scroll i').last().addClass('circle-active');
    }else{
      immage.prev('.contain-img img').addClass('active');
      circle.prev('.circle-scroll i').addClass('circle-active');
    }
  });

  // per generare i pallini devo sapere quante foto ci sono
    //col ciclo each() percorro tutta la collection di '.images img'
    // e ottengo l'index che mi serve per capire quale è il primo (=== 0)
    /* $('.images img').each(function(index){ */
        
      //console.log('index: ' + index );
      /* var nav = $('.nav'); */
      // creo un asctringa vuota perché di default non c'è la classe active
      /* var active = ""; */
      // diventa "active" solo nell'elemnto 0
      /* if(index === 0) active = "active"; */
      // genereo la stringa da stampare
      /* var tag = '<i class="fas fa-circle ' + active + '"></i>'; */
      // append a .nav
      /* nav.append(tag); */

  /* }); */

  //aggiungo un listener 'click' a tutti i (.nav i) generati dinammicamente
 /*  $('.nav i').on('click',function(){ */

      //l'index dellelemento cliccato mi serve per cercare la img corrispondente
      /* var index = $(this).index();
      console.log('index: '+ index); */
      // rimuovo active dagli elementi attivi
      /* $('.nav i.active').removeClass('active');
      $('.images img.active').removeClass('active'); */
      // con eq() cerco l'elemto con indice index e gli aggiungo la classe active
      /* $('.images img').eq(index).addClass('active'); */
      // all'elemnto cliccato aggiungo la classe active
     /*  $(this).addClass('active'); */

  /* }); */

}); 
