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

  var controller = new ScrollMagic.Controller();

  var scene = new ScrollMagic.Scene({
    triggerElement: "#cat",
    triggerHook: "0",
    /* duration:  "100%"  ,*/ //이 값이 클 수록 천천히 덮어씀
  })
    .setClassToggle(".section-wrap", "type2") //트리거가 시작되면 클래스 추가
    /* .setPin(".intro") */// 트리거에 닿으면 고정시켜줌
    /* .addIndicators() */ // 기준선
    .addTo(controller);

  $(window).resize(function(){
    $('.outside').snowfall('clear');
    $.fall("flake",".outside",3,10,120,1,5);
  });
});
