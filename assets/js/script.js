var body=$("body");
var preloader=$(".preload");
var layerWrap=$(".layer-wrap");
var intro=$(".intro");
var profile=$(".profile");
var port = $(".scroll-trigger");
var sectionWrap = $(".section_wrap");
var portfolio=$(".portfolio");
var listWrap = $(".list_work");
var listItem = listWrap.find(".lst_item");
var contact= $(".contact");
var contactTxt= contact.find(".tit");
var visualInfo = $(".intro .info");
var letterWrap = $(".letter-wrap");
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
    .fromTo(".my_img1", 0.5, { y: "140vh" }, { y: "-120%" })
    .fromTo(".my_img2", 0.5, { y: "110vh" }, { y: "-120%" });
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
    /* .fromTo(".portfolio .slideContainer", 0.1, { x: "-0%" }, { x: "-50%" }); */
    .to(".portfolio .slideContainer", 0.1, { x: "-0%" })
    .to(".portfolio .slideContainer", 0.1, { x: "-25%" })
    .to(".portfolio .slideContainer", 0.1, { x: "-50%" })
    .to(".portfolio .slideContainer", 0.1, { x: "-50%" });
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
      $(".portfolio .slideContainer").removeClass("focused");
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
    sectionWrap.addClass("effect");
    body.addClass("effect");
  } else {
    sectionWrap.removeClass("effect");
    body.removeClass("effect");
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
  $(".portfolio .btn").click(function () {
    $(this).parents("li").siblings("li").find(".btn").attr('aria-selected','false');
    $(this).attr('aria-selected','true');
    var value = $(this).data("type");
    if (value == "all") {
      listItem.show();
    } else {
      listItem.not(`.${value}`).hide();
      listWrap.find(`.${value}`).show();
    }
  });

  /* portfolio layer */
  $(".btn_open_layer").click(function () {
    var val = $(this).attr("aria-controls");
    var layer=layerWrap.find(`#${val}`);
    var focusableElementsString = 'a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed, [tabindex="0"], [contenteditable]';
    var focusableElements = layer.find(focusableElementsString);
    firstTabStop = focusableElements[0];
    lastTabStop = focusableElements[focusableElements.length - 1];
    layer.addClass("active");
    $(".contents").attr("aria-hidden","true");
    layer.attr("tabindex","0").focus();
    layerWrap.fadeIn(400);
    body.addClass("prevent-scroll");
  });

  $(".dimd").click(function () {
    layerClose();
  });

  $(".btn_close").click(function () {
    var parentsLayer=$(this).parents(".layer-contents");
    layerClose();
    var value=parentsLayer.attr("id");
    $(".contents").attr("aria-hidden","false");
    $(`.btn_open_layer[aria-controls='#${value}']`).focus();
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

  $(".portfolio .btn").focus(function () {
    $(".portfolio .slideContainer").addClass("focused");
	});

  $(".portfolio .visual").find(".tit").attr("tabindex","0");
  /* portfolio [E] */
