function layerClose() {
  $(".layer-wrap").fadeOut(400);
  $(".layer-wrap").find(`.layer-contents`).removeClass("active");
  $("body").removeClass("prevent-scroll");
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
      $(".intro").addClass("fixed");
    })
    .on("leave", function (e) {
      $(".intro").removeClass("fixed");
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
      $(".profile").addClass("fixed");
    })
    .on("leave", function (e) {
      $(".profile").removeClass("fixed");
    })
    .setTween(tween2)
    .addTo(controller2);
}

function portScroll1() {
  const wi = window.innerHeight;
  var controller4 = new ScrollMagic.Controller();
  var tween4 = new TimelineMax()
    .to(".slideContainer-portfolio", 0.1, { x: "-0%" })
    .to(".slideContainer-portfolio", 0.1, { x: "-25%" })
    .to(".slideContainer-portfolio", 0.1, { x: "-50%" })
    .to(".slideContainer-portfolio", 0.1, { x: "-50%" });
  var scene = new ScrollMagic.Scene({
    triggerElement: ".type2-trigger",
    duration: wi * 5,
    triggerHook: "onLeave",
  })
    .setPin(".portfolio")
    .on("enter", function (e) {
      $(".portfolio").addClass("fixed");
    })
    .on("leave", function (e) {
      $(".portfolio").removeClass("fixed");
    })
    .setTween(tween4)
    .addTo(controller4);
}

function contactScroll(winScroll) {
  var contact = $(".contact").offset().top;
  if (winScroll >= contact - 200) {
    $(".contact-txt").addClass("active");
  } else {
    $(".contact-txt").removeClass("active");
  }
}

function portScroll2(winScroll) {
  var port = $(".type2-trigger");
  var sectionWrap = $(".section-wrap");
  var portOffset = port.offset().top;
  if (winScroll >= portOffset - 200) {
    sectionWrap.addClass("type2");
  } else {
    sectionWrap.removeClass("type2");
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
  vhresize();
  introScroll();
  aboutScroll();
  portScroll1();
  portScroll2(nowS);

  /* portfolio 버튼 */
  $(".portfolio-btn-wrap").on("click", "li", function () {
    $(this).siblings("li").removeClass("on");
    $(this).addClass("on");
  });

  $("input[name='portfolio-radio']").change(function () {
    var value = $(this).val();
    var listWrap = $(".portfolio-list-wrap");
    var listItem = listWrap.find(".portfolio-list-item");
    if (value == "all") {
      listItem.show();
    } else {
      listItem.not(`.${value}`).hide();
      listWrap.find(`.${value}`).show();
    }
  });

  /* portfolio layer */
  $(".portfolio-list-item").click(function () {
    var val = $(this).data("src");
    $(".layer-wrap")
      .find(`.layer-contents[data-layer='${val}']`)
      .addClass("active");
    $(".layer-wrap").fadeIn(400);
    $("body").addClass("prevent-scroll");
  });

  $(".layer-dimd").click(function () {
    layerClose();
  });

  $(".layer-close").click(function () {
    layerClose();
  });
  /* portfolio [E] */
});

$(window).on("scroll", function () {
  var nowS = $(document).scrollTop();
  contactScroll(nowS);
  portScroll2(nowS);
});

$(window).resize(function () {
  vhresize();
});
