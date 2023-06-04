$(document).ready(function () {
    /* 눈 내리는 이펙트 관련  */
    $.fall = function (object, place, minsz, maxsz,fCount, minsp, maxsp) {
      $(place).snowfall({
          image: "./assets/images/" + object + ".png",
          minSize: minsz,
          maxSize: maxsz,
          flakeCount: fCount,
          minSpeed: minsp,
          maxSpeed: maxsp,
      });
  };
  $.fall("flake",".outside",3,10,120,1,5);

  /* letter [S] */
  var controller = new ScrollMagic.Controller();

  
  var scene = new ScrollMagic.Scene({
    triggerElement: ".intro",
    /* duration: ".trigger2", */
    triggerHook: "0",
    /* duration: 3000, */
  })
  .setClassToggle(".letter-left", "active")
    
  .addTo(controller)

  var controller = new ScrollMagic.Controller();

  
  var scene = new ScrollMagic.Scene({
    triggerElement: ".intro",
    /* duration: ".trigger2", */
    triggerHook: "0",
    /* duration: 3000, */
  })

  .setClassToggle(".letter-center", "active")
  .addTo(controller)


  var controller = new ScrollMagic.Controller();
  
  var scene = new ScrollMagic.Scene({
    triggerElement: ".intro",
    /* duration: ".trigger2", */
    triggerHook: "0",
    /* duration: 3000, */
  })

  .setClassToggle(".letter-right", "active") 
  .addTo(controller)
  /* letter [E] */

  /* intro-scroll [S] */
  var controller = new ScrollMagic.Controller();
  
  var tween1 = new TimelineMax()
  
  var scene = new ScrollMagic.Scene({
    triggerElement: ".intro",
    triggerHook: 'onLeave',
    duration: "100%"
    
  })
  .setPin(".intro",{pushFollowers: false})
  .setTween(tween1)
  .addTo(controller)
  /* intro-scroll [E] */

  /* about-visual [S] */

  var controller = new ScrollMagic.Controller();
  
  var tween2 = new TimelineMax()
  
  .fromTo('.profile-img1', 0.5, {y: "140vh"},{y: "-120%"})
  .fromTo('.profile-img2',0.5,{y: "110vh"},{y: "-120%"})
/*    .to(".profile", 0.1, { y: "-0%" })
   .to(".profile", 0.1, { y: "-50%" })
   .to(".profile", 0.1, { y: "-75%" })
   .to(".profile", 0.1, { y: "-100%" }) */
  
  var scene = new ScrollMagic.Scene({
    triggerElement: ".profile",
    duration: "500%",
    triggerHook: "onLeave",
  })
  .setPin(".profile")
  .setTween(tween2)
  .addTo(controller)
  

  /* about-visual [E] */

  /* about-marquee */

  /* portfolio [S] */
/*   var controller3 = new ScrollMagic.Controller();

  var scene = new ScrollMagic.Scene({
    triggerElement: ".trigger-portfolio",
    triggerHook: "0",
    duration:  "1000%" , 
  })

    .setClassToggle(".section-wrap", "type2") 
    .setPin(".section02")
    .addTo(controller3); */


    var controller4 = new ScrollMagic.Controller();
  
    var tween4 = new TimelineMax()

     .to(".slideContainer-portfolio", 0.1, { x: "-0%" })
     .to(".slideContainer-portfolio", 0.1, { x: "-25%" })
     .to(".slideContainer-portfolio", 0.1, { x: "-50%" })
     .to(".slideContainer-portfolio", 0.1, { x: "-50%" })
    
    var scene = new ScrollMagic.Scene({
      triggerElement: ".portfolio",
      duration: "500%",
      triggerHook: "onLeave",
    })
    .setClassToggle(".section-wrap", "type2")
    .setPin(".portfolio")
    .setTween(tween4)
    .addTo(controller4)
    

    

/* $(window).on('load',function(){
    $obj=$('.portfolio-list-wrap').isotope({
      isFitWidth: true
    });
});

    $('.portfolio-btn-wrap').on( 'click', 'li', function() {
        var filterValue = $(this).attr('data-filter');
        $('.portfolio-list-wrap').isotope({ filter: filterValue });
        $(this).siblings("li").removeClass('on');
        $(this).addClass('on');
      });
 */
  /* portfolio [E] */



  
});

$(window).on('scroll',function(){
  
});

$(window).resize(function(){
  $('.outside').snowfall('clear');
  $.fall("flake",".outside",3,10,120,1,5);
});

