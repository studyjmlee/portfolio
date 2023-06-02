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
    triggerElement: ".emphas",
    /* duration: ".trigger2", */
    triggerHook: "0",
    /* duration: 3000, */
  })
  .setClassToggle(".letter-left", "active")
    
  .addTo(controller)

  var controller = new ScrollMagic.Controller();

  
  var scene = new ScrollMagic.Scene({
    triggerElement: ".emphas",
    /* duration: ".trigger2", */
    triggerHook: "0",
    /* duration: 3000, */
  })

  .setClassToggle(".letter-center", "active")
  .addTo(controller)
  var controller = new ScrollMagic.Controller();

  
  var scene = new ScrollMagic.Scene({
    triggerElement: ".emphas",
    /* duration: ".trigger2", */
    triggerHook: "0",
    /* duration: 3000, */
  })

  .setClassToggle(".letter-right", "active") 
  .addTo(controller)
  /* letter [E] */

  /* about-visual [S] */

  var controller = new ScrollMagic.Controller();
  
  var tween1 = new TimelineMax()
  
  .fromTo('.visual-img1', 0.15, {y: "100vh"},{y: "-100%"})
  .fromTo('.visual-img2',0.15,{y: "100vh"},{y: "-100%"})
   .to(".slideContainer-about", 0.1, { x: "-0%" })
   .to(".slideContainer-about", 0.1, { x: "-25%" })
   .to(".slideContainer-about", 0.1, { x: "-50%" })
   .to(".slideContainer-about", 0.1, { x: "-50%" })
  
  var scene = new ScrollMagic.Scene({
    triggerElement: ".about",
    duration: "500%",
    triggerHook: "onLeave",
  })
  .setPin(".about")
  .setTween(tween1)
  .addTo(controller)
  

  /* about-visual [E] */

  /* about-marquee */

  /* portfolio [S] */
  var controller3 = new ScrollMagic.Controller();

  var scene = new ScrollMagic.Scene({
    triggerElement: ".trigger-portfolio",
    triggerHook: "0",
    duration:  "1000%" , //이 값이 클 수록 천천히 덮어씀
  })

    .setClassToggle(".section-wrap", "type2") //트리거가 시작되면 클래스 추가
    .setPin(".section02")// 트리거에 닿으면 고정시켜줌
    .addTo(controller3);


    var controller4 = new ScrollMagic.Controller();
  
    var tween4 = new TimelineMax()

/*      .to(".slideContainer-portfolio", 0.1, { x: "-0%" })
     .to(".slideContainer-portfolio", 0.1, { x: "-25%" })
     .to(".slideContainer-portfolio", 0.1, { x: "-50%" })
     .to(".slideContainer-portfolio", 0.1, { x: "-50%" })
     */
    var scene = new ScrollMagic.Scene({
      triggerElement: ".portfolio",
      duration: "500%",
      triggerHook: "onLeave",
    })
    .setPin(".portfolio")
    .setTween(tween4)
    .addTo(controller4)
  /* portfolio [E] */



  $(window).resize(function(){
    $('.outside').snowfall('clear');
    $.fall("flake",".outside",3,10,120,1,5);
  });
});

