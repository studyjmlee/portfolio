$(document).ready(function () {
  /* vh */
  
  let vh = window.innerHeight * 0.01
  document.documentElement.style.setProperty('--vh', `${vh}px`)
  window.addEventListener('resize', () => {
  let vh = window.innerHeight * 0.01
  document.documentElement.style.setProperty('--vh', `${vh}px`)
})

  function layerClose(){
      $(".layer-wrap").fadeOut(400);
      $(".layer-wrap").find(`.layer-contents`).removeClass("active");
      $("body").removeClass("prevent-scroll");
  }

  function scrollM(){
    
  }

  

  /* intro-scroll [S] */

  const wi = window.innerHeight;

  var controller = new ScrollMagic.Controller();
  
  var tween1 = new TimelineMax()
  
  var scene = new ScrollMagic.Scene({
    triggerElement: ".intro",
    triggerHook: 'onLeave',
    duration: wi * 3
    
  })
/*   .setClassToggle(".visual-letter-wrap", "active") */ 
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
    duration: wi * 5,
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
      triggerElement: ".type2-trigger",
      duration: wi * 5,
      triggerHook: "onLeave",
    })
    .setClassToggle(".section-wrap", "type2")
    .setPin(".portfolio")
    .setTween(tween4)
    .addTo(controller4)

    var controller5 = new ScrollMagic.Controller();
  
    var tween5 = new TimelineMax()
    
    var scene = new ScrollMagic.Scene({
      triggerElement: ".contact",
      duration: wi * 5,
      triggerHook: "onLeave",
    })
    .setClassToggle(".contact-txt", "active")
    .setTween(tween5)
    .addTo(controller5)
    
    


    $('.portfolio-btn-wrap').on( 'click', 'li', function() {
        $(this).siblings("li").removeClass('on');
        $(this).addClass('on');
      });

    $("input[name='portfolio-radio']").change(function(){
      var value=$(this).val();
      if(value=='all'){
        $(".portfolio-list-wrap").find(".portfolio-list-item").show();
      }
      else{
        $(".portfolio-list-wrap").find(".portfolio-list-item").not(`.${value}`).hide();
        $(".portfolio-list-wrap").find(`.${value}`).show();
      }
      
    });
  /* portfolio [E] */

    $(".portfolio-list-item").click(function(){
      var val=$(this).data("src");
    $(".layer-wrap").find(`.layer-contents[data-layer='${val}']`).addClass("active");
    $(".layer-wrap").fadeIn(400);
      $("body").addClass("prevent-scroll");
    });

    $(".layer-dimd").click(function(){
      layerClose();
    });

    $(".layer-close").click(function(){
      layerClose();
    });
  
});

$(window).on('scroll',function(){
  
});

$(window).resize(function(){
  /* vh */
  
  let vh = window.innerHeight * 0.01
  document.documentElement.style.setProperty('--vh', `${vh}px`)
  window.addEventListener('resize', () => {
  let vh = window.innerHeight * 0.01
  document.documentElement.style.setProperty('--vh', `${vh}px`)
})
});

