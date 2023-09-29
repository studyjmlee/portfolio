var body=$("body");
var preloader=$(".preload");
var layerWrap=$(".layer-wrap");
var intro=$(".intro");
var profile=$(".profile");
var port = $(".type2-trigger");
var sectionWrap = $(".section-wrap");
var portfolio=$(".portfolio");
var listWrap = $(".portfolio-list-wrap");
var listItem = listWrap.find(".portfolio-list-item");
var contact= $(".contact");
var contactTxt= $(".contact-txt");
var visualInfo = $(".visual-info");
var letterWrap = $(".visual-letter-wrap");
var firstTabStop = 0;
var lastTabStop = 0;

function preload(){
  
  setTimeout(function(){
    body.removeClass("type3");
    preloader.fadeOut(400);
  },2000);
}

function layerClose() {
  layerWrap.fadeOut(400);
  layerWrap.find(`.layer-contents`).removeClass("active");
  body.removeClass("prevent-scroll");
  $(".contents").attr('aria-hidden','false');
}

function introScroll() {
  const wi = window.innerHeight;
  var controller1 = new ScrollMagic.Controller();
  var tween1 = new TimelineMax();
  var scene = new ScrollMagic.Scene({
    triggerElement: ".intro",
    triggerHook: "onLeave",
    duration: wi * 3,
  })
    .setPin(".intro", { pushFollowers: false })
    .on("enter", function (e) {
      intro.addClass("fixed");
    })
    .on("leave", function (e) {
      intro.removeClass("fixed");
    })
    .setTween(tween1)
    .addTo(controller1);
}

function aboutScroll() {
  const wi = window.innerHeight;
  var controller2 = new ScrollMagic.Controller();
  var tween2 = new TimelineMax()
    .fromTo(".profile-img1", 0.5, { y: "140vh" }, { y: "-120%" })
    .fromTo(".profile-img2", 0.5, { y: "110vh" }, { y: "-120%" });
  var scene = new ScrollMagic.Scene({
    triggerElement: ".profile",
    duration: wi * 5,
    triggerHook: "onLeave",
  })
    .setPin(".profile")
    .on("enter", function (e) {
      profile.addClass("fixed");
    })
    .on("leave", function (e) {
      profile.removeClass("fixed");
    })
    .setTween(tween2)
    .addTo(controller2);
}

function portScroll1() {
  const wi = window.innerHeight;
  var controller4 = new ScrollMagic.Controller();
  var tween4 = new TimelineMax()
    /* .fromTo(".slideContainer-portfolio", 0.1, { x: "-0%" }, { x: "-50%" }); */
    .to(".slideContainer-portfolio", 0.1, { x: "-0%" })
    .to(".slideContainer-portfolio", 0.1, { x: "-25%" })
    .to(".slideContainer-portfolio", 0.1, { x: "-50%" })
    .to(".slideContainer-portfolio", 0.1, { x: "-50%" });
  var scene = new ScrollMagic.Scene({
    triggerElement: ".portfolio",
    duration: wi * 5,
    triggerHook: "onLeave",
  })
  
    .setPin(".portfolio")
    .on("enter", function (e) {
      portfolio.addClass("fixed");
    })
    .on("leave", function (e) {
      portfolio.removeClass("fixed");
      $(".slideContainer-portfolio").removeClass("focused");
    })
    .setTween(tween4)
    .addTo(controller4);
}

function contactScroll(winScroll) {
  var contactTop = contact.offset().top;
  if (winScroll >= contactTop - 200) {
    contactTxt.addClass("active");
  } else {
    contactTxt.removeClass("active");
  }
}

function portScroll2(winScroll) {
  var portOffset = port.offset().top;
  if (winScroll >= portOffset - 200) {
    sectionWrap.addClass("type2");
    body.addClass("type2");
  } else {
    sectionWrap.removeClass("type2");
    body.removeClass("type2");
  }
}

function txtMove(winScroll) {
  if (winScroll >=visualInfo.height()) {
    letterWrap.addClass("active");
    
  } else {
    letterWrap.removeClass("active");
  }
}

function vhresize() {
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty("--vh", `${vh}px`);
  window.addEventListener("resize", () => {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);
  });
}

$(document).ready(function () {
  var nowS = $(document).scrollTop();
  preload();
  vhresize();
  introScroll();
  aboutScroll();
  portScroll1();
  portScroll2(nowS);
  /* txtMove(nowS); */
});

$(window).on("scroll", function () {
  var nowS = $(document).scrollTop();
  contactScroll(nowS);
  portScroll2(nowS);
  /* txtMove(nowS); */
});

$(window).resize(function () {
  vhresize();
});

  /* portfolio 버튼 */
  $(".portfolio-btn").click(function () {
    $(this).parents("li").siblings("li").find(".portfolio-btn").removeClass("on");
    $(this).addClass("on");
    var value = $(this).data("type");
    if (value == "all") {
      listItem.show();
    } else {
      listItem.not(`.${value}`).hide();
      listWrap.find(`.${value}`).show();
    }
  });

  /* portfolio layer */
  $(".layer-open").click(function () {
    var val = $(this).attr("href");
    var layer=layerWrap.find(`${val}`);
    var focusableElementsString = 'a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed, [tabindex="0"], [contenteditable]';
    var focusableElements = layer.find(focusableElementsString);
    firstTabStop = focusableElements[0];
    lastTabStop = focusableElements[focusableElements.length - 1];
    layer.addClass("active");
    $(".contents").attr("aria-hidden","false");
    layer.attr("tabindex","0").focus();
    layerWrap.fadeIn(400);
    body.addClass("prevent-scroll");
  });

  $(".layer-dimd").click(function () {
    layerClose();
  });

  $(".layer-close").click(function () {
    var parentsLayer=$(this).parents(".layer-contents");
    layerClose();
    var value=parentsLayer.attr("id");
    parentsLayer.attr("aria-hidden","true");
    $(`.layer-open[href='#${value}']`).focus();
    });
  
    $(document).on('keydown', function (e) {
      if($(".layer-contents").hasClass("active")){
        if (e.keyCode === 9) {
  
          // SHIFT + TAB
          if (e.shiftKey) {
            if (document.activeElement === firstTabStop) {
            e.preventDefault();
            lastTabStop.focus();
            }
    
          // TAB
          } else {
            if (document.activeElement === lastTabStop) {
            e.preventDefault();
            firstTabStop.focus();
            }
          }
        }
      }
      
    });

  $(".portfolio-btn").focus(function () {
    $(".slideContainer-portfolio").addClass("focused");
	});

  $(".portfolio-visual").find(".letter").attr("tabindex","0");
  /* portfolio [E] */
